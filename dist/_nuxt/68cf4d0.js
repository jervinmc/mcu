(window.webpackJsonp=window.webpackJsonp||[]).push([[36,14],{699:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},716:function(e,t,r){"use strict";r.r(t);var n=r(514),l=r(225),o=r(708),c=r(528),d=r(774),m=r(526),f=r(226),v=r(191),_=r(229),h=r(144),y=r(125),k=r(729),w=r(527),O=r(773),P=r(515),j=(r(11),r(9),r(16),r(13),r(17),r(2)),D=(r(10),r(5),r(97));function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(j.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=r(678),A={computed:C(C({},Object(D.b)("users",["users"])),{},{program:function(){return this.users.filter((function(data){return"Head"==data.account_type}))}}),created:function(){this.$store.dispatch("users/view")},data:function(){return{selectedItem:{},isDelete:!1,register:{email:"",password:""},isAdd:!1,isEdit:!1,headers:[{text:"Firstname",value:"firstname"},{text:"Lastname",value:"lastname"},{text:"Email",value:"email"},{text:"Actions",value:"opt"},,],events:[{id:"1",fullname:"Juan Delacruz",student_number:"201510994",email:"juandelacruz@email.com"},{id:"2",fullname:"Pedro Delacruz",student_number:"201510994",email:"pedrodelacruz@email.com"}]}},methods:{editItem:function(e){this.register=E(e),this.isEdit=!0},submitHandlerEdit:function(){this.$store.dispatch("users/edit",{email:this.register.email,id:this.register.id}).then((function(e){alert("Successfully Updated!"),location.reload()}))},submitHandlerDelete:function(){this.$store.dispatch("users/delete",{id:this.selectedItem.id}),alert("Successfully Deleted!"),location.reload()},deleteItem:function(e){this.selectedItem=e,this.isDelete=!0},submitHandler:function(){this.register.account_type="Head",this.register.is_active=!0,this.$store.dispatch("users/addUser",this.register),alert("Successfully Added!"),this.isAdd=!1,location.reload()}}},H=r(102),component=Object(H.a)(A,(function(){var e=this,t=e._self._c;return t(l.a,{attrs:{elevation:"5"}},[t(m.a,{attrs:{width:"500"},model:{value:e.isDelete,callback:function(t){e.isDelete=t},expression:"isDelete"}},[t(l.a,{staticClass:"pa-10"},[t("div",{staticClass:"py-10",attrs:{align:"center"}},[e._v("\n        Are you sure you want to delete this item?\n      ")]),e._v(" "),t("div",[t(w.a,[t(c.a,{attrs:{align:"end"}},[t(n.a,{attrs:{outlined:""},on:{click:function(t){e.isDelete=!1}}},[e._v("Cancel")])],1),e._v(" "),t(c.a,[t(n.a,{attrs:{color:"error",outlined:""},on:{click:e.submitHandlerDelete}},[e._v("Delete")])],1)],1)],1)])],1),e._v(" "),t(m.a,{attrs:{width:"500"},model:{value:e.isEdit,callback:function(t){e.isEdit=t},expression:"isEdit"}},[t(l.a,{staticClass:"pa-10"},[t("div",{staticClass:"py-10",attrs:{align:"center"}},[t("div",[t(P.a,{attrs:{dense:"",outlined:"",placeholder:"Email"},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}})],1)]),e._v(" "),t("div",[t(w.a,[t(c.a,{attrs:{align:"end"}},[t(n.a,{attrs:{outlined:""},on:{click:function(t){e.isEdit=!1}}},[e._v("Cancel")])],1),e._v(" "),t(c.a,[t(n.a,{attrs:{color:"success",outlined:""},on:{click:e.submitHandlerEdit}},[e._v("Edit")])],1)],1)],1)])],1),e._v(" "),t(m.a,{attrs:{width:"500"},model:{value:e.isAdd,callback:function(t){e.isAdd=t},expression:"isAdd"}},[t(l.a,{staticClass:"pa-10"},[t("div",[e._v("Email")]),e._v(" "),t("div",{staticClass:"pb-4"},[t(P.a,{attrs:{outlined:"",dense:""},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}})],1),e._v(" "),t("div",[e._v("Password")]),e._v(" "),t("div",{staticClass:"pb-4"},[t(P.a,{attrs:{type:"password",outlined:"",dense:""},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}})],1),e._v(" "),t("div",{attrs:{align:"center"}},[t(w.a,[t(c.a,[t(n.a,{attrs:{rounded:"",color:"secondary"},on:{click:function(t){e.isAdd=!1}}},[e._v("Cancel")])],1),e._v(" "),t(c.a,[t(n.a,{attrs:{rounded:"",dark:"",color:"green"},on:{click:e.submitHandler}},[e._v("Submit")])],1)],1)],1)])],1),e._v(" "),t(w.a,[t(c.a,{staticClass:"pa-10 text-h5",attrs:{align:"start"}},[t("b",[e._v("Program Head Accounts")])]),e._v(" "),t(c.a,{staticClass:"pr-10",attrs:{"align-self":"center",align:"end"}},[t(n.a,{attrs:{rounded:"",color:"secondary"},on:{click:function(t){e.isAdd=!0}}},[e._v("Add Program Head")])],1)],1),e._v(" "),t(d.a,{staticClass:"pa-5",attrs:{headers:e.headers,items:e.program,loading:e.isLoading},scopedSlots:e._u([{key:"item.status",fn:function(r){var n=r.item;return[t("div",[t(o.a,{style:e.getColorStatus(n.status),attrs:{align:"center"}},[t("span",[e._v(e._s(n.status)+" ")])])],1)]}},{key:"item.price",fn:function(r){var n=r.item;return[t("div",[e._v("\n        "+e._s(e.formatPrice(n.price))+"\n      ")])]}},{key:"loading",fn:function(){return e._l(5,(function(e){return t(O.a,{key:e,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.image",fn:function(e){var r=e.item;return[t(v.a,{attrs:{src:r.image,height:"150",width:"150"}})]}},{key:"item.opt",fn:function(r){var l=r.item;return[t(k.a,{attrs:{"offset-y":"","z-index":"1"},scopedSlots:e._u([{key:"activator",fn:function(r){var l=r.attrs,o=r.on;return[t(n.a,e._g(e._b({attrs:{icon:""}},"v-btn",l,!1),o),[t(f.a,[e._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[e._v(" "),t(_.a,{attrs:{dense:""}},[t(h.a,{on:{click:function(t){return t.stopPropagation(),e.editItem(l)}}},[t(y.a,[t(y.b,[e._v("Edit")])],1)],1),e._v(" "),t(h.a,{on:{click:function(t){return t.stopPropagation(),e.deleteItem(l)}}},[t(y.a,[t(y.b,[e._v("Delete")])],1)],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports},783:function(e,t,r){"use strict";r.r(t);var n={components:{ProgramHeadContainer:r(716).default}},l=r(102),component=Object(l.a)(n,(function(){var e=this._self._c;return e("div",[e("program-head-container")],1)}),[],!1,null,null,null);t.default=component.exports}}]);