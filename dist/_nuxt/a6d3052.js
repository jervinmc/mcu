(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{699:function(t,e,n){"use strict";n.r(e);n(10),n(12),n(16),n(13),n(17);var r=n(2),o=(n(11),n(5),n(97));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={computed:c(c({},Object(o.b)("reset",["reset_data"])),Object(o.b)("users",["users"])),created:function(){this.$store.dispatch("users/view"),this.$store.dispatch("reset/view")},data:function(){return{isDelete:!1,headers:[{text:"ID",value:"id"},{text:"Email",value:"email"},{text:"Actions",value:"opt"},,],events:[]}},methods:{deleteItem:function(t){this.$store.dispatch("reset/delete",t).then((function(t){alert("Successfully Deleted!"),location.reload()}))},generateString:function(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=" ",r=e.length,i=0;i<t;i++)n+=e.charAt(Math.floor(Math.random()*r));return n},sendOTP:function(t){var e=this,a=this.users.filter((function(data){return data.email==t.email})),n=this.generateString(8);this.$store.dispatch("users/edit",{id:a[0].id,email:t.email,password:n}).then((function(r){e.$store.dispatch("users/otp",{email:t.email,code:n}).then((function(t){alert("Successfully Updated!"),location.reload()}))}))}}},d=n(101),f=n(150),m=n.n(f),h=n(226),y=n(219),_=n(691),O=n(509),w=n(758),k=n(510),D=n(217),V=n(187),j=n(220),P=n(142),S=n(122),C=n(714),x=n(514),I=n(757),L=n(515),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"5"}},[n("v-dialog",{attrs:{width:"500"},model:{value:t.isDelete,callback:function(e){t.isDelete=e},expression:"isDelete"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"py-10",attrs:{align:"center"}},[t._v("\n        Are you sure you want to delete this item?\n      ")]),t._v(" "),n("div",[n("v-row",[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{outlined:""},on:{click:function(e){t.isDelete=!1}}},[t._v("Cancel")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{color:"error",outlined:""},on:{click:t.submitHandlerDelete}},[t._v("Delete")])],1)],1)],1)])],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pa-10 text-h5",attrs:{align:"start",cols:"auto"}},[n("b",[t._v("OTP Management")])]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-data-table",{staticClass:"pa-5",attrs:{headers:t.headers,items:t.reset_data,loading:t.isLoading},scopedSlots:t._u([{key:"item.status",fn:function(e){var r=e.item;return[n("div",[n("v-chip",{style:t.getColorStatus(r.status),attrs:{align:"center"}},[n("span",[t._v(t._s(r.status)+" ")])])],1)]}},{key:"item.price",fn:function(e){var r=e.item;return[n("div",[t._v("\n          "+t._s(t.formatPrice(r.price))+"\n        ")])]}},{key:"loading",fn:function(){return t._l(5,(function(t){return n("v-skeleton-loader",{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.image",fn:function(t){var e=t.item;return[n("v-img",{attrs:{src:e.image,height:"150",width:"150"}})]}},{key:"item.opt",fn:function(e){var r=e.item;return[n("v-menu",{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.attrs,o=e.on;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.sendOTP(r)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Send OTP")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.deleteItem(r)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:h.a,VCard:y.a,VChip:_.a,VCol:O.a,VDataTable:w.a,VDialog:k.a,VIcon:D.a,VImg:V.a,VList:j.a,VListItem:P.a,VListItemContent:S.a,VListItemTitle:S.b,VMenu:C.a,VRow:x.a,VSkeletonLoader:I.a,VSpacer:L.a})}}]);