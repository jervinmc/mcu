(window.webpackJsonp=window.webpackJsonp||[]).push([[50,16,17,25],{697:function(t,n,e){"use strict";e.r(n);var o=e(225),r={methods:{links:function(t){location="".concat(t)}},data:function(){return{post:""}}},c=e(102),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"pa-10"},[t._m(0),t._v(" "),n("div",{staticClass:"pt-5"},[n(o.a,{staticClass:"rounded-xl pa-5",attrs:{elevation:"6"}},[n("div",[n("p",[t._v("This project is developed by three BSIT students as their thesis about designing a web-based that will help the CAS-IT in communicating with the alumni and will help the CAS-IT as well as the alumni coordinator to easily track and modify the alumni profiles. it is significant in improving data tracking of CAS-IT alumni/graduates, CAS-IT announcements, events, job recommendations, and other related CAS-IT programs in a centralized platform. The system could also provide data needed by the CAS-IT for data information on the alumni, and by which method it would address the recognized problems in the tracking of alumni. There are instances that there are big events like intramurals and sports fests, these will lessen the time consumed by posting all the announcements and sending notifications to the members of the web-based tracking system.")])])])],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"text-h5 pb-10"},[t("b",[this._v(" Dashboard")])])}],!1,null,null,null);n.default=component.exports},702:function(t,n,e){"use strict";e.r(n);var o=e(225),r=e(528),c=e(226),l=e(191),d=e(527),h={methods:{links:function(t){location="".concat(t)}}},f=e(102),component=Object(f.a)(h,(function(){var t=this,n=t._self._c;return n(o.a,{staticClass:"d-flex justify-center align-center",attrs:{width:"100vw",color:"#e2cbfe",height:"100"}},[n(d.a,[n(r.a,{staticClass:"black--text",attrs:{"align-self":"center",align:"center"},on:{click:function(n){return t.route("contacts")}}},[n("div",[t._v("\n            Stay In Touch\n        ")]),t._v(" "),n("div",[t._v("\n            https://www.mcu.edu.ph\n        ")]),t._v(" "),n("div",[t._v("\n            student.support@mcu.edu.ph\n        ")])]),t._v(" "),n(r.a,{staticClass:"white--text",attrs:{"align-self":"center",align:"center"}},[n(l.a,{attrs:{src:"/footerlogo.jpeg",height:"100",width:"100"}})],1),t._v(" "),n(r.a,{staticClass:"white--text",staticStyle:{cursor:"pointer"},attrs:{"align-self":"center",align:"center"},on:{click:function(n){t.privacy=!0}}},[n(d.a,[n(r.a,[n(c.a,{on:{click:function(n){return t.links("https://www.facebook.com/MCU1904")}}},[t._v("\n                    mdi-facebook\n                ")])],1),t._v(" "),n(r.a,[n(c.a,{on:{click:function(n){return t.links("https://twitter.com/MCU1904")}}},[t._v("\n                    mdi-twitter\n                ")])],1),t._v(" "),n(r.a,[n(c.a,{on:{click:function(n){return t.links("https://www.instagram.com/mcu1904/")}}},[t._v("\n                    mdi-instagram\n                ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports},723:function(t,n,e){"use strict";e.r(n);var o=e(514),r=e(225),c=e(526),l={data:function(){return{isView:!1,post:""}},methods:{okay:function(){localStorage.setItem("save",!0),this.isView=!1,this.$store.dispatch("users/edit",{id:this.$auth.user.id,notification_job:0,notification_event:0,notification_announcement:0})}},created:function(){0==this.$auth.user.notification_job&&0==this.$auth.user.notification_event&&0==this.$auth.user.notification_announcement||(this.isView=!0)}},d=e(102),component=Object(d.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"pa-10"},[n(c.a,{attrs:{width:"500",persistent:""},model:{value:t.isView,callback:function(n){t.isView=n},expression:"isView"}},[n(r.a,{staticClass:"pa-10"},[n("div",[n("div",{staticClass:"pa-5",attrs:{align:"center"}},[t._v("New notification!")]),t._v(" "),n("div",[0!=t.$auth.user.notification_event?n("div",[t._v("\n            Events : "+t._s(t.$auth.user.notification_event)+"\n          ")]):t._e(),t._v(" "),0!=t.$auth.user.notification_job?n("div",[t._v("\n            Job Posting : "+t._s(t.$auth.user.notification_job)+"\n          ")]):t._e(),t._v(" "),0!=t.$auth.user.notification_announcement?n("div",[t._v("\n            Announcement : "+t._s(t.$auth.user.notification_announcement)+"\n          ")]):t._e()]),t._v(" "),n("div",{attrs:{align:"end"}},[n(o.a,{attrs:{color:"secondary"},on:{click:t.okay}},[t._v("Okay")])],1)])])],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"pt-5"},[n(r.a,{staticClass:"rounded-xl pa-5",attrs:{elevation:"6"}},[n("div",[n("p",[t._v("\n          This project is developed by three BSIT students as their thesis\n          about designing a web-based that will help the CAS-IT in\n          communicating with the alumni and will help the CAS-IT as well as\n          the alumni coordinator to easily track and modify the alumni\n          profiles. it is significant in improving data tracking of CAS-IT\n          alumni/graduates, CAS-IT announcements, events, job recommendations,\n          and other related CAS-IT programs in a centralized platform. The\n          system could also provide data needed by the CAS-IT for data\n          information on the alumni, and by which method it would address the\n          recognized problems in the tracking of alumni. There are instances\n          that there are big events like intramurals and sports fests, these\n          will lessen the time consumed by posting all the announcements and\n          sending notifications to the members of the web-based tracking\n          system.\n        ")])])])],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-h5 pb-10"},[t("b",[this._v(" Dashboard")])])}],!1,null,null,null);n.default=component.exports},792:function(t,n,e){"use strict";e.r(n);var o=e(702),r={components:{DashboardContainer:e(723).default,FooterAll:o.default}},c=e(102),component=Object(c.a)(r,(function(){var t=this._self._c;return t("div",[t("dashboard-container"),this._v(" "),t("div",[t("footer-all")],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{DashboardContainer:e(697).default})}}]);