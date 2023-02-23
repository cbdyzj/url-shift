!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).emotion={})}(this,(function(e){"use strict";var r=function(){function e(e){var r=this;this._insertTag=function(e){var t;t=0===r.tags.length?r.prepend?r.container.firstChild:r.before:r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(e,t),r.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var r=e.prototype;return r.hydrate=function(e){e.forEach(this._insertTag)},r.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(r);try{t.insertRule(e,t.cssRules.length)}catch(e){0}}else r.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),t="-ms-",n="-moz-",a="-webkit-",s="comm",c="rule",i="decl",o=Math.abs,u=String.fromCharCode;function l(e){return e.trim()}function f(e,r,t){return e.replace(r,t)}function d(e,r){return 0|e.charCodeAt(r)}function h(e,r,t){return e.slice(r,t)}function p(e){return e.length}function v(e){return e.length}function y(e,r){return r.push(e),e}var g=1,m=1,b=0,w=0,k=0,x="";function $(e,r,t,n,a,s,c){return{value:e,root:r,parent:t,type:n,props:a,children:s,line:g,column:m,length:c,return:""}}function A(e,r,t){return $(e,r.root,r.parent,t,r.props,r.children,0)}function C(){return k=w<b?d(x,w++):0,m++,10===k&&(m=1,g++),k}function S(){return d(x,w)}function _(){return w}function j(e,r){return h(x,e,r)}function O(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(e){return g=m=1,b=p(x=e),w=0,[]}function R(e){return x="",e}function G(e){return l(j(w-1,N(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(k=S())&&k<33;)C();return O(e)>2||O(k)>3?"":" "}function N(e){for(;C();)switch(k){case e:return w;case 34:case 39:return N(34===e||39===e?e:k);case 40:41===e&&N(e);break;case 92:C()}return w}function T(e,r){for(;C()&&e+k!==57&&(e+k!==84||47!==S()););return"/*"+j(r,w-1)+"*"+u(47===e?e:C())}function I(e){for(;!O(S());)C();return j(e,w)}function M(e){return R(W("",null,null,null,[""],e=E(e),0,[0],e))}function W(e,r,t,n,a,s,c,i,o){for(var l=0,d=0,h=c,v=0,g=0,m=0,b=1,w=1,k=1,x=0,$="",A=a,j=s,O=n,E=$;w;)switch(m=x,x=C()){case 34:case 39:case 91:case 40:E+=G(x);break;case 9:case 10:case 13:case 32:E+=z(m);break;case 47:switch(S()){case 42:case 47:y(q(T(C(),_()),r,t),o);break;default:E+="/"}break;case 123*b:i[l++]=p(E)*k;case 125*b:case 59:case 0:switch(x){case 0:case 125:w=0;case 59+d:g>0&&y(g>32?D(E+";",n,t,h-1):D(f(E," ","")+";",n,t,h-2),o);break;case 59:E+=";";default:if(y(O=P(E,r,t,l,d,a,i,$,A=[],j=[],h),s),123===x)if(0===d)W(E,r,O,O,A,s,h,i,j);else switch(v){case 100:case 109:case 115:W(e,O,O,n&&y(P(e,O,O,0,0,a,i,$,a,A=[],h),j),a,j,h,i,n?A:j);break;default:W(E,O,O,O,[""],j,h,i,j)}}l=d=g=0,b=k=1,$=E="",h=c;break;case 58:h=1+p(E),g=m;default:switch(E+=u(x),x*b){case 38:k=d>0?1:(E+="\f",-1);break;case 44:i[l++]=(p(E)-1)*k,k=1;break;case 64:45===S()&&(E+=G(C())),v=S(),d=p($=E+=I(_())),x++;break;case 45:45===m&&2==p(E)&&(b=0)}}return s}function P(e,r,t,n,a,s,i,u,d,p,y){for(var g=a-1,m=0===a?s:[""],b=v(m),w=0,k=0,x=0;w<n;++w)for(var A=0,C=h(e,g+1,g=o(k=i[w])),S=e;A<b;++A)(S=l(k>0?m[A]+" "+C:f(C,/&\f/g,m[A])))&&(d[x++]=S);return $(e,r,t,0===a?c:u,d,p,y)}function q(e,r,t){return $(e,r,t,s,u(k),h(e,2,-2),0)}function D(e,r,t,n){return $(e,r,t,i,h(e,0,n),h(e,n+1,-1),n)}function F(e,r){switch(function(e,r){return(((r<<2^d(e,0))<<2^d(e,1))<<2^d(e,2))<<2^d(e,3)}(e,r)){case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return a+e+n+e+t+e+e;case 6828:case 4268:return a+e+t+e+e;case 6165:return a+e+t+"flex-"+e+e;case 5187:return a+e+f(e,/(\w+).+(:[^]+)/,a+"box-$1$2"+t+"flex-$1$2")+e;case 5443:return a+e+t+"flex-item-"+f(e,/flex-|-self/,"")+e;case 4675:return a+e+t+"flex-line-pack"+f(e,/align-content|flex-|-self/,"")+e;case 5548:return a+e+t+f(e,"shrink","negative")+e;case 5292:return a+e+t+f(e,"basis","preferred-size")+e;case 6060:return a+"box-"+f(e,"-grow","")+a+e+t+f(e,"grow","positive")+e;case 4554:return a+f(e,/([^-])(transform)/g,"$1"+a+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,a+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+t+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+e+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,a+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(e)-1-r>6)switch(d(e,r+1)){case 109:return f(e,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3$1"+n+"$2-$3")+e;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3$1"+n+"$3")+e;case 115:return F(f(e,"stretch","fill-available"),r)+e}break;case 4949:if(115!==d(e,r+1))break;case 6444:switch(d(e,p(e)-3-(~function(e,r){return e.indexOf(r)}(e,"!important")&&10))){case 107:case 111:return f(e,e,a+e)+e;case 101:return f(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(45===d(e,14)?"inline-":"")+"box$3$1"+a+"$2$3$1"+t+"$2box$3")+e}break;case 5936:switch(d(e,r+11)){case 114:return a+e+t+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return a+e+t+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return a+e+t+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return a+e+t+e+e}return e}function L(e,r){for(var t="",n=v(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function B(e,r,t,n){switch(e.type){case"@import":case i:return e.return=e.return||e.value;case s:return"";case c:e.value=e.props.join(",")}return p(t=L(e.children,n))?e.return=e.value+"{"+t+"}":""}function H(e){return function(r){r.root||(r=r.return)&&e(r)}}function Z(e){var r=Object.create(null);return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}var J=function(e,r){return R(function(e,r){var t=-1,n=44;do{switch(O(n)){case 0:38===n&&12===S()&&(r[t]=1),e[t]+=I(w-1);break;case 2:e[t]+=G(n);break;case 4:if(44===n){e[++t]=58===S()?"&\f":"",r[t]=e[t].length;break}default:e[t]+=u(n)}}while(n=C());return e}(E(e),r))},K=new WeakMap,Q=function(e){if("rule"===e.type&&e.parent&&e.length){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===r.charCodeAt(0)||K.get(t))&&!n){K.set(e,!0);for(var a=[],s=J(r,a),c=t.props,i=0,o=0;i<s.length;i++)for(var u=0;u<c.length;u++,o++)e.props[o]=a[i]?s[i].replace(/&\f/g,c[u]):c[u]+" "+s[i]}}},U=function(e){if("decl"===e.type){var r=e.value;108===r.charCodeAt(0)&&98===r.charCodeAt(2)&&(e.return="",e.value="")}},V=[function(e,r,n,s){if(!e.return)switch(e.type){case i:e.return=F(e.value,e.length);break;case"@keyframes":return L([A(f(e.value,"@","@"+a),e,"")],s);case c:if(e.length)return function(e,r){return e.map(r).join("")}(e.props,(function(r){switch(function(e,r){return(e=r.exec(e))?e[0]:e}(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return L([A(f(r,/:(read-\w+)/,":-moz-$1"),e,"")],s);case"::placeholder":return L([A(f(r,/:(plac\w+)/,":"+a+"input-$1"),e,""),A(f(r,/:(plac\w+)/,":-moz-$1"),e,""),A(f(r,/:(plac\w+)/,t+"input-$1"),e,"")],s)}return""}))}}],X=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){document.head.appendChild(e),e.setAttribute("data-s","")}))}var a=e.stylisPlugins||V;var s,c,i={},o=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"),(function(e){var r=e.getAttribute("data-emotion").split(" ");if(r[0]===t){for(var n=1;n<r.length;n++)i[r[n]]=!0;o.push(e)}}));var u=[Q,U];var l,f=[B,H((function(e){l.insert(e)}))],d=function(e){var r=v(e);return function(t,n,a,s){for(var c="",i=0;i<r;i++)c+=e[i](t,n,a,s)||"";return c}}(u.concat(a,f));c=function(e,r,t,n){l=t,L(M(e?e+"{"+r.styles+"}":r.styles),d),n&&(h.inserted[r.name]=!0)};var h={key:t,sheet:new r({key:t,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:i,registered:{},insert:c};return h.sheet.hydrate(o),h};var Y={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ee=/[A-Z]|^ms/g,re=/_EMO_([^_]+?)_([^]*?)_EMO_/g,te=function(e){return 45===e.charCodeAt(1)},ne=function(e){return null!=e&&"boolean"!=typeof e},ae=Z((function(e){return te(e)?e:e.replace(ee,"-$&").toLowerCase()})),se=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(re,(function(e,r,t){return ie={name:r,styles:t,next:ie},r}))}return 1===Y[e]||te(e)||"number"!=typeof r||0===r?r:r+"px"};function ce(e,r,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return ie={name:t.name,styles:t.styles,next:ie},t.name;if(void 0!==t.styles){var n=t.next;if(void 0!==n)for(;void 0!==n;)ie={name:n.name,styles:n.styles,next:ie},n=n.next;var a=t.styles+";";return a}return function(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=ce(e,r,t[a])+";";else for(var s in t){var c=t[s];if("object"!=typeof c)null!=r&&void 0!==r[c]?n+=s+"{"+r[c]+"}":ne(c)&&(n+=ae(s)+":"+se(s,c)+";");else if(!Array.isArray(c)||"string"!=typeof c[0]||null!=r&&void 0!==r[c[0]]){var i=ce(e,r,c);switch(s){case"animation":case"animationName":n+=ae(s)+":"+i+";";break;default:n+=s+"{"+i+"}"}}else for(var o=0;o<c.length;o++)ne(c[o])&&(n+=ae(s)+":"+se(s,c[o])+";")}return n}(e,r,t);case"function":if(void 0!==e){var s=ie,c=t(e);return ie=s,ce(e,r,c)}break;case"string":}if(null==r)return t;var i=r[t];return void 0!==i?i:t}var ie,oe=/label:\s*([^\s;\n{]+)\s*;/g;var ue=function(e,r,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";ie=void 0;var s=e[0];null==s||void 0===s.raw?(n=!1,a+=ce(t,r,s)):a+=s[0];for(var c=1;c<e.length;c++)a+=ce(t,r,e[c]),n&&(a+=s[c]);oe.lastIndex=0;for(var i,o="";null!==(i=oe.exec(a));)o+="-"+i[1];var u=function(e){for(var r,t=0,n=0,a=e.length;a>=4;++n,a-=4)r=1540483477*(65535&(r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(r>>>16)<<16),t=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(a){case 3:t^=(255&e.charCodeAt(n+2))<<16;case 2:t^=(255&e.charCodeAt(n+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(n)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)}(a)+o;return{name:u,styles:a,next:ie}};function le(e,r,t){var n="";return t.split(" ").forEach((function(t){void 0!==e[t]?r.push(e[t]+";"):n+=t+" "})),n}var fe=function(e,r,t){var n=e.key+"-"+r.name;if(!1===t&&void 0===e.registered[n]&&(e.registered[n]=r.styles),void 0===e.inserted[r.name]){var a=r;do{e.insert(r===a?"."+n:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}};function de(e,r){if(void 0===e.inserted[r.name])return e.insert("",r,e.sheet,!0)}function he(e,r,t){var n=[],a=le(e,n,t);return n.length<2?t:a+r(n)}var pe=function e(r){for(var t="",n=0;n<r.length;n++){var a=r[n];if(null!=a){var s=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))s=e(a);else for(var c in s="",a)a[c]&&c&&(s&&(s+=" "),s+=c);break;default:s=a}s&&(t&&(t+=" "),t+=s)}}return t},ve=function(e){var r=X(e);r.sheet.speedy=function(e){this.isSpeedy=e},r.compat=!0;var t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=ue(t,r.registered,void 0);return fe(r,a,!1),r.key+"-"+a.name};return{css:t,cx:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return he(r.registered,t,pe(n))},injectGlobal:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=ue(t,r.registered);de(r,a)},keyframes:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=ue(t,r.registered),s="animation-"+a.name;return de(r,{name:a.name,styles:"@keyframes "+s+"{"+a.styles+"}"}),s},hydrate:function(e){e.forEach((function(e){r.inserted[e]=!0}))},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:le.bind(null,r.registered),merge:he.bind(null,r.registered,t)}}({key:"css"}),ye=ve.flush,ge=ve.hydrate,me=ve.cx,be=ve.merge,we=ve.getRegisteredStyles,ke=ve.injectGlobal,xe=ve.keyframes,$e=ve.css,Ae=ve.sheet,Ce=ve.cache;e.cache=Ce,e.css=$e,e.cx=me,e.flush=ye,e.getRegisteredStyles=we,e.hydrate=ge,e.injectGlobal=ke,e.keyframes=xe,e.merge=be,e.sheet=Ae,Object.defineProperty(e,"__esModule",{value:!0})}));