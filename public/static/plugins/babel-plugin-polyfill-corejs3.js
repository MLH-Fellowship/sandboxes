!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).babelPluginPolyfillCorejs3=e()}}(function(){return function(){return function e(t,r,s){function n(a,o){if(!r[a]){if(!t[a]){var l="function"==typeof require&&require;if(!o&&l)return l(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var p=r[a]={exports:{}};t[a][0].call(p.exports,function(e){return n(t[a][1][e]||e)},p,p.exports,e,t,r,s)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<s.length;a++)n(s[a]);return n}}()({1:[function(e,t,r){(function(r){"use strict";var s=e("object-assign");function n(e,t){if(e===t)return 0;for(var r=e.length,s=t.length,n=0,i=Math.min(r,s);n<i;++n)if(e[n]!==t[n]){r=e[n],s=t[n];break}return r<s?-1:s<r?1:0}function i(e){return r.Buffer&&"function"==typeof r.Buffer.isBuffer?r.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var a=e("util/"),o=Object.prototype.hasOwnProperty,l=Array.prototype.slice,c="foo"===function(){}.name;function p(e){return Object.prototype.toString.call(e)}function u(e){return!i(e)&&("function"==typeof r.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var d=t.exports=b,f=/\s*function\s+([^\(\s]*)\s*/;function h(e){if(a.isFunction(e)){if(c)return e.name;var t=e.toString().match(f);return t&&t[1]}}function y(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function m(e){if(c||!a.isFunction(e))return a.inspect(e);var t=h(e);return"[Function"+(t?": "+t:"")+"]"}function g(e,t,r,s,n){throw new d.AssertionError({message:r,actual:e,expected:t,operator:s,stackStartFunction:n})}function b(e,t){e||g(e,!0,t,"==",d.ok)}function x(e,t,r,s){if(e===t)return!0;if(i(e)&&i(t))return 0===n(e,t);if(a.isDate(e)&&a.isDate(t))return e.getTime()===t.getTime();if(a.isRegExp(e)&&a.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(u(e)&&u(t)&&p(e)===p(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===n(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(i(e)!==i(t))return!1;var o=(s=s||{actual:[],expected:[]}).actual.indexOf(e);return-1!==o&&o===s.expected.indexOf(t)||(s.actual.push(e),s.expected.push(t),function(e,t,r,s){if(null==e||null==t)return!1;if(a.isPrimitive(e)||a.isPrimitive(t))return e===t;if(r&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var n=v(e),i=v(t);if(n&&!i||!n&&i)return!1;if(n)return e=l.call(e),t=l.call(t),x(e,t,r);var o,c,p=w(e),u=w(t);if(p.length!==u.length)return!1;for(p.sort(),u.sort(),c=p.length-1;c>=0;c--)if(p[c]!==u[c])return!1;for(c=p.length-1;c>=0;c--)if(o=p[c],!x(e[o],t[o],r,s))return!1;return!0}(e,t,r,s))}return r?e===t:e==t}function v(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function E(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function T(e,t,r,s){var n;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(s=r,r=null),n=function(e){var t;try{e()}catch(e){t=e}return t}(t),s=(r&&r.name?" ("+r.name+").":".")+(s?" "+s:"."),e&&!n&&g(n,r,"Missing expected exception"+s);var i="string"==typeof s,o=!e&&n&&!r;if((!e&&a.isError(n)&&i&&E(n,r)||o)&&g(n,r,"Got unwanted exception"+s),e&&n&&r&&!E(n,r)||!e&&n)throw n}d.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=y(m((t=this).actual),128)+" "+t.operator+" "+y(m(t.expected),128),this.generatedMessage=!0);var r=e.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,r);else{var s=new Error;if(s.stack){var n=s.stack,i=h(r),a=n.indexOf("\n"+i);if(a>=0){var o=n.indexOf("\n",a+1);n=n.substring(o+1)}this.stack=n}}},a.inherits(d.AssertionError,Error),d.fail=g,d.ok=b,d.equal=function(e,t,r){e!=t&&g(e,t,r,"==",d.equal)},d.notEqual=function(e,t,r){e==t&&g(e,t,r,"!=",d.notEqual)},d.deepEqual=function(e,t,r){x(e,t,!1)||g(e,t,r,"deepEqual",d.deepEqual)},d.deepStrictEqual=function(e,t,r){x(e,t,!0)||g(e,t,r,"deepStrictEqual",d.deepStrictEqual)},d.notDeepEqual=function(e,t,r){x(e,t,!1)&&g(e,t,r,"notDeepEqual",d.notDeepEqual)},d.notDeepStrictEqual=function e(t,r,s){x(t,r,!0)&&g(t,r,s,"notDeepStrictEqual",e)},d.strictEqual=function(e,t,r){e!==t&&g(e,t,r,"===",d.strictEqual)},d.notStrictEqual=function(e,t,r){e===t&&g(e,t,r,"!==",d.notStrictEqual)},d.throws=function(e,t,r){T(!0,e,t,r)},d.doesNotThrow=function(e,t,r){T(!1,e,t,r)},d.ifError=function(e){if(e)throw e},d.strict=s(function e(t,r){t||g(t,!0,r,"==",e)},d,{equal:d.strictEqual,deepEqual:d.deepStrictEqual,notEqual:d.notStrictEqual,notDeepEqual:d.notDeepStrictEqual}),d.strict.strict=d.strict;var w=Object.keys||function(e){var t=[];for(var r in e)o.call(e,r)&&t.push(r);return t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"object-assign":11,"util/":4}],2:[function(e,t,r){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],3:[function(e,t,r){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],4:[function(e,t,r){(function(t,s){var n=/%[sdj%]/g;r.format=function(e){if(!g(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(o(arguments[r]));return t.join(" ")}r=1;for(var s=arguments,i=s.length,a=String(e).replace(n,function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(s[r++]);case"%d":return Number(s[r++]);case"%j":try{return JSON.stringify(s[r++])}catch(e){return"[Circular]"}default:return e}}),l=s[r];r<i;l=s[++r])y(l)||!v(l)?a+=" "+l:a+=" "+o(l);return a},r.deprecate=function(e,n){if(b(s.process))return function(){return r.deprecate(e,n).apply(this,arguments)};if(!0===t.noDeprecation)return e;var i=!1;return function(){if(!i){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),i=!0}return e.apply(this,arguments)}};var i,a={};function o(e,t){var s={seen:[],stylize:c};return arguments.length>=3&&(s.depth=arguments[2]),arguments.length>=4&&(s.colors=arguments[3]),h(t)?s.showHidden=t:t&&r._extend(s,t),b(s.showHidden)&&(s.showHidden=!1),b(s.depth)&&(s.depth=2),b(s.colors)&&(s.colors=!1),b(s.customInspect)&&(s.customInspect=!0),s.colors&&(s.stylize=l),p(s,e,s.depth)}function l(e,t){var r=o.styles[t];return r?"["+o.colors[r][0]+"m"+e+"["+o.colors[r][1]+"m":e}function c(e,t){return e}function p(e,t,s){if(e.customInspect&&t&&w(t.inspect)&&t.inspect!==r.inspect&&(!t.constructor||t.constructor.prototype!==t)){var n=t.inspect(s,e);return g(n)||(n=p(e,n,s)),n}var i=function(e,t){if(b(t))return e.stylize("undefined","undefined");if(g(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(m(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(y(t))return e.stylize("null","null")}(e,t);if(i)return i;var a=Object.keys(t),o=function(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(t)),T(t)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return u(t);if(0===a.length){if(w(t)){var l=t.name?": "+t.name:"";return e.stylize("[Function"+l+"]","special")}if(x(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(E(t))return e.stylize(Date.prototype.toString.call(t),"date");if(T(t))return u(t)}var c,v="",j=!1,S=["{","}"];(f(t)&&(j=!0,S=["[","]"]),w(t))&&(v=" [Function"+(t.name?": "+t.name:"")+"]");return x(t)&&(v=" "+RegExp.prototype.toString.call(t)),E(t)&&(v=" "+Date.prototype.toUTCString.call(t)),T(t)&&(v=" "+u(t)),0!==a.length||j&&0!=t.length?s<0?x(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),c=j?function(e,t,r,s,n){for(var i=[],a=0,o=t.length;a<o;++a)_(t,String(a))?i.push(d(e,t,r,s,String(a),!0)):i.push("");return n.forEach(function(n){n.match(/^\d+$/)||i.push(d(e,t,r,s,n,!0))}),i}(e,t,s,o,a):a.map(function(r){return d(e,t,s,o,r,j)}),e.seen.pop(),function(e,t,r){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(c,v,S)):S[0]+v+S[1]}function u(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,r,s,n,i){var a,o,l;if((l=Object.getOwnPropertyDescriptor(t,n)||{value:t[n]}).get?o=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(o=e.stylize("[Setter]","special")),_(s,n)||(a="["+n+"]"),o||(e.seen.indexOf(l.value)<0?(o=y(r)?p(e,l.value,null):p(e,l.value,r-1)).indexOf("\n")>-1&&(o=i?o.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+o.split("\n").map(function(e){return"   "+e}).join("\n")):o=e.stylize("[Circular]","special")),b(a)){if(i&&n.match(/^\d+$/))return o;(a=JSON.stringify(""+n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+o}function f(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function y(e){return null===e}function m(e){return"number"==typeof e}function g(e){return"string"==typeof e}function b(e){return void 0===e}function x(e){return v(e)&&"[object RegExp]"===j(e)}function v(e){return"object"==typeof e&&null!==e}function E(e){return v(e)&&"[object Date]"===j(e)}function T(e){return v(e)&&("[object Error]"===j(e)||e instanceof Error)}function w(e){return"function"==typeof e}function j(e){return Object.prototype.toString.call(e)}function S(e){return e<10?"0"+e.toString(10):e.toString(10)}r.debuglog=function(e){if(b(i)&&(i=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!a[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var s=t.pid;a[e]=function(){var t=r.format.apply(r,arguments);console.error("%s %d: %s",e,s,t)}}else a[e]=function(){};return a[e]},r.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},r.isArray=f,r.isBoolean=h,r.isNull=y,r.isNullOrUndefined=function(e){return null==e},r.isNumber=m,r.isString=g,r.isSymbol=function(e){return"symbol"==typeof e},r.isUndefined=b,r.isRegExp=x,r.isObject=v,r.isDate=E,r.isError=T,r.isFunction=w,r.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},r.isBuffer=e("./support/isBuffer");var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r.log=function(){var e,t;console.log("%s - %s",(e=new Date,t=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":"),[e.getDate(),P[e.getMonth()],t].join(" ")),r.format.apply(r,arguments))},r.inherits=e("inherits"),r._extend=function(e,t){if(!t||!v(t))return e;for(var r=Object.keys(t),s=r.length;s--;)e[r[s]]=t[r[s]];return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":3,_process:13,inherits:2}],5:[function(e,t,r){"use strict";r.byteLength=function(e){var t=c(e),r=t[0],s=t[1];return 3*(r+s)/4-s},r.toByteArray=function(e){var t,r,s=c(e),a=s[0],o=s[1],l=new i(function(e,t,r){return 3*(t+r)/4-r}(0,a,o)),p=0,u=o>0?a-4:a;for(r=0;r<u;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],l[p++]=t>>16&255,l[p++]=t>>8&255,l[p++]=255&t;2===o&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,l[p++]=255&t);1===o&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,l[p++]=t>>8&255,l[p++]=255&t);return l},r.fromByteArray=function(e){for(var t,r=e.length,n=r%3,i=[],a=0,o=r-n;a<o;a+=16383)i.push(p(e,a,a+16383>o?o:a+16383));1===n?(t=e[r-1],i.push(s[t>>2]+s[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(s[t>>10]+s[t>>4&63]+s[t<<2&63]+"="));return i.join("")};for(var s=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,l=a.length;o<l;++o)s[o]=a[o],n[a.charCodeAt(o)]=o;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function p(e,t,r){for(var n,i,a=[],o=t;o<r;o+=3)n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),a.push(s[(i=n)>>18&63]+s[i>>12&63]+s[i>>6&63]+s[63&i]);return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},{}],6:[function(e,t,r){},{}],7:[function(e,t,r){arguments[4][6][0].apply(r,arguments)},{dup:6}],8:[function(e,t,r){(function(t){"use strict";var s=e("base64-js"),n=e("ieee754");r.Buffer=t,r.SlowBuffer=function(e){+e!=e&&(e=0);return t.alloc(+e)},r.INSPECT_MAX_BYTES=50;var i=2147483647;function a(e){if(e>i)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return r.__proto__=t.prototype,r}function t(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return c(e)}return o(e,t,r)}function o(e,r,s){if("string"==typeof e)return function(e,r){"string"==typeof r&&""!==r||(r="utf8");if(!t.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var s=0|d(e,r),n=a(s),i=n.write(e,r);i!==s&&(n=n.slice(0,i));return n}(e,r);if(ArrayBuffer.isView(e))return p(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(F(e,ArrayBuffer)||e&&F(e.buffer,ArrayBuffer))return function(e,r,s){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(s||0))throw new RangeError('"length" is outside of buffer bounds');var n;n=void 0===r&&void 0===s?new Uint8Array(e):void 0===s?new Uint8Array(e,r):new Uint8Array(e,r,s);return n.__proto__=t.prototype,n}(e,r,s);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return t.from(n,r,s);var i=function(e){if(t.isBuffer(e)){var r=0|u(e.length),s=a(r);return 0===s.length?s:(e.copy(s,0,0,r),s)}if(void 0!==e.length)return"number"!=typeof e.length||U(e.length)?a(0):p(e);if("Buffer"===e.type&&Array.isArray(e.data))return p(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return t.from(e[Symbol.toPrimitive]("string"),r,s);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return l(e),a(e<0?0:0|u(e))}function p(e){for(var t=e.length<0?0:0|u(e.length),r=a(t),s=0;s<t;s+=1)r[s]=255&e[s];return r}function u(e){if(e>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return 0|e}function d(e,r){if(t.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||F(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var s=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===s)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return s;case"utf8":case"utf-8":return L(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*s;case"hex":return s>>>1;case"base64":return B(e).length;default:if(i)return n?-1:L(e).length;r=(""+r).toLowerCase(),i=!0}}function f(e,t,r){var s=e[t];e[t]=e[r],e[r]=s}function h(e,r,s,n,i){if(0===e.length)return-1;if("string"==typeof s?(n=s,s=0):s>2147483647?s=2147483647:s<-2147483648&&(s=-2147483648),U(s=+s)&&(s=i?0:e.length-1),s<0&&(s=e.length+s),s>=e.length){if(i)return-1;s=e.length-1}else if(s<0){if(!i)return-1;s=0}if("string"==typeof r&&(r=t.from(r,n)),t.isBuffer(r))return 0===r.length?-1:y(e,r,s,n,i);if("number"==typeof r)return r&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,r,s):Uint8Array.prototype.lastIndexOf.call(e,r,s):y(e,[r],s,n,i);throw new TypeError("val must be string, number or Buffer")}function y(e,t,r,s,n){var i,a=1,o=e.length,l=t.length;if(void 0!==s&&("ucs2"===(s=String(s).toLowerCase())||"ucs-2"===s||"utf16le"===s||"utf-16le"===s)){if(e.length<2||t.length<2)return-1;a=2,o/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(n){var p=-1;for(i=r;i<o;i++)if(c(e,i)===c(t,-1===p?0:i-p)){if(-1===p&&(p=i),i-p+1===l)return p*a}else-1!==p&&(i-=i-p),p=-1}else for(r+l>o&&(r=o-l),i=r;i>=0;i--){for(var u=!0,d=0;d<l;d++)if(c(e,i+d)!==c(t,d)){u=!1;break}if(u)return i}return-1}function m(e,t,r,s){r=Number(r)||0;var n=e.length-r;s?(s=Number(s))>n&&(s=n):s=n;var i=t.length;s>i/2&&(s=i/2);for(var a=0;a<s;++a){var o=parseInt(t.substr(2*a,2),16);if(U(o))return a;e[r+a]=o}return a}function g(e,t,r,s){return R(L(t,e.length-r),e,r,s)}function b(e,t,r,s){return R(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,s)}function x(e,t,r,s){return b(e,t,r,s)}function v(e,t,r,s){return R(B(t),e,r,s)}function E(e,t,r,s){return R(function(e,t){for(var r,s,n,i=[],a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),s=r>>8,n=r%256,i.push(n),i.push(s);return i}(t,e.length-r),e,r,s)}function T(e,t,r){return 0===t&&r===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,r))}function w(e,t,r){r=Math.min(e.length,r);for(var s=[],n=t;n<r;){var i,a,o,l,c=e[n],p=null,u=c>239?4:c>223?3:c>191?2:1;if(n+u<=r)switch(u){case 1:c<128&&(p=c);break;case 2:128==(192&(i=e[n+1]))&&(l=(31&c)<<6|63&i)>127&&(p=l);break;case 3:i=e[n+1],a=e[n+2],128==(192&i)&&128==(192&a)&&(l=(15&c)<<12|(63&i)<<6|63&a)>2047&&(l<55296||l>57343)&&(p=l);break;case 4:i=e[n+1],a=e[n+2],o=e[n+3],128==(192&i)&&128==(192&a)&&128==(192&o)&&(l=(15&c)<<18|(63&i)<<12|(63&a)<<6|63&o)>65535&&l<1114112&&(p=l)}null===p?(p=65533,u=1):p>65535&&(p-=65536,s.push(p>>>10&1023|55296),p=56320|1023&p),s.push(p),n+=u}return function(e){var t=e.length;if(t<=j)return String.fromCharCode.apply(String,e);var r="",s=0;for(;s<t;)r+=String.fromCharCode.apply(String,e.slice(s,s+=j));return r}(s)}r.kMaxLength=i,t.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()}catch(e){return!1}}(),t.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(t.prototype,"parent",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.buffer}}),Object.defineProperty(t.prototype,"offset",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&t[Symbol.species]===t&&Object.defineProperty(t,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),t.poolSize=8192,t.from=function(e,t,r){return o(e,t,r)},t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array,t.alloc=function(e,t,r){return function(e,t,r){return l(e),e<=0?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)}(e,t,r)},t.allocUnsafe=function(e){return c(e)},t.allocUnsafeSlow=function(e){return c(e)},t.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==t.prototype},t.compare=function(e,r){if(F(e,Uint8Array)&&(e=t.from(e,e.offset,e.byteLength)),F(r,Uint8Array)&&(r=t.from(r,r.offset,r.byteLength)),!t.isBuffer(e)||!t.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var s=e.length,n=r.length,i=0,a=Math.min(s,n);i<a;++i)if(e[i]!==r[i]){s=e[i],n=r[i];break}return s<n?-1:n<s?1:0},t.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return t.alloc(0);var s;if(void 0===r)for(r=0,s=0;s<e.length;++s)r+=e[s].length;var n=t.allocUnsafe(r),i=0;for(s=0;s<e.length;++s){var a=e[s];if(F(a,Uint8Array)&&(a=t.from(a)),!t.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i),i+=a.length}return n},t.byteLength=d,t.prototype._isBuffer=!0,t.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)f(this,t,t+1);return this},t.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)f(this,t,t+3),f(this,t+1,t+2);return this},t.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)f(this,t,t+7),f(this,t+1,t+6),f(this,t+2,t+5),f(this,t+3,t+4);return this},t.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?w(this,0,e):function(e,t,r){var s=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return _(this,t,r);case"utf8":case"utf-8":return w(this,t,r);case"ascii":return S(this,t,r);case"latin1":case"binary":return P(this,t,r);case"base64":return T(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,r);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}.apply(this,arguments)},t.prototype.toLocaleString=t.prototype.toString,t.prototype.equals=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===t.compare(this,e)},t.prototype.inspect=function(){var e="",t=r.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},t.prototype.compare=function(e,r,s,n,i){if(F(e,Uint8Array)&&(e=t.from(e,e.offset,e.byteLength)),!t.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===r&&(r=0),void 0===s&&(s=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||s>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=s)return 0;if(n>=i)return-1;if(r>=s)return 1;if(this===e)return 0;for(var a=(i>>>=0)-(n>>>=0),o=(s>>>=0)-(r>>>=0),l=Math.min(a,o),c=this.slice(n,i),p=e.slice(r,s),u=0;u<l;++u)if(c[u]!==p[u]){a=c[u],o=p[u];break}return a<o?-1:o<a?1:0},t.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},t.prototype.indexOf=function(e,t,r){return h(this,e,t,r,!0)},t.prototype.lastIndexOf=function(e,t,r){return h(this,e,t,r,!1)},t.prototype.write=function(e,t,r,s){if(void 0===t)s="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)s=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===s&&(s="utf8")):(s=r,r=void 0)}var n=this.length-t;if((void 0===r||r>n)&&(r=n),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var i=!1;;)switch(s){case"hex":return m(this,e,t,r);case"utf8":case"utf-8":return g(this,e,t,r);case"ascii":return b(this,e,t,r);case"latin1":case"binary":return x(this,e,t,r);case"base64":return v(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),i=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var j=4096;function S(e,t,r){var s="";r=Math.min(e.length,r);for(var n=t;n<r;++n)s+=String.fromCharCode(127&e[n]);return s}function P(e,t,r){var s="";r=Math.min(e.length,r);for(var n=t;n<r;++n)s+=String.fromCharCode(e[n]);return s}function _(e,t,r){var s=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>s)&&(r=s);for(var n="",i=t;i<r;++i)n+=D(e[i]);return n}function A(e,t,r){for(var s=e.slice(t,r),n="",i=0;i<s.length;i+=2)n+=String.fromCharCode(s[i]+256*s[i+1]);return n}function O(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function k(e,r,s,n,i,a){if(!t.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<a)throw new RangeError('"value" argument is out of bounds');if(s+n>e.length)throw new RangeError("Index out of range")}function C(e,t,r,s,n,i){if(r+s>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function I(e,t,r,s,i){return t=+t,r>>>=0,i||C(e,0,r,4),n.write(e,t,r,s,23,4),r+4}function N(e,t,r,s,i){return t=+t,r>>>=0,i||C(e,0,r,8),n.write(e,t,r,s,52,8),r+8}t.prototype.slice=function(e,r){var s=this.length;(e=~~e)<0?(e+=s)<0&&(e=0):e>s&&(e=s),(r=void 0===r?s:~~r)<0?(r+=s)<0&&(r=0):r>s&&(r=s),r<e&&(r=e);var n=this.subarray(e,r);return n.__proto__=t.prototype,n},t.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);for(var s=this[e],n=1,i=0;++i<t&&(n*=256);)s+=this[e+i]*n;return s},t.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);for(var s=this[e+--t],n=1;t>0&&(n*=256);)s+=this[e+--t]*n;return s},t.prototype.readUInt8=function(e,t){return e>>>=0,t||O(e,1,this.length),this[e]},t.prototype.readUInt16LE=function(e,t){return e>>>=0,t||O(e,2,this.length),this[e]|this[e+1]<<8},t.prototype.readUInt16BE=function(e,t){return e>>>=0,t||O(e,2,this.length),this[e]<<8|this[e+1]},t.prototype.readUInt32LE=function(e,t){return e>>>=0,t||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},t.prototype.readUInt32BE=function(e,t){return e>>>=0,t||O(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},t.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);for(var s=this[e],n=1,i=0;++i<t&&(n*=256);)s+=this[e+i]*n;return s>=(n*=128)&&(s-=Math.pow(2,8*t)),s},t.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);for(var s=t,n=1,i=this[e+--s];s>0&&(n*=256);)i+=this[e+--s]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*t)),i},t.prototype.readInt8=function(e,t){return e>>>=0,t||O(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},t.prototype.readInt16LE=function(e,t){e>>>=0,t||O(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt16BE=function(e,t){e>>>=0,t||O(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt32LE=function(e,t){return e>>>=0,t||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},t.prototype.readInt32BE=function(e,t){return e>>>=0,t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},t.prototype.readFloatLE=function(e,t){return e>>>=0,t||O(e,4,this.length),n.read(this,e,!0,23,4)},t.prototype.readFloatBE=function(e,t){return e>>>=0,t||O(e,4,this.length),n.read(this,e,!1,23,4)},t.prototype.readDoubleLE=function(e,t){return e>>>=0,t||O(e,8,this.length),n.read(this,e,!0,52,8)},t.prototype.readDoubleBE=function(e,t){return e>>>=0,t||O(e,8,this.length),n.read(this,e,!1,52,8)},t.prototype.writeUIntLE=function(e,t,r,s){(e=+e,t>>>=0,r>>>=0,s)||k(this,e,t,r,Math.pow(2,8*r)-1,0);var n=1,i=0;for(this[t]=255&e;++i<r&&(n*=256);)this[t+i]=e/n&255;return t+r},t.prototype.writeUIntBE=function(e,t,r,s){(e=+e,t>>>=0,r>>>=0,s)||k(this,e,t,r,Math.pow(2,8*r)-1,0);var n=r-1,i=1;for(this[t+n]=255&e;--n>=0&&(i*=256);)this[t+n]=e/i&255;return t+r},t.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,1,255,0),this[t]=255&e,t+1},t.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},t.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},t.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},t.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},t.prototype.writeIntLE=function(e,t,r,s){if(e=+e,t>>>=0,!s){var n=Math.pow(2,8*r-1);k(this,e,t,r,n-1,-n)}var i=0,a=1,o=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+r},t.prototype.writeIntBE=function(e,t,r,s){if(e=+e,t>>>=0,!s){var n=Math.pow(2,8*r-1);k(this,e,t,r,n-1,-n)}var i=r-1,a=1,o=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+r},t.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},t.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},t.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},t.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},t.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||k(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},t.prototype.writeFloatLE=function(e,t,r){return I(this,e,t,!0,r)},t.prototype.writeFloatBE=function(e,t,r){return I(this,e,t,!1,r)},t.prototype.writeDoubleLE=function(e,t,r){return N(this,e,t,!0,r)},t.prototype.writeDoubleBE=function(e,t,r){return N(this,e,t,!1,r)},t.prototype.copy=function(e,r,s,n){if(!t.isBuffer(e))throw new TypeError("argument should be a Buffer");if(s||(s=0),n||0===n||(n=this.length),r>=e.length&&(r=e.length),r||(r=0),n>0&&n<s&&(n=s),n===s)return 0;if(0===e.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-r<n-s&&(n=e.length-r+s);var i=n-s;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,s,n);else if(this===e&&s<r&&r<n)for(var a=i-1;a>=0;--a)e[a+r]=this[a+s];else Uint8Array.prototype.set.call(e,this.subarray(s,n),r);return i},t.prototype.fill=function(e,r,s,n){if("string"==typeof e){if("string"==typeof r?(n=r,r=0,s=this.length):"string"==typeof s&&(n=s,s=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!t.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e&&(e&=255);if(r<0||this.length<r||this.length<s)throw new RangeError("Out of range index");if(s<=r)return this;var a;if(r>>>=0,s=void 0===s?this.length:s>>>0,e||(e=0),"number"==typeof e)for(a=r;a<s;++a)this[a]=e;else{var o=t.isBuffer(e)?e:t.from(e,n),l=o.length;if(0===l)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<s-r;++a)this[a+r]=o[a%l]}return this};var M=/[^+\/0-9A-Za-z-_]/g;function D(e){return e<16?"0"+e.toString(16):e.toString(16)}function L(e,t){var r;t=t||1/0;for(var s=e.length,n=null,i=[],a=0;a<s;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!n){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===s){(t-=3)>-1&&i.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),n=r;continue}r=65536+(n-55296<<10|r-56320)}else n&&(t-=3)>-1&&i.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function B(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function R(e,t,r,s){for(var n=0;n<s&&!(n+r>=t.length||n>=e.length);++n)t[n+r]=e[n];return n}function F(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function U(e){return e!=e}}).call(this,e("buffer").Buffer)},{"base64-js":5,buffer:8,ieee754:9}],9:[function(e,t,r){r.read=function(e,t,r,s,n){var i,a,o=8*n-s-1,l=(1<<o)-1,c=l>>1,p=-7,u=r?n-1:0,d=r?-1:1,f=e[t+u];for(u+=d,i=f&(1<<-p)-1,f>>=-p,p+=o;p>0;i=256*i+e[t+u],u+=d,p-=8);for(a=i&(1<<-p)-1,i>>=-p,p+=s;p>0;a=256*a+e[t+u],u+=d,p-=8);if(0===i)i=1-c;else{if(i===l)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,s),i-=c}return(f?-1:1)*a*Math.pow(2,i-s)},r.write=function(e,t,r,s,n,i){var a,o,l,c=8*i-n-1,p=(1<<c)-1,u=p>>1,d=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:i-1,h=s?1:-1,y=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,a=p):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),(t+=a+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(a++,l/=2),a+u>=p?(o=0,a=p):a+u>=1?(o=(t*l-1)*Math.pow(2,n),a+=u):(o=t*Math.pow(2,u-1)*Math.pow(2,n),a=0));n>=8;e[r+f]=255&o,f+=h,o/=256,n-=8);for(a=a<<n|o,c+=n;c>0;e[r+f]=255&a,f+=h,a/=256,c-=8);e[r+f-h]|=128*y}},{}],10:[function(e,t,r){function s(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}t.exports=function(e){return null!=e&&(s(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&s(e.slice(0,0))}(e)||!!e._isBuffer)}},{}],11:[function(e,t,r){"use strict";var s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(e){s[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in r=Object(arguments[l]))n.call(r,c)&&(o[c]=r[c]);if(s){a=s(r);for(var p=0;p<a.length;p++)i.call(r,a[p])&&(o[a[p]]=r[a[p]])}}return o}},{}],12:[function(e,t,r){(function(e){function t(e,t){for(var r=0,s=e.length-1;s>=0;s--){var n=e[s];"."===n?e.splice(s,1):".."===n?(e.splice(s,1),r++):r&&(e.splice(s,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function s(e,t){if(e.filter)return e.filter(t);for(var r=[],s=0;s<e.length;s++)t(e[s],s,e)&&r.push(e[s]);return r}r.resolve=function(){for(var r="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(r=a+"/"+r,n="/"===a.charAt(0))}return(n?"/":"")+(r=t(s(r.split("/"),function(e){return!!e}),!n).join("/"))||"."},r.normalize=function(e){var i=r.isAbsolute(e),a="/"===n(e,-1);return(e=t(s(e.split("/"),function(e){return!!e}),!i).join("/"))||i||(e="."),e&&a&&(e+="/"),(i?"/":"")+e},r.isAbsolute=function(e){return"/"===e.charAt(0)},r.join=function(){var e=Array.prototype.slice.call(arguments,0);return r.normalize(s(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},r.relative=function(e,t){function s(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=r.resolve(e).substr(1),t=r.resolve(t).substr(1);for(var n=s(e.split("/")),i=s(t.split("/")),a=Math.min(n.length,i.length),o=a,l=0;l<a;l++)if(n[l]!==i[l]){o=l;break}var c=[];for(l=o;l<n.length;l++)c.push("..");return(c=c.concat(i.slice(o))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,s=-1,n=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!n){s=i;break}}else n=!1;return-1===s?r?"/":".":r&&1===s?"/":e.slice(0,s)},r.basename=function(e,t){var r=function(e){"string"!=typeof e&&(e+="");var t,r=0,s=-1,n=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!n){r=t+1;break}}else-1===s&&(n=!1,s=t+1);return-1===s?"":e.slice(r,s)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},r.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,s=-1,n=!0,i=0,a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47!==o)-1===s&&(n=!1,s=a+1),46===o?-1===t?t=a:1!==i&&(i=1):-1!==t&&(i=-1);else if(!n){r=a+1;break}}return-1===t||-1===s||0===i||1===i&&t===s-1&&t===r+1?"":e.slice(t,s)};var n="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,e("_process"))},{_process:13}],13:[function(e,t,r){var s,n,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(s===setTimeout)return setTimeout(e,0);if((s===a||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:a}catch(e){s=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,p=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?p=c.concat(p):d=-1,p.length&&h())}function h(){if(!u){var e=l(f);u=!0;for(var t=p.length;t;){for(c=p,p=[];++d<t;)c&&c[d].run();d=-1,t=p.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];p.push(new y(e,t)),1!==p.length||u||l(h)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],14:[function(e,t,r){"use strict";r.__esModule=!0,r.CommonInstanceDependencies=r.InstanceProperties=r.StaticProperties=r.BuiltIns=r.PromiseDependenciesWithIterators=r.PromiseDependencies=r.CommonIterators=void 0;const s=(e,t,r=t[0],s)=>({name:r,pure:e,global:t,exclude:s}),n=e=>s(null,[e,...c]),i=["es.array.iterator","web.dom-collections.iterator"],a=["es.string.iterator",...i];r.CommonIterators=a;const o=["es.object.to-string",...i],l=["es.object.to-string",...a],c=["es.typed-array.copy-within","es.typed-array.every","es.typed-array.fill","es.typed-array.filter","es.typed-array.find","es.typed-array.find-index","es.typed-array.for-each","es.typed-array.includes","es.typed-array.index-of","es.typed-array.iterator","es.typed-array.join","es.typed-array.last-index-of","es.typed-array.map","es.typed-array.reduce","es.typed-array.reduce-right","es.typed-array.reverse","es.typed-array.set","es.typed-array.slice","es.typed-array.some","es.typed-array.sort","es.typed-array.subarray","es.typed-array.to-locale-string","es.typed-array.to-string","es.object.to-string","es.array.iterator","es.array-buffer.slice"],p={from:s(null,["es.typed-array.from"]),of:s(null,["es.typed-array.of"])},u=["es.promise","es.object.to-string"];r.PromiseDependencies=u;const d=[...u,...a];r.PromiseDependenciesWithIterators=d;const f=["es.map","esnext.map.delete-all","esnext.map.every","esnext.map.filter","esnext.map.find","esnext.map.find-key","esnext.map.includes","esnext.map.key-of","esnext.map.map-keys","esnext.map.map-values","esnext.map.merge","esnext.map.reduce","esnext.map.some","esnext.map.update",...l],h=["es.set","esnext.set.add-all","esnext.set.delete-all","esnext.set.difference","esnext.set.every","esnext.set.filter","esnext.set.find","esnext.set.intersection","esnext.set.is-disjoint-from","esnext.set.is-subset-of","esnext.set.is-superset-of","esnext.set.join","esnext.set.map","esnext.set.reduce","esnext.set.some","esnext.set.symmetric-difference","esnext.set.union",...l],y=["es.weak-map","esnext.weak-map.delete-all",...l],m=["es.weak-set","esnext.weak-set.add-all","esnext.weak-set.delete-all",...l],g=["web.url",...l],b={AggregateError:s("aggregate-error",["esnext.aggregate-error",...a]),ArrayBuffer:s(null,["es.array-buffer.constructor","es.array-buffer.slice","es.object.to-string"]),DataView:s(null,["es.data-view","es.array-buffer.slice","es.object.to-string"]),Date:s(null,["es.date.to-string"]),Float32Array:n("es.typed-array.float32-array"),Float64Array:n("es.typed-array.float64-array"),Int8Array:n("es.typed-array.int8-array"),Int16Array:n("es.typed-array.int16-array"),Int32Array:n("es.typed-array.int32-array"),Uint8Array:n("es.typed-array.uint8-array"),Uint8ClampedArray:n("es.typed-array.uint8-clamped-array"),Uint16Array:n("es.typed-array.uint16-array"),Uint32Array:n("es.typed-array.uint32-array"),Map:s("map",f),Number:s(null,["es.number.constructor"]),Observable:s("observable",["esnext.observable","esnext.symbol.observable","es.object.to-string",...l]),Promise:s("promise",u),RegExp:s(null,["es.regexp.constructor","es.regexp.exec","es.regexp.to-string"]),Set:s("set",h),Symbol:s("symbol",["es.symbol","es.symbol.description","es.object.to-string"]),URL:s("url",["web.url",...g]),URLSearchParams:s("url-search-params",g),WeakMap:s("weak-map",y),WeakSet:s("weak-set",m),clearImmediate:s("clear-immediate",["web.immediate"]),compositeKey:s("composite-key",["esnext.composite-key"]),compositeSymbol:s("composite-symbol",["esnext.composite-symbol"]),fetch:s(null,u),globalThis:s("global-this",["esnext.global-this"]),parseFloat:s("parse-float",["es.parse-float"]),parseInt:s("parse-int",["es.parse-int"]),queueMicrotask:s("queue-microtask",["web.queue-microtask"]),setImmediate:s("set-immediate",["web.immediate"]),setInterval:s("set-interval",["web.timers"]),setTimeout:s("set-timeout",["web.timers"])};r.BuiltIns=b;const x={Array:{from:s("array/from",["es.array.from","es.string.iterator"]),isArray:s("array/is-array",["es.array.is-array"]),of:s("array/of",["es.array.of"])},ArrayBuffer:{isView:s(null,["es.array-buffer.is-view"])},Date:{now:s("date/now",["es.date.now"])},JSON:{stringify:s("json/stringify",[],"es.symbol")},Math:{DEG_PER_RAD:s("math/deg-per-rad",["esnext.math.deg-per-rad"]),RAD_PER_DEG:s("math/rad-per-deg",["esnext.math.rad-per-deg"]),acosh:s("math/acosh",["es.math.acosh"]),asinh:s("math/asinh",["es.math.asinh"]),atanh:s("math/atanh",["es.math.atanh"]),cbrt:s("math/cbrt",["es.math.cbrt"]),clamp:s("math/clamp",["esnext.math.clamp"]),clz32:s("math/clz32",["es.math.clz32"]),cosh:s("math/cosh",["es.math.cosh"]),degrees:s("math/degrees",["esnext.math.degrees"]),expm1:s("math/expm1",["es.math.expm1"]),fround:s("math/fround",["es.math.fround"]),fscale:s("math/fscale",["esnext.math.fscale"]),hypot:s("math/hypot",["es.math.hypot"]),iaddh:s("math/iaddh",["esnext.math.iaddh"]),imul:s("math/imul",["es.math.imul"]),imulh:s("math/imulh",["esnext.math.imulh"]),isubh:s("math/isubh",["esnext.math.isubh"]),log10:s("math/log10",["es.math.log1p"]),log1p:s("math/log1p",["es.math.log10"]),log2:s("math/log2",["es.math.log2"]),radians:s("math/radians",["esnext.math.radians"]),scale:s("math/scale",["esnext.math.scale"]),seededPRNG:s("math/seeded-prng",["esnext.math.seeded-prng"]),sign:s("math/sign",["es.math.sign"]),signbit:s("math/signbit",["esnext.math.signbit"]),sinh:s("math/sinh",["es.math.sinh"]),tanh:s("math/tanh",["es.math.tanh"]),trunc:s("math/trunc",["es.math.trunc"]),umulh:s("math/umulh",["esnext.math.umulh"])},Map:{from:s(null,["esnext.map.from",...f]),groupBy:s(null,["esnext.map.group-by",...f]),keyBy:s(null,["esnext.map.key-by",...f]),of:s(null,["esnext.map.of",...f])},Number:{EPSILON:s("number/epsilon",["es.number.epsilon"]),MAX_SAFE_INTEGER:s("number/max-safe-integer",["es.number.min-safe-integer"]),MIN_SAFE_INTEGER:s("number/min-safe-integer",["es.number.max-safe-integer"]),fromString:s("number/from-string",["esnext.number.from-string"]),isFinite:s("number/is-finite",["es.number.is-finite"]),isInteger:s("number/is-integer",["es.number.is-integer"]),isNaN:s("number/is-nan",["es.number.is-safe-integer"]),isSafeInteger:s("number/is-safe-integer",["es.number.is-nan"]),parseFloat:s("number/parse-float",["es.number.parse-float"]),parseInt:s("number/parse-int",["es.number.parse-int"])},Object:{assign:s("object/assign",["es.object.assign"]),create:s("object/create",["es.object.create"]),defineProperties:s("object/define-properties",["es.object.define-properties"]),defineProperty:s("object/define-property",["es.object.define-property"]),entries:s("object/entries",["es.object.entries"]),freeze:s("object/freeze",["es.object.freeze"]),fromEntries:s("object/from-entries",["es.object.from-entries","es.array.iterator"]),getOwnPropertyDescriptor:s("object/get-own-property-descriptor",["es.object.get-own-property-descriptor"]),getOwnPropertyDescriptors:s("object/get-own-property-descriptors",["es.object.get-own-property-descriptors"]),getOwnPropertyNames:s("object/get-own-property-names",["es.object.get-own-property-names"]),getOwnPropertySymbols:s("object/get-own-property-symbols",["es.symbol"]),getPrototypeOf:s("object/get-prototype-of",["es.object.get-prototype-of"]),is:s("object/is",["es.object.is"]),isExtensible:s("object/is-extensible",["es.object.is-extensible"]),isFrozen:s("object/is-frozen",["es.object.is-frozen"]),isSealed:s("object/is-sealed",["es.object.is-sealed"]),keys:s("object/keys",["es.object.keys"]),preventExtensions:s("object/prevent-extensions",["es.object.prevent-extensions"]),seal:s("object/seal",["es.object.seal"]),setPrototypeOf:s("object/set-prototype-of",["es.object.set-prototype-of"]),values:s("object/values",["es.object.values"])},Promise:{all:s(null,d),allSettled:s(null,["esnext.promise.all-settled",...d]),any:s(null,["esnext.promise.any",...d]),race:s(null,d),try:s(null,["esnext.promise.try",...d])},Reflect:{apply:s("reflect/apply",["es.reflect.apply"]),construct:s("reflect/construct",["es.reflect.construct"]),defineMetadata:s("reflect/define-metadata",["esnext.reflect.define-metadata"]),defineProperty:s("reflect/define-property",["es.reflect.define-property"]),deleteMetadata:s("reflect/delete-metadata",["esnext.reflect.delete-metadata"]),deleteProperty:s("reflect/delete-property",["es.reflect.delete-property"]),get:s("reflect/get",["es.reflect.get"]),getMetadata:s("reflect/get-metadata",["esnext.reflect.get-metadata"]),getMetadataKeys:s("reflect/get-metadata-keys",["esnext.reflect.get-metadata-keys"]),getOwnMetadata:s("reflect/get-own-metadata",["esnext.reflect.get-own-metadata"]),getOwnMetadataKeys:s("reflect/get-own-metadata-keys",["esnext.reflect.get-own-metadata-keys"]),getOwnPropertyDescriptor:s("reflect/get-own-property-descriptor",["es.reflect.get-own-property-descriptor"]),getPrototypeOf:s("reflect/get-prototype-of",["es.reflect.get-prototype-of"]),has:s("reflect/has",["es.reflect.has"]),hasMetadata:s("reflect/has-metadata",["esnext.reflect.has-metadata"]),hasOwnMetadata:s("reflect/has-own-metadata",["esnext.reflect.has-own-metadata"]),isExtensible:s("reflect/is-extensible",["es.reflect.is-extensible"]),metadata:s("reflect/metadata",["esnext.reflect.metadata"]),ownKeys:s("reflect/own-keys",["es.reflect.own-keys"]),preventExtensions:s("reflect/prevent-extensions",["es.reflect.prevent-extensions"]),set:s("reflect/set",["es.reflect.set"]),setPrototypeOf:s("reflect/set-prototype-of",["es.reflect.set-prototype-of"])},Set:{from:s(null,["esnext.set.from",...h]),of:s(null,["esnext.set.of",...h])},String:{fromCodePoint:s("string/from-code-point",["es.string.from-code-point"]),raw:s("string/raw",["es.string.raw"])},Symbol:{asyncIterator:s("symbol/async-iterator",["es.symbol.async-iterator"]),dispose:s("symbol/dispose",["esnext.symbol.dispose"]),for:s("symbol/for",[],"es.symbol"),hasInstance:s("symbol/has-instance",["es.symbol.has-instance","es.function.has-instance"]),isConcatSpreadable:s("symbol/is-concat-spreadable",["es.symbol.is-concat-spreadable","es.array.concat"]),iterator:s("symbol/iterator",["es.symbol.iterator",...l]),keyFor:s("symbol/key-for",[],"es.symbol"),match:s("symbol/match",["es.symbol.match","es.string.match"]),observable:s("symbol/observable",["esnext.symbol.observable"]),patternMatch:s("symbol/pattern-match",["esnext.symbol.pattern-match"]),replace:s("symbol/replace",["es.symbol.replace","es.string.replace"]),search:s("symbol/search",["es.symbol.search","es.string.search"]),species:s("symbol/species",["es.symbol.species","es.array.species"]),split:s("symbol/split",["es.symbol.split","es.string.split"]),toPrimitive:s("symbol/to-primitive",["es.symbol.to-primitive","es.date.to-primitive"]),toStringTag:s("symbol/to-string-tag",["es.symbol.to-string-tag","es.object.to-string","es.math.to-string-tag","es.json.to-string-tag"]),unscopables:s("symbol/unscopables",["es.symbol.unscopables"])},WeakMap:{from:s(null,["esnext.weak-map.from",...y]),of:s(null,["esnext.weak-map.of",...y])},WeakSet:{from:s(null,["esnext.weak-set.from",...m]),of:s(null,["esnext.weak-set.of",...m])},Int8Array:p,Uint8Array:p,Uint8ClampedArray:p,Int16Array:p,Uint16Array:p,Int32Array:p,Uint32Array:p,Float32Array:p,Float64Array:p};r.StaticProperties=x;const v={at:s("instance/at",["esnext.string.at"]),anchor:s(null,["es.string.anchor"]),big:s(null,["es.string.big"]),bind:s("instance/bind",["es.function.bind"]),blink:s(null,["es.string.blink"]),bold:s(null,["es.string.bold"]),codePointAt:s("instance/code-point-at",["es.string.code-point-at"]),codePoints:s("instance/code-points",["esnext.string.code-points"]),concat:s("instance/concat",["es.array.concat"],void 0,["String"]),copyWithin:s("instance/copy-within",["es.array.copy-within"]),description:s(null,["es.symbol","es.symbol.description"]),endsWith:s("instance/ends-with",["es.string.ends-with"]),entries:s("instance/entries",o),every:s("instance/every",["es.array.every"]),exec:s(null,["es.regexp.exec"]),fill:s("instance/fill",["es.array.fill"]),filter:s("instance/filter",["es.array.filter"]),finally:s(null,["es.promise.finally",...u]),find:s("instance/find",["es.array.find"]),findIndex:s("instance/find-index",["es.array.find-index"]),fixed:s(null,["es.string.fixed"]),flags:s("instance/flags",["es.regexp.flags"]),flatMap:s("instance/flat-map",["es.array.flat-map","es.array.unscopables.flat-map"]),flat:s("instance/flat",[],"es.array.flat"),fontcolor:s(null,["es.string.fontcolor"]),fontsize:s(null,["es.string.fontsize"]),forEach:s("instance/for-each",["es.array.for-each","web.dom-collections.for-each"]),includes:s("instance/includes",["es.array.includes","es.string.includes"]),indexOf:s("instance/index-of",["es.array.index-of"]),italic:s(null,["es.string.italics"]),join:s(null,["es.array.join"]),keys:s("instance/keys",o),lastIndex:s(null,["esnext.array.last-index"]),lastIndexOf:s("instance/last-index-of",["es.array.last-index-of"]),lastItem:s(null,["esnext.array.last-item"]),link:s(null,["es.string.link"]),map:s("instance/map",["es.array.map"]),match:s(null,["es.string.match","es.regexp.exec"]),matchAll:s("instance/match-all",["esnext.string.match-all"]),name:s(null,["es.function.name"]),padEnd:s("instance/pad-end",["es.string.pad-end"]),padStart:s("instance/pad-start",["es.string.pad-start"]),reduce:s("instance/reduce",["es.array.reduce"]),reduceRight:s("instance/reduce-right",["es.array.reduce-right"]),repeat:s("instance/repeat",["es.string.repeat"]),replace:s(null,["es.string.replace","es.regexp.exec"]),replaceAll:s("instance/replace-all",["esnext.string.replace-all"]),reverse:s("instance/reverse",["es.array.reverse"]),search:s(null,["es.string.search","es.regexp.exec"]),slice:s("instance/slice",["es.array.slice"]),small:s(null,["es.string.small"]),some:s("instance/some",["es.array.some"]),sort:s("instance/sort",["es.array.sort"]),splice:s("instance/splice",["es.array.splice"]),split:s(null,["es.string.split","es.regexp.exec"]),startsWith:s("instance/starts-with",["es.string.starts-with"]),strike:s(null,["es.string.strike"]),sub:s(null,["es.string.sub"]),sup:s(null,["es.string.sup"]),toFixed:s(null,["es.number.to-fixed"]),toISOString:s(null,["es.date.to-iso-string"]),toJSON:s(null,["es.date.to-json","web.url.to-json"]),toPrecision:s(null,["es.number.to-precision"]),toString:s(null,["es.object.to-string","es.regexp.to-string","es.date.to-string"]),trim:s("instance/trim",["es.string.trim"]),trimEnd:s("instance/trim-end",["es.string.trim-end"]),trimLeft:s("instance/trim-left",["es.string.trim-start"]),trimRight:s("instance/trim-right",["es.string.trim-end"]),trimStart:s("instance/trim-start",["es.string.trim-start"]),values:s("instance/values",o),__defineGetter__:s(null,["es.object.define-getter"]),__defineSetter__:s(null,["es.object.define-setter"]),__lookupGetter__:s(null,["es.object.lookup-getter"]),__lookupSetter__:s(null,["es.object.lookup-setter"])};r.InstanceProperties=v;const E=new Set(["es.object.to-string","es.object.define-getter","es.object.define-setter","es.object.lookup-getter","es.object.lookup-setter","es.regexp.exec"]);r.CommonInstanceDependencies=E},{}],15:[function(e,t,r){"use strict";r.__esModule=!0,r.default=void 0;var s=c(e("core-js-compat/data")),n=c(e("./shipped-proposals")),i=c(e("core-js-compat/get-modules-list-for-target-version")),a=e("./built-in-definitions"),o=e("@babel/core"),l=e("./utils");function c(e){return e&&e.__esModule?e:{default:e}}var p=(0,c(e("@babel/helper-define-polyfill-provider")).default)(function({getUtils:e,method:t,shouldInjectPolyfill:r,createMetaResolver:c,debug:p,babel:u},{version:d=3,proposals:f,shippedProposals:h}){const y=u.caller(e=>"babel-loader"===(null==e?void 0:e.name)),m=c({global:a.BuiltIns,static:a.StaticProperties,instance:a.InstanceProperties}),g=new Set((0,i.default)(d)),b="usage-pure"===t?f?"core-js-pure/features":"core-js-pure/stable":"core-js";function x(e,t){for(const s of e)r(s)&&(p(s),t.injectGlobalImport((0,l.coreJSModule)(s)))}function v(e,t,s,n){if(e.pure&&!(n&&e.exclude&&e.exclude.includes(n))&&r(e.name))return s.injectDefaultImport(`${b}/${e.pure}.js`,t)}return{name:"corejs3",polyfills:s.default,filterPolyfills:e=>!!g.has(e)&&(!(!f&&"entry-global"!==t)||(!(!h||!n.default.has(e))||!e.startsWith("esnext."))),entryGlobal(e,t,s){if("import"!==e.kind)return;const n=(0,l.isCoreJSSource)(e.source);n&&(1===n.length&&e.source===(0,l.coreJSModule)(n[0])&&r(n[0])?p(null):(x(n,t),s.remove()))},usageGlobal(e,t){const r=m(e);if(!r)return;let s=r.desc.global;if("global"!==r.kind&&e.object&&"prototype"===e.placement){const t=e.object.toLowerCase();s=s.filter(e=>e.includes(t)||a.CommonInstanceDependencies.has(e))}x(s,t)},usagePure(e,t,s){if("in"===e.kind)return void("Symbol.iterator"===e.key&&s.replaceWith(o.types.callExpression(t.injectDefaultImport(`${b}/is-iterable.js`,"isIterable"),[s.node.right])));let n;if("property"===e.kind){if(!s.isMemberExpression())return;if(!s.isReferenced())return;if(n=s.parentPath.isCallExpression({callee:s.node}),"Symbol.iterator"===e.key){if(!r("es.symbol.iterator"))return;return void(n?0===s.parent.arguments.length?(s.parentPath.replaceWith(o.types.callExpression(t.injectDefaultImport(`${b}/get-iterator.js`,"getIterator"),[s.node.object])),s.skip()):(0,l.callMethod)(s,t.injectDefaultImport(`${b}/get-iterator-method.js`,"getIteratorMethod")):s.replaceWith(o.types.callExpression(t.injectDefaultImport(`${b}/get-iterator-method.js`,"getIteratorMethod"),[s.node.object])))}}const i=m(e);if(i)if("global"===i.kind){const e=v(i.desc,i.name,t);e&&s.replaceWith(e)}else if("static"===i.kind){const r=v(i.desc,i.name,t,e.object);r&&s.replaceWith(r)}else if("instance"===i.kind){const r=v(i.desc,`${i.name}InstanceProperty`,t,e.object);if(!r)return;n?(0,l.callMethod)(s,r):s.replaceWith(o.types.callExpression(r,[s.node.object]))}},visitor:"usage-global"===t&&{CallExpression(t){if(t.get("callee").isImport()){const r=e(t);x(y?a.PromiseDependenciesWithIterators:a.PromiseDependencies,r)}},Function(t){t.node.async&&x(a.PromiseDependencies,e(t))},"ForOfStatement|ArrayPattern"(t){x(a.CommonIterators,e(t))},SpreadElement(t){t.parentPath.isObjectExpression()||x(a.CommonIterators,e(t))},YieldExpression(t){t.node.delegate&&x(a.CommonIterators,e(t))}}}});r.default=p},{"./built-in-definitions":14,"./shipped-proposals":16,"./utils":17,"@babel/core":41,"@babel/helper-define-polyfill-provider":89,"core-js-compat/data":249,"core-js-compat/get-modules-list-for-target-version":251}],16:[function(e,t,r){"use strict";r.__esModule=!0,r.default=void 0;var s=new Set(["esnext.global-this","esnext.string.match-all"]);r.default=s},{}],17:[function(e,t,r){"use strict";r.__esModule=!0,r.callMethod=function(e,t){const{object:r}=e.node;let s,i;n.types.isIdentifier(r)?(s=r,i=n.types.cloneNode(r)):(s=e.scope.generateDeclaredUidIdentifier("context"),i=n.types.assignmentExpression("=",s,r));e.replaceWith(n.types.memberExpression(n.types.callExpression(t,[i]),n.types.identifier("call"))),e.parentPath.unshiftContainer("arguments",s)},r.isCoreJSSource=function(e){"string"==typeof e&&(e=e.replace(/\\/g,"/").replace(/(\/(index)?)?(\.js)?$/i,"").toLowerCase());return hasOwnProperty.call(i.default,e)&&i.default[e]},r.coreJSModule=function(e){return`core-js/modules/${e}.js`};var s,n=e("@babel/core"),i=(s=e("core-js-compat/entries"))&&s.__esModule?s:{default:s}},{"@babel/core":41,"core-js-compat/entries":250}],18:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.codeFrameColumns=o,r.default=function(e,r,s,n={}){if(!i){i=!0;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(t.emitWarning)t.emitWarning(e,"DeprecationWarning");else{const t=new Error(e);t.name="DeprecationWarning",console.warn(new Error(e))}}return s=Math.max(s,0),o(e,{start:{column:s,line:r}},n)};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/highlight"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}let i=!1;const a=/\r\n|[\n\r\u2028\u2029]/;function o(e,t,r={}){const n=(r.highlightCode||r.forceColor)&&(0,s.shouldHighlight)(r),i=(0,s.getChalk)(r),o=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(i),l=(e,t)=>n?e(t):t,c=e.split(a),{start:p,end:u,markerLines:d}=function(e,t,r){const s=Object.assign({column:0,line:-1},e.start),n=Object.assign({},s,e.end),{linesAbove:i=2,linesBelow:a=3}=r||{},o=s.line,l=s.column,c=n.line,p=n.column;let u=Math.max(o-(i+1),0),d=Math.min(t.length,c+a);-1===o&&(u=0),-1===c&&(d=t.length);const f=c-o,h={};if(f)for(let e=0;e<=f;e++){const r=e+o;if(l)if(0===e){const e=t[r-1].length;h[r]=[l,e-l+1]}else if(e===f)h[r]=[0,p];else{const s=t[r-e].length;h[r]=[0,s]}else h[r]=!0}else h[o]=l===p?!l||[l,0]:[l,p-l];return{start:u,end:d,markerLines:h}}(t,c,r),f=t.start&&"number"==typeof t.start.column,h=String(u).length;let y=(n?(0,s.default)(e,r):e).split(a).slice(p,u).map((e,t)=>{const s=p+1+t,n=` ${` ${s}`.slice(-h)} | `,i=d[s],a=!d[s+1];if(i){let t="";if(Array.isArray(i)){const s=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\t]/g," "),c=i[1]||1;t=["\n ",l(o.gutter,n.replace(/\d/g," ")),s,l(o.marker,"^").repeat(c)].join(""),a&&r.message&&(t+=" "+l(o.message,r.message))}return[l(o.marker,">"),l(o.gutter,n),e,t].join("")}return` ${l(o.gutter,n)}${e}`}).join("\n");return r.message&&!f&&(y=`${" ".repeat(h+1)}${r.message}\n${y}`),n?i.reset(y):y}}).call(this,e("_process"))},{"@babel/highlight":118,_process:13}],19:[function(e,t,r){t.exports={"es6.module":{edge:"16",firefox:"60",chrome:"61",safari:"10.1",opera:"48",ios_saf:"10.3",android:"61",op_mob:"48",and_chr:"61",and_ff:"60",samsung:"8.2"}}},{}],20:[function(e,t,r){t.exports={"proposal-numeric-separator":{chrome:"75",opera:"62",edge:"79",firefox:"70",safari:"13",node:"12.5",ios:"13",samsung:"11",electron:"6"},"proposal-class-properties":{chrome:"74",opera:"61",edge:"79",node:"12",samsung:"11",electron:"6"},"proposal-private-methods":{chrome:"84"},"proposal-nullish-coalescing-operator":{chrome:"80",opera:"67",edge:"80",firefox:"72",safari:"13.1",node:"14",electron:"8.1"},"proposal-optional-chaining":{chrome:"80",opera:"67",edge:"80",firefox:"74",safari:"13.1",node:"14",electron:"8.1"},"proposal-json-strings":{chrome:"66",opera:"53",edge:"79",firefox:"62",safari:"12",node:"10",ios:"12",samsung:"9",electron:"3"},"proposal-optional-catch-binding":{chrome:"66",opera:"53",edge:"79",firefox:"58",safari:"11.1",node:"10",ios:"11.3",samsung:"9",electron:"3"},"transform-parameters":{chrome:"49",opera:"36",edge:"18",firefox:"53",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"proposal-async-generator-functions":{chrome:"63",opera:"50",edge:"79",firefox:"57",safari:"12",node:"10",ios:"12",samsung:"8",electron:"3"},"proposal-object-rest-spread":{chrome:"60",opera:"47",edge:"79",firefox:"55",safari:"11.1",node:"8.3",ios:"11.3",samsung:"8",electron:"2"},"transform-dotall-regex":{chrome:"62",opera:"49",edge:"79",firefox:"78",safari:"11.1",node:"8.10",ios:"11.3",samsung:"8",electron:"3"},"proposal-unicode-property-regex":{chrome:"64",opera:"51",edge:"79",firefox:"78",safari:"11.1",node:"10",ios:"11.3",samsung:"9",electron:"3"},"transform-named-capturing-groups-regex":{chrome:"64",opera:"51",edge:"79",safari:"11.1",node:"10",ios:"11.3",samsung:"9",electron:"3"},"transform-async-to-generator":{chrome:"55",opera:"42",edge:"15",firefox:"52",safari:"11",node:"7.6",ios:"11",samsung:"6",electron:"1.6"},"transform-exponentiation-operator":{chrome:"52",opera:"39",edge:"14",firefox:"52",safari:"10.1",node:"7",ios:"10.3",samsung:"6",electron:"1.3"},"transform-template-literals":{chrome:"41",opera:"28",edge:"13",firefox:"34",safari:"13",node:"4",ios:"13",samsung:"3.4",electron:"0.22"},"transform-literals":{chrome:"44",opera:"31",edge:"12",firefox:"53",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"transform-function-name":{chrome:"51",opera:"38",edge:"79",firefox:"53",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"transform-arrow-functions":{chrome:"47",opera:"34",edge:"13",firefox:"45",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.36"},"transform-block-scoped-functions":{chrome:"41",opera:"28",edge:"12",firefox:"46",safari:"10",node:"4",ie:"11",ios:"10",samsung:"3.4",electron:"0.22"},"transform-classes":{chrome:"46",opera:"33",edge:"13",firefox:"45",safari:"10",node:"5",ios:"10",samsung:"5",electron:"0.36"},"transform-object-super":{chrome:"46",opera:"33",edge:"13",firefox:"45",safari:"10",node:"5",ios:"10",samsung:"5",electron:"0.36"},"transform-shorthand-properties":{chrome:"43",opera:"30",edge:"12",firefox:"33",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.28"},"transform-duplicate-keys":{chrome:"42",opera:"29",edge:"12",firefox:"34",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.25"},"transform-computed-properties":{chrome:"44",opera:"31",edge:"12",firefox:"34",safari:"7.1",node:"4",ios:"8",samsung:"4",electron:"0.30"},"transform-for-of":{chrome:"51",opera:"38",edge:"15",firefox:"53",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"transform-sticky-regex":{chrome:"49",opera:"36",edge:"13",firefox:"3",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"transform-unicode-escapes":{chrome:"44",opera:"31",edge:"12",firefox:"53",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"transform-unicode-regex":{chrome:"50",opera:"37",edge:"13",firefox:"46",safari:"12",node:"6",ios:"12",samsung:"5",electron:"1.1"},"transform-spread":{chrome:"46",opera:"33",edge:"13",firefox:"36",safari:"10",node:"5",ios:"10",samsung:"5",electron:"0.36"},"transform-destructuring":{chrome:"51",opera:"38",edge:"15",firefox:"53",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"transform-block-scoping":{chrome:"49",opera:"36",edge:"14",firefox:"51",safari:"11",node:"6",ios:"11",samsung:"5",electron:"0.37"},"transform-typeof-symbol":{chrome:"38",opera:"25",edge:"12",firefox:"36",safari:"9",node:"0.12",ios:"9",samsung:"3",electron:"0.20"},"transform-new-target":{chrome:"46",opera:"33",edge:"14",firefox:"41",safari:"10",node:"5",ios:"10",samsung:"5",electron:"0.36"},"transform-regenerator":{chrome:"50",opera:"37",edge:"13",firefox:"53",safari:"10",node:"6",ios:"10",samsung:"5",electron:"1.1"},"transform-member-expression-literals":{chrome:"7",opera:"12",edge:"12",firefox:"2",safari:"5.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"transform-property-literals":{chrome:"7",opera:"12",edge:"12",firefox:"2",safari:"5.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"transform-reserved-words":{chrome:"13",opera:"10.50",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"9",android:"4.4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"}}},{}],21:[function(e,t,r){t.exports=e("./data/native-modules.json")},{"./data/native-modules.json":19}],22:[function(e,t,r){t.exports=e("./data/plugins.json")},{"./data/plugins.json":20}],23:[function(e,t,r){"use strict";function s(){const t=(r=e("gensync"))&&r.__esModule?r:{default:r};var r;return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.makeWeakCache=l,r.makeWeakCacheSync=function(e){return a(l(e))},r.makeStrongCache=c,r.makeStrongCacheSync=function(e){return a(c(e))},r.assertSimpleType=h;var n=e("../gensync-utils/async"),i=e("./util");const a=e=>(0,s().default)(e).sync;function*o(e){return!0}function l(e){return p(WeakMap,e)}function c(e){return p(Map,e)}function p(e,t){const r=new e,s=new e,a=new e;return function*(e,o){const l=yield*(0,n.isAsync)(),c=l?s:r,p=yield*function*(e,t,r,s,i){const a=yield*u(t,s,i);if(a.valid)return a;if(e){const e=yield*u(r,s,i);if(e.valid){const t=yield*(0,n.waitFor)(e.value.promise);return{valid:!0,value:t}}}return{valid:!1,value:null}}(l,c,a,e,o);if(p.valid)return p.value;const h=new f(o),m=t(e,h);let g,b;if((0,i.isIterableIterator)(m)){const t=m;b=yield*(0,n.onFirstPause)(t,()=>{g=function(e,t,r){const s=new y;return d(t,e,r,s),s}(h,a,e)})}else b=m;return d(c,h,e,b),g&&(a.delete(e),g.release(b)),b}}function*u(e,t,r){const s=e.get(t);if(s)for(const{value:e,valid:t}of s)if(yield*t(r))return{valid:!0,value:e};return{valid:!1,value:null}}function d(e,t,r,s){t.configured()||t.forever();let n=e.get(r);switch(t.deactivate(),t.mode()){case"forever":n=[{value:s,valid:o}],e.set(r,n);break;case"invalidate":n=[{value:s,valid:t.validator()}],e.set(r,n);break;case"valid":n?n.push({value:s,valid:t.validator()}):(n=[{value:s,valid:t.validator()}],e.set(r,n))}}class f{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=e}simple(){return function(e){function t(t){if("boolean"!=typeof t)return e.using(()=>h(t()));t?e.forever():e.never()}return t.forever=(()=>e.forever()),t.never=(()=>e.never()),t.using=(t=>e.using(()=>h(t()))),t.invalidate=(t=>e.invalidate(()=>h(t()))),t}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const t=e(this._data),r=(0,n.maybeAsync)(e,"You appear to be using an async cache handler, but Babel has been called synchronously");return(0,n.isThenable)(t)?t.then(e=>(this._pairs.push([e,r]),e)):(this._pairs.push([t,r]),t)}invalidate(e){return this._invalidate=!0,this.using(e)}validator(){const e=this._pairs;return function*(t){for(const[r,s]of e)if(r!==(yield*s(t)))return!1;return!0}}deactivate(){this._active=!1}configured(){return this._configured}}function h(e){if((0,n.isThenable)(e))throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");if(null!=e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}class y{constructor(){this.released=!1,this.promise=new Promise(e=>{this._resolve=e})}release(e){this.released=!0,this._resolve(e)}}},{"../gensync-utils/async":40,"./util":35,gensync:274}],24:[function(e,t,r){"use strict";function s(){const t=p(e("path"));return s=function(){return t},t}function n(){const t=p(e("debug"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.buildPresetChain=function*(e,t){const r=yield*d(e,t);return r?{plugins:D(r.plugins),presets:D(r.presets),options:r.options.map(e=>M(e))}:null},r.buildRootChain=function*(e,t){const r=yield*v({options:e,dirname:t.cwd},t);if(!r)return null;let n;"string"==typeof e.configFile?n=yield*(0,o.loadConfig)(e.configFile,t.cwd,t.envName,t.caller):!1!==e.configFile&&(n=yield*(0,o.findRootConfig)(t.root,t.envName,t.caller));let{babelrc:i,babelrcRoots:l}=e,c=t.cwd;const p={options:[],presets:[],plugins:[]};if(n){const e=g(n),r=yield*E(e,t);if(!r)return null;void 0===i&&(i=e.options.babelrc),void 0===l&&(c=e.dirname,l=e.options.babelrcRoots),I(p,r)}const u="string"==typeof t.filename?yield*(0,o.findPackageData)(t.filename):null;let d,f;const h={options:[],presets:[],plugins:[]};if((!0===i||void 0===i)&&u&&function(e,t,r,n){if("boolean"==typeof r)return r;const i=e.root;if(void 0===r)return-1!==t.directories.indexOf(i);let o=r;Array.isArray(o)||(o=[o]);if(1===(o=o.map(e=>"string"==typeof e?s().default.resolve(n,e):e)).length&&o[0]===i)return-1!==t.directories.indexOf(i);return o.some(r=>("string"==typeof r&&(r=(0,a.default)(r,n)),t.directories.some(t=>U(r,n,t,e))))}(t,u,l,c)){if(({ignore:d,config:f}=yield*(0,o.findRelativeConfig)(u,t.envName,t.caller)),d&&R(t,d.ignore,null,d.dirname))return null;if(f){const e=yield*E(b(f),t);if(!e)return null;I(h,e)}}const y=I(I(I({options:[],presets:[],plugins:[]},p),h),r);return{plugins:D(y.plugins),presets:D(y.presets),options:y.options.map(e=>M(e)),ignore:d||void 0,babelrc:f||void 0,config:n||void 0}},r.buildPresetChainWalker=void 0;var i=e("./validation/options"),a=p(e("./pattern-to-regex")),o=e("./files"),l=e("./caching"),c=e("./config-descriptors");function p(e){return e&&e.__esModule?e:{default:e}}const u=(0,n().default)("babel:config:config-chain");const d=k({root:e=>f(e),env:(e,t)=>h(e)(t),overrides:(e,t)=>y(e)(t),overridesEnv:(e,t,r)=>m(e)(t)(r)});r.buildPresetChainWalker=d;const f=(0,l.makeWeakCacheSync)(e=>P(e,e.alias,c.createUncachedDescriptors)),h=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>_(e,e.alias,c.createUncachedDescriptors,t))),y=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>A(e,e.alias,c.createUncachedDescriptors,t))),m=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>(0,l.makeStrongCacheSync)(r=>O(e,e.alias,c.createUncachedDescriptors,t,r))));const g=(0,l.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,i.validate)("configfile",e.options)})),b=(0,l.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,i.validate)("babelrcfile",e.options)})),x=(0,l.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,i.validate)("extendsfile",e.options)})),v=k({root:e=>P(e,"base",c.createCachedDescriptors),env:(e,t)=>_(e,"base",c.createCachedDescriptors,t),overrides:(e,t)=>A(e,"base",c.createCachedDescriptors,t),overridesEnv:(e,t,r)=>O(e,"base",c.createCachedDescriptors,t,r)}),E=k({root:e=>T(e),env:(e,t)=>w(e)(t),overrides:(e,t)=>j(e)(t),overridesEnv:(e,t,r)=>S(e)(t)(r)}),T=(0,l.makeWeakCacheSync)(e=>P(e,e.filepath,c.createUncachedDescriptors)),w=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>_(e,e.filepath,c.createUncachedDescriptors,t))),j=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>A(e,e.filepath,c.createUncachedDescriptors,t))),S=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>(0,l.makeStrongCacheSync)(r=>O(e,e.filepath,c.createUncachedDescriptors,t,r))));function P({dirname:e,options:t},r,s){return s(e,t,r)}function _({dirname:e,options:t},r,s,n){const i=t.env&&t.env[n];return i?s(e,i,`${r}.env["${n}"]`):null}function A({dirname:e,options:t},r,s,n){const i=t.overrides&&t.overrides[n];if(!i)throw new Error("Assertion failure - missing override");return s(e,i,`${r}.overrides[${n}]`)}function O({dirname:e,options:t},r,s,n,i){const a=t.overrides&&t.overrides[n];if(!a)throw new Error("Assertion failure - missing override");const o=a.env&&a.env[i];return o?s(e,o,`${r}.overrides[${n}].env["${i}"]`):null}function k({root:e,env:t,overrides:r,overridesEnv:s}){return function*(n,i,a=new Set){const{dirname:o}=n,l=[],c=e(n);if(L(c,o,i)){l.push(c);const e=t(n,i.envName);e&&L(e,o,i)&&l.push(e),(c.options.overrides||[]).forEach((e,t)=>{const a=r(n,t);if(L(a,o,i)){l.push(a);const e=s(n,t,i.envName);e&&L(e,o,i)&&l.push(e)}})}if(l.some(({options:{ignore:e,only:t}})=>R(i,e,t,o)))return null;const p={options:[],presets:[],plugins:[]};for(const e of l){if(!(yield*C(p,e.options,o,i,a)))return null;N(p,e)}return p}}function*C(e,t,r,s,n){if(void 0===t.extends)return!0;const i=yield*(0,o.loadConfig)(t.extends,r,s.envName,s.caller);if(n.has(i))throw new Error(`Configuration cycle detected loading ${i.filepath}.\n`+"File already loaded following the config chain:\n"+Array.from(n,e=>` - ${e.filepath}`).join("\n"));n.add(i);const a=yield*E(x(i),s,n);return n.delete(i),!!a&&(I(e,a),!0)}function I(e,t){return e.options.push(...t.options),e.plugins.push(...t.plugins),e.presets.push(...t.presets),e}function N(e,{options:t,plugins:r,presets:s}){return e.options.push(t),e.plugins.push(...r()),e.presets.push(...s()),e}function M(e){const t=Object.assign({},e);return delete t.extends,delete t.env,delete t.overrides,delete t.plugins,delete t.presets,delete t.passPerPreset,delete t.ignore,delete t.only,delete t.test,delete t.include,delete t.exclude,Object.prototype.hasOwnProperty.call(t,"sourceMap")&&(t.sourceMaps=t.sourceMap,delete t.sourceMap),t}function D(e){const t=new Map,r=[];for(const s of e)if("function"==typeof s.value){const e=s.value;let n=t.get(e);n||(n=new Map,t.set(e,n));let i=n.get(s.name);i?i.value=s:(i={value:s},r.push(i),s.ownPass||n.set(s.name,i))}else r.push({value:s});return r.reduce((e,t)=>(e.push(t.value),e),[])}function L({options:e},t,r){return(void 0===e.test||B(r,e.test,t))&&(void 0===e.include||B(r,e.include,t))&&(void 0===e.exclude||!B(r,e.exclude,t))}function B(e,t,r){return F(e,Array.isArray(t)?t:[t],r)}function R(e,t,r,s){return t&&F(e,t,s)?(u("Ignored %o because it matched one of %O from %o",e.filename,t,s),!0):!(!r||F(e,r,s))&&(u("Ignored %o because it failed to match one of %O from %o",e.filename,r,s),!0)}function F(e,t,r){return t.some(t=>U(t,r,e.filename,e))}function U(e,t,r,s){if("function"==typeof e)return!!e(r,{dirname:t,envName:s.envName,caller:s.caller});if("string"!=typeof r)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"==typeof e&&(e=(0,a.default)(e,t)),e.test(r)}},{"./caching":23,"./config-descriptors":25,"./files":26,"./pattern-to-regex":33,"./validation/options":37,debug:270,path:12}],25:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createCachedDescriptors=function(e,t,r){const{plugins:s,presets:n,passPerPreset:i}=t;return{options:t,plugins:s?()=>c(s,e)(r):()=>[],presets:n?()=>o(n,e)(r)(!!i):()=>[]}},r.createUncachedDescriptors=function(e,t,r){let s,n;return{options:t,plugins:()=>(s||(s=f(t.plugins||[],e,r)),s),presets:()=>(n||(n=d(t.presets||[],e,r,!!t.passPerPreset)),n)}},r.createDescriptor=y;var s=e("./files"),n=e("./item"),i=e("./caching");const a=new WeakMap,o=(0,i.makeWeakCacheSync)((e,t)=>{const r=t.using(e=>e);return(0,i.makeStrongCacheSync)(t=>(0,i.makeStrongCacheSync)(s=>d(e,r,t,s).map(e=>u(a,e))))}),l=new WeakMap,c=(0,i.makeWeakCacheSync)((e,t)=>{const r=t.using(e=>e);return(0,i.makeStrongCacheSync)(t=>f(e,r,t).map(e=>u(l,e)))}),p={};function u(e,t){const{value:r,options:s=p}=t;if(!1===s)return t;let n=e.get(r);n||(n=new WeakMap,e.set(r,n));let i=n.get(s);if(i||(i=[],n.set(s,i)),-1===i.indexOf(t)){const e=i.filter(e=>(function(e,t){return e.name===t.name&&e.value===t.value&&e.options===t.options&&e.dirname===t.dirname&&e.alias===t.alias&&e.ownPass===t.ownPass&&(e.file&&e.file.request)===(t.file&&t.file.request)&&(e.file&&e.file.resolved)===(t.file&&t.file.resolved)})(e,t));if(e.length>0)return e[0];i.push(t)}return t}function d(e,t,r,s){return h("preset",e,t,r,s)}function f(e,t,r){return h("plugin",e,t,r)}function h(e,t,r,s,n){const i=t.map((t,i)=>y(t,r,{type:e,alias:`${s}$${i}`,ownPass:!!n}));return function(e){const t=new Map;for(const r of e){if("function"!=typeof r.value)continue;let s=t.get(r.value);if(s||(s=new Set,t.set(r.value,s)),s.has(r.name)){const t=e.filter(e=>e.value===r.value);throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]","","Duplicates detected are:",`${JSON.stringify(t,null,2)}`].join("\n"))}s.add(r.name)}}(i),i}function y(e,t,{type:r,alias:i,ownPass:a}){const o=(0,n.getItemDescriptor)(e);if(o)return o;let l,c,p=e;Array.isArray(p)&&(3===p.length?[p,c,l]=p:[p,c]=p);let u=void 0,d=null;if("string"==typeof p){if("string"!=typeof r)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===r?s.loadPlugin:s.loadPreset,n=p;({filepath:d,value:p}=e(p,t)),u={request:n,resolved:d}}if(!p)throw new Error(`Unexpected falsy value: ${String(p)}`);if("object"==typeof p&&p.__esModule){if(!p.default)throw new Error("Must export a default export when using ES6 modules.");p=p.default}if("object"!=typeof p&&"function"!=typeof p)throw new Error(`Unsupported format: ${typeof p}. Expected an object or a function.`);if(null!==d&&"object"==typeof p&&p)throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${d}`);return{name:l,alias:d||i,value:p,options:c,dirname:t,ownPass:a,file:u}}},{"./caching":23,"./files":26,"./item":31}],26:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.findConfigUpwards=function*(e){return null},r.findPackageData=function*(e){return{filepath:e,directories:[],pkg:null,isPackage:!1}},r.findRelativeConfig=function*(e,t,r){return{pkg:null,config:null,ignore:null}},r.findRootConfig=function*(e,t,r){return null},r.loadConfig=function*(e,t,r,s){throw new Error(`Cannot load ${e} relative to ${t} in a browser`)},r.resolvePlugin=function(e,t){return null},r.resolvePreset=function(e,t){return null},r.loadPlugin=function(e,t){throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`)},r.loadPreset=function(e,t){throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`)},r.ROOT_CONFIG_FILENAMES=void 0;r.ROOT_CONFIG_FILENAMES=[]},{}],27:[function(e,t,r){"use strict";function s(){const t=g(e("gensync"));return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=e("../gensync-utils/async"),i=e("./util"),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("../index")),o=g(e("./plugin")),l=e("./item"),c=e("./config-chain");function p(){const t=g(e("@babel/traverse"));return p=function(){return t},t}var u=e("./caching"),d=e("./validation/options"),f=e("./validation/plugins"),h=g(e("./helpers/config-api")),y=g(e("./partial"));function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function g(e){return e&&e.__esModule?e:{default:e}}var b=(0,s().default)(function*(e){const t=yield*(0,y.default)(e);if(!t)return null;const{options:r,context:s}=t,n={},a=[[]];try{const{plugins:e,presets:t}=r;if(!e||!t)throw new Error("Assertion failure - plugins and presets exist");if(yield*function*e(t,r){const o=[];for(let e=0;e<t.plugins.length;e++){const r=t.plugins[e];if(!1!==r.options)try{o.push(yield*v(r,s))}catch(s){throw e>0&&"BABEL_UNKNOWN_PLUGIN_PROPERTY"===s.code&&(0,d.checkNoUnwrappedItemOptionPairs)(t.plugins[e-1],r,"plugin",e,s),s}}const l=[];for(let e=0;e<t.presets.length;e++){const n=t.presets[e];if(!1!==n.options)try{l.push({preset:yield*j(n,s),pass:n.ownPass?[]:r})}catch(r){throw e>0&&"BABEL_UNKNOWN_OPTION"===r.code&&(0,d.checkNoUnwrappedItemOptionPairs)(t.presets[e-1],n,"preset",e,r),r}}if(l.length>0){a.splice(1,0,...l.map(e=>e.pass).filter(e=>e!==r));for(const{preset:t,pass:r}of l){if(!t)return!0;if(yield*e({plugins:t.plugins,presets:t.presets},r))return!0;t.options.forEach(e=>{(0,i.mergeOptions)(n,e)})}}o.length>0&&r.unshift(...o)}({plugins:e.map(e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t}),presets:t.map(e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t})},a[0]))return null}catch(e){throw/^\[BABEL\]/.test(e.message)||(e.message=`[BABEL] ${s.filename||"unknown"}: ${e.message}`),e}const o=n;return(0,i.mergeOptions)(o,r),o.plugins=a[0],o.presets=a.slice(1).filter(e=>e.length>0).map(e=>({plugins:e})),o.passPerPreset=o.presets.length>0,{options:o,passes:a}});r.default=b;const x=(0,u.makeWeakCache)(function*({value:e,options:t,dirname:r,alias:s},n){if(!1===t)throw new Error("Assertion failure");t=t||{};let i=e;if("function"==typeof e){const o=Object.assign({},a,(0,h.default)(n));try{i=e(o,t,r)}catch(e){throw s&&(e.message+=` (While processing: ${JSON.stringify(s)})`),e}}if(!i||"object"!=typeof i)throw new Error("Plugin/Preset did not return an object.");if("function"==typeof i.then)throw yield*[],new Error("You appear to be using an async plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return{value:i,options:t,dirname:r,alias:s}});function*v(e,t){if(e.value instanceof o.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*E(yield*x(e,t),t)}const E=(0,u.makeWeakCache)(function*({value:e,options:t,dirname:r,alias:s},i){const a=(0,f.validatePluginObject)(e),l=Object.assign({},a);if(l.visitor&&(l.visitor=p().default.explode(Object.assign({},l.visitor))),l.inherits){const e={name:void 0,alias:`${s}$inherits`,value:l.inherits,options:t,dirname:r},a=yield*(0,n.forwardAsync)(v,t=>i.invalidate(r=>t(e,r)));l.pre=P(a.pre,l.pre),l.post=P(a.post,l.post),l.manipulateOptions=P(a.manipulateOptions,l.manipulateOptions),l.visitor=p().default.visitors.merge([a.visitor||{},l.visitor||{}])}return new o.default(l,t,s)}),T=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}},w=(e,t,r)=>{if(!t.filename){const{options:t}=e;T(t,r),t.overrides&&t.overrides.forEach(e=>T(e,r))}};function*j(e,t){const r=S(yield*x(e,t));return w(r,t,e),yield*(0,c.buildPresetChain)(r,t)}const S=(0,u.makeWeakCacheSync)(({value:e,dirname:t,alias:r})=>({options:(0,d.validate)("preset",e),alias:r,dirname:t}));function P(e,t){const r=[e,t].filter(Boolean);return r.length<=1?r[0]:function(...e){for(const t of r)t.apply(this,e)}}},{"../gensync-utils/async":40,"../index":41,"./caching":23,"./config-chain":24,"./helpers/config-api":28,"./item":31,"./partial":32,"./plugin":34,"./util":35,"./validation/options":37,"./validation/plugins":38,"@babel/traverse":131,gensync:274}],28:[function(e,t,r){"use strict";function s(){const t=(r=e("semver"))&&r.__esModule?r:{default:r};var r;return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return{version:n.version,cache:e.simple(),env:t=>e.using(e=>void 0===t?e.envName:"function"==typeof t?(0,i.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some(t=>{if("string"!=typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))),async:()=>!1,caller:t=>e.using(e=>(0,i.assertSimpleType)(t(e.caller))),assertVersion:a}};var n=e("../../"),i=e("../caching");function a(e){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");if(s().default.satisfies(n.version,e))return;const t=Error.stackTraceLimit;"number"==typeof t&&t<25&&(Error.stackTraceLimit=25);const r=new Error(`Requires Babel "${e}", but was loaded with "${n.version}". `+'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');throw"number"==typeof t&&(Error.stackTraceLimit=t),Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:n.version,range:e})}},{"../../":41,"../caching":23,semver:57}],29:[function(e,t,r){(function(e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getEnv=function(t="development"){return e.env.BABEL_ENV||e.env.NODE_ENV||t}}).call(this,e("_process"))},{_process:13}],30:[function(e,t,r){"use strict";function s(){const t=a(e("gensync"));return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n.default}}),r.loadOptionsAsync=r.loadOptionsSync=r.loadOptions=r.loadPartialConfigAsync=r.loadPartialConfigSync=r.loadPartialConfig=void 0;var n=a(e("./full")),i=e("./partial");function a(e){return e&&e.__esModule?e:{default:e}}const o=(0,s().default)(function*(e){var t;const r=yield*(0,n.default)(e);return null!=(t=null==r?void 0:r.options)?t:null}),l=e=>(t,r)=>(void 0===r&&"function"==typeof t&&(r=t,t=void 0),r?e.errback(t,r):e.sync(t)),c=l(i.loadPartialConfig);r.loadPartialConfig=c;const p=i.loadPartialConfig.sync;r.loadPartialConfigSync=p;const u=i.loadPartialConfig.async;r.loadPartialConfigAsync=u;const d=l(o);r.loadOptions=d;const f=o.sync;r.loadOptionsSync=f;const h=o.async;r.loadOptionsAsync=h},{"./full":27,"./partial":32,gensync:274}],31:[function(e,t,r){"use strict";function s(){const t=(r=e("path"))&&r.__esModule?r:{default:r};var r;return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.createItemFromDescriptor=i,r.createConfigItem=function(e,{dirname:t=".",type:r}={}){return i((0,n.createDescriptor)(e,s().default.resolve(t),{type:r,alias:"programmatic item"}))},r.getItemDescriptor=function(e){if(e instanceof a)return e._descriptor;return};var n=e("./config-descriptors");function i(e){return new a(e)}class a{constructor(e){this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(a.prototype)},{"./config-descriptors":25,path:12}],32:[function(e,t,r){"use strict";function s(){const t=d(e("path"));return s=function(){return t},t}function n(){const t=d(e("gensync"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=f,r.loadPartialConfig=void 0;var i=d(e("./plugin")),a=e("./util"),o=e("./item"),l=e("./config-chain"),c=e("./helpers/environment"),p=e("./validation/options"),u=e("./files");function d(e){return e&&e.__esModule?e:{default:e}}function*f(e){if(null!=e&&("object"!=typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const t=e?(0,p.validate)("arguments",e):{},{envName:r=(0,c.getEnv)(),cwd:n=".",root:i=".",rootMode:d="root",caller:f}=t,h=s().default.resolve(n),y=yield*function*(e,t){switch(t){case"root":return e;case"upward-optional":{const t=yield*(0,u.findConfigUpwards)(e);return null===t?e:t}case"upward":{const t=yield*(0,u.findConfigUpwards)(e);if(null!==t)return t;throw Object.assign(new Error('Babel was run with rootMode:"upward" but a root could not '+`be found when searching upward from "${e}".\n`+"One of the following config files must be in the directory tree: "+`"${u.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value.")}}(s().default.resolve(h,i),d),m={filename:"string"==typeof t.filename?s().default.resolve(n,t.filename):void 0,cwd:h,root:y,envName:r,caller:f},g=yield*(0,l.buildRootChain)(t,m);if(!g)return null;const b={};return g.options.forEach(e=>{(0,a.mergeOptions)(b,e)}),b.babelrc=!1,b.configFile=!1,b.passPerPreset=!1,b.envName=m.envName,b.cwd=m.cwd,b.root=m.root,b.filename="string"==typeof m.filename?m.filename:void 0,b.plugins=g.plugins.map(e=>(0,o.createItemFromDescriptor)(e)),b.presets=g.presets.map(e=>(0,o.createItemFromDescriptor)(e)),{options:b,context:m,ignore:g.ignore,babelrc:g.babelrc,config:g.config}}const h=(0,n().default)(function*(e){const t=yield*f(e);if(!t)return null;const{options:r,babelrc:s,ignore:n,config:a}=t;return(r.plugins||[]).forEach(e=>{if(e.value instanceof i.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")}),new y(r,s?s.filepath:void 0,n?n.filepath:void 0,a?a.filepath:void 0)});r.loadPartialConfig=h;class y{constructor(e,t,r,s){this.options=e,this.babelignore=r,this.babelrc=t,this.config=s,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(y.prototype)},{"./config-chain":24,"./files":26,"./helpers/environment":29,"./item":31,"./plugin":34,"./util":35,"./validation/options":37,gensync:274,path:12}],33:[function(e,t,r){"use strict";function s(){const t=i(e("path"));return s=function(){return t},t}function n(){const t=i(e("lodash/escapeRegExp"));return n=function(){return t},t}function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const r=s().default.resolve(t,e).split(s().default.sep);return new RegExp(["^",...r.map((e,t)=>{const s=t===r.length-1;return"**"===e?s?d:u:"*"===e?s?p:c:0===e.indexOf("*.")?l+(0,n().default)(e.slice(1))+(s?o:a):(0,n().default)(e)+(s?o:a)})].join(""))};const a=`\\${s().default.sep}`,o=`(?:${a}|$)`,l=`[^${a}]+`,c=`(?:${l}${a})`,p=`(?:${l}${o})`,u=`${c}*?`,d=`${c}*?${p}?`},{"lodash/escapeRegExp":432,path:12}],34:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=class{constructor(e,t,r){this.key=e.name||r,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=t}}},{}],35:[function(e,t,r){"use strict";function s(e,t){for(const r of Object.keys(t)){const s=t[r];void 0!==s&&(e[r]=s)}}Object.defineProperty(r,"__esModule",{value:!0}),r.mergeOptions=function(e,t){for(const r of Object.keys(t))if("parserOpts"===r&&t.parserOpts){const r=t.parserOpts,n=e.parserOpts=e.parserOpts||{};s(n,r)}else if("generatorOpts"===r&&t.generatorOpts){const r=t.generatorOpts,n=e.generatorOpts=e.generatorOpts||{};s(n,r)}else{const s=t[r];void 0!==s&&(e[r]=s)}},r.isIterableIterator=function(e){return!!e&&"function"==typeof e.next&&"function"==typeof e[Symbol.iterator]}},{}],36:[function(e,t,r){"use strict";function s(e){switch(e.type){case"root":return"";case"env":return`${s(e.parent)}.env["${e.name}"]`;case"overrides":return`${s(e.parent)}.overrides[${e.index}]`;case"option":return`${s(e.parent)}.${e.name}`;case"access":return`${s(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error(`Assertion failure: Unknown type ${e.type}`)}}function n(e,t){return{type:"access",name:t,parent:e}}function i(e,t){if(void 0!==t&&("object"!=typeof t||Array.isArray(t)||!t))throw new Error(`${s(e)} must be an object, or undefined`);return t}function a(e,t){if(null!=t&&!Array.isArray(t))throw new Error(`${s(e)} must be an array, or undefined`);return t}function o(e){return"string"==typeof e||"function"==typeof e||e instanceof RegExp}function l(e,t){if(("object"!=typeof t||!t)&&"string"!=typeof t&&"function"!=typeof t)throw new Error(`${s(e)} must be a string, object, function`);return t}Object.defineProperty(r,"__esModule",{value:!0}),r.msg=s,r.access=n,r.assertRootMode=function(e,t){if(void 0!==t&&"root"!==t&&"upward"!==t&&"upward-optional"!==t)throw new Error(`${s(e)} must be a "root", "upward", "upward-optional" or undefined`);return t},r.assertSourceMaps=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"inline"!==t&&"both"!==t)throw new Error(`${s(e)} must be a boolean, "inline", "both", or undefined`);return t},r.assertCompact=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"auto"!==t)throw new Error(`${s(e)} must be a boolean, "auto", or undefined`);return t},r.assertSourceType=function(e,t){if(void 0!==t&&"module"!==t&&"script"!==t&&"unambiguous"!==t)throw new Error(`${s(e)} must be "module", "script", "unambiguous", or undefined`);return t},r.assertCallerMetadata=function(e,t){const r=i(e,t);if(r){if("string"!=typeof r.name)throw new Error(`${s(e)} set but does not contain "name" property string`);for(const t of Object.keys(r)){const i=n(e,t),a=r[t];if(null!=a&&"boolean"!=typeof a&&"string"!=typeof a&&"number"!=typeof a)throw new Error(`${s(i)} must be null, undefined, a boolean, a string, or a number.`)}}return t},r.assertInputSourceMap=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&("object"!=typeof t||!t))throw new Error(`${s(e)} must be a boolean, object, or undefined`);return t},r.assertString=function(e,t){if(void 0!==t&&"string"!=typeof t)throw new Error(`${s(e)} must be a string, or undefined`);return t},r.assertFunction=function(e,t){if(void 0!==t&&"function"!=typeof t)throw new Error(`${s(e)} must be a function, or undefined`);return t},r.assertBoolean=function(e,t){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${s(e)} must be a boolean, or undefined`);return t},r.assertObject=i,r.assertArray=a,r.assertIgnoreList=function(e,t){const r=a(e,t);r&&r.forEach((t,r)=>(function(e,t){if("string"!=typeof t&&"function"!=typeof t&&!(t instanceof RegExp))throw new Error(`${s(e)} must be an array of string/Function/RegExp values, or undefined`);return t})(n(e,r),t));return r},r.assertConfigApplicableTest=function(e,t){if(void 0===t)return t;if(Array.isArray(t))t.forEach((t,r)=>{if(!o(t))throw new Error(`${s(n(e,r))} must be a string/Function/RegExp.`)});else if(!o(t))throw new Error(`${s(e)} must be a string/Function/RegExp, or an array of those`);return t},r.assertConfigFileSearch=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error(`${s(e)} must be a undefined, a boolean, a string, `+`got ${JSON.stringify(t)}`);return t},r.assertBabelrcSearch=function(e,t){if(void 0===t||"boolean"==typeof t)return t;if(Array.isArray(t))t.forEach((t,r)=>{if(!o(t))throw new Error(`${s(n(e,r))} must be a string/Function/RegExp.`)});else if(!o(t))throw new Error(`${s(e)} must be a undefined, a boolean, a string/Function/RegExp `+`or an array of those, got ${JSON.stringify(t)}`);return t},r.assertPluginList=function(e,t){const r=a(e,t);r&&r.forEach((t,r)=>(function(e,t){if(Array.isArray(t)){if(0===t.length)throw new Error(`${s(e)} must include an object`);if(t.length>3)throw new Error(`${s(e)} may only be a two-tuple or three-tuple`);if(l(n(e,0),t[0]),t.length>1){const r=t[1];if(void 0!==r&&!1!==r&&("object"!=typeof r||Array.isArray(r)||null===r))throw new Error(`${s(n(e,1))} must be an object, false, or undefined`)}if(3===t.length){const r=t[2];if(void 0!==r&&"string"!=typeof r)throw new Error(`${s(n(e,2))} must be a string, or undefined`)}}else l(e,t);return t})(n(e,r),t));return r}},{}],37:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.validate=function(e,t){return p({type:"root",source:e},t)},r.checkNoUnwrappedItemOptionPairs=function(e,t,r,s,n){e.file&&void 0===e.options&&"object"==typeof t.value&&(n.message+="\n- Maybe you meant to use\n"+`"${r}": [\n  ["${e.file.request}", ${JSON.stringify(t.value,void 0,2)}]\n]\n`+`To be a valid ${r}, its name and options should be wrapped in a pair of brackets`)};i(e("../plugin"));var s=i(e("./removed")),n=e("./option-assertions");function i(e){return e&&e.__esModule?e:{default:e}}const a={cwd:n.assertString,root:n.assertString,rootMode:n.assertRootMode,configFile:n.assertConfigFileSearch,caller:n.assertCallerMetadata,filename:n.assertString,filenameRelative:n.assertString,code:n.assertBoolean,ast:n.assertBoolean,envName:n.assertString},o={babelrc:n.assertBoolean,babelrcRoots:n.assertBabelrcSearch},l={extends:n.assertString,ignore:n.assertIgnoreList,only:n.assertIgnoreList},c={inputSourceMap:n.assertInputSourceMap,presets:n.assertPluginList,plugins:n.assertPluginList,passPerPreset:n.assertBoolean,env:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,n.msg)(e)} is not allowed inside of another .env block`);const r=e.parent,s=(0,n.assertObject)(e,t);if(s)for(const t of Object.keys(s)){const i=(0,n.assertObject)((0,n.access)(e,t),s[t]);if(!i)continue;const a={type:"env",name:t,parent:r};p(a,i)}return s},overrides:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,n.msg)(e)} is not allowed inside an .env block`);if("overrides"===e.parent.type)throw new Error(`${(0,n.msg)(e)} is not allowed inside an .overrides block`);const r=e.parent,s=(0,n.assertArray)(e,t);if(s)for(const[t,i]of s.entries()){const s=(0,n.access)(e,t),a=(0,n.assertObject)(s,i);if(!a)throw new Error(`${(0,n.msg)(s)} must be an object`);const o={type:"overrides",index:t,parent:r};p(o,a)}return s},test:n.assertConfigApplicableTest,include:n.assertConfigApplicableTest,exclude:n.assertConfigApplicableTest,retainLines:n.assertBoolean,comments:n.assertBoolean,shouldPrintComment:n.assertFunction,compact:n.assertCompact,minified:n.assertBoolean,auxiliaryCommentBefore:n.assertString,auxiliaryCommentAfter:n.assertString,sourceType:n.assertSourceType,wrapPluginVisitorMethod:n.assertFunction,highlightCode:n.assertBoolean,sourceMaps:n.assertSourceMaps,sourceMap:n.assertSourceMaps,sourceFileName:n.assertString,sourceRoot:n.assertString,getModuleId:n.assertFunction,moduleRoot:n.assertString,moduleIds:n.assertBoolean,moduleId:n.assertString,parserOpts:n.assertObject,generatorOpts:n.assertObject};function p(e,t){const r=function e(t){return"root"===t.type?t.source:e(t.parent)}(e);return function(e){if(d(e,"sourceMap")&&d(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(t),Object.keys(t).forEach(s=>{const i={type:"option",name:s,parent:e};if("preset"===r&&l[s])throw new Error(`${(0,n.msg)(i)} is not allowed in preset options`);if("arguments"!==r&&a[s])throw new Error(`${(0,n.msg)(i)} is only allowed in root programmatic options`);if("arguments"!==r&&"configfile"!==r&&o[s]){if("babelrcfile"===r||"extendsfile"===r)throw new Error(`${(0,n.msg)(i)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, `+"or babel.config.js/config file options");throw new Error(`${(0,n.msg)(i)} is only allowed in root programmatic options, or babel.config.js/config file options`)}(c[s]||l[s]||o[s]||a[s]||u)(i,t[s])}),t}function u(e){const t=e.name;if(s.default[t]){const{message:r,version:i=5}=s.default[t];throw new Error(`Using removed Babel ${i} option: ${(0,n.msg)(e)} - ${r}`)}{const t=new Error(`Unknown option: ${(0,n.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);throw t.code="BABEL_UNKNOWN_OPTION",t}}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},{"../plugin":34,"./option-assertions":36,"./removed":39}],38:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.validatePluginObject=function(e){const t={type:"root",source:"plugin"};return Object.keys(e).forEach(r=>{const s=n[r];if(!s){const e=new Error(`.${r} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}s({type:"option",name:r,parent:t},e[r])}),e};var s=e("./option-assertions");const n={name:s.assertString,manipulateOptions:s.assertFunction,pre:s.assertFunction,post:s.assertFunction,inherits:s.assertFunction,visitor:function(e,t){const r=(0,s.assertObject)(e,t);if(r&&(Object.keys(r).forEach(e=>(function(e,t){if(t&&"object"==typeof t)Object.keys(t).forEach(t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)});else if("function"!=typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t})(e,r[e])),r.enter||r.exit))throw new Error(`${(0,s.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return r},parserOverride:s.assertFunction,generatorOverride:s.assertFunction}},{"./option-assertions":36}],39:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},{}],40:[function(e,t,r){"use strict";function s(){const t=(r=e("gensync"))&&r.__esModule?r:{default:r};var r;return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.maybeAsync=function(e,t){return(0,s().default)({sync(...r){const s=e.apply(this,r);if(p(s))throw new Error(t);return s},async(...t){return Promise.resolve(e.apply(this,t))}})},r.forwardAsync=function(e,t){const r=(0,s().default)(e);return o(e=>{const s=r[e];return t(s)})},r.isThenable=p,r.waitFor=r.onFirstPause=r.isAsync=void 0;const n=e=>e,i=(0,s().default)(function*(e){return yield*e}),a=(0,s().default)({sync:()=>!1,errback:e=>e(null,!0)});r.isAsync=a;const o=(0,s().default)({sync:e=>e("sync"),async:e=>e("async")});const l=(0,s().default)({name:"onFirstPause",arity:2,sync:function(e){return i.sync(e)},errback:function(e,t,r){let s=!1;i.errback(e,(e,t)=>{s=!0,r(e,t)}),s||t()}});r.onFirstPause=l;const c=(0,s().default)({sync:n,async:n});function p(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}r.waitFor=c},{gensync:274}],41:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(r,"File",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(r,"buildExternalHelpers",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(r,"resolvePlugin",{enumerable:!0,get:function(){return i.resolvePlugin}}),Object.defineProperty(r,"resolvePreset",{enumerable:!0,get:function(){return i.resolvePreset}}),Object.defineProperty(r,"version",{enumerable:!0,get:function(){return a.version}}),Object.defineProperty(r,"getEnv",{enumerable:!0,get:function(){return o.getEnv}}),Object.defineProperty(r,"tokTypes",{enumerable:!0,get:function(){return function(){const t=e("@babel/parser");(function(){return t});return t}().tokTypes}}),Object.defineProperty(r,"traverse",{enumerable:!0,get:function(){return function(){const t=m(e("@babel/traverse"));(function(){return t});return t}().default}}),Object.defineProperty(r,"template",{enumerable:!0,get:function(){return function(){const t=m(e("@babel/template"));(function(){return t});return t}().default}}),Object.defineProperty(r,"createConfigItem",{enumerable:!0,get:function(){return c.createConfigItem}}),Object.defineProperty(r,"loadPartialConfig",{enumerable:!0,get:function(){return p.loadPartialConfig}}),Object.defineProperty(r,"loadPartialConfigSync",{enumerable:!0,get:function(){return p.loadPartialConfigSync}}),Object.defineProperty(r,"loadPartialConfigAsync",{enumerable:!0,get:function(){return p.loadPartialConfigAsync}}),Object.defineProperty(r,"loadOptions",{enumerable:!0,get:function(){return p.loadOptions}}),Object.defineProperty(r,"loadOptionsSync",{enumerable:!0,get:function(){return p.loadOptionsSync}}),Object.defineProperty(r,"loadOptionsAsync",{enumerable:!0,get:function(){return p.loadOptionsAsync}}),Object.defineProperty(r,"transform",{enumerable:!0,get:function(){return u.transform}}),Object.defineProperty(r,"transformSync",{enumerable:!0,get:function(){return u.transformSync}}),Object.defineProperty(r,"transformAsync",{enumerable:!0,get:function(){return u.transformAsync}}),Object.defineProperty(r,"transformFile",{enumerable:!0,get:function(){return d.transformFile}}),Object.defineProperty(r,"transformFileSync",{enumerable:!0,get:function(){return d.transformFileSync}}),Object.defineProperty(r,"transformFileAsync",{enumerable:!0,get:function(){return d.transformFileAsync}}),Object.defineProperty(r,"transformFromAst",{enumerable:!0,get:function(){return f.transformFromAst}}),Object.defineProperty(r,"transformFromAstSync",{enumerable:!0,get:function(){return f.transformFromAstSync}}),Object.defineProperty(r,"transformFromAstAsync",{enumerable:!0,get:function(){return f.transformFromAstAsync}}),Object.defineProperty(r,"parse",{enumerable:!0,get:function(){return h.parse}}),Object.defineProperty(r,"parseSync",{enumerable:!0,get:function(){return h.parseSync}}),Object.defineProperty(r,"parseAsync",{enumerable:!0,get:function(){return h.parseAsync}}),r.types=r.OptionManager=r.DEFAULT_EXTENSIONS=void 0;var s=m(e("./transformation/file/file")),n=m(e("./tools/build-external-helpers")),i=e("./config/files"),a=e("../package.json"),o=e("./config/helpers/environment");function l(){const t=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));return l=function(){return t},t}Object.defineProperty(r,"types",{enumerable:!0,get:function(){return l()}});var c=e("./config/item"),p=e("./config"),u=e("./transform"),d=e("./transform-file"),f=e("./transform-ast"),h=e("./parse");function y(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function m(e){return e&&e.__esModule?e:{default:e}}const g=Object.freeze([".js",".jsx",".es6",".es",".mjs"]);r.DEFAULT_EXTENSIONS=g;r.OptionManager=class{init(e){return(0,p.loadOptions)(e)}}},{"../package.json":58,"./config":30,"./config/files":26,"./config/helpers/environment":29,"./config/item":31,"./parse":42,"./tools/build-external-helpers":45,"./transform":48,"./transform-ast":46,"./transform-file":47,"./transformation/file/file":50,"@babel/parser":119,"@babel/template":122,"@babel/traverse":131,"@babel/types":196}],42:[function(e,t,r){"use strict";function s(){const t=o(e("gensync"));return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.parseAsync=r.parseSync=r.parse=void 0;var n=o(e("./config")),i=o(e("./parser")),a=o(e("./transformation/normalize-opts"));function o(e){return e&&e.__esModule?e:{default:e}}const l=(0,s().default)(function*(e,t){const r=yield*(0,n.default)(t);return null===r?null:yield*(0,i.default)(r.passes,(0,a.default)(r),e)});r.parse=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return l.sync(e,t);l.errback(e,t,r)};const c=l.sync;r.parseSync=c;const p=l.async;r.parseAsync=p},{"./config":30,"./parser":43,"./transformation/normalize-opts":55,gensync:274}],43:[function(e,t,r){"use strict";function s(){const t=e("@babel/parser");return s=function(){return t},t}function n(){const t=e("@babel/code-frame");return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function*(e,{parserOpts:t,highlightCode:r=!0,filename:i="unknown"},o){try{const l=[];for(const r of e)for(const e of r){const{parserOverride:r}=e;if(r){const e=r(o,t,s().parse);void 0!==e&&l.push(e)}}if(0===l.length)return(0,s().parse)(o,t);if(1===l.length){if(yield*[],"function"==typeof l[0].then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return l[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(e){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===e.code&&(e.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:t,missingPlugin:s}=e;if(t){const l=(0,n().codeFrameColumns)(o,{start:{line:t.line,column:t.column+1}},{highlightCode:r});e.message=s?`${i}: `+(0,a.default)(s[0],t,l):`${i}: ${e.message}\n\n`+l,e.code="BABEL_PARSE_ERROR"}throw e}};var i,a=(i=e("./util/missing-plugin-helper"))&&i.__esModule?i:{default:i}},{"./util/missing-plugin-helper":44,"@babel/code-frame":18,"@babel/parser":119}],44:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){let i=`Support for the experimental syntax '${e}' isn't currently enabled `+`(${t.line}:${t.column+1}):\n\n`+r;const a=s[e];if(a){const{syntax:e,transform:t}=a;if(e){const r=n(e);if(t){const e=n(t),s=t.name.startsWith("@babel/plugin")?"plugins":"presets";i+=`\n\nAdd ${e} to the '${s}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${r} to the 'plugins' section to enable parsing.`}else i+=`\n\nAdd ${r} to the 'plugins' section of your Babel config `+"to enable parsing."}}return i};const s={classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://git.io/JvpRG"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/preset-flow",url:"https://git.io/JfeDn"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/preset-react",url:"https://git.io/JfeDR"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},moduleAttributes:{syntax:{name:"@babel/plugin-syntax-module-attributes",url:"https://git.io/JfK3k"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},privateIn:{syntax:{name:"@babel/plugin-syntax-private-property-in-object",url:"https://git.io/JfK3q"},transform:{name:"@babel/plugin-proposal-private-property-in-object",url:"https://git.io/JfK3O"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://git.io/JvKp3"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/preset-typescript",url:"https://git.io/JfeDz"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}};s.privateIn.syntax=s.privateIn.transform;const n=({name:e,url:t})=>`${e} (${t})`},{}],45:[function(e,t,r){"use strict";function s(){const t=p(e("@babel/helpers"));return s=function(){return t},t}function n(){const t=l(e("@babel/generator"));return n=function(){return t},t}function i(){const t=l(e("@babel/template"));return i=function(){return t},t}function a(){const t=p(e("@babel/types"));return a=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t="global"){let r;const s={global:d,module:f,umd:h,var:y}[t];if(!s)throw new Error(`Unsupported output type ${t}`);r=s(e);return(0,n().default)(r).code};var o=l(e("../transformation/file/file"));function l(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}const u=e=>i().default`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(e);function d(e){const t=a().identifier("babelHelpers"),r=[],s=a().functionExpression(null,[a().identifier("global")],a().blockStatement(r)),n=a().program([a().expressionStatement(a().callExpression(s,[a().conditionalExpression(a().binaryExpression("===",a().unaryExpression("typeof",a().identifier("global")),a().stringLiteral("undefined")),a().identifier("self"),a().identifier("global"))]))]);return r.push(a().variableDeclaration("var",[a().variableDeclarator(t,a().assignmentExpression("=",a().memberExpression(a().identifier("global"),t),a().objectExpression([])))])),m(r,t,e),n}function f(e){const t=[],r=m(t,null,e);return t.unshift(a().exportNamedDeclaration(null,Object.keys(r).map(e=>a().exportSpecifier(a().cloneNode(r[e]),a().identifier(e))))),a().program(t,[],"module")}function h(e){const t=a().identifier("babelHelpers"),r=[];return r.push(a().variableDeclaration("var",[a().variableDeclarator(t,a().identifier("global"))])),m(r,t,e),a().program([u({FACTORY_PARAMETERS:a().identifier("global"),BROWSER_ARGUMENTS:a().assignmentExpression("=",a().memberExpression(a().identifier("root"),t),a().objectExpression([])),COMMON_ARGUMENTS:a().identifier("exports"),AMD_ARGUMENTS:a().arrayExpression([a().stringLiteral("exports")]),FACTORY_BODY:r,UMD_ROOT:a().identifier("this")})])}function y(e){const t=a().identifier("babelHelpers"),r=[];r.push(a().variableDeclaration("var",[a().variableDeclarator(t,a().objectExpression([]))]));const s=a().program(r);return m(r,t,e),r.push(a().expressionStatement(t)),s}function m(e,t,r){const n=e=>t?a().memberExpression(t,a().identifier(e)):a().identifier(`_${e}`),i={};return s().list.forEach(function(t){if(r&&r.indexOf(t)<0)return;const a=i[t]=n(t);s().ensure(t,o.default);const{nodes:l}=s().get(t,n,a);e.push(...l)}),i}},{"../transformation/file/file":50,"@babel/generator":72,"@babel/helpers":117,"@babel/template":122,"@babel/types":196}],46:[function(e,t,r){"use strict";function s(){const t=a(e("gensync"));return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.transformFromAstAsync=r.transformFromAstSync=r.transformFromAst=void 0;var n=a(e("./config")),i=e("./transformation");function a(e){return e&&e.__esModule?e:{default:e}}const o=(0,s().default)(function*(e,t,r){const s=yield*(0,n.default)(r);if(null===s)return null;if(!e)throw new Error("No AST given");return yield*(0,i.run)(s,t,e)});r.transformFromAst=function(e,t,r,s){if("function"==typeof r&&(s=r,r=void 0),void 0===s)return o.sync(e,t,r);o.errback(e,t,r,s)};const l=o.sync;r.transformFromAstSync=l;const c=o.async;r.transformFromAstAsync=c},{"./config":30,"./transformation":53,gensync:274}],47:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")},r.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},r.transformFile=void 0;r.transformFile=function(e,t,r){"function"==typeof t&&(r=t),r(new Error("Transforming files is not supported in browsers"),null)}},{}],48:[function(e,t,r){"use strict";function s(){const t=a(e("gensync"));return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.transformAsync=r.transformSync=r.transform=void 0;var n=a(e("./config")),i=e("./transformation");function a(e){return e&&e.__esModule?e:{default:e}}const o=(0,s().default)(function*(e,t){const r=yield*(0,n.default)(t);return null===r?null:yield*(0,i.run)(r,e)});r.transform=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return o.sync(e,t);o.errback(e,t,r)};const l=o.sync;r.transformSync=l;const c=o.async;r.transformAsync=c},{"./config":30,"./transformation":53,gensync:274}],49:[function(e,t,r){"use strict";function s(){const t=i(e("lodash/sortBy"));return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){if(!a){const e=n.default.sync({babelrc:!1,configFile:!1,plugins:[o]});if(!(a=e?e.passes[0][0]:void 0))throw new Error("Assertion failure")}return a};var n=i(e("../config"));function i(e){return e&&e.__esModule?e:{default:e}}let a;const o={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){let t=!1;for(let r=0;r<e.body.length;r++){const s=e.body[r];if(null!=(null==s?void 0:s._blockHoist)){t=!0;break}}t&&(e.body=(0,s().default)(e.body,function(e){let t=null==e?void 0:e._blockHoist;return null==t&&(t=1),!0===t&&(t=2),-1*t}))}}}}},{"../config":30,"lodash/sortBy":454}],50:[function(e,t,r){"use strict";function s(){const t=p(e("@babel/helpers"));return s=function(){return t},t}function n(){const t=p(e("@babel/traverse"));return n=function(){return t},t}function i(){const t=e("@babel/code-frame");return i=function(){return t},t}function a(){const t=p(e("@babel/types"));return a=function(){return t},t}function o(){const t=e("@babel/helper-module-transforms");return o=function(){return t},t}function l(){const t=(r=e("semver"))&&r.__esModule?r:{default:r};var r;return l=function(){return t},t}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;const u={enter(e,t){const r=e.node.loc;r&&(t.loc=r,e.stop())}};class d{constructor(e,{code:t,ast:r,inputMap:s}){this._map=new Map,this.declarations={},this.path=null,this.ast={},this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=r,this.inputMap=s,this.path=n().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(a().interpreterDirective(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,o().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let r;try{r=s().minVersion(e)}catch(e){if("BABEL_HELPER_UNKNOWN"!==e.code)throw e;return!1}return"string"!=typeof t||(l().default.valid(t)&&(t=`^${t}`),!l().default.intersects(`<${r}`,t)&&!l().default.intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return a().cloneNode(t);const r=this.get("helperGenerator");if(r){const t=r(e);if(t)return t}s().ensure(e,d);const n=this.declarations[e]=this.scope.generateUidIdentifier(e),i={};for(const t of s().getDependencies(e))i[t]=this.addHelper(t);const{nodes:o,globals:l}=s().get(e,e=>i[e],n,Object.keys(this.scope.getAllBindings()));return l.forEach(e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)}),o.forEach(e=>{e._compact=!0}),this.path.unshiftContainer("body",o),this.path.get("body").forEach(e=>{-1!==o.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)}),n}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,r=SyntaxError){let s=e&&(e.loc||e._loc);if(!s&&e){const r={loc:null};(0,n().default)(e,u,this.scope,r);let i="This is an error on an internal node. Probably an internal error.";(s=r.loc)&&(i+=" Location has been estimated."),t+=` (${i})`}if(s){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,i().codeFrameColumns)(this.code,{start:{line:s.start.line,column:s.start.column+1},end:s.end&&s.start.line===s.end.line?{line:s.end.line,column:s.end.column+1}:void 0},{highlightCode:e})}return new r(t)}}r.default=d},{"@babel/code-frame":18,"@babel/helper-module-transforms":104,"@babel/helpers":117,"@babel/traverse":131,"@babel/types":196,semver:57}],51:[function(e,t,r){"use strict";function s(){const t=a(e("convert-source-map"));return s=function(){return t},t}function n(){const t=a(e("@babel/generator"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const{opts:r,ast:a,code:o,inputMap:l}=t,c=[];for(const t of e)for(const e of t){const{generatorOverride:t}=e;if(t){const e=t(a,r.generatorOpts,o,n().default);void 0!==e&&c.push(e)}}let p;if(0===c.length)p=(0,n().default)(a,r.generatorOpts,o);else{if(1!==c.length)throw new Error("More than one plugin attempted to override codegen.");if("function"==typeof(p=c[0]).then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:u,map:d}=p;d&&l&&(d=(0,i.default)(l.toObject(),d));"inline"!==r.sourceMaps&&"both"!==r.sourceMaps||(u+="\n"+s().default.fromObject(d).toComment());"inline"===r.sourceMaps&&(d=null);return{outputCode:u,outputMap:d}};var i=a(e("./merge-map"));function a(e){return e&&e.__esModule?e:{default:e}}},{"./merge-map":52,"@babel/generator":72,"convert-source-map":248}],52:[function(e,t,r){"use strict";function s(){const t=(r=e("source-map"))&&r.__esModule?r:{default:r};var r;return s=function(){return t},t}function n(e){return`${e.line}/${e.columnStart}`}function i(e){const t=new(s().default.SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),r=new Map,n=new Map;let i=null;return t.computeColumnSpans(),t.eachMapping(e=>{if(null===e.originalLine)return;let s=r.get(e.source);s||(s={path:e.source,content:t.sourceContentFor(e.source,!0)},r.set(e.source,s));let a=n.get(s);a||(a={source:s,mappings:[]},n.set(s,a));const o={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};i&&i.source===s&&i.mapping.line===e.originalLine&&(i.mapping.columnEnd=e.originalColumn),i={source:s,mapping:o},a.mappings.push({original:o,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map(e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1}))})},null,s().default.SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(n.values())}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const r=i(e),a=i(t),o=new(s().default.SourceMapGenerator);for(const{source:e}of r.sources)"string"==typeof e.content&&o.setSourceContent(e.path,e.content);if(1===a.sources.length){const e=a.sources[0],t=new Map;!function(e,t){for(const{source:r,mappings:s}of e.sources)for(const{original:e,generated:n}of s)for(const s of n)t(s,e,r)}(r,(r,s,i)=>{!function(e,t,r){const s=function({mappings:e},{line:t,columnStart:r,columnEnd:s}){return function(e,t){const r=function(e,t){let r=0,s=e.length;for(;r<s;){const n=Math.floor((r+s)/2),i=e[n],a=t(i);if(0===a){r=n;break}a>=0?s=n:r=n+1}let n=r;if(n<e.length){for(;n>=0&&t(e[n])>=0;)n--;return n+1}return n}(e,t),s=[];for(let n=r;n<e.length&&0===t(e[n]);n++)s.push(e[n]);return s}(e,({original:e})=>t>e.line?-1:t<e.line?1:r>=e.columnEnd?-1:s<=e.columnStart?1:0)}(e,t);for(const{generated:e}of s)for(const t of e)r(t)}(e,r,e=>{const r=n(e);t.has(r)||(t.set(r,e),o.addMapping({source:i.path,original:{line:s.line,column:s.columnStart},generated:{line:e.line,column:e.columnStart},name:s.name}))})});for(const e of t.values()){if(e.columnEnd===1/0)continue;const r={line:e.line,columnStart:e.columnEnd},s=n(r);t.has(s)||o.addMapping({generated:{line:r.line,column:r.columnStart}})}}const l=o.toJSON();"string"==typeof r.sourceRoot&&(l.sourceRoot=r.sourceRoot);return l}},{"source-map":485}],53:[function(e,t,r){"use strict";function s(){const t=c(e("@babel/traverse"));return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.run=function*(e,t,r){const c=yield*(0,o.default)(e.passes,(0,a.default)(e),t,r),u=c.opts;try{yield*function*(e,t){for(const r of t){const t=[],a=[],o=[];for(const s of r.concat([(0,i.default)()])){const r=new n.default(e,s.key,s.options);t.push([s,r]),a.push(r),o.push(s.visitor)}for(const[r,s]of t){const t=r.pre;if(t){const r=t.call(s,e);if(yield*[],p(r))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const l=s().default.visitors.merge(o,a,e.opts.wrapPluginVisitorMethod);(0,s().default)(e.ast,l,e.scope);for(const[r,s]of t){const t=r.post;if(t){const r=t.call(s,e);if(yield*[],p(r))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(c,e.passes)}catch(e){var d;throw e.message=`${null!=(d=u.filename)?d:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_TRANSFORM_ERROR"),e}let f,h;try{!1!==u.code&&({outputCode:f,outputMap:h}=(0,l.default)(e.passes,c))}catch(e){var y;throw e.message=`${null!=(y=u.filename)?y:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_GENERATE_ERROR"),e}return{metadata:c.metadata,options:u,ast:!0===u.ast?c.ast:null,code:void 0===f?null:f,map:void 0===h?null:h,sourceType:c.ast.program.sourceType}};var n=c(e("./plugin-pass")),i=c(e("./block-hoist-plugin")),a=c(e("./normalize-opts")),o=c(e("./normalize-file")),l=c(e("./file/generate"));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}},{"./block-hoist-plugin":49,"./file/generate":51,"./normalize-file":54,"./normalize-opts":55,"./plugin-pass":56,"@babel/traverse":131}],54:[function(e,t,r){"use strict";function s(){const t=d(e("fs"));return s=function(){return t},t}function n(){const t=d(e("path"));return n=function(){return t},t}function i(){const t=d(e("debug"));return i=function(){return t},t}function a(){const t=d(e("lodash/cloneDeep"));return a=function(){return t},t}function o(){const t=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));return o=function(){return t},t}function l(){const t=d(e("convert-source-map"));return l=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function*(e,t,r,i){if(r=`${r||""}`,i){if("Program"===i.type)i=o().file(i,[],[]);else if("File"!==i.type)throw new Error("AST root must be a Program or File node");i=(0,a().default)(i)}else i=yield*(0,p.default)(e,t,r);let u=null;if(!1!==t.inputSourceMap){if("object"==typeof t.inputSourceMap&&(u=l().default.fromObject(t.inputSourceMap)),!u){const e=b(y,i);if(e)try{u=l().default.fromComment(e)}catch(e){f("discarding unknown inline input sourcemap",e)}}if(!u){const e=b(m,i);if("string"==typeof t.filename&&e)try{const r=m.exec(e),i=s().default.readFileSync(n().default.resolve(n().default.dirname(t.filename),r[1]));i.length>h?f("skip merging input map > 1 MB"):u=l().default.fromJSON(i)}catch(e){f("discarding unknown file input sourcemap",e)}else e&&f("discarding un-loadable file input sourcemap")}}return new c.default(t,{code:r,ast:i,inputMap:u})};var c=d(e("./file/file")),p=d(e("../parser"));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}const f=(0,i().default)("babel:transform:file"),h=1e6;const y=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,m=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function g(e,t,r){return t&&(t=t.filter(({value:t})=>!e.test(t)||(r=t,!1))),[t,r]}function b(e,t){let r=null;return o().traverseFast(t,t=>{[t.leadingComments,r]=g(e,t.leadingComments,r),[t.innerComments,r]=g(e,t.innerComments,r),[t.trailingComments,r]=g(e,t.trailingComments,r)}),r}},{"../parser":43,"./file/file":50,"@babel/types":196,"convert-source-map":248,debug:270,fs:7,"lodash/cloneDeep":428,path:12}],55:[function(e,t,r){"use strict";function s(){const t=(r=e("path"))&&r.__esModule?r:{default:r};var r;return s=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const{filename:t,cwd:r,filenameRelative:n=("string"==typeof t?s().default.relative(r,t):"unknown"),sourceType:i="module",inputSourceMap:a,sourceMaps:o=!!a,moduleRoot:l,sourceRoot:c=l,sourceFileName:p=s().default.basename(n),comments:u=!0,compact:d="auto"}=e.options,f=e.options,h=Object.assign({},f,{parserOpts:Object.assign({sourceType:".mjs"===s().default.extname(n)?"module":i,sourceFileName:t,plugins:[]},f.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:f.auxiliaryCommentBefore,auxiliaryCommentAfter:f.auxiliaryCommentAfter,retainLines:f.retainLines,comments:u,shouldPrintComment:f.shouldPrintComment,compact:d,minified:f.minified,sourceMaps:o,sourceRoot:c,sourceFileName:p},f.generatorOpts)});for(const t of e.passes)for(const e of t)e.manipulateOptions&&e.manipulateOptions(h,h.parserOpts);return h}},{path:12}],56:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=class{constructor(e,t,r){this._map=new Map,this.key=t,this.file=e,this.opts=r||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}getModuleName(){return this.file.getModuleName()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}},{}],57:[function(e,t,r){(function(e){var s;r=t.exports=J,s="object"==typeof e&&e.env&&e.env.NODE_DEBUG&&/\bsemver\b/i.test(e.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var n=256,i=Number.MAX_SAFE_INTEGER||9007199254740991,a=r.re=[],o=r.src=[],l=0,c=l++;o[c]="0|[1-9]\\d*";var p=l++;o[p]="[0-9]+";var u=l++;o[u]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var d=l++;o[d]="("+o[c]+")\\.("+o[c]+")\\.("+o[c]+")";var f=l++;o[f]="("+o[p]+")\\.("+o[p]+")\\.("+o[p]+")";var h=l++;o[h]="(?:"+o[c]+"|"+o[u]+")";var y=l++;o[y]="(?:"+o[p]+"|"+o[u]+")";var m=l++;o[m]="(?:-("+o[h]+"(?:\\."+o[h]+")*))";var g=l++;o[g]="(?:-?("+o[y]+"(?:\\."+o[y]+")*))";var b=l++;o[b]="[0-9A-Za-z-]+";var x=l++;o[x]="(?:\\+("+o[b]+"(?:\\."+o[b]+")*))";var v=l++,E="v?"+o[d]+o[m]+"?"+o[x]+"?";o[v]="^"+E+"$";var T="[v=\\s]*"+o[f]+o[g]+"?"+o[x]+"?",w=l++;o[w]="^"+T+"$";var j=l++;o[j]="((?:<|>)?=?)";var S=l++;o[S]=o[p]+"|x|X|\\*";var P=l++;o[P]=o[c]+"|x|X|\\*";var _=l++;o[_]="[v=\\s]*("+o[P]+")(?:\\.("+o[P]+")(?:\\.("+o[P]+")(?:"+o[m]+")?"+o[x]+"?)?)?";var A=l++;o[A]="[v=\\s]*("+o[S]+")(?:\\.("+o[S]+")(?:\\.("+o[S]+")(?:"+o[g]+")?"+o[x]+"?)?)?";var O=l++;o[O]="^"+o[j]+"\\s*"+o[_]+"$";var k=l++;o[k]="^"+o[j]+"\\s*"+o[A]+"$";var C=l++;o[C]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";var I=l++;o[I]="(?:~>?)";var N=l++;o[N]="(\\s*)"+o[I]+"\\s+",a[N]=new RegExp(o[N],"g");var M=l++;o[M]="^"+o[I]+o[_]+"$";var D=l++;o[D]="^"+o[I]+o[A]+"$";var L=l++;o[L]="(?:\\^)";var B=l++;o[B]="(\\s*)"+o[L]+"\\s+",a[B]=new RegExp(o[B],"g");var R=l++;o[R]="^"+o[L]+o[_]+"$";var F=l++;o[F]="^"+o[L]+o[A]+"$";var U=l++;o[U]="^"+o[j]+"\\s*("+T+")$|^$";var V=l++;o[V]="^"+o[j]+"\\s*("+E+")$|^$";var W=l++;o[W]="(\\s*)"+o[j]+"\\s*("+T+"|"+o[_]+")",a[W]=new RegExp(o[W],"g");var $=l++;o[$]="^\\s*("+o[_]+")\\s+-\\s+("+o[_]+")\\s*$";var K=l++;o[K]="^\\s*("+o[A]+")\\s+-\\s+("+o[A]+")\\s*$";var q=l++;o[q]="(<|>)?=?\\s*\\*";for(var G=0;G<35;G++)s(G,o[G]),a[G]||(a[G]=new RegExp(o[G]));function z(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof J)return e;if("string"!=typeof e)return null;if(e.length>n)return null;if(!(t.loose?a[w]:a[v]).test(e))return null;try{return new J(e,t)}catch(e){return null}}function J(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof J){if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>n)throw new TypeError("version is longer than "+n+" characters");if(!(this instanceof J))return new J(e,t);s("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?a[w]:a[v]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(t>=0&&t<i)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}r.parse=z,r.valid=function(e,t){var r=z(e,t);return r?r.version:null},r.clean=function(e,t){var r=z(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null},r.SemVer=J,J.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},J.prototype.toString=function(){return this.version},J.prototype.compare=function(e){return s("SemVer.compare",this.version,this.options,e),e instanceof J||(e=new J(e,this.options)),this.compareMain(e)||this.comparePre(e)},J.prototype.compareMain=function(e){return e instanceof J||(e=new J(e,this.options)),X(this.major,e.major)||X(this.minor,e.minor)||X(this.patch,e.patch)},J.prototype.comparePre=function(e){if(e instanceof J||(e=new J(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],n=e.prerelease[t];if(s("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n)return X(r,n)}while(++t)},J.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)"number"==typeof this.prerelease[r]&&(this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,t,r,s){"string"==typeof r&&(s=r,r=void 0);try{return new J(e,r).inc(t,s).version}catch(e){return null}},r.diff=function(e,t){if(ee(e,t))return null;var r=z(e),s=z(t),n="";if(r.prerelease.length||s.prerelease.length){n="pre";var i="prerelease"}for(var a in r)if(("major"===a||"minor"===a||"patch"===a)&&r[a]!==s[a])return n+a;return i},r.compareIdentifiers=X;var Y=/^[0-9]+$/;function X(e,t){var r=Y.test(e),s=Y.test(t);return r&&s&&(e=+e,t=+t),e===t?0:r&&!s?-1:s&&!r?1:e<t?-1:1}function H(e,t,r){return new J(e,r).compare(new J(t,r))}function Q(e,t,r){return H(e,t,r)>0}function Z(e,t,r){return H(e,t,r)<0}function ee(e,t,r){return 0===H(e,t,r)}function te(e,t,r){return 0!==H(e,t,r)}function re(e,t,r){return H(e,t,r)>=0}function se(e,t,r){return H(e,t,r)<=0}function ne(e,t,r,s){switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return ee(e,r,s);case"!=":return te(e,r,s);case">":return Q(e,r,s);case">=":return re(e,r,s);case"<":return Z(e,r,s);case"<=":return se(e,r,s);default:throw new TypeError("Invalid operator: "+t)}}function ie(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof ie){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof ie))return new ie(e,t);s("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===ae?this.value="":this.value=this.operator+this.semver.version,s("comp",this)}r.rcompareIdentifiers=function(e,t){return X(t,e)},r.major=function(e,t){return new J(e,t).major},r.minor=function(e,t){return new J(e,t).minor},r.patch=function(e,t){return new J(e,t).patch},r.compare=H,r.compareLoose=function(e,t){return H(e,t,!0)},r.rcompare=function(e,t,r){return H(t,e,r)},r.sort=function(e,t){return e.sort(function(e,s){return r.compare(e,s,t)})},r.rsort=function(e,t){return e.sort(function(e,s){return r.rcompare(e,s,t)})},r.gt=Q,r.lt=Z,r.eq=ee,r.neq=te,r.gte=re,r.lte=se,r.cmp=ne,r.Comparator=ie;var ae={};function oe(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof oe)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new oe(e.raw,t);if(e instanceof ie)return new oe(e.value,t);if(!(this instanceof oe))return new oe(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function le(e){return!e||"x"===e.toLowerCase()||"*"===e}function ce(e,t,r,s,n,i,a,o,l,c,p,u,d){return((t=le(r)?"":le(s)?">="+r+".0.0":le(n)?">="+r+"."+s+".0":">="+t)+" "+(o=le(l)?"":le(c)?"<"+(+l+1)+".0.0":le(p)?"<"+l+"."+(+c+1)+".0":u?"<="+l+"."+c+"."+p+"-"+u:"<="+o)).trim()}function pe(e,t,r){for(var n=0;n<e.length;n++)if(!e[n].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(n=0;n<e.length;n++)if(s(e[n].semver),e[n].semver!==ae&&e[n].semver.prerelease.length>0){var i=e[n].semver;if(i.major===t.major&&i.minor===t.minor&&i.patch===t.patch)return!0}return!1}return!0}function ue(e,t,r){try{t=new oe(t,r)}catch(e){return!1}return t.test(e)}function de(e,t,r,s){var n,i,a,o,l;switch(e=new J(e,s),t=new oe(t,s),r){case">":n=Q,i=se,a=Z,o=">",l=">=";break;case"<":n=Z,i=re,a=Q,o="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(ue(e,t,s))return!1;for(var c=0;c<t.set.length;++c){var p=t.set[c],u=null,d=null;if(p.forEach(function(e){e.semver===ae&&(e=new ie(">=0.0.0")),u=u||e,d=d||e,n(e.semver,u.semver,s)?u=e:a(e.semver,d.semver,s)&&(d=e)}),u.operator===o||u.operator===l)return!1;if((!d.operator||d.operator===o)&&i(e,d.semver))return!1;if(d.operator===l&&a(e,d.semver))return!1}return!0}ie.prototype.parse=function(e){var t=this.options.loose?a[U]:a[V],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=r[1],"="===this.operator&&(this.operator=""),r[2]?this.semver=new J(r[2],this.options.loose):this.semver=ae},ie.prototype.toString=function(){return this.value},ie.prototype.test=function(e){return s("Comparator.test",e,this.options.loose),this.semver===ae||("string"==typeof e&&(e=new J(e,this.options)),ne(e,this.operator,this.semver,this.options))},ie.prototype.intersects=function(e,t){if(!(e instanceof ie))throw new TypeError("a Comparator is required");var r;if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return r=new oe(e.value,t),ue(this.value,r,t);if(""===e.operator)return r=new oe(this.value,t),ue(e.semver,r,t);var s=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,a=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),o=ne(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),l=ne(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return s||n||i&&a||o||l},r.Range=oe,oe.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},oe.prototype.toString=function(){return this.range},oe.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?a[K]:a[$];e=e.replace(r,ce),s("hyphen replace",e),e=e.replace(a[W],"$1$2$3"),s("comparator trim",e,a[W]),e=(e=(e=e.replace(a[N],"$1~")).replace(a[B],"$1^")).split(/\s+/).join(" ");var n=t?a[U]:a[V],i=e.split(" ").map(function(e){return function(e,t){return s("comp",e,t),e=function(e,t){return e.trim().split(/\s+/).map(function(e){return function(e,t){s("caret",e,t);var r=t.loose?a[F]:a[R];return e.replace(r,function(t,r,n,i,a){var o;return s("caret",e,t,r,n,i,a),le(r)?o="":le(n)?o=">="+r+".0.0 <"+(+r+1)+".0.0":le(i)?o="0"===r?">="+r+"."+n+".0 <"+r+"."+(+n+1)+".0":">="+r+"."+n+".0 <"+(+r+1)+".0.0":a?(s("replaceCaret pr",a),o="0"===r?"0"===n?">="+r+"."+n+"."+i+"-"+a+" <"+r+"."+n+"."+(+i+1):">="+r+"."+n+"."+i+"-"+a+" <"+r+"."+(+n+1)+".0":">="+r+"."+n+"."+i+"-"+a+" <"+(+r+1)+".0.0"):(s("no pr"),o="0"===r?"0"===n?">="+r+"."+n+"."+i+" <"+r+"."+n+"."+(+i+1):">="+r+"."+n+"."+i+" <"+r+"."+(+n+1)+".0":">="+r+"."+n+"."+i+" <"+(+r+1)+".0.0"),s("caret return",o),o})}(e,t)}).join(" ")}(e,t),s("caret",e),e=function(e,t){return e.trim().split(/\s+/).map(function(e){return function(e,t){var r=t.loose?a[D]:a[M];return e.replace(r,function(t,r,n,i,a){var o;return s("tilde",e,t,r,n,i,a),le(r)?o="":le(n)?o=">="+r+".0.0 <"+(+r+1)+".0.0":le(i)?o=">="+r+"."+n+".0 <"+r+"."+(+n+1)+".0":a?(s("replaceTilde pr",a),o=">="+r+"."+n+"."+i+"-"+a+" <"+r+"."+(+n+1)+".0"):o=">="+r+"."+n+"."+i+" <"+r+"."+(+n+1)+".0",s("tilde return",o),o})}(e,t)}).join(" ")}(e,t),s("tildes",e),e=function(e,t){return s("replaceXRanges",e,t),e.split(/\s+/).map(function(e){return function(e,t){e=e.trim();var r=t.loose?a[k]:a[O];return e.replace(r,function(t,r,n,i,a,o){s("xRange",e,t,r,n,i,a,o);var l=le(n),c=l||le(i),p=c||le(a),u=p;return"="===r&&u&&(r=""),l?t=">"===r||"<"===r?"<0.0.0":"*":r&&u?(c&&(i=0),a=0,">"===r?(r=">=",c?(n=+n+1,i=0,a=0):(i=+i+1,a=0)):"<="===r&&(r="<",c?n=+n+1:i=+i+1),t=r+n+"."+i+"."+a):c?t=">="+n+".0.0 <"+(+n+1)+".0.0":p&&(t=">="+n+"."+i+".0 <"+n+"."+(+i+1)+".0"),s("xRange return",t),t})}(e,t)}).join(" ")}(e,t),s("xrange",e),e=function(e,t){return s("replaceStars",e,t),e.trim().replace(a[q],"")}(e,t),s("stars",e),e}(e,this.options)},this).join(" ").split(/\s+/);return this.options.loose&&(i=i.filter(function(e){return!!e.match(n)})),i=i.map(function(e){return new ie(e,this.options)},this)},oe.prototype.intersects=function(e,t){if(!(e instanceof oe))throw new TypeError("a Range is required");return this.set.some(function(r){return r.every(function(r){return e.set.some(function(e){return e.every(function(e){return r.intersects(e,t)})})})})},r.toComparators=function(e,t){return new oe(e,t).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},oe.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new J(e,this.options));for(var t=0;t<this.set.length;t++)if(pe(this.set[t],e,this.options))return!0;return!1},r.satisfies=ue,r.maxSatisfying=function(e,t,r){var s=null,n=null;try{var i=new oe(t,r)}catch(e){return null}return e.forEach(function(e){i.test(e)&&(s&&-1!==n.compare(e)||(n=new J(s=e,r)))}),s},r.minSatisfying=function(e,t,r){var s=null,n=null;try{var i=new oe(t,r)}catch(e){return null}return e.forEach(function(e){i.test(e)&&(s&&1!==n.compare(e)||(n=new J(s=e,r)))}),s},r.minVersion=function(e,t){e=new oe(e,t);var r=new J("0.0.0");if(e.test(r))return r;if(r=new J("0.0.0-0"),e.test(r))return r;r=null;for(var s=0;s<e.set.length;++s){var n=e.set[s];n.forEach(function(e){var t=new J(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!Q(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}})}if(r&&e.test(r))return r;return null},r.validRange=function(e,t){try{return new oe(e,t).range||"*"}catch(e){return null}},r.ltr=function(e,t,r){return de(e,t,"<",r)},r.gtr=function(e,t,r){return de(e,t,">",r)},r.outside=de,r.prerelease=function(e,t){var r=z(e,t);return r&&r.prerelease.length?r.prerelease:null},r.intersects=function(e,t,r){return e=new oe(e,r),t=new oe(t,r),e.intersects(t)},r.coerce=function(e){if(e instanceof J)return e;if("string"!=typeof e)return null;var t=e.match(a[C]);if(null==t)return null;return z(t[1]+"."+(t[2]||"0")+"."+(t[3]||"0"))}}).call(this,e("_process"))},{_process:13}],58:[function(e,t,r){t.exports={_from:"@babel/core@^7.0.0-0",_id:"@babel/core@7.10.5",_inBundle:!1,_integrity:"sha512-O34LQooYVDXPl7QWCdW9p4NR+QlzOr7xShPPJz8GsuCU3/8ua/wqTr7gmnxXv+WBESiGU/G5s16i6tUvHkNb+w==",_location:"/@babel/core",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@babel/core@^7.0.0-0",name:"@babel/core",escapedName:"@babel%2fcore",scope:"@babel",rawSpec:"^7.0.0-0",saveSpec:null,fetchSpec:"^7.0.0-0"},_requiredBy:["#DEV:/","#USER","/@babel/helper-transform-fixture-test-runner","/@jest/transform","/jest-config"],_resolved:"https://registry.npmjs.org/@babel/core/-/core-7.10.5.tgz",_shasum:"1f15e2cca8ad9a1d78a38ddba612f5e7cdbbd330",_spec:"@babel/core@^7.0.0-0",_where:"/tmp/7f6920d672ced1e0ba1bdaf7616e1fc486252477/package",author:{name:"Sebastian McKenzie",email:"sebmck@gmail.com"},browser:{"./lib/config/files/index.js":"./lib/config/files/index-browser.js","./lib/transform-file.js":"./lib/transform-file-browser.js","./src/config/files/index.js":"./src/config/files/index-browser.js","./src/transform-file.js":"./src/transform-file-browser.js"},bugs:{url:"https://github.com/babel/babel/issues"},bundleDependencies:!1,dependencies:{"@babel/code-frame":"^7.10.4","@babel/generator":"^7.10.5","@babel/helper-module-transforms":"^7.10.5","@babel/helpers":"^7.10.4","@babel/parser":"^7.10.5","@babel/template":"^7.10.4","@babel/traverse":"^7.10.5","@babel/types":"^7.10.5","convert-source-map":"^1.7.0",debug:"^4.1.0",gensync:"^1.0.0-beta.1",json5:"^2.1.2",lodash:"^4.17.19",resolve:"^1.3.2",semver:"^5.4.1","source-map":"^0.5.0"},deprecated:!1,description:"Babel compiler core.",devDependencies:{"@babel/helper-transform-fixture-test-runner":"^7.10.5"},engines:{node:">=6.9.0"},funding:{type:"opencollective",url:"https://opencollective.com/babel"},gitHead:"f7964a9ac51356f7df6404a25b27ba1cffba1ba7",homepage:"https://babeljs.io/",keywords:["6to5","babel","classes","const","es6","harmony","let","modules","transpile","transpiler","var","babel-core","compiler"],license:"MIT",main:"lib/index.js",name:"@babel/core",publishConfig:{access:"public"},repository:{type:"git",url:"git+https://github.com/babel/babel.git",directory:"packages/babel-core"},version:"7.10.5"}},{}],59:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;const s=/^[ \t]+$/;r.default=class{constructor(e){this._map=null,this._buf=[],this._last="",this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:null,line:null,column:null,filename:null},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,t={code:this._buf.join("").trimRight(),map:null,rawMappings:null==e?void 0:e.getRawMappings()};return e&&Object.defineProperty(t,"map",{configurable:!0,enumerable:!0,get(){return this.map=e.get()},set(e){Object.defineProperty(this,"map",{value:e,writable:!0})}}),t}append(e){this._flush();const{line:t,column:r,filename:s,identifierName:n,force:i}=this._sourcePosition;this._append(e,t,r,n,s,i)}queue(e){if("\n"===e)for(;this._queue.length>0&&s.test(this._queue[0][0]);)this._queue.shift();const{line:t,column:r,filename:n,identifierName:i,force:a}=this._sourcePosition;this._queue.unshift([e,t,r,i,n,a])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,t,r,s,n,i){this._map&&"\n"!==e[0]&&this._map.mark(this._position.line,this._position.column,t,r,s,n,i),this._buf.push(e),this._last=e[e.length-1];for(let t=0;t<e.length;t++)"\n"===e[t]?(this._position.line++,this._position.column=0):this._position.column++}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}endsWith(e){if(1===e.length){let t;if(this._queue.length>0){const e=this._queue[0][0];t=e[e.length-1]}else t=this._last;return t===e}const t=this._last+this._queue.reduce((e,t)=>t[0]+e,"");return e.length<=t.length&&t.slice(-e.length)===e}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e,!0),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t,r){e&&!t||this._normalizePosition(e,t,this._sourcePosition,r)}withSource(e,t,r){if(!this._map)return r();const s=this._sourcePosition.line,n=this._sourcePosition.column,i=this._sourcePosition.filename,a=this._sourcePosition.identifierName;this.source(e,t),r(),this._sourcePosition.force&&this._sourcePosition.line===s&&this._sourcePosition.column===n&&this._sourcePosition.filename===i||this._disallowedPop&&this._disallowedPop.line===s&&this._disallowedPop.column===n&&this._disallowedPop.filename===i||(this._sourcePosition.line=s,this._sourcePosition.column=n,this._sourcePosition.filename=i,this._sourcePosition.identifierName=a,this._sourcePosition.force=!1,this._disallowedPop=null)}_disallowPop(e,t){e&&!t||(this._disallowedPop=this._normalizePosition(e,t))}_normalizePosition(e,t,r,s){const n=t?t[e]:null;void 0===r&&(r={identifierName:null,line:null,column:null,filename:null,force:!1});const i=r.line,a=r.column,o=r.filename;return r.identifierName="start"===e&&(null==t?void 0:t.identifierName)||null,r.line=null==n?void 0:n.line,r.column=null==n?void 0:n.column,r.filename=null==t?void 0:t.filename,(s||r.line!==i||r.column!==a||r.filename!==o)&&(r.force=s),r}getCurrentColumn(){const e=this._queue.reduce((e,t)=>t[0]+e,""),t=e.lastIndexOf("\n");return-1===t?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce((e,t)=>t[0]+e,"");let t=0;for(let r=0;r<e.length;r++)"\n"===e[r]&&t++;return this._position.line+t}}},{}],60:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.File=function(e){e.program&&this.print(e.program.interpreter,e);this.print(e.program,e)},r.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline();this.printSequence(e.body,e)},r.BlockStatement=function(e){var t;this.token("{"),this.printInnerComments(e);const r=null==(t=e.directives)?void 0:t.length;e.body.length||r?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),r&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith("\n")||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},r.Noop=function(){},r.Directive=function(e){this.print(e.value,e),this.semicolon()},r.DirectiveLiteral=function(e){const t=this.getPossibleRaw(e);if(null!=t)return void this.token(t);const{value:r}=e;if(n.test(r)){if(s.test(r))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${r}'`)}else this.token(`"${r}"`)},r.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},r.Placeholder=function(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()};const s=/(?:^|[^\\])(?:\\\\)*'/,n=/(?:^|[^\\])(?:\\\\)*"/},{}],61:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ClassExpression=r.ClassDeclaration=function(e,t){this.format.decoratorsBeforeExport&&(s.isExportDefaultDeclaration(t)||s.isExportNamedDeclaration(t))||this.printJoin(e.decorators,e);e.declare&&(this.word("declare"),this.space());e.abstract&&(this.word("abstract"),this.space());this.word("class"),e.id&&(this.space(),this.print(e.id,e));this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e));e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},r.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith("\n")||this.newline(),this.rightBrace())},r.ClassProperty=function(e){this.printJoin(e.decorators,e),this.tsPrintClassMemberModifiers(e,!0),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},r.ClassPrivateProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},r.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},r.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},r._classMethodHead=function(e){this.printJoin(e.decorators,e),this.tsPrintClassMemberModifiers(e,!1),this._methodHead(e)};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}},{"@babel/types":196}],62:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator);this.print(e.argument,e)},r.DoExpression=function(e){this.word("do"),this.space(),this.print(e.body,e)},r.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},r.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},r.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},r.NewExpression=function(e,t){if(this.word("new"),this.space(),this.print(e.callee,e),this.format.minified&&0===e.arguments.length&&!e.optional&&!s.isCallExpression(t,{callee:e})&&!s.isMemberExpression(t)&&!s.isNewExpression(t))return;this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},r.SequenceExpression=function(e){this.printList(e.expressions,e)},r.ThisExpression=function(){this.word("this")},r.Super=function(){this.word("super")},r.Decorator=function(e){this.token("@"),this.print(e.expression,e),this.newline()},r.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&s.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;s.isLiteral(e.property)&&"number"==typeof e.property.value&&(t=!0);e.optional&&this.token("?.");t?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},r.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},r.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},r.Import=function(){this.word("import")},r.EmptyStatement=function(){this.semicolon(!0)},r.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},r.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?");this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},r.LogicalExpression=r.BinaryExpression=r.AssignmentExpression=function(e,t){const r=this.inForStatementInitCounter&&"in"===e.operator&&!n.needsParens(e,t);r&&this.token("(");this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator);this.space(),this.print(e.right,e),r&&this.token(")")},r.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},r.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&s.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;s.isLiteral(e.property)&&"number"==typeof e.property.value&&(t=!0);t?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},r.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},r.PrivateName=function(e){this.token("#"),this.print(e.id,e)},r.V8IntrinsicIdentifier=function(e){this.token("%"),this.word(e.name)},r.AwaitExpression=r.YieldExpression=void 0;var s=a(e("@babel/types")),n=a(e("../node"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=s?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function o(e){return function(t){if(this.word(e),t.delegate&&this.token("*"),t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t),this.endTerminatorless(e)}}}const l=o("yield");r.YieldExpression=l;const c=o("await");r.AwaitExpression=c},{"../node":73,"@babel/types":196}],63:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.AnyTypeAnnotation=function(){this.word("any")},r.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},r.BooleanTypeAnnotation=function(){this.word("boolean")},r.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},r.NullLiteralTypeAnnotation=function(){this.word("null")},r.DeclareClass=function(e,t){s.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("class"),this.space(),this._interfaceish(e)},r.DeclareFunction=function(e,t){s.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e));this.semicolon()},r.InferredPredicate=function(){this.token("%"),this.word("checks")},r.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},r.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},r.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},r.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},r.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},r.DeclareOpaqueType=function(e,t){s.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.OpaqueType(e)},r.DeclareVariable=function(e,t){s.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},r.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space());(function(e){if(e.declaration){const t=e.declaration;this.print(t,e),s.isStatement(t)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}).apply(this,arguments)},r.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),n.ExportAllDeclaration.apply(this,arguments)},r.EnumDeclaration=function(e){const{id:t,body:r}=e;this.word("enum"),this.space(),this.print(t,e),this.print(r,e)},r.EnumBooleanBody=function(e){const{explicitType:t}=e;o(this,"boolean",t),l(this,e)},r.EnumNumberBody=function(e){const{explicitType:t}=e;o(this,"number",t),l(this,e)},r.EnumStringBody=function(e){const{explicitType:t}=e;o(this,"string",t),l(this,e)},r.EnumSymbolBody=function(e){o(this,"symbol",!0),l(this,e)},r.EnumDefaultedMember=function(e){const{id:t}=e;this.print(t,e),this.token(",")},r.EnumBooleanMember=function(e){c(this,e)},r.EnumNumberMember=function(e){c(this,e)},r.EnumStringMember=function(e){c(this,e)},r.ExistsTypeAnnotation=function(){this.token("*")},r.FunctionTypeAnnotation=function(e,t){this.print(e.typeParameters,e),this.token("("),this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e));this.token(")"),"ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method?this.token(":"):(this.space(),this.token("=>"));this.space(),this.print(e.returnType,e)},r.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?");e.name&&(this.token(":"),this.space());this.print(e.typeAnnotation,e)},r.GenericTypeAnnotation=r.ClassImplements=r.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},r._interfaceish=function(e){this.print(e.id,e),this.print(e.typeParameters,e),e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e));e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},r._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))},r.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},r.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));this.space(),this.print(e.body,e)},r.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:p})},r.MixedTypeAnnotation=function(){this.word("mixed")},r.EmptyTypeAnnotation=function(){this.word("empty")},r.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},r.NumberTypeAnnotation=function(){this.word("number")},r.StringTypeAnnotation=function(){this.word("string")},r.ThisTypeAnnotation=function(){this.word("this")},r.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},r.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},r.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},r.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},r.TypeParameterDeclaration=r.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},r.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e);e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},r.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e));e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e));this.semicolon()},r.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const t=e.properties.concat(e.callProperties||[],e.indexers||[],e.internalSlots||[]);t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==t.length||e.inexact)&&(this.token(","),this.space())}}),this.space());e.inexact&&(this.indent(),this.token("..."),t.length&&this.newline(),this.dedent());e.exact?this.token("|}"):this.token("}")},r.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space());this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},r.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.value,e)},r.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space());this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space());this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},r.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space());e.static&&(this.word("static"),this.space());"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space());this._variance(e),this.print(e.key,e),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},r.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},r.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},r.SymbolTypeAnnotation=function(){this.word("symbol")},r.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:u})},r.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},r.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},r.VoidTypeAnnotation=function(){this.word("void")},Object.defineProperty(r,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return i.NumericLiteral}}),Object.defineProperty(r,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return i.StringLiteral}});var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types")),n=e("./modules"),i=e("./types");function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function o(e,t,r){r&&(e.space(),e.word("of"),e.space(),e.word(t)),e.space()}function l(e,t){const{members:r}=t;e.token("{"),e.indent(),e.newline();for(const s of r)e.print(s,t),e.newline();e.dedent(),e.token("}")}function c(e,t){const{id:r,init:s}=t;e.print(r,t),e.space(),e.token("="),e.space(),e.print(s,t),e.token(",")}function p(){this.space(),this.token("&"),this.space()}function u(){this.space(),this.token("|"),this.space()}},{"./modules":67,"./types":70,"@babel/types":196}],64:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=e("./template-literals");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return s[e]}})});var n=e("./expressions");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})});var i=e("./statements");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return i[e]}})});var a=e("./classes");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return a[e]}})});var o=e("./methods");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return o[e]}})});var l=e("./modules");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return l[e]}})});var c=e("./types");Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return c[e]}})});var p=e("./flow");Object.keys(p).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return p[e]}})});var u=e("./base");Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return u[e]}})});var d=e("./jsx");Object.keys(d).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return d[e]}})});var f=e("./typescript");Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return f[e]}})})},{"./base":60,"./classes":61,"./expressions":62,"./flow":63,"./jsx":65,"./methods":66,"./modules":67,"./statements":68,"./template-literals":69,"./types":70,"./typescript":71}],65:[function(e,t,r){"use strict";function s(){this.space()}Object.defineProperty(r,"__esModule",{value:!0}),r.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},r.JSXIdentifier=function(e){this.word(e.name)},r.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},r.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},r.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},r.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},r.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},r.JSXText=function(e){const t=this.getPossibleRaw(e);null!=t?this.token(t):this.token(e.value)},r.JSXElement=function(e){const t=e.openingElement;if(this.print(t,e),t.selfClosing)return;this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingElement,e)},r.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:s}));e.selfClosing?(this.space(),this.token("/>")):this.token(">")},r.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},r.JSXEmptyExpression=function(e){this.printInnerComments(e)},r.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)},r.JSXOpeningFragment=function(){this.token("<"),this.token(">")},r.JSXClosingFragment=function(){this.token("</"),this.token(">")}},{}],66:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},r._parameters=function(e,t){for(let r=0;r<e.length;r++)this._param(e[r],t),r<e.length-1&&(this.token(","),this.space())},r._param=function(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},r._methodHead=function(e){const t=e.kind,r=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space());e.async&&(this.word("async"),this.space());"method"!==t&&"init"!==t||e.generator&&this.token("*");e.computed?(this.token("["),this.print(r,e),this.token("]")):this.print(r,e);e.optional&&this.token("?");this._params(e)},r._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))},r._functionHead=function(e){e.async&&(this.word("async"),this.space());this.word("function"),e.generator&&this.token("*");this.space(),e.id&&this.print(e.id,e);this._params(e),this._predicate(e)},r.FunctionDeclaration=r.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},r.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const t=e.params[0];1===e.params.length&&s.isIdentifier(t)&&!function(e,t){return e.typeParameters||e.returnType||t.typeAnnotation||t.optional||t.trailingComments}(e,t)?this.format.retainLines&&e.loc&&e.body.loc&&e.loc.start.line<e.body.loc.start.line?(this.token("("),t.loc&&t.loc.start.line>e.loc.start.line?(this.indent(),this.print(t,e),this.dedent(),this._catchUp("start",e.body.loc)):this.print(t,e),this.token(")")):this.print(t,e):this._params(e);this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}},{"@babel/types":196}],67:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space());this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))},r.ImportDefaultSpecifier=function(e){this.print(e.local,e)},r.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},r.ExportSpecifier=function(e){this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},r.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},r.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space());this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.semicolon()},r.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&s.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),i.apply(this,arguments)},r.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&s.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),this.word("default"),this.space(),i.apply(this,arguments)},r.ImportDeclaration=function(e){var t;this.word("import"),this.space(),("type"===e.importKind||"typeof"===e.importKind)&&(this.word(e.importKind),this.space());const r=e.specifiers.slice(0);if(null==r?void 0:r.length){for(;;){const t=r[0];if(!s.isImportDefaultSpecifier(t)&&!s.isImportNamespaceSpecifier(t))break;this.print(r.shift(),e),r.length&&(this.token(","),this.space())}r.length&&(this.token("{"),this.space(),this.printList(r,e),this.space(),this.token("}")),this.space(),this.word("from"),this.space()}this.print(e.source,e),(null==(t=e.attributes)?void 0:t.length)&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e));this.semicolon()},r.ImportAttribute=function(e){this.print(e.key),this.token(":"),this.space(),this.print(e.value)},r.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e.declaration){const t=e.declaration;this.print(t,e),s.isStatement(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let r=!1;for(;;){const n=t[0];if(!s.isExportDefaultSpecifier(n)&&!s.isExportNamespaceSpecifier(n))break;r=!0,this.print(t.shift(),e),t.length&&(this.token(","),this.space())}(t.length||!t.length&&!r)&&(this.token("{"),t.length&&(this.space(),this.printList(t,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}}},{"@babel/types":196}],68:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)},r.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const t=e.alternate&&s.isIfStatement(function e(t){if(!s.isStatement(t.body))return t;return e(t.body)}(e.consequent));t&&(this.token("{"),this.newline(),this.indent());this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.token("}"));e.alternate&&(this.endsWith("}")&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},r.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e));this.token(";"),e.update&&(this.space(),this.print(e.update,e));this.token(")"),this.printBlock(e)},r.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},r.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},r.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},r.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e);e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},r.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.token(")"),this.space());this.print(e.body,e)},r.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,r){if(!t&&e.cases[e.cases.length-1]===r)return-1}}),this.token("}")},r.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":"));e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},r.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},r.VariableDeclaration=function(e,t){e.declare&&(this.word("declare"),this.space());this.word(e.kind),this.space();let r,n=!1;if(!s.isFor(t))for(const t of e.declarations)t.init&&(n=!0);n&&(r="const"===e.kind?h:f);if(this.printList(e.declarations,e,{separator:r}),s.isFor(t)&&(t.left===e||t.init===e))return;this.semicolon()},r.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!");this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},r.ThrowStatement=r.BreakStatement=r.ReturnStatement=r.ContinueStatement=r.ForOfStatement=r.ForInStatement=void 0;var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}const i=function(e){return function(t){this.word("for"),this.space(),"of"===e&&t.await&&(this.word("await"),this.space()),this.token("("),this.print(t.left,t),this.space(),this.word(e),this.space(),this.print(t.right,t),this.token(")"),this.printBlock(t)}},a=i("in");r.ForInStatement=a;const o=i("of");function l(e,t="label"){return function(r){this.word(e);const s=r[t];if(s){this.space();const e="label"==t,n=this.startTerminatorless(e);this.print(s,r),this.endTerminatorless(n)}this.semicolon()}}r.ForOfStatement=o;const c=l("continue");r.ContinueStatement=c;const p=l("return","argument");r.ReturnStatement=p;const u=l("break");r.BreakStatement=u;const d=l("throw","argument");function f(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<4;e++)this.space(!0)}function h(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<6;e++)this.space(!0)}r.ThrowStatement=d},{"@babel/types":196}],69:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},r.TemplateElement=function(e,t){const r=t.quasis[0]===e,s=t.quasis[t.quasis.length-1]===e,n=(r?"`":"}")+e.value.raw+(s?"`":"${");this.token(n)},r.TemplateLiteral=function(e){const t=e.quasis;for(let r=0;r<t.length;r++)this.print(t[r],e),r+1<t.length&&this.print(e.expressions[r],e)}},{}],70:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Identifier=function(e){this.exactSource(e.loc,()=>{this.word(e.name)})},r.ArgumentPlaceholder=function(){this.token("?")},r.SpreadElement=r.RestElement=function(e){this.token("..."),this.print(e.argument,e)},r.ObjectPattern=r.ObjectExpression=function(e){const t=e.properties;this.token("{"),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token("}")},r.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},r.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(n.isAssignmentPattern(e.value)&&n.isIdentifier(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&n.isIdentifier(e.key)&&n.isIdentifier(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},r.ArrayPattern=r.ArrayExpression=function(e){const t=e.elements,r=t.length;this.token("["),this.printInnerComments(e);for(let s=0;s<t.length;s++){const n=t[s];n?(s>0&&this.space(),this.print(n,e),s<r-1&&this.token(",")):this.token(",")}this.token("]")},r.RecordExpression=function(e){const t=e.properties;let r,s;if("bar"===this.format.recordAndTupleSyntaxType)r="{|",s="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);r="#{",s="}"}this.token(r),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token(s)},r.TupleExpression=function(e){const t=e.elements,r=t.length;let s,n;if("bar"===this.format.recordAndTupleSyntaxType)s="[|",n="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);s="#[",n="]"}this.token(s),this.printInnerComments(e);for(let s=0;s<t.length;s++){const n=t[s];n&&(s>0&&this.space(),this.print(n,e),s<r-1&&this.token(","))}this.token(n)},r.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},r.BooleanLiteral=function(e){this.word(e.value?"true":"false")},r.NullLiteral=function(){this.word("null")},r.NumericLiteral=function(e){const t=this.getPossibleRaw(e),r=this.format.jsescOption,s=e.value+"";r.numbers?this.number((0,i.default)(e.value,r)):null==t?this.number(s):this.format.minified?this.number(t.length<s.length?t:s):this.number(t)},r.StringLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const r=this.format.jsescOption;this.format.jsonCompatibleStrings&&(r.json=!0);const s=(0,i.default)(e.value,r);return this.token(s)},r.BigIntLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);this.token(e.value+"n")},r.PipelineTopicExpression=function(e){this.print(e.expression,e)},r.PipelineBareFunction=function(e){this.print(e.callee,e)},r.PipelinePrimaryTopicReference=function(){this.token("#")};var s,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types")),i=(s=e("jsesc"))&&s.__esModule?s:{default:s};function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}},{"@babel/types":196,jsesc:279}],71:[function(e,t,r){"use strict";function s(e,t){!0!==t&&e.token(t)}Object.defineProperty(r,"__esModule",{value:!0}),r.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},r.TSTypeParameterDeclaration=r.TSTypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},r.TSTypeParameter=function(e){this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e));e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},r.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space());e.readonly&&(this.word("readonly"),this.space());this._param(e.parameter)},r.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space());this._functionHead(e),this.token(";")},r.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},r.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},r.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e),this.token(";")},r.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.token(";")},r.TSPropertySignature=function(e){const{readonly:t,initializer:r}=e;t&&(this.word("readonly"),this.space());this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(";")},r.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("[");this.print(e.key,e),e.computed&&this.token("]");e.optional&&this.token("?")},r.TSMethodSignature=function(e){this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},r.TSIndexSignature=function(e){const{readonly:t}=e;t&&(this.word("readonly"),this.space());this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},r.TSAnyKeyword=function(){this.word("any")},r.TSBigIntKeyword=function(){this.word("bigint")},r.TSUnknownKeyword=function(){this.word("unknown")},r.TSNumberKeyword=function(){this.word("number")},r.TSObjectKeyword=function(){this.word("object")},r.TSBooleanKeyword=function(){this.word("boolean")},r.TSStringKeyword=function(){this.word("string")},r.TSSymbolKeyword=function(){this.word("symbol")},r.TSVoidKeyword=function(){this.word("void")},r.TSUndefinedKeyword=function(){this.word("undefined")},r.TSNullKeyword=function(){this.word("null")},r.TSNeverKeyword=function(){this.word("never")},r.TSThisType=function(){this.word("this")},r.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},r.TSConstructorType=function(e){this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},r.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.space(),this.token("=>"),this.space(),this.print(e.typeAnnotation.typeAnnotation,e)},r.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},r.TSTypePredicate=function(e){e.asserts&&(this.word("asserts"),this.space());this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))},r.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName)},r.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},r.tsPrintTypeLiteralOrInterfaceBody=function(e,t){this.tsPrintBraced(e,t)},r.tsPrintBraced=function(e,t){if(this.token("{"),e.length){this.indent(),this.newline();for(const r of e)this.print(r,t),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},r.TSArrayType=function(e){this.print(e.elementType,e),this.token("[]")},r.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},r.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},r.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},r.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},r.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},r.tsPrintUnionOrIntersectionType=function(e,t){this.printJoin(e.types,e,{separator(){this.space(),this.token(t),this.space()}})},r.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},r.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},r.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},r.TSTypeOperator=function(e){this.token(e.operator),this.space(),this.print(e.typeAnnotation,e)},r.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},r.TSMappedType=function(e){const{readonly:t,typeParameter:r,optional:n}=e;this.token("{"),this.space(),t&&(s(this,t),this.word("readonly"),this.space());this.token("["),this.word(r.name),this.space(),this.word("in"),this.space(),this.print(r.constraint,r),this.token("]"),n&&(s(this,n),this.token("?"));this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},r.TSLiteralType=function(e){this.print(e.literal,e)},r.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},r.TSInterfaceDeclaration=function(e){const{declare:t,id:r,typeParameters:s,extends:n,body:i}=e;t&&(this.word("declare"),this.space());this.word("interface"),this.space(),this.print(r,e),this.print(s,e),n&&(this.space(),this.word("extends"),this.space(),this.printList(n,e));this.space(),this.print(i,e)},r.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},r.TSTypeAliasDeclaration=function(e){const{declare:t,id:r,typeParameters:s,typeAnnotation:n}=e;t&&(this.word("declare"),this.space());this.word("type"),this.space(),this.print(r,e),this.print(s,e),this.space(),this.token("="),this.space(),this.print(n,e),this.token(";")},r.TSAsExpression=function(e){const{expression:t,typeAnnotation:r}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(r,e)},r.TSTypeAssertion=function(e){const{typeAnnotation:t,expression:r}=e;this.token("<"),this.print(t,e),this.token(">"),this.space(),this.print(r,e)},r.TSEnumDeclaration=function(e){const{declare:t,const:r,id:s,members:n}=e;t&&(this.word("declare"),this.space());r&&(this.word("const"),this.space());this.word("enum"),this.space(),this.print(s,e),this.space(),this.tsPrintBraced(n,e)},r.TSEnumMember=function(e){const{id:t,initializer:r}=e;this.print(t,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(",")},r.TSModuleDeclaration=function(e){const{declare:t,id:r}=e;t&&(this.word("declare"),this.space());e.global||(this.word("Identifier"===r.type?"namespace":"module"),this.space());if(this.print(r,e),!e.body)return void this.token(";");let s=e.body;for(;"TSModuleDeclaration"===s.type;)this.token("."),this.print(s.id,s),s=s.body;this.space(),this.print(s,e)},r.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},r.TSImportType=function(e){const{argument:t,qualifier:r,typeParameters:s}=e;this.word("import"),this.token("("),this.print(t,e),this.token(")"),r&&(this.token("."),this.print(r,e));s&&this.print(s,e)},r.TSImportEqualsDeclaration=function(e){const{isExport:t,id:r,moduleReference:s}=e;t&&(this.word("export"),this.space());this.word("import"),this.space(),this.print(r,e),this.space(),this.token("="),this.space(),this.print(s,e),this.token(";")},r.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},r.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},r.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},r.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},r.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.print(e.typeAnnotation,e)},r.tsPrintClassMemberModifiers=function(e,t){t&&e.declare&&(this.word("declare"),this.space());e.accessibility&&(this.word(e.accessibility),this.space());e.static&&(this.word("static"),this.space());e.abstract&&(this.word("abstract"),this.space());t&&e.readonly&&(this.word("readonly"),this.space())}},{}],72:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){return new a(e,t,r).generate()},r.CodeGenerator=void 0;var s=i(e("./source-map")),n=i(e("./printer"));function i(e){return e&&e.__esModule?e:{default:e}}class a extends n.default{constructor(e,t={},r){super(function(e,t){const r={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,jsonCompatibleStrings:t.jsonCompatibleStrings,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType};r.minified?(r.compact=!0,r.shouldPrintComment=r.shouldPrintComment||(()=>r.comments)):r.shouldPrintComment=r.shouldPrintComment||(e=>r.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0);"auto"===r.compact&&(r.compact=e.length>5e5,r.compact&&console.error("[BABEL] Note: The code generator has deoptimised the styling of "+`${t.filename} as it exceeds the max of 500KB.`));r.compact&&(r.indent.adjustMultilineComment=!1);return r}(r,t),t.sourceMaps?new s.default(t,r):null),this.ast=e}generate(){return super.generate(this.ast)}}r.CodeGenerator=class{constructor(e,t,r){this._generator=new a(e,t,r)}generate(){return this._generator.generate()}}},{"./printer":76,"./source-map":77}],73:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.needsWhitespace=f,r.needsWhitespaceBefore=function(e,t){return f(e,t,"before")},r.needsWhitespaceAfter=function(e,t){return f(e,t,"after")},r.needsParens=function(e,t,r){if(!t)return!1;if(i.isNewExpression(t)&&t.callee===e&&function e(t){if(i.isCallExpression(t))return!0;return i.isMemberExpression(t)&&e(t.object)}(e))return!0;return d(c,e,t,r)};var s=o(e("./whitespace")),n=o(e("./parentheses")),i=o(e("@babel/types"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function l(e){const t={};function r(e,r){const s=t[e];t[e]=s?function(e,t,n){const i=s(e,t,n);return null==i?r(e,t,n):i}:r}for(const t of Object.keys(e)){const s=i.FLIPPED_ALIAS_KEYS[t];if(s)for(const n of s)r(n,e[t]);else r(t,e[t])}return t}const c=l(n),p=l(s.nodes),u=l(s.list);function d(e,t,r,s){const n=e[t.type];return n?n(t,r,s):null}function f(e,t,r){if(!e)return 0;i.isExpressionStatement(e)&&(e=e.expression);let s=d(p,e,t);if(!s){const n=d(u,e,t);if(n)for(let t=0;t<n.length&&!(s=f(n[t],e,r));t++);}return"object"==typeof s&&null!==s&&s[r]||0}},{"./parentheses":74,"./whitespace":75,"@babel/types":196}],74:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.NullableTypeAnnotation=function(e,t){return s.isArrayTypeAnnotation(t)},r.FunctionTypeAnnotation=function(e,t,r){return s.isUnionTypeAnnotation(t)||s.isIntersectionTypeAnnotation(t)||s.isArrayTypeAnnotation(t)||s.isTypeAnnotation(t)&&s.isArrowFunctionExpression(r[r.length-3])},r.UpdateExpression=function(e,t){return o(e,t)||a(e,t)},r.ObjectExpression=function(e,t,r){return p(r,{considerArrow:!0})},r.DoExpression=function(e,t,r){return p(r)},r.Binary=function(e,t){if("**"===e.operator&&s.isBinaryExpression(t,{operator:"**"}))return t.left===e;if(a(e,t))return!0;if(o(e,t)||s.isUnaryLike(t)||s.isAwaitExpression(t))return!0;if(s.isBinary(t)){const r=t.operator,n=i[r],a=e.operator,o=i[a];if(n===o&&t.right===e&&!s.isLogicalExpression(t)||n>o)return!0}},r.IntersectionTypeAnnotation=r.UnionTypeAnnotation=function(e,t){return s.isArrayTypeAnnotation(t)||s.isNullableTypeAnnotation(t)||s.isIntersectionTypeAnnotation(t)||s.isUnionTypeAnnotation(t)},r.TSAsExpression=function(){return!0},r.TSTypeAssertion=function(){return!0},r.TSIntersectionType=r.TSUnionType=function(e,t){return s.isTSArrayType(t)||s.isTSOptionalType(t)||s.isTSIntersectionType(t)||s.isTSUnionType(t)||s.isTSRestType(t)},r.TSInferType=function(e,t){return s.isTSArrayType(t)||s.isTSOptionalType(t)},r.BinaryExpression=function(e,t){return"in"===e.operator&&(s.isVariableDeclarator(t)||s.isFor(t))},r.SequenceExpression=function(e,t){if(s.isForStatement(t)||s.isThrowStatement(t)||s.isReturnStatement(t)||s.isIfStatement(t)&&t.test===e||s.isWhileStatement(t)&&t.test===e||s.isForInStatement(t)&&t.right===e||s.isSwitchStatement(t)&&t.discriminant===e||s.isExpressionStatement(t)&&t.expression===e)return!1;return!0},r.AwaitExpression=r.YieldExpression=function(e,t){return s.isBinary(t)||s.isUnaryLike(t)||o(e,t)||s.isAwaitExpression(t)&&s.isYieldExpression(e)||s.isConditionalExpression(t)&&e===t.test||a(e,t)},r.ClassExpression=function(e,t,r){return p(r,{considerDefaultExports:!0})},r.UnaryLike=l,r.FunctionExpression=function(e,t,r){return p(r,{considerDefaultExports:!0})},r.ArrowFunctionExpression=function(e,t){return s.isExportDeclaration(t)||c(e,t)},r.ConditionalExpression=c,r.OptionalCallExpression=r.OptionalMemberExpression=function(e,t){return s.isCallExpression(t,{callee:e})||s.isMemberExpression(t,{object:e})},r.AssignmentExpression=function(e,t,r){return!!s.isObjectPattern(e.left)||c(e,t)},r.LogicalExpression=function(e,t){switch(e.operator){case"||":return!!s.isLogicalExpression(t)&&("??"===t.operator||"&&"===t.operator);case"&&":return s.isLogicalExpression(t,{operator:"??"});case"??":return s.isLogicalExpression(t)&&"??"!==t.operator}};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}const i={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},a=(e,t)=>(s.isClassDeclaration(t)||s.isClassExpression(t))&&t.superClass===e,o=(e,t)=>(s.isMemberExpression(t)||s.isOptionalMemberExpression(t))&&t.object===e||(s.isCallExpression(t)||s.isOptionalCallExpression(t)||s.isNewExpression(t))&&t.callee===e||s.isTaggedTemplateExpression(t)&&t.tag===e||s.isTSNonNullExpression(t);function l(e,t){return o(e,t)||s.isBinaryExpression(t,{operator:"**",left:e})||a(e,t)}function c(e,t){return!!(s.isUnaryLike(t)||s.isBinary(t)||s.isConditionalExpression(t,{test:e})||s.isAwaitExpression(t)||s.isTSTypeAssertion(t)||s.isTSAsExpression(t))||l(e,t)}function p(e,{considerArrow:t=!1,considerDefaultExports:r=!1}={}){let n=e.length-1,i=e[n],a=e[--n];for(;n>0;){if(s.isExpressionStatement(a,{expression:i})||r&&s.isExportDefaultDeclaration(a,{declaration:i})||t&&s.isArrowFunctionExpression(a,{body:i}))return!0;if(!(o(i,a)&&!s.isNewExpression(a)||s.isSequenceExpression(a)&&a.expressions[0]===i||s.isConditional(a,{test:i})||s.isBinary(a,{left:i})||s.isAssignmentExpression(a,{left:i})))return!1;i=a,a=e[--n]}return!1}},{"@babel/types":196}],75:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.list=r.nodes=void 0;var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e,t={}){return s.isMemberExpression(e)||s.isOptionalMemberExpression(e)?(i(e.object,t),e.computed&&i(e.property,t)):s.isBinary(e)||s.isAssignmentExpression(e)?(i(e.left,t),i(e.right,t)):s.isCallExpression(e)||s.isOptionalCallExpression(e)?(t.hasCall=!0,i(e.callee,t)):s.isFunction(e)?t.hasFunction=!0:s.isIdentifier(e)&&(t.hasHelper=t.hasHelper||a(e.callee)),t}function a(e){return s.isMemberExpression(e)?a(e.object)||a(e.property):s.isIdentifier(e)?"require"===e.name||"_"===e.name[0]:s.isCallExpression(e)?a(e.callee):!(!s.isBinary(e)&&!s.isAssignmentExpression(e))&&(s.isIdentifier(e.left)&&a(e.left)||a(e.right))}function o(e){return s.isLiteral(e)||s.isObjectExpression(e)||s.isArrayExpression(e)||s.isIdentifier(e)||s.isMemberExpression(e)}const l={AssignmentExpression(e){const t=i(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:(e,t)=>({before:e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}),LogicalExpression(e){if(s.isFunction(e.left)||s.isFunction(e.right))return{after:!0}},Literal(e){if("use strict"===e.value)return{after:!0}},CallExpression(e){if(s.isFunction(e.callee)||a(e))return{before:!0,after:!0}},OptionalCallExpression(e){if(s.isFunction(e.callee))return{before:!0,after:!0}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const r=e.declarations[t];let s=a(r.id)&&!o(r.init);if(!s){const e=i(r.init);s=a(r.init)&&e.hasCall||e.hasFunction}if(s)return{before:!0,after:!0}}},IfStatement(e){if(s.isBlockStatement(e.consequent))return{before:!0,after:!0}}};r.nodes=l,l.ObjectProperty=l.ObjectTypeProperty=l.ObjectMethod=function(e,t){if(t.properties[0]===e)return{before:!0}},l.ObjectTypeCallProperty=function(e,t){var r;if(t.callProperties[0]===e&&!(null==(r=t.properties)?void 0:r.length))return{before:!0}},l.ObjectTypeIndexer=function(e,t){var r,s;if(t.indexers[0]===e&&!(null==(r=t.properties)?void 0:r.length)&&!(null==(s=t.callProperties)?void 0:s.length))return{before:!0}},l.ObjectTypeInternalSlot=function(e,t){var r,s,n;if(t.internalSlots[0]===e&&!(null==(r=t.properties)?void 0:r.length)&&!(null==(s=t.callProperties)?void 0:s.length)&&!(null==(n=t.indexers)?void 0:n.length))return{before:!0}};const c={VariableDeclaration:e=>e.declarations.map(e=>e.init),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties};r.list=c,[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach(function([e,t]){"boolean"==typeof t&&(t={after:t,before:t}),[e].concat(s.FLIPPED_ALIAS_KEYS[e]||[]).forEach(function(e){l[e]=function(){return t}})})},{"@babel/types":196}],76:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s,n=(s=e("./buffer"))&&s.__esModule?s:{default:s},i=c(e("./node")),a=c(e("@babel/types")),o=c(e("./generators"));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}const p=/e/i,u=/\.0+$/,d=/^0[box]/,f=/^\s*[@#]__PURE__\s*$/;class h{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._printedCommentStarts={},this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e||{},this._buf=new n.default(t)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){this.format.compact||(this._buf.hasContent()&&!this.endsWith(" ")&&!this.endsWith("\n")||e)&&this._space()}word(e){(this._endsWithWord||this.endsWith("/")&&0===e.indexOf("/"))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=Number.isInteger(+e)&&!d.test(e)&&!p.test(e)&&!u.test(e)&&"."!==e[e.length-1]}token(e){("--"===e&&this.endsWith("!")||"+"===e[0]&&this.endsWith("+")||"-"===e[0]&&this.endsWith("-")||"."===e[0]&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e){if(!this.format.retainLines&&!this.format.compact)if(this.format.concise)this.space();else if(!(this.endsWith("\n\n")||("number"!=typeof e&&(e=1),e=Math.min(2,e),(this.endsWith("{\n")||this.endsWith(":\n"))&&e--,e<=0)))for(let t=0;t<e;t++)this._newline()}endsWith(e){return this._buf.endsWith(e)}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,r){this._catchUp(e,t),this._buf.withSource(e,t,r)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,t=!1){this._maybeAddParen(e),this._maybeIndent(e),t?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith("\n")&&"\n"!==e[0]&&this._buf.queue(this._getIndent())}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let r;for(r=0;r<e.length&&" "===e[r];r++)continue;if(r===e.length)return;const s=e[r];if("\n"!==s){if("/"!==s||r+1===e.length)return void(this._parenPushNewlineState=null);const t=e[r+1];if("*"===t){if(f.test(e.slice(r+2,e.length-2)))return}else if("/"!==t)return void(this._parenPushNewlineState=null)}this.token("("),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const r=t?t[e]:null;if(null!=(null==r?void 0:r.line)){const e=r.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return this.format.indent.style.repeat(this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,(null==e?void 0:e.printed)&&(this.dedent(),this.newline(),this.token(")"))}print(e,t){if(!e)return;const r=this.format.concise;e._compact&&(this.format.concise=!0);const s=this[e.type];if(!s)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const n=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!n);let o=i.needsParens(e,t,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(o=!0),o&&this.token("("),this._printLeadingComments(e);const l=a.isProgram(e)||a.isFile(e)?null:e.loc;this.withSource("start",l,()=>{s.call(this,e,t)}),this._printTrailingComments(e),o&&this.token(")"),this._printStack.pop(),this.format.concise=r,this._insideAux=n}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,r={}){if(!(null==e?void 0:e.length))return;r.indent&&this.indent();const s={addNewlines:r.addNewlines};for(let n=0;n<e.length;n++){const i=e[n];i&&(r.statement&&this._printNewline(!0,i,t,s),this.print(i,t),r.iterator&&r.iterator(i,n),r.separator&&n<e.length-1&&r.separator.call(this),r.statement&&this._printNewline(!1,i,t,s))}r.indent&&this.dedent()}printAndIndentOnComments(e,t){const r=e.leadingComments&&e.leadingComments.length>0;r&&this.indent(),this.print(e,t),r&&this.dedent()}printBlock(e){const t=e.body;a.isEmptyStatement(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,t=!0){var r;(null==(r=e.innerComments)?void 0:r.length)&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,r={}){return r.statement=!0,this.printJoin(e,t,r)}printList(e,t,r={}){return null==r.separator&&(r.separator=y),this.printJoin(e,t,r)}_printNewline(e,t,r,s){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let n=0;if(this._buf.hasContent()){e||n++,s.addNewlines&&(n+=s.addNewlines(e,t)||0),(e?i.needsWhitespaceBefore:i.needsWhitespaceAfter)(t,r)&&n++}this.newline(n)}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e,t){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;if(this._printedComments.add(e),null!=e.start){if(this._printedCommentStarts[e.start])return;this._printedCommentStarts[e.start]=!0}const r="CommentBlock"===e.type,s=r&&!t&&!this._noLineTerminator;s&&this._buf.hasContent()&&this.newline(1),this.endsWith("[")||this.endsWith("{")||this.space();let n=r||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(r&&this.format.indent.adjustMultilineComment){var i;const t=null==(i=e.loc)?void 0:i.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");n=n.replace(e,"\n")}const r=Math.max(this._getIndent().length,this._buf.getCurrentColumn());n=n.replace(/\n(?!$)/g,`\n${" ".repeat(r)}`)}this.endsWith("/")&&this._space(),this.withSource("start",e.loc,()=>{this._append(n)}),s&&this.newline(1)}_printComments(e,t){if(null==e?void 0:e.length)if(t&&1===e.length&&f.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith("\n"));else for(const t of e)this._printComment(t)}}function y(){this.token(","),this.space()}r.default=h,Object.assign(h.prototype,o)},{"./buffer":59,"./generators":64,"./node":73,"@babel/types":196}],77:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s,n=(s=e("source-map"))&&s.__esModule?s:{default:s};r.default=class{constructor(e,t){this._cachedMap=null,this._code=t,this._opts=e,this._rawMappings=[]}get(){if(!this._cachedMap){const e=this._cachedMap=new n.default.SourceMapGenerator({sourceRoot:this._opts.sourceRoot}),t=this._code;"string"==typeof t?e.setSourceContent(this._opts.sourceFileName.replace(/\\/g,"/"),t):"object"==typeof t&&Object.keys(t).forEach(r=>{e.setSourceContent(r.replace(/\\/g,"/"),t[r])}),this._rawMappings.forEach(t=>e.addMapping(t),e)}return this._cachedMap.toJSON()}getRawMappings(){return this._rawMappings.slice()}mark(e,t,r,s,n,i,a){this._lastGenLine!==e&&null===r||(a||this._lastGenLine!==e||this._lastSourceLine!==r||this._lastSourceColumn!==s)&&(this._cachedMap=null,this._lastGenLine=e,this._lastSourceLine=r,this._lastSourceColumn=s,this._rawMappings.push({name:n||void 0,generated:{line:e,column:t},source:null==r?void 0:(i||this._opts.sourceFileName).replace(/\\/g,"/"),original:null==r?void 0:{line:r,column:s}}))}}},{"source-map":485}],78:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getInclusionReasons=function(e,t,r){const s=r[e]||{};return Object.keys(t).reduce((e,r)=>{const o=(0,a.getLowestImplementedVersion)(s,r),l=t[r];if(o){const t=(0,a.isUnreleasedVersion)(o,r),s=(0,a.isUnreleasedVersion)(l,r);s||!t&&!n.default.lt(l.toString(),(0,a.semverify)(o))||(e[r]=(0,i.prettifyVersion)(l))}else e[r]=(0,i.prettifyVersion)(l);return e},{})};var s,n=(s=e("semver"))&&s.__esModule?s:{default:s},i=e("./pretty"),a=e("./utils")},{"./pretty":82,"./utils":84,semver:85}],79:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.targetsSupported=o,r.isRequired=l,r.default=function(e,t,r,s,n,i,a){const o=new Set,c={compatData:e,includes:t,excludes:r};for(const t in e)if(l(t,s,c))o.add(t);else if(a){const e=a.get(t);e&&o.add(e)}n&&n.forEach(e=>!r.has(e)&&o.add(e));i&&i.forEach(e=>!t.has(e)&&o.delete(e));return o};var s=a(e("semver")),n=a(e("@babel/compat-data/plugins")),i=e("./utils");function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){const r=Object.keys(e);return 0!==r.length&&0===r.filter(r=>{const n=(0,i.getLowestImplementedVersion)(t,r);if(!n)return!0;const a=e[r];if((0,i.isUnreleasedVersion)(a,r))return!1;if((0,i.isUnreleasedVersion)(n,r))return!0;if(!s.default.valid(a.toString()))throw new Error(`Invalid version passed for target "${r}": "${a}". `+"Versions must be in semver format (major.minor.patch)");return s.default.gt((0,i.semverify)(n),a.toString())}).length}function l(e,t,{compatData:r=n.default,includes:s,excludes:i}={}){return(null==i||!i.has(e))&&(!(null==s||!s.has(e))||!o(t,r[e]))}},{"./utils":84,"@babel/compat-data/plugins":22,semver:85}],80:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isBrowsersQueryValid=g,r.default=function(e={},t={}){let{browsers:r}=e;if(e.esmodules){const e=a.default["es6.module"];r=Object.keys(e).map(t=>`${t} ${e[t]}`).join(", ")}const p=function(e){return(0,i.default)(void 0===e||g(e),`Invalid Option: '${String(e)}' is not a valid browserslist query`),e}(r),u=Object.assign({},e);delete u.esmodules,delete u.browsers;let d=function(e){const t=Object.keys(c.TargetNames);for(const r in e)if(!c.TargetNames[r])throw new Error(`Invalid Option: '${r}' is not a valid target\n        Maybe you meant to use '${(0,n.default)(r,t)}'?`);return e}(u);const f=!!p,h=f||Object.keys(d).length>0,b=!t.ignoreBrowserslistConfig&&!h;if(f||b){h||(s.default.defaults=(v=d,Object.keys(v).reduce((e,t)=>{if(m.indexOf(t)>=0){const r=v[t];return e.concat(`${t} ${r}`)}return e},[])));const e=(0,s.default)(p,{path:t.configPath,mobileToDesktop:!0,env:t.browserslistEnv}),r=function(e){return e.reduce((e,t)=>{const[r,s]=t.split(" "),n=l.browserNameMap[r];if(!n)return e;try{const t=s.split("-")[0].toLowerCase(),i=(0,o.isUnreleasedVersion)(t,r);if(!e[n])return e[n]=i?t:(0,o.semverify)(t),e;const a=e[n],l=(0,o.isUnreleasedVersion)(a,r);if(l&&i)e[n]=(0,o.getLowestUnreleased)(a,t,r);else if(l)e[n]=(0,o.semverify)(t);else if(!l&&!i){const r=(0,o.semverify)(t);e[n]=(0,o.semverMin)(a,r)}}catch(e){}return e},{})}(e);d=Object.assign(r,d),s.default.defaults=y}var v;const E=Object.keys(d).sort().reduce((e,t)=>{var r;const s=d[t];"number"==typeof s&&s%1!=0&&e.decimalWarnings.push({target:t,value:s});const n=null!=(r=x[t])?r:x.__default,[i,a]=n(t,s);return a&&(e.targets[i]=a),e},{targets:{},decimalWarnings:[]});return T=E.decimalWarnings,(null==T?void 0:T.length)&&(console.log("Warning, the following targets are using a decimal version:"),console.log(""),T.forEach(({target:e,value:t})=>console.log(`  ${e}: ${t}`)),console.log(""),console.log("We recommend using a string for minor/patch versions to avoid numbers like 6.10"),console.log("getting parsed as 6.1, which can lead to unexpected behavior."),console.log("")),E.targets;var T},Object.defineProperty(r,"unreleasedLabels",{enumerable:!0,get:function(){return l.unreleasedLabels}}),Object.defineProperty(r,"prettifyTargets",{enumerable:!0,get:function(){return p.prettifyTargets}}),Object.defineProperty(r,"getInclusionReasons",{enumerable:!0,get:function(){return u.getInclusionReasons}}),Object.defineProperty(r,"filterItems",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(r,"isRequired",{enumerable:!0,get:function(){return d.isRequired}});var s=h(e("browserslist")),n=h(e("levenary")),i=h(e("invariant")),a=h(e("@babel/compat-data/native-modules")),o=e("./utils"),l=e("./targets"),c=e("./options"),p=e("./pretty"),u=e("./debug"),d=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("./filter-items"));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function h(e){return e&&e.__esModule?e:{default:e}}const y=s.default.defaults,m=[...Object.keys(s.default.data),...Object.keys(s.default.aliases)];function g(e){return"string"==typeof e||Array.isArray(e)}function b(e,t){try{return(0,o.semverify)(t)}catch(r){throw new Error(`Invalid Option: '${t}' is not a valid value for 'targets.${e}'.`)}}const x={__default:(e,t)=>[e,(0,o.isUnreleasedVersion)(t,e)?t.toLowerCase():b(e,t)],node:(e,r)=>[e,!0===r||"current"===r?t.versions.node:b(e,r)]}}).call(this,e("_process"))},{"./debug":78,"./filter-items":79,"./options":81,"./pretty":82,"./targets":83,"./utils":84,"@babel/compat-data/native-modules":21,_process:13,browserslist:235,invariant:277,levenary:281}],81:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TargetNames=void 0;r.TargetNames={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung"}},{}],82:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.prettifyVersion=a,r.prettifyTargets=function(e){return Object.keys(e).reduce((t,r)=>{let s=e[r];const n=i.unreleasedLabels[r];return"string"==typeof s&&n!==s&&(s=a(s)),t[r]=s,t},{})};var s,n=(s=e("semver"))&&s.__esModule?s:{default:s},i=e("./targets");function a(e){if("string"!=typeof e)return e;const t=[n.default.major(e)],r=n.default.minor(e),s=n.default.patch(e);return(r||s)&&t.push(r),s&&t.push(s),t.join(".")}},{"./targets":83,semver:85}],83:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.browserNameMap=r.unreleasedLabels=void 0;r.unreleasedLabels={safari:"tp"};r.browserNameMap={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"}},{}],84:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.semverMin=l,r.semverify=function(e){if("string"==typeof e&&n.default.valid(e))return e;(0,s.default)("number"==typeof e||"string"==typeof e&&o.test(e),`'${e}' is not a valid version`);const t=e.toString().split(".");for(;t.length<3;)t.push("0");return t.join(".")},r.isUnreleasedVersion=function(e,t){const r=i.unreleasedLabels[t];return!!r&&r===e.toString().toLowerCase()},r.getLowestUnreleased=function(e,t,r){const s=i.unreleasedLabels[r],n=[e,t].some(e=>e===s);if(n)return e===n?t:e||t;return l(e,t)},r.getLowestImplementedVersion=function(e,t){const r=e[t];if(!r&&"android"===t)return e.chrome;return r};var s=a(e("invariant")),n=a(e("semver")),i=e("./targets");function a(e){return e&&e.__esModule?e:{default:e}}const o=/^(\d+|\d+.\d+)$/;function l(e,t){return e&&n.default.lt(e,t)?e:t}},{"./targets":83,invariant:277,semver:85}],85:[function(e,t,r){arguments[4][57][0].apply(r,arguments)},{_process:13,dup:57}],86:[function(e,t,r){"use strict";r.__esModule=!0,r.stringifyTargetsMultiline=function(e){return JSON.stringify((0,s.prettifyTargets)(e),null,2)},r.stringifyTargets=function(e){return JSON.stringify(e).replace(/,/g,", ").replace(/^\{"/,'{ "').replace(/"\}$/,'" }')},r.presetEnvSilentDebugHeader=void 0;var s=e("@babel/helper-compilation-targets");r.presetEnvSilentDebugHeader="#__secret_key__@babel/preset-env__don't_log_debug_header_and_resolved_targets"},{"@babel/helper-compilation-targets":80}],87:[function(e,t,r){(function(t){"use strict";r.__esModule=!0,r.has=function(e,t){try{return s.default.sync(t,{basedir:e}),!0}catch{return!1}},r.logMissing=a,r.laterLogMissing=function(e){e.forEach(e=>o.add(e)),l()};var s=i(e("resolve")),n=i(e("lodash.debounce"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(0===e.size)return;const r=Array.from(e).sort().join(" ");console.warn("\nSome polyfills have been added but are not present in your dependencies.\nPlease run one of the following commands:\n"+`\tnpm install --save ${r}\n`+`\tyarn add ${r}\n`),t.exitCode=1}let o=new Set;const l=(0,n.default)(()=>{a(o),o=new Set},1e3)}).call(this,e("_process"))},{_process:13,"lodash.debounce":282,resolve:465}],88:[function(e,t,r){"use strict";r.__esModule=!0,r.default=void 0;var s=e("@babel/core");r.default=class{constructor(){this._imports=new WeakMap,this._anonymousImports=new WeakMap,this._lastImports=new WeakMap}storeAnonymous(e,t,r){const n=this._normalizeKey(e,t,""),i=this._ensure(this._anonymousImports,e,Set);if(i.has(n))return;const a=r("script"===e.node.sourceType,s.types.stringLiteral(t));i.add(n),this._injectImport(e,a)}storeNamed(e,t,r,n){const i=this._normalizeKey(e,t,r),a=this._ensure(this._imports,e,Map);if(!a.has(i)){const{node:o,name:l}=n("script"===e.node.sourceType,s.types.stringLiteral(t),s.types.identifier(r));a.set(i,l),this._injectImport(e,o)}return s.types.identifier(a.get(i))}_injectImport(e,t){let r=this._lastImports.get(e);r=(r=r&&r.node?r.insertAfter(t):e.unshiftContainer("body",t))[r.length-1],this._lastImports.set(e,r)}_ensure(e,t,r){return e.has(t)||e.set(t,new r),e.get(t)}_normalizeKey(e,t,r){return`${e.node.sourceType}::${t}::${r}`}}},{"@babel/core":41}],89:[function(e,t,r){"use strict";r.__esModule=!0,r.default=function(e){return(0,s.declare)((t,r,s)=>{t.assertVersion(7);const{traverse:d}=t;let f;const h=(0,l.applyMissingDependenciesDefaults)(r,t),{debug:y,method:m,targets:g,provider:b,callProvider:x}=function(e,t,r,s,o,c){const{method:d,methodName:f,targets:h,debug:y,shouldInjectPolyfill:m,providerOptions:g}=function(e){const{method:t,targets:r,ignoreBrowserslistConfig:s,configPath:i,debug:a,shouldInjectPolyfill:o,...l}=e;let c;if("usage-global"===t)c="usageGlobal";else if("entry-global"===t)c="entryGlobal";else{if("usage-pure"!==t)throw"string"!=typeof t?new Error(".method must be a string"):new Error('.method must be one of "entry-global", "usage-global"'+` or "usage-pure" (received ${JSON.stringify(t)})`);c="usagePure"}if("function"==typeof o){if(e.include||e.exclude)throw new Error(".include and .exclude are not supported when using the .shouldInjectPolyfill function.")}else if(null!=o)throw new Error(".shouldInjectPolyfill must be a function, or undefined"+` (received ${JSON.stringify(o)})`);const p=(0,n.default)(r,{ignoreBrowserslistConfig:s,configPath:i});return{method:t,methodName:c,targets:p,shouldInjectPolyfill:o,debug:!!a,providerOptions:l}}(t),b=(0,i.createUtilsGetter)(new a.default);let x,v,E,T,w;const j=new Map,S={babel:c,getUtils:b,method:t.method,targets:h,createMetaResolver:u.default,shouldInjectPolyfill(t){if(void 0===T)throw new Error(`Internal error in the ${e.name} provider: `+"shouldInjectPolyfill() can't be called during initialization.");if(!T.has(t))throw new Error(`Internal error in the ${P.name} provider: `+`unknown polyfill "${t}".`);if(w&&!w(t))return!1;let r=(0,n.isRequired)(t,h,{compatData:E,includes:x,excludes:v});if(m&&"boolean"!=typeof(r=m(t,r)))throw new Error(".shouldInjectPolyfill must return a boolean.");return r},debug(e){o().found=!0,y&&e&&(o().polyfills.has(P.name)||o().polyfills.set(e,E&&e&&E[e]))},assertDependency(e,t="*"){if(!1===r)return;const n="*"===t?e:`${e}@^${t}`,i=!r.all&&function(e,t,r){let s=e.get(t);void 0===s&&(s=r(),e.set(t,s));return s}(j,e,()=>p.has(s,e));i||o().missingDeps.add(n)}},P=e(S,g,s);if("function"!=typeof P[f])throw new Error(`The "${P.name||e.name}" provider doesn't `+`support the "${d}" polyfilling method.`);Array.isArray(P.polyfills)?(T=new Set(P.polyfills),w=P.filterPolyfills):P.polyfills?(T=new Set(Object.keys(P.polyfills)),E=P.polyfills,w=P.filterPolyfills):T=new Set;return({include:x,exclude:v}=(0,l.validateIncludeExclude)(P.name||e.name,T,g.include||[],g.exclude||[])),{debug:y,method:d,targets:h,provider:P,callProvider(e,t){const r=b(t);P[f](e,r,t)}}}(e,r,h,s,()=>f,t),v="entry-global"===m?c.entry:c.usage,E=b.visitor?d.visitors.merge([v(x),b.visitor]):v(x);return y&&y!==o.presetEnvSilentDebugHeader&&(console.log(`${b.name}: \`DEBUG\` option`),console.log(`\nUsing targets: ${(0,o.stringifyTargetsMultiline)(g)}`),console.log(`\nUsing polyfills with \`${m}\` method:`)),{name:"inject-polyfills",visitor:E,pre(){var e;f={polyfills:new Map,found:!1,providers:new Set,missingDeps:new Set},null==(e=b.pre)||e.apply(this,arguments)},post(){var e;if(null==(e=b.post)||e.apply(this,arguments),!1!==h&&("per-file"===h.log?p.logMissing(f.missingDeps):p.laterLogMissing(f.missingDeps)),y)if(this.filename&&console.log(`\n[${this.filename}]`),0!==f.polyfills.size){"entry-global"===m?console.log(`The ${b.name} polyfill entry has been replaced with `+"the following polyfills:"):console.log(`The ${b.name} polyfill added the following polyfills:`);for(const[e,t]of f.polyfills)if(t){const r=(0,n.getInclusionReasons)(e,g,t),s=JSON.stringify(r).replace(/,/g,", ").replace(/^\{"/,'{ "').replace(/"\}$/,'" }');console.log(`  ${e} ${s}`)}else console.log(`  ${e}`)}else console.log("entry-global"===m?f.found?`Based on your targets, the ${b.name} polyfill did not add any polyfill.`:`The entry point for the ${b.name} polyfill has not been found.`:`Based on your code and targets, the ${b.name} polyfill did not add any polyfill.`)}}})};var s=e("@babel/helper-plugin-utils"),n=h(e("@babel/helper-compilation-targets")),i=e("./utils"),a=d(e("./imports-cache")),o=e("./debug-utils"),l=e("./normalize-options"),c=h(e("./visitors")),p=h(e("./dependencies")),u=d(e("./meta-resolver"));function d(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function h(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}},{"./debug-utils":86,"./dependencies":87,"./imports-cache":88,"./meta-resolver":90,"./normalize-options":91,"./utils":92,"./visitors":94,"@babel/helper-compilation-targets":80,"@babel/helper-plugin-utils":109}],90:[function(e,t,r){"use strict";r.__esModule=!0,r.default=function(e){const{static:t,instance:r,global:i}=e;return e=>{if("global"===e.kind&&i&&(0,s.has)(i,e.name))return{kind:"global",desc:i[e.name],name:e.name};if("property"===e.kind||"in"===e.kind){const{placement:a,object:o,key:l}=e;if(o&&"static"===a){if(i&&n.has(o)&&(0,s.has)(i,l))return{kind:"global",desc:i[l],name:l};if(t&&(0,s.has)(t,o)&&(0,s.has)(t[o],l))return{kind:"static",desc:t[o][l],name:`${o}$${l}`}}if(r&&(0,s.has)(r,l))return{kind:"instance",desc:r[l],name:`${l}`}}}};var s=e("./utils");const n=new Set(["global","globalThis","self","window"])},{"./utils":92}],91:[function(e,t,r){"use strict";r.__esModule=!0,r.validateIncludeExclude=function(e,t,r,i){let a;const o=e=>{const r=function(e){if(e instanceof RegExp)return e;try{return new RegExp(`^${e}$`)}catch{return null}}(e);if(!r)return!1;let s=!1;for(const e of t)r.test(e)&&(s=!0,a.add(e));return!s},l=a=new Set,c=Array.from(r).filter(o),p=a=new Set,u=Array.from(i).filter(o),d=(0,s.intersection)(l,p);if(d.size>0||c.length>0||u.length>0)throw new Error(`Error while validating the "${e}" provider options:\n`+n("include",c)+n("exclude",u)+function(e){return e.size?'  - The following polyfills were matched both by "include" and "exclude" patterns:\n'+Array.from(e,e=>`    ${e}\n`).join(""):""}(d));return{include:l,exclude:p}},r.applyMissingDependenciesDefaults=function(e,t){const{missingDependencies:r={}}=e;if(!1===r)return!1;const s=t.caller(e=>null==e?void 0:e.name),{log:n="deferred",inject:i=("rollup-plugin-babel"===s?"throw":"import"),all:a=!1}=r;return{log:n,inject:i,all:a}};var s=e("./utils");function n(e,t){return t.length?`  - The following "${e}" patterns didn't match any polyfill:\n`+t.map(e=>`    ${String(e)}\n`).join(""):""}},{"./utils":92}],92:[function(e,t,r){"use strict";r.__esModule=!0,r.intersection=function(e,t){const r=new Set;return e.forEach(e=>t.has(e)&&r.add(e)),r},r.has=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.resolveKey=function e(t,r=!1){const{node:s,parent:n,scope:i}=t;if(t.isStringLiteral())return s.value;const{name:a}=s;const o=t.isIdentifier();if(o&&!r&&!n.computed)return a;if(r&&t.isMemberExpression()&&t.get("object").isIdentifier({name:"Symbol"})&&!i.hasBinding("Symbol",!0)){const r=e(t.get("property"),t.node.computed);if(r)return"Symbol."+r}if(!o||i.hasBinding(a,!0)){const{value:e}=t.evaluate();if("string"==typeof e)return e}},r.resolveSource=function(e){if(e.isMemberExpression()&&e.get("property").isIdentifier({name:"prototype"})){const t=n(e.get("object"));return t?{id:t,placement:"prototype"}:{id:null,placement:null}}const t=n(e);if(t)return{id:t,placement:"static"};const{value:r}=e.evaluate();if(void 0!==r)return{id:(s=r,Object.prototype.toString.call(s).slice(8,-1)),placement:"prototype"};if(e.isRegExpLiteral())return{id:"RegExp",placement:"prototype"};if(e.isFunction())return{id:"Function",placement:"prototype"};var s;return{id:null,placement:null}},r.getImportSource=function({node:e}){if(0===e.specifiers.length)return e.source.value},r.getRequireSource=function({node:e}){if(!s.types.isExpressionStatement(e))return;const{expression:t}=e;if(s.types.isCallExpression(t)&&s.types.isIdentifier(t.callee)&&"require"===t.callee.name&&1===t.arguments.length&&s.types.isStringLiteral(t.arguments[0]))return t.arguments[0].value},r.createUtilsGetter=function(e){return t=>{const r=t.findParent(e=>e.isProgram());return{injectGlobalImport(t){e.storeAnonymous(r,t,(e,t)=>e?s.template.statement.ast`require(${t})`:s.types.importDeclaration([],t))},injectNamedImport:(t,n,a=n)=>e.storeNamed(r,t,n,(e,t,n)=>{const o=r.scope.generateUidIdentifier(a);return{node:e?i(s.template.statement.ast`
                  var ${o} = require(${t}).${n}
                `):s.types.importDeclaration([s.types.importSpecifier(o,n)],t),name:o.name}}),injectDefaultImport:(t,n=t)=>e.storeNamed(r,t,"default",(e,t)=>{const a=r.scope.generateUidIdentifier(n);return{node:e?i(s.template.statement.ast`var ${a} = require(${t})`):s.types.importDeclaration([s.types.importDefaultSpecifier(a)],t),name:a.name}})}}};var s=e("@babel/core");function n(e){if(e.isIdentifier()&&!e.scope.hasBinding(e.node.name,!0))return e.node.name;const{deopt:t}=e.evaluate();return t&&t.isIdentifier()?t.node.name:void 0}function i(e){return e._blockHoist=3,e}},{"@babel/core":41}],93:[function(e,t,r){"use strict";r.__esModule=!0,r.default=void 0;var s=e("../utils");r.default=(e=>({ImportDeclaration(t){const r=(0,s.getImportSource)(t);r&&e({kind:"import",source:r},t)},Program(t){t.get("body").forEach(t=>{const r=(0,s.getRequireSource)(t);r&&e({kind:"import",source:r},t)})}}))},{"../utils":92}],94:[function(e,t,r){"use strict";r.__esModule=!0,r.entry=r.usage=void 0;var s=i(e("./usage"));r.usage=s.default;var n=i(e("./entry"));function i(e){return e&&e.__esModule?e:{default:e}}r.entry=n.default},{"./entry":93,"./usage":95}],95:[function(e,t,r){"use strict";r.__esModule=!0,r.default=void 0;var s=e("../utils");r.default=(e=>{function t(t,r,s,n){return e({kind:"property",object:t,key:r,placement:s},n)}return{ReferencedIdentifier(t){const{node:{name:r},scope:s}=t;s.getBindingIdentifier(r)||e({kind:"global",name:r},t)},MemberExpression(e){const r=(0,s.resolveKey)(e.get("property"),e.node.computed);if(!r||"prototype"===r)return;const n=e.get("object"),i=n.scope.getBinding(n.node.name);if(i&&i.path.isImportNamespaceSpecifier())return;const a=(0,s.resolveSource)(n);return t(a.id,r,a.placement,e)},ObjectPattern(e){const{parentPath:r,parent:n}=e;let i;if(r.isVariableDeclarator())i=r.get("init");else if(r.isAssignmentExpression())i=r.get("right");else if(r.isFunction()){const t=r.parentPath;(t.isCallExpression()||t.isNewExpression())&&t.node.callee===n&&(i=t.get("arguments")[e.key])}let a=null,o=null;i&&({id:a,placement:o}=(0,s.resolveSource)(i));for(const r of e.get("properties"))if(r.isObjectProperty()){const e=(0,s.resolveKey)(r.get("key"));e&&t(a,e,o,r)}},BinaryExpression(t){if("in"!==t.node.operator)return;const r=(0,s.resolveSource)(t.get("right")),n=(0,s.resolveKey)(t.get("left"),!0);n&&e({kind:"in",object:r.id,key:n,placement:r.placement},t)}}})},{"../utils":92}],96:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function({node:e,parent:t,scope:r,id:n},a=!1){if(e.id)return;if(!i.isObjectProperty(t)&&!i.isObjectMethod(t,{kind:"method"})||t.computed&&!i.isLiteral(t.key)){if(i.isVariableDeclarator(t)){if(n=t.id,i.isIdentifier(n)&&!a){const t=r.parent.getBinding(n.name);if(t&&t.constant&&r.getBinding(n.name)===t)return e.id=i.cloneNode(n),void(e.id[i.NOT_LOCAL_BINDING]=!0)}}else if(i.isAssignmentExpression(t,{operator:"="}))n=t.left;else if(!n)return}else n=t.key;let o;n&&i.isLiteral(n)?o=function(e){if(i.isNullLiteral(e))return"null";if(i.isRegExpLiteral(e))return`_${e.pattern}_${e.flags}`;if(i.isTemplateLiteral(e))return e.quasis.map(e=>e.value.raw).join("");if(void 0!==e.value)return e.value+"";return""}(n):n&&i.isIdentifier(n)&&(o=n.name);if(void 0===o)return;return o=i.toBindingIdentifierName(o),(n=i.identifier(o))[i.NOT_LOCAL_BINDING]=!0,function(e,t,r,n){if(e.selfReference){if(!n.hasBinding(r.name)||n.hasGlobal(r.name)){if(!i.isFunction(t))return;let e=l;t.generator&&(e=c);const a=e({FUNCTION:t,FUNCTION_ID:r,FUNCTION_KEY:n.generateUidIdentifier(r.name)}).expression,o=a.callee.body.body[0].params;for(let e=0,r=(0,s.default)(t);e<r;e++)o.push(n.generateUidIdentifier("x"));return a}n.rename(r.name)}t.id=r,n.getProgramParent().references[r.name]=!0}(function(e,t,r){const s={selfAssignment:!1,selfReference:!1,outerDeclar:r.getBindingIdentifier(t),references:[],name:t},n=r.getOwnBinding(t);return n?"param"===n.kind&&(s.selfReference=!0):(s.outerDeclar||r.hasGlobal(t))&&r.traverse(e,p,s),s}(e,o,r),e,n,r)||e};var s=o(e("@babel/helper-get-function-arity")),n=o(e("@babel/template")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}const l=(0,n.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),c=(0,n.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),p={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;e.scope.getBindingIdentifier(t.name)===t.outerDeclar&&(t.selfReference=!0,e.stop())}}},{"@babel/helper-get-function-arity":97,"@babel/template":122,"@babel/types":196}],97:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const t=e.params;for(let e=0;e<t.length;e++){const r=t[e];if(s.isAssignmentPattern(r)||s.isRestElement(r))return e}return t.length};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}},{"@babel/types":196}],98:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){e.traverse(t,Object.assign({},o,r,{memoiser:new i}))};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}class i{constructor(){this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const t=this._map.get(e),{value:r}=t;return t.count--,0===t.count?s.assignmentExpression("=",r,e):r}set(e,t,r){return this._map.set(e,{count:r,value:t})}}function a(e,t){const{node:r}=e;if(e.isOptionalMemberExpression())return s.memberExpression(t,r.property,r.computed);if(e.isOptionalCallExpression()){const n=e.get("callee");if(e.node.optional&&n.isOptionalMemberExpression()){const{object:i}=n.node,a=e.scope.maybeGenerateMemoised(i)||i;return n.get("object").replaceWith(s.assignmentExpression("=",a,i)),s.callExpression(s.memberExpression(t,s.identifier("call")),[a,...r.arguments])}return s.callExpression(t,r.arguments)}return e.node}const o={memoise(){},handle(e){const{node:t,parent:r,parentPath:n}=e;if(e.isOptionalMemberExpression()){if(function(e){for(;e&&!e.isProgram();){const{parentPath:t,container:r,listKey:s}=e,n=t.node;if(s){if(r!==n[s])return!0}else if(r!==n)return!0;e=t}return!1}(e))return;const i=e.find(({node:t,parent:r,parentPath:s})=>s.isOptionalMemberExpression()?r.optional||r.object!==t:!s.isOptionalCallExpression()||(t!==e.node&&r.optional||r.callee!==t)),o=i.parentPath;if(o.isUpdateExpression({argument:t})||o.isAssignmentExpression({left:t}))throw e.buildCodeFrameError("can't handle assignment");const l=o.isUnaryExpression({operator:"delete"});if(l&&i.isOptionalMemberExpression()&&i.get("property").isPrivateName())throw e.buildCodeFrameError("can't delete a private class element");let c=e;for(;;)if(c.isOptionalMemberExpression()){if(c.node.optional)break;c=c.get("object")}else{if(!c.isOptionalCallExpression())throw new Error(`Internal error: unexpected ${c.node.type}`);if(c.node.optional)break;c=c.get("callee")}const{scope:p}=e,u=c.isOptionalMemberExpression()?"object":"callee",d=c.node[u],f=p.maybeGenerateMemoised(d),h=null!=f?f:d,y=n.isOptionalCallExpression({callee:t}),m=n.isCallExpression({callee:t});c.replaceWith(a(c,h)),y?r.optional?n.replaceWith(this.optionalCall(e,r.arguments)):n.replaceWith(this.call(e,r.arguments)):m?e.replaceWith(this.boundGet(e)):e.replaceWith(this.get(e));let g,b=e.node;for(let t=e;t!==i;){const{parentPath:e}=t;if(e===i&&y&&r.optional){b=e.node;break}b=a(e,b),t=e}const x=i.parentPath;if(s.isMemberExpression(b)&&x.isOptionalCallExpression({callee:i.node,optional:!0})){const{object:t}=b;(g=e.scope.maybeGenerateMemoised(t))&&(b.object=s.assignmentExpression("=",g,t))}let v=i;if(l&&(v=x,b=x.node),v.replaceWith(s.conditionalExpression(s.logicalExpression("||",s.binaryExpression("===",f?s.assignmentExpression("=",s.cloneNode(h),s.cloneNode(d)):s.cloneNode(h),s.nullLiteral()),s.binaryExpression("===",s.cloneNode(h),p.buildUndefinedNode())),l?s.booleanLiteral(!0):p.buildUndefinedNode(),b)),g){const e=x.node;x.replaceWith(s.optionalCallExpression(s.optionalMemberExpression(e.callee,s.identifier("call"),!1,!0),[s.cloneNode(g),...e.arguments],!1))}}else if(n.isUpdateExpression({argument:t})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:i,prefix:a}=r;this.memoise(e,2);const o=s.binaryExpression(i[0],s.unaryExpression("+",this.get(e)),s.numericLiteral(1));if(a)n.replaceWith(this.set(e,o));else{const{scope:r}=e,i=r.generateUidIdentifierBasedOnNode(t);r.push({id:i}),o.left=s.assignmentExpression("=",s.cloneNode(i),o.left),n.replaceWith(s.sequenceExpression([this.set(e,o),s.cloneNode(i)]))}}else{if(n.isAssignmentExpression({left:t})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:t,right:i}=r;let a=i;return"="!==t&&(this.memoise(e,2),a=s.binaryExpression(t.slice(0,-1),this.get(e),a)),void n.replaceWith(this.set(e,a))}n.isCallExpression({callee:t})?n.replaceWith(this.call(e,r.arguments)):n.isOptionalCallExpression({callee:t})?n.replaceWith(this.optionalCall(e,r.arguments)):n.isForXStatement({left:t})||n.isObjectProperty({value:t})&&n.parentPath.isObjectPattern()||n.isAssignmentPattern({left:t})&&n.parentPath.isObjectProperty({value:r})&&n.parentPath.parentPath.isObjectPattern()||n.isArrayPattern()||n.isAssignmentPattern({left:t})&&n.parentPath.isArrayPattern()||n.isRestElement()?e.replaceWith(this.destructureSet(e)):e.replaceWith(this.get(e))}}}},{"@babel/types":196}],99:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s,n=(s=e("assert"))&&s.__esModule?s:{default:s},i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}r.default=class{constructor(e,t,r){this._statements=[],this._resultName=null,this._scope=null,this._hub=null,this._scope=t,this._hub=r,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(i.importDeclaration([],i.stringLiteral(this._importedSource))),this}require(){return this._statements.push(i.expressionStatement(i.callExpression(i.identifier("require"),[i.stringLiteral(this._importedSource)]))),this}namespace(e="namespace"){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,n.default)("ImportDeclaration"===t.type),(0,n.default)(0===t.specifiers.length),t.specifiers=[i.importNamespaceSpecifier(e)],this._resultName=i.cloneNode(e),this}default(e){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,n.default)("ImportDeclaration"===t.type),(0,n.default)(0===t.specifiers.length),t.specifiers=[i.importDefaultSpecifier(e)],this._resultName=i.cloneNode(e),this}named(e,t){if("default"===t)return this.default(e);e=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];return(0,n.default)("ImportDeclaration"===r.type),(0,n.default)(0===r.specifiers.length),r.specifiers=[i.importSpecifier(e,i.identifier(t))],this._resultName=i.cloneNode(e),this}var(e){e=this._scope.generateUidIdentifier(e);let t=this._statements[this._statements.length-1];return"ExpressionStatement"!==t.type&&((0,n.default)(this._resultName),t=i.expressionStatement(this._resultName),this._statements.push(t)),this._statements[this._statements.length-1]=i.variableDeclaration("var",[i.variableDeclarator(e,t.expression)]),this._resultName=i.cloneNode(e),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=i.callExpression(e,[t.expression]):"VariableDeclaration"===t.type?((0,n.default)(1===t.declarations.length),t.declarations[0].init=i.callExpression(e,[t.declarations[0].init])):n.default.fail("Unexpected type."),this}prop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=i.memberExpression(t.expression,i.identifier(e)):"VariableDeclaration"===t.type?((0,n.default)(1===t.declarations.length),t.declarations[0].init=i.memberExpression(t.declarations[0].init,i.identifier(e))):n.default.fail("Unexpected type:"+t.type),this}read(e){this._resultName=i.memberExpression(this._resultName,i.identifier(e))}}},{"@babel/types":196,assert:1}],100:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=l(e("assert")),n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types")),i=l(e("./import-builder")),a=l(e("./is-module"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}r.default=class{constructor(e,t,r){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1};const s=e.find(e=>e.isProgram());this._programPath=s,this._programScope=s.scope,this._hub=s.hub,this._defaultOpts=this._applyDefaults(t,r,!0)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,r){return(0,s.default)("string"==typeof e),this._generateImport(this._applyDefaults(t,r),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),!1)}_applyDefaults(e,t,r=!1){const n=[];"string"==typeof e?(n.push({importedSource:e}),n.push(t)):((0,s.default)(!t,"Unexpected secondary arguments."),n.push(e));const i=Object.assign({},this._defaultOpts);for(const e of n)e&&(Object.keys(i).forEach(t=>{void 0!==e[t]&&(i[t]=e[t])}),r||(void 0!==e.nameHint&&(i.nameHint=e.nameHint),void 0!==e.blockHoist&&(i.blockHoist=e.blockHoist)));return i}_generateImport(e,t){const r="default"===t,s=!!t&&!r,o=null===t,{importedSource:l,importedType:c,importedInterop:p,importingInterop:u,ensureLiveReference:d,ensureNoContext:f,nameHint:h,blockHoist:y}=e;let m=h||t;const g=(0,a.default)(this._programPath),b=g&&"node"===u,x=g&&"babel"===u,v=new i.default(l,this._programScope,this._hub);if("es6"===c){if(!b&&!x)throw new Error("Cannot import an ES6 module from CommonJS");v.import(),o?v.namespace(h||l):(r||s)&&v.named(m,t)}else{if("commonjs"!==c)throw new Error(`Unexpected interopType "${c}"`);if("babel"===p)if(b){m="default"!==m?m:l;const e=`${l}$es6Default`;v.import(),o?v.default(e).var(m||l).wildcardInterop():r?d?v.default(e).var(m||l).defaultInterop().read("default"):v.default(e).var(m).defaultInterop().prop(t):s&&v.default(e).read(t)}else x?(v.import(),o?v.namespace(m||l):(r||s)&&v.named(m,t)):(v.require(),o?v.var(m||l).wildcardInterop():(r||s)&&d?r?(m="default"!==m?m:l,v.var(m).read(t),v.defaultInterop()):v.var(l).read(t):r?v.var(m).defaultInterop().prop(t):s&&v.var(m).prop(t));else if("compiled"===p)b?(v.import(),o?v.default(m||l):(r||s)&&v.default(l).read(m)):x?(v.import(),o?v.namespace(m||l):(r||s)&&v.named(m,t)):(v.require(),o?v.var(m||l):(r||s)&&(d?v.var(l).read(m):v.prop(t).var(m)));else{if("uncompiled"!==p)throw new Error(`Unknown importedInterop "${p}".`);if(r&&d)throw new Error("No live reference for commonjs default");b?(v.import(),o?v.default(m||l):r?v.default(m):s&&v.default(l).read(m)):x?(v.import(),o?v.default(m||l):r?v.default(m):s&&v.named(m,t)):(v.require(),o?v.var(m||l):r?v.var(m):s&&(d?v.var(l).read(m):v.var(m).prop(t)))}}const{statements:E,resultName:T}=v.done();return this._insertStatements(E,y),(r||s)&&f&&"Identifier"!==T.type?n.sequenceExpression([n.numericLiteral(0),T]):T}_insertStatements(e,t=3){e.forEach(e=>{e._blockHoist=t});const r=this._programPath.get("body").find(e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4});r?r.insertBefore(e):this._programPath.unshiftContainer("body",e)}}},{"./import-builder":99,"./is-module":102,"@babel/types":196,assert:1}],101:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.addDefault=function(e,t,r){return new s.default(e).addDefault(t,r)},r.addNamed=function(e,t,r,n){return new s.default(e).addNamed(t,r,n)},r.addNamespace=function(e,t,r){return new s.default(e).addNamespace(t,r)},r.addSideEffect=function(e,t,r){return new s.default(e).addSideEffect(t,r)},Object.defineProperty(r,"ImportInjector",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(r,"isModule",{enumerable:!0,get:function(){return n.default}});var s=i(e("./import-injector")),n=i(e("./is-module"));function i(e){return e&&e.__esModule?e:{default:e}}},{"./import-injector":100,"./is-module":102}],102:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const{sourceType:t}=e.node;if("module"!==t&&"script"!==t)throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);return"module"===e.node.sourceType}},{}],103:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var r,s,n;const{filename:i,filenameRelative:a=i,sourceRoot:o=(null!=(r=t.moduleRoot)?r:e.moduleRoot)}=e,{moduleId:l=e.moduleId,moduleIds:c=(null!=(s=e.moduleIds)?s:!!l),getModuleId:p=e.getModuleId,moduleRoot:u=(null!=(n=e.moduleRoot)?n:o)}=t;if(!c)return null;if(null!=l&&!p)return l;let d=null!=u?u+"/":"";if(a){const e=null!=o?new RegExp("^"+o+"/?"):"";d+=a.replace(e,"").replace(/\.(\w*?)$/,"")}return d=d.replace(/\\/g,"/"),p&&p(d)||d}},{}],104:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.rewriteModuleStatementsAndPrepareHeader=function(e,{exportName:t,strict:r,allowTopLevelThis:u,strictMode:d,loose:f,noInterop:h,lazy:g,esNamespaceOnly:b}){(0,s.default)((0,o.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const x=(0,p.default)(e,t,{noInterop:h,loose:f,lazy:g,esNamespaceOnly:b});u||(0,l.default)(e);if((0,c.default)(e,x),!1!==d){const t=e.node.directives.some(e=>"use strict"===e.value.value);t||e.unshiftContainer("directives",n.directive(n.directiveLiteral("use strict")))}const v=[];(0,p.hasExports)(x)&&!r&&v.push(function(e,t=!1){return(t?i.default.statement`
        EXPORTS.__esModule = true;
      `:i.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}(x,f));const E=function(e,t){const r=Object.create(null);for(const e of t.local.values())for(const t of e.names)r[t]=!0;let s=!1;for(const e of t.source.values()){for(const t of e.reexports.keys())r[t]=!0;for(const t of e.reexportNamespace)r[t]=!0;s=s||e.reexportAll}if(!s||0===Object.keys(r).length)return null;const i=e.scope.generateUidIdentifier("exportNames");return delete r.default,{name:i.name,statement:n.variableDeclaration("var",[n.variableDeclarator(i,n.valueToNode(r))])}}(e,x);E&&(x.exportNameListName=E.name,v.push(E.statement));return v.push(...function(e,t,r=!1){const s=[],i=[];for(const[e,r]of t.local)"import"===r.kind||("hoisted"===r.kind?s.push(m(t,r.names,n.identifier(e))):i.push(...r.names));for(const e of t.source.values()){r||s.push(...y(t,e,r));for(const t of e.reexportNamespace)i.push(t)}return s.push(...(0,a.default)(i,100).map(r=>m(t,r,e.scope.buildUndefinedNode()))),s}(e,x,f)),{meta:x,headers:v}},r.ensureStatementsHoisted=function(e){e.forEach(e=>{e._blockHoist=3})},r.wrapInterop=function(e,t,r){if("none"===r)return null;let s;if("default"===r)s="interopRequireDefault";else{if("namespace"!==r)throw new Error(`Unknown interop: ${r}`);s="interopRequireWildcard"}return n.callExpression(e.hub.addHelper(s),[t])},r.buildNamespaceInitStatements=function(e,t,r=!1){const s=[];let a=n.identifier(t.name);t.lazy&&(a=n.callExpression(a,[]));for(const e of t.importsNamespace)e!==t.name&&s.push(i.default.statement`var NAME = SOURCE;`({NAME:e,SOURCE:n.cloneNode(a)}));r&&s.push(...y(e,t,r));for(const r of t.reexportNamespace)s.push((t.lazy?i.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:i.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:r,NAMESPACE:n.cloneNode(a)}));if(t.reexportAll){const o=function(e,t,r){return(r?i.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:i.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?i.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}(e,n.cloneNode(a),r);o.loc=t.reexportAll.loc,s.push(o)}return s},Object.defineProperty(r,"isModule",{enumerable:!0,get:function(){return o.isModule}}),Object.defineProperty(r,"rewriteThis",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(r,"hasExports",{enumerable:!0,get:function(){return p.hasExports}}),Object.defineProperty(r,"isSideEffectImport",{enumerable:!0,get:function(){return p.isSideEffectImport}}),Object.defineProperty(r,"getModuleName",{enumerable:!0,get:function(){return u.default}});var s=h(e("assert")),n=f(e("@babel/types")),i=h(e("@babel/template")),a=h(e("lodash/chunk")),o=e("@babel/helper-module-imports"),l=h(e("./rewrite-this")),c=h(e("./rewrite-live-references")),p=f(e("./normalize-and-load-metadata")),u=h(e("./get-module-name"));function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function h(e){return e&&e.__esModule?e:{default:e}}const y=(e,t,r)=>{const s=t.lazy?n.callExpression(n.identifier(t.name),[]):n.identifier(t.name),a=(e=>e?i.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE.IMPORT_NAME;`:i.default`
      Object.defineProperty(EXPORTS, "EXPORT_NAME", {
        enumerable: true,
        get: function() {
          return NAMESPACE.IMPORT_NAME;
        },
      });
    `)(r);return Array.from(t.reexports,([t,r])=>a({EXPORTS:e.exportName,EXPORT_NAME:t,NAMESPACE:n.cloneNode(s),IMPORT_NAME:r}))};function m(e,t,r){return n.expressionStatement(t.reduce((t,r)=>i.default.expression`EXPORTS.NAME = VALUE`({EXPORTS:e.exportName,NAME:r,VALUE:t}),r))}},{"./get-module-name":103,"./normalize-and-load-metadata":105,"./rewrite-live-references":106,"./rewrite-this":107,"@babel/helper-module-imports":101,"@babel/template":122,"@babel/types":196,assert:1,"lodash/chunk":426}],105:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.hasExports=function(e){return e.hasExports},r.isSideEffectImport=a,r.default=function(e,t,{noInterop:r=!1,loose:s=!1,lazy:o=!1,esNamespaceOnly:l=!1}={}){t||(t=e.scope.generateUidIdentifier("exports").name);!function(e){e.get("body").forEach(e=>{e.isExportDefaultDeclaration()&&(0,i.default)(e)})}(e);const{local:c,source:p,hasExports:u}=function(e,{loose:t,lazy:r}){const s=function(e,t){const r=new Map;e.get("body").forEach(e=>{let s;if(e.isImportDeclaration())s="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(t&&e.node.source&&e.get("source").isStringLiteral())return void e.node.specifiers.forEach(e=>{r.set(e.local.name,"block")});if(e.isFunctionDeclaration())s="hoisted";else if(e.isClassDeclaration())s="block";else if(e.isVariableDeclaration({kind:"var"}))s="var";else{if(!e.isVariableDeclaration())return;s="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach(e=>{r.set(e,s)})});const s=new Map,n=e=>{const t=e.node.name;let n=s.get(t);if(!n){const i=r.get(t);if(void 0===i)throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`);n={names:[],kind:i},s.set(t,n)}return n};return e.get("body").forEach(e=>{if(!e.isExportNamedDeclaration()||!t&&e.node.source){if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");n(t.get("id")).names.push("default")}}else if(e.node.declaration){const t=e.get("declaration"),r=t.getOuterBindingIdentifierPaths();Object.keys(r).forEach(e=>{if("__esModule"===e)throw t.buildCodeFrameError('Illegal export "__esModule".');n(r[e]).names.push(e)})}else e.get("specifiers").forEach(e=>{const t=e.get("local"),r=e.get("exported");if("__esModule"===r.node.name)throw r.buildCodeFrameError('Illegal export "__esModule".');n(t).names.push(r.node.name)})}),s}(e,t),i=new Map,o=t=>{const r=t.value;let s=i.get(r);return s||(s={name:e.scope.generateUidIdentifier((0,n.basename)(r,(0,n.extname)(r))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1},i.set(r,s)),s};let l=!1;e.get("body").forEach(e=>{if(e.isImportDeclaration()){const t=o(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach(e=>{if(e.isImportDefaultSpecifier()){const r=e.get("local").node.name;t.imports.set(r,"default");const n=s.get(r);n&&(s.delete(r),n.names.forEach(e=>{t.reexports.set(e,"default")}))}else if(e.isImportNamespaceSpecifier()){const r=e.get("local").node.name;t.importsNamespace.add(r);const n=s.get(r);n&&(s.delete(r),n.names.forEach(e=>{t.reexportNamespace.add(e)}))}else if(e.isImportSpecifier()){const r=e.get("imported").node.name,n=e.get("local").node.name;t.imports.set(n,r);const i=s.get(n);i&&(s.delete(n),i.names.forEach(e=>{t.reexports.set(e,r)}))}})}else if(e.isExportAllDeclaration()){l=!0;const t=o(e.node.source);t.loc||(t.loc=e.node.loc),t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){l=!0;const t=o(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach(e=>{if(!e.isExportSpecifier())throw e.buildCodeFrameError("Unexpected export specifier type");const r=e.get("local").node.name,s=e.get("exported").node.name;if(t.reexports.set(s,r),"__esModule"===s)throw s.buildCodeFrameError('Illegal export "__esModule".')})}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(l=!0)});for(const e of i.values()){let t=!1,r=!1;e.importsNamespace.size>0&&(t=!0,r=!0),e.reexportAll&&(r=!0);for(const s of e.imports.values())"default"===s?t=!0:r=!0;for(const s of e.reexports.values())"default"===s?t=!0:r=!0;t&&r?e.interop="namespace":t&&(e.interop="default")}for(const[e,t]of i)if(!1!==r&&!a(t)&&!t.reexportAll)if(!0===r)t.lazy=!/\./.test(e);else if(Array.isArray(r))t.lazy=-1!==r.indexOf(e);else{if("function"!=typeof r)throw new Error(".lazy must be a boolean, string array, or function");t.lazy=r(e)}return{hasExports:l,local:s,source:i}}(e,{loose:s,lazy:o});!function(e){e.get("body").forEach(e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");t._blockHoist=e.node._blockHoist,e.replaceWith(t)}else e.isExportAllDeclaration()&&e.remove()})}(e);for(const[,e]of p)e.importsNamespace.size>0&&(e.name=e.importsNamespace.values().next().value),r?e.interop="none":l&&"namespace"===e.interop&&(e.interop="default");return{exportName:t,exportNameListName:null,hasExports:u,local:c,source:p}};var s,n=e("path"),i=(s=e("@babel/helper-split-export-declaration"))&&s.__esModule?s:{default:s};function a(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}},{"@babel/helper-split-export-declaration":112,path:12}],106:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const r=new Map,s=new Map,i=t=>{e.requeue(t)};for(const[e,s]of t.source){for(const[t,n]of s.imports)r.set(t,[e,n,null]);for(const t of s.importsNamespace)r.set(t,[e,null,t])}for(const[e,r]of t.local){let t=s.get(e);t||(t=[],s.set(e,t)),t.push(...r.names)}e.traverse(c,{metadata:t,requeueInParent:i,scope:e.scope,exported:s}),(0,a.default)(e,new Set([...Array.from(r.keys()),...Array.from(s.keys())])),e.traverse(d,{seen:new WeakSet,metadata:t,requeueInParent:i,scope:e.scope,imported:r,exported:s,buildImportReference:([e,r,s],i)=>{const a=t.source.get(e);if(s)return a.lazy&&(i=n.callExpression(i,[])),i;let o=n.identifier(a.name);return a.lazy&&(o=n.callExpression(o,[])),n.memberExpression(o,n.identifier(r))}})};var s=l(e("assert")),n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types")),i=l(e("@babel/template")),a=l(e("@babel/helper-simple-access"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}const c={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:r,metadata:s}=this,{id:i}=e.node;if(!i)throw new Error("Expected class to have a name");const a=i.name,o=r.get(a)||[];if(o.length>0){const r=n.expressionStatement(p(s,o,n.identifier(a)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:r,metadata:s}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach(i=>{const a=r.get(i)||[];if(a.length>0){const r=n.expressionStatement(p(s,a,n.identifier(i)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}})}},p=(e,t,r)=>(t||[]).reduce((t,r)=>n.assignmentExpression("=",n.memberExpression(n.identifier(e.exportName),n.identifier(r)),t),r),u=e=>i.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,d={ReferencedIdentifier(e){const{seen:t,buildImportReference:r,scope:s,imported:i,requeueInParent:a}=this;if(t.has(e.node))return;t.add(e.node);const o=e.node.name,l=e.scope.getBinding(o);if(s.getBinding(o)!==l)return;const c=i.get(o);if(c){const t=r(c,e.node);if(t.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&n.isMemberExpression(t))e.replaceWith(n.sequenceExpression([n.numericLiteral(0),t]));else if(e.isJSXIdentifier()&&n.isMemberExpression(t)){const{object:r,property:s}=t;e.replaceWith(n.JSXMemberExpression(n.JSXIdentifier(r.name),n.JSXIdentifier(s.name)))}else e.replaceWith(t);a(e),e.skip()}},AssignmentExpression:{exit(e){const{scope:t,seen:r,imported:i,exported:a,requeueInParent:o,buildImportReference:l}=this;if(r.has(e.node))return;r.add(e.node);const c=e.get("left");if(!c.isMemberExpression())if(c.isIdentifier()){const r=c.node.name;if(t.getBinding(r)!==e.scope.getBinding(r))return;const d=a.get(r),f=i.get(r);if((null==d?void 0:d.length)>0||f){(0,s.default)("="===e.node.operator,"Path was not simplified");const t=e.node;f&&(t.left=l(f,t.left),t.right=n.sequenceExpression([t.right,u(r)])),e.replaceWith(p(this.metadata,d,t)),o(e)}}else{const r=c.getOuterBindingIdentifiers(),s=Object.keys(r).filter(r=>t.getBinding(r)===e.scope.getBinding(r)),l=s.find(e=>i.has(e));l&&(e.node.right=n.sequenceExpression([e.node.right,u(l)]));const d=[];if(s.forEach(e=>{const t=a.get(e)||[];t.length>0&&d.push(p(this.metadata,t,n.identifier(e)))}),d.length>0){let t=n.sequenceExpression(d);e.parentPath.isExpressionStatement()&&((t=n.expressionStatement(t))._blockHoist=e.parentPath.node._blockHoist),o(e.insertAfter(t)[0])}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:r}=e,{left:s}=r,{exported:i,scope:a}=this;if(!n.isVariableDeclaration(s)){let r=!1;const o=e.get("body"),l=o.scope;for(const e of Object.keys(n.getOuterBindingIdentifiers(s)))i.get(e)&&a.getBinding(e)===t.getBinding(e)&&(r=!0,l.hasOwnBinding(e)&&l.rename(e));if(!r)return;const c=t.generateUidIdentifierBasedOnNode(s);o.unshiftContainer("body",n.expressionStatement(n.assignmentExpression("=",s,c))),e.get("left").replaceWith(n.variableDeclaration("let",[n.variableDeclarator(n.cloneNode(c))])),t.registerDeclaration(e.get("left"))}}}},{"@babel/helper-simple-access":111,"@babel/template":122,"@babel/types":196,assert:1}],107:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){e.traverse(n)};var s=e("@babel/helper-replace-supers");const n={ThisExpression(e){e.replaceWith(e.scope.buildUndefinedNode())},Function(e){e.isMethod()?(0,s.skipAllButComputedKey)(e):e.isArrowFunctionExpression()||e.skip()},ClassProperty(e){(0,s.skipAllButComputedKey)(e)},ClassPrivateProperty(e){e.skip()}}},{"@babel/helper-replace-supers":110}],108:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r,n){return 1===r.length&&s.isSpreadElement(r[0])&&s.isIdentifier(r[0].argument,{name:"arguments"})?s.callExpression(s.memberExpression(e,s.identifier("apply")),[t,r[0].argument]):n?s.optionalCallExpression(s.optionalMemberExpression(e,s.identifier("call"),!1,!0),[t,...r],!1):s.callExpression(s.memberExpression(e,s.identifier("call")),[t,...r])};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}},{"@babel/types":196}],109:[function(e,t,r){"use strict";function s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Object.defineProperty(r,"__esModule",{value:!0}),r.declare=function(e){return(t,r,n)=>(t.assertVersion||(t=Object.assign(function(e){let t=null;"string"==typeof e.version&&/^7\./.test(e.version)&&(!(t=Object.getPrototypeOf(e))||s(t,"version")&&s(t,"transform")&&s(t,"template")&&s(t,"types")||(t=null));return Object.assign({},t,e)}(t),{assertVersion(e){!function(e,t){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");const r=Error.stackTraceLimit;"number"==typeof r&&r<25&&(Error.stackTraceLimit=25);let s;s="7."===t.slice(0,2)?new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${t}". `+"You'll need to update your @babel/core version."):new Error(`Requires Babel "${e}", but was loaded with "${t}". `+'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');"number"==typeof r&&(Error.stackTraceLimit=r);throw Object.assign(s,{code:"BABEL_VERSION_UNSUPPORTED",version:t,range:e})}(e,t.version)}})),e(t,r||{},n))}},{}],110:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.skipAllButComputedKey=p,r.default=r.environmentVisitor=void 0;var s=l(e("@babel/traverse")),n=l(e("@babel/helper-member-expression-to-functions")),i=l(e("@babel/helper-optimise-call-expression")),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r,s){e=a.cloneNode(e);const n=t||s?e:a.memberExpression(e,a.identifier("prototype"));return a.callExpression(r.addHelper("getPrototypeOf"),[n])}function p(e){if(!e.node.computed)return void e.skip();const t=a.VISITOR_KEYS[e.type];for(const r of t)"key"!==r&&e.skipKey(r)}const u={TypeAnnotation(e){e.skip()},Function(e){e.isMethod()||e.isArrowFunctionExpression()||e.skip()},"Method|ClassProperty|ClassPrivateProperty"(e){p(e)}};r.environmentVisitor=u;const d=s.default.visitors.merge([u,{Super(e,t){const{node:r,parentPath:s}=e;s.isMemberExpression({object:r})&&t.handle(s)}}]),f={memoise(e,t){const{scope:r,node:s}=e,{computed:n,property:i}=s;if(!n)return;const a=r.maybeGenerateMemoised(i);a&&this.memoiser.set(i,a,t)},prop(e){const{computed:t,property:r}=e.node;return this.memoiser.has(r)?a.cloneNode(this.memoiser.get(r)):t?a.cloneNode(r):a.stringLiteral(r.name)},get(e){return this._get(e,this._getThisRefs())},_get(e,t){const r=c(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return a.callExpression(this.file.addHelper("get"),[t.memo?a.sequenceExpression([t.memo,r]):r,this.prop(e),t.this])},_getThisRefs(){if(!this.isDerivedConstructor)return{this:a.thisExpression()};const e=this.scope.generateDeclaredUidIdentifier("thisSuper");return{memo:a.assignmentExpression("=",e,a.thisExpression()),this:a.cloneNode(e)}},set(e,t){const r=this._getThisRefs(),s=c(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return a.callExpression(this.file.addHelper("set"),[r.memo?a.sequenceExpression([r.memo,s]):s,this.prop(e),t,r.this,a.booleanLiteral(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError("Destructuring to a super field is not supported yet.")},call(e,t){const r=this._getThisRefs();return(0,i.default)(this._get(e,r),a.cloneNode(r.this),t,!1)}},h=Object.assign({},f,{prop(e){const{property:t}=e.node;return this.memoiser.has(t)?a.cloneNode(this.memoiser.get(t)):a.cloneNode(t)},get(e){const{isStatic:t,superRef:r}=this,{computed:s}=e.node,n=this.prop(e);let i;return i=t?r?a.cloneNode(r):a.memberExpression(a.identifier("Function"),a.identifier("prototype")):r?a.memberExpression(a.cloneNode(r),a.identifier("prototype")):a.memberExpression(a.identifier("Object"),a.identifier("prototype")),a.memberExpression(i,n,s)},set(e,t){const{computed:r}=e.node,s=this.prop(e);return a.assignmentExpression("=",a.memberExpression(a.thisExpression(),s,r),t)},destructureSet(e){const{computed:t}=e.node,r=this.prop(e);return a.memberExpression(a.thisExpression(),r,t)},call(e,t){return(0,i.default)(this.get(e),a.thisExpression(),t,!1)}});r.default=class{constructor(e){const t=e.methodPath;this.methodPath=t,this.isDerivedConstructor=t.isClassMethod({kind:"constructor"})&&!!e.superRef,this.isStatic=t.isObjectMethod()||t.node.static,this.isPrivateMethod=t.isPrivate()&&t.isMethod(),this.file=e.file,this.superRef=e.superRef,this.isLoose=e.isLoose,this.opts=e}getObjectRef(){return a.cloneNode(this.opts.objectRef||this.opts.getObjectRef())}replace(){const e=this.isLoose?h:f;(0,n.default)(this.methodPath,d,Object.assign({file:this.file,scope:this.methodPath.scope,isDerivedConstructor:this.isDerivedConstructor,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),superRef:this.superRef},e))}}},{"@babel/helper-member-expression-to-functions":98,"@babel/helper-optimise-call-expression":108,"@babel/traverse":131,"@babel/types":196}],111:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){e.traverse(i,{scope:e.scope,bindingNames:t,seen:new WeakSet})};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}const i={UpdateExpression:{exit(e){const{scope:t,bindingNames:r}=this,n=e.get("argument");if(!n.isIdentifier())return;const i=n.node.name;if(r.has(i)&&t.getBinding(i)===e.scope.getBinding(i))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t="++"==e.node.operator?"+=":"-=";e.replaceWith(s.assignmentExpression(t,n.node,s.numericLiteral(1)))}else if(e.node.prefix)e.replaceWith(s.assignmentExpression("=",s.identifier(i),s.binaryExpression(e.node.operator[0],s.unaryExpression("+",n.node),s.numericLiteral(1))));else{const t=e.scope.generateUidIdentifierBasedOnNode(n.node,"old"),r=t.name;e.scope.push({id:t});const i=s.binaryExpression(e.node.operator[0],s.identifier(r),s.numericLiteral(1));e.replaceWith(s.sequenceExpression([s.assignmentExpression("=",s.identifier(r),s.unaryExpression("+",n.node)),s.assignmentExpression("=",s.cloneNode(n.node),i),s.identifier(r)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:r,bindingNames:n}=this;if("="===e.node.operator)return;if(r.has(e.node))return;r.add(e.node);const i=e.get("left");if(!i.isIdentifier())return;const a=i.node.name;n.has(a)&&t.getBinding(a)===e.scope.getBinding(a)&&(e.node.right=s.binaryExpression(e.node.operator.slice(0,-1),s.cloneNode(e.node.left),e.node.right),e.node.operator="=")}}}},{"@babel/types":196}],112:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be splitted.");const t=e.isExportDefaultDeclaration(),r=e.get("declaration"),n=r.isClassDeclaration();if(t){const t=r.isFunctionDeclaration()||n,i=r.isScope()?r.scope.parent:r.scope;let a=r.node.id,o=!1;a||(o=!0,a=i.generateUidIdentifier("default"),(t||r.isFunctionExpression()||r.isClassExpression())&&(r.node.id=s.cloneNode(a)));const l=t?r:s.variableDeclaration("var",[s.variableDeclarator(s.cloneNode(a),r.node)]),c=s.exportNamedDeclaration(null,[s.exportSpecifier(s.cloneNode(a),s.identifier("default"))]);return e.insertAfter(c),e.replaceWith(l),o&&i.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const i=r.getOuterBindingIdentifiers(),a=Object.keys(i).map(e=>s.exportSpecifier(s.identifier(e),s.identifier(e))),o=s.exportNamedDeclaration(null,a);return e.insertAfter(o),e.replaceWith(r.node),e};var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}},{"@babel/types":196}],113:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isIdentifierStart=p,r.isIdentifierChar=u,r.isIdentifierName=function(e){let t=!0;for(let r=0,s=Array.from(e);r<s.length;r++){const e=s[r],n=e.codePointAt(0);if(t){if(!p(n))return!1;t=!1}else if(!u(n))return!1}return!t};let s="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const i=new RegExp("["+s+"]"),a=new RegExp("["+s+n+"]");s=n=null;const o=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],l=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function c(e,t){let r=65536;for(let s=0,n=t.length;s<n;s+=2){if((r+=t[s])>e)return!1;if((r+=t[s+1])>=e)return!0}return!1}function p(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):c(e,o)))}function u(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&a.test(String.fromCharCode(e)):c(e,o)||c(e,l))))}},{}],114:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isIdentifierName",{enumerable:!0,get:function(){return s.isIdentifierName}}),Object.defineProperty(r,"isIdentifierChar",{enumerable:!0,get:function(){return s.isIdentifierChar}}),Object.defineProperty(r,"isIdentifierStart",{enumerable:!0,get:function(){return s.isIdentifierStart}}),Object.defineProperty(r,"isReservedWord",{enumerable:!0,get:function(){return n.isReservedWord}}),Object.defineProperty(r,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return n.isStrictBindOnlyReservedWord}}),Object.defineProperty(r,"isStrictBindReservedWord",{enumerable:!0,get:function(){return n.isStrictBindReservedWord}}),Object.defineProperty(r,"isStrictReservedWord",{enumerable:!0,get:function(){return n.isStrictReservedWord}}),Object.defineProperty(r,"isKeyword",{enumerable:!0,get:function(){return n.isKeyword}});var s=e("./identifier"),n=e("./keyword")},{"./identifier":113,"./keyword":115}],115:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isReservedWord=l,r.isStrictReservedWord=c,r.isStrictBindOnlyReservedWord=p,r.isStrictBindReservedWord=function(e,t){return c(e,t)||p(e)},r.isKeyword=function(e){return i.has(e)};const s=["implements","interface","let","package","private","protected","public","static","yield"],n=["eval","arguments"],i=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),a=new Set(s),o=new Set(n);function l(e,t){return t&&"await"===e||"enum"===e}function c(e,t){return l(e,t)||a.has(e)}function p(e){return o.has(e)}},{}],116:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s,n=(s=e("@babel/template"))&&s.__esModule?s:{default:s};const i=Object.create(null);var a=i;r.default=a;const o=e=>t=>({minVersion:e,ast:()=>n.default.program.ast(t)});i.typeof=o("7.0.0-beta.0")`
  export default function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) { return typeof obj; };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
    }

    return _typeof(obj);
  }
