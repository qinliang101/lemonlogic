import{y as P,I as v,A as d,O as l,P as c,m as g}from"./base.91f148ea.js";var O=function(){try{var r=P(Object,"defineProperty");return r({},"",{}),r}catch{}}();const p=O;var m=9007199254740991,I=/^(?:0|[1-9]\d*)$/;function x(r,n){var t=typeof r;return n=n==null?m:n,!!n&&(t=="number"||t!="symbol"&&I.test(r))&&r>-1&&r%1==0&&r<n}function A(r,n,t){n=="__proto__"&&p?p(r,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[n]=t}var E=Object.prototype,y=E.hasOwnProperty;function N(r,n,t){var s=r[n];(!(y.call(r,n)&&v(s,t))||t===void 0&&!(n in r))&&A(r,n,t)}function S(r,n,t,s){if(!d(r))return r;n=l(n,r);for(var a=-1,u=n.length,_=u-1,i=r;i!=null&&++a<u;){var e=c(n[a]),f=t;if(e==="__proto__"||e==="constructor"||e==="prototype")return r;if(a!=_){var o=i[e];f=s?s(o,e,i):void 0,f===void 0&&(f=d(o)?o:x(n[a+1])?[]:{})}N(i,e,f),i=i[e]}return r}function $(r,n,t){return r==null?r:S(r,n,t)}const w=(r,n,t)=>({get value(){return g(r,n,t)},set value(s){$(r,n,s)}});export{N as a,A as b,w as g,x as i};
