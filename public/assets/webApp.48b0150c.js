import{_ as m}from"./CreateAppEnter.4cd79d79.js";import{_ as d}from"./Header.1838d8af.js";import{c as f}from"./app.401b4cd2.js";import{j as g,_ as k,G as o,k as _,K as e,M as p,P as r,B as t,O as c,C as h,D as B,A}from"./index.d86475c5.js";const E=g({data(){return{config_app:f}},methods:{toAppDetail(s){console.log(s)}}}),v={class:"app_content"},w={class:"app_title"},y={class:"app_item_wrap"},C={class:"app_item"},b=["src"];function x(s,D,F,$,P,L){const l=d,i=A("router-link"),u=m;return t(),o(p,null,[_(l,{title:"\u7F51\u9875\u5E94\u7528\u5F00\u53D1"}),e("div",v,[(t(!0),o(p,null,r(s.config_app.WEBAPP_LIST,n=>(t(),o("div",{class:"app_wrap",key:n.key},[e("span",w,c(n.title),1),e("div",y,[(t(!0),o(p,null,r(n.list,a=>(t(),h(i,{class:"app_item_box",to:"/app/web/detail",key:a.key},{default:B(()=>[e("div",C,[e("img",{class:"app_img",src:a.img_uri},null,8,b),e("span",null,c(a.name),1)])]),_:2},1024))),128))])]))),128)),_(u,{to:"#/app/create",label:"\u521B\u5EFA\u5E94\u7528"})])],64)}const G=k(E,[["render",x]]);export{G as default};
