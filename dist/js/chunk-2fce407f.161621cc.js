(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fce407f"],{"0254":function(t,e,i){},"0cb2":function(t,e,i){var r=i("e330"),n=i("7b0b"),o=Math.floor,s=r("".charAt),c=r("".replace),a=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,f=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,i,r,u,v){var d=i+t.length,p=r.length,h=f;return void 0!==u&&(u=n(u),h=l),c(v,h,(function(n,c){var l;switch(s(c,0)){case"$":return"$";case"&":return t;case"`":return a(e,0,i);case"'":return a(e,d);case"<":l=u[a(c,1,-1)];break;default:var f=+c;if(0===f)return n;if(f>p){var v=o(f/10);return 0===v?n:v<=p?void 0===r[v-1]?s(c,1):r[v-1]+s(c,1):n}l=r[f-1]}return void 0===l?"":l}))}},"0d46":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{staticClass:"movieItem",attrs:{to:"/movieinfo/"+t.citem.id+"/"}},[i("div",{staticClass:"imgBox"},[i("img",{attrs:{src:t.citem.img,alt:""}})]),i("div",{staticClass:"info"},[i("div",{staticClass:"mname"},[i("span",[t._v(t._s(t.citem.nm))]),t.citem.version?i("span",{class:t.citem.version}):t._e()]),i("div",{staticClass:"score",domProps:{innerHTML:t._s(t.citem.score)}}),i("div",{staticClass:"actor"},[t._v("主演:"+t._s(t.citem.star))]),i("div",{staticClass:"show"},[t._v(t._s(t.citem.showInfo))])]),i("div",{staticClass:"btn",style:{backgroundColor:t.citem.color},on:{click:function(e){return e.preventDefault(),t.btnClick(t.citem.id)}}},[t._v(" "+t._s(t.citem.btn)+" ")])])},n=[],o={props:["citem"],methods:{btnClick:function(t){console.log(t)}}},s=o,c=(i("1065"),i("2877")),a=Object(c["a"])(s,r,n,!1,null,"2e3f2c04",null);e["a"]=a.exports},1065:function(t,e,i){"use strict";i("9f0c")},"14c3":function(t,e,i){var r=i("da84"),n=i("c65b"),o=i("825a"),s=i("1626"),c=i("c6b6"),a=i("9263"),l=r.TypeError;t.exports=function(t,e){var i=t.exec;if(s(i)){var r=n(i,t,e);return null!==r&&o(r),r}if("RegExp"===c(t))return n(a,t,e);throw l("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,i){var r=i("da84"),n=i("fdbc"),o=i("785a"),s=i("17c2"),c=i("9112"),a=function(t){if(t&&t.forEach!==s)try{c(t,"forEach",s)}catch(e){t.forEach=s}};for(var l in n)n[l]&&a(r[l]&&r[l].prototype);a(o)},"17c2":function(t,e,i){"use strict";var r=i("b727").forEach,n=i("a640"),o=n("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"4f49":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wait",staticClass:"wait"},[i("section",{staticClass:"expect"},[i("p",{staticClass:"title"},[t._v(t._s(t.expectTitle))]),i("div",{ref:"expect",staticClass:"cardBox"},[t._l(t.expectMovieList,(function(e){return i("router-link",{key:e.id,staticClass:"card",attrs:{to:"/movieinfo/"+e.id+"/"}},[i("div",{staticClass:"imgBox"},[i("img",{attrs:{src:e.img.replace("w.h","128.180"),alt:""}}),i("div",{staticClass:"score"},[i("span",[t._v(t._s(e.wish)+"人想看")])])]),i("div",{staticClass:"pname"},[t._v(t._s(e.nm))]),i("div",{staticClass:"time"},[t._v(t._s(e.comingTitle.split(" ")[0]))])])})),t.tipShow?i("span",{domProps:{innerHTML:t._s(t.moreExpectTip)}}):t._e()],2)]),i("section",{staticClass:"movieList"},[t._l(t.movieArr,(function(e,r){return i("div",{key:r},[i("div",{staticClass:"date"},[t._v(t._s(e)+" 上映")]),t._l(t.movieObj[e],(function(t){return i("comp-moviecard",{key:t.id,attrs:{citem:t}})}))],2)})),i("div",{staticClass:"more"},[t._v(t._s(t.moreTip))])],2)])},n=[],o=i("2909"),s=(i("99af"),i("a434"),i("a15b"),i("d3b7"),i("159b"),i("ac1f"),i("5319"),i("0d46")),c={data:function(){return{expectTitle:"",expectMovieList:[],limit:10,offset:0,moreExpectTip:"加<br/>载<br/>中",tipShow:!1,movieList:[],movieObj:{},movieArr:[],moreTip:"加载中...",localCityId:1,isMoreExpect:!0,isMore:!0}},components:{CompMoviecard:s["a"]},methods:{getExpectMovie:function(){var t=this;axios.get("/index/mostExpected",{params:{ci:this.localCityId,limit:this.limit,offset:this.offset}}).then((function(e){200==e.status&&(t.expectMovieList=e.data.coming,t.expectTitle="近期最受期待")}))},getMoreExpect:function(){var t=this;this.isMoreExpect&&(this.isMoreExpect=!1,axios.get("/index/mostExpected",{params:{ci:this.localCityId,limit:this.limit,offset:this.offset}}).then((function(e){200==e.status&&(t.isMoreExpect=!0,t.expectMovieList=[].concat(Object(o["a"])(t.expectMovieList),Object(o["a"])(e.data.coming)))})))},getExpectList:function(){var t=this;axios.get("/index/comingList",{params:{ci:this.localCityId,limit:this.limit}}).then((function(e){if(200==e.status){var i=e.data.coming,r=e.data.movieIds;t.moreList=r.splice(i.length,r.length+1),t.dataProcessing(i)}}))},getMoreList:function(t){var e=this;if(this.isMore){this.isMore=!1;var i=t.join(",");axios.get("/index/moreComingList",{params:{movieIds:i,ci:this.localCityId}}).then((function(t){200==t.status&&(e.isMore=!0,e.dataProcessing(t.data.coming))}))}},dataProcessing:function(t){var e=this;t.forEach((function(t){var i={};i.id=t.id,i.img=t.img.replace("w.h","128.180"),i.nm=t.nm,i.showInfo=t.showInfo,i.star=t.star,i.version=t.version.replace(" ",""),i.rt=t.rt,t.showStateButton?(i.btn=t.showStateButton.content,"预售"==t.showStateButton.content?(i.score="<span>"+t.wish+"</span>人想看",i.color="#FAAF00"):"点映"==t.showStateButton.content&&(i.score="<span>"+t.wish+"</span>人想看",i.color="#3C9FE6")):(i.btn="想看",i.score="<span>"+t.wish+"</span>人想看",i.color="#FF80B0",i.showInfo=t.rt+" 上映"),e.movieObj[i.rt]||(e.movieObj[i.rt]=[],e.movieArr.push(i.rt)),i.rt==t.rt&&e.movieObj[i.rt].push(i)}))},handleScroll:function(){var t=this;this.$nextTick((function(){if(t.tipShow=!0,t.$refs.expect){var e=t.$refs.expect.clientWidth,i=t.$refs.expect.scrollLeft,r=t.$refs.expect.scrollWidth;setTimeout((function(){e+i==r&&(t.expectMovieList.length%t.limit?t.moreExpectTip="没<br/>有<br/>更<br/>多<br/>了":(t.offset+=10,t.getMoreExpect()))}),300)}if(t.$refs.wait){var n=t.$refs.wait.clientHeight,o=t.$refs.wait.scrollTop,s=t.$refs.wait.scrollHeight;setTimeout((function(){if(n+o==s)if(t.moreList.length>0){var e=t.moreList.splice(0,10);t.getMoreList(e)}else t.moreTip="没有更多了/(ㄒoㄒ)/~~"}),300)}}))}},created:function(){this.getExpectMovie(),this.getExpectList(),localStorage.getItem("localCity")?this.localCityId=JSON.parse(localStorage.getItem("localCity")).id:this.localCityId=this.localCityId},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},a=c,l=(i("4fea"),i("2877")),f=Object(l["a"])(a,r,n,!1,null,"0ae61534",null);e["default"]=f.exports},"4fea":function(t,e,i){"use strict";i("0254")},5319:function(t,e,i){"use strict";var r=i("2ba4"),n=i("c65b"),o=i("e330"),s=i("d784"),c=i("d039"),a=i("825a"),l=i("1626"),f=i("5926"),u=i("50c4"),v=i("577e"),d=i("1d80"),p=i("8aa5"),h=i("dc4a"),m=i("0cb2"),g=i("14c3"),x=i("b622"),b=x("replace"),w=Math.max,C=Math.min,E=o([].concat),_=o([].push),M=o("".indexOf),y=o("".slice),$=function(t){return void 0===t?t:String(t)},L=function(){return"$0"==="a".replace(/./,"$0")}(),I=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),T=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));s("replace",(function(t,e,i){var o=I?"$":"$0";return[function(t,i){var r=d(this),o=void 0==t?void 0:h(t,b);return o?n(o,t,r,i):n(e,v(r),t,i)},function(t,n){var s=a(this),c=v(t);if("string"==typeof n&&-1===M(n,o)&&-1===M(n,"$<")){var d=i(e,s,c,n);if(d.done)return d.value}var h=l(n);h||(n=v(n));var x=s.global;if(x){var b=s.unicode;s.lastIndex=0}var L=[];while(1){var I=g(s,c);if(null===I)break;if(_(L,I),!x)break;var T=v(I[0]);""===T&&(s.lastIndex=p(c,u(s.lastIndex),b))}for(var k="",S=0,j=0;j<L.length;j++){I=L[j];for(var O=v(I[0]),A=w(C(f(I.index),c.length),0),B=[],F=1;F<I.length;F++)_(B,$(I[F]));var P=I.groups;if(h){var H=E([O],B,A,c);void 0!==P&&_(H,P);var J=v(r(n,void 0,H))}else J=m(O,c,A,B,P,n);A>=S&&(k+=y(c,S,A)+J,S=A+O.length)}return k+y(c,S)}]}),!T||!L||I)},"8aa5":function(t,e,i){"use strict";var r=i("6547").charAt;t.exports=function(t,e,i){return e+(i?r(t,e).length:1)}},"9f0c":function(t,e,i){},a15b:function(t,e,i){"use strict";var r=i("23e7"),n=i("e330"),o=i("44ad"),s=i("fc6a"),c=i("a640"),a=n([].join),l=o!=Object,f=c("join",",");r({target:"Array",proto:!0,forced:l||!f},{join:function(t){return a(s(this),void 0===t?",":t)}})},a434:function(t,e,i){"use strict";var r=i("23e7"),n=i("da84"),o=i("23cb"),s=i("5926"),c=i("07fa"),a=i("7b0b"),l=i("65f0"),f=i("8418"),u=i("1dde"),v=u("splice"),d=n.TypeError,p=Math.max,h=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!v},{splice:function(t,e){var i,r,n,u,v,x,b=a(this),w=c(b),C=o(t,w),E=arguments.length;if(0===E?i=r=0:1===E?(i=0,r=w-C):(i=E-2,r=h(p(s(e),0),w-C)),w+i-r>m)throw d(g);for(n=l(b,r),u=0;u<r;u++)v=C+u,v in b&&f(n,u,b[v]);if(n.length=r,i<r){for(u=C;u<w-r;u++)v=u+r,x=u+i,v in b?b[x]=b[v]:delete b[x];for(u=w;u>w-r+i;u--)delete b[u-1]}else if(i>r)for(u=w-r;u>C;u--)v=u+r-1,x=u+i-1,v in b?b[x]=b[v]:delete b[x];for(u=0;u<i;u++)b[u+C]=arguments[u+2];return b.length=w-r+i,n}})},a640:function(t,e,i){"use strict";var r=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&r((function(){i.call(null,e||function(){throw 1},1)}))}},d784:function(t,e,i){"use strict";i("ac1f");var r=i("e330"),n=i("6eeb"),o=i("9263"),s=i("d039"),c=i("b622"),a=i("9112"),l=c("species"),f=RegExp.prototype;t.exports=function(t,e,i,u){var v=c(t),d=!s((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),p=d&&!s((function(){var e=!1,i=/a/;return"split"===t&&(i={},i.constructor={},i.constructor[l]=function(){return i},i.flags="",i[v]=/./[v]),i.exec=function(){return e=!0,null},i[v](""),!e}));if(!d||!p||i){var h=r(/./[v]),m=e(v,""[t],(function(t,e,i,n,s){var c=r(t),a=e.exec;return a===o||a===f.exec?d&&!s?{done:!0,value:h(e,i,n)}:{done:!0,value:c(i,e,n)}:{done:!1}}));n(String.prototype,t,m[0]),n(f,v,m[1])}u&&a(f[v],"sham",!0)}}}]);
//# sourceMappingURL=chunk-2fce407f.161621cc.js.map