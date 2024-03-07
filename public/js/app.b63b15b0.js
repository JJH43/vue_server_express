(function(){"use strict";var o={1082:function(o,e,t){var n=t(5130),a=t(6768);const s={id:"app"};function d(o,e,t,n,d,l){const r=(0,a.g2)("TodoHeader"),c=(0,a.g2)("TodoInput"),u=(0,a.g2)("TodoList"),i=(0,a.g2)("TodoFooter");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.bF)(r),(0,a.bF)(c),(0,a.bF)(u),(0,a.bF)(i)])}var l=t(4232);function r(o,e,t,n,s,d){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("h1",null,"TODO it! ("+(0,l.v_)(n.mode)+")",1)])}var c={setup(){const o="운영 모드";return{mode:o}}},u=t(1241);const i=(0,u.A)(c,[["render",r],["__scopeId","data-v-9533e3fc"]]);var m=i,p=t(144);const v={class:"modal-mask"},f={class:"modal-wrapper"},h={class:"modal-container"},T={class:"modal-header"},k={class:"modal-body"},b={class:"modal-footer"};function g(o,e){return(0,a.uX)(),(0,a.Wv)(n.eB,{name:"modal"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",v,[(0,a.Lk)("div",f,[(0,a.Lk)("div",h,[(0,a.Lk)("div",T,[(0,a.RG)(o.$slots,"header",{},(()=>[(0,a.eW)(" default header ")]))]),(0,a.Lk)("div",k,[(0,a.RG)(o.$slots,"body",{},(()=>[(0,a.eW)(" default body ")]))]),(0,a.Lk)("div",b,[(0,a.RG)(o.$slots,"footer",{},(()=>[(0,a.eW)(" default footer "),(0,a.Lk)("button",{class:"modal-default-button",onClick:e[0]||(e[0]=e=>o.$emit("close"))}," OK ")]))])])])])])),_:3})}const I={},y=(0,u.A)(I,[["render",g]]);var C=y,_=t(782);const L=o=>((0,a.Qi)("data-v-0671b8b0"),o=o(),(0,a.jt)(),o),O={class:"inputBox shadow"},j=["value"],A=L((()=>(0,a.Lk)("i",{class:"fas fa-plus addBtn"},null,-1))),S=[A],w=L((()=>(0,a.Lk)("div",null,"아무것도 입력하지 않으셨습니다.",-1)));var x={__name:"TodoInput",emits:["input:todo"],setup(o,{emit:e}){const t=(0,_.Pj)(),s=(0,p.KR)(!1),d=(0,p.KR)(""),l=e,r=o=>{const e=o.target.value;e&&(l("input:todo",e),d.value=e)},c=()=>{if(""!==d.value){const o=d.value,e={completed:!1,item:o};t.dispatch("moduleTodo/addTodo",e),u()}else s.value=!s.value},u=()=>{d.value=""};return(o,e)=>((0,a.uX)(),(0,a.CE)("div",O,[(0,a.Lk)("input",{type:"text",value:d.value,onInput:r,onKeyup:(0,n.jR)(c,["enter"])},null,40,j),(0,a.Lk)("span",{class:"addContainer",onClick:c},S),s.value?((0,a.uX)(),(0,a.Wv)(C,{key:0,onClose:e[1]||(e[1]=o=>s.value=!1)},{header:(0,a.k6)((()=>[(0,a.Lk)("h3",null,[(0,a.eW)(" 경고! "),(0,a.Lk)("i",{class:"closeModalBtn fas fa-times",onClick:e[0]||(e[0]=o=>s.value=!1)})])])),body:(0,a.k6)((()=>[w])),_:1})):(0,a.Q3)("",!0)]))}};const E=(0,u.A)(x,[["__scopeId","data-v-0671b8b0"]]);var F=E;const X=o=>((0,a.Qi)("data-v-1ebf6844"),o=o(),(0,a.jt)(),o),B=["onClick"],P=["onClick"],R=X((()=>(0,a.Lk)("i",{class:"fas fa-trash-alt"},null,-1))),W=[R];var $={__name:"TodoList",setup(o){const e=(0,_.Pj)(),t=(0,a.EW)((()=>e.state.moduleTodo.todoItems));(0,a.sV)((()=>{e.dispatch("moduleTodo/loadTodoItems")}));const s=o=>{e.dispatch("moduleTodo/removeTodo",o)},d=o=>{o.completed=!o.completed,e.dispatch("moduleTodo/toggleTodo",o)};return(o,e)=>((0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(n.F,{name:"list",tag:"ul"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.value,((o,e)=>((0,a.uX)(),(0,a.CE)("li",{key:e,class:"shadow"},[(0,a.Lk)("i",{class:(0,l.C4)(["fas fa-check checkBtn",{checkBtnCompleted:o.completed}]),onClick:e=>d(o)},null,10,B),(0,a.Lk)("span",{class:(0,l.C4)({textCompleted:o.completed})},(0,l.v_)(o.item),3),(0,a.Lk)("span",{class:"removeBtn",onClick:e=>s(o)},W,8,P)])))),128))])),_:1})]))}};const K=(0,u.A)($,[["__scopeId","data-v-1ebf6844"]]);var M=K;const G={class:"clearAllContainer"};function Q(o,e,t,n,s,d){return(0,a.uX)(),(0,a.CE)("div",G,[(0,a.Lk)("span",{class:"clearAllBtn",onClick:e[0]||(e[0]=(...o)=>n.clearTodo&&n.clearTodo(...o))},"Clear All")])}var H={setup(){const o=(0,_.Pj)(),e=()=>{o.dispatch("moduleTodo/clearTodo")};return{clearTodo:e}}};const J=(0,u.A)(H,[["render",Q],["__scopeId","data-v-51ceb1fc"]]);var N=J,D={name:"App",components:{TodoHeader:m,TodoInput:F,TodoList:M,TodoFooter:N},setup(){return{}}};const U=(0,u.A)(D,[["render",d]]);var V=U,q=(t(4114),t(8355));const z="http://localhost:4500/api",Y=q.A.create({baseURL:z,headers:{"Content-type":"application/json"}});var Z=Y;const oo={namespaced:!0,state:()=>({todoItems:[]}),actions:{loadTodoItems({commit:o}){Z.get("/todos").then((o=>o.data)).then((e=>o("setTodoItems",e))).catch((o=>{q.A.isAxiosError(o)?console.log(o?.response?.status+" : "+o.message):console.error(o)}))},addTodo({commit:o},e){Z.post("/todos",e).then((o=>o.data)).then((e=>{o("setTodoItems",e)}))},removeTodo({commit:o},e){Z.delete(`/todos/${e.id}`).then((o=>o.data)).then((e=>{o("setTodoItems",e)}))},toggleTodo({commit:o},e){Z.patch(`/todos/${e.id}`,e).then((o=>o.data)).then((e=>{o("setTodoItems",e)}))},clearTodo({commit:o}){Z.delete("/todos").then((o=>o.data)).then((e=>{o("setTodoItems",e)}))}},mutations:{setTodoItems(o,e){o.todoItems=e},addTodo(o,e){const t={completed:!1,item:e};localStorage.setItem(e,JSON.stringify(t)),o.todoItems.push(t)},removeTodo(o,e){const{todoItem:{item:t},index:n}=e;localStorage.removeItem(t),o.todoItems.splice(n,1)},toggleTodo(o,e){const{todoItem:{completed:t,item:n},index:a}=e;o.todoItems[a].completed=!t,localStorage.removeItem(n),localStorage.setItem(n,JSON.stringify(o.todoItems[a]))},clearTodo(o){localStorage.clear(),o.todoItems=[]}}},eo=(0,_.y$)({plugins:[],modules:{moduleTodo:oo}});(0,n.Ef)(V).use(eo).mount("#app")}},e={};function t(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={exports:{}};return o[n].call(s.exports,s,s.exports,t),s.exports}t.m=o,function(){var o=[];t.O=function(e,n,a,s){if(!n){var d=1/0;for(u=0;u<o.length;u++){n=o[u][0],a=o[u][1],s=o[u][2];for(var l=!0,r=0;r<n.length;r++)(!1&s||d>=s)&&Object.keys(t.O).every((function(o){return t.O[o](n[r])}))?n.splice(r--,1):(l=!1,s<d&&(d=s));if(l){o.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=o.length;u>0&&o[u-1][2]>s;u--)o[u]=o[u-1];o[u]=[n,a,s]}}(),function(){t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,{a:e}),e}}(),function(){t.d=function(o,e){for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){t.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){var o={524:0};t.O.j=function(e){return 0===o[e]};var e=function(e,n){var a,s,d=n[0],l=n[1],r=n[2],c=0;if(d.some((function(e){return 0!==o[e]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(r)var u=r(t)}for(e&&e(n);c<d.length;c++)s=d[c],t.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return t.O(u)},n=self["webpackChunkvue3_todoapp_cli"]=self["webpackChunkvue3_todoapp_cli"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(1082)}));n=t.O(n)})();
//# sourceMappingURL=app.b63b15b0.js.map