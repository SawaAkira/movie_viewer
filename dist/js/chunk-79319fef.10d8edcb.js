(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79319fef"],{"0cb2":function(e,r,t){var n=t("e330"),a=t("7b0b"),i=Math.floor,o=n("".charAt),l=n("".replace),s=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,x=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,u,d){var p=t+e.length,m=n.length,f=x;return void 0!==u&&(u=a(u),f=c),l(d,f,(function(a,l){var c;switch(o(l,0)){case"$":return"$";case"&":return e;case"`":return s(r,0,t);case"'":return s(r,p);case"<":c=u[s(l,1,-1)];break;default:var x=+l;if(0===x)return a;if(x>m){var d=i(x/10);return 0===d?a:d<=m?void 0===n[d-1]?o(l,1):n[d-1]+o(l,1):a}c=n[x-1]}return void 0===c?"":c}))}},"107c":function(e,r,t){var n=t("d039"),a=t("da84"),i=a.RegExp;e.exports=n((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,r,t){var n=t("da84"),a=t("c65b"),i=t("825a"),o=t("1626"),l=t("c6b6"),s=t("9263"),c=n.TypeError;e.exports=function(e,r){var t=e.exec;if(o(t)){var n=a(t,e,r);return null!==n&&i(n),n}if("RegExp"===l(e))return a(s,e,r);throw c("RegExp#exec called on incompatible receiver")}},"44e7":function(e,r,t){var n=t("861d"),a=t("c6b6"),i=t("b622"),o=i("match");e.exports=function(e){var r;return n(e)&&(void 0!==(r=e[o])?!!r:"RegExp"==a(e))}},5319:function(e,r,t){"use strict";var n=t("2ba4"),a=t("c65b"),i=t("e330"),o=t("d784"),l=t("d039"),s=t("825a"),c=t("1626"),x=t("5926"),u=t("50c4"),d=t("577e"),p=t("1d80"),m=t("8aa5"),f=t("dc4a"),k=t("0cb2"),h=t("14c3"),v=t("b622"),y=v("replace"),g=Math.max,b=Math.min,E=i([].concat),C=i([].push),S=i("".indexOf),_=i("".slice),A=function(e){return void 0===e?e:String(e)},$=function(){return"$0"==="a".replace(/./,"$0")}(),w=function(){return!!/./[y]&&""===/./[y]("a","$0")}(),D=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,r,t){var i=w?"$":"$0";return[function(e,t){var n=p(this),i=void 0==e?void 0:f(e,y);return i?a(i,e,n,t):a(r,d(n),e,t)},function(e,a){var o=s(this),l=d(e);if("string"==typeof a&&-1===S(a,i)&&-1===S(a,"$<")){var p=t(r,o,l,a);if(p.done)return p.value}var f=c(a);f||(a=d(a));var v=o.global;if(v){var y=o.unicode;o.lastIndex=0}var $=[];while(1){var w=h(o,l);if(null===w)break;if(C($,w),!v)break;var D=d(w[0]);""===D&&(o.lastIndex=m(l,u(o.lastIndex),y))}for(var B="",I=0,R=0;R<$.length;R++){w=$[R];for(var P=d(w[0]),T=g(b(x(w.index),l.length),0),V=[],O=1;O<w.length;O++)C(V,A(w[O]));var L=w.groups;if(f){var G=E([P],V,T,l);void 0!==L&&C(G,L);var N=d(n(a,void 0,G))}else N=k(P,l,T,V,L,a);T>=I&&(B+=_(l,I,T)+N,I=T+P.length)}return B+_(l,I)}]}),!D||!$||w)},"5b81":function(e,r,t){"use strict";var n=t("23e7"),a=t("da84"),i=t("c65b"),o=t("e330"),l=t("1d80"),s=t("1626"),c=t("44e7"),x=t("577e"),u=t("dc4a"),d=t("ad6d"),p=t("0cb2"),m=t("b622"),f=t("c430"),k=m("replace"),h=RegExp.prototype,v=a.TypeError,y=o(d),g=o("".indexOf),b=o("".replace),E=o("".slice),C=Math.max,S=function(e,r,t){return t>e.length?-1:""===r?t:g(e,r,t)};n({target:"String",proto:!0},{replaceAll:function(e,r){var t,n,a,o,d,m,_,A,$,w=l(this),D=0,B=0,I="";if(null!=e){if(t=c(e),t&&(n=x(l("flags"in h?e.flags:y(e))),!~g(n,"g")))throw v("`.replaceAll` does not allow non-global regexes");if(a=u(e,k),a)return i(a,e,w,r);if(f&&t)return b(x(w),e,r)}o=x(w),d=x(e),m=s(r),m||(r=x(r)),_=d.length,A=C(1,_),D=S(o,d,0);while(-1!==D)$=m?x(r(d,D,o)):p(d,o,D,[],void 0,r),I+=E(o,B,D)+$,B=D+_,D=S(o,d,D+A);return B<o.length&&(I+=E(o,B)),I}})},"88a2":function(e){e.exports=JSON.parse('{"v":"5.6.10","fr":24,"ip":0,"op":35,"w":500,"h":500,"nm":"334-loader-5","ddd":0,"assets":[{"id":"comp_0","layers":[]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Watermark","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":0,"k":0.292,"ix":2},"w":500,"h":500,"ip":0,"op":500,"st":0,"bm":0,"completed":true,"layers":[]},{"ddd":0,"ind":2,"ty":3,"nm":"Color  & Stroke Change","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Primary","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.282,0.812,0.682],"ix":1}}]},{"ty":5,"nm":"Secondary","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.031372550875,0.658823549747,0.541176497936,1],"ix":1}}]},{"ty":5,"nm":"Stroke","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":70,"ix":1}}]},{"ty":5,"nm":"Scale","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]},{"ty":5,"nm":"Axis","np":3,"mn":"ADBE Point Control","ix":5,"en":1,"ef":[{"ty":3,"nm":"Point","mn":"ADBE Point Control-0001","ix":1,"v":{"a":0,"k":[250,250],"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0,"completed":true},{"ddd":0,"ind":3,"ty":3,"nm":"NULL 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Axis\')(\'Point\');"},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer(\'Color  & Stroke Change\').effect(\'Scale\')(\'Slider\');\\n$bm_rt = [\\n    temp,\\n    temp\\n];"}},"ao":0,"ip":0,"op":120,"st":0,"bm":0,"completed":true},{"ddd":0,"ind":4,"ty":3,"nm":"NULL","parent":3,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[460,460,100],"ix":6}},"ao":0,"ip":0,"op":120,"st":0,"bm":0,"completed":true},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 8","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[-90]},{"t":34,"s":[90]}],"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,-100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[57,57],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false,"_render":true},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.486],"y":[0]},"t":10,"s":[49.9]},{"t":34,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":10,"s":[50]},{"t":25.529296875,"s":[0.1]}],"ix":2},"o":{"a":0,"k":-90,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156862745,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(10 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":35,"st":-14,"bm":0,"completed":true},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 7","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":5,"s":[-90]},{"t":34,"s":[90]}],"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,-100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[57,57],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false,"_render":true},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.486],"y":[0]},"t":5,"s":[49.9]},{"t":29,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":5,"s":[50]},{"t":20.529296875,"s":[0.1]}],"ix":2},"o":{"a":0,"k":-90,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156862745,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(10 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":29,"st":-19,"bm":0,"completed":true},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 6","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.234],"y":[0.396]},"o":{"x":[0.333],"y":[0.264]},"t":0,"s":[-90]},{"t":34,"s":[90]}],"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,-100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[57,57],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false,"_render":true},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.486],"y":[0]},"t":0,"s":[49.9]},{"t":24,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":0,"s":[50]},{"t":15.529296875,"s":[0.1]}],"ix":2},"o":{"a":0,"k":-90,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156862745,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(10 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":13,"st":-24,"bm":0,"completed":true}],"markers":[],"__complete":true}')},"8aa5":function(e,r,t){"use strict";var n=t("6547").charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},9263:function(e,r,t){"use strict";var n=t("c65b"),a=t("e330"),i=t("577e"),o=t("ad6d"),l=t("9f7f"),s=t("5692"),c=t("7c73"),x=t("69f3").get,u=t("fce3"),d=t("107c"),p=s("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,f=m,k=a("".charAt),h=a("".indexOf),v=a("".replace),y=a("".slice),g=function(){var e=/a/,r=/b*/g;return n(m,e,"a"),n(m,r,"a"),0!==e.lastIndex||0!==r.lastIndex}(),b=l.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],C=g||E||b||u||d;C&&(f=function(e){var r,t,a,l,s,u,d,C=this,S=x(C),_=i(e),A=S.raw;if(A)return A.lastIndex=C.lastIndex,r=n(f,A,_),C.lastIndex=A.lastIndex,r;var $=S.groups,w=b&&C.sticky,D=n(o,C),B=C.source,I=0,R=_;if(w&&(D=v(D,"y",""),-1===h(D,"g")&&(D+="g"),R=y(_,C.lastIndex),C.lastIndex>0&&(!C.multiline||C.multiline&&"\n"!==k(_,C.lastIndex-1))&&(B="(?: "+B+")",R=" "+R,I++),t=new RegExp("^(?:"+B+")",D)),E&&(t=new RegExp("^"+B+"$(?!\\s)",D)),g&&(a=C.lastIndex),l=n(m,w?t:C,R),w?l?(l.input=y(l.input,I),l[0]=y(l[0],I),l.index=C.lastIndex,C.lastIndex+=l[0].length):C.lastIndex=0:g&&l&&(C.lastIndex=C.global?l.index+l[0].length:a),E&&l&&l.length>1&&n(p,l[0],t,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(l[s]=void 0)})),l&&$)for(l.groups=u=c(null),s=0;s<$.length;s++)d=$[s],u[d[0]]=l[d[1]];return l}),e.exports=f},"9c05":function(e,r,t){"use strict";var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("lottie",{attrs:{options:e.defaultOptions,height:e.wah,width:e.wah},on:{animCreated:e.handleAnimation}})},a=[],i=t("88a2"),o={data:function(){return{defaultOptions:{animationData:i}}},props:["wah"],methods:{handleAnimation:function(e){this.anim=e}}},l=o,s=t("2877"),c=Object(s["a"])(l,n,a,!1,null,null,null);r["a"]=c.exports},"9f7f":function(e,r,t){var n=t("d039"),a=t("da84"),i=a.RegExp,o=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),l=o||n((function(){return!i("a","y").sticky})),s=o||n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:l,UNSUPPORTED_Y:o}},a640:function(e,r,t){"use strict";var n=t("d039");e.exports=function(e,r){var t=[][e];return!!t&&n((function(){t.call(null,r||function(){throw 1},1)}))}},ac1f:function(e,r,t){"use strict";var n=t("23e7"),a=t("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,r,t){"use strict";var n=t("825a");e.exports=function(){var e=n(this),r="";return e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.dotAll&&(r+="s"),e.unicode&&(r+="u"),e.sticky&&(r+="y"),r}},d784:function(e,r,t){"use strict";t("ac1f");var n=t("e330"),a=t("6eeb"),i=t("9263"),o=t("d039"),l=t("b622"),s=t("9112"),c=l("species"),x=RegExp.prototype;e.exports=function(e,r,t,u){var d=l(e),p=!o((function(){var r={};return r[d]=function(){return 7},7!=""[e](r)})),m=p&&!o((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[c]=function(){return t},t.flags="",t[d]=/./[d]),t.exec=function(){return r=!0,null},t[d](""),!r}));if(!p||!m||t){var f=n(/./[d]),k=r(d,""[e],(function(e,r,t,a,o){var l=n(e),s=r.exec;return s===i||s===x.exec?p&&!o?{done:!0,value:f(r,t,a)}:{done:!0,value:l(t,r,a)}:{done:!1}}));a(String.prototype,e,k[0]),a(x,d,k[1])}u&&s(x[d],"sham",!0)}},e8b5:function(e,r,t){var n=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fce3:function(e,r,t){var n=t("d039"),a=t("da84"),i=a.RegExp;e.exports=n((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-79319fef.10d8edcb.js.map