(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bf42"],{f0bd:function(e,t,n){"use strict";n.r(t),function(e){for(
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!==typeof window&&"undefined"!==typeof document,o=["Edge","Trident","Firefox"],r=0,i=0;i<o.length;i+=1)if(n&&navigator.userAgent.indexOf(o[i])>=0){r=1;break}function a(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function s(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},r))}}var f=n&&window.Promise,p=f?a:s;function l(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function u(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView,o=n.getComputedStyle(e,null);return t?o[t]:o}function d(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function c(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=u(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+o)?e:c(d(e))}var h=n&&!(!window.MSInputMethodContext||!document.documentMode),m=n&&/MSIE 10/.test(navigator.userAgent);function v(e){return 11===e?h:10===e?m:h||m}function g(e){if(!e)return document.documentElement;var t=v(10)?document.body:null,n=e.offsetParent||null;while(n===t&&e.nextElementSibling)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===u(n,"position")?g(n):n:e?e.ownerDocument.documentElement:document.documentElement}function b(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||g(e.firstElementChild)===e)}function w(e){return null!==e.parentNode?w(e.parentNode):e}function y(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var a=i.commonAncestorContainer;if(e!==a&&t!==a||o.contains(r))return b(a)?a:g(a);var s=w(e);return s.host?y(s.host,t):y(e,w(t).host)}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[n]}return e[n]}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=E(t,"top"),r=E(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function O(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function L(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],v(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function T(e){var t=e.body,n=e.documentElement,o=v(10)&&getComputedStyle(n);return{height:L("Height",t,n,o),width:L("Width",t,n,o)}}var C=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),M=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function F(e){return N({},e,{right:e.left+e.width,bottom:e.top+e.height})}function k(e){var t={};try{if(v(10)){t=e.getBoundingClientRect();var n=E(e,"top"),o=E(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(d){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?T(e.ownerDocument):{},a=i.width||e.clientWidth||r.right-r.left,s=i.height||e.clientHeight||r.bottom-r.top,f=e.offsetWidth-a,p=e.offsetHeight-s;if(f||p){var l=u(e);f-=O(l,"x"),p-=O(l,"y"),r.width-=f,r.height-=p}return F(r)}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=v(10),r="HTML"===t.nodeName,i=k(e),a=k(t),s=c(e),f=u(t),p=parseFloat(f.borderTopWidth,10),l=parseFloat(f.borderLeftWidth,10);n&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=F({top:i.top-a.top-p,left:i.left-a.left-l,width:i.width,height:i.height});if(d.marginTop=0,d.marginLeft=0,!o&&r){var h=parseFloat(f.marginTop,10),m=parseFloat(f.marginLeft,10);d.top-=p-h,d.bottom-=p-h,d.left-=l-m,d.right-=l-m,d.marginTop=h,d.marginLeft=m}return(o&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(d=x(d,t)),d}function W(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=S(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:E(n),s=t?0:E(n,"left"),f={top:a-o.top+o.marginTop,left:s-o.left+o.marginLeft,width:r,height:i};return F(f)}function H(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===u(e,"position"))return!0;var n=d(e);return!!n&&H(n)}function B(e){if(!e||!e.parentElement||v())return document.documentElement;var t=e.parentElement;while(t&&"none"===u(t,"transform"))t=t.parentElement;return t||document.documentElement}function P(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=r?B(e):y(e,t);if("viewport"===o)i=W(a,r);else{var s=void 0;"scrollParent"===o?(s=c(d(t)),"BODY"===s.nodeName&&(s=e.ownerDocument.documentElement)):s="window"===o?e.ownerDocument.documentElement:o;var f=S(s,a,r);if("HTML"!==s.nodeName||H(a))i=f;else{var p=T(e.ownerDocument),l=p.height,u=p.width;i.top+=f.top-f.marginTop,i.bottom=l+f.top,i.left+=f.left-f.marginLeft,i.right=u+f.left}}n=n||0;var h="number"===typeof n;return i.left+=h?n:n.left||0,i.top+=h?n:n.top||0,i.right-=h?n:n.right||0,i.bottom-=h?n:n.bottom||0,i}function A(e){var t=e.width,n=e.height;return t*n}function I(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=P(n,o,i,r),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},f=Object.keys(s).map(function(e){return N({key:e},s[e],{area:A(s[e])})}).sort(function(e,t){return t.area-e.area}),p=f.filter(function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight}),l=p.length>0?p[0].key:f[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function j(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=o?B(t):y(t,n);return S(n,r,o)}function R(e){var t=e.ownerDocument.defaultView,n=t.getComputedStyle(e),o=parseFloat(n.marginTop||0)+parseFloat(n.marginBottom||0),r=parseFloat(n.marginLeft||0)+parseFloat(n.marginRight||0),i={width:e.offsetWidth+r,height:e.offsetHeight+o};return i}function U(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function Y(e,t,n){n=n.split("-")[0];var o=R(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",f=i?"height":"width",p=i?"width":"height";return r[a]=t[a]+t[f]/2-o[f]/2,r[s]=n===s?t[s]-o[p]:t[U(s)],r}function V(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function q(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=V(e,function(e){return e[t]===n});return e.indexOf(o)}function K(e,t,n){var o=void 0===n?e:e.slice(0,q(e,"name",n));return o.forEach(function(e){e["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e["function"]||e.fn;e.enabled&&l(n)&&(t.offsets.popper=F(t.offsets.popper),t.offsets.reference=F(t.offsets.reference),t=n(t,e))}),t}function z(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=j(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=I(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=Y(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=K(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function G(e,t){return e.some(function(e){var n=e.name,o=e.enabled;return o&&n===t})}function J(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if("undefined"!==typeof document.body.style[i])return i}return null}function _(){return this.state.isDestroyed=!0,G(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[J("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function X(e){var t=e.ownerDocument;return t?t.defaultView:window}function Q(e,t,n,o){var r="BODY"===e.nodeName,i=r?e.ownerDocument.defaultView:e;i.addEventListener(t,n,{passive:!0}),r||Q(c(i.parentNode),t,n,o),o.push(i)}function Z(e,t,n,o){n.updateBound=o,X(e).addEventListener("resize",n.updateBound,{passive:!0});var r=c(e);return Q(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function $(){this.state.eventsEnabled||(this.state=Z(this.reference,this.options,this.state,this.scheduleUpdate))}function ee(e,t){return X(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function te(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=ee(this.reference,this.state))}function ne(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function oe(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&ne(t[n])&&(o="px"),e.style[n]=t[n]+o})}function re(e,t){Object.keys(t).forEach(function(n){var o=t[n];!1!==o?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function ie(e){return oe(e.instance.popper,e.styles),re(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&oe(e.arrowElement,e.arrowStyles),e}function ae(e,t,n,o,r){var i=j(r,t,e,n.positionFixed),a=I(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),oe(t,{position:n.positionFixed?"fixed":"absolute"}),n}function se(e,t){var n=e.offsets,o=n.popper,r=n.reference,i=Math.round,a=Math.floor,s=function(e){return e},f=i(r.width),p=i(o.width),l=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),d=f%2===p%2,c=f%2===1&&p%2===1,h=t?l||u||d?i:a:s,m=t?i:s;return{left:h(c&&!u&&t?o.left-1:o.left),top:m(o.top),bottom:m(o.bottom),right:h(o.right)}}var fe=n&&/Firefox/i.test(navigator.userAgent);function pe(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=V(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=g(e.instance.popper),f=k(s),p={position:r.position},l=se(e,window.devicePixelRatio<2||!fe),u="bottom"===n?"top":"bottom",d="right"===o?"left":"right",c=J("transform"),h=void 0,m=void 0;if(m="bottom"===u?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-f.height+l.bottom:l.top,h="right"===d?"HTML"===s.nodeName?-s.clientWidth+l.right:-f.width+l.right:l.left,a&&c)p[c]="translate3d("+h+"px, "+m+"px, 0)",p[u]=0,p[d]=0,p.willChange="transform";else{var v="bottom"===u?-1:1,b="right"===d?-1:1;p[u]=m*v,p[d]=h*b,p.willChange=u+", "+d}var w={"x-placement":e.placement};return e.attributes=N({},w,e.attributes),e.styles=N({},p,e.styles),e.arrowStyles=N({},e.offsets.arrow,e.arrowStyles),e}function le(e,t,n){var o=V(e,function(e){var n=e.name;return n===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function ue(e,t){var n;if(!le(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"===typeof o){if(o=e.instance.popper.querySelector(o),!o)return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,a=i.popper,s=i.reference,f=-1!==["left","right"].indexOf(r),p=f?"height":"width",l=f?"Top":"Left",d=l.toLowerCase(),c=f?"left":"top",h=f?"bottom":"right",m=R(o)[p];s[h]-m<a[d]&&(e.offsets.popper[d]-=a[d]-(s[h]-m)),s[d]+m>a[h]&&(e.offsets.popper[d]+=s[d]+m-a[h]),e.offsets.popper=F(e.offsets.popper);var v=s[d]+s[p]/2-m/2,g=u(e.instance.popper),b=parseFloat(g["margin"+l],10),w=parseFloat(g["border"+l+"Width"],10),y=v-e.offsets.popper[d]-b-w;return y=Math.max(Math.min(a[p]-m,y),0),e.arrowElement=o,e.offsets.arrow=(n={},M(n,d,Math.round(y)),M(n,c,""),n),e}function de(e){return"end"===e?"start":"start"===e?"end":e}var ce=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],he=ce.slice(3);function me(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=he.indexOf(e),o=he.slice(n+1).concat(he.slice(0,n));return t?o.reverse():o}var ve={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function ge(e,t){if(G(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=P(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=U(o),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case ve.FLIP:a=[o,r];break;case ve.CLOCKWISE:a=me(o);break;case ve.COUNTERCLOCKWISE:a=me(o,!0);break;default:a=t.behavior}return a.forEach(function(s,f){if(o!==s||a.length===f+1)return e;o=e.placement.split("-")[0],r=U(o);var p=e.offsets.popper,l=e.offsets.reference,u=Math.floor,d="left"===o&&u(p.right)>u(l.left)||"right"===o&&u(p.left)<u(l.right)||"top"===o&&u(p.bottom)>u(l.top)||"bottom"===o&&u(p.top)<u(l.bottom),c=u(p.left)<u(n.left),h=u(p.right)>u(n.right),m=u(p.top)<u(n.top),v=u(p.bottom)>u(n.bottom),g="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v),y=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&c||!b&&"start"===i&&v||!b&&"end"===i&&m),E=w||y;(d||g||E)&&(e.flipped=!0,(d||g)&&(o=a[f+1]),E&&(i=de(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=N({},e.offsets.popper,Y(e.instance.popper,e.offsets.reference,e.placement)),e=K(e.instance.modifiers,e,"flip"))}),e}function be(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(r),s=a?"right":"bottom",f=a?"left":"top",p=a?"width":"height";return n[s]<i(o[f])&&(e.offsets.popper[f]=i(o[f])-n[p]),n[f]>i(o[s])&&(e.offsets.popper[f]=i(o[s])),e}function we(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],a=r[2];if(!i)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=o}var f=F(s);return f[t]/100*i}if("vh"===a||"vw"===a){var p=void 0;return p="vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0),p/100*i}return i}function ye(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(V(a,function(e){return-1!==e.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,p=-1!==s?[a.slice(0,s).concat([a[s].split(f)[0]]),[a[s].split(f)[1]].concat(a.slice(s+1))]:[a];return p=p.map(function(e,o){var r=(1===o?!i:i)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return we(e,r,t,n)})}),p.forEach(function(e,t){e.forEach(function(n,o){ne(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}function Ee(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,a=r.reference,s=o.split("-")[0],f=void 0;return f=ne(+n)?[+n,0]:ye(n,i,a,s),"left"===s?(i.top+=f[0],i.left-=f[1]):"right"===s?(i.top+=f[0],i.left+=f[1]):"top"===s?(i.left+=f[0],i.top-=f[1]):"bottom"===s&&(i.left+=f[0],i.top+=f[1]),e.popper=i,e}function xe(e,t){var n=t.boundariesElement||g(e.instance.popper);e.instance.reference===n&&(n=g(n));var o=J("transform"),r=e.instance.popper.style,i=r.top,a=r.left,s=r[o];r.top="",r.left="",r[o]="";var f=P(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=i,r.left=a,r[o]=s,t.boundaries=f;var p=t.priority,l=e.offsets.popper,u={primary:function(e){var n=l[e];return l[e]<f[e]&&!t.escapeWithReference&&(n=Math.max(l[e],f[e])),M({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=l[n];return l[e]>f[e]&&!t.escapeWithReference&&(o=Math.min(l[n],f[e]-("right"===e?l.width:l.height))),M({},n,o)}};return p.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=N({},l,u[t](e))}),e.offsets.popper=l,e}function Oe(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,a=r.popper,s=-1!==["bottom","top"].indexOf(n),f=s?"left":"top",p=s?"width":"height",l={start:M({},f,i[f]),end:M({},f,i[f]+i[p]-a[p])};e.offsets.popper=N({},a,l[o])}return e}function Le(e){if(!le(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=V(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function Te(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=i[n]-(s?r[a?"width":"height"]:0),e.placement=U(t),e.offsets.popper=F(r),e}var Ce={shift:{order:100,enabled:!0,fn:Oe},offset:{order:200,enabled:!0,fn:Ee,offset:0},preventOverflow:{order:300,enabled:!0,fn:xe,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:be},arrow:{order:500,enabled:!0,fn:ue,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:ge,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:Te},hide:{order:800,enabled:!0,fn:Le},computeStyle:{order:850,enabled:!0,fn:pe,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:ie,onLoad:ae,gpuAcceleration:void 0}},De={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Ce},Me=function(){function e(t,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};C(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=p(this.update.bind(this)),this.options=N({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(N({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){o.options.modifiers[t]=N({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return N({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&l(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return D(e,[{key:"update",value:function(){return z.call(this)}},{key:"destroy",value:function(){return _.call(this)}},{key:"enableEventListeners",value:function(){return $.call(this)}},{key:"disableEventListeners",value:function(){return te.call(this)}}]),e}();Me.Utils=("undefined"!==typeof window?window:e).PopperUtils,Me.placements=ce,Me.Defaults=De,t["default"]=Me}.call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-2d22bf42.331cd271.js.map