(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{286:function(t,e,r){var content=r(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("dc093880",content,!0,{sourceMap:!1})},311:function(t,e,r){"use strict";r(10),r(12),r(11),r(5),r(16),r(13),r(17);var n=r(2),o=(r(29),r(96));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:m(m({},Object(o.b)("settings",["settings_data"])),{},{today:function(){var t=new Date;return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}}),name:"DefaultLayout",created:function(){this.$store.dispatch("settings/view"),this.account_type=localStorage.getItem("account_type")},data:function(){return{drawer:!1,isEdit:!1,register:{},account_type:"",isOpenLogout:!1,clipped:!1,fixed:!1,items_student:[{icon:"mdi-apps",title:"Dashboard",to:"/student/dashboard"},{icon:"mdi-bullhorn",title:"Announcement",to:"/student/announcement"},{icon:"mdi-calendar",title:"Events",to:"/student/events"},{icon:"mdi-account-tie",title:"Job Posting",to:"/student/job_posting"},{icon:"mdi-account",title:"Alumni Profiling",to:"/student/information"},{icon:"mdi-magnify",title:"Search",to:"/student/search"}],items:[{icon:"mdi-apps",title:"Dashboard",to:"/dashboard"},{icon:"mdi-bullhorn",title:"Announcement",to:"/head/announcement"},{icon:"mdi-calendar",title:"Events",to:"/head/events"},{icon:"mdi-account-tie",title:"Job Posting",to:"/head/job_posting"},{icon:"mdi-account",title:"Program Head",to:"/head/information"},{icon:"mdi-account-question",title:"Request",to:"/head/request"},{icon:"mdi-poll",title:"Analytical Report",to:"/head/report"}],items_admin:[{icon:"mdi-apps",title:"Dashboard",to:"/admin/dashboard"},{icon:"mdi-account",title:"Program Head",to:"/admin/program_head"},{icon:"mdi-account",title:"Admin Information",to:"/admin/information"},{icon:"mdi-school",title:"Send OTP",to:"/admin/otp"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},methods:{gotoRoute:function(t){window.location=t},submitHandler:function(){this.settings_data.length>0?this.$store.dispatch("settings/edit",{id:this.settings_data[0].id,semester:this.register.semester}):this.$store.dispatch("settings/add",this.register),location.reload()},confirm:function(){localStorage.clear(),this.$auth.logout(),this.isOpenLogout=!1}}},f=r(100),l=r(150),v=r.n(l),h=r(507),x=r(515),w=r(217),_=r(496),$=r(218),R=r(190),k=r(508),E=r(516),O=r(509),j=r(510),y=r(219),T=r(220),V=r(142),S=r(221),C=r(121),N=r(511),D=r(512),L=r(513),A=r(514),P=r(497),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-dialog",{attrs:{width:"500"},model:{value:t.isEdit,callback:function(e){t.isEdit=e},expression:"isEdit"}},[r("v-card",{staticClass:"pa-5"},[r("div",[t._v("Year and Semester")]),t._v(" "),r("div",[r("v-text-field",{attrs:{outlined:"",dense:""},model:{value:t.register.semester,callback:function(e){t.$set(t.register,"semester",e)},expression:"register.semester"}})],1),t._v(" "),r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[r("v-btn",{on:{click:function(e){t.isEdit=!1}}},[t._v(" Cancel ")])],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{color:""},on:{click:t.submitHandler}},[t._v("Save Changes")])],1)],1)],1)])],1),t._v(" "),r("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.isOpenLogout,callback:function(e){t.isOpenLogout=e},expression:"isOpenLogout"}},[r("v-card",{staticClass:"pa-10 rounded-xl"},[r("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("Logout User")]),t._v(" "),r("div",{staticClass:"pa-10",attrs:{align:"center"}},[t._v("Would you like to logout?")]),t._v(" "),r("v-card-actions",[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{align:"end"}},[r("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.isOpenLogout=!1}}},[t._v("\n              Cancel\n            ")])],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{color:"success",text:""},on:{click:t.confirm}},[t._v(" Logout ")])],1)],1)],1)],1)],1),t._v(" "),"login"!=t.$route.name&&t.$auth.loggedIn?r("v-app-bar",{attrs:{color:"primary","clipped-left":t.clipped,fixed:"",app:""}},[r("div"),t._v(" "),t._l("Admin"==t.$auth.user.account_type?t.items_admin:"Head"==t.$auth.user.account_type?t.items:t.items_student,(function(e){return r("div",{staticClass:"px-10"},[r("v-row",[r("v-col",[r("v-icon",{attrs:{color:"white",router:""},on:{click:function(r){return t.gotoRoute(e.to)}}},[t._v("\n        "+t._s(e.icon)+"\n      ")]),t._v(" "),r("div",{staticClass:"white--text"},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)],1)],1)})),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"pr-4 white--text"},[t._v("\n      "+t._s(t.today)+"\n    ")]),t._v(" "),t.settings_data.length>0?r("div",{staticClass:"white--text"},[t._v("\n      "+t._s(t.settings_data[0].semester)+"\n    ")]):t._e(),t._v(" "),t.$auth.loggedIn?r("div",{staticClass:"white--text mr-5"},["Admin"==t.$auth.user.account_type?r("v-icon",{staticClass:"pl-5",attrs:{color:"white"},on:{click:function(e){t.isEdit=!0}}},[t._v("mdi-pencil")]):t._e()],1):t._e(),t._v(" "),r("div",{},["https://ust-fedesk.s3.amazonaws.com/uploads/users_placeholder.png"==t.$auth.user.image?r("v-avatar",[r("img",{attrs:{src:"/placeholder.gif"}})]):r("v-avatar",[r("img",{attrs:{src:t.$auth.user.image,alt:"No Image"}})])],1),t._v(" "),r("div",{staticClass:"pl-10"},[r("v-icon",{staticClass:"pr-2",attrs:{color:"white"},on:{click:function(e){t.isOpenLogout=!0}}},[t._v("mdi-logout")])],1)],2):t._e(),t._v(" "),r("v-main",[r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("Nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v(" mdi-repeat ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VApp:h.a,VAppBar:x.a,VAvatar:w.a,VBtn:_.a,VCard:$.a,VCardActions:R.a,VCol:k.a,VContainer:E.a,VDialog:O.a,VFooter:j.a,VIcon:y.a,VList:T.a,VListItem:V.a,VListItemAction:S.a,VListItemTitle:C.b,VMain:N.a,VNavigationDrawer:D.a,VRow:L.a,VSpacer:A.a,VTextField:P.a})},324:function(t,e,r){r(325),t.exports=r(326)},364:function(t,e,r){"use strict";r(286)},365:function(t,e,r){var n=r(19)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},370:function(t,e,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("168108f4",content,!0,{sourceMap:!1})},371:function(t,e,r){var n=r(19)(!1);n.push([t.i,'html{font-family:"Avenir"}.pointer{cursor:pointer}.pointer:hover{cursor:pointer;font-weight:700;color:primary}.centralized-item{display:flex;justify-content:center;align-content:center}.v-leave-active{transition:opacity .5s ease}.bounce{display:inline-block;-webkit-animation:fadeInLeft;animation:fadeInLeft;-webkit-animation-duration:1s;animation-duration:1s}',""]),t.exports=n},447:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(42),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/announcement/",data,{headers:{"Content-Type":"multipart/form-data"}});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},delete:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$delete("/announcement/".concat(data.id,"/"));case 3:r.sent;case 4:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$put("/announcement/".concat(data.get("id"),"/"),data,{headers:{"Content-Type":"multipart/form-data"}});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/announcement/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},448:function(t,e,r){"use strict";r.r(e);e.default={SET_EVENT:function(t,e){t.announcement_data=e}}},449:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},announcement_data:[]}}},450:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(42),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/events/",data,{headers:{"Content-Type":"multipart/form-data"}});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$put("/events/".concat(data.get("id"),"/"),data,{headers:{"Content-Type":"multipart/form-data"}});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},delete:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$delete("/events/".concat(data.id,"/"));case 3:r.sent;case 4:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/events/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},451:function(t,e,r){"use strict";r.r(e);e.default={SET_EVENT:function(t,e){t.event_data=e}}},452:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},event_data:[]}}},453:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(42),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/job_posting/",data,{headers:{"Content-Type":"multipart/form-data"}});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},delete:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$delete("/job_posting/".concat(data.id,"/"));case 3:r.sent;case 4:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$put("/job_posting/".concat(data.get("id"),"/"),data,{headers:{"Content-Type":"multipart/form-data"}});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/job_posting/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()},notify:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$post("/notify/",data);case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},454:function(t,e,r){"use strict";r.r(e);e.default={SET_EVENT:function(t,e){t.job_posting_data=e}}},455:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},job_posting_data:[]}}},456:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(42),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/report/",data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},announcement_view:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/report/",{user_id:e.$auth.user.id,category:"Announcement"});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},event_view:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/report/",{user_id:e.$auth.user.id,category:"Event"});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},posting_view:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/report/",{user_id:e.$auth.user.id,category:"Post"});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$put("/report/".concat(data.id,"/"),data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/report/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},457:function(t,e,r){"use strict";r.r(e);e.default={SET_EVENT:function(t,e){t.report_data=e}}},458:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},report_data:[]}}},459:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(42),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/reset/",data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$put("/reset/".concat(data.id,"/"),data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},delete:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$delete("/reset/".concat(data.id,"/"));case 3:r.sent;case 4:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/reset/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},460:function(t,e,r){"use strict";r.r(e);e.default={SET_EVENT:function(t,e){t.reset_data=e}}},461:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},reset_data:[]}}},462:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(42),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/settings/",data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$put("/settings/".concat(data.id,"/"),data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/settings/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},463:function(t,e,r){"use strict";r.r(e);e.default={SET_EVENT:function(t,e){t.settings_data=e}}},464:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},settings_data:[]}}},465:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(42),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/skills/",data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$put("/skills/".concat(data.id,"/"),data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},delete:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$delete("/skills/".concat(data,"/"));case 3:r.sent;case 4:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/skills/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()},getByUserID:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/skill-get-by-id/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},466:function(t,e,r){"use strict";r.r(e);e.default={SET_EVENT:function(t,e){t.skills_data=e}}},467:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},skills_data:[]}}},468:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(42),{add:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.next=3,r.$axios.$post("/signup/",e);case 3:n.sent;case 4:case"end":return n.stop()}}),n)})))()},addUser:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.next=3,r.$axios.$post("/users/",e);case 3:n.sent;case 4:case"end":return n.stop()}}),n)})))()},edit:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.next=3,r.$axios.$put("/users/".concat(e.id,"/"),e);case 3:n.sent.customer=e;case 5:case"end":return n.stop()}}),n)})))()},reset_password:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.next=3,r.$axios.$post("/reset-password/",e);case 3:n.sent.customer=e;case 5:case"end":return n.stop()}}),n)})))()},otp:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.next=3,r.$axios.$post("/otp/",e);case 3:n.sent.customer=e;case 5:case"end":return n.stop()}}),n)})))()},validate_user:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/validate-user/",data);case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})))()},approval_otp:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.next=3,r.$axios.$post("/approval-otp/",e);case 3:n.sent.customer=e;case 5:case"end":return n.stop()}}),n)})))()},editUserImage:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.next=3,r.$axios.$put("/users/".concat(e.get("id"),"/"),e,{headers:{"Content-Type":"multipart/form-data"}});case 3:n.sent.customer=e;case 5:case"end":return n.stop()}}),n)})))()},delete:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.next=3,r.$axios.$delete("/users/".concat(e.id,"/"),e);case 3:n.sent.customer=e;case 5:case"end":return n.stop()}}),n)})))()},view:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,r.$axios.$get("/users/");case 3:(c=n.sent).customer=e,o("SET_EVENT",c);case 6:case"end":return n.stop()}}),n)})))()},editImage:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.next=3,r.$axios.$put("/users/".concat(e.get("id"),"/"),e,{headers:{"Content-Type":"multipart/form-data"}});case 3:n.sent.customer=e;case 5:case"end":return n.stop()}}),n)})))()}});e.default=o},469:function(t,e,r){"use strict";r.r(e);e.default={ADD_USER:function(t,e){t.customers.unshift(e)},SET_EVENT:function(t,e){t.users=e}}},470:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},users:[],selected_customer:{}}}},471:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(42),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/work/",data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$put("/work/".concat(data.id,"/"),data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},delete:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$delete("/work/".concat(data.id,"/"));case 3:r.sent;case 4:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/work/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()},work:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/work-user/");case 3:o=r.sent,n("SET_EVENT",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},472:function(t,e,r){"use strict";r.r(e);e.default={SET_EVENT:function(t,e){t.work_data=e}}},473:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},work_data:[]}}},94:function(t,e,r){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(364),r(100)),c=r(150),m=r.n(c),d=r(507),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;m()(component,{VApp:d.a})}},[[324,55,8,56]]]);