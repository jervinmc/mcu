(window.webpackJsonp=window.webpackJsonp||[]).push([[37,14],{667:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},700:function(t,e,r){"use strict";r.r(e);r(10),r(12),r(16),r(13),r(17);var n=r(2),l=(r(11),r(5),r(97));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=r(661),v={computed:c(c({},Object(l.b)("users",["users"])),{},{program:function(){return this.users.filter((function(data){return"Head"==data.account_type}))}}),created:function(){this.$store.dispatch("users/view")},data:function(){return{selectedItem:{},isDelete:!1,register:{email:"",password:""},isAdd:!1,isEdit:!1,headers:[{text:"Firstname",value:"firstname"},{text:"Lastname",value:"lastname"},{text:"Email",value:"email"},{text:"Actions",value:"opt"},,],events:[{id:"1",fullname:"Juan Delacruz",student_number:"201510994",email:"juandelacruz@email.com"},{id:"2",fullname:"Pedro Delacruz",student_number:"201510994",email:"pedrodelacruz@email.com"}]}},methods:{editItem:function(t){this.register=d(t),this.isEdit=!0},submitHandlerEdit:function(){this.$store.dispatch("users/edit",{email:this.register.email,id:this.register.id}).then((function(t){alert("Successfully Updated!"),location.reload()}))},submitHandlerDelete:function(){this.$store.dispatch("users/delete",{id:this.selectedItem.id}),alert("Successfully Deleted!"),location.reload()},deleteItem:function(t){this.selectedItem=t,this.isDelete=!0},submitHandler:function(){this.register.account_type="Head",this.register.is_active=!0,this.$store.dispatch("users/addUser",this.register),alert("Successfully Added!"),this.isAdd=!1,location.reload()}}},m=r(101),f=r(150),h=r.n(f),_=r(226),y=r(219),w=r(691),k=r(509),O=r(758),x=r(510),C=r(217),P=r(187),D=r(220),j=r(142),E=r(122),V=r(714),A=r(514),I=r(757),H=r(498),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{elevation:"5"}},[r("v-dialog",{attrs:{width:"500"},model:{value:t.isDelete,callback:function(e){t.isDelete=e},expression:"isDelete"}},[r("v-card",{staticClass:"pa-10"},[r("div",{staticClass:"py-10",attrs:{align:"center"}},[t._v("\n        Are you sure you want to delete this item?\n      ")]),t._v(" "),r("div",[r("v-row",[r("v-col",{attrs:{align:"end"}},[r("v-btn",{attrs:{outlined:""},on:{click:function(e){t.isDelete=!1}}},[t._v("Cancel")])],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{color:"error",outlined:""},on:{click:t.submitHandlerDelete}},[t._v("Delete")])],1)],1)],1)])],1),t._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:t.isEdit,callback:function(e){t.isEdit=e},expression:"isEdit"}},[r("v-card",{staticClass:"pa-10"},[r("div",{staticClass:"py-10",attrs:{align:"center"}},[r("div",[r("v-text-field",{attrs:{dense:"",outlined:"",placeholder:"Email"},model:{value:t.register.email,callback:function(e){t.$set(t.register,"email",e)},expression:"register.email"}})],1)]),t._v(" "),r("div",[r("v-row",[r("v-col",{attrs:{align:"end"}},[r("v-btn",{attrs:{outlined:""},on:{click:function(e){t.isEdit=!1}}},[t._v("Cancel")])],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{color:"success",outlined:""},on:{click:t.submitHandlerEdit}},[t._v("Edit")])],1)],1)],1)])],1),t._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:t.isAdd,callback:function(e){t.isAdd=e},expression:"isAdd"}},[r("v-card",{staticClass:"pa-10"},[r("div",[t._v("Email")]),t._v(" "),r("div",{staticClass:"pb-4"},[r("v-text-field",{attrs:{outlined:"",dense:""},model:{value:t.register.email,callback:function(e){t.$set(t.register,"email",e)},expression:"register.email"}})],1),t._v(" "),r("div",[t._v("Password")]),t._v(" "),r("div",{staticClass:"pb-4"},[r("v-text-field",{attrs:{type:"password",outlined:"",dense:""},model:{value:t.register.password,callback:function(e){t.$set(t.register,"password",e)},expression:"register.password"}})],1),t._v(" "),r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[r("v-btn",{attrs:{rounded:"",color:"secondary"},on:{click:function(e){t.isAdd=!1}}},[t._v("Cancel")])],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{rounded:"",dark:"",color:"green"},on:{click:t.submitHandler}},[t._v("Submit")])],1)],1)],1)])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"pa-10 text-h5",attrs:{align:"start"}},[r("b",[t._v("Program Head Accounts")])]),t._v(" "),r("v-col",{staticClass:"pr-10",attrs:{"align-self":"center",align:"end"}},[r("v-btn",{attrs:{rounded:"",color:"secondary"},on:{click:function(e){t.isAdd=!0}}},[t._v("Add Program Head")])],1)],1),t._v(" "),r("v-data-table",{staticClass:"pa-5",attrs:{headers:t.headers,items:t.program,loading:t.isLoading},scopedSlots:t._u([{key:"item.status",fn:function(e){var n=e.item;return[r("div",[r("v-chip",{style:t.getColorStatus(n.status),attrs:{align:"center"}},[r("span",[t._v(t._s(n.status)+" ")])])],1)]}},{key:"item.price",fn:function(e){var n=e.item;return[r("div",[t._v("\n        "+t._s(t.formatPrice(n.price))+"\n      ")])]}},{key:"loading",fn:function(){return t._l(5,(function(t){return r("v-skeleton-loader",{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.image",fn:function(t){var e=t.item;return[r("v-img",{attrs:{src:e.image,height:"150",width:"150"}})]}},{key:"item.opt",fn:function(e){var n=e.item;return[r("v-menu",{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,l=e.on;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),l),[r("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),r("v-list",{attrs:{dense:""}},[r("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.editItem(n)}}},[r("v-list-item-content",[r("v-list-item-title",[t._v("Edit")])],1)],1),t._v(" "),r("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.deleteItem(n)}}},[r("v-list-item-content",[r("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:_.a,VCard:y.a,VChip:w.a,VCol:k.a,VDataTable:O.a,VDialog:x.a,VIcon:C.a,VImg:P.a,VList:D.a,VListItem:j.a,VListItemContent:E.a,VListItemTitle:E.b,VMenu:V.a,VRow:A.a,VSkeletonLoader:I.a,VTextField:H.a})},767:function(t,e,r){"use strict";r.r(e);var n={components:{ProgramHeadContainer:r(700).default}},l=r(101),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("program-head-container")],1)}),[],!1,null,null,null);e.default=component.exports}}]);