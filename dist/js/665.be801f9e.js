"use strict";(self["webpackChunkterminkalender"]=self["webpackChunkterminkalender"]||[]).push([[665],{665:function(e,s,i){i.r(s),i.d(s,{default:function(){return p}});var n=i(3396),t=i(7139);const a={id:"calendar-settings"},r={class:"card shadow"},l=(0,n._)("div",{class:"card-header text-center bg-success text-white"},[(0,n._)("strong",null,"Einstellungen")],-1),c={class:"card-body"},d={class:"nav nav-pills nav-fill"},u=["onClick"],o=(0,n._)("hr",null,null,-1),v={class:"nav nav-pills nav-fill"},g={class:"nav-item",role:"button"},_=(0,n._)("i",{class:"fas fa-sort-numeric-down-alt text-success"},null,-1),f=[_],w=(0,n._)("a",{class:"nav-link"},[(0,n._)("i",{class:"fas fa-sort-alpha-down text-success"})],-1),k=[w];function h(e,s,i,_,w,h){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",r,[l,(0,n._)("div",c,[(0,n._)("ul",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.views,((e,s)=>((0,n.wg)(),(0,n.iD)("li",{key:s,class:"nav-item",role:"button"},[(0,n._)("a",{class:(0,t.C_)(["nav-link",h.isActiveView(s)]),onClick:e=>h.changeActiveView(s)},[(0,n._)("i",{class:(0,t.C_)(["text-success",e])},null,2)],10,u)])))),128))]),o,(0,n._)("ul",v,[(0,n._)("li",g,[(0,n._)("a",{class:(0,t.C_)(["nav-link",h.isActiveOrdering("priority")]),onClick:s[0]||(s[0]=e=>h.changeOrdering("priority"))},f,2)]),(0,n._)("li",{class:(0,t.C_)(["nav-item",h.isActiveOrdering("title")]),onClick:s[1]||(s[1]=e=>h.changeOrdering("title")),role:"button"},k,2)])])])])}var C=i(2552),b={name:"CalendarSettings",data(){return{views:{CalendarWeek:"fas fa-table",CalendarWeekAsList:"fas fa-list"}}},methods:{changeActiveView(e){C.Z.mutations.setActiveView(e)},isActiveView(e){if(e===C.Z.getters.activeView())return["border border-success"]},changeOrdering(e){C.Z.mutations.setActiveOrdering(e)},isActiveOrdering(e){if(e===C.Z.getters.activeOrdering())return["border border-success"]}}},m=i(89);const A=(0,m.Z)(b,[["render",h]]);var p=A}}]);
//# sourceMappingURL=665.be801f9e.js.map