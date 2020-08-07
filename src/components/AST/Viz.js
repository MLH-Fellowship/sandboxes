import React, {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { parse } from "@babel/parser";
import {
  Accordion,
  Grid,
  Menu,
  Popup,
  Segment,
  Checkbox,
} from "semantic-ui-react";
import UglyPopup, { lookUpNodeType } from "../Popup";

// DFS through AST generated by Babel parser

const SettingsContext = createContext();

// This is the component for a sub-tree of an object in the AST.
function CompositeObj({ k, obj, cursor, setPos }) {
  const { hideTypes, hideLocation } = useContext(SettingsContext);
  // setPos is memoized so dependency is just to placate warnings.
  const content = useMemo(() => {
    // Memoization should be helpful when parts of the tree are the same.
    return Object.entries(obj).map(([i, v], index) => {
      // i, v are key and value.
      if (hideTypes && i === "type") return null;
      if (hideLocation && i === "loc") return null;
      return (
        <Fragment key={index}>
          {typeof v === "object" && v !== null ? (
            <Composite k={i} ast={v} cursor={cursor} setPos={setPos} />
          ) : (
            <Primitive k={i} val={v} />
          )}
        </Fragment>
      );
    });
  }, [obj, cursor, setPos]);

  const { type, loc, value, name } = obj;
  const label = type ? type : k;
  const keys = Object.keys(obj);
  const [active, setActive] = useState(false);
  const highlight = useMemo(() => {
    return (value !== undefined || name !== undefined || !active) &&
      isBound(cursor, loc)
      ? "highlight"
      : "";
  }, [active, cursor, loc, value, name]);

  const popup = lookUpNodeType(type);
  const title = `${label} : { ${keys.join(", ")} } ${highlight}`;
  return keys.length ? (
    <Accordion.Accordion
      onTitleClick={() => {
        loc &&
          setPos({
            anchor: fixLoc(loc).end,
            head: fixLoc(loc).start,
          });
        setActive(active => !active);
      }}
      panels={[
        {
          key: 0,
          title: popup.length ? (
            <Accordion.Title
              content={
                <Popup
                  header={type}
                  content={<UglyPopup def={popup} />}
                  on={"hover"}
                  trigger={<span>{title}</span>}
                />
              }
            />
          ) : (
            title
          ),
          content: content,
        },
      ]}
    />
  ) : (
    <Primitive k={label} val={"{ }"} />
  );
}

// This is the component for the sub-tree of an array.
function CompositeArr({ k, arr, cursor, setPos }) {
  // setPos is memoized so dependency is just to placate warnings.
  const components = useMemo(() => {
    // Memoization should be helpful when parts of the tree are the same.
    return arr.map((value, index) => {
      return (
        <Fragment key={index}>
          {typeof value === "object" && value !== null ? (
            <Composite k={k} ast={value} cursor={cursor} setPos={setPos} />
          ) : (
            <Primitive k={k} ast={value} />
          )}
        </Fragment>
      );
    });
  }, [k, arr, cursor, setPos]);

  const [active, setActive] = useState(false);
  const highlight = useMemo(() => {
    return !active && arr.some(x => isBound(cursor, x.loc)) ? "highlight" : "";
  }, [active, arr, cursor]);

  return arr.length ? (
    <Accordion.Accordion
      onTitleClick={() => {
        setActive(active => !active);
      }}
      panels={[
        {
          key: 0,
          title: `${k} : [ ${arr.length} element ] ${highlight}`,
          content: components,
        },
      ]}
    />
  ) : (
    <Primitive k={k} val={"[ ]"} />
  );
}

// This is the overhead component for objects and arrays in the AST object.
function Composite({ k, ast, cursor, setPos }) {
  return !Array.isArray(ast) ? (
    <CompositeObj k={k} obj={ast} cursor={cursor} setPos={setPos} />
  ) : (
    <CompositeArr k={k} arr={ast} cursor={cursor} setPos={setPos} />
  );
}

// This is the base case for the recursion when the AST is just a leaf node.
function Primitive({ k, val }) {
  const { hideLocation } = useContext(SettingsContext);
  if (hideLocation && (k === "start" || k === "end")) return null;
  return (
    <Accordion.Content>
      {k && k + " : "}
      {String(val)}
    </Accordion.Content>
  );
}

function Viz({ code, cursor, setCursorAST }) {
  const setPos = useCallback(setCursorAST);
  const [hideEmpty, setHideEmpty] = useState(false);
  const [hideTypes, setHideTypes] = useState(false);
  const [hideLocation, setHideLocation] = useState(false);
  const settings = { hideEmpty, hideTypes, hideLocation };
  try {
    const ast = parse(code);
    const panels = [
      {
        key: 0,
        content: <Composite k={""} ast={ast} cursor={cursor} setPos={setPos} />,
      },
    ];
    return (
      <Segment attached="bottom">
        <Grid>
          <Grid.Column>
            <Checkbox
              toggle
              type="checkbox"
              label="Hide Empty"
              onClick={() => setHideEmpty(hideEmpty => !hideEmpty)}
            />
          </Grid.Column>
          <Grid.Column>
            <Checkbox
              toggle
              type="checkbox"
              label="Hide Types"
              onClick={() => setHideTypes(hideTypes => !hideTypes)}
            />
          </Grid.Column>
          <Grid.Column>
            <Checkbox
              toggle
              type="checkbox"
              label="Hide Location"
              onClick={() => setHideLocation(hideLocation => !hideLocation)}
            />
          </Grid.Column>
        </Grid>
        <SettingsContext.Provider value={settings}>
          <Accordion panels={panels} fluid styled />
        </SettingsContext.Provider>
      </Segment>
    );
  } catch (err) {
    return <Primitive k={""} val={err.message} />;
  }
}

export default function VizOutput({ code, cursor, setCursorAST }) {
  const cs = { line: cursor.line + 1, ch: cursor.ch };
  return (
    <Grid.Row>
      <Grid.Column>
        <Menu attached="top" tabular inverted>
          <Menu.Item>AST Explorer</Menu.Item>
        </Menu>
        <Viz code={code} cursor={cs} setCursorAST={setCursorAST} />
      </Grid.Column>
    </Grid.Row>
  );
}

/* 
Keyword highlighting is done by checking for the cursor position in the code 
editor and finding the nodes that contain that position. If both the start and
end values for the row or column are zero, all rows or columns are included.
If a component is toggled, that component will not be highlighted unless the
tree is at the lowest depth, indicated by a value property.
*/
function isBound(cursor, bounds) {
  if (bounds === undefined) return false;

  const { line, ch } = cursor;
  const { start, end } = bounds;

  const cols = start.column + end.column === 0;

  if (line === start.line && ch >= start.column) return true;
  if (line === end.line && (ch <= start.column || cols)) return true;
  if (start.line < line && line < end.line) return true;

  return false;
}

// Location for AST is off by one for line.
function fixLoc(loc) {
  return {
    start: { line: loc.start.line - 1, ch: loc.start.column },
    end: { line: loc.end.line - 1, ch: loc.end.column },
  };
}
