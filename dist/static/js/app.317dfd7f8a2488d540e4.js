webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("3EgV"),s=a.n(r),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},o=a("VU/8")({name:"App"},i,!1,null,null,null).exports,c=a("/ocq"),l=a("Dd8w"),u=a.n(l),d={name:"NavigationDrawer",props:{navList:Array,value:Boolean},computed:{drawerState:function(){return this.value}},watch:{drawerState:function(){this.$emit("input",this.drawerState)}},methods:{routeTo:function(t){this.$router.push(t),this.$store.dispatch("fetchAssetData",this.$route.path.split("/").slice(1))}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticStyle:{"max-height":"none"},attrs:{app:""},model:{value:t.drawerState,callback:function(e){t.drawerState=e},expression:"drawerState"}},[a("v-list",[a("v-list-tile",{on:{click:function(e){t.routeTo("/")}}},[a("v-list-tile-action",[a("v-icon",[t._v("home")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),a("v-divider"),t._v(" "),t._l(t.navList,function(e,n){return[e.children.length>0?a("v-list-group",{key:n,attrs:{"prepend-icon":e.icon}},[a("v-list-tile",{attrs:{slot:"activator"},on:{click:function(a){t.routeTo(e.link)}},slot:"activator"},[a("v-list-tile-title",[t._v(t._s(e.name))])],1),t._v(" "),t._l(e.children,function(e,n){return[e.children.length>0?a("v-list-group",{key:n,attrs:{"sub-group":""}},[a("v-list-tile",{attrs:{slot:"activator"},on:{click:function(a){t.routeTo(e.link)}},slot:"activator"},[a("v-list-tile-title",{staticClass:"indentOne"},[t._v(t._s(e.name))])],1),t._v(" "),t._l(e.children,function(e,n){return a("v-list-tile",{key:n,on:{click:function(a){t.routeTo(e.link)}}},[a("v-list-tile-action"),t._v(" "),a("v-list-tile-content",{staticClass:"indentTwo"},[a("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)})],2):a("v-list-tile",{key:n,on:{click:function(a){t.routeTo(e.link)}}},[a("v-list-tile-action"),t._v(" "),a("v-list-tile-content",{staticClass:"indentOne"},[a("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)]})],2):a("v-list-tile",{key:n,on:{click:function(a){t.routeTo(e.link)}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)]})],2)],1)},staticRenderFns:[]};var p=a("VU/8")(d,v,!1,function(t){a("XWed"),a("SCSu")},"data-v-1911d40c",null).exports,f={name:"Toolbar",computed:{extended:function(){return!!this.subTitle}},props:{subTitle:String,desc:String,zips:Array},methods:{toggleDrawer:function(){this.$emit("toggleDrawer")}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{app:"",dark:"",extended:t.extended,color:"primary"}},[a("v-toolbar-side-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),t._v(" "),t.extended?a("v-toolbar-title",{attrs:{slot:"extension"},slot:"extension"},[a("v-tooltip",{attrs:{bottom:""}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(t.subTitle))]),t._v(" "),a("span",[t._v(t._s(t.desc))])])],1):t._e(),t._v(" "),t.extended?a("v-spacer",{attrs:{slot:"extension"},slot:"extension"}):t._e(),t._v(" "),t.extended&&t.zips?a("v-toolbar-title",{attrs:{slot:"extension"},slot:"extension"},[t._v("Download zips")]):t._e(),t._v(" "),t.extended&&t.zips?a("v-toolbar-items",{attrs:{slot:"extension"},slot:"extension"},t._l(t.zips,function(e,n){return a("v-btn",{key:n,attrs:{flat:"",href:e.link}},[t._v(t._s(e.format))])})):t._e(),t._v(" "),a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"/static/img/edassets.png"}})]),t._v(" "),a("v-toolbar-title",[t._v("ELITE DANGEROUS ASSETS")])],1)},staticRenderFns:[]},h=a("VU/8")(f,m,!1,null,null,null).exports,_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticStyle:{"background-image":"url('/static/img/bg.png')"},attrs:{app:"",absolute:"",height:t.footerHeight,inset:"",color:"primary darken-2",dark:""}},[a("v-layout",{staticStyle:{padding:"0 12px"},attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm3:""}},[a("div",{staticClass:"creditLink",style:t.cssProps},[t._v("\n      Created by CMDR SpyTec and CMDR Garud"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.github.com/SpyTec/EDAssets"}},[t._v("Source code")]),a("br"),t._v(" "),a("a",{attrs:{href:"mailto:spytec@protonmail.ch?subject=[EDAssets]"}},[t._v("Email")]),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WZZZCEZQ7CW36",title:"Only cost is domain"}},[t._v("Donate")]),a("br"),t._v(" "),a("a",{attrs:{href:"https://click.linksynergy.com/fs-bin/click?id=umV0U8vCkV4&offerid=367908.9&type=3&subid=0"}},[t._v("Buy Elite Dangerous here")]),t._v(" "),a("img",{staticStyle:{display:"none !important"},attrs:{src:"https://ad.linksynergy.com/fs-bin/show?id=umV0U8vCkV4&bids=367908.9&type=3&subid=0",width:"1",hidden:"",height:"1",border:"0"}})])]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm9:""}},[a("div",{staticStyle:{"text-align":"center"}},[t._v("© SpyTec 2015-2018. This website was created using assets and imagery from Elite Dangerous, with the permission of Frontier Developments plc, for non-commercial purposes. It is not endorsed by nor reflects the views or opinions of Frontier Developments and no employee of Frontier Developments was involved in the making of it.")])])],1),t._v(" "),a("img",{staticClass:"logoImage",style:"max-height: "+this.footerHeight+"px;",attrs:{src:"/static/img/spytec.png",alt:""}})],1)},staticRenderFns:[]};var g=a("VU/8")({name:"Footer",data:function(){return{footerHeight:152}},computed:{cssProps:function(){return{"--accent":this.$vuetify.theme.accent,"--accent-light":this.$vuetify.theme.accentLight}}}},_,!1,function(t){a("ZITG")},"data-v-4251f188",null).exports,y=a("NYxO"),x={name:"MainLayout",data:function(){return{drawer:!0,fullHeight:!1}},computed:u()({},Object(y.b)({navLists:function(t){return t.types.navLists},currentSelected:function(t){return t.types.currentSelected}}),{containerStyle:function(){return"/"===this.$route.path?{padding:"0px"}:void 0},fillHeight:function(){return"/"===this.$route.path}}),components:{"ed-navigation-drawer":p,"ed-toolbar":h,"ed-footer":g},created:function(){var t=this;this.$store.dispatch("fetchTypes").then(function(){t.$store.dispatch("fetchAssetData",t.$route.path.split("/").slice(1))})}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("ed-navigation-drawer",{attrs:{"nav-list":t.navLists},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),t._v(" "),a("ed-toolbar",{attrs:{subTitle:t.currentSelected.name,desc:t.currentSelected.desc,zips:t.currentSelected.zips},on:{toggleDrawer:function(e){t.drawer=!t.drawer}}}),t._v(" "),a("v-content",[a("v-container",{style:t.containerStyle,attrs:{fluid:"","grid-list-lg":"","fill-height":t.fillHeight}},[a("router-view")],1)],1),t._v(" "),a("ed-footer")],1)},staticRenderFns:[]},w=a("VU/8")(x,b,!1,null,null,null).exports,k={name:"Home",computed:u()({},Object(y.b)({carouselImages:function(t){return t.types.carouselImages}}))},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{column:"","align-content-space-around":"","justify-space-around":"","d-flex":""}},[e("v-flex",{staticStyle:{padding:"0px"},attrs:{xs4:""}},[e("v-carousel",{attrs:{"hide-controls":"","hide-delimiters":""}},this._l(this.carouselImages,function(t,a){return e("v-carousel-item",{key:a,attrs:{src:t}})}))],1),this._v(" "),e("v-flex",{attrs:{xs4:"","align-center":"","justify-center":"","d-flex":""}},[e("img",{staticStyle:{flex:"0 1 auto!important"},attrs:{src:"/static/img/edassets_larger.png"}})]),this._v(" "),e("v-flex",{staticStyle:{margin:"0px 24px"},attrs:{xs4:""}},[e("h1",[this._v("Elite Dangerous Assets")]),this._v(" "),e("h3",[this._v("All Elite Dangerous assets and content in one place to download")])])],1)],1)},staticRenderFns:[]};var D=a("VU/8")(k,S,!1,function(t){a("oGLr")},"data-v-40148f16",null).exports,C="Colour copied to clipboard",T="Could not copy. Please copy manually",A={name:"AssetCard",data:function(){return{show:!1,copyStatusSnackBar:!1,copyStatusText:C,snackbarTimeout:2e3}},computed:{dummyInputId:function(){var t=this.cardData.name.replace(/[^\w]/g,"").toLowerCase();return t[0].match(/[A-Z]/gi)?t:"x"+t}},props:{cardData:Object},methods:{copyColour:function(){var t=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0),e=document.querySelector("#"+this.dummyInputId);e.style.position="absolute",e.style.left="-9999px",e.setAttribute("type","text"),e.select();try{document.execCommand("copy"),this.copyStatusText=C,this.copyStatusSnackBar=!0}catch(t){this.copyStatusText=T,this.copyStatusSnackBar=!0}t&&(e.setAttribute("type","hidden"),document.getSelection().removeAllRanges(),document.getSelection().addRange(t))}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",[t._v(t._s(t.cardData.name))])])]),t._v(" "),t.cardData.colour?a("v-card-media",{style:"backgroundColor:"+t.cardData.colour,attrs:{height:"200px",contain:""}}):t.cardData.webm?a("v-card-media",{attrs:{height:"200px",contain:""}},[a("video",{staticStyle:{margin:"auto"},attrs:{loop:"",autoplay:""}},[a("source",{attrs:{src:t.cardData.preview,type:"video/webm"}})])]):t.cardData.svg?a("v-card-media",{attrs:{height:"200px",contain:""}},[a("object",{staticClass:"svgAsset",attrs:{type:"image/svg+xml",data:t.cardData.preview}})]):t.cardData.preview?a("v-card-media",{attrs:{src:t.cardData.preview,height:"200px",contain:""}}):t._e(),t._v(" "),t.cardData.fanmade?a("v-chip",{attrs:{color:"accent","text-color":"black"}},[t._v("Fanmade Asset")]):t._e(),t._v(" "),a("v-card-actions",[t._l(t.cardData.formats,function(e,n){return a("v-btn",{key:n,attrs:{color:"secondary",flat:"",href:e.link,target:"_blank"}},[t._v("\n      "+t._s(e.format)+"\n    ")])}),t._v(" "),t.cardData.colour?a("v-btn",{style:"color:"+t.cardData.colour,attrs:{flat:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyColour(e)}}},[t._v("\n      "+t._s(t.cardData.colour)+"\n      "),a("input",{attrs:{type:"hidden",id:t.dummyInputId,readonly:""},domProps:{value:t.cardData.colour}}),t._v(" "),a("v-snackbar",{attrs:{bottom:"",timeout:t.snackbarTimeout},model:{value:t.copyStatusSnackBar,callback:function(e){t.copyStatusSnackBar=e},expression:"copyStatusSnackBar"}},[t._v("\n        "+t._s(t.copyStatusText)+"\n      ")])],1):t._e(),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],2),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-card-text",{staticClass:"wrapCardText"},[t._v("\n      "+t._s(t.cardData.desc)+"\n    ")]),t._v(" "),t.cardData.designer_info?a("v-card-text",{staticClass:"wrapCardText noPadding"},[a("h4",[t._v("Created By")])]):t._e(),t._v(" "),t._l(t.cardData.designer_info,function(e,n){return a("v-card-text",{key:n,staticClass:"wrapCardText bottomPadding"},[a("a",{attrs:{href:e.url}},[t._v(t._s(e.name))])])})],2)],1)},staticRenderFns:[]};var L=a("VU/8")(A,E,!1,function(t){a("fnrL")},"data-v-58011372",null).exports,$={name:"AssetDisplay",computed:u()({},Object(y.b)({currentAssetData:function(t){return t.types.currentAssetData}})),components:{"ed-asset-card":L}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{wrap:""}},this._l(this.currentAssetData.types,function(t,a){return e("v-flex",{key:a,attrs:{xs12:"",sm6:"",md4:"",lg3:"",xl2:""}},[e("ed-asset-card",{attrs:{cardData:t}})],1)}))},staticRenderFns:[]},R=a("VU/8")($,I,!1,null,null,null).exports;n.default.use(c.a);var F=new c.a({routes:[{path:"/",component:w,children:[{path:"",component:D},{path:"**",component:R}]}]}),V=a("g4PW"),z=a.n(V),j=a("Xxa5"),H=a.n(j),U=a("exGp"),N=a.n(U),O=a("mtWM"),P=a.n(O),B={setTypes:function(t,e){t.types=e},setNavLists:function(t,e){t.navLists=[],e.forEach(function(e){t.navLists.push({name:e.name,children:[],link:"/"+M(e.name),icon:e.icon})})},setCurrentAssetData:function(t,e){t.currentAssetData=e},setCurrentSelected:function(t,e){t.currentSelected=e},setCarouselImages:function(t){for(var e=[],a=0;a<12;a++)e.push(a+1);t.carouselImages=e.sort(function(){return.5-Math.random()}).slice(0,5).map(function(t){return"/static/img/carousel/"+t+".jpg"})},addNavList:function(t,e){e.subcats.forEach(function(t){e.root[e.index].children.push({name:t.name,children:[],link:e.root[e.index].link+"/"+M(t.name)})})}},G={fetchTypes:function(t){var e=this,a=t.commit,n=t.state,r=t.dispatch;return N()(H.a.mark(function t(){var s,i;return H.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.a.get("/static/types.json");case 3:s=t.sent,i=s.data.sort(function(t,e){return t.name>e.name?1:t.name<e.name?-1:0}),a("setTypes",i),a("setNavLists",n.types),a("setCarouselImages"),n.types.forEach(function(t,e){r("fetchSubTypes",{file:t.file,index:e,root:n.navLists})}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}},t,e,[[0,11]])}))()},fetchSubTypes:function(t,e){var a=this,n=t.commit,r=t.dispatch;return N()(H.a.mark(function t(){var s;return H.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.get("/static/data/"+e.file);case 2:(s=t.sent).data[0].subcats&&(n("addNavList",{index:e.index,subcats:s.data[0].subcats,root:e.root}),s.data[0].subcats.forEach(function(t,a){r("fetchSubTypes",{file:t.file,index:a,root:e.root[e.index].children})}));case 4:case"end":return t.stop()}},t,a)}))()},fetchAssetData:function(t,e){var a=this,n=t.commit,r=t.state;return N()(H.a.mark(function t(){var s,i,o,c,l,u,d,v;return H.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s=r.types.find(function(t){return M(t.name)===e[0]}),i=z()(s,void 0)?void 0:s.file,o=z()(s,void 0)?void 0:s.zipurl,c=z()(s,void 0)?void 0:s.name,l=z()(s,void 0)?void 0:s.desc,u={},z()(i,void 0)){t.next=17;break}return t.next=9,P.a.get("/static/data/"+i);case 9:u=t.sent.data[0],d=H.a.mark(function t(n){return H.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!u.subcats){t.next=9;break}return s=u.subcats.find(function(t){return M(t.name)===e[n]}),i=z()(s,void 0)?void 0:s.file,o=z()(s,void 0)?void 0:s.zipurl,c=z()(s,void 0)?void 0:s.name,l=z()(s,void 0)?void 0:s.desc,t.next=8,P.a.get("/static/data/"+i);case 8:u=t.sent.data[0];case 9:case"end":return t.stop()}},t,a)}),v=1;case 12:if(!(v<e.length)){t.next=17;break}return t.delegateYield(d(v),"t0",14);case 14:v++,t.next=12;break;case 17:n("setCurrentAssetData",u),n("setCurrentSelected",{zips:o,name:c,desc:l});case 19:case"end":return t.stop()}},t,a)}))()}},M=function(t){return t.replace(/[^\w]/g,"").toLowerCase()},W={state:{types:[],navLists:[],currentAssetData:{},currentSelected:{},carouselImages:[]},mutations:B,actions:G};n.default.use(y.a);var Z=new y.a.Store({modules:{types:W}}),X=(a("7zck"),a("IHMs")),q=a.n(X);n.default.config.productionTip=!1,n.default.use(s.a,{theme:{primary:q.a.blueGrey.darken2,secondary:q.a.cyan.darken3,accent:q.a.cyan.accent4,accentLight:q.a.cyan.accent2}}),new n.default({el:"#app",store:Z,router:F,components:{App:o},template:"<App/>"})},SCSu:function(t,e){},XWed:function(t,e){},ZITG:function(t,e){},fnrL:function(t,e){},oGLr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.317dfd7f8a2488d540e4.js.map