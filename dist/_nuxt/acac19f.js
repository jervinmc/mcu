(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{783:function(t,e,n){"use strict";n.r(e);var r={created:function(){},data:function(){return{headers:[{text:"ID",value:"id"},{text:"Email",value:"email"},{text:"Actions",value:"opt"},,],events:[{id:"1",fullname:"Juan Delacruz",student_number:"201510994",email:"juandelacruz@email.com"},{id:"2",fullname:"Pedro Delacruz",student_number:"201510994",email:"pedrodelacruz@email.com"}]}},methods:{}},o=n(101),l=n(150),c=n.n(l),v=n(226),d=n(219),m=n(692),f=n(509),_=n(758),V=n(217),h=n(187),k=n(220),y=n(142),w=n(122),C=n(714),x=n(514),z=n(757),I=n(515),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"5"}},[n("v-row",[n("v-col",{staticClass:"pa-10 text-h5",attrs:{align:"start",cols:"auto"}},[n("b",[t._v("Reset Request Password")])]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-data-table",{staticClass:"pa-5",attrs:{headers:t.headers,items:t.events,loading:t.isLoading},scopedSlots:t._u([{key:"item.status",fn:function(e){var r=e.item;return[n("div",[n("v-chip",{style:t.getColorStatus(r.status),attrs:{align:"center"}},[n("span",[t._v(t._s(r.status)+" ")])])],1)]}},{key:"item.price",fn:function(e){var r=e.item;return[n("div",[t._v("\n          "+t._s(t.formatPrice(r.price))+"\n        ")])]}},{key:"loading",fn:function(){return t._l(5,(function(t){return n("v-skeleton-loader",{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.image",fn:function(t){var e=t.item;return[n("v-img",{attrs:{src:e.image,height:"150",width:"150"}})]}},{key:"item.opt",fn:function(e){var r=e.item;return[n("v-menu",{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.attrs,o=e.on;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.sendOTP(r)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Send OTP")])],1)],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VChip:m.a,VCol:f.a,VDataTable:_.a,VIcon:V.a,VImg:h.a,VList:k.a,VListItem:y.a,VListItemContent:w.a,VListItemTitle:w.b,VMenu:C.a,VRow:x.a,VSkeletonLoader:z.a,VSpacer:I.a})}}]);