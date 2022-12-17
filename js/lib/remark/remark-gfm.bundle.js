/* esm.sh - esbuild bundle(remark-gfm@3.0.1) es2022 production */
function _(t,n,e,o){let u=t.length,r=0,i;if(n<0?n=-n>u?0:u+n:n=n>u?u:n,e=e>0?e:0,o.length<1e4)i=Array.from(o),i.unshift(n,e),[].splice.apply(t,i);else for(e&&[].splice.apply(t,[n,e]);r<o.length;)i=o.slice(r,r+1e4),i.unshift(n,0),[].splice.apply(t,i),r+=1e4,n+=1e4}var Tt={}.hasOwnProperty;function It(t){let n={},e=-1;for(;++e<t.length;)ye(n,t[e]);return n}function ye(t,n){let e;for(e in n){let u=(Tt.call(t,e)?t[e]:void 0)||(t[e]={}),r=n[e],i;for(i in r){Tt.call(u,i)||(u[i]=[]);let a=r[i];Ae(u[i],Array.isArray(a)?a:a?[a]:[])}}}function Ae(t,n){let e=-1,o=[];for(;++e<n.length;)(n[e].add==="after"?t:o).push(n[e]);_(t,0,0,o)}var zt=/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;var tt=z(/[A-Za-z]/),Bt=z(/\d/),jn=z(/[\dA-Fa-f]/),et=z(/[\dA-Za-z]/),Wn=z(/[!-/:-@[-`{-~]/),Nn=z(/[#-'*+\--9=?A-Z^-~]/);function nt(t){return t!==null&&(t<32||t===127)}function A(t){return t!==null&&(t<0||t===32)}function C(t){return t!==null&&t<-2}function L(t){return t===-2||t===-1||t===32}var R=z(/\s/),P=z(zt);function z(t){return n;function n(e){return e!==null&&t.test(String.fromCharCode(e))}}var De={tokenize:Te,partial:!0},Rt={tokenize:Ie,partial:!0},Pt={tokenize:ze,partial:!0},j={tokenize:Me,partial:!0},Ht={tokenize:Be,partial:!0},Ot={tokenize:Le,previous:Wt},_t={tokenize:Se,previous:ot},I={tokenize:Ee,previous:Nt},T={},rt={text:T},H=48;for(;H<123;)T[H]=I,H++,H===58?H=65:H===91&&(H=97);T[43]=I;T[45]=I;T[46]=I;T[95]=I;T[72]=[I,_t];T[104]=[I,_t];T[87]=[I,Ot];T[119]=[I,Ot];function Ee(t,n,e){let o=this,u,r;return i;function i(h){return!Mt(h)||!Nt(o.previous)||lt(o.events)?e(h):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),a(h))}function a(h){return Mt(h)?(t.consume(h),a):h===64?(t.consume(h),l):e(h)}function l(h){return h===46?t.check(j,g,p)(h):h===45||h===95?t.check(j,e,f)(h):et(h)?(!r&&Bt(h)&&(r=!0),t.consume(h),l):g(h)}function p(h){return t.consume(h),u=!0,r=void 0,l}function f(h){return t.consume(h),k}function k(h){return h===46?t.check(j,e,p)(h):l(h)}function g(h){return u&&!r?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),n(h)):e(h)}}function Le(t,n,e){let o=this;return u;function u(i){return i!==87&&i!==119||!Wt(o.previous)||lt(o.events)?e(i):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(De,t.attempt(Rt,t.attempt(Pt,r),e),e)(i))}function r(i){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),n(i)}}function Se(t,n,e){let o=this;return u;function u(c){return c!==72&&c!==104||!ot(o.previous)||lt(o.events)?e(c):(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),t.consume(c),r)}function r(c){return c===84||c===116?(t.consume(c),i):e(c)}function i(c){return c===84||c===116?(t.consume(c),a):e(c)}function a(c){return c===80||c===112?(t.consume(c),l):e(c)}function l(c){return c===83||c===115?(t.consume(c),p):p(c)}function p(c){return c===58?(t.consume(c),f):e(c)}function f(c){return c===47?(t.consume(c),k):e(c)}function k(c){return c===47?(t.consume(c),g):e(c)}function g(c){return c===null||nt(c)||R(c)||P(c)?e(c):t.attempt(Rt,t.attempt(Pt,h),e)(c)}function h(c){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),n(c)}}function Te(t,n,e){return o;function o(l){return t.consume(l),u}function u(l){return l===87||l===119?(t.consume(l),r):e(l)}function r(l){return l===87||l===119?(t.consume(l),i):e(l)}function i(l){return l===46?(t.consume(l),a):e(l)}function a(l){return l===null||C(l)?e(l):n(l)}}function Ie(t,n,e){let o,u;return r;function r(l){return l===38?t.check(Ht,a,i)(l):l===46||l===95?t.check(j,a,i)(l):l===null||nt(l)||R(l)||l!==45&&P(l)?a(l):(t.consume(l),r)}function i(l){return l===46?(u=o,o=void 0,t.consume(l),r):(l===95&&(o=!0),t.consume(l),r)}function a(l){return!u&&!o?n(l):e(l)}}function ze(t,n){let e=0;return o;function o(i){return i===38?t.check(Ht,n,u)(i):(i===40&&e++,i===41?t.check(j,r,u)(i):it(i)?n(i):jt(i)?t.check(j,n,u)(i):(t.consume(i),o))}function u(i){return t.consume(i),o}function r(i){return e--,e<0?n(i):u(i)}}function Be(t,n,e){return o;function o(i){return t.consume(i),u}function u(i){return tt(i)?(t.consume(i),u):i===59?(t.consume(i),r):e(i)}function r(i){return it(i)?n(i):e(i)}}function Me(t,n,e){return o;function o(r){return t.consume(r),u}function u(r){return jt(r)?(t.consume(r),u):it(r)?n(r):e(r)}}function jt(t){return t===33||t===34||t===39||t===41||t===42||t===44||t===46||t===58||t===59||t===60||t===63||t===95||t===126}function it(t){return t===null||t===60||A(t)}function Mt(t){return t===43||t===45||t===46||t===95||et(t)}function Wt(t){return t===null||t===40||t===42||t===95||t===126||A(t)}function ot(t){return t===null||!tt(t)}function Nt(t){return t!==47&&ot(t)}function lt(t){let n=t.length,e=!1;for(;n--;){let o=t[n][1];if((o.type==="labelLink"||o.type==="labelImage")&&!o._balanced){e=!0;break}if(o._gfmAutolinkLiteralWalkedInto){e=!1;break}}return t.length>0&&!e&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),e}function ut(t){if(t===null||A(t)||R(t))return 1;if(P(t))return 2}function Ut(t,n,e){let o=[],u=-1;for(;++u<t.length;){let r=t[u].resolveAll;r&&!o.includes(r)&&(n=r(n,e),o.push(r))}return n}function S(t,n,e,o){let u=o?o-1:Number.POSITIVE_INFINITY,r=0;return i;function i(l){return L(l)?(t.enter(e),a(l)):n(l)}function a(l){return L(l)&&r++<u?(t.consume(l),a):(t.exit(e),n(l))}}var at={tokenize:Re,partial:!0};function Re(t,n,e){return S(t,o,"linePrefix");function o(u){return u===null||C(u)?n(u):e(u)}}var vt=document.createElement("i");function Vt(t){let n="&"+t+";";vt.innerHTML=n;let e=vt.textContent;return e.charCodeAt(e.length-1)===59&&t!=="semi"||e===n?!1:e}function O(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var Pe={tokenize:Ue,partial:!0};function st(){return{document:{[91]:{tokenize:je,continuation:{tokenize:We},exit:Ne}},text:{[91]:{tokenize:_e},[93]:{add:"after",tokenize:He,resolveTo:Oe}}}}function He(t,n,e){let o=this,u=o.events.length,r=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]),i;for(;u--;){let l=o.events[u][1];if(l.type==="labelImage"){i=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!i||!i._balanced)return e(l);let p=O(o.sliceSerialize({start:i.end,end:o.now()}));return p.charCodeAt(0)!==94||!r.includes(p.slice(1))?e(l):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(l),t.exit("gfmFootnoteCallLabelMarker"),n(l))}}function Oe(t,n){let e=t.length,o;for(;e--;)if(t[e][1].type==="labelImage"&&t[e][0]==="enter"){o=t[e][1];break}t[e+1][1].type="data",t[e+3][1].type="gfmFootnoteCallLabelMarker";let u={type:"gfmFootnoteCall",start:Object.assign({},t[e+3][1].start),end:Object.assign({},t[t.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},t[e+3][1].end),end:Object.assign({},t[e+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;let i={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},t[t.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},i.start),end:Object.assign({},i.end)},l=[t[e+1],t[e+2],["enter",u,n],t[e+3],t[e+4],["enter",r,n],["exit",r,n],["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n],t[t.length-2],t[t.length-1],["exit",u,n]];return t.splice(e,t.length-e+1,...l),t}function _e(t,n,e){let o=this,u=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]),r=0,i;return a;function a(g){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),l}function l(g){return g!==94?e(g):(t.enter("gfmFootnoteCallMarker"),t.consume(g),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",p)}function p(g){let h;return g===null||g===91||r++>999?e(g):g===93?i?(t.exit("chunkString"),h=t.exit("gfmFootnoteCallString"),u.includes(O(o.sliceSerialize(h)))?k(g):e(g)):e(g):(t.consume(g),A(g)||(i=!0),g===92?f:p)}function f(g){return g===91||g===92||g===93?(t.consume(g),r++,p):p(g)}function k(g){return t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),n}}function je(t,n,e){let o=this,u=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]),r,i=0,a;return l;function l(m){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(m){return m===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),f):e(m)}function f(m){let x;return m===null||m===91||i>999?e(m):m===93?a?(x=t.exit("gfmFootnoteDefinitionLabelString"),r=O(o.sliceSerialize(x)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),h):e(m):C(m)?(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),i++,f):(t.enter("chunkString").contentType="string",k(m))}function k(m){return m===null||C(m)||m===91||m===93||i>999?(t.exit("chunkString"),f(m)):(A(m)||(a=!0),i++,t.consume(m),m===92?g:k)}function g(m){return m===91||m===92||m===93?(t.consume(m),i++,k):k(m)}function h(m){return m===58?(t.enter("definitionMarker"),t.consume(m),t.exit("definitionMarker"),S(t,c,"gfmFootnoteDefinitionWhitespace")):e(m)}function c(m){return u.includes(r)||u.push(r),n(m)}}function We(t,n,e){return t.check(at,n,t.attempt(Pe,n,e))}function Ne(t){t.exit("gfmFootnoteDefinition")}function Ue(t,n,e){let o=this;return S(t,u,"gfmFootnoteDefinitionIndent",4+1);function u(r){let i=o.events[o.events.length-1];return i&&i[1].type==="gfmFootnoteDefinitionIndent"&&i[2].sliceSerialize(i[1],!0).length===4?n(r):e(r)}}function ft(t={}){let n=t.singleTilde,e={tokenize:u,resolveAll:o};return n==null&&(n=!0),{text:{[126]:e},insideSpan:{null:[e]},attentionMarkers:{null:[126]}};function o(r,i){let a=-1;for(;++a<r.length;)if(r[a][0]==="enter"&&r[a][1].type==="strikethroughSequenceTemporary"&&r[a][1]._close){let l=a;for(;l--;)if(r[l][0]==="exit"&&r[l][1].type==="strikethroughSequenceTemporary"&&r[l][1]._open&&r[a][1].end.offset-r[a][1].start.offset===r[l][1].end.offset-r[l][1].start.offset){r[a][1].type="strikethroughSequence",r[l][1].type="strikethroughSequence";let p={type:"strikethrough",start:Object.assign({},r[l][1].start),end:Object.assign({},r[a][1].end)},f={type:"strikethroughText",start:Object.assign({},r[l][1].end),end:Object.assign({},r[a][1].start)},k=[["enter",p,i],["enter",r[l][1],i],["exit",r[l][1],i],["enter",f,i]];_(k,k.length,0,Ut(i.parser.constructs.insideSpan.null,r.slice(l+1,a),i)),_(k,k.length,0,[["exit",f,i],["enter",r[a][1],i],["exit",r[a][1],i],["exit",p,i]]),_(r,l-1,a-l+3,k),a=l+k.length-2;break}}for(a=-1;++a<r.length;)r[a][1].type==="strikethroughSequenceTemporary"&&(r[a][1].type="data");return r}function u(r,i,a){let l=this.previous,p=this.events,f=0;return k;function k(h){return l===126&&p[p.length-1][1].type!=="characterEscape"?a(h):(r.enter("strikethroughSequenceTemporary"),g(h))}function g(h){let c=ut(l);if(h===126)return f>1?a(h):(r.consume(h),f++,g);if(f<2&&!n)return a(h);let m=r.exit("strikethroughSequenceTemporary"),x=ut(h);return m._open=!x||x===2&&Boolean(c),m._close=!c||c===2&&Boolean(x),i(h)}}}var ct={flow:{null:{tokenize:Ve,resolve:ve}}},qt={tokenize:qe,partial:!0};function ve(t,n){let e=-1,o,u,r,i,a,l,p;for(;++e<t.length;){let f=t[e][1];if(r&&(f.type==="temporaryTableCellContent"&&(i=i||e,a=e),(f.type==="tableCellDivider"||f.type==="tableRow")&&a)){let k={type:"tableContent",start:t[i][1].start,end:t[a][1].end},g={type:"chunkText",start:k.start,end:k.end,contentType:"text"};t.splice(i,a-i+1,["enter",k,n],["enter",g,n],["exit",g,n],["exit",k,n]),e-=a-i-3,i=void 0,a=void 0}if(t[e][0]==="exit"&&l!==void 0&&l+(p?0:1)<e&&(f.type==="tableCellDivider"||f.type==="tableRow"&&(l+3<e||t[l][1].type!=="whitespace"))){let k={type:u?"tableDelimiter":o?"tableHeader":"tableData",start:t[l][1].start,end:t[e][1].end};t.splice(e+(f.type==="tableCellDivider"?1:0),0,["exit",k,n]),t.splice(l,0,["enter",k,n]),e+=2,l=e+1,p=!0}f.type==="tableRow"&&(r=t[e][0]==="enter",r&&(l=e+1,p=!1)),f.type==="tableDelimiterRow"&&(u=t[e][0]==="enter",u&&(l=e+1,p=!1)),f.type==="tableHead"&&(o=t[e][0]==="enter")}return t}function Ve(t,n,e){let o=this,u=[],r=0,i,a;return l;function l(s){return t.enter("table")._align=u,t.enter("tableHead"),t.enter("tableRow"),s===124?p(s):(r++,t.enter("temporaryTableCellContent"),g(s))}function p(s){return t.enter("tableCellDivider"),t.consume(s),t.exit("tableCellDivider"),i=!0,f}function f(s){return s===null||C(s)?c(s):L(s)?(t.enter("whitespace"),t.consume(s),k):(i&&(i=void 0,r++),s===124?p(s):(t.enter("temporaryTableCellContent"),g(s)))}function k(s){return L(s)?(t.consume(s),k):(t.exit("whitespace"),f(s))}function g(s){return s===null||s===124||A(s)?(t.exit("temporaryTableCellContent"),f(s)):(t.consume(s),s===92?h:g)}function h(s){return s===92||s===124?(t.consume(s),g):g(s)}function c(s){if(s===null)return e(s);t.exit("tableRow"),t.exit("tableHead");let U=o.interrupt;return o.interrupt=!0,t.attempt({tokenize:X,partial:!0},function(B){return o.interrupt=U,t.enter("tableDelimiterRow"),m(B)},function(B){return o.interrupt=U,e(B)})(s)}function m(s){return s===null||C(s)?y(s):L(s)?(t.enter("whitespace"),t.consume(s),x):s===45?(t.enter("tableDelimiterFiller"),t.consume(s),a=!0,u.push("none"),b):s===58?(t.enter("tableDelimiterAlignment"),t.consume(s),t.exit("tableDelimiterAlignment"),u.push("left"),w):s===124?(t.enter("tableCellDivider"),t.consume(s),t.exit("tableCellDivider"),m):e(s)}function x(s){return L(s)?(t.consume(s),x):(t.exit("whitespace"),m(s))}function b(s){return s===45?(t.consume(s),b):(t.exit("tableDelimiterFiller"),s===58?(t.enter("tableDelimiterAlignment"),t.consume(s),t.exit("tableDelimiterAlignment"),u[u.length-1]=u[u.length-1]==="left"?"center":"right",F):m(s))}function w(s){return s===45?(t.enter("tableDelimiterFiller"),t.consume(s),a=!0,b):e(s)}function F(s){return s===null||C(s)?y(s):L(s)?(t.enter("whitespace"),t.consume(s),x):s===124?(t.enter("tableCellDivider"),t.consume(s),t.exit("tableCellDivider"),m):e(s)}function y(s){return t.exit("tableDelimiterRow"),!a||r!==u.length?e(s):s===null?d(s):t.check(qt,d,t.attempt({tokenize:X,partial:!0},S(t,Q,"linePrefix",4),d))(s)}function d(s){return t.exit("table"),n(s)}function Q(s){return t.enter("tableBody"),E(s)}function E(s){return t.enter("tableRow"),s===124?Lt(s):(t.enter("temporaryTableCellContent"),W(s))}function Lt(s){return t.enter("tableCellDivider"),t.consume(s),t.exit("tableCellDivider"),Y}function Y(s){return s===null||C(s)?Fe(s):L(s)?(t.enter("whitespace"),t.consume(s),St):s===124?Lt(s):(t.enter("temporaryTableCellContent"),W(s))}function St(s){return L(s)?(t.consume(s),St):(t.exit("whitespace"),Y(s))}function W(s){return s===null||s===124||A(s)?(t.exit("temporaryTableCellContent"),Y(s)):(t.consume(s),s===92?we:W)}function we(s){return s===92||s===124?(t.consume(s),W):W(s)}function Fe(s){return t.exit("tableRow"),s===null?K(s):t.check(qt,K,t.attempt({tokenize:X,partial:!0},S(t,E,"linePrefix",4),K))(s)}function K(s){return t.exit("tableBody"),d(s)}function X(s,U,B){return de;function de(M){return s.enter("lineEnding"),s.consume(M),s.exit("lineEnding"),S(s,Ce,"linePrefix")}function Ce(M){if(o.parser.lazy[o.now().line]||M===null||C(M))return B(M);let v=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&v&&v[1].type==="linePrefix"&&v[2].sliceSerialize(v[1],!0).length>=4?B(M):(o._gfmTableDynamicInterruptHack=!0,s.check(o.parser.constructs.flow,function(J){return o._gfmTableDynamicInterruptHack=!1,B(J)},function(J){return o._gfmTableDynamicInterruptHack=!1,U(J)})(M))}}}function qe(t,n,e){let o=0;return u;function u(i){return t.enter("check"),t.consume(i),r}function r(i){return i===-1||i===32?(t.consume(i),o++,o===4?n:r):i===null||A(i)?n(i):e(i)}}var $e={tokenize:Ge},mt={text:{[91]:$e}};function Ge(t,n,e){let o=this;return u;function u(a){return o.previous!==null||!o._gfmTasklistFirstContentOfListItem?e(a):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(a),t.exit("taskListCheckMarker"),r)}function r(a){return A(a)?(t.enter("taskListCheckValueUnchecked"),t.consume(a),t.exit("taskListCheckValueUnchecked"),i):a===88||a===120?(t.enter("taskListCheckValueChecked"),t.consume(a),t.exit("taskListCheckValueChecked"),i):e(a)}function i(a){return a===93?(t.enter("taskListCheckMarker"),t.consume(a),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),t.check({tokenize:Ze},n,e)):e(a)}}function Ze(t,n,e){let o=this;return S(t,u,"whitespace");function u(r){let i=o.events[o.events.length-1];return(i&&i[1].type==="whitespace"||C(r))&&r!==null?n(r):e(r)}}function $t(t){return It([rt,st(),ft(t),ct,mt])}function ht(t,n){let e=String(t);if(typeof n!="string")throw new TypeError("Expected character");let o=0,u=e.indexOf(n);for(;u!==-1;)o++,u=e.indexOf(n,u+n.length);return o}function pt(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var N=function(t){if(t==null)return Xe;if(typeof t=="string")return Ke(t);if(typeof t=="object")return Array.isArray(t)?Qe(t):Ye(t);if(typeof t=="function")return V(t);throw new Error("Expected function, string, or object as test")};function Qe(t){let n=[],e=-1;for(;++e<t.length;)n[e]=N(t[e]);return V(o);function o(...u){let r=-1;for(;++r<n.length;)if(n[r].call(this,...u))return!0;return!1}}function Ye(t){return V(n);function n(e){let o;for(o in t)if(e[o]!==t[o])return!1;return!0}}function Ke(t){return V(n);function n(e){return e&&e.type===t}}function V(t){return n;function n(...e){return Boolean(t.call(this,...e))}}function Xe(){return!0}var Je=!0,tn="skip",Gt=!1,Zt=function(t,n,e,o){typeof n=="function"&&typeof e!="function"&&(o=e,e=n,n=null);let u=N(n),r=o?-1:1;i(t,null,[])();function i(a,l,p){let f=typeof a=="object"&&a!==null?a:{},k;return typeof f.type=="string"&&(k=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0,Object.defineProperty(g,"name",{value:"node ("+(f.type+(k?"<"+k+">":""))+")"})),g;function g(){let h=[],c,m,x;if((!n||u(a,l,p[p.length-1]||null))&&(h=en(e(a,p)),h[0]===Gt))return h;if(a.children&&h[0]!==tn)for(m=(o?a.children.length:-1)+r,x=p.concat(a);m>-1&&m<a.children.length;){if(c=i(a.children[m],m,x)(),c[0]===Gt)return c;m=typeof c[1]=="number"?c[1]:m+r}return h}}};function en(t){return Array.isArray(t)?t:typeof t=="number"?[Je,t]:[t]}var nn={}.hasOwnProperty,gt=function(t,n,e,o){let u,r;typeof n=="string"||n instanceof RegExp?(r=[[n,e]],u=o):(r=n,u=e),u||(u={});let i=N(u.ignore||[]),a=rn(r),l=-1;for(;++l<a.length;)Zt(t,"text",p);return t;function p(k,g){let h=-1,c;for(;++h<g.length;){let m=g[h];if(i(m,c?c.children.indexOf(m):void 0,c))return;c=m}if(c)return f(k,g)}function f(k,g){let h=g[g.length-1],c=a[l][0],m=a[l][1],x=0,b=h.children.indexOf(k),w=!1,F=[],y;c.lastIndex=0;let d=c.exec(k.value);for(;d;){y=d.index;let Q={index:d.index,input:d.input,stack:[...g,k]},E=m(...d,Q);if(typeof E=="string"&&(E=E.length>0?{type:"text",value:E}:void 0),E!==!1&&(x!==y&&F.push({type:"text",value:k.value.slice(x,y)}),Array.isArray(E)?F.push(...E):E&&F.push(E),x=y+d[0].length,w=!0),!c.global)break;d=c.exec(k.value)}return w?(x<k.value.length&&F.push({type:"text",value:k.value.slice(x)}),h.children.splice(b,1,...F)):F=[k],b+F.length}};function rn(t){let n=[];if(typeof t!="object")throw new TypeError("Expected array or object as schema");if(Array.isArray(t)){let e=-1;for(;++e<t.length;)n.push([Qt(t[e][0]),Yt(t[e][1])])}else{let e;for(e in t)nn.call(t,e)&&n.push([Qt(e),Yt(t[e])])}return n}function Qt(t){return typeof t=="string"?new RegExp(pt(t),"g"):t}function Yt(t){return typeof t=="function"?t:()=>t}var kt="phrasing",xt=["autolink","link","image","label"],Kt={transforms:[fn],enter:{literalAutolink:on,literalAutolinkEmail:bt,literalAutolinkHttp:bt,literalAutolinkWww:bt},exit:{literalAutolink:sn,literalAutolinkEmail:an,literalAutolinkHttp:ln,literalAutolinkWww:un}},Xt={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:kt,notInConstruct:xt},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:kt,notInConstruct:xt},{character:":",before:"[ps]",after:"\\/",inConstruct:kt,notInConstruct:xt}]};function on(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function bt(t){this.config.enter.autolinkProtocol.call(this,t)}function ln(t){this.config.exit.autolinkProtocol.call(this,t)}function un(t){this.config.exit.data.call(this,t);let n=this.stack[this.stack.length-1];n.url="http://"+this.sliceSerialize(t)}function an(t){this.config.exit.autolinkEmail.call(this,t)}function sn(t){this.exit(t)}function fn(t){gt(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,cn],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,mn]],{ignore:["link","linkReference"]})}function cn(t,n,e,o,u){let r="";if(!Jt(u)||(/^w/i.test(n)&&(e=n+e,n="",r="http://"),!hn(e)))return!1;let i=pn(e+o);if(!i[0])return!1;let a={type:"link",title:null,url:r+n+i[0],children:[{type:"text",value:n+i[0]}]};return i[1]?[a,{type:"text",value:i[1]}]:a}function mn(t,n,e,o){return!Jt(o,!0)||/[_-\d]$/.test(e)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+e,children:[{type:"text",value:n+"@"+e}]}}function hn(t){let n=t.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function pn(t){let n=/[!"&'),.:;<>?\]}]+$/.exec(t),e,o,u,r;if(n)for(t=t.slice(0,n.index),r=n[0],e=r.indexOf(")"),o=ht(t,"("),u=ht(t,")");e!==-1&&o>u;)t+=r.slice(0,e+1),r=r.slice(e+1),e=r.indexOf(")"),u++;return[t,r]}function Jt(t,n){let e=t.input.charCodeAt(t.index-1);return(t.index===0||R(e)||P(e))&&(!n||e!==47)}function te(t,n){let e=Number.parseInt(t,n);return e<9||e===11||e>13&&e<32||e>126&&e<160||e>55295&&e<57344||e>64975&&e<65008||(e&65535)===65535||(e&65535)===65534||e>1114111?"\uFFFD":String.fromCharCode(e)}var gn=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ee(t){return t.replace(gn,kn)}function kn(t,n,e){if(n)return n;if(e.charCodeAt(0)===35){let u=e.charCodeAt(1),r=u===120||u===88;return te(e.slice(r?2:1),r?16:10)}return Vt(e)||t}function wt(t){return t.label||!t.identifier?t.label||"":ee(t.identifier)}function D(t){let n=t||{},e=n.now||{},o=n.lineShift||0,u=e.line||1,r=e.column||1;return{move:l,current:i,shift:a};function i(){return{now:{line:u,column:r},lineShift:o}}function a(p){o+=p}function l(p=""){let f=p.split(/\r?\n|\r/g),k=f[f.length-1];return u+=f.length-1,r=f.length===1?r+k.length:1+k.length+o,p}}function q(t,n,e){let o=n.indexStack,u=t.children||[],r=D(e),i=[],a=-1;for(o.push(-1);++a<u.length;){let p=u[a];o[o.length-1]=a,i.push(r.move(n.handle(p,t,n,{before:`
`,after:`
`,...r.current()}))),p.type!=="list"&&(n.bulletLastUsed=void 0),a<u.length-1&&i.push(r.move(l(p,u[a+1])))}return o.pop(),i.join("");function l(p,f){let k=n.join.length;for(;k--;){let g=n.join[k](p,f,t,n);if(g===!0||g===1)break;if(typeof g=="number")return`
`.repeat(1+g);if(g===!1)return`

<!---->

`}return`

`}}var xn=/\r?\n|\r/g;function $(t,n){let e=[],o=0,u=0,r;for(;r=xn.exec(t);)i(t.slice(o,r.index)),e.push(r[0]),o=r.index+r[0].length,u++;return i(t.slice(o)),e.join("");function i(a){e.push(n(a,u,!a))}}function G(t){if(!t._compiled){let n=(t.atBreak?"[\\r\\n][\\t ]*":"")+(t.before?"(?:"+t.before+")":"");t._compiled=new RegExp((n?"("+n+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(t.character)?"\\":"")+t.character+(t.after?"(?:"+t.after+")":""),"g")}return t._compiled}function re(t,n){return ne(t,n.inConstruct,!0)&&!ne(t,n.notInConstruct,!1)}function ne(t,n,e){if(!n)return e;typeof n=="string"&&(n=[n]);let o=-1;for(;++o<n.length;)if(t.includes(n[o]))return!0;return!1}function Ft(t,n,e){let o=(e.before||"")+(n||"")+(e.after||""),u=[],r=[],i={},a=-1;for(;++a<t.unsafe.length;){let f=t.unsafe[a];if(!re(t.stack,f))continue;let k=G(f),g;for(;g=k.exec(o);){let h="before"in f||Boolean(f.atBreak),c="after"in f,m=g.index+(h?g[1].length:0);u.includes(m)?(i[m].before&&!h&&(i[m].before=!1),i[m].after&&!c&&(i[m].after=!1)):(u.push(m),i[m]={before:h,after:c})}}u.sort(bn);let l=e.before?e.before.length:0,p=o.length-(e.after?e.after.length:0);for(a=-1;++a<u.length;){let f=u[a];f<l||f>=p||f+1<p&&u[a+1]===f+1&&i[f].after&&!i[f+1].before&&!i[f+1].after||u[a-1]===f-1&&i[f].before&&!i[f-1].before&&!i[f-1].after||(l!==f&&r.push(ie(o.slice(l,f),"\\")),l=f,/[!-/:-@[-`{-~]/.test(o.charAt(f))&&(!e.encode||!e.encode.includes(o.charAt(f)))?r.push("\\"):(r.push("&#x"+o.charCodeAt(f).toString(16).toUpperCase()+";"),l++))}return r.push(ie(o.slice(l,p),e.after)),r.join("")}function bn(t,n){return t-n}function ie(t,n){let e=/\\(?=[!-/:-@[-`{-~])/g,o=[],u=[],r=t+n,i=-1,a=0,l;for(;l=e.exec(r);)o.push(l.index);for(;++i<o.length;)a!==o[i]&&u.push(t.slice(a,o[i])),u.push("\\"),a=o[i];return u.push(t.slice(a)),u.join("")}function oe(){return{enter:{gfmFootnoteDefinition:t,gfmFootnoteDefinitionLabelString:n,gfmFootnoteCall:u,gfmFootnoteCallString:r},exit:{gfmFootnoteDefinition:o,gfmFootnoteDefinitionLabelString:e,gfmFootnoteCall:a,gfmFootnoteCallString:i}};function t(l){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},l)}function n(){this.buffer()}function e(l){let p=this.resume(),f=this.stack[this.stack.length-1];f.label=p,f.identifier=O(this.sliceSerialize(l)).toLowerCase()}function o(l){this.exit(l)}function u(l){this.enter({type:"footnoteReference",identifier:"",label:""},l)}function r(){this.buffer()}function i(l){let p=this.resume(),f=this.stack[this.stack.length-1];f.label=p,f.identifier=O(this.sliceSerialize(l)).toLowerCase()}function a(l){this.exit(l)}}function le(){return t.peek=n,{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:e,footnoteReference:t}};function t(o,u,r,i){let a=D(i),l=a.move("[^"),p=r.enter("footnoteReference"),f=r.enter("reference");return l+=a.move(Ft(r,wt(o),{...a.current(),before:l,after:"]"})),f(),p(),l+=a.move("]"),l}function n(){return"["}function e(o,u,r,i){let a=D(i),l=a.move("[^"),p=r.enter("footnoteDefinition"),f=r.enter("label");return l+=a.move(Ft(r,wt(o),{...a.current(),before:l,after:"]"})),f(),l+=a.move("]:"+(o.children&&o.children.length>0?" ":"")),a.shift(4),l+=a.move($(q(o,r,a.current()),k)),p(),l;function k(g,h,c){return h?(c?"":"    ")+g:g}}}function Z(t,n,e){let o=n.indexStack,u=t.children||[],r=[],i=-1,a=e.before;o.push(-1);let l=D(e);for(;++i<u.length;){let p=u[i],f;if(o[o.length-1]=i,i+1<u.length){let k=n.handle.handlers[u[i+1].type];k&&k.peek&&(k=k.peek),f=k?k(u[i+1],t,n,{before:"",after:"",...l.current()}).charAt(0):""}else f=e.after;r.length>0&&(a==="\r"||a===`
`)&&p.type==="html"&&(r[r.length-1]=r[r.length-1].replace(/(\r?\n|\r)$/," "),a=" ",l=D(e),l.move(r.join(""))),r.push(l.move(n.handle(p,t,n,{...l.current(),before:a,after:f}))),a=r[r.length-1].slice(-1)}return o.pop(),r.join("")}var ue={canContainEols:["delete"],enter:{strikethrough:Fn},exit:{strikethrough:dn}},wn=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],ae={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:wn}],handlers:{delete:se}};se.peek=Cn;function Fn(t){this.enter({type:"delete",children:[]},t)}function dn(t){this.exit(t)}function se(t,n,e,o){let u=D(o),r=e.enter("emphasis"),i=u.move("~~");return i+=Z(t,e,{...u.current(),before:i,after:"~"}),i+=u.move("~~"),r(),i}function Cn(){return"~"}dt.peek=yn;function dt(t,n,e){let o=t.value||"",u="`",r=-1;for(;new RegExp("(^|[^`])"+u+"([^`]|$)").test(o);)u+="`";for(/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^`|`$/.test(o))&&(o=" "+o+" ");++r<e.unsafe.length;){let i=e.unsafe[r],a=G(i),l;if(!!i.atBreak)for(;l=a.exec(o);){let p=l.index;o.charCodeAt(p)===10&&o.charCodeAt(p-1)===13&&p--,o=o.slice(0,p)+" "+o.slice(l.index+1)}}return u+o+u}function yn(){return"`"}function ce(t,n={}){let e=(n.align||[]).concat(),o=n.stringLength||Dn,u=[],r=[],i=[],a=[],l=0,p=-1;for(;++p<t.length;){let c=[],m=[],x=-1;for(t[p].length>l&&(l=t[p].length);++x<t[p].length;){let b=An(t[p][x]);if(n.alignDelimiters!==!1){let w=o(b);m[x]=w,(a[x]===void 0||w>a[x])&&(a[x]=w)}c.push(b)}r[p]=c,i[p]=m}let f=-1;if(typeof e=="object"&&"length"in e)for(;++f<l;)u[f]=fe(e[f]);else{let c=fe(e);for(;++f<l;)u[f]=c}f=-1;let k=[],g=[];for(;++f<l;){let c=u[f],m="",x="";c===99?(m=":",x=":"):c===108?m=":":c===114&&(x=":");let b=n.alignDelimiters===!1?1:Math.max(1,a[f]-m.length-x.length),w=m+"-".repeat(b)+x;n.alignDelimiters!==!1&&(b=m.length+b+x.length,b>a[f]&&(a[f]=b),g[f]=b),k[f]=w}r.splice(1,0,k),i.splice(1,0,g),p=-1;let h=[];for(;++p<r.length;){let c=r[p],m=i[p];f=-1;let x=[];for(;++f<l;){let b=c[f]||"",w="",F="";if(n.alignDelimiters!==!1){let y=a[f]-(m[f]||0),d=u[f];d===114?w=" ".repeat(y):d===99?y%2?(w=" ".repeat(y/2+.5),F=" ".repeat(y/2-.5)):(w=" ".repeat(y/2),F=w):F=" ".repeat(y)}n.delimiterStart!==!1&&!f&&x.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&b==="")&&(n.delimiterStart!==!1||f)&&x.push(" "),n.alignDelimiters!==!1&&x.push(w),x.push(b),n.alignDelimiters!==!1&&x.push(F),n.padding!==!1&&x.push(" "),(n.delimiterEnd!==!1||f!==l-1)&&x.push("|")}h.push(n.delimiterEnd===!1?x.join("").replace(/ +$/,""):x.join(""))}return h.join(`
`)}function An(t){return t==null?"":String(t)}function Dn(t){return t.length}function fe(t){let n=typeof t=="string"?t.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}var yt={enter:{table:En,tableData:me,tableHeader:me,tableRow:Sn},exit:{codeText:Tn,table:Ln,tableData:Ct,tableHeader:Ct,tableRow:Ct}};function En(t){let n=t._align;this.enter({type:"table",align:n.map(e=>e==="none"?null:e),children:[]},t),this.setData("inTable",!0)}function Ln(t){this.exit(t),this.setData("inTable")}function Sn(t){this.enter({type:"tableRow",children:[]},t)}function Ct(t){this.exit(t)}function me(t){this.enter({type:"tableCell",children:[]},t)}function Tn(t){let n=this.resume();this.getData("inTable")&&(n=n.replace(/\\([\\|])/g,In));let e=this.stack[this.stack.length-1];e.value=n,this.exit(t)}function In(t,n){return n==="|"?n:t}function At(t){let n=t||{},e=n.tableCellPadding,o=n.tablePipeAlign,u=n.stringLength,r=e?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:i,tableRow:a,tableCell:l,inlineCode:g}};function i(h,c,m,x){return p(f(h,m,x),h.align)}function a(h,c,m,x){let b=k(h,m,x),w=p([b]);return w.slice(0,w.indexOf(`
`))}function l(h,c,m,x){let b=m.enter("tableCell"),w=m.enter("phrasing"),F=Z(h,m,{...x,before:r,after:r});return w(),b(),F}function p(h,c){return ce(h,{align:c,alignDelimiters:o,padding:e,stringLength:u})}function f(h,c,m){let x=h.children,b=-1,w=[],F=c.enter("table");for(;++b<x.length;)w[b]=k(x[b],c,m);return F(),w}function k(h,c,m){let x=h.children,b=-1,w=[],F=c.enter("tableRow");for(;++b<x.length;)w[b]=l(x[b],h,c,m);return F(),w}function g(h,c,m){let x=dt(h,c,m);return m.stack.includes("tableCell")&&(x=x.replace(/\|/g,"\\$&")),x}}function he(t){let n=t.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function pe(t){let n=t.options.listItemIndent||"tab";if(n===1||n==="1")return"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function ge(t,n,e,o){let u=pe(e),r=e.bulletCurrent||he(e);n&&n.type==="list"&&n.ordered&&(r=(typeof n.start=="number"&&n.start>-1?n.start:1)+(e.options.incrementListMarker===!1?0:n.children.indexOf(t))+r);let i=r.length+1;(u==="tab"||u==="mixed"&&(n&&n.type==="list"&&n.spread||t.spread))&&(i=Math.ceil(i/4)*4);let a=D(o);a.move(r+" ".repeat(i-r.length)),a.shift(i);let l=e.enter("listItem"),p=$(q(t,e,a.current()),f);return l(),p;function f(k,g,h){return g?(h?"":" ".repeat(i))+k:(h?r:r+" ".repeat(i-r.length))+k}}var xe={exit:{taskListCheckValueChecked:ke,taskListCheckValueUnchecked:ke,paragraph:zn}},be={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Bn}};function ke(t){let n=this.stack[this.stack.length-2];n.checked=t.type==="taskListCheckValueChecked"}function zn(t){let n=this.stack[this.stack.length-2],e=this.stack[this.stack.length-1],o=n.children,u=e.children[0],r=-1,i;if(n&&n.type==="listItem"&&typeof n.checked=="boolean"&&u&&u.type==="text"){for(;++r<o.length;){let a=o[r];if(a.type==="paragraph"){i=a;break}}i===e&&(u.value=u.value.slice(1),u.value.length===0?e.children.shift():e.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,e.position.start=Object.assign({},u.position.start)))}this.exit(t)}function Bn(t,n,e,o){let u=t.children[0],r=typeof t.checked=="boolean"&&u&&u.type==="paragraph",i="["+(t.checked?"x":" ")+"] ",a=D(o);r&&a.move(i);let l=ge(t,n,e,{...o,...a.current()});return r&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),l;function p(f){return f+i}}function Dt(){return[Kt,oe(),ue,yt,xe]}function Et(t){return{extensions:[Xt,le(),ae,At(t),be]}}function Mn(t={}){let n=this.data();e("micromarkExtensions",$t(t)),e("fromMarkdownExtensions",Dt()),e("toMarkdownExtensions",Et(t));function e(o,u){(n[o]?n[o]:n[o]=[]).push(u)}}export{Mn as default};
