(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40ab16e2"],{"159b":function(t,i,s){var a=s("da84"),e=s("fdbc"),c=s("785a"),n=s("17c2"),l=s("9112"),d=function(t){if(t&&t.forEach!==n)try{l(t,"forEach",n)}catch(i){t.forEach=n}};for(var r in e)e[r]&&d(a[r]&&a[r].prototype);d(c)},"17c2":function(t,i,s){"use strict";var a=s("b727").forEach,e=s("a640"),c=e("forEach");t.exports=c?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},2460:function(t,i,s){"use strict";s("e4e5")},5857:function(t,i,s){},6535:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"cinema",staticClass:"cinema"},[s("comp-cinemanav",{attrs:{cid:t.cityId},on:{"get-data":t.getChildData}}),s("div",{staticClass:"cinemaList"},[t._l(t.cinemaList,(function(t){return s("comp-cinemacard",{key:t.cinemaId,attrs:{citem:t}})})),s("div",{staticClass:"more"},[t._v(t._s(t.moreTip))])],2)],1)},e=[],c=s("2909"),n=(s("99af"),function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"navBox"},[s("div",{staticClass:"navBg"},[s("div",{staticClass:"cinemaNav"},t._l(t.navArr,(function(i,a){return s("div",{key:a,class:i.class,on:{click:function(i){return t.addActive(a)}}},[s("span",{staticClass:"title"},[t._v(t._s(i.title))]),s("i",{staticClass:"bi",class:i.iClass})])})),0),t.page?s("div",{staticClass:"content"},[1==t.page?s("div",{staticClass:"total"},[s("div",{staticClass:"tabNav"},[s("div",{class:{active:0==t.tabIndex},on:{click:function(i){t.tabIndex=0}}},[t._v(" 商区 ")]),s("div",{class:{active:1==t.tabIndex},on:{click:function(i){t.tabIndex=1}}},[t._v(" 地铁站 ")])]),s("div",{staticClass:"tabBody"},[s("div",{staticClass:"tabLiftBox"},[s("ul",{staticClass:"tabLiftList"},t._l(t.totalShow,(function(i,a){return s("li",{key:i.id,class:{active:t.tabAcitve==a},on:{click:function(i){t.tabAcitveClick(a),t.tabAcitve=a}}},[t._v(" "+t._s(i.name)+"("+t._s(i.count)+") ")])})),0)]),s("div",{staticClass:"tabRightBox"},[s("ul",{staticClass:"tabRightList"},t._l(t.subItems,(function(i){return s("li",{key:i.id,class:{active:t.tab2Acitve==i.id},on:{click:function(s){t.tab2AcitveClick(i.id),t.tab2Acitve=i.id,t.navArr[0].title=-1==i.id?t.districtName:i.name}}},[s("span",[t._v(t._s(i.name))]),s("span",[t._v(t._s(i.count))])])})),0)])])]):t._e(),2==t.page?s("div",{staticClass:"brand"},[s("div",{staticClass:"brandList"},t._l(t.brand,(function(i){return s("div",{key:i.id,staticClass:"brandItem",class:{active:t.tab3Acitve==i.id},on:{click:function(s){t.tab3Acitve=i.id,t.tab3AcitveClick(i.id),t.navArr[1].title=-1==i.id?"品牌":i.name}}},[s("span",[t._v(t._s(i.name))]),s("span",[t._v(t._s(i.count))])])})),0)]):t._e(),3==t.page?s("div",{staticClass:"feature"},[s("div",{staticClass:"featureBox"},[t.service.length?s("div",{staticClass:"fun"},[s("h3",[t._v("特色功能")]),s("ul",{staticClass:"splist"},t._l(t.service,(function(i){return s("li",{key:i.id,class:{active:t.tab4Acitve==i.id},on:{click:function(s){t.tab4Acitve=i.id,t.tab4AcitveClick(i.id)}}},[t._v(" "+t._s(i.name)+" ")])})),0)]):t._e(),t.hallType.length?s("div",{staticClass:"hall"},[s("h3",[t._v("特殊厅")]),s("ul",{staticClass:"splist"},t._l(t.hallType,(function(i){return s("li",{key:i.id,class:{active:t.tab5Acitve==i.id},on:{click:function(s){t.tab5Acitve=i.id,t.tab5AcitveClick(i.id)}}},[t._v(" "+t._s(i.name)+" ")])})),0)]):t._e()]),s("div",{staticClass:"btnBox"},[s("div",{staticClass:"reset",on:{click:function(i){t.hallTypeId=t.serviceId=t.tab4Acitve=t.tab5Acitve=-1}}},[t._v("重置")]),s("div",{staticClass:"confirm",on:{click:function(i){t.dataProcessing(),t.maskClick()}}},[t._v("确定")])])]):t._e()]):t._e()]),t.isMask?s("div",{staticClass:"mask",on:{click:t.maskClick}}):t._e()])}),l=[],d=(s("d3b7"),s("159b"),s("b0c0"),{data:function(){return{navArr:[{title:"全城",iClass:"bi-caret-down-fill",class:""},{title:"品牌",iClass:"bi-caret-down-fill",class:""},{title:"特色",iClass:"bi-caret-down-fill",class:""}],isMask:!1,page:0,tabIndex:0,cityId:1,tabAcitve:0,tab2Acitve:-1,tab3Acitve:-1,tab4Acitve:-1,tab5Acitve:-1,districtName:"",district:[],subway:[],totalShow:[],subItems:[],brand:[],service:[],hallType:[],hallTypeId:-1,brandId:-1,serviceId:-1,districtId:-1,areaId:-1,lineId:-1,stationId:-1}},props:["cid"],methods:{addActive:function(t){var i=this;"active"==this.navArr[t].class?(this.navArr[t].class="",this.navArr[t].iClass="bi-caret-down-fill",this.isMask=!1,this.page=0,this.tabIndex=0):(this.navArr.forEach((function(t){t.class="",t.iClass="bi-caret-down-fill",i.page=0,i.tabIndex=0})),this.navArr[t].class="active",this.navArr[t].iClass="bi-caret-up-fill",this.isMask=!0,this.page=t+1,0==this.totalShow.length&&this.getTotalData())},maskClick:function(){this.navArr.forEach((function(t){t.class="",t.iClass="bi-caret-down-fill"})),this.isMask=!1,this.page=0,this.tabIndex=0},dataProcessing:function(){this.$emit("get-data",{districtId:this.districtId,lineId:this.lineId,stationId:this.stationId,hallType:this.hallTypeId,brandId:this.brandId,serviceId:this.serviceId,areaId:this.areaId})},getTotalData:function(){var t=this;axios.get("/index/filterCinemas",{params:{ci:this.cid}}).then((function(i){200==i.status&&(t.totalShow=i.data.district.subItems,t.district=i.data.district.subItems,t.subway=i.data.subway.subItems,t.brand=i.data.brand.subItems,t.service=i.data.service.subItems,t.hallType=i.data.hallType.subItems)}))},tabAcitveClick:function(t){0==t?(this.lineId=-1,this.districtId=-1,this.stationId=-1,this.areaId=-1,this.tab2Acitve=-1,this.navArr[0].title="全城",this.dataProcessing(),this.maskClick()):(this.districtName=this.totalShow[t].name,this.subItems=this.totalShow[t].subItems,0==this.tabIndex?(this.districtId=this.totalShow[t].id,this.lineId=-1):(this.lineId=this.totalShow[t].id,this.districtId=-1))},tab2AcitveClick:function(t){0==this.tabIndex?(this.areaId=t,this.stationId=-1):(this.stationId=t,this.areaId=-1),this.dataProcessing(),this.maskClick()},tab3AcitveClick:function(t){this.brandId=t,this.dataProcessing(),this.maskClick()},tab4AcitveClick:function(t){this.serviceId=t},tab5AcitveClick:function(t){this.hallTypeId=t}},watch:{tabIndex:function(t){t?(this.totalShow=this.subway,this.tabAcitve=0,this.tab2Acitve=-1,this.subItems=this.totalShow[0].subItems):(this.totalShow=this.district,this.tabAcitve=0,this.tab2Acitve=-1,this.subItems=this.totalShow[0].subItems)}}}),r=d,o=(s("8d07"),s("2877")),h=Object(o["a"])(r,n,l,!1,null,"4b498156",null),v=h.exports,u=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"ci_item"},[s("div",{staticClass:"ci_title"},[s("h3",{staticClass:"ci_name"},[t._v(t._s(t.citem.title))]),s("span",[s("span",[t._v(t._s(t.citem.price.n))]),t._v(t._s(" "+t.citem.price.q))])]),s("div",{staticClass:"ci_info"},[s("p",{staticClass:"ci_address"},[t._v(t._s(t.citem.location))]),s("span",{staticClass:"ci_distance"},[t._v(t._s(t.citem.distance))])]),t.citem.services.length?s("div",{staticClass:"ci_tab"},t._l(t.citem.services,(function(i,a){return s("i",{key:a,class:i.code},[t._v(t._s(i.text))])})),0):t._e(),t.citem.discount.length?s("div",{staticClass:"ci_tip"},[t._v(" "+t._s(t.citem.discount[0].text)+" ")]):t._e()])},I=[],b={props:["citem"]},f=b,m=(s("8b80"),Object(o["a"])(f,u,I,!1,null,null,null)),C=m.exports,p={data:function(){return{limit:10,cityId:1,offset:0,day:"2021-12-23",hallType:-1,brandId:-1,serviceId:-1,districtId:-1,areaId:-1,lineId:-1,stationId:-1,cinemaList:[],moreTip:"加载中...",isMore:!0}},components:{CompCinemanav:v,CompCinemacard:C},methods:{getLocalCinema:function(){var t=this;axios.get("/index/moreCinemas",{params:{limit:this.limit,cityId:this.cityId,day:this.day,hallType:this.hallType,brandId:this.brandId,serviceId:this.serviceId,districtId:this.districtId,areaId:this.areaId,lineId:this.lineId,stationId:this.stationId,updateShowDay:!0,offset:this.offset}}).then((function(i){200==i.status&&(t.cinemaList=i.data)}))},getMoreCinema:function(){var t=this;this.isMore&&(this.isMore=!1,axios.get("/index/moreCinemas",{params:{limit:this.limit,cityId:this.cityId,day:this.day,hallType:this.hallType,brandId:this.brandId,serviceId:this.serviceId,districtId:this.districtId,areaId:this.areaId,lineId:this.lineId,stationId:this.stationId,updateShowDay:!0,offset:this.offset}}).then((function(i){200==i.status&&(t.isMore=!0,t.cinemaList=[].concat(Object(c["a"])(t.cinemaList),Object(c["a"])(i.data)))})))},handleScroll:function(){var t=this;this.$nextTick((function(){if(t.$refs.cinema){var i=t.$refs.cinema.clientHeight,s=t.$refs.cinema.scrollTop,a=t.$refs.cinema.scrollHeight;setTimeout((function(){i+s==a&&(t.cinemaList.length%t.limit?t.moreTip="没有更多了/(ㄒoㄒ)/~~":(t.moreTip="加载中...",t.offset+=10,t.getMoreCinema()))}),300)}}))},getChildData:function(t){this.districtId=t.districtId,this.lineId=t.lineId,this.stationId=t.stationId,this.hallType=t.hallType,this.brandId=t.brandId,this.serviceId=t.serviceId,this.areaId=t.areaId,this.limit=20,this.getLocalCinema()}},created:function(){localStorage.getItem("localCity")?this.cityId=JSON.parse(localStorage.getItem("localCity")).id:this.cityId=this.cityId,this.getLocalCinema()},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},watch:{cinemaList:function(t){t.length<20?this.moreTip="没有更多了/(ㄒoㄒ)/~~":this.moreTip="加载中..."}}},_=p,y=(s("2460"),Object(o["a"])(_,a,e,!1,null,"b4e17a1a",null));i["default"]=y.exports},"8b80":function(t,i,s){"use strict";s("5857")},"8d07":function(t,i,s){"use strict";s("9413")},9413:function(t,i,s){},a640:function(t,i,s){"use strict";var a=s("d039");t.exports=function(t,i){var s=[][t];return!!s&&a((function(){s.call(null,i||function(){throw 1},1)}))}},e4e5:function(t,i,s){}}]);
//# sourceMappingURL=chunk-40ab16e2.645a2533.js.map