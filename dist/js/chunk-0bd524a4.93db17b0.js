(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bd524a4"],{"1dde":function(t,s,i){var a=i("d039"),e=i("b622"),n=i("2d00"),c=e("species");t.exports=function(t){return n>=51||!a((function(){var s=[],i=s.constructor={};return i[c]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},"25f0":function(t,s,i){"use strict";var a=i("e330"),e=i("5e77").PROPER,n=i("6eeb"),c=i("825a"),o=i("3a9b"),r=i("577e"),l=i("d039"),d=i("ad6d"),v="toString",u=RegExp.prototype,f=u[v],h=a(d),m=l((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),_=e&&f.name!=v;(m||_)&&n(RegExp.prototype,v,(function(){var t=c(this),s=r(t.source),i=t.flags,a=r(void 0===i&&o(u,t)&&!("flags"in u)?h(t):i);return"/"+s+"/"+a}),{unsafe:!0})},"475f":function(t,s,i){"use strict";i("cc1f")},8418:function(t,s,i){"use strict";var a=i("a04b"),e=i("9bf2"),n=i("5c6c");t.exports=function(t,s,i){var c=a(s);c in t?e.f(t,c,n(0,i)):t[c]=i}},a15b:function(t,s,i){"use strict";var a=i("23e7"),e=i("e330"),n=i("44ad"),c=i("fc6a"),o=i("a640"),r=e([].join),l=n!=Object,d=o("join",",");a({target:"Array",proto:!0,forced:l||!d},{join:function(t){return r(c(this),void 0===t?",":t)}})},a183:function(t,s,i){"use strict";i("bf00")},bf00:function(t,s,i){},cc1f:function(t,s,i){},cd51:function(t,s,i){"use strict";i("d74a")},d74a:function(t,s,i){},f15c:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"movieInfoPage",style:{backgroundColor:t.movieDataList.backgroundColor}},[t.isShow?i("div",{staticClass:"link"},[i("router-link",{attrs:{to:"/"}},[t._v("观影人电影 > ")]),t._v(t._s(t.movieDataList.nm))],1):t._e(),i("comp-infoheader",{attrs:{mdata:t.movieDataList}}),i("comp-infoscore",{attrs:{mdata:t.movieDataList}}),t.isShow?i("div",{staticClass:"intro"},[i("div",{staticClass:"miHeader"},[i("h3",[t._v("简介")]),i("span",{on:{click:function(s){t.unfold=!t.unfold}}},[t._v(t._s(t.unfold?"收起 ":"展开 ")),i("i",{staticClass:"bi",class:{"bi-chevron-down":!t.unfold,"bi-chevron-up":t.unfold}})])]),i("p",{class:{textHidden:!t.unfold}},[t._v(t._s(t.movieDataList.dra))])]):t._e(),t.isShow?i("div",{staticClass:"cast"},[t._m(0),i("div",{staticClass:"miBox"},[i("div",{staticClass:"miList"},[t._l(t.castList,(function(s,a){return[s.desc?i("div",{key:a,staticClass:"castItem"},[i("div",{staticClass:"imgBox"},[i("img",{attrs:{src:s.avatar.replace("w.h","80.112"),alt:""}})]),i("span",{staticClass:"cname"},[t._v(t._s(s.cnm))]),i("span",{staticClass:"crole"},[t._v(t._s(s.desc))])]):t._e()]}))],2)])]):t._e(),t.videoList.length?i("div",{staticClass:"videoRecommend"},[t._m(1),i("div",{staticClass:"miBox"},[i("div",{staticClass:"miList"},t._l(t.videoList,(function(t){return i("div",{key:t.video.id,staticClass:"vrItem"},[i("div",{staticClass:"imgBox"},[i("img",{attrs:{src:t.video.imgUrl,alt:""}}),i("i",{staticClass:"bi bi-play-circle"})])])})),0)])]):t._e(),t.movieDataList.pn?i("div",{staticClass:"stills"},[i("div",{staticClass:"miHeader"},[i("h3",[t._v("剧照")]),i("span",[t._v(t._s("全部"+t.movieDataList.pn+"张")+" "),i("i",{staticClass:"bi bi-chevron-right"})])]),i("div",{staticClass:"miBox"},[i("div",{staticClass:"miList"},t._l(t.movieDataList.photos,(function(t,s){return i("div",{key:s,staticClass:"stillsItem"},[i("div",{staticClass:"imgBox"},[i("img",{attrs:{src:t.replace("w.h","140.93"),alt:""}})])])})),0)])]):t._e()],1),t.isLoading?i("div",{staticClass:"loadingBox"},[i("comp-loadinganimate",{attrs:{wah:80}})],1):t._e()])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"miHeader"},[i("h3",[t._v("演职人员")]),i("span",[t._v("全部 "),i("i",{staticClass:"bi bi-chevron-right"})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"miHeader"},[i("h3",[t._v("视频推荐")]),i("span",[t._v("全部 "),i("i",{staticClass:"bi bi-chevron-right"})])])}],n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.isShow?i("div",{staticClass:"movieHeader"},[i("div",{staticClass:"imgBox"},[i("img",{attrs:{src:t.img,alt:""}})]),i("div",{staticClass:"movieMsg"},[i("h3",{staticClass:"title"},[t._v(t._s(t.mdata.nm))]),i("span",{staticClass:"e_name"},[t._v(t._s(t.mdata.enm))]),i("span",{staticClass:"cat"},[t._v(t._s(t.cat))]),i("span",{staticClass:"star"},[t._v(t._s(t.star))]),i("span",{staticClass:"data"},[t._v(t._s(t.mdata.onlineDate)+" / "+t._s(t.mdata.dur+"分钟"))]),t._m(0)])]):t._e()},c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"statusBtn"},[i("div",{staticClass:"wish"},[i("i",{staticClass:"bi bi-suit-heart-fill"}),t._v("想看")]),i("div",{staticClass:"watched"},[i("i",{staticClass:"bi bi-star-fill"}),t._v("看过")])])}],o=(i("ac1f"),i("5319"),i("5b81"),{data:function(){return{img:"",cat:"",star:"",isShow:!1}},props:["mdata"],watch:{mdata:function(t){this.isShow=!0,this.img=t.img.replace("w.h","100.138"),this.cat=t.cat.replaceAll(","," / "),this.star=t.star.replaceAll(","," / ")}}}),r=o,l=(i("475f"),i("2877")),d=Object(l["a"])(r,n,c,!1,null,"07f5694f",null),v=d.exports,u=function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.isShow?i("div",{staticClass:"scoreBox"},[i("div",{staticClass:"scoreHeader"},[i("div",{staticClass:"title"},[i("i",{staticClass:"bi bi-graph-up"}),t._v(t._s(t.title))]),t.isWish?i("div",{staticClass:"wish"},[t._v(t._s(t.numChange(t.mdata.wish))+"人想看")]):t._e(),t.isWatched?i("div",{staticClass:"watched"},[t._v(" "+t._s(t.numChange(t.mdata.watched))+"人看过"),i("i",{staticClass:"bi bi-chevron-right"})]):t._e()]),i("div",{staticClass:"scoreContent"},[t.isWish?i("span",{staticClass:"score"},[t._v(t._s(t.mdata.sc.toFixed(1)))]):t._e(),t.isWish?i("div",{staticClass:"star"},t._l(t.starArr,(function(t,s){return i("i",{key:s,class:t})})),0):t._e(),t.isWish?t._e():i("div",{staticClass:"wish_num"},[i("span",[t._v(t._s(t.numChange(t.mdata.wish)))]),t._v(" 人想看 ")])])]):t._e()},f=[],h=(i("d3b7"),i("25f0"),i("fb6a"),i("a15b"),{data:function(){return{title:"",isWish:!0,isWatched:!0,isShow:!1,starArr:[]}},props:["mdata"],watch:{mdata:function(t){this.isShow=!0,"暂无评分"==t.scoreLabel?(this.title="观影人想看",this.isWish=!1,this.isWatched=!1):("猫眼综合评分"==t.scoreLabel&&(this.isWatched=!1),this.starNum(t.sc),this.title=t.scoreLabel.replace("猫眼","观影人"))}},methods:{numChange:function(t){if(t){var s=[],i=t.toString().length,a=t.toString();if(i>3){var e=function t(){s.unshift(a.slice(i-3,i+1)),a=a.slice(0,i-3),i-=3,i>=3&&t()};return e(),i&&s.unshift(a),s.join(",")}return a}},starNum:function(t){for(var s=Math.floor(Math.floor(t)/2),i=Math.ceil(Math.floor(t)/2)-s,a=5-s-i,e=1;e<=s;e++)this.starArr.push("bi bi-star-fill");for(var n=1;n<=i;n++)this.starArr.push("bi bi-star-half");for(var c=1;c<=a;c++)this.starArr.push("bi bi-star")}}}),m=h,_=(i("cd51"),Object(l["a"])(m,u,f,!1,null,"7450ce96",null)),p=_.exports,C=i("9c05"),b={name:"MovieInfo",data:function(){return{movieId:"",movieDataList:[],castList:[],videoList:[],isLoading:!0,isShow:!1,unfold:!1}},components:{CompInfoheader:v,CompInfoscore:p,CompLoadinganimate:C["a"]},methods:{getMovieInfo:function(){var t=this;this.movieId=this.$route.params.id,axios.get("/movie/detail",{params:{movieid:this.movieId}}).then((function(s){200==s.status&&(t.isShow=!0,t.isLoading=!1,t.movieDataList=s.data.movie,t.castList=s.data.celebrities,s.data.feedVideos&&(t.videoList=s.data.feedVideos.feeds),document.title=t.movieDataList.nm+"-观影人电影")}))}},created:function(){this.getMovieInfo()}},g=b,w=(i("a183"),Object(l["a"])(g,a,e,!1,null,"dd4208e6",null));s["default"]=w.exports},fb6a:function(t,s,i){"use strict";var a=i("23e7"),e=i("da84"),n=i("e8b5"),c=i("68ee"),o=i("861d"),r=i("23cb"),l=i("07fa"),d=i("fc6a"),v=i("8418"),u=i("b622"),f=i("1dde"),h=i("f36a"),m=f("slice"),_=u("species"),p=e.Array,C=Math.max;a({target:"Array",proto:!0,forced:!m},{slice:function(t,s){var i,a,e,u=d(this),f=l(u),m=r(t,f),b=r(void 0===s?f:s,f);if(n(u)&&(i=u.constructor,c(i)&&(i===p||n(i.prototype))?i=void 0:o(i)&&(i=i[_],null===i&&(i=void 0)),i===p||void 0===i))return h(u,m,b);for(a=new(void 0===i?p:i)(C(b-m,0)),e=0;m<b;m++,e++)m in u&&v(a,e,u[m]);return a.length=e,a}})}}]);
//# sourceMappingURL=chunk-0bd524a4.93db17b0.js.map