(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{715:function(t,e,r){"use strict";r.r(e);var n=r(514),o=r(225),c=r(708),l=r(528),d=r(774),f=r(526),v=r(226),h=r(191),m=r(229),y=r(144),_=r(125),O=r(729),w=r(527),j=r(773),k=r(529),P=(r(11),r(9),r(16),r(13),r(17),r(2)),D=(r(10),r(5),r(97));function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){Object(P.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var C={computed:x(x({},Object(D.b)("reset",["reset_data"])),Object(D.b)("users",["users"])),created:function(){this.$store.dispatch("users/view"),this.$store.dispatch("reset/view")},data:function(){return{isDelete:!1,headers:[{text:"ID",value:"id"},{text:"Email",value:"email"},{text:"Actions",value:"opt"},,],events:[]}},methods:{deleteItem:function(t){this.$store.dispatch("reset/delete",t).then((function(t){alert("Successfully Deleted!"),location.reload()}))},generateString:function(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=" ",i=0;i<t;i++)r+=e.charAt(Math.floor(62*Math.random()));return r},sendOTP:function(t){var e=this,a=this.users.filter((function(data){return data.email==t.email})),r=this.generateString(8);this.$store.dispatch("users/edit",{id:a[0].id,email:t.email,password:r}).then((function(n){e.$store.dispatch("users/otp",{email:t.email,code:r}).then((function(t){alert("Successfully Updated!"),location.reload()}))}))}}},T=r(102),component=Object(T.a)(C,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{elevation:"5"}},[e(f.a,{attrs:{width:"500"},model:{value:t.isDelete,callback:function(e){t.isDelete=e},expression:"isDelete"}},[e(o.a,{staticClass:"pa-10"},[e("div",{staticClass:"py-10",attrs:{align:"center"}},[t._v("\n        Are you sure you want to delete this item?\n      ")]),t._v(" "),e("div",[e(w.a,[e(l.a,{attrs:{align:"end"}},[e(n.a,{attrs:{outlined:""},on:{click:function(e){t.isDelete=!1}}},[t._v("Cancel")])],1),t._v(" "),e(l.a,[e(n.a,{attrs:{color:"error",outlined:""},on:{click:t.submitHandlerDelete}},[t._v("Delete")])],1)],1)],1)])],1),t._v(" "),e(w.a,[e(l.a,{staticClass:"pa-10 text-h5",attrs:{align:"start",cols:"auto"}},[e("b",[t._v("OTP Management")])]),t._v(" "),e(k.a)],1),t._v(" "),e(d.a,{staticClass:"pa-5",attrs:{headers:t.headers,items:t.reset_data,loading:t.isLoading},scopedSlots:t._u([{key:"item.status",fn:function(r){var n=r.item;return[e("div",[e(c.a,{style:t.getColorStatus(n.status),attrs:{align:"center"}},[e("span",[t._v(t._s(n.status)+" ")])])],1)]}},{key:"item.price",fn:function(r){var n=r.item;return[e("div",[t._v("\n          "+t._s(t.formatPrice(n.price))+"\n        ")])]}},{key:"loading",fn:function(){return t._l(5,(function(t){return e(j.a,{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.image",fn:function(t){var r=t.item;return[e(h.a,{attrs:{src:r.image,height:"150",width:"150"}})]}},{key:"item.opt",fn:function(r){var o=r.item;return[e(O.a,{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.attrs,c=r.on;return[e(n.a,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),c),[e(v.a,[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),e(m.a,{attrs:{dense:""}},[e(y.a,{on:{click:function(e){return e.stopPropagation(),t.sendOTP(o)}}},[e(_.a,[e(_.b,[t._v("Send OTP")])],1)],1),t._v(" "),e(y.a,{on:{click:function(e){return e.stopPropagation(),t.deleteItem(o)}}},[e(_.a,[e(_.b,[t._v("Delete")])],1)],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports}}]);