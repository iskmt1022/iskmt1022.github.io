(function(t){function e(e){for(var s,o,l=e[0],r=e[1],c=e[2],m=0,u=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08f1":function(t,e,a){"use strict";a("4d4c")},1:function(t,e){},2:function(t,e){},"4d4c":function(t,e,a){},"56a1":function(t,e,a){t.exports=a.p+"img/books.42cc0048.png"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.isSignedIn?a("v-navigation-drawer",{attrs:{app:"",bottom:"",height:"auto"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-btn",{attrs:{color:"primary",tile:"",block:"",depressed:"",height:"48px"},on:{click:function(e){return t.openHome()}}},[t._v("Home")]),a("v-btn",{attrs:{tile:"",block:"",depressed:"",height:"48px"},on:{click:t.openCalcBooks}},[t._v("お小遣い帳簿")]),a("v-btn",{attrs:{tile:"",block:"",depressed:"",height:"48px",color:"grey lighten-2"},on:{click:t.openCalcWash}},[t._v("洗い物計算")]),a("v-btn",{attrs:{tile:"",block:"",depressed:"",height:"48px"},on:{click:t.openShoppingList}},[t._v("買うものかご")]),a("amplify-sign-out")],1):t._e(),t.isSignedIn?a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("坂元家のアプリ")])],1):t._e(),a("v-main",[a("router-view",{on:{loading:t.funcLoad}})],1),a("v-overlay",{attrs:{value:t.overlay,absolute:""}},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)],1)},n=[],o={data:()=>({drawer:null,overlay:!1}),computed:{isSignedIn(){return!0}},methods:{openHome(){this.$router.push({name:"Home"}),this.drawer=!1},openCalcBooks(){this.$router.push({name:"CalcBooks"}),this.drawer=!1},openCalcWash(){this.$router.push({name:"CalcWash"}),this.drawer=!1},openShoppingList(){this.$router.push({name:"ShoppingList"}),this.drawer=!1},funcLoad(t){this.overlay=t}}},l=o,r=(a("5c0b"),a("2877")),c=a("6544"),d=a.n(c),m=a("7496"),u=a("40dc"),p=a("5bc1"),h=a("8336"),v=a("f6c4"),f=a("f774"),b=a("a797"),g=a("490a"),_=a("2a7f"),k=Object(r["a"])(l,i,n,!1,null,null,null),D=k.exports;d()(k,{VApp:m["a"],VAppBar:u["a"],VAppBarNavIcon:p["a"],VBtn:h["a"],VMain:v["a"],VNavigationDrawer:f["a"],VOverlay:b["a"],VProgressCircular:g["a"],VToolbarTitle:_["a"]});var w=a("f309");s["a"].use(w["a"]);var C=new w["a"]({}),y=a("8c4f"),x=a("2f62");s["a"].use(x["a"]);var S=new x["a"].Store({state:{user:null,Personal:[]},mutations:{setUser(t,e){t.user=e}},actions:{Personal:t=>t.Personal},modules:{}}),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"signin-part"}},[a("amplify-auth-container",[a("amplify-authenticator")],1),a("div",{attrs:{id:"button-part"}},[a("v-btn",{attrs:{block:"",tile:"",depressed:"",color:"transparent"},on:{click:function(e){return t.forceReload()}}},[t._v("キャッシュ削除")])],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-text",{staticStyle:{"padding-top":"20px","padding-bottom":"10px"}},[a("v-text-field",{ref:"password",attrs:{label:"Password(数字4桁)",type:"password"},model:{value:t.passcode,callback:function(e){t.passcode=e},expression:"passcode"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.setLogin()}}},[t._v("OK")])],1)],1)],1)],1)},L=[],$={name:"SignIn",data(){return{dialog:!1,passcode:null}},created:function(){this.dialog=!0},methods:{forceReload(){window.location.reload(!0)},async setLogin(){this.dialog=!1;const t="https://script.google.com/macros/s/AKfycbyvwun3Hab3iBNt0TmFsMzhQvsgjJ4N9rfnX5eNKH7IE6Pj_IQmjx2qdTrzEjRP9PihOQ/exec",e=t+"?keyword=auth&password="+this.passcode,a={method:"GET"},s=await this.fetchData(e,a);"ok"==s.code?(S.commit("setUser",{password:this.passcode}),this.$router.push({name:"Home"})):(this.passcode="",this.dialog=!0)},async fetchData(t,e){let a=null;try{const s=await fetch(t,e);a=await s.json()}catch(s){console.error("Error:",s)}return a}},watch:{dialog:function(t){t&&setTimeout(()=>{this.$refs.password.focus()},200)}}},A=$,V=(a("ce3e"),a("b0af")),T=a("99d9"),B=a("169a"),P=a("2fa4"),N=a("8654"),j=Object(r["a"])(A,I,L,!1,null,null,null),q=j.exports;d()(j,{VBtn:h["a"],VCard:V["a"],VCardActions:T["a"],VCardText:T["b"],VDialog:B["a"],VSpacer:P["a"],VTextField:N["a"]});var E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-4",attrs:{id:"home"}},[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-card",{attrs:{height:"150"},on:{click:function(e){return t.openCalcBooks()}}},[s("v-img",{attrs:{height:"120",contain:"",src:a("56a1")}}),s("v-card-text",{staticClass:"pa-0"},[t._v("お小遣い帳簿")])],1)],1),s("v-col",{attrs:{cols:"6"}},[s("v-card",{attrs:{height:"150"},on:{click:function(e){return t.openShopping()}}},[s("v-img",{attrs:{height:"120",contain:"",src:a("f70f")}}),s("v-card-text",{staticClass:"pa-0"},[t._v("買うものかご")])],1)],1)],1)],1)},O=[],M={name:"Home",methods:{openCalcBooks(){this.$router.push({name:"CalcBooks"})},openCalcWash(){this.$router.push({name:"CalcWash"})},openShopping(){this.$router.push({name:"ShoppingList"})}}},H=M,z=(a("08f1"),a("62ad")),F=a("adda"),Y=a("0fd9"),R=Object(r["a"])(H,E,O,!1,null,"f82fc60e",null),U=R.exports;d()(R,{VCard:V["a"],VCardText:T["b"],VCol:z["a"],VImg:F["a"],VRow:Y["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"calc-books"}},[a("v-tabs",{attrs:{"fixed-tabs":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",[t._v("Issei")]),a("v-tab",[t._v("Masami")])],1),a("v-data-table",{attrs:{"mobile-breakpoint":"0",headers:t.headers,items:this.selectData.table,"sort-by":["date"],"sort-desc":[!0]},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("合計："+t._s(t.selectData.total))]),a("v-spacer"),a("v-btn",{on:{click:function(e){e.stopPropagation(),t.freeIncomeDialog=!0}}},[t._v("フリー")]),a("v-btn",{on:{click:function(e){e.stopPropagation(),t.moveIncomeDialog=!0}}},[t._v("移動")]),a("v-btn",{on:{click:function(e){e.stopPropagation(),t.outgoDialog=!0}}},[t._v("支出")])],1)]},proxy:!0}])}),a("v-dialog",{model:{value:t.freeIncomeDialog,callback:function(e){t.freeIncomeDialog=e},expression:"freeIncomeDialog"}},[a("v-card",[a("v-card-title",[t._v("★収入（フリー入力）")]),a("v-row",{staticClass:"pt-5",attrs:{justify:"center","align-content":"center"}},[a("v-col",{staticClass:"pa-0 d-flex justify-center align-center",attrs:{cols:"4"}},[t._v("変更前：")]),a("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[t._v(t._s(t.selectData.total)+" 円")])],1),a("v-row",{attrs:{justify:"center","align-content":"center"}},[a("v-col",{staticClass:"pa-0 d-flex justify-center align-center",attrs:{cols:"4"}},[t._v("追加金額：")]),a("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[a("v-text-field",{attrs:{suffix:"円","single-line":"",type:"number"},model:{value:t.add,callback:function(e){t.add=e},expression:"add"}})],1)],1),a("v-row",{staticClass:"mt-0"},[a("v-spacer"),a("v-col",{staticClass:"pt-0",attrs:{cols:"10"}},[a("v-divider"),a("v-divider"),a("v-divider"),a("v-divider")],1)],1),a("v-row",{staticClass:"pb-5",attrs:{justify:"center","align-content":"center"}},[a("v-col",{staticClass:"pa-0 d-flex justify-center align-center",attrs:{cols:"4"}},[t._v("変更後：")]),a("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[t._v(t._s(t.selectData.total+Number(t.add))+" 円")])],1),a("v-row",{staticClass:"pb-3"},[a("v-spacer"),a("v-col",{staticClass:"pa-0",attrs:{cols:"2"}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.clickSubmitFreeIncome()}}},[t._v("確定")])],1),a("v-col",{staticClass:"pa-0 mr-3",attrs:{cols:"3"}},[a("v-btn",{on:{click:function(e){t.add=null}}},[t._v("クリア")])],1)],1)],1)],1),a("v-dialog",{model:{value:t.moveIncomeDialog,callback:function(e){t.moveIncomeDialog=e},expression:"moveIncomeDialog"}},[a("v-card",{staticClass:"pa-3"},[a("v-card-title",{staticClass:"pl-0 pr-0",attrs:{"justify-content":"center"}},[t._v("★収入（洗い物小遣いから移動）")]),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"5"}},[a("v-subheader",{staticClass:"text-body-1"},[t._v("変更前")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"7"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"false",disabled:""},model:{value:t.selectData.total,callback:function(e){t.$set(t.selectData,"total",e)},expression:"selectData.total"}})],1)],1),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"5"}},[a("v-subheader",{staticClass:"text-body-1"},[t._v("洗い物小遣い")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"5"}},[a("v-text-field",{attrs:{value:t.selectData.total_wash-Number(t.add_part),dense:"",outlined:"","hide-details":"false",disabled:""}})],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"2"}},[a("v-btn",{staticClass:"pa-0",attrs:{color:"primary"},on:{click:function(e){t.add_part=0,t.add=t.selectData.total_wash}}},[t._v("全額")])],1)],1),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"5"}},[a("v-subheader",{staticClass:"text-body-1"},[t._v("一部入金")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"7"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"false"},model:{value:t.add_part,callback:function(e){t.add_part=e},expression:"add_part"}})],1)],1),a("v-divider"),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"5"}},[a("v-subheader",{staticClass:"text-body-1"},[t._v("変更後")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"7"}},[a("v-text-field",{attrs:{value:t.selectData.total+Number(t.add),dense:"",outlined:"","hide-details":"false",disabled:""}})],1)],1),a("v-row",{staticClass:"pb-3"},[a("v-spacer"),a("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.clickSubmitMoveIncome()}}},[t._v("確定")])],1)],1)],1)],1),a("v-dialog",{model:{value:t.outgoDialog,callback:function(e){t.outgoDialog=e},expression:"outgoDialog"}},[a("v-card",[a("v-card-title",[t._v("★支出（フリー入力）")]),a("v-row",{staticClass:"pt-5",attrs:{justify:"center","align-content":"center"}},[a("v-col",{staticClass:"pa-0 d-flex justify-center align-center",attrs:{cols:"4"}},[t._v("変更前：")]),a("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[t._v(t._s(t.selectData.total)+" 円")])],1),a("v-row",{attrs:{justify:"center","align-content":"center"}},[a("v-col",{staticClass:"pa-0 d-flex justify-center align-center",attrs:{cols:"4"}},[t._v("削減金額：")]),a("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[a("v-text-field",{attrs:{prefix:"-",suffix:"円","single-line":"",type:"number"},model:{value:t.remove,callback:function(e){t.remove=e},expression:"remove"}})],1)],1),a("v-row",{staticClass:"mt-0"},[a("v-spacer"),a("v-col",{staticClass:"pt-0",attrs:{cols:"10"}},[a("v-divider"),a("v-divider"),a("v-divider"),a("v-divider")],1)],1),a("v-row",{staticClass:"pb-5",attrs:{justify:"center","align-content":"center"}},[a("v-col",{staticClass:"pa-0 d-flex justify-center align-center",attrs:{cols:"4"}},[t._v("変更後：")]),a("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[t._v(t._s(t.selectData.total-Number(t.remove))+" 円")])],1),a("v-row",{staticClass:"pb-3"},[a("v-spacer"),a("v-col",{staticClass:"pa-0",attrs:{cols:"2"}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.clickSubmitOutgo()}}},[t._v("確定")])],1),a("v-col",{staticClass:"pa-0 mr-3",attrs:{cols:"3"}},[a("v-btn",{on:{click:function(e){t.remove=null}}},[t._v("クリア")])],1)],1)],1)],1)],1)},J=[],K=a("a030"),Q=a("6b0a");const G="\n  query ListPersonals(\n    $filter: ModelPersonalFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listPersonals(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        name\n        total\n        total_wash\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",X="\n  query ListBooks(\n    $filter: ModelBooksFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        personal_name\n        register_date\n        register_fee\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",Z="\n  query ListSkmtShopLists(\n    $filter: ModelSkmtShopListFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listSkmtShopLists(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        shop_name\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",tt="\n  query ListSkmtItemLists(\n    $filter: ModelSkmtItemListFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listSkmtItemLists(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        item_name\n        number\n        memo\n        shop_id\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",et="\n  mutation UpdatePersonal(\n    $input: UpdatePersonalInput!\n    $condition: ModelPersonalConditionInput\n  ) {\n    updatePersonal(input: $input, condition: $condition) {\n      id\n      name\n      total\n      total_wash\n      createdAt\n      updatedAt\n    }\n  }\n",at="\n  mutation CreateBooks(\n    $input: CreateBooksInput!\n    $condition: ModelBooksConditionInput\n  ) {\n    createBooks(input: $input, condition: $condition) {\n      id\n      personal_name\n      register_date\n      register_fee\n      createdAt\n      updatedAt\n    }\n  }\n",st="\n  mutation CreateSkmtShopList(\n    $input: CreateSkmtShopListInput!\n    $condition: ModelSkmtShopListConditionInput\n  ) {\n    createSkmtShopList(input: $input, condition: $condition) {\n      id\n      shop_name\n      createdAt\n      updatedAt\n    }\n  }\n",it="\n  mutation CreateSkmtItemList(\n    $input: CreateSkmtItemListInput!\n    $condition: ModelSkmtItemListConditionInput\n  ) {\n    createSkmtItemList(input: $input, condition: $condition) {\n      id\n      item_name\n      number\n      memo\n      shop_id\n      createdAt\n      updatedAt\n    }\n  }\n",nt="\n  mutation UpdateSkmtItemList(\n    $input: UpdateSkmtItemListInput!\n    $condition: ModelSkmtItemListConditionInput\n  ) {\n    updateSkmtItemList(input: $input, condition: $condition) {\n      id\n      item_name\n      number\n      memo\n      shop_id\n      createdAt\n      updatedAt\n    }\n  }\n",ot="\n  mutation DeleteSkmtItemList(\n    $input: DeleteSkmtItemListInput!\n    $condition: ModelSkmtItemListConditionInput\n  ) {\n    deleteSkmtItemList(input: $input, condition: $condition) {\n      id\n      item_name\n      number\n      memo\n      shop_id\n      createdAt\n      updatedAt\n    }\n  }\n";var lt={name:"CalcBooks",data(){return{tab:null,freeIncomeDialog:!1,outgoDialog:!1,moveIncomeDialog:!1,add:null,add_part:null,remove:null,headers:[{text:"追加日",align:"start",value:"date"},{text:"追加金額",value:"fee"}],selectData:{total:null,table:[]},issei:{id:null,name:"is",isCheck:!1,total:null,total_wash:null,table:[]},masami:{id:null,name:"ms",isCheck:!0,total:null,total_wash:null,table:[]}}},created:async function(){await K["a"].graphql({query:G}).then(t=>{console.log(t),t.data.listPersonals.items.forEach(t=>{"is"==t.name?(this.issei.id=t.id,this.issei.total=t.total,this.issei.total_wash=t.total_wash):"ms"==t.name&&(this.masami.id=t.id,this.masami.total=t.total,this.masami.total_wash=t.total_wash)})}).catch(t=>{console.log(t)}),await this.setTable()},computed:{tableItems(){let t=[];return this.selectData.table.forEach(e=>{t.push(e)}),t}},methods:{dateToStr24HPad0(t,e){return e||(e="YYYY/MM/DD hh:mm:ss"),e=e.replace(/YYYY/g,t.getFullYear()),e=e.replace(/MM/g,("0"+(t.getMonth()+1)).slice(-2)),e=e.replace(/DD/g,("0"+t.getDate()).slice(-2)),e=e.replace(/hh/g,("0"+t.getHours()).slice(-2)),e=e.replace(/mm/g,("0"+t.getMinutes()).slice(-2)),e=e.replace(/ss/g,("0"+t.getSeconds()).slice(-2)),e},formatDate(t){let e=new Date(t).toLocaleString({timeZone:"Asia/Tokyo"}),a=this.dateToStr24HPad0(new Date(e));return a},async setTable_old(){await K["a"].graphql({query:X}).then(t=>{console.log(t),this.issei.table=[],this.masami.table=[],t.data.listBooks.items.forEach(t=>{"is"==t.personal_name?this.issei.table.push({date:this.formatDate(t.register_date),fee:t.register_fee}):"ms"==t.personal_name&&this.masami.table.push({date:this.formatDate(t.register_date),fee:t.register_fee})})}).catch(t=>{console.log(t)})},async setTable(){let t=await K["a"].graphql(Object(Q["b"])(X)),e=t.data.listBooks.items,a=t.data.listBooks.nextToken;while(a)t=await K["a"].graphql(Object(Q["b"])(X,{nextToken:a})),e=e.concat(t.data.listBooks.items),a=t.data.listBooks.nextToken;this.issei.table=[],this.masami.table=[],e.forEach(t=>{"is"==t.personal_name?this.issei.table.push({date:this.formatDate(t.register_date),fee:t.register_fee}):"ms"==t.personal_name&&this.masami.table.push({date:this.formatDate(t.register_date),fee:t.register_fee})})},async createBooks(t,e){const a={personal_name:t,register_date:new Date,register_fee:e};await K["a"].graphql({query:at,variables:{input:a}}).then(t=>{console.log(t)}).catch(t=>{console.log(t)}),await this.setTable()},async clickSubmitFreeIncome(){if(null==this.add||0==Number(this.add))return;this.$emit("loading",!0);const t={id:this.selectData.id,total:this.selectData.total+Number(this.add)};await K["a"].graphql({query:et,variables:{input:t}}).then(t=>{console.log(t),this.createBooks(this.selectData.name,Number(this.add)),this.selectData.total+=Number(this.add),this.add=null}).catch(t=>{console.log(t)}).finally(()=>{this.$emit("loading",!1),this.freeIncomeDialog=!1,this.setTable()})},async clickSubmitMoveIncome(){if(null==this.add||0==Number(this.add))return;if(0==this.selectData.total_wash)return void(this.moveIncomeDialog=!1);this.$emit("loading",!0);const t={id:this.selectData.id,total:this.selectData.total+Number(this.add),total_wash:this.selectData.total_wash-Number(this.add)};await K["a"].graphql({query:et,variables:{input:t}}).then(t=>{console.log(t),this.createBooks(this.selectData.name,Number(this.add)),this.selectData.total+=Number(this.add),this.selectData.total_wash-=Number(this.add)}).catch(t=>{console.log(t)}).finally(()=>{this.$emit("loading",!1),this.moveIncomeDialog=!1,this.add=null,this.add_part=null,this.setTable()})},async clickSubmitOutgo(){if(null==this.remove||0==Number(this.remove))return;this.$emit("loading",!0);const t={id:this.selectData.id,total:this.selectData.total-Number(this.remove)};await K["a"].graphql({query:et,variables:{input:t}}).then(t=>{console.log(t),this.createBooks(this.selectData.name,-Number(this.remove)),this.selectData.total-=Number(this.remove),this.remove=null}).catch(t=>{console.log(t)}).finally(()=>{this.$emit("loading",!1),this.outgoDialog=!1,this.setTable()})}},watch:{tab:function(t){0==t?this.selectData=this.issei:1==t&&(this.selectData=this.masami)},add_part:function(t){Number(t)&&(this.add=t)}}},rt=lt,ct=a("8fea"),dt=a("ce7e"),mt=a("e0c7"),ut=a("71a3"),pt=a("fe57"),ht=a("71d9"),vt=Object(r["a"])(rt,W,J,!1,null,"33525363",null),ft=vt.exports;d()(vt,{VBtn:h["a"],VCard:V["a"],VCardTitle:T["c"],VCol:z["a"],VDataTable:ct["a"],VDialog:B["a"],VDivider:dt["a"],VRow:Y["a"],VSpacer:P["a"],VSubheader:mt["a"],VTab:ut["a"],VTabs:pt["a"],VTextField:N["a"],VToolbar:ht["a"],VToolbarTitle:_["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"shopping-list"}},[a("div",{attrs:{id:"main-part"}},[0==t.selectedItemList.length?a("div",[a("br"),t._v("No data. ")]):t._e(),a("v-list",{attrs:{expand:""}},t._l(t.selectedItemList,(function(e){return a("v-list-group",{key:e.id,attrs:{value:!0,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.shop_name)}})],1)]},proxy:!0}],null,!0)},t._l(e.item_list,(function(e){return a("v-list-item",{key:e.item_name},[a("v-list-item-action",[a("v-checkbox",{staticStyle:{width:"100%"},on:{change:function(a){return t.checkItem(e)}},model:{value:e.checked,callback:function(a){t.$set(e,"checked",a)},expression:"child.checked"}})],1),a("v-list-item-content",{attrs:{id:"my-list-item"}},[a("v-list-item-title",[t._v(t._s(e.item_name))]),e.memo||e.number>1?a("v-list-item-subtitle",[t._v(t._s(e.number)+"個、メモ："+t._s(e.memo))]):t._e()],1),a("v-list-item-action",{staticStyle:{width:"50px"}},[a("v-icon",{on:{click:function(a){return t.editItem(e)}}},[t._v("mdi-square-edit-outline")])],1)],1)})),1)})),1)],1),a("div",{attrs:{id:"footer-part"}},[a("v-row",{staticClass:"mt-2",attrs:{justify:"center",align:"end"}},[a("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"4"}},[a("v-btn",{attrs:{rounded:"",block:"",color:"primary"},on:{click:function(e){t.isAddPart=!0}}},[t._v(" 追加 ")])],1),a("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"4"}},[a("v-btn",{staticClass:"white--text",attrs:{rounded:"",block:"",color:"red darken-1"},on:{click:function(e){return t.doneShopping()}}},[t._v(" 購入 ")])],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"8"}},[a("v-btn",{attrs:{rounded:"",block:""},on:{click:function(e){return t.getHistory()}}},[t._v(" 購入履歴 ")])],1)],1)],1),a("v-dialog",{attrs:{persistent:""},model:{value:t.isAddPart,callback:function(e){t.isAddPart=e},expression:"isAddPart"}},[a("v-card",{staticClass:"pa-3"},[a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"4"}},[a("v-subheader",[t._v("買うもの")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"false",autofocus:""},model:{value:t.addData.item_name,callback:function(e){t.$set(t.addData,"item_name",e)},expression:"addData.item_name"}})],1)],1),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"4"}},[a("v-subheader",[t._v("個数")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"false"},model:{value:t.addData.number,callback:function(e){t.$set(t.addData,"number",e)},expression:"addData.number"}})],1)],1),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"4"}},[a("v-subheader",[t._v("メモ")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"false"},model:{value:t.addData.memo,callback:function(e){t.$set(t.addData,"memo",e)},expression:"addData.memo"}})],1)],1),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"4"}},[a("v-subheader",[t._v("予定店舗")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[a("v-select",{attrs:{"persistent-hint":"",items:t.shopList,"item-text":"shop_name","item-value":"id",dense:"","hide-details":"false",outlined:""},model:{value:t.addData.shop_id,callback:function(e){t.$set(t.addData,"shop_id",e)},expression:"addData.shop_id"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(e){return t.registNewItem()}}},[t._v("登録")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"white--text",attrs:{block:"",color:"red darken-1"},on:{click:function(e){return t.clearAddData()}}},[t._v("入力クリア")])],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{block:""},on:{click:function(e){t.isAddPart=!1,t.clearAddData()}}},[t._v("閉じる")])],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:""},model:{value:t.isEditPart,callback:function(e){t.isEditPart=e},expression:"isEditPart"}},[a("v-card",{staticClass:"pa-3"},[a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"4"}},[a("v-subheader",[t._v("買うもの")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"false"},model:{value:t.addData.item_name,callback:function(e){t.$set(t.addData,"item_name",e)},expression:"addData.item_name"}})],1)],1),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"4"}},[a("v-subheader",[t._v("個数")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"false"},model:{value:t.addData.number,callback:function(e){t.$set(t.addData,"number",e)},expression:"addData.number"}})],1)],1),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"4"}},[a("v-subheader",[t._v("メモ")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"false"},model:{value:t.addData.memo,callback:function(e){t.$set(t.addData,"memo",e)},expression:"addData.memo"}})],1)],1),a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"4"}},[a("v-subheader",[t._v("予定店舗")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[a("v-select",{attrs:{"persistent-hint":"",items:t.shopList,"item-text":"shop_name","item-value":"id",dense:"","hide-details":"false",outlined:""},model:{value:t.addData.shop_id,callback:function(e){t.$set(t.addData,"shop_id",e)},expression:"addData.shop_id"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(e){return t.updateItem()}}},[t._v("更新")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{block:""},on:{click:function(e){t.isEditPart=!1,t.clearAddData()}}},[t._v("閉じる")])],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:""},model:{value:t.isAddShopPart,callback:function(e){t.isAddShopPart=e},expression:"isAddShopPart"}},[a("v-card",{staticClass:"pa-3"},[a("v-row",{staticClass:"ma-0",attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"pr-0",attrs:{cols:"4"}},[a("v-subheader",[t._v("追加店舗名")])],1),a("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"false"},model:{value:t.addShopName,callback:function(e){t.addShopName=e},expression:"addShopName"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(e){return t.registNewShop()}}},[t._v("登録")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{block:""},on:{click:function(e){t.isAddShopPart=!1,t.addShopName="",t.addData.shop_id="zzz-other"}}},[t._v("閉じる")])],1)],1)],1)],1)],1)},gt=[],_t={name:"ShoppingList",components:{},data(){return{shopListDB:[],itemListDB:[],emptyStr:"　",isAddPart:!1,isEditPart:!1,addData:{id:null,item_name:"",number:1,memo:"",shop_id:"zzz-other"},isAddShopPart:!1,addShopName:""}},created:async function(){await this.getShopList(),await this.getItemList()},computed:{shopList(){console.log("method shopList");const t=[{id:"addOpe",shop_name:"店舗追加"},{id:"zzz-other",shop_name:"その他"}],e=t.concat(this.shopListDB);return e},selectedItemList(){const t=[];return this.itemListDB.forEach(e=>{const a=t.findIndex(t=>t.id==e.shop_id);if(-1==a){const a=this.shopList.find(t=>t.id==e.shop_id);t.push({...a,item_list:[{...e}]})}else t[a].item_list.push({...e})}),t.sort((function(t,e){return t.id<e.id?-1:t.id>e.id?1:0})),console.log(t),t}},methods:{async getShopList(){await K["a"].graphql({query:Z}).then(t=>{console.log(t),t.data.listSkmtShopLists.items.forEach(t=>{this.shopListDB.push({id:t.id,shop_name:t.shop_name})})}).catch(t=>{console.log(t)})},async getItemList(){await K["a"].graphql({query:tt}).then(t=>{console.log(t),t.data.listSkmtItemLists.items.forEach(t=>{this.itemListDB.push({id:t.id,item_name:t.item_name,number:t.number,memo:t.memo,shop_id:t.shop_id,checked:!1})})}).catch(t=>{console.log(t)})},async deleteItem(t){await K["a"].graphql({query:ot,variables:{input:{id:t}}}).then(e=>{console.log(e);const a=this.itemListDB.findIndex(e=>e.id==t);this.itemListDB.splice(a,1)}).catch(t=>{console.log(t)})},clearAddData(){this.addData={id:null,item_name:"",number:1,memo:"",shop_id:"zzz-other"}},async doneShopping(){console.log("done"),this.selectedItemList.forEach(t=>{t.item_list.forEach(t=>{t.checked&&(async()=>{await this.deleteItem(t.id)})()})})},getHistory(){},async registNewItem(){this.addData.item_name&&await K["a"].graphql({query:it,variables:{input:{item_name:this.addData.item_name,number:this.addData.number,memo:this.addData.memo,shop_id:this.addData.shop_id}}}).then(t=>{console.log(t),this.clearAddData(),this.addData.shop_id=t.data.createSkmtItemList.shop_id,this.itemListDB.push({id:t.data.createSkmtItemList.id,item_name:t.data.createSkmtItemList.item_name,number:t.data.createSkmtItemList.number,memo:t.data.createSkmtItemList.memo,shop_id:t.data.createSkmtItemList.shop_id,checked:!1})}).catch(t=>{console.log(t)})},async registNewShop(){this.addShopName&&await K["a"].graphql({query:st,variables:{input:{shop_name:this.addShopName}}}).then(t=>{console.log(t),this.isAddShopPart=!1,this.addShopName="",this.addData.shop_id=t.data.createSkmtShopList.id,this.shopListDB.push({id:t.data.createSkmtShopList.id,shop_name:t.data.createSkmtShopList.shop_name})}).catch(t=>{console.log(t)})},editItem(t){this.isEditPart=!0,this.addData=t},async updateItem(){this.addData.item_name&&await K["a"].graphql({query:nt,variables:{input:{id:this.addData.id,item_name:this.addData.item_name,number:this.addData.number,memo:this.addData.memo,shop_id:this.addData.shop_id}}}).then(t=>{console.log(t),this.clearAddData();const e=this.itemListDB.findIndex(e=>e.id==t.data.updateSkmtItemList.id);this.itemListDB[e]={id:t.data.updateSkmtItemList.id,item_name:t.data.updateSkmtItemList.item_name,number:t.data.updateSkmtItemList.number,memo:t.data.updateSkmtItemList.memo,shop_id:t.data.updateSkmtItemList.shop_id,checked:this.itemListDB[e].checked},this.itemListDB.splice()}).catch(t=>{console.log(t)}).finally(()=>{this.isEditPart=!1})},checkItem(t){const e=this.itemListDB.findIndex(e=>e.id===t.id);this.itemListDB.splice(e,1),this.itemListDB.push(t)}},watch:{"addData.shop_id":function(t){"addOpe"==t&&(this.isAddShopPart=!0)}}},kt=_t,Dt=(a("a5bb"),a("ac7c")),wt=a("132d"),Ct=a("8860"),yt=a("56b0"),xt=a("da13"),St=a("1800"),It=a("5d23"),Lt=a("b974"),$t=Object(r["a"])(kt,bt,gt,!1,null,"1ec3b8de",null),At=$t.exports;d()($t,{VBtn:h["a"],VCard:V["a"],VCheckbox:Dt["a"],VCol:z["a"],VDialog:B["a"],VIcon:wt["a"],VList:Ct["a"],VListGroup:yt["a"],VListItem:xt["a"],VListItemAction:St["a"],VListItemContent:It["a"],VListItemSubtitle:It["b"],VListItemTitle:It["c"],VRow:Y["a"],VSelect:Lt["a"],VSubheader:mt["a"],VTextField:N["a"]}),s["a"].use(y["a"]);const Vt=[{path:"/",redirect:{name:"Home"}},{path:"/signin",name:"SignIn",component:q},{path:"/home",name:"Home",component:U,meta:{requireAuth:!0}},{path:"/calc-books",name:"CalcBooks",component:ft,meta:{requireAuth:!0}},{path:"/shopping-list",name:"ShoppingList",component:At,meta:{requireAuth:!0}}],Tt=new y["a"]({mode:"history",base:"",routes:Vt,scrollBehavior(t,e,a){return a||{x:0,y:0}}});function Bt(){return S.state.user}let Pt;Tt.beforeResolve(async(t,e,a)=>(Pt=Bt(),"SignIn"===t.name&&Pt?a({name:"Home"}):t.matched.some(t=>t.meta.requireAuth)&&!Pt?a({name:"SignIn"}):a()));var Nt=Tt,jt=a("9483");Object(jt["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),s["a"].config.productionTip=!1,s["a"].config.ignoredElements=[/amplify-\w*/],new s["a"]({vuetify:C,router:Nt,store:S,render:t=>t(D)}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},a5bb:function(t,e,a){"use strict";a("fba8")},ce3e:function(t,e,a){"use strict";a("eff1")},eff1:function(t,e,a){},f70f:function(t,e,a){t.exports=a.p+"img/shopping.65875f68.png"},fba8:function(t,e,a){}});
//# sourceMappingURL=app.8b2d09ce.js.map