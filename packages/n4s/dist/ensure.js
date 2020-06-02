'use strict';(function(f,g){"object"===typeof exports&&"undefined"!==typeof module?module.exports=g():"function"===typeof define&&define.amd?define(g):(f=f||self,f.ensure=g())})(this,function(){function f(a){"@babel/helpers - typeof";f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};return f(a)}function g(a,b,c){b in a?Object.defineProperty(a,
b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c;return a}function k(){k=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],e;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(a[e]=c[e])}return a};return k.apply(this,arguments)}function n(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);b&&(e=e.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable}));c.push.apply(c,e)}return c}function l(a){for(var b=
1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?n(Object(c),!0).forEach(function(b){g(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function I(a){var b=Array.isArray(a)?m(a):void 0;b||(b="undefined"!==typeof Symbol&&Symbol.iterator in Object(a)?Array.from(a):void 0);if(!b)a:{if(a){if("string"===typeof a){b=
m(a,void 0);break a}b=Object.prototype.toString.call(a).slice(8,-1);"Object"===b&&a.constructor&&(b=a.constructor.name);if("Map"===b||"Set"===b){b=Array.from(a);break a}if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)){b=m(a,void 0);break a}}b=void 0}if(!(a=b))throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");return a}function m(a,b){if(null==b||b>a.length)b=a.length;for(var c=
0,e=Array(b);c<b;c++)e[c]=a[c];return e}function J(a){setTimeout(function(){throw Error("[".concat("ensure","]: ",a));})}function p(a,b){return a===b}function d(a){return!(isNaN(parseFloat(a))||isNaN(Number(a))||!isFinite(a))}function q(a,b){return d(a)&&d(b)&&Number(a)>Number(b)}function r(a,b){return d(a)&&d(b)&&Number(a)>=Number(b)}function t(a,b){return Array.isArray(b)&&-1!==["string","number","boolean"].indexOf(f(a))||"string"===typeof b&&"string"===typeof a?-1!==b.indexOf(a):!1}function u(a){return!!Array.isArray(a)}
function v(a){return a?d(a)?0===a:Object.prototype.hasOwnProperty.call(a,"length")?0===a.length:"object"===f(a)?0===Object.keys(a).length:!0:!0}function w(a){return"number"===typeof a}function x(a){return"string"===typeof a}function y(a){return!!a}function z(a,b){return a.length===b}function A(a,b){return d(a)&&d(b)&&Number(a)<Number(b)}function B(a,b){return d(a)&&d(b)&&Number(a)<=Number(b)}function C(a,b){return b instanceof RegExp?b.test(a):"string"===typeof b?(new RegExp(b)).test(a):!1}function D(a,
b){return d(a)&&d(b)&&Number(a)===Number(b)}function K(a,b){try{for(var c=arguments.length,e=Array(2<c?c-2:0),d=2;d<c;d++)e[d-2]=arguments[d];return!0===a.apply(void 0,[b].concat(e))}catch(O){return!1}}function E(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=l(l({},F),a);if("function"===typeof L.Proxy)return function(){var a=[],c=new Proxy(b,{get:function(b,e){if("test"===e)return G(a);if(H(b,e))return function(){for(var b=arguments.length,d=Array(b),f=0;f<b;f++)d[f]=arguments[f];
a.push({name:e,args:d});return c}}});return c};var c=Object.keys(b);return function(){var a=[];return c.reduce(function(c,e){return k(c,l({},H(b,e)&&g({},e,function(){for(var b=arguments.length,d=Array(b),f=0;f<b;f++)d[f]=arguments[f];a.push({name:e,args:d});return c})))},{test:G(a)})}}var H=function(a,b){(a=Object.prototype.hasOwnProperty.call(a,b)&&"function"===typeof a[b])||J('Rule "'.concat(b,'" was not found in rules object. Make sure you typed it correctly.'));return a},L=Function("return this")();
p.negativeForm="notEquals";d.negativeForm="isNotNumeric";q.alias="gt";r.alias="gte";t.negativeForm="notInside";u.negativeForm="isNotArray";var M=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,N=function(a){if(!a||254<a.length||!M.test(a))return!1;a=a.split("@");return 64<a[0].length||a[1].split(".").some(function(a){return 63<a.length})?!1:!0},h=function(a){return N(a)};h.negativeForm="isNotEmail";v.negativeForm="isNotEmpty";
w.negativeForm="isNotNumber";x.negativeForm="isNotString";y.negativeForm="isFalsy";z.negativeForm="lengthNotEquals";A.alias="lt";B.alias="lte";C.negativeForm="notMatches";D.negativeForm="numberNotEquals";var F=function(a){var b=function(b){var c=a[b].negativeForm,d=a[b].alias;c&&(a[c]=function(){return!a[b].apply(a,arguments)});d&&(a[d]=a[b])},c;for(c in a)b(c);return a}({equals:p,greaterThan:q,greaterThanOrEquals:r,inside:t,isArray:u,isEmail:h,isEmpty:v,isEven:function(a){return d(a)?0===a%2:!1},
isNumber:w,isNumeric:d,isOdd:function(a){return d(a)?0!==a%2:!1},isString:x,isTruthy:y,lengthEquals:z,lessThan:A,lessThanOrEquals:B,longerThan:function(a,b){return a.length>b},longerThanOrEquals:function(a,b){return a.length>=b},matches:C,numberEquals:D,shorterThan:function(a,b){return a.length<b},shorterThanOrEquals:function(a,b){return a.length<=b}}),G=function(a){return function(b){return a.every(function(a){return K.apply(void 0,[F[a.name],b].concat(I(a.args)))})}};h=new E;h.Ensure=E;return h})
