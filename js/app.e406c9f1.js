(function(e){function t(t){for(var r,i,a=t[0],s=t[1],u=t[2],l=0,p=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-composition-todoapp/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22b0":function(e,t,n){"use strict";n("7d60")},"32fa":function(e,t,n){"use strict";n("4768")},3640:function(e,t,n){"use strict";n("404d")},"404d":function(e,t,n){},4768:function(e,t,n){},"4c98":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["g"])("Step1"),i=Object(r["g"])(" | "),a=Object(r["g"])("Step2"),s=Object(r["g"])(" | "),u=Object(r["g"])("Step3");function d(e,t){var n=Object(r["y"])("router-link"),d=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["h"])("div",c,[Object(r["h"])(n,{to:"/step1"},{default:Object(r["D"])((function(){return[o]})),_:1}),i,Object(r["h"])(n,{to:"/step2"},{default:Object(r["D"])((function(){return[a]})),_:1}),s,Object(r["h"])(n,{to:"/step3"},{default:Object(r["D"])((function(){return[u]})),_:1})]),Object(r["h"])(d)],64)}n("7f93");const l={};l.render=d;var p=l,m=n("6c02"),f={class:"step1"},b={class:"todoapp"},O=Object(r["h"])("h1",null,"TODOS STEP1",-1);function j(e,t,n,c,o,i){var a=Object(r["y"])("todo-appender"),s=Object(r["y"])("todo-items"),u=Object(r["y"])("todo-footer");return Object(r["r"])(),Object(r["d"])("div",f,[Object(r["h"])("div",b,[O,Object(r["h"])(a,{onAddItem:c.addItem},null,8,["onAddItem"]),Object(r["h"])("main",null,[Object(r["h"])(s,{items:c.items,onUpdateItem:c.updateItem,onEditingItem:c.editingItem,onDeleteItem:c.deleteItem,onToggleItem:c.toggleItem},null,8,["items","onUpdateItem","onEditingItem","onDeleteItem","onToggleItem"]),Object(r["h"])(u,{count:c.items.length,"filter-type":c.filterType,onChangeFilter:c.changeFilterType},null,8,["count","filter-type","onChangeFilter"])])])])}var v=n("3835"),y=Object(r["G"])("data-v-b4e4701c"),g=y((function(e,t,n,c,o,i){return Object(r["r"])(),Object(r["d"])("input",{class:"new-todo",placeholder:"할일을 추가해주세요",onKeydown:t[1]||(t[1]=Object(r["E"])((function(){return c.addItem.apply(c,arguments)}),["enter"])),autofocus:""},null,32)})),h={name:"TodoAppender",setup:function(e,t){var n=function(e){t.emit("add-item",e.target.value),e.target.value=""};return{addItem:n}}};n("f8cb");h.render=g,h.__scopeId="data-v-b4e4701c";var I=h,T=Object(r["G"])("data-v-622118d7");Object(r["u"])("data-v-622118d7");var U={class:"count-container"},E={class:"todo-count"},k=Object(r["g"])("총 "),L=Object(r["g"])(" 개"),S={class:"filters"};Object(r["s"])();var A=T((function(e,t,n,c,o,i){return Object(r["r"])(),Object(r["d"])("div",U,[Object(r["h"])("span",E,[k,Object(r["h"])("strong",{innerHTML:n.count},null,8,["innerHTML"]),L]),Object(r["h"])("ul",S,[Object(r["h"])("li",null,[Object(r["h"])("a",{href:"#",class:["all",{selected:n.filterType===c.FilterTypes.ALL}],onClick:t[1]||(t[1]=Object(r["F"])((function(t){return e.$emit("change-filter",c.FilterTypes.ALL)}),["prevent"]))}," 전체보기 ",2)]),Object(r["h"])("li",null,[Object(r["h"])("a",{href:"#",class:["active",{selected:n.filterType===c.FilterTypes.ACTIVE}],onClick:t[2]||(t[2]=Object(r["F"])((function(t){return e.$emit("change-filter",c.FilterTypes.ACTIVE)}),["prevent"]))}," 해야할 일 ",2)]),Object(r["h"])("li",null,[Object(r["h"])("a",{href:"#",class:["completed",{selected:n.filterType===c.FilterTypes.COMPLETED}],onClick:t[3]||(t[3]=Object(r["F"])((function(t){return e.$emit("change-filter",c.FilterTypes.COMPLETED)}),["prevent"]))}," 완료한 일 ",2)])])])})),w=(n("a9e3"),{ALL:"all",ACTIVE:"active",COMPLETED:"completed"}),C={NONE:"NONE",FIRST:"FIRST",SECOND:"SECOND"},_={name:"TodoFooter",props:{filterType:{type:String,default:w.ALL},count:{type:Number,default:0}},setup:function(){return{FilterTypes:w}}};n("839d");_.render=A,_.__scopeId="data-v-622118d7";var F=_,R=Object(r["G"])("data-v-2a51b035");Object(r["u"])("data-v-2a51b035");var M={class:"todo-list"};Object(r["s"])();var P=R((function(e,t,n,c,o,i){var a=Object(r["y"])("todo-item");return Object(r["r"])(),Object(r["d"])("ul",M,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(n.items,(function(n,c){return Object(r["r"])(),Object(r["d"])(a,Object(r["m"])({key:c},n,{onEditing:t[1]||(t[1]=function(t){return e.$emit("editing-item",t)}),onUpdate:t[2]||(t[2]=function(t){var n=t.id,r=t.contents;return e.$emit("update-item",{id:n,contents:r})}),onDelete:t[3]||(t[3]=function(t){return e.$emit("delete-item",t)}),onToggle:t[4]||(t[4]=function(t){return e.$emit("toggle-item",t)})}),null,16)})),128))])})),x=Object(r["G"])("data-v-588488a9");Object(r["u"])("data-v-588488a9");var H={class:"view"};Object(r["s"])();var D=x((function(e,t,n,c,o,i){return Object(r["r"])(),Object(r["d"])("li",{class:c.className},[Object(r["h"])("div",H,[Object(r["h"])("input",{class:"toggle",type:"checkbox",checked:n.completed,onChange:t[1]||(t[1]=function(t){return e.$emit("toggle",n.id)})},null,40,["checked"]),Object(r["h"])("label",{class:"label",innerHTML:n.contents,onDblclick:t[2]||(t[2]=function(){return c.handleEditing.apply(c,arguments)})},null,40,["innerHTML"]),Object(r["h"])("button",{class:"destroy",onClick:t[3]||(t[3]=function(){return c.handleDelete.apply(c,arguments)})})]),n.editing?(Object(r["r"])(),Object(r["d"])("input",{key:0,class:"edit",value:n.contents,ref:function(e){return c.editor=e},onKeydown:[t[4]||(t[4]=Object(r["E"])((function(){return c.handleUpdate.apply(c,arguments)}),["enter"])),t[5]||(t[5]=Object(r["E"])((function(){return c.handleCancel.apply(c,arguments)}),["esc"]))]},null,40,["value"])):Object(r["e"])("",!0)],2)})),N={name:"TodoItem",props:{id:{type:Number,required:!0},completed:{type:Boolean,default:!1},contents:{type:String,default:""},editing:{type:Boolean,default:!1}},setup:function(e,t){var n=Object(r["w"])(null),c=Object(r["b"])((function(){var t=e.editing,n=e.completed;return t?"editing":n?"completed":""})),o=function(){t.emit("editing",e.id),Object(r["n"])((function(){return n.value.focus()}))},i=function(n){var r=n.target;t.emit("update",{id:e.id,contents:r.value})},a=function(){t.emit("update",{id:e.id,contents:e.contents})},s=function(){t.emit("delete",e.id)};return{className:c,editor:n,handleEditing:o,handleUpdate:i,handleCancel:a,handleDelete:s}}};n("b308");N.render=D,N.__scopeId="data-v-588488a9";var B=N,$={name:"TodoItems",components:{TodoItem:B},props:{items:{type:Array,default:function(){return[]}}}};n("32fa");$.render=P,$.__scopeId="data-v-2a51b035";var G=$,V=(n("99af"),n("4de4"),n("13d5"),n("b64b"),n("ade3")),q=n("5530"),J=n("2909"),K=(n("d81d"),n("a1e9")),Y=n("5502");function z(e){var t=Object(Y["b"])(),n=function(n){return n.map((function(n){return Object(K["a"])((function(){return t.state[e][n]}))}))},r=function(n){return n.map((function(n){return function(){for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return t.commit.apply(t,["".concat(e,"/").concat(n)].concat(c))}}))},c=function(n){return n.map((function(n){return function(){for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return t.dispatch.apply(t,["".concat(e,"/").concat(n)].concat(c))}}))},o=function(n){return n.map((function(n){return Object(K["a"])((function(){return t.getters["".concat(e,"/").concat(n)]}))}))};return{mapState:n,mapMutations:r,mapActions:c,mapGetters:o}}var Q,W=function(e){return JSON.parse(localStorage.getItem(e))||null},X=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},Z=function(e){return localStorage.removeItem(e)},ee={get:W,set:X,remove:Z},te="STEP1_TODO_REPOSITORY",ne=function(){var e;return(null===(e=ee.get(te))||void 0===e?void 0:e.todoItems)||[]},re=function(){var e;return(null===(e=ee.get(te))||void 0===e?void 0:e.filterType)||w.ALL},ce=function(e){var t=ee.get(te)||{};ee.set(te,Object(q["a"])(Object(q["a"])({},t),{},{todoItems:e}))},oe=function(e){var t=ee.get(te)||{};ee.set(te,Object(q["a"])(Object(q["a"])({},t),{},{filterType:e}))},ie={fetchTodoItems:ne,fetchFilterType:re,putTodoItems:ce,putFilterType:oe},ae="SET_TODO_ITEMS",se="SET_FILTER_TYPE",ue={namespaced:!0,state:{todoItems:ie.fetchTodoItems().reduce((function(e,t){return e.entities[t.id]=t,e.ids.push(t.id),e}),{entities:{},ids:[]}),filterType:ie.fetchFilterType()},getters:{filteredTodoItems:function(e){var t=e.filterType,n=e.todoItems,r=n.ids,c=n.entities;return r.map((function(e){return c[e]})).filter((function(e){var n=e.completed;return t===w.COMPLETED&&n||t===w.ACTIVE&&!n||t===w.ALL}))}},mutations:(Q={},Object(V["a"])(Q,ae,(function(e,t){e.todoItems=t;var n=t.ids,r=t.entities;ie.putTodoItems(n.map((function(e){return r[e]})))})),Object(V["a"])(Q,se,(function(e,t){e.filterType=t,ie.putFilterType(t)})),Q)},de=ue;function le(){var e=z("step1"),t=e.mapState,n=e.mapMutations,r=t(["todoItems"]),c=Object(v["a"])(r,1),o=c[0],i=n([ae]),a=Object(v["a"])(i,1),s=a[0],u=function(e){var t=o.value,n=t.entities,r=t.ids,c=Math.max.apply(Math,Object(J["a"])(r).concat([0]))+1;s({entities:Object(q["a"])(Object(q["a"])({},n),{},Object(V["a"])({},c,{id:c,contents:e,completed:!1,editing:!1})),ids:[].concat(Object(J["a"])(r),[c])})},d=function(e){var t=o.value,n=t.entities,r=t.ids;s({entities:Object(q["a"])(Object(q["a"])({},n),{},Object(V["a"])({},e,Object(q["a"])(Object(q["a"])({},n[e]),{},{editing:!0}))),ids:Object(J["a"])(r)})},l=function(e){var t=e.id,n=e.contents,r=o.value,c=r.entities,i=r.ids;s({entities:Object(q["a"])(Object(q["a"])({},c),{},Object(V["a"])({},t,Object(q["a"])(Object(q["a"])({},c[t]),{},{contents:n,editing:!1}))),ids:Object(J["a"])(i)})},p=function(e){var t=o.value,n=t.entities,r=t.ids;s({ids:r.filter((function(t){return t!==e})),entities:Object.keys(n).reduce((function(t,r){return r!==e&&(t[r]=n[r]),t}),{})})},m=function(e){var t=o.value,n=t.entities,r=t.ids;s({entities:Object(q["a"])(Object(q["a"])({},n),{},Object(V["a"])({},e,Object(q["a"])(Object(q["a"])({},n[e]),{},{completed:!n[e].completed}))),ids:Object(J["a"])(r)})};return{addItem:u,editingItem:d,updateItem:l,deleteItem:p,toggleItem:m}}function pe(){var e=z("step1"),t=e.mapState,n=e.mapMutations,r=t(["filterType"]),c=Object(v["a"])(r,1),o=c[0],i=n([se]),a=Object(v["a"])(i,1),s=a[0];return{filterType:o,changeFilterType:s}}var me={name:"Step1",components:{TodoItems:G,TodoFooter:F,TodoAppender:I},setup:function(){var e=z("step1"),t=e.mapGetters,n=t(["filteredTodoItems"]),r=Object(v["a"])(n,1),c=r[0],o=le(),i=o.addItem,a=o.updateItem,s=o.editingItem,u=o.deleteItem,d=o.toggleItem,l=pe(),p=l.filterType,m=l.changeFilterType;return{items:c,filterType:p,addItem:i,updateItem:a,editingItem:s,deleteItem:u,toggleItem:d,changeFilterType:m}}};n("8f01");me.render=j;var fe=me,be=(n("b0c0"),{class:"step2"}),Oe={id:"user-title"},je=Object(r["g"])("'s Todo List"),ve={class:"todoapp"};function ye(e,t,n,c,o,i){var a=Object(r["y"])("user-list"),s=Object(r["y"])("todo-appender"),u=Object(r["y"])("todo-items"),d=Object(r["y"])("todo-footer");return Object(r["r"])(),Object(r["d"])("div",be,[Object(r["h"])(a,{users:c.userHooks.orderedUsers.value,"selected-user":c.userHooks.selectedUserId.value,onAddUser:c.userHooks.addUser,onSelectUser:c.userHooks.selectUser,onRemoveUser:c.userHooks.removeUser,onFetchItems:c.todoHooks.fetchItems,onResetItems:c.todoHooks.resetItems},null,8,["users","selected-user","onAddUser","onSelectUser","onRemoveUser","onFetchItems","onResetItems"]),null!==c.userHooks.selectedUserId.value?(Object(r["r"])(),Object(r["d"])(r["a"],{key:0},[Object(r["h"])("h1",Oe,[Object(r["h"])("span",null,[Object(r["h"])("strong",{innerHTML:c.userHooks.selectedUser.name},null,8,["innerHTML"]),je])]),Object(r["h"])("section",ve,[Object(r["h"])(s,{onAddItem:c.todoHooks.addItem},null,8,["onAddItem"]),Object(r["h"])(u,{"todo-items":c.todoHooks.filteredTodoItems.value,"list-loading":c.todoHooks.listLoading.value,"append-loading":c.todoHooks.appendLoading.value,onUpdateItem:c.todoHooks.updateItem,onRemoveItem:c.todoHooks.removeItem,onToggleItem:c.todoHooks.toggleItem,onUpdatePriority:c.todoHooks.updatePriority},null,8,["todo-items","list-loading","append-loading","onUpdateItem","onRemoveItem","onToggleItem","onUpdatePriority"]),Object(r["h"])(d,{count:c.todoHooks.filteredTodoItems.value.length,"filter-type":c.filterType,onChangeFilter:c.changeFilterType,onRemoveAll:c.todoHooks.removeAllItem},null,8,["count","filter-type","onChangeFilter","onRemoveAll"])])],64)):Object(r["e"])("",!0)])}var ge={id:"user-list"};function he(e,t,n,c,o,i){return Object(r["r"])(),Object(r["d"])("section",null,[Object(r["h"])("div",ge,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(n.users,(function(e){var t=e.id,o=e.name;return Object(r["r"])(),Object(r["d"])("button",{key:t,class:["ripple",{active:n.selectedUser===t}],onClick:function(e){return c.selectUser(t)},innerHTML:o},null,10,["onClick","innerHTML"])})),128)),Object(r["h"])("button",{class:"ripple user-create-button",onClick:t[1]||(t[1]=function(){return c.addUser.apply(c,arguments)})}," + 유저 생성 "),Object(r["h"])("button",{class:"ripple user-create-button",onClick:t[2]||(t[2]=function(){return c.removeUser.apply(c,arguments)})}," - 선택 삭제 ")])])}n("498a");var Ie={name:"UserList",props:{users:{type:Array,default:function(){return[]}},selectedUser:{type:String,default:null}},setup:function(e,t){var n=t.emit,r=function(e){n("select-user",e),n("fetch-items",e)},c=function(){n("remove-user"),n("reset-items")},o=function(){var e=prompt("추가할 유저 이름을 입력해주세요");0!==e.trim().length&&n("add-user",e)};return{selectUser:r,addUser:o,removeUser:c}}};Ie.render=he;var Te=Ie,Ue={class:"input-container"};function Ee(e,t,n,c,o,i){return Object(r["r"])(),Object(r["d"])("section",Ue,[Object(r["h"])("input",{class:"new-todo",placeholder:"할 일을 입력해주세요.",onKeypress:t[1]||(t[1]=Object(r["E"])((function(){return c.handleAddItem.apply(c,arguments)}),["enter"])),autofocus:""},null,32)])}var ke={name:"TodoAppender",setup:function(e,t){var n=t.emit;return{handleAddItem:function(e){var t=e.target;n("add-item",t.value),t.value=""}}}};ke.render=Ee;var Le=ke,Se={class:"main"},Ae={class:"todo-list"};function we(e,t,n,c,o,i){var a=Object(r["y"])("todo-item"),s=Object(r["y"])("todo-loading-bar");return Object(r["r"])(),Object(r["d"])("section",Se,[Object(r["h"])("ul",Ae,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(n.todoItems,(function(n){return Object(r["r"])(),Object(r["d"])(a,Object(r["m"])({key:n.id},n,{onUpdateItem:t[1]||(t[1]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.$emit.apply(e,["update-item"].concat(n))}),onToggleItem:t[2]||(t[2]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.$emit.apply(e,["toggle-item"].concat(n))}),onRemoveItem:t[3]||(t[3]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.$emit.apply(e,["remove-item"].concat(n))}),onUpdatePriority:t[4]||(t[4]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.$emit.apply(e,["update-priority"].concat(n))})}),null,16)})),128)),n.listLoading?(Object(r["r"])(),Object(r["d"])(r["a"],{key:0},Object(r["x"])(5,(function(e){return Object(r["h"])(s,{key:"loading_".concat(e)})})),64)):Object(r["e"])("",!0),n.appendLoading?(Object(r["r"])(),Object(r["d"])(s,{key:1})):Object(r["e"])("",!0)])])}n("07ac");var Ce={class:"view"};function _e(e,t,n,c,o,i){var a=Object(r["y"])("todo-item-chip");return Object(r["r"])(),Object(r["d"])("li",{class:c.className},[Object(r["h"])("div",Ce,[Object(r["h"])("input",{class:"toggle",type:"checkbox",checked:n.isCompleted,onChange:t[1]||(t[1]=function(t){return e.$emit("toggle-item",n.id)})},null,40,["checked"]),Object(r["h"])("label",{class:"label",onDblclick:t[3]||(t[3]=function(e){return c.editContents(!0)})},[e.editingPriority||n.priority===c.PriorityTypes.NONE?(Object(r["r"])(),Object(r["d"])("select",{key:0,class:"chip select",onChange:t[2]||(t[2]=function(){return c.updatePriority.apply(c,arguments)})},[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(Object.values(c.PriorityTypes),(function(e,t){return Object(r["r"])(),Object(r["d"])("option",{key:"priority_".concat(n.id,"_").concat(t),value:e,selected:e===n.priority,innerHTML:"".concat(t,"순위")},null,8,["value","selected","innerHTML"])})),128))],32)):(Object(r["r"])(),Object(r["d"])(a,{key:1,priority:n.priority,onEditPriority:c.editPriority},null,8,["priority","onEditPriority"])),Object(r["g"])(" "+Object(r["A"])(n.contents),1)],32),Object(r["h"])("button",{class:"destroy",onClick:t[4]||(t[4]=function(t){return e.$emit("remove-item",n.id)})})]),Object(r["h"])("input",{class:"edit",ref:function(e){return c.editor=e},value:n.contents,onKeyup:[t[5]||(t[5]=Object(r["E"])((function(){return c.updateItem.apply(c,arguments)}),["enter"])),t[6]||(t[6]=Object(r["E"])((function(e){return c.editContents(!1)}),["esc"]))]},null,40,["value"])],2)}function Fe(e,t,n,c,o,i){return c.show?(Object(r["r"])(),Object(r["d"])("span",{key:0,class:["chip",c.className],onClick:t[1]||(t[1]=function(t){return e.$emit("edit-priority")}),innerHTML:c.text},null,10,["innerHTML"])):Object(r["e"])("",!0)}var Re={name:"TodoItemChip",props:{priority:{type:String,required:!0}},setup:function(e){var t=Object(K["a"])((function(){var t=e.priority;return t===C.FIRST?"primary":t===C.SECOND?"secondary":null})),n=Object(K["a"])((function(){var t=e.priority;return t===C.FIRST?"1순위":t===C.SECOND?"2순위":null})),r=Object(K["a"])((function(){return e.priority!==C.NONE}));return{className:t,text:n,show:r}}};Re.render=Fe;var Me=Re,Pe=n("5c40"),xe={name:"TodoItem",components:{TodoItemChip:Me},props:{id:{type:String,required:!0},contents:{type:String,required:!0},isCompleted:{type:Boolean,required:!0},priority:{type:String,required:!0}},setup:function(e,t){var n=t.emit,r=Object(K["j"])(null),c=Object(K["i"])({editingContents:!1,editingPriority:!1}),o=Object(K["a"])((function(){return c.editingContents?"editing":e.isCompleted?"completed":null})),i=function(e){c.editingContents=e,Object(Pe["s"])((function(){return r.value.focus()}))},a=function(){c.editingPriority=!0},s=function(t){var r=t.target;n("update-priority",{itemId:e.id,priority:r.value}),c.editingPriority=!1},u=function(t){var r=t.target;n("update-item",{itemId:e.id,contents:r.value}),i(!1)};return Object(q["a"])(Object(q["a"])({},Object(K["q"])(c)),{},{className:o,PriorityTypes:C,editor:r,editContents:i,editPriority:a,updatePriority:s,updateItem:u})}};xe.render=_e;var He=xe,De=Object(r["f"])('<div class="view"><label class="label"><div class="animated-background"><div class="skel-mask-container"><div class="skel-mask"></div></div></div></label></div>',1);function Ne(e,t,n,c,o,i){return Object(r["r"])(),Object(r["d"])("li",null,[De])}var Be={name:"TodoLoadingBar"};Be.render=Ne;var $e=Be,Ge={name:"TodoItems",components:{TodoLoadingBar:$e,TodoItem:He},props:{todoItems:{type:Array,default:function(){return[]}},listLoading:{type:Boolean,default:!1},appendLoading:{type:Boolean,default:!1}}};Ge.render=we;var Ve=Ge,qe={class:"count-container"},Je={class:"todo-count"},Ke=Object(r["g"])("총 "),Ye=Object(r["g"])(" 개"),ze={class:"filters"};function Qe(e,t,n,c,o,i){return Object(r["r"])(),Object(r["d"])("div",qe,[Object(r["h"])("span",Je,[Ke,Object(r["h"])("strong",{innerHTML:n.count},null,8,["innerHTML"]),Ye]),Object(r["h"])("ul",ze,[Object(r["h"])("li",null,[Object(r["h"])("a",{href:"#",onClick:t[1]||(t[1]=Object(r["F"])((function(t){return e.$emit("change-filter",c.FilterTypes.ALL)}),["prevent"])),class:["all",{selected:c.FilterTypes.ALL===n.filterType}],innerHTML:"전체보기"},null,2)]),Object(r["h"])("li",null,[Object(r["h"])("a",{href:"#",onClick:t[2]||(t[2]=Object(r["F"])((function(t){return e.$emit("change-filter",c.FilterTypes.ACTIVE)}),["prevent"])),class:["active",{selected:c.FilterTypes.ACTIVE===n.filterType}],innerHTML:"해야할 일"},null,2)]),Object(r["h"])("li",null,[Object(r["h"])("a",{href:"#",onClick:t[3]||(t[3]=Object(r["F"])((function(t){return e.$emit("change-filter",c.FilterTypes.COMPLETED)}),["prevent"])),class:["completed",{selected:c.FilterTypes.COMPLETED===n.filterType}],innerHTML:"완료한 일"},null,2)])]),Object(r["h"])("button",{class:"clear-completed",onClick:t[4]||(t[4]=function(t){return e.$emit("remove-all")})}," 모두 삭제 ")])}var We={name:"TodoFooter",props:{count:{type:Number,default:0},filterType:{type:String,default:w.ALL}},setup:function(){return{FilterTypes:w}}};We.render=Qe;var Xe=We,Ze=(n("7db0"),n("15fd")),et=(n("96cf"),n("1da1")),tt=(n("d3b7"),n("bc3a")),nt=n.n(tt),rt=nt.a.create({baseURL:"https://js-todo-list-9ca3a.df.r.appspot.com/api",timeout:5e3});rt.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var ct,ot,it=function(){return rt.get("/users")},at=function(e){return rt.post("/users",{name:e})},st=function(e){return rt.get("/users/".concat(e))},ut=function(e){return rt.delete("/users/".concat(e))},dt=function(e){return rt.get("/users/".concat(e,"/items"))},lt=function(e,t){return rt.post("/users/".concat(e,"/items"),{contents:t})},pt=function(e){return rt.delete("/users/".concat(e,"/items"))},mt=function(e,t){return rt.delete("/users/".concat(e,"/items/").concat(t))},ft=function(e,t,n){return rt.put("/users/".concat(e,"/items/").concat(t),{contents:n})},bt=function(e,t,n){return rt.put("/users/".concat(e,"/items/").concat(t,"/priority"),{priority:n})},Ot=function(e,t){return rt.put("/users/".concat(e,"/items/").concat(t,"/toggle"))},jt={fetchUsers:it,addUser:at,fetchUser:st,removeUser:ut,fetchItemsByUser:dt,addItemByUser:lt,removeUserItems:pt,removeUserItemById:mt,updateItemByUserIdAndItemId:ft,updateItemPriorityByUserIdAndItemId:bt,toggleItemByUserIdAndItemId:Ot},vt="SET_USERS",yt="SET_USER",gt="SET_TODO_ITEMS",ht="SET_LIST_LOADING",It="SET_APPEND_LOADING",Tt="SET_FILTER_TYPE",Ut="FETCH_USERS",Et="ADD_USER",kt="REMOVE_USER",Lt="FETCH_ITEMS",St="ADD_ITEM",At="UPDATE_ITEM",wt="REMOVE_ITEM",Ct="REMOVE_ALL_ITEM",_t="TOGGLE_ITEM",Ft="UPDATE_PRIORITY",Rt={namespaced:!0,state:{users:[],selectedUserId:null,todoItems:[],listLoading:!1,appendLoading:!1,filterType:w.ALL},getters:{orderedUsers:function(e){var t=e.users;return Object(J["a"])(t).sort((function(e,t){return e.name<t.name?1:-1}))},selectedUser:function(e){var t=e.users,n=e.selectedUserId;return t.find((function(e){var t=e._id;return t===n}))},filteredTodoItems:function(e){var t=e.filterType,n=e.todoItems;return n.filter((function(e){var n=e.isCompleted;return t===w.COMPLETED&&n||t===w.ACTIVE&&!n||t===w.ALL}))}},mutations:(ct={},Object(V["a"])(ct,vt,(function(e,t){e.users=t})),Object(V["a"])(ct,yt,(function(e,t){e.selectedUserId=t})),Object(V["a"])(ct,gt,(function(e,t){e.todoItems=t})),Object(V["a"])(ct,ht,(function(e,t){e.listLoading=t})),Object(V["a"])(ct,It,(function(e,t){e.appendLoading=t})),Object(V["a"])(ct,Tt,(function(e,t){e.filterType=t})),ct),actions:(ot={},Object(V["a"])(ot,Ut,(function(e){return Object(et["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,jt.fetchUsers();case 3:r=t.sent,n(vt,r.map((function(e){var t=e._id,n=e.name;return{id:t,name:n}})));case 5:case"end":return t.stop()}}),t)})))()})),Object(V["a"])(ot,Et,(function(e,t){return Object(et["a"])(regeneratorRuntime.mark((function n(){var r,c,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,c=e.commit,n.next=3,jt.addUser(t);case 3:return o=n.sent,i=o._id,n.next=7,r(Ut);case 7:c(yt,i);case 8:case"end":return n.stop()}}),n)})))()})),Object(V["a"])(ot,kt,(function(e){return Object(et["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.dispatch,r=e.state,-1!==r.selectedUserId){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,jt.removeUser(r.selectedUserId);case 5:return t.abrupt("return",n(Ut));case 6:case"end":return t.stop()}}),t)})))()})),Object(V["a"])(ot,Lt,(function(e){var t=arguments;return Object(et["a"])(regeneratorRuntime.mark((function n(){var r,c,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,c=e.state,o=t.length>1&&void 0!==t[1]?t[1]:c.selectedUserId,-1!==o){n.next=4;break}return n.abrupt("return");case 4:return o!==c.selectedUserId&&r(ht,!0),n.prev=5,n.next=8,jt.fetchItemsByUser(c.selectedUserId);case 8:i=n.sent,r(gt,i.map((function(e){var t=e._id,n=Object(Ze["a"])(e,["_id"]);return Object(q["a"])({id:t},n)}))),n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](5),r(gt,[]),console.error(n.t0);case 16:return n.prev=16,r(yt,o),r(ht,!1),n.finish(16);case 20:case"end":return n.stop()}}),n,null,[[5,12,16,20]])})))()})),Object(V["a"])(ot,St,(function(e,t){return Object(et["a"])(regeneratorRuntime.mark((function n(){var r,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,c=e.state,o=e.commit,o(It,!0),n.prev=2,n.next=5,jt.addItemByUser(c.selectedUserId,t);case 5:return n.next=7,r(Lt);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.error(n.t0);case 12:return n.prev=12,o(It,!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,9,12,15]])})))()})),Object(V["a"])(ot,At,(function(e,t){return Object(et["a"])(regeneratorRuntime.mark((function n(){var r,c,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,c=e.state,o=t.itemId,i=t.contents,n.next=4,jt.updateItemByUserIdAndItemId(c.selectedUserId,o,i);case 4:return n.abrupt("return",r(Lt));case 5:case"end":return n.stop()}}),n)})))()})),Object(V["a"])(ot,wt,(function(e,t){return Object(et["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,c=e.state,n.next=3,jt.removeUserItemById(c.selectedUserId,t);case 3:return n.abrupt("return",r(Lt));case 4:case"end":return n.stop()}}),n)})))()})),Object(V["a"])(ot,Ct,(function(e){return Object(et["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.state,t.next=3,jt.removeUserItems(r.selectedUserId);case 3:return t.abrupt("return",n(Lt));case 4:case"end":return t.stop()}}),t)})))()})),Object(V["a"])(ot,_t,(function(e,t){return Object(et["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,c=e.state,n.next=3,jt.toggleItemByUserIdAndItemId(c.selectedUserId,t);case 3:return n.abrupt("return",r(Lt));case 4:case"end":return n.stop()}}),n)})))()})),Object(V["a"])(ot,Ft,(function(e,t){return Object(et["a"])(regeneratorRuntime.mark((function n(){var r,c,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,c=e.state,o=t.itemId,i=t.priority,n.next=4,jt.updateItemPriorityByUserIdAndItemId(c.selectedUserId,o,i);case 4:return n.abrupt("return",r(Lt));case 5:case"end":return n.stop()}}),n)})))()})),ot)},Mt=Rt;function Pt(){var e=z("step2"),t=e.mapState,n=e.mapGetters,r=e.mapActions,c=e.mapMutations,o=t(["selectedUserId"]),i=Object(v["a"])(o,1),a=i[0],s=n(["orderedUsers","selectedUser"]),u=Object(v["a"])(s,2),d=u[0],l=u[1],p=c([yt]),m=Object(v["a"])(p,1),f=m[0],b=r([Ut,Et,kt]),O=Object(v["a"])(b,3),j=O[0],y=O[1],g=O[2];return{selectedUserId:a,orderedUsers:d,selectedUser:l,selectUser:f,fetchUsers:j,addUser:y,removeUser:g}}function xt(){var e=z("step2"),t=e.mapState,n=e.mapGetters,r=e.mapActions,c=e.mapMutations,o=t(["listLoading","appendLoading"]),i=Object(v["a"])(o,2),a=i[0],s=i[1],u=n(["filteredTodoItems"]),d=Object(v["a"])(u,1),l=d[0],p=c([gt,yt]),m=Object(v["a"])(p,2),f=m[0],b=m[1],O=r([Lt,St,At,_t,wt,Ct,Ft]),j=Object(v["a"])(O,7),y=j[0],g=j[1],h=j[2],I=j[3],T=j[4],U=j[5],E=j[6],k=function(){f([]),b(-1)};return{listLoading:a,appendLoading:s,filteredTodoItems:l,fetchItems:y,addItem:g,updateItem:h,toggleItem:I,removeItem:T,removeAllItem:U,updatePriority:E,resetItems:k}}function Ht(){var e=z("step2"),t=e.mapState,n=e.mapMutations,r=t(["filterType"]),c=Object(v["a"])(r,1),o=c[0],i=n([Tt]),a=Object(v["a"])(i,1),s=a[0];return{filterType:o,changeFilterType:s}}var Dt={name:"Step2",components:{TodoItems:Ve,TodoAppender:Le,UserList:Te,TodoFooter:Xe},setup:function(){var e=Pt(),t=xt(),n=Ht(),r=n.filterType,c=n.changeFilterType;return e.fetchUsers(),{userHooks:e,todoHooks:t,filterType:r,changeFilterType:c}}};n("22b0");Dt.render=ye;var Nt=Dt,Bt={class:"step3"};function $t(e,t,n,c,o,i){return Object(r["r"])(),Object(r["d"])("div",Bt,"step3")}var Gt={name:"Step3"};n("3640");Gt.render=$t;var Vt=Gt,qt=[{path:"/step1",name:"Step1",component:fe},{path:"/step2",name:"Step2",component:Nt},{path:"/step3",name:"Step3",component:Vt}],Jt=Object(m["a"])({history:Object(m["b"])(),routes:qt}),Kt=Jt,Yt=Object(Y["a"])({modules:{step1:de,step2:Mt},state:{},mutations:{},actions:{}});Object(r["c"])(p).use(Kt).use(Yt).mount("#app")},"585b":function(e,t,n){},"7d60":function(e,t,n){},"7f93":function(e,t,n){"use strict";n("80c1")},"80c1":function(e,t,n){},"839d":function(e,t,n){"use strict";n("585b")},"8f01":function(e,t,n){"use strict";n("f86d")},b308:function(e,t,n){"use strict";n("4c98")},dd98:function(e,t,n){},f86d:function(e,t,n){},f8cb:function(e,t,n){"use strict";n("dd98")}});
//# sourceMappingURL=app.e406c9f1.js.map