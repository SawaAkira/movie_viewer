(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0503f51e"],{"0e64":function(t,i,s){},"159b":function(t,i,s){var a=s("da84"),e=s("fdbc"),c=s("785a"),n=s("17c2"),d=s("9112"),l=function(t){if(t&&t.forEach!==n)try{d(t,"forEach",n)}catch(i){t.forEach=n}};for(var o in e)e[o]&&l(a[o]&&a[o].prototype);l(c)},"17c2":function(t,i,s){"use strict";var a=s("b727").forEach,e=s("a640"),c=e("forEach");t.exports=c?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},5857:function(t,i,s){},6535:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"cinema",staticClass:"cinema"},[t.isShow?s("comp-cinemanav",{attrs:{cid:t.cityId},on:{"get-data":t.getChildData}}):t._e(),t.isShow?s("div",{staticClass:"cinemaList"},[t._l(t.cinemaList,(function(i){return s("comp-cinemacard",{key:i.cinemaId,attrs:{citem:i},nativeOn:{click:function(s){return t.toCinemaPage(i.cinemaId)}}})})),s("div",{staticClass:"more"},[t.moreTip?s("comp-loadinganimate",{attrs:{wah:50}}):t._e(),t.moreTip?t._e():s("span",[t._v("没有更多了/(ㄒoㄒ)/~~")])],1)],2):t._e(),t.isLoadingShow?s("div",{staticClass:"loadingBox"},[s("comp-loadinganimate",{attrs:{wah:80}})],1):t._e()],1)},e=[],c=s("2909"),n=(s("99af"),function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"navBox"},[s("div",{staticClass:"navBg"},[s("div",{staticClass:"cinemaNav"},t._l(t.navArr,(function(i,a){return s("div",{key:a,class:i.class,on:{click:function(i){return t.addActive(a)}}},[s("span",{staticClass:"title"},[t._v(t._s(i.title))]),s("i",{staticClass:"bi",class:i.iClass})])})),0),t.page?s("div",{staticClass:"content"},[1==t.page?s("div",{staticClass:"total"},[s("div",{staticClass:"tabNav"},[s("div",{class:{active:0==t.tabIndex},on:{click:function(i){t.tabIndex=0}}},[t._v(" 商区 ")]),s("div",{class:{active:1==t.tabIndex},on:{click:function(i){t.tabIndex=1}}},[t._v(" 地铁站 ")])]),s("div",{staticClass:"tabBody"},[s("div",{staticClass:"tabLiftBox"},[s("ul",{staticClass:"tabLiftList"},t._l(t.totalShow,(function(i,a){return s("li",{key:i.id,class:{active:t.tabAcitve==a},on:{click:function(i){t.tabAcitveClick(a),t.tabAcitve=a}}},[t._v(" "+t._s(i.name)+"("+t._s(i.count)+") ")])})),0)]),s("div",{staticClass:"tabRightBox"},[s("ul",{staticClass:"tabRightList"},t._l(t.subItems,(function(i){return s("li",{key:i.id,class:{active:t.tab2Acitve==i.id},on:{click:function(s){t.tab2AcitveClick(i.id),t.tab2Acitve=i.id,t.navArr[0].title=-1==i.id?t.districtName:i.name}}},[s("span",[t._v(t._s(i.name))]),s("span",[t._v(t._s(i.count))])])})),0)])])]):t._e(),2==t.page?s("div",{staticClass:"brand"},[s("div",{staticClass:"brandList"},t._l(t.brand,(function(i){return s("div",{key:i.id,staticClass:"brandItem",class:{active:t.brandId==i.id},on:{click:function(s){t.brandId=i.id,t.navArr[1].title=-1==i.id?"品牌":i.name,t.dataProcessing(),t.maskClick()}}},[s("span",[t._v(t._s(i.name))]),s("span",[t._v(t._s(i.count))])])})),0)]):t._e(),3==t.page?s("div",{staticClass:"feature"},[s("div",{staticClass:"featureBox"},[t.service.length?s("div",{staticClass:"fun"},[s("h3",[t._v("特色功能")]),s("ul",{staticClass:"splist"},t._l(t.service,(function(i){return s("li",{key:i.id,class:{active:t.serviceId==i.id},on:{click:function(s){t.serviceId=i.id}}},[t._v(" "+t._s(i.name)+" ")])})),0)]):t._e(),t.hallType.length?s("div",{staticClass:"hall"},[s("h3",[t._v("特殊厅")]),s("ul",{staticClass:"splist"},t._l(t.hallType,(function(i){return s("li",{key:i.id,class:{active:t.hallTypeId==i.id},on:{click:function(s){t.hallTypeId=i.id}}},[t._v(" "+t._s(i.name)+" ")])})),0)]):t._e()]),s("div",{staticClass:"btnBox"},[s("div",{staticClass:"reset",on:{click:function(i){t.hallTypeId=t.serviceId=t.tab4Acitve=t.tab5Acitve=-1}}},[t._v("重置")]),s("div",{staticClass:"confirm",on:{click:function(i){t.dataProcessing(),t.maskClick()}}},[t._v("确定")])])]):t._e()]):t._e()]),t.isMask?s("div",{staticClass:"mask",on:{click:t.maskClick}}):t._e()])}),d=[],l=(s("d3b7"),s("159b"),s("b0c0"),{data:function(){return{navArr:[{title:"全城",iClass:"bi-caret-down-fill",class:""},{title:"品牌",iClass:"bi-caret-down-fill",class:""},{title:"特色",iClass:"bi-caret-down-fill",class:""}],isMask:!1,page:0,tabIndex:0,cityId:1,tabAcitve:0,tab2Acitve:-1,districtName:"",district:[],subway:[],totalShow:[],subItems:[],brand:[],service:[],hallType:[],hallTypeId:-1,brandId:-1,serviceId:-1,districtId:-1,areaId:-1,lineId:-1,stationId:-1,pdistrictId:-1,plineId:-1}},props:["cid"],methods:{addActive:function(t){var i=this;"active"==this.navArr[t].class?(this.navArr[t].class="",this.navArr[t].iClass="bi-caret-down-fill",this.isMask=!1,this.page=0,this.tabIndex=0):(this.navArr.forEach((function(t){t.class="",t.iClass="bi-caret-down-fill",i.page=0,i.tabIndex=0})),this.navArr[t].class="active",this.navArr[t].iClass="bi-caret-up-fill",this.isMask=!0,this.page=t+1,0==this.totalShow.length&&this.getTotalData())},maskClick:function(){this.navArr.forEach((function(t){t.class="",t.iClass="bi-caret-down-fill"})),this.isMask=!1,this.page=0,this.tabIndex=0},dataProcessing:function(){this.$emit("get-data",{districtId:this.districtId,lineId:this.lineId,stationId:this.stationId,hallType:this.hallTypeId,brandId:this.brandId,serviceId:this.serviceId,areaId:this.areaId})},getTotalData:function(){var t=this;axios.get("/index/filterCinemas",{params:{ci:this.cid}}).then((function(i){200==i.status&&(t.totalShow=i.data.district.subItems,t.district=i.data.district.subItems,t.subway=i.data.subway.subItems,t.brand=i.data.brand.subItems,t.service=i.data.service.subItems,t.hallType=i.data.hallType.subItems)}))},tabAcitveClick:function(t){0==t?(this.lineId=-1,this.districtId=-1,this.stationId=-1,this.areaId=-1,this.tab2Acitve=-1,this.navArr[0].title="全城",this.dataProcessing(),this.maskClick()):(this.districtName=this.totalShow[t].name,this.subItems=this.totalShow[t].subItems,0==this.tabIndex?(this.pdistrictId=this.totalShow[t].id,this.lineId=-1):(this.plineId=this.totalShow[t].id,this.districtId=-1))},tab2AcitveClick:function(t){0==this.tabIndex?(this.areaId=t,this.stationId=-1,this.districtId=this.pdistrictId):(this.stationId=t,this.areaId=-1,this.lineId=this.plineId),this.dataProcessing(),this.maskClick()}},watch:{tabIndex:function(t){t?(this.totalShow=this.subway,this.tabAcitve=0,this.tab2Acitve=-1,this.subItems=this.totalShow[0].subItems):(this.totalShow=this.district,this.tabAcitve=0,this.tab2Acitve=-1,this.subItems=this.totalShow[0].subItems)}},created:function(){this.getTotalData()}}),o=l,r=(s("dc19"),s("2877")),h=Object(r["a"])(o,n,d,!1,null,"078a0888",null),v=h.exports,u=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"ci_item"},[s("div",{staticClass:"ci_title"},[s("h3",{staticClass:"ci_name"},[t._v(t._s(t.citem.title))]),s("span",[s("span",[t._v(t._s(t.citem.price.n))]),t._v(t._s(" "+t.citem.price.q))])]),s("div",{staticClass:"ci_info"},[s("p",{staticClass:"ci_address"},[t._v(t._s(t.citem.location))]),s("span",{staticClass:"ci_distance"},[t._v(t._s(t.citem.distance))])]),t.citem.services.length?s("div",{staticClass:"ci_tab"},t._l(t.citem.services,(function(i,a){return s("i",{key:a,class:i.code},[t._v(t._s(i.text))])})),0):t._e(),t.citem.discount.length?s("div",{staticClass:"ci_tip"},[t._v(" "+t._s(t.citem.discount[0].text)+" ")]):t._e()])},I=[],m={props:["citem"]},f=m,b=(s("8b80"),Object(r["a"])(f,u,I,!1,null,null,null)),p=b.exports,C=s("9c05"),_={data:function(){return{limit:10,cityId:1,offset:0,day:"2021-12-23",hallType:-1,brandId:-1,serviceId:-1,districtId:-1,areaId:-1,lineId:-1,stationId:-1,cinemaList:[],moreTip:!0,isMore:!0,isLoadingShow:!1,isShow:!0}},components:{CompCinemanav:v,CompCinemacard:p,CompLoadinganimate:C["a"]},methods:{getLocalCinema:function(){var t=this;this.isShow=!1,this.isLoadingShow=!0,axios.get("/index/moreCinemas",{params:{limit:this.limit,cityId:this.cityId,day:this.day,hallType:this.hallType,brandId:this.brandId,serviceId:this.serviceId,districtId:this.districtId,areaId:this.areaId,lineId:this.lineId,stationId:this.stationId,updateShowDay:!0,offset:this.offset}}).then((function(i){200==i.status&&(t.isShow=!0,t.isLoadingShow=!1,t.cinemaList=i.data)}))},getMoreCinema:function(){var t=this;this.isMore&&(this.isMore=!1,axios.get("/index/moreCinemas",{params:{limit:this.limit,cityId:this.cityId,day:this.day,hallType:this.hallType,brandId:this.brandId,serviceId:this.serviceId,districtId:this.districtId,areaId:this.areaId,lineId:this.lineId,stationId:this.stationId,updateShowDay:!0,offset:this.offset}}).then((function(i){200==i.status&&(t.isMore=!0,t.cinemaList=[].concat(Object(c["a"])(t.cinemaList),Object(c["a"])(i.data)))})))},handleScroll:function(){var t=this;this.$nextTick((function(){if(t.$refs.cinema){var i=t.$refs.cinema.clientHeight,s=t.$refs.cinema.scrollTop,a=t.$refs.cinema.scrollHeight;setTimeout((function(){i+s==a&&(t.cinemaList.length%t.limit?t.moreTip=!1:(t.moreTip=!0,t.offset+=10,t.getMoreCinema()))}),300)}}))},getChildData:function(t){this.districtId=t.districtId,this.lineId=t.lineId,this.stationId=t.stationId,this.hallType=t.hallType,this.brandId=t.brandId,this.serviceId=t.serviceId,this.areaId=t.areaId,this.limit=10,this.getLocalCinema()},getDate:function(){var t=new Date;this.day=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},toCinemaPage:function(t){this.$router.push({path:"/cinema",query:{cinemaId:t,ci:this.cityId}})}},created:function(){this.getDate(),localStorage.getItem("localCity")?this.cityId=JSON.parse(localStorage.getItem("localCity")).id:this.cityId=this.cityId,this.getLocalCinema()},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},watch:{cinemaList:function(t){t.length<this.limit?this.moreTip=!1:this.moreTip=!0}}},g=_,y=(s("a42a"),Object(r["a"])(g,a,e,!1,null,"24848cf1",null));i["default"]=y.exports},"8abb":function(t,i,s){},"8b80":function(t,i,s){"use strict";s("5857")},a42a:function(t,i,s){"use strict";s("8abb")},a640:function(t,i,s){"use strict";var a=s("d039");t.exports=function(t,i){var s=[][t];return!!s&&a((function(){s.call(null,i||function(){throw 1},1)}))}},dc19:function(t,i,s){"use strict";s("0e64")}}]);
//# sourceMappingURL=chunk-0503f51e.cffec377.js.map