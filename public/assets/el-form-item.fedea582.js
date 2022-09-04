import{y as be,z as G,A as ze,B as jt,C as V,D as we,E as St,F as J,L as He,M as de,G as Wr,H as Z,S as ce,I as Pt,b as Ur,d as Pe,J as Vr,p as Gr,f as Kr,c as Je,K as qt,k as Ye,_ as zr,l as qe,q as It,s as Mt,a as Lt,N as Rt,e as or,w as Ct,g as Bt}from"./base.91f148ea.js";import{a9 as Nt,V as Ie,r as W,c as j,j as Ze,w as pe,p as Hr,a as Jr,a7 as Yr,B as Me,G as Zr,x as fe,I as Q,u as E,t as Xr,i as ge,b as Qr,m as kr,a4 as Dt,k as ve,M as Wt,n as et,a0 as Ut,D as xe,C as Vt,S as Gt,O as fr,N as ur,L as Kt,J as lr,K as dr,a3 as zt}from"./index.b652946b.js";import{b as Ht,a as rt,i as Jt,g as Fe}from"./objects.6a642533.js";var Yt=be(G,"WeakMap");const Le=Yt;var cr=Object.create,Zt=function(){function r(){}return function(e){if(!ze(e))return{};if(cr)return cr(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();const Xt=Zt;function Qt(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function kt(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}function Ae(r,e,t,n){var i=!t;t||(t={});for(var a=-1,s=e.length;++a<s;){var o=e[a],f=n?n(t[o],r[o],o,t,r):void 0;f===void 0&&(f=r[o]),i?Ht(t,o,f):rt(t,o,f)}return t}var en=9007199254740991;function tt(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=en}function nt(r){return r!=null&&tt(r.length)&&!jt(r)}var rn=Object.prototype;function Xe(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||rn;return r===t}function tn(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}var nn="[object Arguments]";function pr(r){return V(r)&&we(r)==nn}var it=Object.prototype,an=it.hasOwnProperty,sn=it.propertyIsEnumerable,on=pr(function(){return arguments}())?pr:function(r){return V(r)&&an.call(r,"callee")&&!sn.call(r,"callee")};const fn=on;function un(){return!1}var at=typeof exports=="object"&&exports&&!exports.nodeType&&exports,gr=at&&typeof module=="object"&&module&&!module.nodeType&&module,ln=gr&&gr.exports===at,vr=ln?G.Buffer:void 0,dn=vr?vr.isBuffer:void 0,cn=dn||un;const ye=cn;var pn="[object Arguments]",gn="[object Array]",vn="[object Boolean]",yn="[object Date]",mn="[object Error]",hn="[object Function]",bn="[object Map]",wn="[object Number]",An="[object Object]",_n="[object RegExp]",Tn="[object Set]",$n="[object String]",On="[object WeakMap]",xn="[object ArrayBuffer]",Fn="[object DataView]",En="[object Float32Array]",jn="[object Float64Array]",Sn="[object Int8Array]",Pn="[object Int16Array]",qn="[object Int32Array]",In="[object Uint8Array]",Mn="[object Uint8ClampedArray]",Ln="[object Uint16Array]",Rn="[object Uint32Array]",x={};x[En]=x[jn]=x[Sn]=x[Pn]=x[qn]=x[In]=x[Mn]=x[Ln]=x[Rn]=!0;x[pn]=x[gn]=x[xn]=x[vn]=x[Fn]=x[yn]=x[mn]=x[hn]=x[bn]=x[wn]=x[An]=x[_n]=x[Tn]=x[$n]=x[On]=!1;function Cn(r){return V(r)&&tt(r.length)&&!!x[we(r)]}function Qe(r){return function(e){return r(e)}}var st=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ee=st&&typeof module=="object"&&module&&!module.nodeType&&module,Bn=ee&&ee.exports===st,Ee=Bn&&St.process,Nn=function(){try{var r=ee&&ee.require&&ee.require("util").types;return r||Ee&&Ee.binding&&Ee.binding("util")}catch{}}();const Y=Nn;var yr=Y&&Y.isTypedArray,Dn=yr?Qe(yr):Cn;const ot=Dn;var Wn=Object.prototype,Un=Wn.hasOwnProperty;function ft(r,e){var t=J(r),n=!t&&fn(r),i=!t&&!n&&ye(r),a=!t&&!n&&!i&&ot(r),s=t||n||i||a,o=s?tn(r.length,String):[],f=o.length;for(var p in r)(e||Un.call(r,p))&&!(s&&(p=="length"||i&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||Jt(p,f)))&&o.push(p);return o}function ut(r,e){return function(t){return r(e(t))}}var Vn=ut(Object.keys,Object);const Gn=Vn;var Kn=Object.prototype,zn=Kn.hasOwnProperty;function Hn(r){if(!Xe(r))return Gn(r);var e=[];for(var t in Object(r))zn.call(r,t)&&t!="constructor"&&e.push(t);return e}function ke(r){return nt(r)?ft(r):Hn(r)}function Jn(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Yn=Object.prototype,Zn=Yn.hasOwnProperty;function Xn(r){if(!ze(r))return Jn(r);var e=Xe(r),t=[];for(var n in r)n=="constructor"&&(e||!Zn.call(r,n))||t.push(n);return t}function er(r){return nt(r)?ft(r,!0):Xn(r)}function lt(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r}var Qn=ut(Object.getPrototypeOf,Object);const dt=Qn;function Re(){if(!arguments.length)return[];var r=arguments[0];return J(r)?r:[r]}function kn(){this.__data__=new He,this.size=0}function ei(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}function ri(r){return this.__data__.get(r)}function ti(r){return this.__data__.has(r)}var ni=200;function ii(r,e){var t=this.__data__;if(t instanceof He){var n=t.__data__;if(!de||n.length<ni-1)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new Wr(n)}return t.set(r,e),this.size=t.size,this}function B(r){var e=this.__data__=new He(r);this.size=e.size}B.prototype.clear=kn;B.prototype.delete=ei;B.prototype.get=ri;B.prototype.has=ti;B.prototype.set=ii;function ai(r,e){return r&&Ae(e,ke(e),r)}function si(r,e){return r&&Ae(e,er(e),r)}var ct=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mr=ct&&typeof module=="object"&&module&&!module.nodeType&&module,oi=mr&&mr.exports===ct,hr=oi?G.Buffer:void 0,br=hr?hr.allocUnsafe:void 0;function fi(r,e){if(e)return r.slice();var t=r.length,n=br?br(t):new r.constructor(t);return r.copy(n),n}function ui(r,e){for(var t=-1,n=r==null?0:r.length,i=0,a=[];++t<n;){var s=r[t];e(s,t,r)&&(a[i++]=s)}return a}function pt(){return[]}var li=Object.prototype,di=li.propertyIsEnumerable,wr=Object.getOwnPropertySymbols,ci=wr?function(r){return r==null?[]:(r=Object(r),ui(wr(r),function(e){return di.call(r,e)}))}:pt;const rr=ci;function pi(r,e){return Ae(r,rr(r),e)}var gi=Object.getOwnPropertySymbols,vi=gi?function(r){for(var e=[];r;)lt(e,rr(r)),r=dt(r);return e}:pt;const gt=vi;function yi(r,e){return Ae(r,gt(r),e)}function vt(r,e,t){var n=e(r);return J(r)?n:lt(n,t(r))}function Ce(r){return vt(r,ke,rr)}function mi(r){return vt(r,er,gt)}var hi=be(G,"DataView");const Be=hi;var bi=be(G,"Promise");const Ne=bi;var wi=be(G,"Set");const De=wi;var Ar="[object Map]",Ai="[object Object]",_r="[object Promise]",Tr="[object Set]",$r="[object WeakMap]",Or="[object DataView]",_i=Z(Be),Ti=Z(de),$i=Z(Ne),Oi=Z(De),xi=Z(Le),D=we;(Be&&D(new Be(new ArrayBuffer(1)))!=Or||de&&D(new de)!=Ar||Ne&&D(Ne.resolve())!=_r||De&&D(new De)!=Tr||Le&&D(new Le)!=$r)&&(D=function(r){var e=we(r),t=e==Ai?r.constructor:void 0,n=t?Z(t):"";if(n)switch(n){case _i:return Or;case Ti:return Ar;case $i:return _r;case Oi:return Tr;case xi:return $r}return e});const te=D;var Fi=Object.prototype,Ei=Fi.hasOwnProperty;function ji(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&Ei.call(r,"index")&&(t.index=r.index,t.input=r.input),t}var Si=G.Uint8Array;const me=Si;function tr(r){var e=new r.constructor(r.byteLength);return new me(e).set(new me(r)),e}function Pi(r,e){var t=e?tr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var qi=/\w*$/;function Ii(r){var e=new r.constructor(r.source,qi.exec(r));return e.lastIndex=r.lastIndex,e}var xr=ce?ce.prototype:void 0,Fr=xr?xr.valueOf:void 0;function Mi(r){return Fr?Object(Fr.call(r)):{}}function Li(r,e){var t=e?tr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var Ri="[object Boolean]",Ci="[object Date]",Bi="[object Map]",Ni="[object Number]",Di="[object RegExp]",Wi="[object Set]",Ui="[object String]",Vi="[object Symbol]",Gi="[object ArrayBuffer]",Ki="[object DataView]",zi="[object Float32Array]",Hi="[object Float64Array]",Ji="[object Int8Array]",Yi="[object Int16Array]",Zi="[object Int32Array]",Xi="[object Uint8Array]",Qi="[object Uint8ClampedArray]",ki="[object Uint16Array]",ea="[object Uint32Array]";function ra(r,e,t){var n=r.constructor;switch(e){case Gi:return tr(r);case Ri:case Ci:return new n(+r);case Ki:return Pi(r,t);case zi:case Hi:case Ji:case Yi:case Zi:case Xi:case Qi:case ki:case ea:return Li(r,t);case Bi:return new n;case Ni:case Ui:return new n(r);case Di:return Ii(r);case Wi:return new n;case Vi:return Mi(r)}}function ta(r){return typeof r.constructor=="function"&&!Xe(r)?Xt(dt(r)):{}}var na="[object Map]";function ia(r){return V(r)&&te(r)==na}var Er=Y&&Y.isMap,aa=Er?Qe(Er):ia;const sa=aa;var oa="[object Set]";function fa(r){return V(r)&&te(r)==oa}var jr=Y&&Y.isSet,ua=jr?Qe(jr):fa;const la=ua;var da=1,ca=2,pa=4,yt="[object Arguments]",ga="[object Array]",va="[object Boolean]",ya="[object Date]",ma="[object Error]",mt="[object Function]",ha="[object GeneratorFunction]",ba="[object Map]",wa="[object Number]",ht="[object Object]",Aa="[object RegExp]",_a="[object Set]",Ta="[object String]",$a="[object Symbol]",Oa="[object WeakMap]",xa="[object ArrayBuffer]",Fa="[object DataView]",Ea="[object Float32Array]",ja="[object Float64Array]",Sa="[object Int8Array]",Pa="[object Int16Array]",qa="[object Int32Array]",Ia="[object Uint8Array]",Ma="[object Uint8ClampedArray]",La="[object Uint16Array]",Ra="[object Uint32Array]",$={};$[yt]=$[ga]=$[xa]=$[Fa]=$[va]=$[ya]=$[Ea]=$[ja]=$[Sa]=$[Pa]=$[qa]=$[ba]=$[wa]=$[ht]=$[Aa]=$[_a]=$[Ta]=$[$a]=$[Ia]=$[Ma]=$[La]=$[Ra]=!0;$[ma]=$[mt]=$[Oa]=!1;function ue(r,e,t,n,i,a){var s,o=e&da,f=e&ca,p=e&pa;if(t&&(s=i?t(r,n,i,a):t(r)),s!==void 0)return s;if(!ze(r))return r;var c=J(r);if(c){if(s=ji(r),!o)return Qt(r,s)}else{var g=te(r),v=g==mt||g==ha;if(ye(r))return fi(r,o);if(g==ht||g==yt||v&&!i){if(s=f||v?{}:ta(r),!o)return f?yi(r,si(s,r)):pi(r,ai(s,r))}else{if(!$[g])return i?r:{};s=ra(r,g,o)}}a||(a=new B);var _=a.get(r);if(_)return _;a.set(r,s),la(r)?r.forEach(function(y){s.add(ue(y,e,t,y,r,a))}):sa(r)&&r.forEach(function(y,u){s.set(u,ue(y,e,t,u,r,a))});var w=p?f?mi:Ce:f?er:ke,l=c?void 0:w(r);return kt(l||r,function(y,u){l&&(u=y,y=r[u]),rt(s,u,ue(y,e,t,u,r,a))}),s}var Ca=4;function Sr(r){return ue(r,Ca)}var Ba="__lodash_hash_undefined__";function Na(r){return this.__data__.set(r,Ba),this}function Da(r){return this.__data__.has(r)}function he(r){var e=-1,t=r==null?0:r.length;for(this.__data__=new Wr;++e<t;)this.add(r[e])}he.prototype.add=he.prototype.push=Na;he.prototype.has=Da;function Wa(r,e){for(var t=-1,n=r==null?0:r.length;++t<n;)if(e(r[t],t,r))return!0;return!1}function Ua(r,e){return r.has(e)}var Va=1,Ga=2;function bt(r,e,t,n,i,a){var s=t&Va,o=r.length,f=e.length;if(o!=f&&!(s&&f>o))return!1;var p=a.get(r),c=a.get(e);if(p&&c)return p==e&&c==r;var g=-1,v=!0,_=t&Ga?new he:void 0;for(a.set(r,e),a.set(e,r);++g<o;){var w=r[g],l=e[g];if(n)var y=s?n(l,w,g,e,r,a):n(w,l,g,r,e,a);if(y!==void 0){if(y)continue;v=!1;break}if(_){if(!Wa(e,function(u,h){if(!Ua(_,h)&&(w===u||i(w,u,t,n,a)))return _.push(h)})){v=!1;break}}else if(!(w===l||i(w,l,t,n,a))){v=!1;break}}return a.delete(r),a.delete(e),v}function Ka(r){var e=-1,t=Array(r.size);return r.forEach(function(n,i){t[++e]=[i,n]}),t}function za(r){var e=-1,t=Array(r.size);return r.forEach(function(n){t[++e]=n}),t}var Ha=1,Ja=2,Ya="[object Boolean]",Za="[object Date]",Xa="[object Error]",Qa="[object Map]",ka="[object Number]",es="[object RegExp]",rs="[object Set]",ts="[object String]",ns="[object Symbol]",is="[object ArrayBuffer]",as="[object DataView]",Pr=ce?ce.prototype:void 0,je=Pr?Pr.valueOf:void 0;function ss(r,e,t,n,i,a,s){switch(t){case as:if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case is:return!(r.byteLength!=e.byteLength||!a(new me(r),new me(e)));case Ya:case Za:case ka:return Pt(+r,+e);case Xa:return r.name==e.name&&r.message==e.message;case es:case ts:return r==e+"";case Qa:var o=Ka;case rs:var f=n&Ha;if(o||(o=za),r.size!=e.size&&!f)return!1;var p=s.get(r);if(p)return p==e;n|=Ja,s.set(r,e);var c=bt(o(r),o(e),n,i,a,s);return s.delete(r),c;case ns:if(je)return je.call(r)==je.call(e)}return!1}var os=1,fs=Object.prototype,us=fs.hasOwnProperty;function ls(r,e,t,n,i,a){var s=t&os,o=Ce(r),f=o.length,p=Ce(e),c=p.length;if(f!=c&&!s)return!1;for(var g=f;g--;){var v=o[g];if(!(s?v in e:us.call(e,v)))return!1}var _=a.get(r),w=a.get(e);if(_&&w)return _==e&&w==r;var l=!0;a.set(r,e),a.set(e,r);for(var y=s;++g<f;){v=o[g];var u=r[v],h=e[v];if(n)var d=s?n(h,u,v,e,r,a):n(u,h,v,r,e,a);if(!(d===void 0?u===h||i(u,h,t,n,a):d)){l=!1;break}y||(y=v=="constructor")}if(l&&!y){var b=r.constructor,T=e.constructor;b!=T&&"constructor"in r&&"constructor"in e&&!(typeof b=="function"&&b instanceof b&&typeof T=="function"&&T instanceof T)&&(l=!1)}return a.delete(r),a.delete(e),l}var ds=1,qr="[object Arguments]",Ir="[object Array]",ae="[object Object]",cs=Object.prototype,Mr=cs.hasOwnProperty;function ps(r,e,t,n,i,a){var s=J(r),o=J(e),f=s?Ir:te(r),p=o?Ir:te(e);f=f==qr?ae:f,p=p==qr?ae:p;var c=f==ae,g=p==ae,v=f==p;if(v&&ye(r)){if(!ye(e))return!1;s=!0,c=!1}if(v&&!c)return a||(a=new B),s||ot(r)?bt(r,e,t,n,i,a):ss(r,e,f,t,n,i,a);if(!(t&ds)){var _=c&&Mr.call(r,"__wrapped__"),w=g&&Mr.call(e,"__wrapped__");if(_||w){var l=_?r.value():r,y=w?e.value():e;return a||(a=new B),i(l,y,t,n,a)}}return v?(a||(a=new B),ls(r,e,t,n,i,a)):!1}function wt(r,e,t,n,i){return r===e?!0:r==null||e==null||!V(r)&&!V(e)?r!==r&&e!==e:ps(r,e,t,n,wt,i)}function gs(r,e){return wt(r,e)}const vs=Ur({model:Object,rules:{type:Pe(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:Vr},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),ys={validate:(r,e,t)=>(Nt(r)||Ie(r))&&Gr(e)&&Ie(t)};function ms(){const r=W([]),e=j(()=>{if(!r.value.length)return"0";const a=Math.max(...r.value);return a?`${a}px`:""});function t(a){return r.value.indexOf(a)}function n(a,s){if(a&&s){const o=t(s);r.value.splice(o,1,a)}else a&&r.value.push(a)}function i(a){const s=t(a);s>-1&&r.value.splice(s,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const se=(r,e)=>{const t=Re(e);return t.length>0?r.filter(n=>n.prop&&t.includes(n.prop)):r},hs={name:"ElForm"},bs=Ze({...hs,props:vs,emits:ys,setup(r,{expose:e,emit:t}){const n=r,i=[],a=Kr(),s=Je("form"),o=j(()=>{const{labelPosition:h,inline:d}=n;return[s.b(),s.m(a.value||"default"),{[s.m(`label-${h}`)]:h,[s.m("inline")]:d}]}),f=h=>{i.push(h)},p=h=>{h.prop&&i.splice(i.indexOf(h),1)},c=(h=[])=>{!n.model||se(i,h).forEach(d=>d.resetField())},g=(h=[])=>{se(i,h).forEach(d=>d.clearValidate())},v=j(()=>!!n.model),_=h=>{if(i.length===0)return[];const d=se(i,h);return d.length?d:[]},w=async h=>y(void 0,h),l=async(h=[])=>{if(!v.value)return!1;const d=_(h);if(d.length===0)return!0;let b={};for(const T of d)try{await T.validate("")}catch(F){b={...b,...F}}return Object.keys(b).length===0?!0:Promise.reject(b)},y=async(h=[],d)=>{const b=!Xr(d);try{const T=await l(h);return T===!0&&(d==null||d(T)),T}catch(T){const F=T;return n.scrollToError&&u(Object.keys(F)[0]),d==null||d(!1,F),b&&Promise.reject(F)}},u=h=>{var d;const b=se(i,h)[0];b&&((d=b.$el)==null||d.scrollIntoView())};return pe(()=>n.rules,()=>{n.validateOnRuleChange&&w().catch(h=>qt())},{deep:!0}),Hr(Ye,Jr({...Yr(n),emit:t,resetFields:c,clearValidate:g,validateField:y,addField:f,removeField:p,...ms()})),e({validate:w,validateField:y,resetFields:c,clearValidate:g,scrollToField:u}),(h,d)=>(Me(),Zr("form",{class:Q(E(o))},[fe(h.$slots,"default")],2))}});var ws=zr(bs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function U(){return U=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},U.apply(this,arguments)}function As(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,ne(r,e)}function We(r){return We=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},We(r)}function ne(r,e){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},ne(r,e)}function _s(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function le(r,e,t){return _s()?le=Reflect.construct.bind():le=function(i,a,s){var o=[null];o.push.apply(o,a);var f=Function.bind.apply(i,o),p=new f;return s&&ne(p,s.prototype),p},le.apply(null,arguments)}function Ts(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function Ue(r){var e=typeof Map=="function"?new Map:void 0;return Ue=function(n){if(n===null||!Ts(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return le(n,arguments,We(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ne(i,n)},Ue(r)}var $s=/%[sdj%]/g,Os=function(){};typeof process<"u"&&process.env;function Ve(r){if(!r||!r.length)return null;var e={};return r.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function I(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var i=0,a=t.length;if(typeof r=="function")return r.apply(null,t);if(typeof r=="string"){var s=r.replace($s,function(o){if(o==="%%")return"%";if(i>=a)return o;switch(o){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return o}});return s}return r}function xs(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function S(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||xs(e)&&typeof r=="string"&&!r)}function Fs(r,e,t){var n=[],i=0,a=r.length;function s(o){n.push.apply(n,o||[]),i++,i===a&&t(n)}r.forEach(function(o){e(o,s)})}function Lr(r,e,t){var n=0,i=r.length;function a(s){if(s&&s.length){t(s);return}var o=n;n=n+1,o<i?e(r[o],a):t([])}a([])}function Es(r){var e=[];return Object.keys(r).forEach(function(t){e.push.apply(e,r[t]||[])}),e}var Rr=function(r){As(e,r);function e(t,n){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=t,i.fields=n,i}return e}(Ue(Error));function js(r,e,t,n,i){if(e.first){var a=new Promise(function(v,_){var w=function(u){return n(u),u.length?_(new Rr(u,Ve(u))):v(i)},l=Es(r);Lr(l,t,w)});return a.catch(function(v){return v}),a}var s=e.firstFields===!0?Object.keys(r):e.firstFields||[],o=Object.keys(r),f=o.length,p=0,c=[],g=new Promise(function(v,_){var w=function(y){if(c.push.apply(c,y),p++,p===f)return n(c),c.length?_(new Rr(c,Ve(c))):v(i)};o.length||(n(c),v(i)),o.forEach(function(l){var y=r[l];s.indexOf(l)!==-1?Lr(y,t,w):Fs(y,t,w)})});return g.catch(function(v){return v}),g}function Ss(r){return!!(r&&r.message!==void 0)}function Ps(r,e){for(var t=r,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function Cr(r,e){return function(t){var n;return r.fullFields?n=Ps(e,r.fullFields):n=e[t.field||r.fullField],Ss(t)?(t.field=t.field||r.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||r.fullField}}}function Br(r,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof r[t]=="object"?r[t]=U({},r[t],n):r[t]=n}}return r}var At=function(e,t,n,i,a,s){e.required&&(!n.hasOwnProperty(e.field)||S(t,s||e.type))&&i.push(I(a.messages.required,e.fullField))},qs=function(e,t,n,i,a){(/^\s+$/.test(t)||t==="")&&i.push(I(a.messages.whitespace,e.fullField))},oe,Is=function(){if(oe)return oe;var r="[a-fA-F\\d:]",e=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),a=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),s=new RegExp("^"+t+"$"),o=new RegExp("^"+i+"$"),f=function(b){return b&&b.exact?a:new RegExp("(?:"+e(b)+t+e(b)+")|(?:"+e(b)+i+e(b)+")","g")};f.v4=function(d){return d&&d.exact?s:new RegExp(""+e(d)+t+e(d),"g")},f.v6=function(d){return d&&d.exact?o:new RegExp(""+e(d)+i+e(d),"g")};var p="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",g=f.v4().source,v=f.v6().source,_="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",w="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",l="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',h="(?:"+p+"|www\\.)"+c+"(?:localhost|"+g+"|"+v+"|"+_+w+l+")"+y+u;return oe=new RegExp("(?:^"+h+"$)","i"),oe},Nr={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},k={integer:function(e){return k.number(e)&&parseInt(e,10)===e},float:function(e){return k.number(e)&&!k.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!k.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Nr.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Is())},hex:function(e){return typeof e=="string"&&!!e.match(Nr.hex)}},Ms=function(e,t,n,i,a){if(e.required&&t===void 0){At(e,t,n,i,a);return}var s=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;s.indexOf(o)>-1?k[o](t)||i.push(I(a.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&i.push(I(a.messages.types[o],e.fullField,e.type))},Ls=function(e,t,n,i,a){var s=typeof e.len=="number",o=typeof e.min=="number",f=typeof e.max=="number",p=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=t,g=null,v=typeof t=="number",_=typeof t=="string",w=Array.isArray(t);if(v?g="number":_?g="string":w&&(g="array"),!g)return!1;w&&(c=t.length),_&&(c=t.replace(p,"_").length),s?c!==e.len&&i.push(I(a.messages[g].len,e.fullField,e.len)):o&&!f&&c<e.min?i.push(I(a.messages[g].min,e.fullField,e.min)):f&&!o&&c>e.max?i.push(I(a.messages[g].max,e.fullField,e.max)):o&&f&&(c<e.min||c>e.max)&&i.push(I(a.messages[g].range,e.fullField,e.min,e.max))},H="enum",Rs=function(e,t,n,i,a){e[H]=Array.isArray(e[H])?e[H]:[],e[H].indexOf(t)===-1&&i.push(I(a.messages[H],e.fullField,e[H].join(", ")))},Cs=function(e,t,n,i,a){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(I(a.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var s=new RegExp(e.pattern);s.test(t)||i.push(I(a.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},A={required:At,whitespace:qs,type:Ms,range:Ls,enum:Rs,pattern:Cs},Bs=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();A.required(e,t,i,s,a,"string"),S(t,"string")||(A.type(e,t,i,s,a),A.range(e,t,i,s,a),A.pattern(e,t,i,s,a),e.whitespace===!0&&A.whitespace(e,t,i,s,a))}n(s)},Ns=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();A.required(e,t,i,s,a),t!==void 0&&A.type(e,t,i,s,a)}n(s)},Ds=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),S(t)&&!e.required)return n();A.required(e,t,i,s,a),t!==void 0&&(A.type(e,t,i,s,a),A.range(e,t,i,s,a))}n(s)},Ws=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();A.required(e,t,i,s,a),t!==void 0&&A.type(e,t,i,s,a)}n(s)},Us=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();A.required(e,t,i,s,a),S(t)||A.type(e,t,i,s,a)}n(s)},Vs=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();A.required(e,t,i,s,a),t!==void 0&&(A.type(e,t,i,s,a),A.range(e,t,i,s,a))}n(s)},Gs=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();A.required(e,t,i,s,a),t!==void 0&&(A.type(e,t,i,s,a),A.range(e,t,i,s,a))}n(s)},Ks=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return n();A.required(e,t,i,s,a,"array"),t!=null&&(A.type(e,t,i,s,a),A.range(e,t,i,s,a))}n(s)},zs=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();A.required(e,t,i,s,a),t!==void 0&&A.type(e,t,i,s,a)}n(s)},Hs="enum",Js=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();A.required(e,t,i,s,a),t!==void 0&&A[Hs](e,t,i,s,a)}n(s)},Ys=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();A.required(e,t,i,s,a),S(t,"string")||A.pattern(e,t,i,s,a)}n(s)},Zs=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"date")&&!e.required)return n();if(A.required(e,t,i,s,a),!S(t,"date")){var f;t instanceof Date?f=t:f=new Date(t),A.type(e,f,i,s,a),f&&A.range(e,f.getTime(),i,s,a)}}n(s)},Xs=function(e,t,n,i,a){var s=[],o=Array.isArray(t)?"array":typeof t;A.required(e,t,i,s,a,o),n(s)},Se=function(e,t,n,i,a){var s=e.type,o=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(S(t,s)&&!e.required)return n();A.required(e,t,i,o,a,s),S(t,s)||A.type(e,t,i,o,a)}n(o)},Qs=function(e,t,n,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();A.required(e,t,i,s,a)}n(s)},re={string:Bs,method:Ns,number:Ds,boolean:Ws,regexp:Us,integer:Vs,float:Gs,array:Ks,object:zs,enum:Js,pattern:Ys,date:Zs,url:Se,hex:Se,email:Se,required:Xs,any:Qs};function Ge(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Ke=Ge(),ie=function(){function r(t){this.rules=null,this._messages=Ke,this.define(t)}var e=r.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(a){var s=n[a];i.rules[a]=Array.isArray(s)?s:[s]})},e.messages=function(n){return n&&(this._messages=Br(Ge(),n)),this._messages},e.validate=function(n,i,a){var s=this;i===void 0&&(i={}),a===void 0&&(a=function(){});var o=n,f=i,p=a;if(typeof f=="function"&&(p=f,f={}),!this.rules||Object.keys(this.rules).length===0)return p&&p(null,o),Promise.resolve(o);function c(l){var y=[],u={};function h(b){if(Array.isArray(b)){var T;y=(T=y).concat.apply(T,b)}else y.push(b)}for(var d=0;d<l.length;d++)h(l[d]);y.length?(u=Ve(y),p(y,u)):p(null,o)}if(f.messages){var g=this.messages();g===Ke&&(g=Ge()),Br(g,f.messages),f.messages=g}else f.messages=this.messages();var v={},_=f.keys||Object.keys(this.rules);_.forEach(function(l){var y=s.rules[l],u=o[l];y.forEach(function(h){var d=h;typeof d.transform=="function"&&(o===n&&(o=U({},o)),u=o[l]=d.transform(u)),typeof d=="function"?d={validator:d}:d=U({},d),d.validator=s.getValidationMethod(d),d.validator&&(d.field=l,d.fullField=d.fullField||l,d.type=s.getType(d),v[l]=v[l]||[],v[l].push({rule:d,value:u,source:o,field:l}))})});var w={};return js(v,f,function(l,y){var u=l.rule,h=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");h=h&&(u.required||!u.required&&l.value),u.field=l.field;function d(F,R){return U({},R,{fullField:u.fullField+"."+F,fullFields:u.fullFields?[].concat(u.fullFields,[F]):[F]})}function b(F){F===void 0&&(F=[]);var R=Array.isArray(F)?F:[F];!f.suppressWarning&&R.length&&r.warning("async-validator:",R),R.length&&u.message!==void 0&&(R=[].concat(u.message));var q=R.map(Cr(u,o));if(f.first&&q.length)return w[u.field]=1,y(q);if(!h)y(q);else{if(u.required&&!l.value)return u.message!==void 0?q=[].concat(u.message).map(Cr(u,o)):f.error&&(q=[f.error(u,I(f.messages.required,u.field))]),y(q);var N={};u.defaultField&&Object.keys(l.value).map(function(C){N[C]=u.defaultField}),N=U({},N,l.rule.fields);var X={};Object.keys(N).forEach(function(C){var M=N[C],_e=Array.isArray(M)?M:[M];X[C]=_e.map(d.bind(null,C))});var K=new r(X);K.messages(f.messages),l.rule.options&&(l.rule.options.messages=f.messages,l.rule.options.error=f.error),K.validate(l.value,l.rule.options||f,function(C){var M=[];q&&q.length&&M.push.apply(M,q),C&&C.length&&M.push.apply(M,C),y(M.length?M:null)})}}var T;if(u.asyncValidator)T=u.asyncValidator(u,l.value,b,l.source,f);else if(u.validator){try{T=u.validator(u,l.value,b,l.source,f)}catch(F){console.error==null||console.error(F),f.suppressValidatorError||setTimeout(function(){throw F},0),b(F.message)}T===!0?b():T===!1?b(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):T instanceof Array?b(T):T instanceof Error&&b(T.message)}T&&T.then&&T.then(function(){return b()},function(F){return b(F)})},function(l){c(l)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!re.hasOwnProperty(n.type))throw new Error(I("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),a=i.indexOf("message");return a!==-1&&i.splice(a,1),i.length===1&&i[0]==="required"?re.required:re[this.getType(n)]||void 0},r}();ie.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");re[e]=t};ie.warning=Os;ie.messages=Ke;ie.validators=re;const ks=["","error","validating","success"],eo=Ur({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:Pe([String,Array])},required:{type:Boolean,default:void 0},rules:{type:Pe([Object,Array])},error:String,validateStatus:{type:String,values:ks},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:Vr}}),Dr="ElLabelWrap";var ro=Ze({name:Dr,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(r,{slots:e}){const t=ge(Ye,void 0);ge(qe)||It(Dr,"usage: <el-form-item><label-wrap /></el-form-item>");const i=Je("form"),a=W(),s=W(0),o=()=>{var c;if((c=a.value)!=null&&c.firstElementChild){const g=window.getComputedStyle(a.value.firstElementChild).width;return Math.ceil(Number.parseFloat(g))}else return 0},f=(c="update")=>{et(()=>{e.default&&r.isAutoWidth&&(c==="update"?s.value=o():c==="remove"&&(t==null||t.deregisterLabelWidth(s.value)))})},p=()=>f("update");return Qr(()=>{p()}),kr(()=>{f("remove")}),Dt(()=>p()),pe(s,(c,g)=>{r.updateAll&&(t==null||t.registerLabelWidth(c,g))}),Mt(j(()=>{var c,g;return(g=(c=a.value)==null?void 0:c.firstElementChild)!=null?g:null}),p),()=>{var c,g;if(!e)return null;const{isAutoWidth:v}=r;if(v){const _=t==null?void 0:t.autoLabelWidth,w={};if(_&&_!=="auto"){const l=Math.max(0,Number.parseInt(_,10)-s.value),y=t.labelPosition==="left"?"marginRight":"marginLeft";l&&(w[y]=`${l}px`)}return ve("div",{ref:a,class:[i.be("item","label-wrap")],style:w},[(c=e.default)==null?void 0:c.call(e)])}else return ve(Wt,{ref:a},[(g=e.default)==null?void 0:g.call(e)])}}});const to=["role","aria-labelledby"],no={name:"ElFormItem"},io=Ze({...no,props:eo,setup(r,{expose:e}){const t=r,n=Ut(),i=ge(Ye,void 0),a=ge(qe,void 0),s=Kr(void 0,{formItem:!1}),o=Je("form-item"),f=Lt().value,p=W([]),c=W(""),g=Rt(c,100),v=W(""),_=W();let w,l=!1;const y=j(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const m=or(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return m?{width:m}:{}}),u=j(()=>{if((i==null?void 0:i.labelPosition)==="top"||(i==null?void 0:i.inline))return{};if(!t.label&&!t.labelWidth&&N)return{};const m=or(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return!t.label&&!n.label?{marginLeft:m}:{}}),h=j(()=>[o.b(),o.m(s.value),o.is("error",c.value==="error"),o.is("validating",c.value==="validating"),o.is("success",c.value==="success"),o.is("required",_e.value||t.required),o.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),(i==null?void 0:i.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[o.m("feedback")]:i==null?void 0:i.statusIcon}]),d=j(()=>Gr(t.inlineMessage)?t.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),b=j(()=>[o.e("error"),{[o.em("error","inline")]:d.value}]),T=j(()=>t.prop?Ie(t.prop)?t.prop:t.prop.join("."):""),F=j(()=>!!(t.label||n.label)),R=j(()=>t.for||p.value.length===1?p.value[0]:void 0),q=j(()=>!R.value&&F.value),N=!!a,X=j(()=>{const m=i==null?void 0:i.model;if(!(!m||!t.prop))return Fe(m,t.prop).value}),K=j(()=>{const m=t.rules?Re(t.rules):[],O=i==null?void 0:i.rules;if(O&&t.prop){const P=Fe(O,t.prop).value;P&&m.push(...Re(P))}return t.required!==void 0&&m.push({required:!!t.required}),m}),C=j(()=>K.value.length>0),M=m=>K.value.filter(P=>!P.trigger||!m?!0:Array.isArray(P.trigger)?P.trigger.includes(m):P.trigger===m).map(({trigger:P,...L})=>L),_e=j(()=>K.value.some(m=>m.required===!0)),Tt=j(()=>{var m;return g.value==="error"&&t.showMessage&&((m=i==null?void 0:i.showMessage)!=null?m:!0)}),nr=j(()=>`${t.label||""}${(i==null?void 0:i.labelSuffix)||""}`),z=m=>{c.value=m},$t=m=>{var O,P;const{errors:L,fields:Oe}=m;(!L||!Oe)&&console.error(m),z("error"),v.value=L?(P=(O=L==null?void 0:L[0])==null?void 0:O.message)!=null?P:`${t.prop} is required`:"",i==null||i.emit("validate",t.prop,!1,v.value)},Ot=()=>{z("success"),i==null||i.emit("validate",t.prop,!0,"")},xt=async m=>{const O=T.value;return new ie({[O]:m}).validate({[O]:X.value},{firstFields:!0}).then(()=>(Ot(),!0)).catch(L=>($t(L),Promise.reject(L)))},ir=async(m,O)=>{if(l)return l=!1,!1;const P=Xr(O);if(!C.value)return O==null||O(!1),!1;const L=M(m);return L.length===0?(O==null||O(!0),!0):(z("validating"),xt(L).then(()=>(O==null||O(!0),!0)).catch(Oe=>{const{fields:sr}=Oe;return O==null||O(!1,sr),P?!1:Promise.reject(sr)}))},Te=()=>{z(""),v.value=""},ar=async()=>{const m=i==null?void 0:i.model;if(!m||!t.prop)return;const O=Fe(m,t.prop);gs(O.value,w)||(l=!0,O.value=Sr(w)),await et(),Te()},Ft=m=>{p.value.includes(m)||p.value.push(m)},Et=m=>{p.value=p.value.filter(O=>O!==m)};pe(()=>t.error,m=>{v.value=m||"",z(m?"error":"")},{immediate:!0}),pe(()=>t.validateStatus,m=>z(m||""));const $e=Jr({...Yr(t),$el:_,size:s,validateState:c,labelId:f,inputIds:p,isGroup:q,addInputId:Ft,removeInputId:Et,resetField:ar,clearValidate:Te,validate:ir});return Hr(qe,$e),Qr(()=>{t.prop&&(i==null||i.addField($e),w=Sr(X.value))}),kr(()=>{i==null||i.removeField($e)}),e({size:s,validateMessage:v,validateState:c,validate:ir,clearValidate:Te,resetField:ar}),(m,O)=>{var P;return Me(),Zr("div",{ref_key:"formItemRef",ref:_,class:Q(E(h)),role:E(q)?"group":void 0,"aria-labelledby":E(q)?E(f):void 0},[ve(E(ro),{"is-auto-width":E(y).width==="auto","update-all":((P=E(i))==null?void 0:P.labelWidth)==="auto"},{default:xe(()=>[E(F)?(Me(),Vt(Kt(E(R)?"label":"div"),{key:0,id:E(f),for:E(R),class:Q(E(o).e("label")),style:ur(E(y))},{default:xe(()=>[fe(m.$slots,"label",{label:E(nr)},()=>[Gt(fr(E(nr)),1)])]),_:3},8,["id","for","class","style"])):lr("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),dr("div",{class:Q(E(o).e("content")),style:ur(E(u))},[fe(m.$slots,"default"),ve(zt,{name:`${E(o).namespace.value}-zoom-in-top`},{default:xe(()=>[E(Tt)?fe(m.$slots,"error",{key:0,error:v.value},()=>[dr("div",{class:Q(E(b))},fr(v.value),3)]):lr("v-if",!0)]),_:3},8,["name"])],6)],10,to)}}});var _t=zr(io,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const fo=Ct(ws,{FormItem:_t}),uo=Bt(_t);export{uo as E,fo as a,gs as i};