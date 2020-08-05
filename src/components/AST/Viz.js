import React, { Fragment } from "react";
import { parse } from "@babel/parser";
import { Grid, Menu, Accordion, Segment } from "semantic-ui-react";

/* DFS through AST generated by Babel parser */

function CompositeArr({ k, arr }) {
  const components = arr.map((value, index) => {
    return (
      <Fragment key={index}>
        {typeof value === "object" && value !== null ? (
          <Composite k={k} ast={value} />
        ) : (
          <Primitive k={k} ast={value} />
        )}
      </Fragment>
    );
  });

  return arr.length ? (
    <Accordion.Accordion
      panels={[
        {
          key: 0,
          title: `${k} : [ ${arr.length} element ]`,
          content: components,
        },
      ]}
    />
  ) : (
    <Primitive k={k} val={"[ ]"} />
  );
}

function CompositeObj({ k, obj }) {
  const { type, ...children } = obj;
  const keys = Object.keys(obj);
  const components = Object.entries(children).map((value, index) => {
    const [i, v] = value;
    return (
      <Fragment key={index}>
        {typeof v === "object" && v !== null ? (
          <Composite k={i} ast={v} />
        ) : (
          <Primitive k={i} val={v} />
        )}
      </Fragment>
    );
  });
  const label = type ? type : k;
  return keys.length ? (
    <Accordion.Accordion
      panels={[
        {
          key: 0,
          title: `${label} : { ${keys.join(", ")} }`,
          content: components,
        },
      ]}
    />
  ) : (
    <Primitive k={label} val={"{ }"} />
  );
}

function Composite({ k, ast }) {
  return !Array.isArray(ast) ? (
    <CompositeObj k={k} obj={ast} />
  ) : (
    <CompositeArr k={k} arr={ast} />
  );
}

function Primitive({ k, val }) {
  return (
    <Accordion.Content>
      {k && k + " : "}
      {String(val)}
    </Accordion.Content>
  );
}

function Viz({ code, cursor }) {
  try {
    const ast = parse(code);
    return (
      <Segment attached="bottom">
        <Accordion
          defaultActiveIndex={0}
          panels={[{ key: 0, content: <Composite k={""} ast={ast} /> }]}
          fluid
          styled
        />
      </Segment>
    );
  } catch (err) {
    return <Primitive k={""} val={err.message} />;
  }
}

export default function VizOutput({ code, cursor }) {
  return (
    <Grid.Row>
      <Grid.Column>
        <Menu attached="top" tabular inverted>
          <Menu.Item>AST Explorer</Menu.Item>
        </Menu>
        <Viz code={code} cursor={cursor} />
      </Grid.Column>
    </Grid.Row>
  );
}
