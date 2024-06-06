(function(){"use strict";var e={4920:function(e,t,n){var i=n(9242),r=n(3396),a=n(7139);const o={class:"container-fluid mt-5"},l={class:"row"},s={class:"col-12"},c={class:"row mt-3"},d={class:"col-4 offset-4"},u={class:"col-2 offset-2"},v={class:"float-end"},f=(0,r._)("i",{class:"fa-solid fa-sliders"},null,-1),p=[f];function m(e,t,n,f,m,y){const g=(0,r.up)("CalendarEntry"),h=(0,r.up)("CalendarSettings");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",l,[(0,r._)("div",s,[((0,r.wg)(),(0,r.j4)(r.Ob,null,[(0,r.Wm)(i.uT,{name:"fade",mode:"out-in",appear:""},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(y.activeView)))])),_:1})],1024))])]),(0,r._)("div",c,[(0,r._)("div",d,[(0,r.Wm)(g)]),(0,r._)("div",u,[(0,r._)("div",v,[(0,r._)("button",{class:(0,a.C_)(["btn btn-lg mb-2 shadow",y.buttonSettingsClasses]),onClick:t[0]||(t[0]=e=>y.toggleDisplaySettings())},p,2)]),(0,r.Wm)(i.uT,{"enter-active-class":"animate__animated animate__bounceInRight","leave-active-class":"animate__animated animate__bounceOutRight"},{default:(0,r.w5)((()=>[m.displaySettings?((0,r.wg)(),(0,r.j4)(h,{key:0})):(0,r.kq)("",!0)])),_:1})])])])}var y=n(2552);const g={id:"calendar-week"},h={class:"card-group"};function w(e,t,n,i,a,o){const l=(0,r.up)("CalendarDay");return(0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("div",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.calendarWeekData,(e=>((0,r.wg)(),(0,r.j4)(l,{key:e.id,day:e},null,8,["day"])))),128))])])}const b=e=>((0,r.dD)("data-v-be48ef64"),e=e(),(0,r.Cn)(),e),_={class:"card-body"},D={key:0},k={key:1},C=b((()=>(0,r._)("div",{class:"alert alert-light text-center"},[(0,r._)("i",null,"Keine Termine")],-1))),E=[C];function N(e,t,n,o,l,s){const c=(0,r.up)("CalendarEvent");return(0,r.wg)(),(0,r.iD)("div",{class:(0,a.C_)(["card border-start mx-1 shadow rounded",s.cardClasses])},[(0,r._)("div",{class:(0,a.C_)(["card-header text-center",s.cardHeaderClasses]),role:"button",onClick:t[0]||(t[0]=e=>s.setActiveDay())},[(0,r._)("strong",null,(0,a.zw)(n.day.fullName),1)],2),(0,r._)("div",_,[(0,r.Wm)(i.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[n.day.events.length?((0,r.wg)(),(0,r.iD)("div",D,[(0,r.Wm)(i.W3,{name:"list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.events,(e=>((0,r.wg)(),(0,r.j4)(c,{key:e.title,event:e,day:n.day},{eventPriority:(0,r.w5)((e=>[(0,r._)("h5",null,(0,a.zw)(e.priorityDisplayName),1)])),default:(0,r.w5)((({event:e})=>[(0,r._)("i",null,(0,a.zw)(e.title),1)])),_:2},1032,["event","day"])))),128))])),_:1})])):((0,r.wg)(),(0,r.iD)("div",k,E))])),_:1})])],2)}const O={id:"calendar-event"},W={key:0},T={key:1},j=["placeholder"],P=(0,r._)("option",{value:"-1"},"Hohe Priorität",-1),S=(0,r._)("option",{value:"0"},"Geringe Priorität",-1),Z=(0,r._)("option",{value:"1"},"Keine Priorität",-1),A=[P,S,Z],x=(0,r._)("hr",null,null,-1);function I(e,t,n,o,l,s){return(0,r.wg)(),(0,r.iD)("div",O,[(0,r._)("div",{class:(0,a.C_)(["alert text-center shadow",s.alertColor])},[(0,r.Wm)(i.uT,{name:"fade",mode:"out-in",onAfterEnter:t[5]||(t[5]=e=>s.setInputFocus())},{default:(0,r.w5)((()=>[n.event.edit?((0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("input",{type:"text",class:"form-control",ref:"newEventTitleInput",placeholder:n.event.title,onInput:t[2]||(t[2]=e=>s.setNewEventTitle(e))},null,40,j),(0,r.wy)((0,r._)("select",{class:"form-select mt-2","onUpdate:modelValue":t[3]||(t[3]=e=>l.newEventPriority=e)},A,512),[[i.bM,l.newEventPriority]]),x,(0,r._)("i",{class:"fa-regular fa-floppy-disk",role:"button",onClick:t[4]||(t[4]=e=>s.updateEvent())})])):((0,r.wg)(),(0,r.iD)("div",W,[(0,r._)("div",null,[(0,r.WI)(e.$slots,"eventPriority",{priorityDisplayName:s.priorityDisplayName},(()=>[(0,r._)("strong",null,(0,a.zw)(s.priorityDisplayName),1)]))]),(0,r.WI)(e.$slots,"default",{event:n.event},(()=>[(0,r._)("div",null,(0,a.zw)(n.event.title),1)])),(0,r._)("div",null,[(0,r._)("i",{class:"fa-regular fa-pen-to-square me-4",role:"button",onClick:t[0]||(t[0]=e=>s.editEvent())}),(0,r._)("i",{class:"fa-regular fa-square-check",role:"button",onClick:t[1]||(t[1]=e=>s.deleteEvent())})])]))])),_:3})],2)])}var M={name:"CalendarEvent",props:{event:Object,day:Object},data(){return{newEventTitle:"",newEventPriority:this.event.priority}},computed:{priorityDisplayName(){switch(this.event.priority){case 1:return"Keine Priorität";case 0:return"Geringe Priorität";case-1:return"Hohe Priorität"}return"Unbekannte Priorität"},alertColor(){return"alert-"+this.event.color}},methods:{deleteEvent(){y.Z.mutations.deleteEvent(this.day.id,this.event.title)},editEvent(){y.Z.mutations.editEvent(this.day.id,this.event.title)},updateEvent(){y.Z.mutations.updateEvent(this.day.id,this.event.title,{title:this.newEventTitle,priority:this.newEventPriority})},setNewEventTitle(e){this.newEventTitle=e.target.value},setInputFocus(){this.$refs.newEventTitleInput.focus()}}},V=n(89);const H=(0,V.Z)(M,[["render",I]]);var K=H,q={name:"CalendarDay",components:{CalendarEvent:K},props:{day:{type:Object,required:!0,default:function(){return{id:-1,fullName:"Fehlender Wochentag",events:[]}},validator:function(e){if(Object.keys(e).includes("id"))return!0}}},computed:{cardClasses(){return this.day.id===y.Z.getters.activeDay().id?["border-primary"]:null},cardHeaderClasses(){return this.day.id===y.Z.getters.activeDay().id?["bg-primary","text-white"]:null},events(){return y.Z.getters.events(this.day.id)}},methods:{setActiveDay(){y.Z.mutations.setActiveDay(this.day.id)}}};const z=(0,V.Z)(q,[["render",N],["__scopeId","data-v-be48ef64"]]);var F=z,L={name:"CalendarWeek",components:{CalendarDay:F},data(){return{calendarWeekData:y.Z.state.calendarWeekData}}};const U=(0,V.Z)(L,[["render",w]]);var G=U;const Y={class:"row"},$={class:"col-2 offset-3"},R={class:"list-group shadow"},B=["onClick"],J={class:"col-4"};function Q(e,t,n,i,o,l){const s=(0,r.up)("CalendarDay");return(0,r.wg)(),(0,r.iD)("div",Y,[(0,r._)("div",$,[(0,r._)("ul",R,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.calendarWeekData,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id,class:(0,a.C_)(["list-group-item",l.isActive(e.id)]),onClick:t=>l.setActiveDay(e.id)},(0,a.zw)(e.fullName),11,B)))),128))])]),(0,r._)("div",J,[(0,r.Wm)(s,{day:l.activeDay},null,8,["day"])])])}var X={name:"CalendarWeekAsList",components:{CalendarDay:F},data(){return{calendarWeekData:y.Z.state.calendarWeekData}},computed:{activeDay(){return y.Z.getters.activeDay()}},methods:{setActiveDay(e){y.Z.mutations.setActiveDay(e)},isActive(e){if(e===this.activeDay.id)return["active"]}}};const ee=(0,V.Z)(X,[["render",Q]]);var te=ee;const ne={id:"calender-entry"},ie={class:"card shadow"},re={class:"card-header text-center"},ae={class:"card-body"},oe={key:0,class:"alert alert-danger shadow"},le=(0,r._)("option",{value:"-1"},"Hohe Priorität",-1),se=(0,r._)("option",{value:"0"},"Geringe Priorität",-1),ce=(0,r._)("option",{value:"1"},"Keine Priorität",-1),de=[le,se,ce],ue={class:"text-center mt-3"},ve=["onClick"],fe=(0,r._)("hr",null,null,-1),pe={class:"d-grid gap-2"};function me(e,t,n,o,l,s){return(0,r.wg)(),(0,r.iD)("div",ne,[(0,r._)("div",ie,[(0,r._)("div",re,[(0,r._)("h5",null,[(0,r.Uk)(" Neuer Termin für: "),(0,r._)("strong",null,(0,a.zw)(s.activeDayName),1)])]),(0,r._)("div",ae,[l.error?((0,r.wg)(),(0,r.iD)("div",oe," Der Titel darf nicht leer sein. ")):(0,r.kq)("",!0),(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:"Neuer Eintrag",ref:"eventTitleInput","onUpdate:modelValue":t[0]||(t[0]=e=>l.event.title=e),onKeyup:[t[1]||(t[1]=(0,i.D2)((0,i.iM)((e=>s.submitEvent()),["exact"]),["enter"])),t[2]||(t[2]=(0,i.D2)((0,i.iM)((e=>s.resetEventTitle()),["exact"]),["esc"]))]},null,544),[[i.nr,l.event.title]]),(0,r.wy)((0,r._)("select",{class:"form-select mt-2","onUpdate:modelValue":t[3]||(t[3]=e=>l.event.priority=e)},de,512),[[i.bM,l.event.priority]]),(0,r._)("div",ue,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.eventColors,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e,class:(0,a.C_)(["d-inline-block alert alert m-0 me-2 square shadow",s.eventColorClasses(e)]),role:"button",onClick:t=>s.setEventColor(e)},null,10,ve)))),128))]),fe,(0,r._)("div",pe,[(0,r._)("button",{class:"btn btn-primary shadow",onClick:t[4]||(t[4]=e=>s.submitEvent())}," Speichern "),(0,r._)("button",{class:"btn btn-danger shadow",onClick:t[5]||(t[5]=e=>s.resetEventTitle())}," Zurücksetzen ")])])])])}var ye={name:"CalendarEntry",data(){return{eventColors:["primary","success","info","warning","danger"],event:{title:"",color:"primary",priority:0},error:!1}},computed:{activeDayName(){return y.Z.getters.activeDay().fullName},submitEventButtonStatus(){return""===this.event.title}},mounted(){this.$refs.eventTitleInput.focus()},methods:{eventColorClasses(e){return["alert-"+e,this.event.color===e?"border border-"+this.event.color:""]},setEventColor(e){this.event.color=e},submitEvent(){if(""===this.event.title)return this.error=!0;y.Z.mutations.storeEvent(this.event),this.event={title:"",color:"primary",priority:0},this.error=!1},resetEventTitle(){this.event.title=""}}};const ge=(0,V.Z)(ye,[["render",me]]);var he=ge,we={name:"App",components:{CalendarWeek:G,CalendarWeekAsList:te,CalendarEntry:he,CalendarSettings:(0,r.RC)((()=>n.e(665).then(n.bind(n,665))))},data(){return{displaySettings:!1}},methods:{toggleDisplaySettings(){this.displaySettings=!this.displaySettings}},computed:{buttonSettingsClasses(){return this.displaySettings?["btn-success"]:["btn-outline-success"]},activeView(){return y.Z.getters.activeView()}}};const be=(0,V.Z)(we,[["render",m]]);var _e=be;(0,i.ri)(_e).mount("#app")},2552:function(e,t,n){n.d(t,{Z:function(){return s}});n(560);const i=[{id:1,shortName:"Mo",fullName:"Montag",events:[{title:"Vue.js lernen",edit:!1,color:"success",priority:0},{title:"Üben, üben, üben",edit:!1,color:"info",priority:-1}],active:!1},{id:2,shortName:"Di",fullName:"Dienstag",events:[],active:!1},{id:3,shortName:"Mi",fullName:"Mittwoch",events:[],active:!1},{id:4,shortName:"Do",fullName:"Donnerstag",events:[{title:"Grillen mit Freunden",edit:!1,color:"warning",priority:0}],active:!0},{id:5,shortName:"Fr",fullName:"Freitag",events:[],active:!1},{id:6,shortName:"Sa",fullName:"Samstag",events:[],active:!1},{id:7,shortName:"So",fullName:"Sonntag",events:[{title:"Müll rausbringen",edit:!1,color:"primary",priority:1}],active:!1}];var r=n(4870);const a=(0,r.qj)({calendarWeekData:i,activeView:"CalendarWeek",activeOrdering:"title"}),o={activeDay:()=>a.calendarWeekData.find((e=>e.active)),activeView:()=>a.activeView,activeOrdering:()=>a.activeOrdering,events:e=>{const t=a.calendarWeekData.find((t=>t.id===e));return t.events.sort(((e,t)=>e[a.activeOrdering]>t[a.activeOrdering]?1:e[a.activeOrdering]<t[a.activeOrdering]?-1:0))}},l={setActiveDay(e){a.calendarWeekData.map((t=>{t.id===e?t.active=!0:t.active=!1}))},setActiveView(e){a.activeView=e},setActiveOrdering(e){a.activeOrdering=e},storeEvent(e){const t=o.activeDay();t.events.push({title:e.title,edit:!1,color:e.color,priority:Number(e.priority)})},editEvent(e,t){a.calendarWeekData.map((e=>{e.events.map((e=>e.edit=!1))}));const n=a.calendarWeekData.find((t=>t.id===e)),i=n.events.find((e=>e.title===t));i.edit=!0},updateEvent(e,t,n){n.title=" "!==n.title?n.title:t;const i=a.calendarWeekData.find((t=>t.id===e)),r=i.events.find((e=>e.title===t));r.title=n.title,r.priority=Number(n.priority),r.edit=!1},deleteEvent(e,t){const n=a.calendarWeekData.find((t=>t.id===e)),i=n.events.findIndex((e=>e.title===t));n.events.splice(i,1)}};var s={state:(0,r.OT)(a),getters:o,mutations:l}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],r=e[d][1],a=e[d][2];for(var l=!0,s=0;s<i.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(l=!1,a<o&&(o=a));if(l){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".be801f9e.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="terminkalender:";n.l=function(i,r,a,o){if(e[i])e[i].push(r);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=i),e[i]=[r];var v=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var r=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(v.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=v.bind(null,l.onerror),l.onload=v.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=a);var o=n.p+n.u(t),l=new Error,s=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}};n.l(o,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,o=i[0],l=i[1],s=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var d=s(n)}for(t&&t(i);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},i=self["webpackChunkterminkalender"]=self["webpackChunkterminkalender"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4920)}));i=n.O(i)})();
//# sourceMappingURL=app.abe85a93.js.map