`,i.jsx=o("7.0.0-beta.0")`
  var REACT_ELEMENT_TYPE;

  export default function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = (
        typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element")
      ) || 0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      // If we're going to assign props.children, we create a new object now
      // to avoid mutating defaultProps.
      props = {
        children: void 0,
      };
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null,
    };
  }
`,i.asyncIterator=o("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method
    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator]
        if (method != null) return method.call(iterable);
      }
      if (Symbol.iterator) {
        method = iterable[Symbol.iterator]
        if (method != null) return method.call(iterable);
      }
    }
    throw new TypeError("Object is not async iterable");
  }
`,i.AwaitValue=o("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,i.AsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; };
  }

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,i.wrapAsyncGenerator=o("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,i.awaitAsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,i.asyncGeneratorDelegate=o("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () { return this; };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,i.asyncToGenerator=o("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,i.classCallCheck=o("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,i.createClass=o("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`,i.defineEnumerableProperties=o("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,i.defaults=o("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,i.defineProperty=o("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,i.extends=o("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,i.objectSpread=o("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,i.objectSpread2=o("7.5.0")`
  import defineProperty from "defineProperty";

  // This function is different to "Reflect.ownKeys". The enumerableOnly
  // filters on symbol properties only. Returned string properties are always
  // enumerable. It is good to use in objectSpread.

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  export default function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
`,i.inherits=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,i.inheritsLoose=o("7.0.0-beta.0")`
  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
`,i.getPrototypeOf=o("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,i.setPrototypeOf=o("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,i.isNativeReflectConstruct=o("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Date object.
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,i.construct=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,i.isNativeFunction=o("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,i.wrapNativeSuper=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,i.instanceof=o("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,i.interopRequireDefault=o("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,i.interopRequireWildcard=o("7.0.0-beta.0")`
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;

    var cache = new WeakMap();
    _getRequireWildcardCache = function () { return cache; };
    return cache;
  }

  export default function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,i.newArrowCheck=o("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,i.objectDestructuringEmpty=o("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,i.objectWithoutPropertiesLoose=o("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,i.objectWithoutProperties=o("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,i.assertThisInitialized=o("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,i.possibleConstructorReturn=o("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return assertThisInitialized(self);
  }
`,i.createSuper=o("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,i.superPropBase=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,i.get=o("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`,i.set=o("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,i.taggedTemplateLiteral=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,i.taggedTemplateLiteralLoose=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,i.readOnlyError=o("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new Error("\\"" + name + "\\" is read-only");
  }
`,i.classNameTDZError=o("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,i.temporalUndefined=o("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,i.tdz=o("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,i.temporalRef=o("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,i.slicedToArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,i.slicedToArrayLoose=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,i.toArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,i.toConsumableArray=o("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,i.arrayWithoutHoles=o("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,i.arrayWithHoles=o("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,i.maybeArrayLike=o("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`,i.iterableToArray=o("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
`,i.iterableToArrayLimit=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,i.iterableToArrayLimitLoose=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,i.unsupportedIterableToArray=o("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,i.arrayLikeToArray=o("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,i.nonIterableSpread=o("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,i.nonIterableRest=o("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,i.createForOfIteratorHelper=o("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = o[Symbol.iterator]();
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,i.createForOfIteratorHelperLoose=o("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        return function() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        }
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }
`,i.skipFirstGeneratorNext=o("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,i.toPrimitive=o("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,i.toPropertyKey=o("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,i.initializerWarningHelper=o("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,i.initializerDefineProperty=o("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,i.applyDecoratedDescriptor=o("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            // This is a hack to avoid this being processed by 'transform-runtime'.
            // See issue #9.
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,i.classPrivateFieldLooseKey=o("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,i.classPrivateFieldLooseBase=o("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,i.classPrivateFieldGet=o("7.0.0-beta.0")`
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,i.classPrivateFieldSet=o("7.0.0-beta.0")`
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }

    return value;
  }
`,i.classPrivateFieldDestructureSet=o("7.4.4")`
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,i.classStaticPrivateFieldSpecGet=o("7.0.2")`
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,i.classStaticPrivateFieldSpecSet=o("7.0.2")`
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }

    return value;
  }
`,i.classStaticPrivateMethodGet=o("7.3.2")`
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    return method;
  }
`,i.classStaticPrivateMethodSet=o("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,i.decorate=o("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,i.classPrivateMethodGet=o("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,i.classPrivateMethodSet=o("7.1.6")`
  export default function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }
`,i.wrapRegExp=o("7.2.6")`
  import wrapNativeSuper from "wrapNativeSuper";
  import getPrototypeOf from "getPrototypeOf";
  import possibleConstructorReturn from "possibleConstructorReturn";
  import inherits from "inherits";

  export default function _wrapRegExp(re, groups) {
    _wrapRegExp = function(re, groups) {
      return new BabelRegExp(re, undefined, groups);
    };

    var _RegExp = wrapNativeSuper(RegExp);
    var _super = RegExp.prototype;
    var _groups = new WeakMap();

    function BabelRegExp(re, flags, groups) {
      var _this = _RegExp.call(this, re, flags);
      // if the regex is recreated with 'g' flag
      _groups.set(_this, groups || _groups.get(re));
      return _this;
    }
    inherits(BabelRegExp, _RegExp);

    BabelRegExp.prototype.exec = function(str) {
      var result = _super.exec.call(this, str);
      if (result) result.groups = buildGroups(result, this);
      return result;
    };
    BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
      if (typeof substitution === "string") {
        var groups = _groups.get(this);
        return _super[Symbol.replace].call(
          this,
          str,
          substitution.replace(/\\$<([^>]+)>/g, function(_, name) {
            return "$" + groups[name];
          })
        );
      } else if (typeof substitution === "function") {
        var _this = this;
        return _super[Symbol.replace].call(
          this,
          str,
          function() {
            var args = [];
            args.push.apply(args, arguments);
            if (typeof args[args.length - 1] !== "object") {
              // Modern engines already pass result.groups as the last arg.
              args.push(buildGroups(args, _this));
            }
            return substitution.apply(this, args);
          }
        );
      } else {
        return _super[Symbol.replace].call(this, str, substitution);
      }
    }

    function buildGroups(result, re) {
      // NOTE: This function should return undefined if there are no groups,
      // but in that case Babel doesn't add the wrapper anyway.

      var g = _groups.get(re);
      return Object.keys(g).reduce(function(groups, name) {
        groups[name] = result[g[name]];
        return groups;
      }, Object.create(null));
    }

    return _wrapRegExp.apply(this, arguments);
  }