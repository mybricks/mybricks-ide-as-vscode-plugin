import{g as getDefaultExportFromCjs,r as reactExports,a as reactDomExports,c as commonjsGlobal,s as staticMethods,b as getWebViewMessageAPI,R as React$1,C as ConfigProvider,S as Space}from"./index-Cxa07DWz.js";var plugin={exports:{}};/*! For license information please see plugin.js.LICENSE.txt */(function(module,exports$1){(function(R,g){module.exports=g(reactExports,reactDomExports)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE__9155__,__WEBPACK_EXTERNAL_MODULE__9514__){return function(){var __webpack_modules__={4038:function(R,g,t){var n=t(9155),e=t.n(n),r=t(2028),a=function(){return a=Object.assign||function(m){for(var h,l=1,s=arguments.length;l<s;l++)for(var o in h=arguments[l])Object.prototype.hasOwnProperty.call(h,o)&&(m[o]=h[o]);return m},a.apply(this,arguments)};g.A=function(m){var h=m.children,l=function(s,o){var d={};for(var E in s)Object.prototype.hasOwnProperty.call(s,E)&&o.indexOf(E)<0&&(d[E]=s[E]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var O=0;for(E=Object.getOwnPropertySymbols(s);O<E.length;O++)o.indexOf(E[O])<0&&Object.prototype.propertyIsEnumerable.call(s,E[O])&&(d[E[O]]=s[E[O]])}return d}(m,["children"]);return e().createElement("button",a({className:r.A.btn},l),l.dotTip&&e().createElement("div",{className:r.A.dotTip},"＊"),e().createElement("span",null,h))}},83:function(R,g,t){var n=t(9155),e=t.n(n),r=t(8997),a=t(5543),m=function(){return m=Object.assign||function(h){for(var l,s=1,o=arguments.length;s<o;s++)for(var d in l=arguments[s])Object.prototype.hasOwnProperty.call(l,d)&&(h[d]=l[d]);return h},m.apply(this,arguments)};g.A=function(h){var l=h.children,s=h.defaultFold,o=s===void 0||s,d=h.header,E=h.headerStyle,O=h.contentStyle,N=function(i,c){var b={};for(var x in i)Object.prototype.hasOwnProperty.call(i,x)&&c.indexOf(x)<0&&(b[x]=i[x]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var A=0;for(x=Object.getOwnPropertySymbols(i);A<x.length;A++)c.indexOf(x[A])<0&&Object.prototype.propertyIsEnumerable.call(i,x[A])&&(b[x[A]]=i[x[A]])}return b}(h,["children","defaultFold","header","headerStyle","contentStyle"]),v=(0,n.useState)(o),f=v[0],u=v[1],p=(0,n.useCallback)(function(){return u(function(i){return!i})},[]);return e().createElement("div",m({className:a.A.collapse},N),e().createElement("div",{className:"".concat(a.A.header),style:E,onClick:p},e().createElement("div",{className:"".concat(a.A.icon," ").concat(f?a.A.fold:"")},r.N8),d),f?null:e().createElement("div",{className:"".concat(a.A.content),style:O},l))}},4093:function(R,g,t){var n=t(9155),e=t.n(n),r=t(7273);g.A=function(a){var m=a.dropDownStyle,h=a.children,l=a.overlay,s=a.onBlur,o=(0,n.useState)(!1),d=o[0],E=o[1],O=(0,n.useCallback)(function(N){N.stopPropagation(),E(function(v){return!v})},[]);return(0,n.useEffect)(function(){s==null||s(function(){return E(!1)})},[]),e().createElement("div",{className:r.A.dropdown},e().createElement("div",{onClick:O},h),e().createElement("div",{style:m,className:r.A.content},d?l:null))}},8821:function(R,g,t){var n=t(9155),e=t.n(n),r=t(1249);g.A=function(a){var m=a.label,h=a.require,l=a.contentStyle,s=a.className,o=s===void 0?"":s,d=a.children,E=a.labelTop,O=E!==void 0&&E;return e().createElement("div",{className:"".concat(r.A.item," ").concat(O?r.A.labelTop:""," ").concat(o)},e().createElement("label",null,h?e().createElement("i",null,"*"):null,m),e().createElement("div",{className:r.A.content,style:l},d))}},9166:function(R,g,t){t.d(g,{f:function(){return h}});var n=t(9155),e=t.n(n),r=t(8640),a=function(){return a=Object.assign||function(l){for(var s,o=1,d=arguments.length;o<d;o++)for(var E in s=arguments[o])Object.prototype.hasOwnProperty.call(s,E)&&(l[E]=s[E]);return l},a.apply(this,arguments)},m=function(l){var s=l.defaultValue,o=l.onChange,d=l.onBlur,E=l.validateError,O=E===void 0?"":E,N=l.placeholder,v=l.style,f=v===void 0?{}:v,u=l.type,p=u===void 0?"input":u,i=(0,n.useRef)(null),c=(0,n.useState)(s),b=c[0],x=c[1];(0,n.useEffect)(function(){var _;O&&!b&&((_=i.current)===null||_===void 0||_.classList.add(r.A.error))},[O]);var A=function(_){var w;O&&((w=i.current)===null||w===void 0||w.classList.remove(r.A.error)),x(_.target.value),o==null||o(_)};return e().createElement("div",{className:r.A.input},e().createElement("div",{ref:i,className:"".concat(r.A.editor," ").concat(r.A.textEdt),"data-err":O},p==="input"?e().createElement("input",{defaultValue:s,value:b,placeholder:N,onBlur:d,style:f,onChange:A}):e().createElement("textarea",{defaultValue:s,placeholder:N,onChange:A,onBlur:d,style:f})))},h=function(l){return m(a(a({},l),{type:"textarea"}))};g.A=m},1067:function(R,g,t){t.d(g,{l:function(){return s}});var n=t(9155),e=t.n(n),r=t(9514),a=t(8997),m=t(4723),h=null,l=null,s=function(d,E){var O,N;d===void 0&&(d=""),E===void 0&&(E={type:"error",timeout:2e3,targetContainer:void 0}),(!((N=(O=document.querySelector("div[data-id=plugin-panel]"))===null||O===void 0?void 0:O.parentNode)===null||N===void 0)&&N.parentNode||E!=null&&E.targetContainer)&&(h&&(h=document.querySelector("div[data-id=http-plugin-panel-message]"))||(h=document.createElement("div")).setAttribute("data-id","http-plugin-panel-message"),document.body.appendChild(h),clearTimeout(l),(0,r.render)(e().createElement(o,{type:E.type,message:d}),h),l=setTimeout(function(){return(0,r.unmountComponentAtNode)(h)},E.timeout||2e3))},o=function(d){var E=d.type,O=E===void 0?"error":E,N=d.message;return N?e().createElement("div",{className:m.A.message},O==="error"?a.z3:null,O==="warning"?a.$e:null,O==="success"?a.kX:null,e().createElement("span",{className:m.A.content},N)):null}},6168:function(R,g,t){t.d(g,{FZ:function(){return p},NI:function(){return N},OH:function(){return O},TW:function(){return u},V_:function(){return f},lf:function(){return v}});var n=t(9155),e=t.n(n),r=t(5985),a=t(8821),m=t(9166),h=t(6418),l=t(2810),s=t(9226),o=function(i,c,b,x){return new(b||(b=Promise))(function(A,_){function w(M){try{P(x.next(M))}catch(L){_(L)}}function k(M){try{P(x.throw(M))}catch(L){_(L)}}function P(M){var L;M.done?A(M.value):(L=M.value,L instanceof b?L:new b(function(V){V(L)})).then(w,k)}P((x=x.apply(i,[])).next())})},d=function(i,c){var b,x,A,_,w={label:0,sent:function(){if(1&A[0])throw A[1];return A[1]},trys:[],ops:[]};return _={next:k(0),throw:k(1),return:k(2)},typeof Symbol=="function"&&(_[Symbol.iterator]=function(){return this}),_;function k(P){return function(M){return function(L){if(b)throw new TypeError("Generator is already executing.");for(;_&&(_=0,L[0]&&(w=0)),w;)try{if(b=1,x&&(A=2&L[0]?x.return:L[0]?x.throw||((A=x.return)&&A.call(x),0):x.next)&&!(A=A.call(x,L[1])).done)return A;switch(x=0,A&&(L=[2&L[0],A.value]),L[0]){case 0:case 1:A=L;break;case 4:return w.label++,{value:L[1],done:!1};case 5:w.label++,x=L[1],L=[0];continue;case 7:L=w.ops.pop(),w.trys.pop();continue;default:if(!((A=(A=w.trys).length>0&&A[A.length-1])||L[0]!==6&&L[0]!==2)){w=0;continue}if(L[0]===3&&(!A||L[1]>A[0]&&L[1]<A[3])){w.label=L[1];break}if(L[0]===6&&w.label<A[1]){w.label=A[1],A=L;break}if(A&&w.label<A[2]){w.label=A[2],w.ops.push(L);break}A[2]&&w.ops.pop(),w.trys.pop();continue}L=c.call(i,w)}catch(V){L=[6,V],x=0}finally{b=A=0}if(5&L[0])throw L[1];return{value:L[0]?L[1]:void 0,done:!0}}([P,M])}}},E=[{title:"GET",value:l.PJ.GET},{title:"POST",value:l.PJ.POST},{title:"PUT",value:l.PJ.PUT},{title:"DELETE",value:l.PJ.DELETE}],O=function(i){var c=i.defaultValue,b=i.onBlur,x=i.onChange,A=i.require,_=A!==void 0&&A;return e().createElement(a.A,{label:"名称",require:_},e().createElement(m.A,{key:"interfaceName",defaultValue:c,onBlur:b,onChange:x,placeholder:"服务接口的标题"}))},N=function(i){var c=i.defaultValue,b=i.onBlur,x=i.onChange,A=i.require,_=A===void 0||A,w=i.validateError;return e().createElement(a.A,{label:"地址",require:_},e().createElement(m.f,{defaultValue:c,onBlur:b,key:"address",onChange:function(k){return x(k)},validateError:w,placeholder:"服务接口的地址"}))},v=function(i){var c=i.defaultValue,b=i.onChange,x=i.require,A=x===void 0||x;return e().createElement(a.A,{label:"请求方法",require:A},e().createElement(h.A,{options:E,defaultValue:c,onChange:function(_){b==null||b(_)}}))},f=function(i){var c=i.CDN,b=i.value,x=i.unique,A=i.onChange,_=i.path,w=(0,n.useState)(!1),k=w[0],P=w[1],M=(0,n.useRef)(null),L=(0,n.useCallback)(function(){return o(void 0,void 0,void 0,function(){return d(this,function(B){return P(!0),[2]})})},[]),V=(0,n.useCallback)(function(){return o(void 0,void 0,void 0,function(){return d(this,function(B){return P(!1),[2]})})},[]);return e().createElement("div",{className:s.A.wrap},k?null:e().createElement("div",{className:s.A.sidebarPanelCodeIcon},e().createElement("span",null,e().createElement(r.I,{className:s.A.icon,name:"plus",onClick:L}))),e().createElement(r.A,{width:"100%",ref:M,key:x,eslint:{src:c==null?void 0:c.eslint},path:_,modal:{open:k,width:1200,title:"编辑代码",inside:!0,onOpen:L,maskClosable:!0,contentClassName:s.A.modalContent,onClose:V},babel:{standalone:c==null?void 0:c.babel},loaderConfig:{paths:c==null?void 0:c.paths},language:"javascript",theme:"light",value:b,onChange:A,options:{fontSize:12}}))},u=function(i){var c=i.defaultValue,b=i.onBlur,x=i.require,A=x!==void 0&&x,_=i.validateError;return e().createElement(a.A,{label:"接口描述",require:A},e().createElement(m.A,{defaultValue:c,onBlur:function(w){b(w)},key:"desc",validateError:_,placeholder:"接口描述"}))},p=function(i){var c=i.defaultValue,b=i.onBlur,x=i.onChange,A=i.require,_=A!==void 0&&A,w=i.validateError;return e().createElement(a.A,{label:"文档链接",require:_},e().createElement(m.f,{style:{height:80},onBlur:function(k){b(k)},onChange:x,key:"doc",validateError:w,defaultValue:c}))}},6418:function(R,g,t){var n=t(9155),e=t.n(n),r=t(5236);g.A=function(a){var m=a.options,h=a.defaultValue,l=a.onChange,s=(0,n.useState)(h),o=s[0],d=s[1];return(0,n.useEffect)(function(){d(h)},[h]),e().createElement("div",{className:r.A.edt},m.map(function(E){return e().createElement("div",{key:E.value,className:"".concat(r.A.opt," ").concat(E.value===o?r.A.selected:""),onClick:function(){l==null||l(E.value),d(E.value)}},E.title)}))}},9926:function(R,g,t){var n=t(9155),e=t.n(n),r=t(5708);g.A=function(a){var m=a.defaultValue,h=m!==void 0&&m,l=a.onChange,s=(0,n.useState)(h),o=s[0],d=s[1],E=(0,n.useCallback)(function(){d(!o),l==null||l(!o)},[o,l]);return e().createElement("div",{className:r.A.ct},e().createElement("button",{onClick:E,className:"".concat(r.A.switch," ").concat(o?r.A.checked:"")},e().createElement("div",{className:r.A.handle})))}},9456:function(R,g,t){var n=t(9155),e=t.n(n),r=t(2642),a=null;g.A=function(m){var h=m.children,l=m.item,s=m.draggable,o=m.onDrop,d=m.parent,E=m.onDragEnd,O=m.onDragStart,N=(0,n.useRef)(null),v=(0,n.useRef)(0),f=(0,n.useRef)(0),u=(0,n.useRef)(!0);return(0,n.useLayoutEffect)(function(){var p=N.current;v.current=p.clientHeight,p.addEventListener("dragstart",function(i){a=l,O==null||O(l)}),p.addEventListener("dragover",function(i){if(u.current&&(f.current=p.getBoundingClientRect().y,u.current=!1),a&&i.currentTarget&&(!l||(a==null?void 0:a.id)!==l.id)){var c=i.currentTarget;c.classList.remove(r.A.hovering,r.A.hoverTop,r.A.hoverBottom),c.classList.add(r.A.hovering,i.y>=f.current+v.current/2?r.A.hoverBottom:r.A.hoverTop)}i.preventDefault(),i.stopPropagation()}),p.addEventListener("dragleave",function(i){!a||!i.currentTarget||l&&(a==null?void 0:a.id)===l.id||i.currentTarget.classList.remove(r.A.hovering,r.A.hoverTop,r.A.hoverBottom),u.current=!0,i.stopPropagation()}),p.addEventListener("dragend",function(i){E==null||E(),!a||!i.currentTarget||l&&(a==null?void 0:a.id)===l.id||i.currentTarget.classList.remove(r.A.hovering,r.A.hoverTop,r.A.hoverBottom),a=null,u.current=!0}),p.addEventListener("drop",function(i){i.preventDefault(),!a||!i.currentTarget||l&&(a==null?void 0:a.id)===l.id||(i.currentTarget.classList.remove(r.A.hovering,r.A.hoverTop,r.A.hoverBottom),o(a,d||l,d?"inner":i.y>=f.current+v.current/2?"bottom":"top")),a=null,u.current=!0})},[]),e().createElement("div",{ref:N,draggable:s},h)}},6545:function(R,g,t){t.r(g),t.d(g,{AddressInput:function(){return n.NI},Button:function(){return m.A},CDN:function(){return N.sV},Collapse:function(){return a.A},Debug:function(){return d.A},DescriptionInput:function(){return n.TW},DocInput:function(){return n.FZ},Dropdown:function(){return h.A},EditorWithFullScreen:function(){return n.V_},FormItem:function(){return r.A},Input:function(){return o.A},MethodRadio:function(){return n.lf},Methods:function(){return N.PJ},NameInput:function(){return n.OH},PanelWrap:function(){return e.A},RadioButtons:function(){return l.A},Switch:function(){return s.A},TextArea:function(){return o.f},notice:function(){return E.l},safeDecode:function(){return O.ex},uuid:function(){return O.uR}});var n=t(6168),e=t(4100),r=t(8821),a=t(83),m=t(4038),h=t(4093),l=t(6418),s=t(9926),o=t(9166),d=t(1845),E=t(1067),O=t(8298),N=t(2810)},4100:function(R,g,t){var n=t(9155),e=t.n(n),r=t(9514),a=t.n(r),m=t(4038),h=t(2238),l=function(){return l=Object.assign||function(o){for(var d,E=1,O=arguments.length;E<O;E++)for(var N in d=arguments[E])Object.prototype.hasOwnProperty.call(d,N)&&(o[N]=d[N]);return o},l.apply(this,arguments)},s=function(o,d){var E=o.children,O=(o.style,o.className),N=O===void 0?"":O,v=o.title,f=v===void 0?"":v,u=o.extra,p=u===void 0?null:u,i=o.onClose,c=(0,n.useRef)({}),b=(0,n.useCallback)(function(){return Object.values(c.current).forEach(function(x){return x==null?void 0:x()})},[]);return(0,n.useImperativeHandle)(d,function(){return{registerBlur:function(x,A){var _;c.current=l(l({},c.current),((_={})[x]=A,_))}}},[]),a().createPortal(e().createElement("div",{"data-id":"plugin-panel",className:"".concat(h.A.pluginPanelContainer," ").concat(N),onClick:b},e().createElement("div",{className:h.A.pluginPanelTitle},e().createElement("div",null,f),e().createElement("div",null,p,e().createElement(m.A,{size:"small",onClick:i},"关 闭"))),e().createElement("div",{className:h.A.pluginPanelContent},E)),document.querySelector("div[data-id=plugin-root-panel]"))};g.A=(0,n.forwardRef)(s)},4015:function(R,g,t){var n=t(9155),e=t.n(n),r=t(8803);g.A=function(a){var m=a.content,h=a.children;return e().createElement("span",{className:r.A.tooltipContainer},h,e().createElement("div",{className:r.A.tooltip},m),e().createElement("div",{className:r.A.arrow}))}},2810:function(R,g,t){t.d(g,{B_:function(){return r},Cb:function(){return N},Hx:function(){return l},Ih:function(){return m},Kn:function(){return a},PJ:function(){return n},VB:function(){return o},Yp:function(){return e},aS:function(){return O},dy:function(){return s},sV:function(){return d},uG:function(){return h},vc:function(){return E},zV:function(){return v}});var n,e="@mybricks/plugins/service",r=`export default function ({ params, data, headers, url, method }) {
  // 设置请求query、请求体、请求头
  return { params, data, headers, url, method };
 }
`,a=`export default function (result, { method, url, params, data, headers }, { throwError }) {
  // return {
  //  total: result.all,
  //  dataSource: result.list.map({id, name} => ({
  //     value:id, label: name
  //  }))
  // }
  return result;
}
`,m=`export default function ({ response, config }, { throwError }) {
  // if (response.code !== 0) {
  //    throwError(response.errMsg);
  //    throwError({ message: response.errMsg || '我是复杂错误对象' });
  // }
  return response
}
`,h=`export default function handleError({ error, response, config }, { throwError }) {
  // 错误抛出时预处理数据，请注意：必须调用 throwError 抛出错误;
  // config：请求入参；error：错误对象；response：响应原始对象；response.status：获取 HTTP 状态码，response.data：获取接口返回值
  throwError(response.data.message || error.message || error);
}
`,l={HTTP:"http",TG:"http-tg",KDEV:"http-kdev",FOLDER:"folder",IMPORT:"import-from-clipboard",JS:"js"},s="separator",o="global-setting",d={eslint:"/mfs/editor_assets/eslint/8.15.0/eslint.js",paths:{vs:"/mfs/editor_assets/monaco-editor/0.33.0/min/vs"},babel:"/mfs/editor_assets/babel/babel-standalone.min.js"},E=function(){d=void 0},O=[{key:"output",title:"返回内容",description:"当标记组生效时，返回此标记对应内容"},{key:"predicate",title:"标记组生效标识",description:"标识标记组满足对应条件生效",needMarkValue:!0}],N={predicate:"生效标识",output:"返回内容"},v={predicate:["number","string","boolean"],output:["any"]};(function(f){f.GET="GET",f.POST="POST",f.PUT="PUT",f.DELETE="DELETE"})(n||(n={}))},3366:function(R,g){g.A={connectors:[]}},1295:function(R,g,t){t.d(g,{w:function(){return n.A}});var n=t(8484)},8484:function(R,g,t){var n=t(9155);g.A=function(e,r,a){var m=(0,n.useRef)(a.skipCount);(0,n.useEffect)(function(){m.current?m.current--:e()},r)}},8997:function(R,g,t){t.d(g,{$e:function(){return E},Kk:function(){return r},N8:function(){return o},OS:function(){return v},TF:function(){return h},TV:function(){return N},hZ:function(){return l},hc:function(){return m},kX:function(){return O},kx:function(){return a},tY:function(){return s},z3:function(){return d}});var n=t(9155),e=t.n(n),r=e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},e().createElement("path",{d:"M764.41958 521.462537l37.594406-37.594405a202.037962 202.037962 0 0 0 59.588412-144.23976 169.302697 169.302697 0 0 0-53.45055-121.734266l-6.137862-6.137862a163.932068 163.932068 0 0 0-127.872128-53.962038 193.854146 193.854146 0 0 0-135.032967 60.0999l-38.105894 37.082917zM373.386613 254.977023l106.901099-102.297702a281.318681 281.318681 0 0 1 197.69031-84.13986 250.117882 250.117882 0 0 1 160.095904 53.962038l127.872128-122.501499L1022.977023 58.565435l-127.872128 127.872127a279.784216 279.784216 0 0 1-30.689311 360.599401l-100.251748 102.297702zM227.100899 530.157842a189.250749 189.250749 0 0 0-5.370629 265.718282l6.137862 6.137862a164.443556 164.443556 0 0 0 127.872128 53.706294 194.621379 194.621379 0 0 0 135.032967-59.844156l42.965035-43.476524L270.065934 486.937063zM0 967.224775l133.242757-139.892108a278.761239 278.761239 0 0 1 30.689311-360.343656L270.065934 359.064935l80.559441 81.070929L430.929071 359.064935l57.798202 58.053946L409.190809 498.701299l120.1998 120.967033 83.628372-83.884116 53.962038 55.496503-85.418581 85.93007 74.933066 75.444556-106.133866 106.901099a283.108891 283.108891 0 0 1-198.457542 84.651348 251.396603 251.396603 0 0 1-160.095904-53.706293L58.30969 1024z"})),a=e().createElement("svg",{width:"16",height:"16",viewBox:"0 0 1057 1024"},e().createElement("path",{d:"M342.016 214.016l468.010667 297.984-468.010667 297.984 0-596.010667z"})),m=e().createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"form",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},e().createElement("path",{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}),e().createElement("path",{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"})),h=e().createElement("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},e().createElement("path",{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"})),l=e().createElement("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20"},e().createElement("path",{d:"M448.362667 166.826667l113.6 0.170666a64 64 0 0 1 63.893333 63.914667l0.042667 18.517333a301.461333 301.461333 0 0 1 62.101333 34.88l15.210667-8.746666a64 64 0 0 1 87.296 23.381333l56.938666 98.304a64 64 0 0 1-19.989333 85.397333l-3.477333 2.133334-15.274667 8.810666c2.624 24.234667 2.304 48.853333-1.130667 73.322667l10.794667 6.250667a64 64 0 0 1 25.216 84.117333l-1.770667 3.306667-53.333333 92.373333a64 64 0 0 1-84.117333 25.216l-3.328-1.792-14.741334-8.533333a298.538667 298.538667 0 0 1-59.626666 33.28v25.386666a64 64 0 0 1-59.989334 63.957334l-4.074666 0.128-113.6-0.170667a64 64 0 0 1-63.893334-63.893333l-0.064-30.613334a302.613333 302.613333 0 0 1-50.069333-29.696l-27.221333 15.658667a64 64 0 0 1-87.296-23.402667l-56.938667-98.282666a64 64 0 0 1 19.989333-85.418667l3.477334-2.133333 27.690666-15.936c-2.133333-20.266667-2.24-40.768-0.192-61.226667l-30.741333-17.770667A64 64 0 0 1 158.506667 393.6l1.792-3.306667 53.333333-92.373333a64 64 0 0 1 84.117333-25.216l3.306667 1.792 26.794667 15.466667a297.984 297.984 0 0 1 56.426666-34.666667v-24.362667a64 64 0 0 1 59.989334-63.978666l4.074666-0.128z m-0.085334 64l0.064 65.066666-36.778666 17.301334c-15.744 7.402667-30.613333 16.533333-44.309334 27.221333l-34.005333 26.538667-62.570667-36.138667-1.6-0.896-53.333333 92.373333 66.56 38.421334-4.138667 41.152c-1.6 15.978667-1.536 32.106667 0.149334 48.085333l4.394666 41.429333-63.786666 36.736 56.917333 98.282667 63.338667-36.416 33.6 24.597333a237.994667 237.994667 0 0 0 39.466666 23.424l36.736 17.258667 0.128 71.168 113.578667 0.170667-0.064-68.16 39.466667-16.426667a234.538667 234.538667 0 0 0 46.826666-26.112l33.578667-24.128 50.56 29.184 53.290667-92.394667-48.128-27.818666 5.973333-42.688c2.666667-19.093333 2.965333-38.421333 0.896-57.6l-4.48-41.450667 51.456-29.696-56.938667-98.282667-51.2 29.504-33.621333-24.512a238.037333 238.037333 0 0 0-48.938667-27.498666l-39.381333-16.341334-0.128-61.184-113.578667-0.170666z m127.381334 183.722666a128.170667 128.170667 0 0 1 46.890666 174.933334 127.829333 127.829333 0 0 1-174.762666 46.848 128.170667 128.170667 0 0 1-46.869334-174.933334 127.829333 127.829333 0 0 1 174.741334-46.848z m-119.317334 78.805334a64.170667 64.170667 0 0 0 23.466667 87.573333 63.829333 63.829333 0 0 0 87.296-23.402667 64.170667 64.170667 0 0 0-20.266667-85.589333l-3.2-1.984-3.306666-1.770667a63.829333 63.829333 0 0 0-83.989334 25.173334z"})),s=e().createElement("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},e().createElement("path",{d:"M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"}),e().createElement("path",{d:"M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"})),o=e().createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"right",width:"16",height:"16",fill:"currentColor","aria-hidden":"true"},e().createElement("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"})),d=e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},e().createElement("path",{d:"M721.877333 303.104a48.469333 48.469333 0 0 0-68.437333 0l-141.909333 141.909333-136.277334-136.234666a46.933333 46.933333 0 1 0-66.432 66.432l136.277334 136.277333-141.952 141.952a48.384 48.384 0 0 0 68.394666 68.352l141.952-141.909333 137.045334 137.002666a46.933333 46.933333 0 1 0 66.432-66.432l-137.045334-137.002666 141.952-141.952a48.469333 48.469333 0 0 0 0-68.394667M512 1024C229.248 1024 0 794.752 0 512 0 229.205333 229.248 0 512 0c282.794667 0 512 229.205333 512 512 0 282.752-229.205333 512-512 512",fill:"#FA5555"})),E=e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},e().createElement("path",{d:"M512 53.248c129.707008 3.412992 237.739008 48.299008 324.096 134.656S967.339008 382.292992 970.752 512c-3.412992 129.707008-48.299008 237.739008-134.656 324.096S641.707008 967.339008 512 970.752c-129.707008-3.412992-237.739008-48.299008-324.096-134.656S56.660992 641.707008 53.248 512c3.412992-129.707008 48.299008-237.739008 134.656-324.096S382.292992 56.660992 512 53.248z m0 196.608c-17.748992 0-32.427008 6.484992-44.032 19.456-11.604992 12.971008-16.724992 28.331008-15.36 46.08l23.552 262.144c1.364992 9.556992 5.291008 17.236992 11.776 23.04 6.484992 5.803008 14.507008 8.704 24.064 8.704s17.579008-2.900992 24.064-8.704c6.484992-5.803008 10.411008-13.483008 11.776-23.04l23.552-262.144c1.364992-17.748992-3.755008-33.108992-15.36-46.08-11.604992-12.971008-26.283008-19.456-44.032-19.456z m0 524.288c15.019008-0.683008 27.476992-5.803008 37.376-15.36 9.899008-9.556992 14.848-21.844992 14.848-36.864 0-15.019008-4.948992-27.476992-14.848-37.376-9.899008-9.899008-22.356992-14.848-37.376-14.848-15.019008 0-27.476992 4.948992-37.376 14.848-9.899008 9.899008-14.848 22.356992-14.848 37.376 0 15.019008 4.948992 27.307008 14.848 36.864 9.899008 9.556992 22.356992 14.676992 37.376 15.36z",fill:"#faad14"})),O=e().createElement("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"#52c41a","aria-hidden":"true"},e().createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"})),N=e().createElement("svg",{viewBox:"64 64 896 896",width:"16",height:"16",fill:"currentColor"},e().createElement("path",{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"})),v=e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1500",width:"12",height:"12"},e().createElement("path",{d:"M512 298.6496a85.3504 85.3504 0 1 0 0-170.6496 85.3504 85.3504 0 0 0 0 170.6496z",fill:"currentColor","p-id":"1501"}),e().createElement("path",{d:"M512 512m-85.3504 0a85.3504 85.3504 0 1 0 170.7008 0 85.3504 85.3504 0 1 0-170.7008 0Z",fill:"currentColor","p-id":"1502"}),e().createElement("path",{d:"M512 896a85.3504 85.3504 0 1 0 0-170.7008 85.3504 85.3504 0 0 0 0 170.7008z",fill:"currentColor","p-id":"1503"}))},1076:function(R,g,t){var n=t(9155),e=t.n(n),r=t(7030),a=function(){return a=Object.assign||function(m){for(var h,l=1,s=arguments.length;l<s;l++)for(var o in h=arguments[l])Object.prototype.hasOwnProperty.call(h,o)&&(m[o]=h[o]);return m},a.apply(this,arguments)};g.A=function(m){var h=m.connector,l=m.coms,s=m.component,o=m.closePlugin;return l.length?e().createElement(e().Fragment,null,e().createElement("span",{className:r.A.tips},"（以下组件可拖动添加至画布）"),e().createElement("div",{className:r.A.comsList},l.map(function(d){return e().createElement("div",{className:r.A.comItem,"data-mybricks-tip":d.title,onMouseDown:function(E){s.dragToAddInstance(E,a(a({},d),{connector:h})),o()}},e().createElement("div",{className:r.A.comIcon},e().createElement("img",{className:r.A.comImg,src:d.icon})),e().createElement("div",{className:r.A.comTitle},d.title))}))):e().createElement("span",{className:r.A.tips},"未匹配到对应schema的组件")}},1845:function(R,g,t){var n=t(9155),e=t.n(n),r=t(8298),a=t(4827),m=t(5985),h=t(8827),l=t(2374),s=t(7074),o=t(4986),d=t(8821),E=t(4674),O=t(4038),N=t(6545),v=t(4015),f=t(2810),u=t(3873);function p(A){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},p(A)}var i=function(){return i=Object.assign||function(A){for(var _,w=1,k=arguments.length;w<k;w++)for(var P in _=arguments[w])Object.prototype.hasOwnProperty.call(_,P)&&(A[P]=_[P]);return A},i.apply(this,arguments)},c=function(A,_,w){if(w||arguments.length===2)for(var k,P=0,M=_.length;P<M;P++)!k&&P in _||(k||(k=Array.prototype.slice.call(_,0,P)),k[P]=_[P]);return A.concat(k||Array.prototype.slice.call(_))};function b(A){var _=A.data,w="";try{w=JSON.stringify(_,null,2)}catch(k){console.log(k,"error")}return w?e().createElement("div",{style:{marginLeft:87}},e().createElement("div",{className:u.A.title},"标记后的返回结果示例"),e().createElement(m.A,{value:w,height:300,language:"json",theme:"light",options:{readOnly:!0,fontSize:12}})):null}var x=e().createElement("svg",{viewBox:"0 0 1027 1024",width:"16",height:"16",fill:"currentColor"},e().createElement("path",{d:"M321.828571 226.742857c-14.628571-14.628571-36.571429-14.628571-51.2 0L7.314286 482.742857c-14.628571 14.628571-14.628571 36.571429 0 51.2l256 256c14.628571 14.628571 36.571429 14.628571 51.2 0 14.628571-14.628571 14.628571-36.571429 0-51.2L87.771429 512l234.057142-234.057143c7.314286-14.628571 7.314286-36.571429 0-51.2z m263.314286 0c-14.628571 0-36.571429 7.314286-43.885714 29.257143l-131.657143 497.371429c-7.314286 21.942857 7.314286 36.571429 29.257143 43.885714s36.571429-7.314286 43.885714-29.257143l131.657143-497.371429c7.314286-14.628571-7.314286-36.571429-29.257143-43.885714z m431.542857 256l-256-256c-14.628571-14.628571-36.571429-14.628571-51.2 0-14.628571 14.628571-14.628571 36.571429 0 51.2L936.228571 512l-234.057142 234.057143c-14.628571 14.628571-14.628571 36.571429 0 51.2 14.628571 14.628571 36.571429 14.628571 51.2 0l256-256c14.628571-14.628571 14.628571-43.885714 7.314285-58.514286z"}));g.A=function(A){var _,w=A.model,k=A.onChangeModel,P=A.connect,M=A.registerBlur,L=(0,n.useState)(),V=L[0],B=L[1],T=(0,n.useState)(!1),U=T[0],H=T[1],K=(0,n.useState)(!1),J=K[0],W=K[1],q=(0,n.useRef)(),Z=(0,n.useRef)(),X=(0,n.useRef)(),ee=(0,n.useRef)(null),pe=(0,n.useRef)(null),re=(0,n.useState)(""),ae=re[0],ie=re[1],fe=(0,n.useState)(!1),D=fe[0],F=fe[1],j=(0,n.useState)(!1),y=j[0],S=j[1],C=(0,n.useState)(!1),I=C[0],z=C[1],G=(0,n.useState)(!1),Y=G[0],le=G[1],se=(0,n.useState)("default"),_e=se[0],Se=se[1],Ve=(0,n.useRef)(""),Ye=(0,n.useRef)(),$=(0,n.useMemo)(function(){var ue;return(ue=w.markList)===null||ue===void 0?void 0:ue.find(function(me){return me.id===_e})},[w,_e]),te=(0,n.useCallback)(function(ue){var me,be=ue;!((me=ue.markList)===null||me===void 0)&&me.length||(be=i(i({},ue),{outputKeys:void 0,excludeKeys:void 0,outputSchema:void 0,resultSchema:void 0,markList:[{title:"默认",id:"default",predicate:{},outputKeys:ue.outputKeys||[],excludeKeys:ue.excludeKeys||[],outputSchema:ue.outputSchema||{},resultSchema:ue.resultSchema}]})),ue.params||(be=i(i({},be),{params:{type:"root",name:"root",children:[]}})),k(be)},[k]),ce=(0,n.useCallback)(function(ue,me,be){ue===void 0&&(ue=[]),me===void 0&&(me=[]);var Ae=c([],ue,!0),De=c([],me,!0);return be?(Ae=ue.filter(Boolean).map(function(ye){return ye.split(".")}).filter(function(ye){for(var we,je,Ee=be.properties||((we=be.items)===null||we===void 0?void 0:we.properties),Oe=0;Oe<ye.length;Oe++){var ke=ye[Oe];if(!Ee||!Ee[ke])return!1;Ee=Ee[ke].properties||((je=Ee[ke].items)===null||je===void 0?void 0:je.properties)}return!0}).map(function(ye){return ye.join(".")}),De=me.filter(Boolean).map(function(ye){return ye.split(".")}).filter(function(ye){for(var we,je,Ee=be.properties||((we=be.items)===null||we===void 0?void 0:we.properties),Oe=0;Oe<ye.length;Oe++){var ke=ye[Oe];if(!Ee||!Ee[ke])return!1;Ee=Ee[ke].properties||((je=Ee[ke].items)===null||je===void 0?void 0:je.properties)}return!0}).map(function(ye){return ye.join(".")}),{outputKeys:Ae,excludeKeys:De}):{outputKeys:[],excludeKeys:[]}},[]),ve=function(){try{(0,r.jf)(Z.current);var ue=(0,r.zB)(w.params||{});(0,r.jf)(ue),w.inputSchema=ue;var me=JSON.parse(JSON.stringify(w.markList)),be=me.find(function(Te){return Te.id===_e});if(!be)throw Error("当前标记组不存在");var Ae=ce(be.outputKeys,be.excludeKeys,Z.current),De=Ae.outputKeys,ye=De===void 0?[]:De,we=Ae.excludeKeys,je=we===void 0?[]:we,Ee=(0,r.A5)((0,r.TY)(q.current,ye),je),Oe=(0,r.j7)(Ee);if(Array.isArray(ye)&&ye.length&&(ye.length>1||ye.length!==1||ye[0]!==""))try{for(var ke=c([],ye,!0).map(function(Te){return Te.split(".")});Object.prototype.toString.call(Ee)==="[object Object]"&&ke.every(function(Te){return!!Te.length})&&Object.values(Ee).length===1;)Ee=Object.values(Ee)[0],Oe=Object.values(Oe.properties)[0],ke.forEach(function(Te){return Te.shift()})}catch{}(0,r.jf)(Oe),B(Ee),be.outputKeys=ye,be.excludeKeys=je,be.outputSchema=Oe,be.resultSchema=Z.current,k(i(i({},w),{markList:me}))}catch(Te){console.error(Te);var ze=Te instanceof Error;ie(ze?(Te==null?void 0:Te.message)||Te:"接口错误：".concat(typeof Te=="string"?Te:"由全局响应错误拦截透出，值为 ".concat(JSON.stringify(Te))))}S(!1),z(!1)},he=(0,n.useCallback)(function(){S(!1),z(!1)},[]),de=(0,n.useCallback)(function(){return z(function(ue){return!ue})},[]),Ie=(0,n.useCallback)(function(ue){if(ue!==void 0){var me=(0,r.zB)(ue);(0,r.jf)(me),k(i(i({},w),{inputSchema:me,params:ue}))}},[w,k]),Be=(0,n.useCallback)(function(ue){var me,be,Ae,De=ue.outputKeys,ye=De===void 0?[]:De,we=ue.excludeKeys,je=we===void 0?[]:we,Ee=ue.resultSchema;try{var Oe=!1,ke={};ye.length===0?ke=Ee:ye.length===1&&ye[0]===""?ke={type:"any"}:(ke=Ee.type==="array"?{type:"array",items:((me=Ee.items)===null||me===void 0?void 0:me.type)==="object"?{type:"object",properties:{}}:((be=Ee.items)===null||be===void 0?void 0:be.type)==="array"?{type:"array",items:{}}:{type:(Ae=Ee.items)===null||Ae===void 0?void 0:Ae.type}}:{type:"object",properties:{}},ye.forEach(function(Ne){var Le,Xe,Qe,$e,xe=ke.properties||((Le=ke.items)===null||Le===void 0?void 0:Le.properties)||((Xe=ke.items)===null||Xe===void 0?void 0:Xe.items),qe=Ee.properties||((Qe=Ee.items)===null||Qe===void 0?void 0:Qe.properties)||(($e=Ee.items)===null||$e===void 0?void 0:$e.items),tt=Ne.split(".");tt.forEach(function(Ke,rt){if(xe&&qe&&qe[Ke])if(rt===tt.length-1)xe[Ke]=i({},qe[Ke]);else{var nt=qe[Ke].type;nt==="array"?(xe[Ke]=xe[Ke]||i(i({},qe[Ke]),{items:qe[Ke].items.type==="object"?{type:"object",properties:{}}:qe[Ke].items.type==="array"?{type:"array",items:{}}:{type:qe[Ke].items.type}}),xe=xe[Ke].items.properties,qe=qe[Ke].items.properties):nt==="object"?(xe[Ke]=xe[Ke]||i(i({},qe[Ke]),{properties:{}}),xe=xe[Ke].properties,qe=qe[Ke].properties):(xe[Ke]=i({},qe[Ke]),xe=xe[Ke].properties,qe=qe[Ke].properties)}})}),Object.keys(ke.properties).length===1&&(Oe=!0)),je=je.map(function(Ne){return Ne.split(".")}).filter(function(Ne){for(var Le,Xe,Qe=ke.properties||((Le=ke.items)===null||Le===void 0?void 0:Le.properties),$e=0;$e<Ne.length;$e++){var xe=Ne[$e];if(!Qe||!Qe[xe])return!1;Qe=Qe[xe].properties||((Xe=Qe[xe].items)===null||Xe===void 0?void 0:Xe.properties)}return!0}).map(function(Ne){return Ne.join(".")});var ze=(0,E.mg)(ke);je==null||je.forEach(function(Ne){for(var Le=Ne.split("."),Xe=Le.length,Qe=ze,$e=0;$e<Xe-1;$e++)Qe=(Qe.properties||Qe.items.properties)[Le[$e]];try{Reflect.deleteProperty(Qe.properties||Qe.items.properties,Le[Xe-1])}catch{}});try{var Te=(0,E.mg)(q.current),He=(0,r.TY)((0,r.A5)(Te,je),ye);if(Oe)try{for(var Ze=ye.map(function(Ne){return Ne.split(".")});ze.type==="object"&&Ze.every(function(Ne){return!!Ne.length})&&Object.values(ze.properties||{}).length===1;)He=q.current?Object.values(He)[0]:He,ze=Object.values(ze.properties)[0],Ze.forEach(function(Ne){return Ne.shift()})}catch(Ne){console.log(Ne)}He!==void 0&&B(q.current?He:void 0)}catch{}var Me=w.markList.findIndex(function(Ne){return Ne.id===ue.id});ue.outputKeys=ye,ue.excludeKeys=je,ue.outputSchema=ze,w.markList.splice(Me,1,i({},ue)),k(i(i({},w),{markList:c([],w.markList,!0)}))}catch(Ne){console.log(Ne)}},[w]),Ge=(0,n.useCallback)(function(ue){return X.current=ue},[]),et=(0,n.useCallback)(function(){X.current=$.resultSchema,F(!0)},[$]),Q=(0,n.useCallback)(function(){var ue=w.markList.find(function(De){return De.id===_e});if(ue){ue.resultSchema=X.current;var me=ce(ue.outputKeys,ue.excludeKeys,ue.resultSchema),be=me.outputKeys,Ae=me.excludeKeys;Be(i(i({},ue),{outputKeys:be,excludeKeys:Ae}))}F(!1)},[_e,w,Be]),ne=(0,n.useCallback)(function(){X.current=void 0,F(!1)},[]),oe=(0,n.useCallback)(function(){return le(!0)},[]),ge=(0,n.useCallback)(function(){return le(!1)},[]),Ce=(0,n.useCallback)(function(ue){return Ve.current=ue.target.value},[]),Re=(0,n.useCallback)(function(){var ue=(0,r.uR)(),me=w.markList.find(function(be){return be.id==="default"});k(i(i({},w),{markList:c(c([],w.markList,!0),[{title:Ve.current,id:ue,outputKeys:[],excludeKeys:[],resultSchema:me==null?void 0:me.resultSchema,outputSchema:me==null?void 0:me.resultSchema}],!1)})),Ve.current="",le(!1),Se(ue)},[w]),Pe=(0,n.useCallback)(function(ue){ue.keyCode!==13&&ue.key!=="Enter"||Re()},[Re]),Ue=(0,n.useCallback)(function(ue){var me,be=w.markList.findIndex(function(De){return De.id===ue}),Ae=_e===((me=w.markList[be])===null||me===void 0?void 0:me.id);w.markList.splice(be,1),k(i(i({},w),{markList:c([],w.markList,!0)})),Ae&&Se(w.markList[be-1].id)},[w,_e]),Je=(0,n.useCallback)(function(ue){Se(ue),B(void 0)},[]),Fe=(0,n.useCallback)(function(ue){var me,be;if(ue.stopPropagation(),U)try{if(!w.inputSchema&&!(!((me=ee.current)===null||me===void 0)&&me.value))return void H(!U);var Ae=JSON.parse((be=ee.current)===null||be===void 0?void 0:be.value);if(Ae.type==="object"&&Ae.properties){if(JSON.stringify(w.inputSchema)!==JSON.stringify(Ae)){var De=(0,a.u)(Ae),ye=De[0],we=De[1];if(ye===!1)return(0,N.notice)("JSON 解析错误，".concat(we.length?we[0].msg+"，":"","此次变更被忽略"),{type:"warning"}),void H(!U);k(i(i({},w),{inputSchema:Ae,params:(0,r.OD)(Ae)}))}}else if(Object.prototype.toString.call(Ae)==="[object Object]"){var je=(0,r.Pv)(Ae),Ee=je.params,Oe=je.originSchema;k(i(i({},w),{inputSchema:Oe,params:Ee}))}else(0,N.notice)("JSON 描述不合法，此次变更被忽略",{type:"warning"})}catch(ke){console.warn("JSON 解析错误",ke),(0,N.notice)("JSON 解析错误，此次变更被忽略",{type:"warning"})}H(!U)},[U]),We=(0,n.useCallback)(function(ue){var me,be;if(ue.stopPropagation(),J)try{if(!$.resultSchema&&!(!((me=pe.current)===null||me===void 0)&&me.value))return void W(!J);var Ae=JSON.parse((be=pe.current)===null||be===void 0?void 0:be.value);if(JSON.stringify($.resultSchema)!==JSON.stringify(Ae)){var De=(0,a.u)(Ae),ye=De[0],we=De[1],je=we===void 0?[]:we;if(ye===!1)return(0,N.notice)("JSON 解析错误，".concat(je.length?je[0].msg+",":"","此次变更被忽略"),{type:"warning"}),void W(!J);var Ee=(0,E.mg)(w.markList).find(function(Te){return Te.id===$.id});if(!Ee)return(0,N.notice)("当前标记组不存在，此次变更被忽略",{type:"warning"}),void W(!J);var Oe=ce(Ee.outputKeys,Ee.excludeKeys,Ae),ke=Oe.outputKeys,ze=Oe.excludeKeys;Be(i(i({},Ee),{outputKeys:ke,excludeKeys:ze,resultSchema:Ae}))}}catch(Te){console.warn("JSON 解析错误",Te),(0,N.notice)("JSON 解析错误，此次变更被忽略",{type:"warning"})}W(!J)},[J,$,w,Be]);return(0,n.useEffect)(function(){ie(""),te(w)},[w.id]),(0,n.useEffect)(function(){var ue,me;Y&&((me=(ue=Ye.current)===null||ue===void 0?void 0:ue.focus)===null||me===void 0||me.call(ue))},[Y]),e().createElement(e().Fragment,null,e().createElement("div",{className:u.A.paramEditContainer},U?e().createElement(d.A,{label:"请求参数",labelTop:!0},e().createElement("textarea",{ref:ee,className:"".concat(u.A.codeText,"  ").concat(u.A.textEdt),cols:30,rows:10,defaultValue:JSON.stringify(w.inputSchema,null,2)}),e().createElement("div",null,"支持识别 JSON、JSON Schema 等描述协议")):e().createElement(n.Fragment,{key:w.id},e().createElement(d.A,{label:"请求参数",labelTop:!0},e().createElement(l.A,{value:w.params,onChange:Ie})),e().createElement(d.A,null,e().createElement(s.A,{showTip:y,onCloseTip:he,onToggleSchemaPreview:de,showPreviewSchema:I,onConfirmTip:ve,onDebugClick:function(){return ue=void 0,me=void 0,Ae=function(){var De,ye,we,je,Ee,Oe,ke;return function(ze,Te){var He,Ze,Me,Ne,Le={label:0,sent:function(){if(1&Me[0])throw Me[1];return Me[1]},trys:[],ops:[]};return Ne={next:Xe(0),throw:Xe(1),return:Xe(2)},typeof Symbol=="function"&&(Ne[Symbol.iterator]=function(){return this}),Ne;function Xe(Qe){return function($e){return function(xe){if(He)throw new TypeError("Generator is already executing.");for(;Ne&&(Ne=0,xe[0]&&(Le=0)),Le;)try{if(He=1,Ze&&(Me=2&xe[0]?Ze.return:xe[0]?Ze.throw||((Me=Ze.return)&&Me.call(Ze),0):Ze.next)&&!(Me=Me.call(Ze,xe[1])).done)return Me;switch(Ze=0,Me&&(xe=[2&xe[0],Me.value]),xe[0]){case 0:case 1:Me=xe;break;case 4:return Le.label++,{value:xe[1],done:!1};case 5:Le.label++,Ze=xe[1],xe=[0];continue;case 7:xe=Le.ops.pop(),Le.trys.pop();continue;default:if(!((Me=(Me=Le.trys).length>0&&Me[Me.length-1])||xe[0]!==6&&xe[0]!==2)){Le=0;continue}if(xe[0]===3&&(!Me||xe[1]>Me[0]&&xe[1]<Me[3])){Le.label=xe[1];break}if(xe[0]===6&&Le.label<Me[1]){Le.label=Me[1],Me=xe;break}if(Me&&Le.label<Me[2]){Le.label=Me[2],Le.ops.push(xe);break}Me[2]&&Le.ops.pop(),Le.trys.pop();continue}xe=Te.call(ze,Le)}catch(qe){xe=[6,qe],Ze=0}finally{He=Me=0}if(5&xe[0])throw xe[1];return{value:xe[0]?xe[1]:void 0,done:!0}}([Qe,$e])}}}(this,function(ze){switch(ze.label){case 0:return ze.trys.push([0,2,,3]),w.path?(De=w.params||{},ye=(0,r.HO)(De),["POST","PUT"].includes(w.method)&&(0,r.jv)(De)&&(we=new FormData,Object.keys(ye).forEach(function(Te){var He=ye[Te];Array.isArray(He)?He[0]instanceof File?He.forEach(function(Ze){return we.append(Te,Ze)}):we.append(Te,JSON.stringify(He)):p(He)==="object"?we.append(Te,He instanceof File?He:JSON.stringify(He)):we.append(Te,He)}),ye=we),ie(""),je=q,[4,P({type:w.type||"http",mode:"test",id:w.id,connectorName:f.Yp,content:w},ye)]):((0,N.notice)("接口的请求路径不能为空",{type:"warning"}),[2]);case 1:return je.current=ze.sent(),Ee=(0,r.j7)(q.current),Z.current=Ee||{},$.resultSchema&&JSON.stringify($.resultSchema)!==JSON.stringify(Z.current)?S(!0):ve(),[3,3];case 2:return Oe=ze.sent(),console.error(Oe),ke=Oe instanceof Error,ie(ke?(Oe==null?void 0:Oe.message)||Oe:"接口错误：".concat(typeof Oe=="string"?Oe:"由全局响应错误拦截透出，值为 ".concat(JSON.stringify(Oe)))),[3,3];case 3:return z(!1),[2]}})},new((be=void 0)||(be=Promise))(function(De,ye){function we(Oe){try{Ee(Ae.next(Oe))}catch(ke){ye(ke)}}function je(Oe){try{Ee(Ae.throw(Oe))}catch(ke){ye(ke)}}function Ee(Oe){var ke;Oe.done?De(Oe.value):(ke=Oe.value,ke instanceof be?ke:new be(function(ze){ze(ke)})).then(we,je)}Ee((Ae=Ae.apply(ue,me||[])).next())});var ue,me,be,Ae},params:w.params}))),e().createElement("div",{className:"".concat(u.A.codeIcon," ").concat(U?u.A.focus:""),onClick:Fe},x)),I?e().createElement(d.A,{label:"预览类型",labelTop:!0},e().createElement(h.A,{outputKeys:[],excludeKeys:[],noMark:!0,schema:Z.current})):D?e().createElement(d.A,{label:"返回数据",labelTop:!0},e().createElement("div",{className:u.A.buttonGroup},e().createElement("div",null),e().createElement("div",null,e().createElement(O.A,{onClick:ne},"取消"),e().createElement(O.A,{onClick:Q},"保存"))),e().createElement(o.A,{key:w.id,schema:$.resultSchema,onChange:Ge})):e().createElement(e().Fragment,null,e().createElement(d.A,{label:"返回数据",className:u.A.scrollFormItem,labelTop:!0},J?e().createElement(e().Fragment,null,e().createElement("div",{className:u.A.buttonGroup},e().createElement("div",null),e().createElement("div",{className:"".concat(u.A.codeIcon," ").concat(u.A.responseCodeIcon," ").concat(J?u.A.focus:""),onClick:We},x)),e().createElement("textarea",{ref:pe,className:"".concat(u.A.codeText,"  ").concat(u.A.textEdt),cols:30,rows:10,defaultValue:JSON.stringify($.resultSchema,null,2)}),e().createElement("div",null,"支持识别JSON Schema 描述协议")):e().createElement(e().Fragment,null,e().createElement("div",{className:u.A.buttonGroup},e().createElement("div",{className:u.A.categoryContainer},e().createElement("div",{className:u.A.buttons},(_=w.markList)===null||_===void 0?void 0:_.map(function(ue){return e().createElement("div",{key:ue.id,className:"".concat(u.A.option," ").concat(ue.id===_e?u.A.selected:""),onClick:function(){return Je(ue.id)}},ue.title,ue.id!=="default"?e().createElement("div",{className:u.A.optionCancelIcon,onClick:function(me){me.stopPropagation(),Ue(ue.id)}},"✕"):null)})),e().createElement(v.A,{content:"添加数据标记组"},Y?e().createElement("div",{className:u.A.iconRootClose,onClick:ge},"✕"):e().createElement("div",{className:u.A.iconRootAdder,onClick:oe},"+")),Y?e().createElement("div",{className:u.A.markAdder},e().createElement("input",{className:u.A.markInput,ref:Ye,onKeyUp:Pe,onChange:Ce}),e().createElement("button",{className:u.A.button,onClick:Re},"确定")):null),e().createElement("div",{className:u.A.rightBox},e().createElement(v.A,{content:"编辑返回数据类型"},e().createElement(O.A,{style:{boxSizing:"border-box"},onClick:et},"编辑")),e().createElement("div",{className:"".concat(u.A.codeIcon," ").concat(u.A.responseCodeIcon," ").concat(J?u.A.focus:""),onClick:We},x))),$?e().createElement(h.A,{key:$.id,mark:$,onMarkChange:Be,schema:$.resultSchema,error:ae,registerBlur:M}):null)),e().createElement(b,{data:V})))}},2451:function(R,g,t){t.d(g,{A:function(){return v}});var n=t(9155),e=t.n(n),r=t(1845),a=t(4038),m=t(83),h=t(8298),l=t(2810),s=t(4674),o=t(6545),d=t(4100),E=t(1295),O=function(){return O=Object.assign||function(f){for(var u,p=1,i=arguments.length;p<i;p++)for(var c in u=arguments[p])Object.prototype.hasOwnProperty.call(u,c)&&(f[c]=u[c]);return f},O.apply(this,arguments)},N=function(){return{path:"",title:"",method:"POST",id:(0,h.uR)(),type:"http",input:"",output:""}};function v(f){var u,p=f.sidebarContext,i=f.style,c=f.onSubmit,b=f.setRender,x=(0,n.useRef)(),A=(0,n.useState)(p.formModel||N()),_=A[0],w=A[1],k=(0,n.useState)([]),P=k[0],M=k[1],L=(0,n.useState)(!1),V=L[0],B=L[1],T=(0,n.useCallback)(function(){p.type="",p.activeId=void 0,p.isEdit=!1,b(p)},[]);(0,n.useEffect)(function(){_.path&&M([])},[_.path]);var U=(0,n.useMemo)(function(){return P.length&&P.includes("path")?"请填写完整的地址":""},[P]),H=(0,n.useMemo)(function(){return"file:///".concat(Math.random(),"_code")},[]);return(0,E.w)(function(){B(!0)},[_],{skipCount:p.isEdit?1:2}),e().createElement(d.A,{ref:x,style:i,title:_==null?void 0:_.title,extra:e().createElement(a.A,{type:"primary",size:"small",dotTip:V,onClick:function(){(function(){var K,J="";if(_.path?M([]):(M(["path"]),J="接口的请求路径不能为空"),(K=_.markList)===null||K===void 0?void 0:K.length){var W=_.markList;if(W.find(function(Z){return Z.id==="default"})){if(W.length>1){var q=W.find(function(Z){return!Z.predicate||!Z.predicate.key||Z.predicate.value===void 0||Z.predicate.value===""});q&&(J="数据标记组中【".concat(q.title,"】组的生效标识不存在或标识值为空"),(0,o.notice)(J))}}else J="数据标记组中【默认】组必须存在",(0,o.notice)(J)}else J="数据标记组必须存在",(0,o.notice)(J);return!J})()&&(p.formModel=_,c())}},"保 存"),onClose:T},e().createElement(m.A,{header:"基本信息",defaultFold:!1},e().createElement(o.NameInput,{defaultValue:_.title,onChange:function(K){return w(function(J){return O(O({},J),{title:K.target.value})})}}),e().createElement(o.AddressInput,{defaultValue:_.path,onChange:function(K){return w(function(J){return O(O({},J),{path:K.target.value})})},validateError:U}),e().createElement(o.MethodRadio,{defaultValue:_.method,onChange:function(K){return w(function(J){return O(O({},J),{method:K})})}})),e().createElement(m.A,{header:"当开始请求"},e().createElement(o.EditorWithFullScreen,{unique:"request",CDN:l.sV,path:H+"request.js",onChange:(0,s.sg)(function(K){w(function(J){return O(O({},J),{input:encodeURIComponent(K)})})},200),value:(0,h.ex)(_.input)})),e().createElement(m.A,{header:"当返回响应"},e().createElement(o.EditorWithFullScreen,{unique:"response",CDN:l.sV,path:H+"response.js",onChange:(0,s.sg)(function(K){w(function(J){return O(O({},J),{output:encodeURIComponent(K)})})},200),value:(0,h.ex)(_.output)})),e().createElement(m.A,{header:"其他信息"},e().createElement(o.DescriptionInput,{defaultValue:_.desc,onBlur:function(K){return w(function(J){return O(O({},J),{desc:K.target.value})})}}),e().createElement(o.DocInput,{onBlur:function(K){return w(function(J){return O(O({},J),{doc:K.target.value})})},defaultValue:_.doc})),e().createElement(m.A,{header:"接口调试",defaultFold:!1},e().createElement(r.A,{model:_,connect:p.connector.test,onChangeModel:w,registerBlur:(u=x.current)===null||u===void 0?void 0:u.registerBlur})))}},4714:function(R,g,t){var n=t(9155),e=t.n(n),r=t(4100),a=t(8821),m=t(9166),h=t(6545),l=t(4038),s=function(){return s=Object.assign||function(o){for(var d,E=1,O=arguments.length;E<O;E++)for(var N in d=arguments[E])Object.prototype.hasOwnProperty.call(d,N)&&(o[N]=d[N]);return o},s.apply(this,arguments)};g.A=function(o){var d=o.onClose,E=o.style,O=o.folder,N=o.onSubmit,v=(0,n.useState)(O.content.title),f=v[0],u=v[1],p=(0,n.useState)(!1),i=p[0],c=p[1],b=(0,n.useCallback)(function(){return N(s(s({},O),{content:s(s({},O.content),{title:f})}))},[f,O,N]);return e().createElement(r.A,{style:E,title:"新建文件夹",onClose:d,extra:e().createElement(l.A,{type:"primary",size:"small",dotTip:i,onClick:b},"保 存")},e().createElement(h.Collapse,{header:"基本信息",defaultFold:!1},e().createElement(a.A,{label:"名称",require:!0},e().createElement(m.A,{key:"interfaceName",defaultValue:O.content.title,onChange:function(x){u(x.target.value),c(!0)},placeholder:"文件夹的名称"}))))}},6357:function(R,g,t){t.d(g,{A:function(){return s}});var n=t(9155),e=t.n(n),r=t(2810),a=t(5985),m=t(83),h=t(4674),l=t(4100);function s(o){var d=o.onClose,E=o.style,O=o.data;return e().createElement(l.A,{style:E,title:"全局配置",onClose:d},e().createElement(m.A,{header:"当开始请求"},e().createElement(a.A,{width:"100%",height:400,eslint:{src:r.sV===null||r.sV===void 0?void 0:r.sV.eslint},path:"file:///_global_req_code.js",babel:{standalone:r.sV===null||r.sV===void 0?void 0:r.sV.babel},loaderConfig:{paths:r.sV===null||r.sV===void 0?void 0:r.sV.paths},language:"javascript",theme:"light",value:decodeURIComponent(O.config.paramsFn),onChange:(0,h.sg)(function(N){O.config.paramsFn!==N&&(O.config.paramsFn=N)},100),options:{fontSize:12}})),e().createElement(m.A,{header:"当返回响应"},e().createElement(a.A,{width:"100%",height:300,language:"javascript",theme:"light",eslint:{src:r.sV===null||r.sV===void 0?void 0:r.sV.eslint},path:"file:///_global_res_code.js",babel:{standalone:r.sV===null||r.sV===void 0?void 0:r.sV.babel},loaderConfig:{paths:r.sV===null||r.sV===void 0?void 0:r.sV.paths},value:decodeURIComponent(O.config.resultFn),onChange:(0,h.sg)(function(N){O.config.resultFn!==N&&(O.config.resultFn=N)},100),options:{fontSize:12}})),e().createElement(m.A,{header:"当接口响应错误时"},e().createElement(a.A,{width:"100%",height:400,language:"javascript",theme:"light",path:"file:///_global_error_code.js",eslint:{src:r.sV===null||r.sV===void 0?void 0:r.sV.eslint},babel:{standalone:r.sV===null||r.sV===void 0?void 0:r.sV.babel},loaderConfig:{paths:r.sV===null||r.sV===void 0?void 0:r.sV.paths},value:decodeURIComponent(O.config.errorResultFn||r.uG),onChange:(0,h.sg)(function(N){O.config.errorResultFn!==N&&(O.config.errorResultFn=N)},100),options:{fontSize:12}})))}},4785:function(R,g,t){var n=t(9155),e=t.n(n),r=t(4100),a=t(8821),m=t(9166),h=t(6545),l=t(2810),s=t(8298),o=t(4038),d=t(4674);t(8362);var E=function(){return E=Object.assign||function(p){for(var i,c=1,b=arguments.length;c<b;c++)for(var x in i=arguments[c])Object.prototype.hasOwnProperty.call(i,x)&&(p[x]=i[x]);return p},E.apply(this,arguments)},O=function(p,i,c,b){return new(c||(c=Promise))(function(x,A){function _(P){try{k(b.next(P))}catch(M){A(M)}}function w(P){try{k(b.throw(P))}catch(M){A(M)}}function k(P){var M;P.done?x(P.value):(M=P.value,M instanceof c?M:new c(function(L){L(M)})).then(_,w)}k((b=b.apply(p,[])).next())})},N=function(p,i){var c,b,x,A,_={label:0,sent:function(){if(1&x[0])throw x[1];return x[1]},trys:[],ops:[]};return A={next:w(0),throw:w(1),return:w(2)},typeof Symbol=="function"&&(A[Symbol.iterator]=function(){return this}),A;function w(k){return function(P){return function(M){if(c)throw new TypeError("Generator is already executing.");for(;A&&(A=0,M[0]&&(_=0)),_;)try{if(c=1,b&&(x=2&M[0]?b.return:M[0]?b.throw||((x=b.return)&&x.call(b),0):b.next)&&!(x=x.call(b,M[1])).done)return x;switch(b=0,x&&(M=[2&M[0],x.value]),M[0]){case 0:case 1:x=M;break;case 4:return _.label++,{value:M[1],done:!1};case 5:_.label++,b=M[1],M=[0];continue;case 7:M=_.ops.pop(),_.trys.pop();continue;default:if(!((x=(x=_.trys).length>0&&x[x.length-1])||M[0]!==6&&M[0]!==2)){_=0;continue}if(M[0]===3&&(!x||M[1]>x[0]&&M[1]<x[3])){_.label=M[1];break}if(M[0]===6&&_.label<x[1]){_.label=x[1],x=M;break}if(x&&_.label<x[2]){_.label=x[2],_.ops.push(M);break}x[2]&&_.ops.pop(),_.trys.pop();continue}M=i.call(p,_)}catch(L){M=[6,L],b=0}finally{c=x=0}if(5&M[0])throw M[1];return{value:M[0]?M[1]:void 0,done:!0}}([k,P])}}},v=`export default async function (params, { output }) {
  
}
`,f={title:"",output:encodeURIComponent(v)},u=function(p){var i=p.onClose,c=p.style,b=p.onSubmit,x=p.js,A=(0,n.useState)(E(E({},f),x.content)),_=A[0],w=A[1],k=(0,n.useState)(!1),P=k[0],M=k[1],L=(0,n.useCallback)((0,d.sg)(function(B){M(!0),w(function(T){return E(E({},T),{output:encodeURIComponent(B)})})},200),[]),V=(0,n.useMemo)(function(){return"file:///".concat(Math.random(),"_code")},[]);return e().createElement(r.A,{style:c,title:_.title,onClose:i,extra:e().createElement(o.A,{type:"primary",size:"small",dotTip:P,onClick:function(){return O(void 0,void 0,void 0,function(){var B,T;return N(this,function(U){if(_.title.length)try{T=[{id:"default",excludeKeys:[],outputKeys:[],outputSchema:B={type:"unknown"},predicate:{},resultSchema:B,title:"默认"}],b(E(E({},x),{content:E(E({},_),{markList:T})}))}catch(H){console.error("【返回数据】逻辑错误，请检查 => ",H),(0,h.notice)("【返回数据】逻辑错误，请检查 => ".concat(H.message))}else(0,h.notice)("请输入名称");return[2]})})}},"保 存")},e().createElement(h.Collapse,{header:"基本信息",defaultFold:!1},e().createElement(a.A,{label:"名称",require:!0},e().createElement(m.A,{key:"title",defaultValue:_.title,onChange:function(B){M(!0),w(function(T){return E(E({},T),{title:B.target.value.trim()})})},placeholder:"请输入名称"}))),e().createElement(h.Collapse,{header:"自定义",defaultFold:!1},e().createElement(h.EditorWithFullScreen,{unique:"output",CDN:l.sV,path:V+"output.js",onChange:L,value:(0,s.ex)(_.output)})))};g.A=u},4986:function(R,g,t){t.d(g,{A:function(){return d}});var n=t(9155),e=t.n(n),r=t(8997),a=t(8298),m=t(475),h=t(4674),l=t(9144),s=function(){return s=Object.assign||function(E){for(var O,N=1,v=arguments.length;N<v;N++)for(var f in O=arguments[N])Object.prototype.hasOwnProperty.call(O,f)&&(E[f]=O[f]);return E},s.apply(this,arguments)},o={name:"root",type:"root",children:[]};function d(E){var O,N=E.schema,v=E.value,f=E.onChange,u=(0,n.useRef)(v),p=(0,n.useState)((0,h.mg)(o)),i=p[0],c=p[1];u.current=i;var b=(0,n.useCallback)(function(){c(s({},u.current));var P=(0,m.Y)(u.current);f(P)},[N,f]),x=(0,n.useCallback)(function(P){["minLength","maxLength","minimum","maximum"].forEach(function(M){Reflect.deleteProperty(P,M)}),P.children=[]},[]),A=(0,n.useCallback)(function(P,M,L){P[M]!==L&&(P[M]=L,M==="type"&&(x(P),P.defaultValue="",L==="array"&&(P.children=[{name:"items",type:"string",id:(0,a.uR)()}])),function(V,B,T){Reflect.deleteProperty(V,"minError"),Reflect.deleteProperty(V,"maxError"),[["minLength","maxLength",!1],["maxLength","minLength",!0],["minItems","maxItems",!1],["maxItems","minItems",!0],["minimum","maximum",!1],["maximum","minimum",!0]].forEach(function(U){var H=U[0],K=U[1],J=U[2];(function(W,q,Z,X,ee){B===Z&&W[X]!==void 0&&(ee?q<W[X]:q>W[X])&&(B.startsWith("min")?W.minError=!0:W.maxError=!0)})(V,T,H,K,J)})}(P,M,L),b())},[]);(0,n.useEffect)(function(){c(N?(0,m.O)(N):(0,h.mg)(o))},[N]);var _=function(P,M){var L=(0,a.uR)();if(!P||P.type!=="object"&&P.type!=="array")M.children=M.children||[],V="name".concat(M.children.length+1),M.children.push({id:L,type:"string",name:V});else{P.children=P.children||[];var V="name".concat(P.children.length+1);P.type==="array"&&(V="".concat(P.children.length)),P.children.push({id:L,name:V,type:"string"})}b()},w=(0,n.useCallback)(function(P,M){return P.children.map(function(L){return k(L,P,M)})},[]),k=(0,n.useCallback)(function(P,M,L){var V,B;if(L===void 0&&(L=-1),!P)return null;var T,U=P.type;if(U==="root")return e().createElement("div",{className:l.A.list},w(P,L+1));P.children&&(T=w(P,L+1));var H=M.type==="array",K=L===0&&((B=(V=M.children)===null||V===void 0?void 0:V[Math.min((0,h.Kl)(M.children,function(W){var q=W.type;return q==="string"||q==="number"||q==="boolean"}),M.children.length-1)])===null||B===void 0?void 0:B.name)===P.name||U==="object"||H&&P.name==="items"&&(U==="object"||U==="array"),J=!(H&&P.name==="items");return e().createElement("div",{key:P.id,className:l.A.ct},e().createElement("div",{className:l.A.item},e().createElement("input",{style:{width:331-20*L},type:"text",value:H&&P.name!=="items"?"[".concat(P.name,"]"):P.name,disabled:H,onChange:function(W){return A(P,"name",W.target.value)}}),e().createElement("select",{className:l.A.type,value:P.type,onChange:function(W){return A(P,"type",W.target.value)}},e().createElement("option",{label:"字符",value:"string"}),e().createElement("option",{label:"数字",value:"number"}),e().createElement("option",{label:"布尔",value:"boolean"}),e().createElement("option",{label:"对象",value:"object"}),e().createElement("option",{label:"列表",value:"array"})),e().createElement("div",{className:"".concat(l.A.operate," ").concat(l.A.flex)},J?e().createElement("span",{className:"".concat(l.A.iconRemove),onClick:function(){return function(W,q){q.children=q.children.filter(function(Z){return Z.name!==W.name}),q.type==="array"&&q.children.forEach(function(Z,X){Z.name="".concat(X),Z.defaultValue=q.children[X].defaultValue}),b()}(P,M)}},r.TF):null,K?e().createElement("span",{className:l.A.iconAdder,onClick:function(){return _(P,M)}},"+"):null)),T)},[f]);return e().createElement("div",{className:l.A.editContainer},((O=i==null?void 0:i.children)===null||O===void 0?void 0:O.length)===0?e().createElement("div",{className:l.A.adder},e().createElement("span",{onClick:function(){return _(u.current,u.current)}},"+")):e().createElement(e().Fragment,null,e().createElement("div",{className:l.A.header},e().createElement("p",{className:l.A.fieldName},"字段名"),e().createElement("p",{className:l.A.type},"类型"),e().createElement("p",{className:l.A.operate},"操作")),e().createElement("div",{className:l.A.content},k(u.current,u.current))))}},475:function(R,g,t){t.d(g,{O:function(){return e},Y:function(){return a}});var n=t(8298);function e(m){var h={name:"root",type:"root",children:[]};return function l(s,o,d){var E,O=d;if(o&&(O={id:(0,n.uR)(),name:o,type:s.type,children:[]},d.children.push(O)),s.type==="array"){var N={id:(0,n.uR)(),name:"items",type:((E=s.items)===null||E===void 0?void 0:E.type)||"object",children:[]};O.children.push(N),function(v,f){var u;Object.keys(((u=v.items)===null||u===void 0?void 0:u.properties)||{}).map(function(p){l(v.items.properties[p],p,f)})}(s,N)}else s.type==="object"&&function(v,f){Object.keys(v.properties||{}).map(function(u){return l(v.properties[u],u,f)})}(s,O)}(m,"",h),h}function r(m,h){["type","defaultValue","minItems","maxItems","minLength","maxLength","minimum","maximum"].forEach(function(l){m[l]!==void 0&&(h[l==="defaultValue"?"default":l]=m[l])})}function a(m){if(m){var h={},l=m.type;if(l==="string"||l==="number"||l==="boolean"){var s={};return r(m,s),s}return m.children&&m.children.forEach(function(o){h.type=l,l==="object"||l==="root"?(h.type="object",h.properties=h.properties||{},h.properties[o.name]=a(o)):(r(m,h),h[o.name]=a(o))}),h}}},7074:function(R,g,t){t.d(g,{A:function(){return h}});var n=t(9155),e=t.n(n),r=t(4038),a=t(2092),m=function(){return m=Object.assign||function(l){for(var s,o=1,d=arguments.length;o<d;o++)for(var E in s=arguments[o])Object.prototype.hasOwnProperty.call(s,E)&&(l[E]=s[E]);return l},m.apply(this,arguments)};function h(l){var s,o=l.onDebugClick,d=l.params,E=l.showTip,O=l.onCloseTip,N=l.onConfirmTip,v=l.onToggleSchemaPreview,f=l.showPreviewSchema,u=(0,n.useCallback)(function(i){return i.children.map(function(c){return p(c,i)})},[]),p=(0,n.useCallback)(function(i,c){var b,x,A,_;if(!i||i.type==="root"&&!i.children)return null;i.type==="root"&&(i.name=""),i.children&&(_=u(i));var w=c.type==="array",k=i.type==="object",P=i.type==="root",M=i.type==="array",L=k||P||M;return e().createElement("div",{className:a.A.ct,key:i.id||"root"},e().createElement("div",{className:"".concat(a.A.item," ").concat(P?a.A.rootItem:"")},e().createElement("div",{style:{padding:"0 10px 0 2px"}},w?"[".concat(i.name,"]"):i.name,e().createElement("span",{className:a.A.typeName},"(",function(V){switch(V){case"number":return"数字";case"string":return"字符";case"boolean":return"布尔";case"object":case"root":return"对象";case"array":return"列表";case"any":return"文件"}}(i.type),")")),L?null:e().createElement("input",{key:i.type==="any"?(b=i.defaultValue)===null||b===void 0?void 0:b.name:i.defaultValue,className:a.A.column,type:"text",disabled:!0,value:i.type==="any"?(x=i.defaultValue)===null||x===void 0?void 0:x.name:i.defaultValue,title:i.type==="any"?(A=i.defaultValue)===null||A===void 0?void 0:A.name:i.defaultValue})),_)},[]);return e().createElement("div",{className:a.A.debug},e().createElement("div",{className:a.A.content},!((s=d==null?void 0:d.children)===null||s===void 0)&&s.length?p(m({type:"root"},d),m({type:"root"},d)):null),e().createElement("div",{className:a.A.connectionButton},e().createElement(r.A,{onClick:o,type:"primary",style:{marginTop:12}},"连接测试"),E?e().createElement("div",{className:a.A.tipContainer},e().createElement("div",null,"响应值类型跟已有类型存在冲突，确定要替换为当前类型吗？",e().createElement("span",{className:a.A.preview,onClick:v},f?"关闭类型预览":"预览最新类型")),e().createElement("div",{className:a.A.buttonGroup},e().createElement(r.A,{onClick:O},"取消"),e().createElement(r.A,{onClick:N,type:"primary",style:{marginLeft:12}},"确认"))):null))}},2374:function(R,g,t){t.d(g,{A:function(){return s}});var n=t(9155),e=t.n(n),r=t(8997),a=t(8298),m=t(4674),h=t(4608),l=function(){return l=Object.assign||function(o){for(var d,E=1,O=arguments.length;E<O;E++)for(var N in d=arguments[E])Object.prototype.hasOwnProperty.call(d,N)&&(o[N]=d[N]);return o},l.apply(this,arguments)};function s(o){var d,E,O=o.value,N=o.onChange,v=(0,n.useRef)(O);v.current=O;var f=function(){return N(l({},v.current))},u=function(c,b,x){c[b]!==x&&(c[b]=x,b==="type"&&(c.defaultValue=x==="boolean"||"",c.children=[]),f())},p=function(c,b){return c.children.map(function(x){return i(x,c,b)})},i=function(c,b,x){var A,_,w;if(x===void 0&&(x=-1),!c)return null;if(c.type==="root")return e().createElement("div",{className:h.A.list},p(c,x+1));c.children&&(w=p(c,x+1));var k=b.type==="array",P=x===0&&((_=(A=b.children)===null||A===void 0?void 0:A[Math.min((0,m.Kl)(b.children,function(M){var L=M.type;return L==="string"||L==="number"||L==="any"||L==="boolean"}),b.children.length-1)])===null||_===void 0?void 0:_.name)===c.name||c.type==="object"||c.type==="array";return e().createElement("div",{key:c.id,className:h.A.ct},e().createElement("div",{className:h.A.item},e().createElement("input",{style:{width:270-20*x},type:"text",value:k?"[".concat(c.name,"]"):c.name,disabled:k,onChange:function(M){return u(c,"name",M.target.value)}}),e().createElement("select",{className:h.A.column2,value:c.type,style:{color:"#8d7a34",cursor:"pointer"},onChange:function(M){return u(c,"type",M.target.value)}},e().createElement("option",{label:"字符",value:"string"}),e().createElement("option",{label:"数字",value:"number"}),e().createElement("option",{label:"布尔",value:"boolean"}),e().createElement("option",{label:"对象",value:"object"}),e().createElement("option",{label:"列表",value:"array"}),e().createElement("option",{label:"文件",value:"any"})),c.type==="any"?c.defaultValue&&Object.keys(c.defaultValue).length?e().createElement("span",{className:h.A.uploadFileName},c.defaultValue.name,e().createElement("span",{className:h.A.clear,onClick:function(){return u(c,"defaultValue",void 0)}},"X")):e().createElement("input",{className:h.A.uploadFile,type:"file",onChange:function(M){var L;return u(c,"defaultValue",(L=M.target.files)===null||L===void 0?void 0:L[0])}}):c.type==="boolean"?e().createElement("select",{className:h.A.column3,value:Number(c.defaultValue),style:{color:"#8d7a34",cursor:"pointer"},onChange:function(M){return u(c,"defaultValue",!!Number(M.target.value))}},e().createElement("option",{label:"true",value:1}),e().createElement("option",{label:"false",value:0})):e().createElement("input",{className:h.A.column3,type:"text",disabled:c.type==="object"||c.type==="array",value:c.defaultValue,onChange:function(M){return u(c,"defaultValue",M.target.value)}}),e().createElement("div",{className:"".concat(h.A.column4," ").concat(h.A.flex)},e().createElement("span",{className:"".concat(h.A.iconRemove),onClick:function(){return function(M,L){L.children=L.children.filter(function(V){return V.name!==M.name}),L.type==="array"&&L.children.forEach(function(V,B){V.name="".concat(B),V.defaultValue=L.children[B].defaultValue}),f()}(c,b)}},r.TF),P?e().createElement("span",{className:h.A.iconAdder,onClick:function(){return function(M,L){var V=(0,a.uR)();if(!M||M.type!=="object"&&M.type!=="array")L.children=L.children||[],B="name".concat(L.children.length+1),L.children.push({id:V,type:"string",name:B});else{M.children=M.children||[];var B="name".concat(M.children.length+1);M.type==="array"&&(B="".concat(M.children.length)),M.children.push({id:V,name:B,type:"string"})}f()}(c,b)}},"+"):null)),w)};return e().createElement(e().Fragment,null,e().createElement("div",null,((d=O==null?void 0:O.children)===null||d===void 0?void 0:d.length)===0?null:e().createElement(e().Fragment,null,e().createElement("div",{className:h.A.header},e().createElement("p",{className:h.A.column1},"字段名"),e().createElement("p",{className:h.A.column2},"类型"),e().createElement("p",{className:h.A.column3},"调试值"),e().createElement("p",{className:h.A.column4},"操作")),e().createElement("div",{className:h.A.content},i(O,O))),!((E=O==null?void 0:O.children)===null||E===void 0)&&E.every(function(c){var b=c.type;return b==="object"||b==="array"})?e().createElement("span",{className:h.A.iconRootAdder,onClick:function(){return v.current.children.push({type:"string",id:(0,a.uR)(),name:"name".concat(v.current.children.length+1)}),void f()}},"+"):null))}},8827:function(R,g,t){t.d(g,{A:function(){return o}});var n=t(9155),e=t.n(n),r=t(4674),a=t(2810),m=t(6545),h=t(367),l=function(){return l=Object.assign||function(E){for(var O,N=1,v=arguments.length;N<v;N++)for(var f in O=arguments[N])Object.prototype.hasOwnProperty.call(O,f)&&(E[f]=O[f]);return E},l.apply(this,arguments)},s=function(E,O,N){if(N||arguments.length===2)for(var v,f=0,u=O.length;f<u;f++)!v&&f in O||(v||(v=Array.prototype.slice.call(O,0,f)),v[f]=O[f]);return E.concat(v||Array.prototype.slice.call(O))};function o(E){var O=E.mark,N=E.onMarkChange,v=E.schema,f=E.error,u=E.noMark,p=E.registerBlur,i=(0,n.useRef)(),c=(0,n.useRef)(""),b=(0,n.useState)(),x=b[0],A=b[1],_=(0,n.useState)(a.aS),w=_[0],k=_[1],P=(0,n.useCallback)(function(T){for(var U,H,K,J,W,q=a.zV[T]||[],Z=((U=c.current)===null||U===void 0?void 0:U.split("."))||[],X=v;Z.length&&X;){var ee=Z.shift();X=((H=X.properties)===null||H===void 0?void 0:H[ee])||((J=(K=X.items)===null||K===void 0?void 0:K.properties)===null||J===void 0?void 0:J[ee])}if(X&&X.type&&!Z.length)if(q.includes("any")||q.includes(X.type)&&!Z.length)if(T==="predicate"){var pe={key:c.current,value:1,operator:"="};X.type==="boolean"?pe.value=!0:X.type==="string"&&(pe.value="success"),N(l(l({},O),{predicate:pe}))}else{var re=O.outputKeys||[],ae=O.excludeKeys||[];ae.some(function(ie){return ie===c.current})||(re=s(s([],re.filter(function(ie){return!(ie.includes(c.current)||c.current.includes(ie))}),!0),[c.current],!1).filter(function(ie){return ie!==""})),ae=ae.filter(function(ie){return ie!==c.current}),N(l(l({},O),{excludeKeys:ae,outputKeys:re}))}else(0,m.notice)("【".concat(a.Cb[T],"】所标识数据类型必须为 ").concat((W=a.zV[T])===null||W===void 0?void 0:W.map(function(ie){return d(ie)}).join("、")));else(0,m.notice)("【".concat(a.Cb[T],"】所标识数据类型不存在"))},[O,v]),M=(0,n.useCallback)(function(T,U){var H,K,J,W,q=T.currentTarget,Z=i.current.getBoundingClientRect(),X=q.getBoundingClientRect();c.current=U;for(var ee=a.aS,pe=((H=c.current)===null||H===void 0?void 0:H.split("."))||[],re=v;pe.length&&re;){var ae=pe.shift();if(((re=((K=re.properties)===null||K===void 0?void 0:K[ae])||((W=(J=re.items)===null||J===void 0?void 0:J.properties)===null||W===void 0?void 0:W[ae]))==null?void 0:re.type)==="array"||!pe.length&&(re==null?void 0:re.type)==="object"){ee=a.aS.filter(function(D){return D.key!=="predicate"});break}}var ie=X.y-Z.y+q.offsetHeight,fe=28*ee.length+10;(ie+fe>Z.height||X.top+fe>document.body.clientHeight)&&(ie-=fe+q.offsetHeight),k(ee),A({display:"block",left:X.x-Z.x,top:ie}),p==null||p("return-schema",function(){return A(void 0)})},[p]),L=(0,n.useCallback)(function(T,U){var H;if(((H=O.predicate)===null||H===void 0?void 0:H.key)!==U){var K=O.outputKeys.filter(function(W){return W!==U}).filter(function(W){return W!==""}),J=O.excludeKeys;O.outputKeys.some(function(W){return W===U})||(J=s(s([],J.filter(function(W){return!(W.includes(U)||U.includes(W))}),!0),[U],!1)),N(l(l({},O),{outputKeys:K,excludeKeys:J}))}else N(l(l({},O),{predicate:{}}))},[O]),V=(0,n.useCallback)(function(T){A(void 0),p("return-schema",function(){}),T.stopPropagation()},[p]);if(f){var B=typeof f=="string"?f:(f==null?void 0:f.message)||"接口错误：无具体错误信息";return e().createElement("div",{className:h.A.errorInfo},e().createElement("span",null,B),e().createElement("div",null,function(T){var U,H;return!((U=T.includes)===null||U===void 0)&&U.call(T,"Network Error")?"请检查网络是否正常、当前请求是否存在跨域":!((H=T.includes)===null||H===void 0)&&H.call(T,"404")?"请检查请求地址是否拼写错误":""}(B)))}return v?e().createElement("div",{className:h.A.returnParams,style:u?{marginTop:0}:void 0,ref:i,onClick:V},e().createElement("div",null,function T(U){var H,K,J,W,q,Z,X,ee=U.val,pe=U.key,re=U.xpath,ae=U.root;ee.type==="array"?X=function(S,C){return S?T({val:S,xpath:C}):null}(ee.items,re):ee.type==="object"&&(X=function(S,C){return S?e().createElement(e().Fragment,null,Object.keys(S).map(function(I){var z=C!==void 0?C?"".concat(C,".").concat(I):I:void 0;return T({val:S[I],xpath:z,key:I})})):null}(ee.properties,re));var ie=!(0,r.Im)(O==null?void 0:O.outputKeys),fe=!ie&&ae||pe&&ie&&((H=O==null?void 0:O.outputKeys)===null||H===void 0?void 0:H.includes(re)),D=((K=O==null?void 0:O.predicate)===null||K===void 0?void 0:K.key)===re,F=re!==void 0&&!(O!=null&&O.excludeKeys.some(function(S){return re.startsWith(S)&&S!==re})),j=pe!==void 0&&(fe&&!ae||((O==null?void 0:O.outputKeys.some(function(S){return re==null?void 0:re.startsWith(S)}))||!ie)&&!(O!=null&&O.excludeKeys.some(function(S){return re.startsWith(S)})))||D,y=function(S){return N(l(l({},O),{predicate:l(l({},O.predicate),{value:S})}))};return e().createElement("div",{key:pe,className:"".concat(h.A.item," ").concat(ae?h.A.rootItem:""," ").concat(fe||D?h.A.markAsReturn:"")},fe||D?e().createElement("div",{className:h.A.marked,"data-content":D?fe?"生效标识、返回内容":"生效标识":"返回内容"}):null,O!=null&&O.excludeKeys.includes(re)&&pe?e().createElement("div",{className:h.A.exclude}):null,e().createElement("div",{className:h.A.keyName},pe,e().createElement("span",{className:h.A.typeName},"(",d(ee.type),")"),F&&pe&&!u?e().createElement("button",{onClick:function(S){M(S,re),S.stopPropagation()}},"标记"):null,D&&!u?e().createElement(e().Fragment,null,e().createElement("span",{style:{marginLeft:"10px"}},"当值"),e().createElement("select",{value:(J=O==null?void 0:O.predicate)===null||J===void 0?void 0:J.operator,className:h.A.markValueSelect,onChange:function(S){return N(l(l({},O),{predicate:l(l({},O.predicate),{operator:S.target.value})}))}},e().createElement("option",{value:"="},"等于"),e().createElement("option",{value:"!="},"不等于")),ee.type==="string"?e().createElement("input",{value:(W=O==null?void 0:O.predicate)===null||W===void 0?void 0:W.value,className:h.A.markValueInput,type:"text",onChange:function(S){return y(S.target.value)}}):null,ee.type==="number"?e().createElement("input",{value:Number((q=O==null?void 0:O.predicate)===null||q===void 0?void 0:q.value),className:h.A.markValueInput,type:"number",onChange:function(S){return y(Number(S.target.value))}}):null,ee.type==="boolean"?e().createElement("select",{value:Number((Z=O==null?void 0:O.predicate)===null||Z===void 0?void 0:Z.value),className:h.A.markValueSelect,onChange:function(S){return y(!!Number(S.target.value))}},e().createElement("option",{value:1},"true"),e().createElement("option",{value:0},"false")):null,e().createElement("span",{style:{marginLeft:0}},"时生效")):null,j&&!u?e().createElement("button",{onClick:function(S){L(S,re),S.stopPropagation()}},"取消"):null),X)}({val:v,xpath:"",root:!0})),e().createElement("div",{className:h.A.popMenu,style:x},w.map(function(T){return e().createElement("div",{className:h.A.menuItem,key:T.key,onClick:function(){return P(T.key)},"data-mybricks-tip":T.description},T.title)}))):e().createElement("div",{className:h.A.empty},"类型无效，请点击「连接测试」获取类型或手动编辑类型")}function d(E){switch(E){case"number":return"数字";case"string":return"字符";case"boolean":return"布尔";case"object":return"对象";case"array":return"列表"}}},6609:function(R,g,t){t.d(g,{A:function(){return o}});var n=t(9155),e=t.n(n),r=t(8997),a=t(4093),m=t(2810),h=t(2461),l=function(d,E,O,N){return new(O||(O=Promise))(function(v,f){function u(c){try{i(N.next(c))}catch(b){f(b)}}function p(c){try{i(N.throw(c))}catch(b){f(b)}}function i(c){var b;c.done?v(c.value):(b=c.value,b instanceof O?b:new O(function(x){x(b)})).then(u,p)}i((N=N.apply(d,[])).next())})},s=function(d,E){var O,N,v,f,u={label:0,sent:function(){if(1&v[0])throw v[1];return v[1]},trys:[],ops:[]};return f={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function p(i){return function(c){return function(b){if(O)throw new TypeError("Generator is already executing.");for(;f&&(f=0,b[0]&&(u=0)),u;)try{if(O=1,N&&(v=2&b[0]?N.return:b[0]?N.throw||((v=N.return)&&v.call(N),0):N.next)&&!(v=v.call(N,b[1])).done)return v;switch(N=0,v&&(b=[2&b[0],v.value]),b[0]){case 0:case 1:v=b;break;case 4:return u.label++,{value:b[1],done:!1};case 5:u.label++,N=b[1],b=[0];continue;case 7:b=u.ops.pop(),u.trys.pop();continue;default:if(!((v=(v=u.trys).length>0&&v[v.length-1])||b[0]!==6&&b[0]!==2)){u=0;continue}if(b[0]===3&&(!v||b[1]>v[0]&&b[1]<v[3])){u.label=b[1];break}if(b[0]===6&&u.label<v[1]){u.label=v[1],v=b;break}if(v&&u.label<v[2]){u.label=v[2],u.ops.push(b);break}v[2]&&u.ops.pop(),u.trys.pop();continue}b=E.call(d,u)}catch(x){b=[6,x],N=0}finally{O=v=0}if(5&b[0])throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}([i,c])}}};function o(d){var E,O=this,N=d.ctx,v=d.setRender,f=d.blurMap;return e().createElement("div",{className:h.A.toolbar},e().createElement("div",{className:h.A.search},e().createElement("input",{type:"text",placeholder:"请输入名称搜索服务接口",onChange:function(u){return N.search(u.target.value)}})),(E=e().createElement("div",{className:h.A.ct},N.addActions.map(function(u){var p=u.type,i=u.title;return p===m.dy?e().createElement("div",{className:h.A["separator-divider"]}):e().createElement("div",{className:h.A.item,onClick:function(){return function(c){return c===void 0&&(c="http"),l(O,void 0,void 0,function(){return s(this,function(b){return N.type=c,N.activeId=void 0,N.isEdit=!1,N.parent=null,N.formModel={type:c},v(N),c===m.Hx.HTTP?N.addDefaultService():c===m.Hx.FOLDER?N.addServiceFolder():c===m.Hx.IMPORT?N.importService():c===m.Hx.JS&&N.addDefaultJs(),[2]})})}(p)},key:p},i)})),e().createElement(a.A,{dropDownStyle:N.type?{right:0}:void 0,onBlur:function(u){return f.toolbar=u},overlay:E},e().createElement("div",{className:h.A.icon,"data-mybricks-tip":"创建连接器",onClick:function(){return Object.keys(f).filter(function(u){return u!=="toolbar"}).forEach(function(u){return f[u]()})}},r.tY))))}},7258:function(R,g,t){var n=t(9155),e=t.n(n),r=t(8298),a=t(2810),m=t(4674),h=t(9371),l=t(2451),s=t(6609),o=t(8997),d=t(6357),E=t(9926),O=t(9456),N=t(9469),v=t(4714),f=t(6545),u=t(4093),p=t(4785),i=t(1076),c=t(8978);function b(P){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},b(P)}var x=function(){return x=Object.assign||function(P){for(var M,L=1,V=arguments.length;L<V;L++)for(var B in M=arguments[L])Object.prototype.hasOwnProperty.call(M,B)&&(P[B]=M[B]);return P},x.apply(this,arguments)},A=function(P,M,L,V){return new(L||(L=Promise))(function(B,T){function U(J){try{K(V.next(J))}catch(W){T(W)}}function H(J){try{K(V.throw(J))}catch(W){T(W)}}function K(J){var W;J.done?B(J.value):(W=J.value,W instanceof L?W:new L(function(q){q(W)})).then(U,H)}K((V=V.apply(P,[])).next())})},_=function(P,M){var L,V,B,T,U={label:0,sent:function(){if(1&B[0])throw B[1];return B[1]},trys:[],ops:[]};return T={next:H(0),throw:H(1),return:H(2)},typeof Symbol=="function"&&(T[Symbol.iterator]=function(){return this}),T;function H(K){return function(J){return function(W){if(L)throw new TypeError("Generator is already executing.");for(;T&&(T=0,W[0]&&(U=0)),U;)try{if(L=1,V&&(B=2&W[0]?V.return:W[0]?V.throw||((B=V.return)&&B.call(V),0):V.next)&&!(B=B.call(V,W[1])).done)return B;switch(V=0,B&&(W=[2&W[0],B.value]),W[0]){case 0:case 1:B=W;break;case 4:return U.label++,{value:W[1],done:!1};case 5:U.label++,V=W[1],W=[0];continue;case 7:W=U.ops.pop(),U.trys.pop();continue;default:if(!((B=(B=U.trys).length>0&&B[B.length-1])||W[0]!==6&&W[0]!==2)){U=0;continue}if(W[0]===3&&(!B||W[1]>B[0]&&W[1]<B[3])){U.label=W[1];break}if(W[0]===6&&U.label<B[1]){U.label=B[1],B=W;break}if(B&&U.label<B[2]){U.label=B[2],U.ops.push(W);break}B[2]&&U.ops.pop(),U.trys.pop();continue}W=M.call(P,U)}catch(q){W=[6,q],V=0}finally{L=B=0}if(5&W[0])throw W[1];return{value:W[0]?W[1]:void 0,done:!0}}([K,J])}}},w=function(P,M,L){if(L||arguments.length===2)for(var V,B=0,T=M.length;B<T;B++)!V&&B in M||(V||(V=Array.prototype.slice.call(M,0,B)),V[B]=M[B]);return P.concat(V||Array.prototype.slice.call(M))},k=[{key:"content.title",name:"标题"},{key:"content.path",name:"路径"},{key:"split0",split:!0},{key:"schemaMatchComs",name:"组件",schemaMatchComs:!0}];g.A=function(P){var M,L,V=P.addActions,B=P.connector,T=P.data,U=P.serviceListUrl,H=P.initialValue,K=H===void 0?{}:H,J=P.visibility,W=P.component,q=(0,n.useRef)(null),Z=(0,n.useRef)({}),X=(0,n.useState)(""),ee=X[0],pe=X[1],re=(0,n.useState)([]),ae=re[0],ie=re[1],fe=(0,n.useState)({activeId:"",type:"",isEdit:!1,formModel:{path:"",title:"",id:"",type:"",input:"",output:""},addActions:[].concat(V?V.some(function(Q){return Q.type==="default"})?V:[{type:a.Hx.HTTP,title:"服务接口"},{type:a.Hx.JS,title:"自定义"},{type:a.dy}].concat(V):[{type:a.Hx.HTTP,title:"服务接口"},{type:a.Hx.JS,title:"自定义"},{type:a.dy}]).concat([{type:a.Hx.FOLDER,title:"文件夹"},{type:a.Hx.IMPORT,title:"导入"}]),connector:{add:function(Q){return B.add(x({},Q))},remove:function(Q){return B.remove(Q)},getAllByType:function(Q){var ne;return((ne=B.getAllByType)===null||ne===void 0?void 0:ne.call(B,Q))||[]},update:function(Q){return B.update(x({},Q))},test:function(){for(var Q=[],ne=0;ne<arguments.length;ne++)Q[ne]=arguments[ne];return B.test.apply(B,Q)},getById:function(){for(var Q=[],ne=0;ne<arguments.length;ne++)Q[ne]=arguments[ne];return B.getById.apply(B,Q)}},component:W,search:pe}),D=fe[0],F=fe[1],j=function(Q,ne){return A(void 0,void 0,void 0,function(){return _(this,function(oe){return[2,new Promise(function(ge){var Ce=ne||D.formModel,Re=Ce.id,Pe=Re===void 0?(0,r.uR)():Re,Ue=Ce.script,Je=function(Ae,De){var ye={};for(var we in Ae)Object.prototype.hasOwnProperty.call(Ae,we)&&De.indexOf(we)<0&&(ye[we]=Ae[we]);if(Ae!=null&&typeof Object.getOwnPropertySymbols=="function"){var je=0;for(we=Object.getOwnPropertySymbols(Ae);je<we.length;je++)De.indexOf(we[je])<0&&Object.prototype.propertyIsEnumerable.call(Ae,we[je])&&(ye[we[je]]=Ae[we[je]])}return ye}(Ce,["id","script"]);if(Q==="create"){var Fe={id:Pe,type:D.formModel.type||D.type||a.Hx.HTTP,content:x({input:encodeURIComponent(a.B_),output:encodeURIComponent(a.Kn),inputSchema:{type:"object"}},Je),script:Ue,createTime:Date.now(),updateTime:Date.now()};if(D.parent){var We=(0,r.Xn)(T.connectors,D.parent),ue=We.index;(me=We.parent)&&me[ue].children.push(Fe)}else T.connectors.push(Fe);D.connector.add({id:Pe,type:D.formModel.type||D.type||a.Hx.HTTP,title:Je.title,connectorName:a.Yp,script:void 0,globalMock:T.config.globalMock,inputSchema:Je.inputSchema,markList:Je.markList||[]})}else{var me,be=(0,r.Xn)(T.connectors,{id:Pe});if(ue=be.index,me=be.parent){Fe=x(x({},me[ue]),{updateTime:Date.now(),content:x({},Je)}),me==null||me.splice(ue,1,Fe);try{D.connector.update({id:Pe,title:Je.title||Fe.content.title,type:Fe.type,connectorName:a.Yp,script:void 0,globalMock:T.config.globalMock,inputSchema:Fe.content.inputSchema,markList:Fe.content.markList||[]})}catch{}}}ge("")})]})})},y=(0,n.useCallback)(function(Q){return new Promise(function(ne){var oe,ge=(0,r.Xn)(T.connectors,Q),Ce=ge.index,Re=ge.parent;Re==null||Re.splice(Ce,1),(0,r.Y6)((oe=Q.children)!==null&&oe!==void 0?oe:[Q]).forEach(function(Pe){try{D.connector.remove(Pe.id)}catch{}}),ne("")})},[T]),S=(0,n.useRef)(),C=(0,n.useCallback)(function(Q){F(function(ne){return x(x(x({},ne),{formModel:x({},ne.formModel)}),Q)})},[]),I=(0,n.useCallback)(function(Q){var ne;if(D.isEdit&&Q.id===D.activeId)C({type:"",activeId:void 0,isEdit:!1});else{var oe={isEdit:!0,activeId:Q.id};if(Q.type===a.Hx.TG)oe.type=a.Hx.TG,oe.formModel=x({id:Q.id,type:Q.type},Q.content);else if(Q.type===a.Hx.FOLDER)oe.type=a.Hx.FOLDER,oe.formModel=Q;else if(Q.type===a.Hx.JS)oe.type=a.Hx.JS,oe.formModel=Q;else{var ge=(ne=D.addActions.find(function(Ce){return Ce.type===Q.type}))===null||ne===void 0?void 0:ne.noUseInnerEdit;oe.type=ge?Q.type:a.Hx.HTTP,oe.formModel=x(x({},JSON.parse(JSON.stringify(Q.content))),{type:Q.type,id:Q.id,input:Q.content.input||a.B_,output:Q.content.output||a.Kn})}C(oe)}},[D]),z=(0,n.useCallback)(function(Q,ne){return A(void 0,void 0,void 0,function(){var oe;return _(this,function(ge){switch(ge.label){case 0:return Q.type!==a.Hx.HTTP?[3,2]:(D.formModel=(0,m.mg)(Q.content),D.parent=ne,D.formModel.title+=" 复制",D.formModel.id=(0,r.uR)(),C(D),[4,j("create")]);case 1:return ge.sent(),[3,3];case 2:(oe=(0,m.mg)(Q)).id=(0,r.uR)(),oe.content.title+=" 复制",Q.type===a.Hx.JS&&Ve(oe),ge.label=3;case 3:return[2]}})})},[]),G=(0,n.useCallback)(function(Q){return A(void 0,void 0,void 0,function(){var ne;return _(this,function(oe){return Q.type,a.Hx.HTTP,(ne=(0,m.mg)(Q)).id=(0,r.uR)(),(0,N.D)(JSON.stringify({formModel:ne})),(0,f.notice)("导出成功",{type:"success",targetContainer:document.body}),[2]})})},[]),Y=(0,n.useCallback)(function(Q){return A(void 0,void 0,void 0,function(){return _(this,function(ne){switch(ne.label){case 0:return confirm(Q.type===a.Hx.FOLDER?"确认删除文件夹 ".concat(Q.content.title," 吗，其包含接口也将被删除"):"确认删除 ".concat(Q.content.title," 吗"))?[4,y(Q)]:[3,2];case 1:ne.sent(),D.type="",C(D),ne.label=2;case 2:return[2]}})})},[D,T]);D.addDefaultService=(0,n.useCallback)(function(){return A(void 0,void 0,void 0,function(){var Q;return _(this,function(ne){return D.isEdit=!1,D.type=a.Hx.HTTP,D.formModel={id:(0,r.uR)(),title:"",type:((Q=D.formModel)===null||Q===void 0?void 0:Q.type)||a.Hx.HTTP,path:"",desc:"",method:"GET",input:encodeURIComponent(a.B_),output:encodeURIComponent(a.Kn)},C(D),[2]})})},[D]),D.addServiceFolder=(0,n.useCallback)(function(){return A(void 0,void 0,void 0,function(){return _(this,function(Q){return D.isEdit=!1,D.type=a.Hx.FOLDER,D.formModel={id:(0,r.uR)(),content:{title:"文件夹"},type:a.Hx.FOLDER,children:[]},C(D),[2]})})},[D]),D.importService=(0,n.useCallback)(function(){return A(void 0,void 0,void 0,function(){var Q,ne,oe,ge,Ce,Re;return _(this,function(Pe){if(Q=prompt("将导出的接口数据复制到输入框"),ne=!1,Q==null||Q=="")return[2];try{(oe=JSON.parse(Q)).formModel&&(ne=!0,oe.formModel=(0,r.qO)(oe.formModel),D.parent?(ge=(0,r.Xn)(T.connectors,D.parent),Ce=ge.index,(Re=ge.parent)&&Re[Ce].children.push(oe.formModel)):T.connectors.push(oe.formModel),(0,r.Y6)([oe.formModel]).forEach(function(Ue){D.connector.add({id:Ue.id,type:Ue.type||a.Hx.HTTP,title:Ue.content.title,connectorName:a.Yp,script:void 0,globalMock:T.config.globalMock,inputSchema:Ue.content.inputSchema,markList:Ue.content.markList||[]})}),(0,f.notice)("导入成功",{type:"success",targetContainer:document.body}))}catch{}return ne||(0,f.notice)("输入数据格式有误",{targetContainer:document.body}),[2]})})},[D]),D.updateService=j,D.addDefaultJs=(0,n.useCallback)(function(){D.isEdit=!1,D.type=a.Hx.JS,D.formModel={id:(0,r.uR)(),type:a.Hx.JS,content:{title:""}},C(D)},[D]);var le=(0,n.useCallback)(function(){D.type=a.VB,C(D)},[]),se=(0,n.useCallback)(function(){D.type="",D.isEdit=!1,D.activeId=void 0,D.formModel={},C(D)},[]),_e=function(){return A(void 0,void 0,void 0,function(){return _(this,function(Q){switch(Q.label){case 0:return D.isEdit?[4,j()]:[3,2];case 1:return Q.sent(),[3,4];case 2:return[4,j("create")];case 3:Q.sent(),Q.label=4;case 4:return D.type="",D.activeId=void 0,D.formModel={},D.isEdit=!1,C(D),[2]}})})},Se=function(Q){if(D.isEdit){var ne=(0,r.Xn)(T.connectors,Q),oe=ne.index;(ge=ne.parent)==null||ge.splice(oe,1,Q)}else if(D.parent){var ge,Ce=(0,r.Xn)(T.connectors,D.parent);oe=Ce.index,(ge=Ce.parent)&&ge[oe].children.push(Q)}else T.connectors.push(Q);se()},Ve=function(Q){if(D.isEdit){var ne=(0,r.Xn)(T.connectors,Q),oe=ne.index;(ge=ne.parent)==null||ge.splice(oe,1,x(x({},Q),{updateTime:Date.now()})),D.connector.update({id:Q.id,type:a.Hx.JS,title:Q.content.title,connectorName:a.Yp,markList:Q.content.markList})}else{if(D.parent){var ge,Ce=(0,r.Xn)(T.connectors,D.parent);oe=Ce.index,(ge=Ce.parent)&&ge[oe].children.push(x(x({},Q),{createTime:Date.now(),updateTime:Date.now()}))}else T.connectors.push(x(x({},Q),{createTime:Date.now(),updateTime:Date.now()}));D.connector.add({id:Q.id,type:a.Hx.JS,title:Q.content.title,connectorName:a.Yp,markList:Q.content.markList})}se()},Ye=(0,n.useCallback)(function(Q){ie(function(ne){return ne.includes(Q.id)?ne.filter(function(oe){return oe!==Q.id}):w(w([],ne,!0),[Q.id],!1)})},[]),$=(0,n.useCallback)(function(Q){window.open(Q)},[]),te=(0,n.useCallback)(function(Q,ne){var oe,ge=ne.key,Ce=ne.format,Re=ne.copy,Pe=ne.link,Ue=ne.isTpl,Je=ne.schemaMatchComs;if(Ce)return(0,h.Y)(Q[ge],Ce);if(Re)return e().createElement("span",{className:c.A["sidebar-panel-list-item__copy"]},Q[ge]);if(Pe)return(0,m.Jt)(Q,ge)?e().createElement("span",{onClick:function(){return $((0,m.Jt)(Q,ge))},className:c.A["doc-link"]},"点击跳转"):"无";if(Ue){var Fe=Q[ge];return e().createElement(e().Fragment,null,e().createElement("span",null,b(Fe)==="object"?Fe.domain||"无":Fe||"无"),e().createElement("br",null),(0,m.Jt)(Q,[ge,"laneId"])&&e().createElement("span",null,(0,m.Jt)(Q,[ge,"laneId"])))}if(Je){var We=D.connector.getById(Q.id),ue=(oe=We==null?void 0:We.markList)===null||oe===void 0?void 0:oe[0].outputSchema,me=ue?D.component.getComDefAryBySchema(ue):[];return e().createElement(i.A,{connector:We,coms:me,component:W,closePlugin:Ge})}return(0,m.Jt)(Q,ge,"无")},[]),ce=(0,n.useCallback)(function(){var Q,ne,oe,ge,Ce=D.addActions.find(function(Pe){return Pe.type===D.type&&Pe.render}),Re=null;return Ce?Re=(Ce==null?void 0:Ce.render({onClose:se,originConnectors:(0,m.mg)(T.connectors),globalConfig:T.config,isEdit:D.isEdit,initService:D.isEdit?D.formModel:void 0,connectorService:{add:function(Pe){j("create",Pe)},remove:y,update:function(Pe){j("update",Pe)},test:function(Pe,Ue,Je){return D.connector.test(x(x({},Pe),{connectorName:a.Yp,mode:"test"}),Ue,Je)}}}))||null:D.type===a.Hx.HTTP?Re=e().createElement(l.A,{sidebarContext:D,setRender:C,onSubmit:_e,key:D.type+((Q=D.formModel)===null||Q===void 0?void 0:Q.id),globalConfig:T.config,style:{top:(ne=q.current)===null||ne===void 0?void 0:ne.getBoundingClientRect().top}}):D.type===a.Hx.FOLDER?Re=e().createElement(v.A,{folder:D.formModel,onClose:se,onSubmit:Se,style:{top:(oe=q.current)===null||oe===void 0?void 0:oe.getBoundingClientRect().top}}):D.type===a.Hx.JS&&(Re=e().createElement(p.A,{key:D.activeId,js:D.formModel,onClose:se,onSubmit:Ve,style:{top:(ge=q.current)===null||ge===void 0?void 0:ge.getBoundingClientRect().top}})),Re},[D,D.type,U,j,Se]),ve=(0,n.useCallback)(function(){var Q;return D.type===a.VB?e().createElement(d.A,{style:{top:(Q=q.current)===null||Q===void 0?void 0:Q.getBoundingClientRect().top},onClose:se,data:T}):null},[D]),he=((0,n.useCallback)(function(Q){return Q.type===a.Hx.TG?k.filter(function(ne){var oe=ne.key;return!["content.path","content.method","content.desc"].includes(oe)}):Q.type===a.Hx.JS?k.filter(function(ne){var oe=ne.key;return!["content.path","content.method","content.doc"].includes(oe)}):k},[]),(0,n.useCallback)(function(){var Q;T.connectors.length===0&&(!((Q=K.serviceList)===null||Q===void 0)&&Q.length)&&(T.connectors=K.serviceList,K.serviceList.forEach(function(ne){var oe=ne.content||{},ge=oe.title,Ce=oe.inputSchema,Re=oe.outputSchema,Pe={id:ne.id,type:D.formModel.type||D.type||a.Hx.HTTP,title:ge,connectorName:a.Yp,globalMock:T.config.globalMock,inputSchema:Ce,outputSchema:Re};try{D.connector.add(Pe)}catch(Ue){console.log(Ue)}}))},[])),de=(0,n.useCallback)(function(Q){T.config.globalMock=Q},[]),Ie=(0,n.useCallback)(function(){(0,N.D)(JSON.stringify({pluginData:T,designerData:D.addActions.reduce(function(Q,ne){var oe;return x(x({},Q),((oe={})[ne.type]=D.connector.getAllByType(ne.type),oe))},{})}))},[T,D]);(0,n.useMemo)(function(){if(T){he();try{var Q=(0,r.Y6)(T.connectors);D.addActions.reduce(function(ne,oe){return w(w([],ne,!0),D.connector.getAllByType(oe.type),!0)},[]).forEach(function(ne){var oe=Q==null?void 0:Q.find(function(ge){return ge.id===ne.id});oe?oe.content.title!==ne.title&&D.connector.update(x(x({},ne),{title:oe.content.title})):D.connector.remove(ne.id)})}catch(ne){console.log("连接器数据 format 失败",ne)}}},[]);var Be=(0,n.useCallback)(function(Q,ne,oe){var ge=(0,r.Xn)(T.connectors,Q),Ce=ge.parent,Re=ge.index;Ce.splice(Re,1);var Pe=(0,r.Xn)(T.connectors,ne),Ue=Pe.parent,Je=Pe.index;oe==="inner"?ne.children.push(Q):Ue.splice(oe==="bottom"?Je+1:Je,0,Q)},[T]),Ge=(0,n.useCallback)(function(){var Q,ne,oe,ge;se(),(ge=(oe=(ne=(Q=q.current)===null||Q===void 0?void 0:Q.parentElement)===null||ne===void 0?void 0:ne.parentElement)===null||oe===void 0?void 0:oe.click)===null||ge===void 0||ge.call(oe)},[]),et=function(Q,ne){return Q!=null&&Q.length?Q.map(function(oe){var ge,Ce=ae.includes(oe.id);oe.updateTime=(0,h.Y)(oe.updateTime||oe.createTime);var Re=oe.type,Pe=D.addActions.find(function(Fe){return Fe.type===Re}),Ue="接口";D.addActions.length>1&&(Ue=(Pe==null?void 0:Pe.title)||Ue);var Je=((ge=Pe==null?void 0:Pe.getTitle)===null||ge===void 0?void 0:ge.call(Pe,oe))||oe.content.title;return e().createElement(e().Fragment,null,e().createElement(O.A,{key:oe.id,item:oe,draggable:!0,onDrop:Be},e().createElement("div",{key:oe.id,className:"".concat(c.A["sidebar-panel-list-item"]," ").concat(D.activeId===oe.id?c.A.active:""," ").concat(D.isEdit?D.activeId===oe.id?c.A.chose:c.A.disabled:"")},e().createElement("div",null,e().createElement("div",{onClick:function(){return Ye(oe)},className:c.A["sidebar-panel-list-item__left"]},e().createElement("div",{className:"".concat(c.A.icon," ").concat(Ce?c.A.iconExpand:"")},o.kx),Re===a.Hx.FOLDER?e().createElement("div",{className:c.A.folder},o.TV):e().createElement("div",{className:c.A.tag},Ue),e().createElement("div",{className:c.A.name},e().createElement("span",{"data-mybricks-tip":Je||void 0},Je))),e().createElement("div",{className:c.A["sidebar-panel-list-item__right"]},e().createElement("div",{"data-mybricks-tip":"编辑",ref:S,className:c.A.action,onClick:function(){return I(oe)}},o.hc),e().createElement(u.A,{dropDownStyle:{right:0},onBlur:function(Fe){return Z.current["toolbar"+oe.id]=Fe},overlay:e().createElement("div",{className:c.A.dropdownItem},Re===a.Hx.FOLDER?D.addActions.map(function(Fe){var We=Fe.type,ue=Fe.title;return We===a.dy?e().createElement("div",{className:c.A["separator-divider"]}):e().createElement("div",{className:c.A.item,key:We,onClick:function(){D.activeId=void 0,D.parent=oe,We===a.Hx.HTTP?D.addDefaultService():We===a.Hx.FOLDER?D.addServiceFolder():We===a.Hx.IMPORT?D.importService():We===a.Hx.JS?D.addDefaultJs():(D.type=We,D.isEdit=!1,D.formModel={type:We},C(D))}},ue)}):e().createElement("div",{className:c.A.item,onClick:function(){return z(oe,ne)}},"复制"),e().createElement("div",{className:c.A.item,onClick:function(){return G(oe)}},"导出"),e().createElement("div",{className:c.A["separator-divider"]}),e().createElement("div",{className:c.A.item,onClick:function(){return Y(oe)}},"删除"))},e().createElement("div",{className:c.A.action,"data-mybricks-tip":"更多",onClick:function(){return Object.keys(Z.current).filter(function(Fe){return Fe!=="toolbar".concat(oe.id)}).forEach(function(Fe){return Z.current[Fe]()})}},o.OS)))))),Ce?Re===a.Hx.FOLDER?e().createElement("div",{className:c.A.folderList},et(oe.children,oe)):te(oe,{schemaMatchComs:!0}):null)}):e().createElement(O.A,{parent:ne,item:null,draggable:!0,onDrop:Be},e().createElement("div",{className:c.A.empty,style:ne?{borderBottom:"1px solid #ccc"}:void 0},"暂无接口，请点击新建接口"))};return(0,n.useEffect)(function(){J==="hidden"&&se()},[J]),e().createElement("div",{ref:q,"data-id":"plugin-root-panel",className:"".concat(c.A["sidebar-panel"]," ").concat(c.A["sidebar-panel-open"]),onClick:function(){return Object.values(Z.current).forEach(function(Q){return Q()})}},e().createElement("div",{className:"".concat(c.A["sidebar-panel-view"])},e().createElement("div",{className:c.A["sidebar-panel-header"]},e().createElement("div",{className:c.A["sidebar-panel-header__title"]},e().createElement("span",{onDoubleClick:Ie},"连接器"),e().createElement("div",{className:c.A.rightOperate},e().createElement("div",{className:c.A.globalMock,"data-mybricks-tip":"开启全局Mock，页面调试时所有接口将默认使用Mock能力"},e().createElement("span",{className:!((M=T==null?void 0:T.config)===null||M===void 0)&&M.globalMock?c.A.warning:""},"全局 Mock:"),e().createElement(E.A,{defaultValue:(L=T==null?void 0:T.config)===null||L===void 0?void 0:L.globalMock,onChange:de})),e().createElement("div",{className:c.A.icon,onClick:le,"data-mybricks-tip":"全局设置，可定义接口全局处理逻辑"},o.hZ))),e().createElement(s.A,{blurMap:Z.current,searchValue:ee,ctx:D,setRender:C})),e().createElement("div",{className:c.A["sidebar-panel-list"]},et((0,r.BE)(T==null?void 0:T.connectors,ee),null))),ce(),ve())}},8352:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{call:function(){return call}});var axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2936),_script__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8362),_utils_lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4674),_constant__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2810);function _typeof(R){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},_typeof(R)}var __assign=function(){return __assign=Object.assign||function(R){for(var g,t=1,n=arguments.length;t<n;t++)for(var e in g=arguments[t])Object.prototype.hasOwnProperty.call(g,e)&&(R[e]=g[e]);return R},__assign.apply(this,arguments)},__rest=function(R,g){var t={};for(var n in R)Object.prototype.hasOwnProperty.call(R,n)&&g.indexOf(n)<0&&(t[n]=R[n]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function"){var e=0;for(n=Object.getOwnPropertySymbols(R);e<n.length;e++)g.indexOf(n[e])<0&&Object.prototype.propertyIsEnumerable.call(R,n[e])&&(t[n[e]]=R[n[e]])}return t},defaultFn=function(R){for(var g=[],t=1;t<arguments.length;t++)g[t-1]=arguments[t];return __assign(__assign({},R),g)},httpRegExp=new RegExp("^(http|https)://");function call(connector,params,config,env){return connector.type===_constant__WEBPACK_IMPORTED_MODULE_2__.Hx.JS?callJs(connector,params,config):new Promise(function(resolve,reject){try{var fn=connector.script?eval("(".concat(decodeURIComponent(connector.script),")")):getFetch(connector,env),_a=config||{},_b=_a.before,before_1=_b===void 0?defaultFn:_b,otherConfig=__rest(_a,["before"]);fn(params,{then:resolve,onError:reject},__assign(__assign({},otherConfig),{ajax:function(R){var g,t,n,e=before_1(__assign({},R)),r=e.url;return r||reject("请求路径不能为空"),config!=null&&config.agent||axios__WEBPACK_IMPORTED_MODULE_3__.A||reject("请检查应用 callConnector 配置，确保传入 agent 实例（即 axios）"),connector.useProxy&&httpRegExp.test(r)&&((t=r.match(/^https?:\/\/([^/#&?])+/g))===null||t===void 0?void 0:t[0])!==location.origin?((n=config==null?void 0:config.agent)!==null&&n!==void 0?n:axios__WEBPACK_IMPORTED_MODULE_3__.A)(__assign(__assign({},e),{url:"/paas/api/proxy",headers:__assign(__assign({},e.headers||{}),(g={},g["x-target-url"]=e.url,g)),data:e.data})).then(function(a){var m;return(m=config==null?void 0:config.onResponseInterception)===null||m===void 0||m.call(config,a),a.data}).catch(function(a){var m;throw a.response&&((m=config==null?void 0:config.onResponseInterception)===null||m===void 0||m.call(config,a.response)),a}):(0,axios__WEBPACK_IMPORTED_MODULE_3__.A)(e||R).then(function(a){var m;return(m=config==null?void 0:config.onResponseInterception)===null||m===void 0||m.call(config,a),a.data}).catch(function(a){var m;throw a.response&&((m=config==null?void 0:config.onResponseInterception)===null||m===void 0||m.call(config,a.response)),a})}}))}catch(R){console.log("连接器错误",R),reject("连接器script错误.")}})}var callJs=function(R,g,t){return new Promise(function(n,e){try{pluginRun(R.script||R.output)(g,{output:t.stream||function(){}})}catch(r){console.log("连接器错误",r),e("连接器script错误.")}})},setData=function(R,g,t){var n=g.length;return function e(r,a,m){if(!r||a===n)return r;var h=g[a];return Array.isArray(r)?r.map(function(l,s){var o,d=m[s];return d===void 0?(o={},m.push(o)):o=d,e(l,a,o)}):a===n-1?(m[h]=r[h],r[h]):(r=r[h],Array.isArray(r)?m[h]=m[h]||[]:m[h]=m[h]||{},e(r,a+1,Array.isArray(m)?m:m[h]))}(R,0,t)},del=function(R,g){var t=g.length;(function n(e,r){if(e&&r!==t){var a=g[r];r===t-1&&Reflect.deleteProperty(e,a),Array.isArray(e)?e.forEach(function(m){n(m,r)}):n(e[a],r+1)}})(R,0)},pluginRun=function pluginRun(functionString){return eval("(() => { return ".concat(functionString?(0,_script__WEBPACK_IMPORTED_MODULE_0__.cR)(functionString):"_ => _;","})()"))},getFetch=function(R,g){return g===void 0&&(g={}),function(t,n,e){var r=n.then,a=n.onError,m=R.method,h=R.path.trim(),l=R.outputKeys||[],s=R.excludeKeys||[],o=R.mode==="test",d=R.markList||[];d.length||d.push({title:"默认",id:"default",predicate:{},outputKeys:l,excludeKeys:s});try{o&&console.log("【连接器调试日志】接口传入参数：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(t));var E=h,O=["GET","DELETE"].includes(m)?{params:t,data:{},headers:{},url:E,method:m}:{params:{},data:t,headers:{},url:E,method:m};o&&console.log("【连接器调试日志】全局入参拦截器(执行前配置)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(O));var N=pluginRun(R.globalParamsFn)(O,g);o&&console.log("【连接器调试日志】全局入参拦截器(执行后配置)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(N)),N.url=N.url||E,N.method=N.method||m,o&&console.log("【连接器调试日志】接口自定义入参拦截器(执行前配置)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(N));var v=pluginRun(R.input)(N,g);o&&console.log("【连接器调试日志】接口自定义入参拦截器(执行后配置)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(v)),o&&console.log("【连接器调试日志】接口请求路径模板字符串处理(执行前配置)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(v));var f=["GET","DELETE"].includes(v.method)?v.params:v.data;if(_typeof(f)==="object"){var u=f instanceof FormData,p=[];v.url=(v.url||E).replace(/{([^}]+)}/g,function(A,_){var w=_?_.split("."):[],k=f;w.length||a("请求路径中模板字符串错误");var P=0;for(p.push(w[0]);w.length;){var M=w.shift();if(!k)return void a("请求路径中模板字符串的参数(".concat(_,")缺失"));var L=k[M];if(k instanceof FormData&&(L=k.get(M),P===0&&w.length))try{L=JSON.parse(L)}catch{return void a("请求路径中模板字符串的参数(".concat(_,")缺失"))}L==null&&a("请求路径中模板字符串的参数(".concat(_,")缺失")),P++,k=L}return k}),u?(p.forEach(function(A){f.delete(A)}),f.delete("MYBRICKS_HOST")):(p.forEach(function(A){Reflect.deleteProperty(f||{},A)}),Reflect.deleteProperty(f||{},"MYBRICKS_HOST"))}o&&console.log("【连接器调试日志】接口请求路径模板字符串处理(执行后配置)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(v)),v.method=v.method||m;var i=!1,c=[],b=[],x="then";e.ajax(v).catch(function(A){if(R.globalErrorResultFn&&(A.response||A.name==="AxiosError")){var _=A.response||{data:{}};!_.data&&(_.data={}),pluginRun(R.globalErrorResultFn)({error:A,response:_,config:v},{throwError:function(){for(var w=[],k=0;k<arguments.length;k++)w[k]=arguments[k];i=!0,a.apply(void 0,w)}})}else a(A);throw Error("HTTP_FETCH_ERROR")}).then(function(A){o&&console.log("【连接器调试日志】全局出参拦截器(执行前数据)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(A));var _=pluginRun(R.globalResultFn)({response:A,config:v},{throwError:a});return o&&console.log("【连接器调试日志】全局出参拦截器(执行后数据)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(_)),_}).then(function(A){o&&console.log("【连接器调试日志】接口自定义出参拦截器(执行前数据)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(A));var _=pluginRun(R.output)(A,Object.assign({},v),{throwError:a});o&&console.log("【连接器调试日志】接口自定义出参拦截器(执行后数据)：",(0,_utils_lodash__WEBPACK_IMPORTED_MODULE_1__.mg)(_));for(var w=0;w<d.length;w++){var k=d[w],P=k.id,M=k.predicate,L=M===void 0?{key:"",value:void 0}:M,V=k.excludeKeys,B=k.outputKeys;if(!L||!L.key||L.value===void 0){c=B,b=V,x=P==="default"?"then":P;break}for(var T=_,U=L.key.split(".");T&&U.length;)T=T[U.shift()];if(!U.length&&(L.operator==="="?T===L.value:T!==L.value)){c=B,b=V,x=P==="default"?"then":P;break}}return _}).then(function(A){if(R.mode!=="test")return b==null||b.forEach(function(_){return del(A,_.split("."))}),A;r(A)}).then(function(A){var _=Array.isArray(A)?[]:{};if(c===void 0||c.length===0)_=A;else if(c.forEach(function(k){setData(A,k.split("."),_)}),Array.isArray(c)&&c.length&&(c.length>1||c.length!==1||c[0]!==""))try{for(var w=c.map(function(k){return k.split(".")});Object.prototype.toString.call(_)==="[object Object]"&&w.every(function(k){return!!k.length})&&Object.values(_).length===1;)_=Object.values(_)[0],w.forEach(function(k){return k.shift()})}catch(k){console.log("connector format data error",k)}r(e.isMultipleOutputs?{__OUTPUT_ID__:x,__ORIGIN_RESPONSE__:_}:_)}).catch(function(A){(A==null?void 0:A.message)==="HTTP_FETCH_ERROR"?R.globalErrorResultFn&&!i&&a("全局拦截响应错误函数中必须调用 throwError 方法，请前往修改"):a((A==null?void 0:A.message)||A)})}catch(A){return a(A)}}}},8362:function(R,g,t){t.d(g,{IT:function(){return a},cR:function(){return r},vW:function(){return m}});var n=t(2810),e=function(h,l){var s={};for(var o in h)Object.prototype.hasOwnProperty.call(h,o)&&l.indexOf(o)<0&&(s[o]=h[o]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var d=0;for(o=Object.getOwnPropertySymbols(h);d<o.length;d++)l.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(h,o[d])&&(s[o[d]]=h[o[d]])}return s};function r(h){var l;if(h){var s=decodeURIComponent(h),o=s.match(/export\s+default.*function.*\(/);return s.replace(/export\s+default.*function.*\(/,!((l=o==null?void 0:o[0])===null||l===void 0)&&l.includes("async")?"async function _RT_(":"function _RT_(").replace(/^\s*\/\/.*$/gm,"").replace(/^\s+|\s+$/g,"")}return h}function a(h){return encodeURIComponent((function(l,s,o){var d=s.then,E=s.onError;return function(O,N){var v="__method__",f=__outputKeys__,u=__excludeKeys__,p=__isTestMode__,i=__globalErrorResultFn__,c=__markList__;c.length||c.push({title:"默认",id:"default",predicate:{},outputKeys:f,excludeKeys:u});try{var b="__path__",x=__globalParamsFn__(["GET","DELETE"].includes(v)?{params:O,data:{},headers:{},url:b,method:v}:{params:{},data:O,headers:{},url:b,method:v}),A=__hasGlobalResultFn__;x.url=x.url||b,x.method=x.method||v;var _=__input__(x),w=["GET","DELETE"].includes(_.method)?_.params:_.data;if(typeof w=="object"){var k=w instanceof FormData,P=[];_.url=(_.url||b).replace(/{([^}]+)}/g,function(T,U){var H=U?U.split("."):[],K=w;H.length||E("请求路径中模板字符串错误");var J=0;for(P.push(H[0]);H.length;){var W=H.shift();if(!K)return void E("请求路径中模板字符串的参数(".concat(U,")缺失"));var q=K[W];if(K instanceof FormData&&(q=K.get(W),J===0&&H.length))try{q=JSON.parse(q)}catch{return void E("请求路径中模板字符串的参数(".concat(U,")缺失"))}q==null&&E("请求路径中模板字符串的参数(".concat(U,")缺失")),J++,K=q}return K}),k?(P.forEach(function(T){w.delete(T)}),w.delete("MYBRICKS_HOST")):(P.forEach(function(T){Reflect.deleteProperty(w||{},T)}),Reflect.deleteProperty(w||{},"MYBRICKS_HOST"))}_.method=_.method||v;var M=!1,L=[],V=[],B="then";N.ajax(_).catch(function(T){if(i&&(T.response||T.name==="AxiosError")){var U=T.response||{data:{}};!U.data&&(U.data={}),i({error:T,response:U,config:_},{throwError:function(){for(var H=[],K=0;K<arguments.length;K++)H[K]=arguments[K];M=!0,E.apply(void 0,H)}})}else E(T);throw Error("HTTP_FETCH_ERROR")}).then(function(T){return A?__globalResultFn__({response:T,config:_},{throwError:E}):T}).then(function(T){for(var U=__output__(T,Object.assign({},_),{throwError:E}),H=0;H<c.length;H++){var K=c[H],J=K.id,W=K.predicate,q=W===void 0?{key:"",value:void 0}:W,Z=K.excludeKeys,X=K.outputKeys;if(!q||!q.key||q.value===void 0){L=X,V=Z,B=J==="default"?"then":J;break}for(var ee=U,pe=q.key.split(".");ee&&pe.length;)ee=ee[pe.shift()];if(!pe.length&&(q.operator==="="?ee===q.value:ee!==q.value)){L=X,V=Z,B=J==="default"?"then":J;break}}return U}).then(function(T){if(!p)return V.length===0||V.forEach(function(U){return H=T,K=U.split("."),J=K.length,void function W(q,Z){if(q&&Z!==J){var X=K[Z];Z===J-1&&Reflect.deleteProperty(q,X),Array.isArray(q)?q.forEach(function(ee){W(ee,Z)}):W(q[X],Z+1)}}(H,0);var H,K,J}),T;d(T)}).then(function(T){var U=Array.isArray(T)?[]:{};if(L===void 0||L.length===0)U=T;else if(L.forEach(function(K){var J,W,q,Z;J=T,W=K.split("."),q=U,Z=W.length,function X(ee,pe,re){if(!ee||pe===Z)return ee;var ae=W[pe];return Array.isArray(ee)?ee.map(function(ie,fe){var D,F=re[fe];return F===void 0?(D={},re.push(D)):D=F,X(ie,pe,D)}):pe===Z-1?(re[ae]=ee[ae],ee[ae]):(ee=ee[ae],Array.isArray(ee)?re[ae]=re[ae]||[]:re[ae]=re[ae]||{},X(ee,pe+1,Array.isArray(re)?re:re[ae]))}(J,0,q)}),Array.isArray(L)&&L.length&&(L.length>1||L.length!==1||L[0]!==""))try{for(var H=L.map(function(K){return K.split(".")});Object.prototype.toString.call(U)==="[object Object]"&&H.every(function(K){return!!K.length})&&Object.values(U).length===1;)U=Object.values(U)[0],H.forEach(function(K){return K.shift()})}catch(K){console.log("连接器内置数据转换失败，错误是：",K)}d(N.isMultipleOutputs?{__OUTPUT_ID__:B,__ORIGIN_RESPONSE__:U}:U)}).catch(function(T){T&&T.message==="HTTP_FETCH_ERROR"?i&&!M&&E("全局拦截响应错误函数中必须调用 throwError 方法，请前往修改"):E(T&&T.message||T)})}catch(T){return E(T)}}(l,o)}).toString().replace("__input__",r(h.input)).replace("__output__",r(h.output)).replace("__globalResultFn__",h.globalResultFn?r(h.globalResultFn):void 0).replace("__globalErrorResultFn__",h.globalErrorResultFn?r(h.globalErrorResultFn):void 0).replace("__markList__",JSON.stringify((h.markList||[]).map(function(l){return l.outputSchema,l.resultSchema,e(l,["outputSchema","resultSchema"])}))).replace("__hasGlobalResultFn__",JSON.stringify(!!h.globalResultFn)).replace("__method__",h.method).replace("__isTestMode__",JSON.stringify(h.isTestMode||!1)).replace("__path__",h.path.trim()).replace("__outputKeys__",JSON.stringify(h.outputKeys||[])).replace("__excludeKeys__",JSON.stringify(h.excludeKeys||[])).replace("__globalParamsFn__",r(h.globalParamsFn||n.B_)))}function m(h){return encodeURIComponent(r(h.output))}},4410:function(R,g,t){t.d(g,{mock:function(){return e}});var n=t(8298);function e(r){return new Promise(function(a,m){try{var h=r.outputSchema||r.mockSchema;h?a(r.isMultipleOutputs===!1?(0,n.uK)(h):{__OUTPUT_ID__:r.mockOutputId,__ORIGIN_RESPONSE__:(0,n.uK)(h)}):m("服务接口组件返回值类型不存在，不支持模拟数据")}catch{m("服务接口数据模拟失败")}})}},9469:function(R,g,t){function n(e){var r=document.createElement("input");return document.body.appendChild(r),r.value=e,r.select(),document.execCommand("copy"),document.body.removeChild(r),!0}t.d(g,{D:function(){return n}})},8298:function(R,g,t){t.d(g,{A5:function(){return l},BE:function(){return A},HO:function(){return o},OD:function(){return p},Pv:function(){return i},TY:function(){return h},Xn:function(){return c},Y6:function(){return b},ex:function(){return u},j7:function(){return N},jf:function(){return m},jv:function(){return d},qO:function(){return x},uK:function(){return O},uR:function(){return E},zB:function(){return s}});var n=t(4674),e=t(2810);function r(_){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},r(_)}var a=function(){return a=Object.assign||function(_){for(var w,k=1,P=arguments.length;k<P;k++)for(var M in w=arguments[k])Object.prototype.hasOwnProperty.call(w,M)&&(_[M]=w[M]);return _},a.apply(this,arguments)};function m(_){_&&(_.type==="object"?Object.values(_.properties).forEach(function(w){m(w)}):_.type==="array"?(0,n.Im)(_.items)?(Object.defineProperty(_,"type",{writable:!0,value:"array"}),Reflect.deleteProperty(_,"items")):_.items.type==="object"&&Object.values(_.items.properties).forEach(function(w){m(w)}):_.type==="unknown"&&Object.defineProperty(_,"type",{writable:!0,value:"string"}))}function h(_,w){var k=Array.isArray(_)?[]:{};return w===void 0||w.length===0?k=_:w.forEach(function(P){(function(M,L,V){var B=L.length;(function T(U,H,K){if(!U||H===B)return U;var J=L[H];return Array.isArray(U)?U.map(function(W,q){var Z,X=K[q];return X===void 0?(Z={},K.push(Z)):Z=X,T(W,H,Z)}):H===B-1?(K[J]=U[J],U[J]):(U=U[J],Array.isArray(U)?K[J]=K[J]||[]:K[J]=K[J]||{},T(U,H+1,Array.isArray(K)?K:K[J]))})(M,0,V)})(_,P.split("."),k)}),k}function l(_,w){if(!w||w.length===0)return _;var k=(0,n.mg)(_);return w.forEach(function(P){(function(M,L){var V=L.length;(function B(T,U){if(T&&U!==V){var H=L[U];U===V-1&&Reflect.deleteProperty(T,H),Array.isArray(T)?T.forEach(function(K){B(K,U)}):B(T[H],U+1)}})(M,0)})(k,P.split("."))}),k}function s(_){var w={type:_.type};switch(_.type){case"root":w.type="object",w.properties={},_.children.forEach(function(k){w.properties[k.name]=s(k)});break;case"object":w.properties={},_.children.forEach(function(k){w.properties[k.name]=s(k)});break;case"array":w.type="array",w.items=_.children[0]?s(_.children[0]):{}}return w}function o(_){if(!_)return{};var w={};return _.type==="string"||_.type==="any"?_.defaultValue||"":_.type==="number"?+_.defaultValue:_.type==="boolean"?!!_.defaultValue:(_.children&&(_.type==="array"&&(w=[]),_.children.forEach(function(k){w[k.name]=o(k)})),w)}function d(_){if(!_)return!1;var w=!1;return _.type==="any"?_.defaultValue instanceof File:(_.children&&_.children.forEach(function(k){w=w||d(k)}),w)}function E(_){_===void 0&&(_=6);for(var w="",k=0;k<_;k++)w+="abcdefhijkmnprstwxyz".charAt(Math.floor(20*Math.random()));return"u_"+w}function O(_){return function(w){if(w){var k,P=w.type;if(P==="string"||P==="number")return function(K){var J=K.type;if(K.default!==void 0&&K.default!=="")return K.default;if(J==="string"){var W=K.minLength,q=W===void 0?0:W,Z=K.maxLength,X=+q;return function(ie){ie===void 0&&(ie=6);for(var fe="abcdefhijkmnprstwxyz",D="",F=0;F<ie;F++)D+=fe.charAt(Math.floor(20*Math.random()));return D}(ae=+(Z===void 0?8:Z)).slice(ae-Math.round(X+Math.random()*(ae-X)))}var ee=K.minimum,pe=ee===void 0?0:ee,re=K.maximum,ae=+(re===void 0?100:re);return(X=+pe)+Math.round(Math.random()*(ae-X))}(w);if(P==="array"){k=[];for(var M=w.minItems,L=M===void 0?1:M,V=w.maxItems,B=V===void 0?5:V,T=L+Math.round(Math.random()*(B-L)),U=0;U<T;U++){var H=O(w.items);H!=null&&k.push(H)}}return w.type==="object"&&(k={},Object.keys(w.properties||{}).forEach(function(K){k[K]=O(w.properties[K])})),k}}(_)}function N(_){var w={type:void 0};return v({schema:w,val:_}),w.type?w:void 0}function v(_){var w,k,P=_.schema,M=_.val,L=_.key,V=_.fromAry;if(Array.isArray(M)){var B=M.length?{}:void 0;L?(P[L]={type:"array",items:B},B&&(P[L].items=B)):(P.type="array",B&&(P.items=B)),function(K,J){if(K){var W=[];J.length>0&&J.forEach(function(q){var Z=JSON.parse(JSON.stringify(K));v({schema:Z,val:q,fromAry:!0}),W.push(Z)}),f(K,W.filter(Boolean))}}(B,M)}else if(r(M)==="object"&&M){var T=void 0;V&&(P.type="object",T=P.properties={});var U=V?T:{};V||(L?P[L]={type:"object",properties:U}:(P.type="object",P.properties=U)),w=U,k=M,Object.keys(k).map(function(K){return v({schema:w,val:k[K],key:K})})}else{var H=M==null?"unknown":r(M);L===void 0?P.type=H:P[L]={type:H}}}var f=function(_,w){if(!w)return _;for(var k=null,P=function(L){var V=w[L];if(!V||!Object.keys(V).length)return"continue";if(k)_.type==="object"&&V.type==="object"?Object.keys(V.properties||{}).forEach(function(B){var T=_.properties[B];(!T&&V.properties[B]||T.type==="unknown"&&V.properties[B].type!=="unknown")&&(_.properties[B]=V.properties[B])}):_.type==="array"&&V.type==="array"&&(_.items&&Object.keys(_.items).length||(_.items=V.items||{}));else if(V.type!=="unknown"){if(V.type!=="object"&&V.type!=="array")return delete _.properties,Object.assign(_,V),"break";k=V,Object.assign(_,V)}else delete _.properties,Object.assign(_,V)},M=0;M<w.length&&P(M)!=="break";M++);_.type==="object"?Object.keys(_.properties||{}).forEach(function(L){var V,B,T,U,H,K;((B=(V=_.properties)===null||V===void 0?void 0:V[L])===null||B===void 0?void 0:B.type)==="object"?f(_.properties[L],w.filter(Boolean).map(function(J){var W;return(W=J==null?void 0:J.properties)===null||W===void 0?void 0:W[L]})):((U=(T=_.properties)===null||T===void 0?void 0:T[L])===null||U===void 0?void 0:U.type)==="array"&&(!((K=(H=_.properties)===null||H===void 0?void 0:H[L])===null||K===void 0)&&K.items||(_.properties[L].items={}),f(_.properties[L],w.filter(Boolean).map(function(J){var W;return(W=J==null?void 0:J.properties)===null||W===void 0?void 0:W[L]})))}):_.type==="array"&&(_.items||(_.items={}),f(_.items,w.filter(Boolean).map(function(L){return(L==null?void 0:L.items)||{}})))};function u(_){try{return decodeURIComponent(_)}catch{return _}}var p=function(_){var w={id:E(),name:"root",type:"root",children:[]},k=function(P,M){var L,V;if(M.type==="object")Object.keys(M.properties).forEach(function(T){var U,H=M.properties[T],K={type:H.type,name:T,id:E(),defaultValue:(U=H.defaultValue)!==null&&U!==void 0?U:"",children:[]};P.children.push(K),["array","object"].includes(H.type)&&k(K,H)});else if(M.type==="array"){if(!(!((L=M.items)===null||L===void 0)&&L.type))return;var B={type:M.items.type,name:"0",id:E(),defaultValue:(V=M.items.defaultValue)!==null&&V!==void 0?V:"",children:[]};P.children.push(B),["array","object"].includes(M.items.type)&&k(B,M.items)}};return k(w,_),w},i=function(_){var w={id:E(),name:"root",type:"root",children:[]},k=N(_);m(k);var P=function(M,L){L&&(Array.isArray(L)?L.forEach(function(V,B){var T=V==null?"string":Array.isArray(V)?"array":r(V),U={name:String(B),id:E(),defaultValue:["object","array"].includes(T)?"":V,children:[],type:T};M.children.push(U),P(U,V)}):r(L)==="object"&&Object.keys(L).forEach(function(V){var B=L[V]===null||L[V]===void 0?"string":Array.isArray(L[V])?"array":r(L[V]),T={name:V,id:E(),defaultValue:["object","array"].includes(B)?"":L[V],children:[],type:B};M.children.push(T),P(T,L[V])}))};return P(w,_),{params:w,originSchema:k}},c=function(_,w){var k=null,P=-1,M=function(L){if(!k){var V=L.findIndex(function(B){return B.id===w.id});V!==-1?(k=L,P=V):L.filter(function(B){return B.type===e.Hx.FOLDER}).forEach(function(B){return M(B.children)})}};return M(_),{parent:k,index:P}},b=function(_){var w=[],k=function(P){P.forEach(function(M){M.type===e.Hx.FOLDER?k(M.children):w.push(M)})};return k(_),w},x=function(_){var w=function(k){Array.isArray(k)?k.forEach(function(P){P.type===e.Hx.FOLDER?(w(P.children),P.id=E()):(P.id=E(),P.createTime=Date.now(),P.updateTime=Date.now())}):(k.id=E(),(k.createTime||k.updateTime)&&(k.createTime=Date.now(),k.updateTime=Date.now()),k.type===e.Hx.FOLDER&&w(k.children))};return w(_),_},A=function(_,w){if(!(_!=null&&_.length))return[];if(!w)return _;var k=function(P){if(P.content.title.includes(w))return P;if(P.type===e.Hx.FOLDER){var M=[];return P.children.forEach(function(L){var V=k(L);V&&M.push(V)}),M.length?a(a({},P),{children:M}):void 0}};return _.map(k).filter(Boolean)}},305:function(R,g,t){function n(a){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},n(a)}function e(a,m){if(m===void 0&&(m=[]),a===null||n(a)!=="object")return a;var h=m.filter(function(N){return N.original===a})[0];if(h)return h.copy;var l=Array.isArray(a)?[]:a instanceof FormData?new FormData:{};if(m.push({original:a,copy:l}),a instanceof FormData)for(var s=0,o=r(a.entries());s<o.length;s++){var d=o[s],E=d[0],O=d[1];l.append(E,O)}else Object.keys(a).forEach(function(N){l[N]=e(a[N],m)});return l}t.d(g,{m:function(){return e}});var r=function(a){if(Object.prototype.toString.call(a).includes("Iterator")){for(var m=a.next(),h=m.done?[]:[m.value];!m.done;)!(m=a.next()).done&&h.push(m.value);return h}return a}},7403:function(R,g,t){t.d(g,{s:function(){return h}});var n=t(8563),e=t(5774),r="Expected a function",a=Math.max,m=Math.min;function h(l,s,o){var d,E,O,N,v,f,u=0,p=!1,i=!1,c=!0;if(typeof l!="function")throw new TypeError(r);function b(k){var P=d,M=E;return d=E=void 0,u=k,N=l.apply(M,P)}function x(k){var P=k-f;return f===void 0||P>=s||P<0||i&&k-u>=O}function A(){var k=(0,e.t)();if(x(k))return _(k);v=setTimeout(A,function(P){var M=s-(P-f);return i?m(M,O-(P-u)):M}(k))}function _(k){return v=void 0,c&&d?b(k):(d=E=void 0,N)}function w(){var k=(0,e.t)(),P=x(k);if(d=arguments,E=this,f=k,P){if(v===void 0)return function(M){return u=M,v=setTimeout(A,s),p?b(M):N}(f);if(i)return clearTimeout(v),v=setTimeout(A,s),b(f)}return v===void 0&&(v=setTimeout(A,s)),N}return s=Number(s)||0,(0,n.G)(o)&&(p=!!o.leading,O=(i="maxWait"in o)?a(Number(o.maxWait)||0,s):O,c="trailing"in o?!!o.trailing:c),w.cancel=function(){v!==void 0&&clearTimeout(v),u=0,d=f=E=v=void 0},w.flush=function(){return v===void 0?N:_((0,e.t)())},w}},555:function(R,g,t){function n(e,r){if(!Array.isArray(e))return-1;for(var a=e.length-1;a>=0;a--)if(r(e[a]))return a;return-1}t.d(g,{A:function(){return n}})},414:function(R,g,t){t.d(g,{A:function(){return e}});var n=function(r,a,m){for(var h,l=0,s=a.length;l<s;l++)!h&&l in a||(h||(h=Array.prototype.slice.call(a,0,l)),h[l]=a[l]);return r.concat(h||Array.prototype.slice.call(a))};function e(r,a,m){if(!a||!r)return r;var h=Array.isArray(a)?n([],a):a.split("."),l=h.length;return function s(o,d){if(d===l)return o;var E=h[d];return(o=Array.isArray(o)?o.map(function(O){var N;return(N={})[E]=s(O[E],d+1),N}):o[E])==null?m:s(o,d+1)}(r,0)}},4674:function(R,g,t){t.d(g,{Im:function(){return a.A},Jt:function(){return r.A},Kl:function(){return m.A},mg:function(){return e.m},sg:function(){return n.s}});var n=t(7403),e=t(305),r=t(414),a=t(5751),m=t(555)},5751:function(R,g,t){function n(e){return!e||(Array.isArray(e)?e.length===0:Object.prototype.toString.call(e)!=="[object Object]"||Object.keys(e).length===0)}t.d(g,{A:function(){return n}})},8563:function(R,g,t){function n(r){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(r)}function e(r){var a=n(r);return r!=null&&(a=="object"||a=="function")}t.d(g,{G:function(){return e}})},5774:function(R,g,t){t.d(g,{t:function(){return n}});var n=function(){return Date.now()}},9371:function(R,g,t){function n(r){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(r)}function e(r,a){if(a===void 0&&(a="YY-mm-dd HH:MM:SS"),typeof r=="number"&&(r=new Date(r)),n(r)==="object"&&r instanceof Date){var m={"Y+":r.getFullYear().toString(),"m+":(r.getMonth()+1).toString(),"d+":r.getDate().toString(),"H+":r.getHours().toString(),"M+":r.getMinutes().toString(),"S+":r.getSeconds().toString()},h=void 0;for(var l in m)(h=new RegExp("("+l+")").exec(a))&&(a=a.replace(h[1],h[1].length==1?m[l]:m[l].padStart(h[1].length,"0")));return a}return r}t.d(g,{Y:function(){return e}})},4827:function(R,g,t){t.d(g,{u:function(){return r}});var n=function(a,m,h){if(h||arguments.length===2)for(var l,s=0,o=m.length;s<o;s++)!l&&s in m||(l||(l=Array.prototype.slice.call(m,0,s)),l[s]=m[s]);return a.concat(l||Array.prototype.slice.call(m))},e=["number","boolean","string","any","follow"],r=function(a){var m=function(l,s,o){var d=s!=null&&s.length?s[s.length-1]:"";if("type"in l&&d!=="properties")return l.type==="object"?l.properties===void 0?(h.push({path:s,fieldName:"properties",msg:"type 为 object 的描述缺少 properties 属性"}),!1):m(l.properties,n(n([],s,!0),["properties"],!1)):l.type==="array"?"items"in l?m(l.items,n(n([],s,!0),["items"],!1)):(h.push({path:s,fieldName:"items",msg:"type 为 array 的描述缺少 properties 属性"}),!1):!!e.includes(l.type)||(h.push({path:s,fieldName:"type",msg:"type 类型不符合要求，需要为以下之一: number, boolean, string, any, follow, array, object"}),!1);if(s[s.length-1]==="properties"){var E=[];for(var O in l){var N=m(l[O],n(n([],s,!0),[O],!1));E.push(N),N===!1&&h.push({path:n(n([],s,!0),[O],!1),fieldName:O,msg:"properties 中的 ".concat(O," 属性，缺少 type 类型")})}return!(E.length&&E.some(function(v){return v===!1}))}return!!l.type&&void 0},h=[];return[m(a,[]),h]}},3439:function(R,g,t){var n=t(9155),e=t.n(n),r=t(50),a=t(1490);function m(h,l){(l==null||l>h.length)&&(l=h.length);for(var s=0,o=new Array(l);s<l;s++)o[s]=h[s];return o}g.A=function(h){var l,s,o=h.children,d=h.className,E=(l=(0,n.useState)(!1),s=2,function(v){if(Array.isArray(v))return v}(l)||function(v,f){var u=v==null?null:typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(u!=null){var p,i,c,b,x=[],A=!0,_=!1;try{if(c=(u=u.call(v)).next,f===0){if(Object(u)!==u)return;A=!1}else for(;!(A=(p=c.call(u)).done)&&(x.push(p.value),x.length!==f);A=!0);}catch(w){_=!0,i=w}finally{try{if(!A&&u.return!=null&&(b=u.return(),Object(b)!==b))return}finally{if(_)throw i}}return x}}(l,s)||function(v,f){if(v){if(typeof v=="string")return m(v,f);var u=Object.prototype.toString.call(v).slice(8,-1);return u==="Object"&&v.constructor&&(u=v.constructor.name),u==="Map"||u==="Set"?Array.from(v):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?m(v,f):void 0}}(l,s)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),O=E[0],N=E[1];return e().createElement("div",{className:"".concat(r.A.collapse," ").concat(d??"")},e().createElement("div",{className:r.A.icon},e().createElement(a.A,{name:"up",style:{transform:O?"rotate(180deg)":"rotate(0)"},onClick:function(){return N(function(v){return!v})}})),e().createElement("div",{className:O?r.A.collapsed:""},o))}},9556:function(R,g,t){var n=t(9155),e=t.n(n),r=t(259);g.A=function(a){var m=a.onClick,h=a.children;return e().createElement("div",{className:r.A.mask,onClick:function(l){l.target===l.currentTarget&&(m==null||m()),l.stopPropagation()}},h)}},4680:function(R,g,t){var n=t(9155),e=t.n(n),r=t(4343);g.A=function(a){var m=a.children;return e().createElement("div",{className:r.A.wrap},m)}},935:function(R,g,t){var n=t(9155),e=t.n(n),r=t(9556),a=t(4680),m=t(1490),h=t(8606),l=t(3439),s=t(2096),o=function(d){var E=d.open,O=d.title,N=O===void 0?"Dialog":O,v=d.width,f=v===void 0?1024:v,u=d.children,p=d.footer,i=d.draggable,c=d.inside,b=d.maskClosable,x=d.contentClassName,A=d.onClose,_=(0,n.useMemo)(function(){var w=e().createElement("div",{className:s.A.dialog,style:{width:f}},e().createElement("div",{"data-handler":!0,className:s.A["dialog-header"]},N),e().createElement("div",{className:"".concat(s.A["dialog-content"]," ").concat(x??"")},u),e().createElement(m.A,{name:"close",className:s.A.close,onClick:A}),p&&e().createElement(l.A,null,p));return i?e().createElement(h.A,{inside:c},w):w},[i,c]);return E?e().createElement(r.A,{onClick:b?A:function(){}},e().createElement(a.A,null,_)):null};o.Icon=m.A,g.A=o},8606:function(R,g,t){var n=t(9155);function e(h){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},e(h)}function r(h,l){var s=Object.keys(h);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(h);l&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(h,d).enumerable})),s.push.apply(s,o)}return s}function a(h){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?r(Object(s),!0).forEach(function(o){var d,E,O,N;d=h,E=o,O=s[o],N=function(v){if(e(v)!="object"||!v)return v;var f=v[Symbol.toPrimitive];if(f!==void 0){var u=f.call(v,"string");if(e(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(E),(E=e(N)=="symbol"?N:String(N))in d?Object.defineProperty(d,E,{value:O,enumerable:!0,configurable:!0,writable:!0}):d[E]=O}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach(function(o){Object.defineProperty(h,o,Object.getOwnPropertyDescriptor(s,o))})}return h}function m(h,l){(l==null||l>h.length)&&(l=h.length);for(var s=0,o=new Array(l);s<l;s++)o[s]=h[s];return o}g.A=function(h){var l,s,o=h.inside,d=h.children,E=d.props.children,O=(l=(0,n.useState)(),s=2,function(w){if(Array.isArray(w))return w}(l)||function(w,k){var P=w==null?null:typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(P!=null){var M,L,V,B,T=[],U=!0,H=!1;try{if(V=(P=P.call(w)).next,k===0){if(Object(P)!==P)return;U=!1}else for(;!(U=(M=V.call(P)).done)&&(T.push(M.value),T.length!==k);U=!0);}catch(K){H=!0,L=K}finally{try{if(!U&&P.return!=null&&(B=P.return(),Object(B)!==B))return}finally{if(H)throw L}}return T}}(l,s)||function(w,k){if(w){if(typeof w=="string")return m(w,k);var P=Object.prototype.toString.call(w).slice(8,-1);return P==="Object"&&w.constructor&&(P=w.constructor.name),P==="Map"||P==="Set"?Array.from(w):P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)?m(w,k):void 0}}(l,s)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),N=O[0],v=O[1],f=(0,n.useRef)(null),u=(0,n.useRef)([0,0]),p=(0,n.useRef)([0,0]),i=(0,n.useRef)(),c=(0,n.useCallback)(function(w){var k,P;u.current=[w.clientX,w.clientY];var M=window.getComputedStyle(f.current),L=M.transform,V=M.top,B=M.bottom,T=M.left,U=M.right,H=(k=f.current)===null||k===void 0||(k=k.parentElement)===null||k===void 0?void 0:k.getBoundingClientRect(),K=(P=f.current)===null||P===void 0?void 0:P.getBoundingClientRect();if(H&&K&&(i.current=[-parseFloat(V),((H==null?void 0:H.width)-(K==null?void 0:K.width))/2-parseFloat(U),(H==null?void 0:H.height)-(K==null?void 0:K.height)+parseFloat(B),-(((H==null?void 0:H.width)-(K==null?void 0:K.width))/2-parseFloat(T))]),L&&L!=="none"){var J=L==null?void 0:L.split(",");p.current=[parseFloat(J[4]),parseFloat(J[5])]}document.addEventListener("mousemove",b),document.addEventListener("mouseup",x),w.preventDefault()},[]),b=(0,n.useCallback)(function(w){var k=w.clientX-u.current[0],P=w.clientY-u.current[1];k=p.current[0]+k,P=p.current[1]+P,o&&i.current&&(k<i.current[3]&&(k=i.current[3]),k>i.current[1]&&(k=i.current[1]),P<i.current[0]&&(P=i.current[0]),P>i.current[2]&&(P=i.current[2])),requestAnimationFrame(function(){return v("translate(".concat(k,"px, ").concat(P,"px)"))})},[o]),x=(0,n.useCallback)(function(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",x)},[]),A=(0,n.useCallback)(function(w){for(var k=0;k<w.length;k++){var P=w[k];if((0,n.isValidElement)(P)){if("data-handler"in P.props)return void(w[k]=(0,n.cloneElement)(P,a(a({},P.props),{},{onMouseDown:c,style:a(a({},P.props.style),{},{cursor:"move"})})));P.props.children&&A(P.props.children)}}},[]),_=(0,n.useMemo)(function(){var w=n.Children.toArray(E);return A(w),w},[E]);return(0,n.cloneElement)(d,a(a({},d.props),{},{style:a(a({},d.props.style),{},{transform:N}),children:_,ref:f}))}},1490:function(R,g,t){var n=t(9155),e=t.n(n),r=t(4087),a={close:e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3185",width:"64",height:"64"},e().createElement("path",{d:"M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM672 627.2c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0L512 556.8l-115.2 115.2c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8L467.2 512 352 396.8C339.2 384 339.2 364.8 352 352s32-12.8 44.8 0L512 467.2l115.2-115.2c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L556.8 512 672 627.2z","p-id":"3186",fill:"#8a8a8a"})),plus:e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5072",width:"32",height:"32"},e().createElement("path",{d:"M288 928h-96c-52.8 0-96-43.2-96-96v-96c0-17.6 14.4-32 32-32s32 14.4 32 32v96c0 17.6 14.4 32 32 32h96c17.6 0 32 14.4 32 32s-14.4 32-32 32z m544 0h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96c17.6 0 32-14.4 32-32v-96c0-17.6 14.4-32 32-32s32 14.4 32 32v96c0 52.8-43.2 96-96 96z m64-608c-17.6 0-32-14.4-32-32v-96c0-17.6-14.4-32-32-32h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96c52.8 0 96 43.2 96 96v96c0 17.6-14.4 32-32 32z m-768 0c-17.6 0-32-14.4-32-32v-96c0-52.8 43.2-96 96-96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32h-96c-17.6 0-32 14.4-32 32v96c0 17.6-14.4 32-32 32z m544 448H352c-52.8 0-96-43.2-96-96V352c0-52.8 43.2-96 96-96h320c52.8 0 96 43.2 96 96v320c0 52.8-43.2 96-96 96zM352 320c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V352c0-17.6-14.4-32-32-32H352z",fill:"#8a8a8a","p-id":"5073"})),format:e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5685",width:"32",height:"32"},e().createElement("path",{d:"M801.450667 103.082667H222.549333c-65.877333 0-119.466667 53.589333-119.466666 119.466666v578.901334c0 65.877333 53.589333 119.466667 119.466666 119.466666h578.901334c65.877333 0 119.466667-53.589333 119.466666-119.466666V222.549333c0-65.877333-53.589333-119.466667-119.466666-119.466666z m51.2 698.368c0 28.16-23.04 51.2-51.2 51.2H222.549333c-28.16 0-51.2-23.04-51.2-51.2V222.549333c0-28.16 23.04-51.2 51.2-51.2h578.901334c28.16 0 51.2 23.04 51.2 51.2v578.901334z","p-id":"5686",fill:"#8a8a8a"}),e().createElement("path",{d:"M552.96 330.24c-18.261333-4.949333-36.864 5.973333-41.813333 24.234667L431.445333 651.946667c-4.949333 18.261333 5.973333 36.864 24.234667 41.813333 2.901333 0.853333 5.973333 1.194667 8.874667 1.194667 15.018667 0 28.842667-10.069333 32.938666-25.258667l79.701334-297.642667a34.304 34.304 0 0 0-24.234667-41.813333zM399.872 388.608c-13.312-13.312-34.986667-13.312-48.298667 0l-99.328 99.328a33.8432 33.8432 0 0 0 0 48.128l99.328 99.328c6.656 6.656 15.36 10.069333 24.064 10.069333s17.408-3.413333 24.064-10.069333c13.312-13.312 13.312-34.986667 0-48.298667L324.778667 512l75.264-75.264a34.133333 34.133333 0 0 0-0.170667-48.128zM672.426667 388.608c-13.312-13.312-34.986667-13.312-48.298667 0-13.312 13.312-13.312 34.986667 0 48.298667l75.093333 75.093333-75.264 75.264a34.2016 34.2016 0 0 0 24.064 58.368c8.704 0 17.408-3.413333 24.064-10.069333l99.328-99.328a33.8432 33.8432 0 0 0 0-48.128l-98.986666-99.498667z","p-id":"5687",fill:"#8a8a8a"})),preview:e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"12967",width:"32",height:"32"},e().createElement("path",{d:"M668.7 150.3c-14.3 0-25.9-11.6-25.9-25.9s11.6-25.9 25.9-25.9h151.4c59.6 0 107.9 48.2 107.9 107.8v151.4c0 14.3-11.6 25.9-25.9 25.9s-25.9-11.6-25.9-25.9V206.3c0-30.9-25-56-56-56H668.7z m207.4 506.3c-0.6-14.3 10.4-26.4 24.7-27.1 14.3-0.6 26.4 10.4 27.1 24.7V820.3c0 59.6-48.2 107.8-107.8 107.8H717.8c-14.3 0-25.9-11.6-25.9-25.9s11.6-25.9 25.9-25.9h102.4c30.9 0 56-25 56-56V656.6zM369.8 876.4c14.3 0 25.9 11.6 25.9 25.9s-11.6 25.9-25.9 25.9H206c-59.5 0-107.8-48.3-107.8-107.8V668.9c0-14.3 11.6-25.9 25.9-25.9s25.9 11.6 25.9 25.9v151.4c0 30.9 25 56 56 56h163.8v0.1zM150.1 357.8c0 14.3-11.6 25.9-25.9 25.9s-25.9-11.6-25.9-25.9V206.3c0-59.7 48.2-107.9 107.8-107.9h151.4c14.3 0 25.9 11.6 25.9 25.9s-11.6 25.9-25.9 25.9H206.1c-30.9 0-56 25-56 56v151.6z m363 285.2c88.8 0 171.5-46.1 249.8-142.6-78.3-96.5-161-142.6-249.8-142.6-88.8 0-171.5 46.2-249.9 142.6C341.6 596.8 424.3 643 513.1 643z m0 51.8c-105.8 0-202.6-53.9-290.1-161.8-15.4-19-15.4-46.3 0-65.3 87.5-107.9 184.3-161.8 290.1-161.8 105.8 0 202.5 53.9 290.1 161.8 15.4 19 15.4 46.3 0 65.3-87.6 107.9-184.3 161.8-290.1 161.8z","p-id":"12968",fill:"#8a8a8a"}),e().createElement("path",{d:"M513.1 565.2c35.8 0 64.8-29 64.8-64.8s-29-64.8-64.8-64.8-64.8 29-64.8 64.8 29 64.8 64.8 64.8z m0 51.9c-64.4 0-116.7-52.2-116.7-116.7s52.2-116.7 116.7-116.7 116.7 52.2 116.7 116.7-52.2 116.7-116.7 116.7z","p-id":"12969",fill:"#8a8a8a"})),up:e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2321",width:"32",height:"32"},e().createElement("path",{d:"M512.146286 454.753524l-266.849524 266.727619L193.584762 669.744762l318.585905-318.415238 318.268952 318.415238-51.736381 51.687619z","p-id":"2322",fill:"#8a8a8a"})),down:e().createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3383",width:"32",height:"32"},e().createElement("path",{d:"M512.146286 619.52L245.296762 352.792381 193.584762 404.48l318.585905 318.415238 318.268952-318.415238-51.736381-51.687619z","p-id":"3384",fill:"#8a8a8a"}))};g.A=function(m){var h=m.name,l=m.className,s=m.style,o=m.onClick;return e().createElement("span",{style:s,className:"".concat(r.A.icon," ").concat(l),onClick:o},a[h])}},1862:function(R,g,t){var n=t(935);g.A=n.A},1586:function(R,g,t){function n(l,s,o){return s in l?Object.defineProperty(l,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[s]=o,l}function e(l,s){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);s&&(d=d.filter(function(E){return Object.getOwnPropertyDescriptor(l,E).enumerable})),o.push.apply(o,d)}return o}function r(l){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?e(Object(o),!0).forEach(function(d){n(l,d,o[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(d){Object.defineProperty(l,d,Object.getOwnPropertyDescriptor(o,d))})}return l}function a(l,s){if(l==null)return{};var o,d,E=function(N,v){if(N==null)return{};var f,u,p={},i=Object.keys(N);for(u=0;u<i.length;u++)f=i[u],v.indexOf(f)>=0||(p[f]=N[f]);return p}(l,s);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(l);for(d=0;d<O.length;d++)o=O[d],s.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(l,o)&&(E[o]=l[o])}return E}function m(l,s){return function(o){if(Array.isArray(o))return o}(l)||function(o,d){if(typeof Symbol<"u"&&Symbol.iterator in Object(o)){var E=[],O=!0,N=!1,v=void 0;try{for(var f,u=o[Symbol.iterator]();!(O=(f=u.next()).done)&&(E.push(f.value),!d||E.length!==d);O=!0);}catch(p){N=!0,v=p}finally{try{O||u.return==null||u.return()}finally{if(N)throw v}}return E}}(l,s)||function(o,d){if(o){if(typeof o=="string")return h(o,d);var E=Object.prototype.toString.call(o).slice(8,-1);return E==="Object"&&o.constructor&&(E=o.constructor.name),E==="Map"||E==="Set"?Array.from(o):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?h(o,d):void 0}}(l,s)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function h(l,s){(s==null||s>l.length)&&(s=l.length);for(var o=0,d=new Array(s);o<s;o++)d[o]=l[o];return d}t.d(g,{$i:function(){return a},T1:function(){return r},zC:function(){return m}})},485:function(R,g){g.A={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}}},6398:function(R,g,t){t.d(g,{A:function(){return n.A}});var n=t(7188)},7188:function(R,g,t){var n=t(1586),e=t(8733),r=t(485),a=t(3912),m=t(152),h=t(3134),l=t(786),s=e.A.create({config:r.A,isInitialized:!1,resolve:null,reject:null,monaco:null}),o=(0,n.zC)(s,2),d=o[0],E=o[1];function O(i){return document.body.appendChild(i)}function N(i){var c,b,x=d(function(_){return{config:_.config,reject:_.reject}}),A=(c="".concat(x.config.paths.vs,"/loader.js"),b=document.createElement("script"),c&&(b.src=c),b);return A.onload=function(){return i()},A.onerror=x.reject,A}function v(){var i=d(function(b){return{config:b.config,resolve:b.resolve,reject:b.reject}}),c=window.require;c.config(i.config),c(["vs/editor/editor.main"],function(b){f(b),i.resolve(b)},function(b){i.reject(b)})}function f(i){d().monaco||E({monaco:i})}var u=new Promise(function(i,c){return E({resolve:i,reject:c})}),p={config:function(i){var c=a.Ay.config(i),b=c.monaco,x=(0,n.$i)(c,["monaco"]);E(function(A){return{config:(0,h.A)(A.config,x),monaco:b}})},init:function(){var i=d(function(c){return{monaco:c.monaco,isInitialized:c.isInitialized,resolve:c.resolve}});if(!i.isInitialized){if(E({isInitialized:!0}),i.monaco)return i.resolve(i.monaco),(0,l.A)(u);if(window.monaco&&window.monaco.editor)return f(window.monaco),i.resolve(window.monaco),(0,l.A)(u);(0,m.A)(O,N)(v)}return(0,l.A)(u)},__getMonacoInstance:function(){return d(function(i){return i.monaco})}};g.A=p},152:function(R,g){g.A=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(r){return n.reduceRight(function(a,m){return m(a)},r)}}},1187:function(R,g){g.A=function(t){return function n(){for(var e=this,r=arguments.length,a=new Array(r),m=0;m<r;m++)a[m]=arguments[m];return a.length>=t.length?t.apply(this,a):function(){for(var h=arguments.length,l=new Array(h),s=0;s<h;s++)l[s]=arguments[s];return n.apply(e,[].concat(a,l))}}}},3134:function(R,g,t){var n=t(1586);g.A=function e(r,a){return Object.keys(a).forEach(function(m){a[m]instanceof Object&&r[m]&&Object.assign(a[m],e(r[m],a[m]))}),(0,n.T1)((0,n.T1)({},r),a)}},4061:function(R,g){g.A=function(t){return{}.toString.call(t).includes("Object")}},786:function(R,g,t){var n={type:"cancelation",msg:"operation is manually canceled"};g.A=function(e){var r=!1,a=new Promise(function(m,h){e.then(function(l){return r?h(n):m(l)}),e.catch(h)});return a.cancel=function(){return r=!0},a}},3912:function(R,g,t){var n=t(1187),e=t(4061),r={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},a=(0,n.A)(function(h,l){throw new Error(h[l]||h.default)})(r),m={config:function(h){return h||a("configIsRequired"),(0,e.A)(h)||a("configType"),h.urls?(console.warn(r.deprecation),{paths:{vs:h.urls.monacoBase}}):h}};g.Ay=m},693:function(R,g,t){function n(s){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n(s)}function e(s,o,d){var E;return E=function(O){if(n(O)!="object"||!O)return O;var N=O[Symbol.toPrimitive];if(N!==void 0){var v=N.call(O,"string");if(n(v)!="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(O)}(o),(o=n(E)=="symbol"?E:String(E))in s?Object.defineProperty(s,o,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[o]=d,s}t.d(g,{Cr:function(){return m},TM:function(){return r},jN:function(){return l}});var r=function(s){return s.Javascript="javascript",s.Typescript="typescript",s}({}),a=e(e({},r.Javascript,function(s){s.languages.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),s.languages.typescript.javascriptDefaults.setCompilerOptions({target:s.languages.typescript.ScriptTarget.ES6,allowNonTsExtensions:!0,noImplicitAny:!0,strict:!0})}),r.Typescript,function(s,o){s.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!!o||!1,noSyntaxValidation:!1}),s.languages.typescript.typescriptDefaults.setCompilerOptions({target:s.languages.typescript.ScriptTarget.ES6,allowNonTsExtensions:!0,noImplicitAny:!1,strict:!1,jsx:s.languages.typescript.JsxEmit.ReactJsx,lib:["es2020","dom","DOM.Iterable"],module:"ESNext",skipLibCheck:!0,esModuleInterop:!0,noEmit:!0,jsxFactory:"React.createElement",reactNamespace:"React"})}),m=function(s){var o;return(o=a[s])!==null&&o!==void 0?o:function(){}},h=e(e({},r.Javascript,function(){return{presets:["env"],comments:!1}}),r.Typescript,function(s){return s?{presets:["env","react"],parserOpts:{strictMode:!1},plugins:[["proposal-decorators",{legacy:!0}],"proposal-class-properties",["transform-typescript",{isTSX:!0}]]}:{presets:["env","typescript"],parserOpts:{strictMode:!1},comments:!1,filename:"types.d.ts"}}),l=function(s){var o;return(o=h[s])!==null&&o!==void 0?o:function(){}}},9728:function(R,g,t){t.d(g,{s:function(){return e}});var n=t(8434),e=function(r,a){var m=new n.w((0,n.f)(),a).highlighterBuilder({editor:r}),h=m.highlighter,l=m.dispose;return h(),r.onDidChangeModelContent(function(){h()}),l}},3039:function(R,g,t){t.d(g,{U:function(){return i}});var n=t(9155),e=t.n(n),r=t(3713),a=t(693),m=t(9728),h=t(7525),l=t(3049),s=t(8347),o=t(6569);function d(c){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},d(c)}function E(){return E=Object.assign?Object.assign.bind():function(c){for(var b=1;b<arguments.length;b++){var x=arguments[b];for(var A in x)Object.prototype.hasOwnProperty.call(x,A)&&(c[A]=x[A])}return c},E.apply(this,arguments)}function O(c,b){var x=Object.keys(c);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(c);b&&(A=A.filter(function(_){return Object.getOwnPropertyDescriptor(c,_).enumerable})),x.push.apply(x,A)}return x}function N(c,b,x){var A;return A=function(_){if(d(_)!="object"||!_)return _;var w=_[Symbol.toPrimitive];if(w!==void 0){var k=w.call(_,"string");if(d(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(_)}(b),(b=d(A)=="symbol"?A:String(A))in c?Object.defineProperty(c,b,{value:x,enumerable:!0,configurable:!0,writable:!0}):c[b]=x,c}function v(){v=function(){return b};var c,b={},x=Object.prototype,A=x.hasOwnProperty,_=Object.defineProperty||function(C,I,z){C[I]=z.value},w=typeof Symbol=="function"?Symbol:{},k=w.iterator||"@@iterator",P=w.asyncIterator||"@@asyncIterator",M=w.toStringTag||"@@toStringTag";function L(C,I,z){return Object.defineProperty(C,I,{value:z,enumerable:!0,configurable:!0,writable:!0}),C[I]}try{L({},"")}catch{L=function(I,z,G){return I[z]=G}}function V(C,I,z,G){var Y=I&&I.prototype instanceof W?I:W,le=Object.create(Y.prototype),se=new y(G||[]);return _(le,"_invoke",{value:fe(C,z,se)}),le}function B(C,I,z){try{return{type:"normal",arg:C.call(I,z)}}catch(G){return{type:"throw",arg:G}}}b.wrap=V;var T="suspendedStart",U="suspendedYield",H="executing",K="completed",J={};function W(){}function q(){}function Z(){}var X={};L(X,k,function(){return this});var ee=Object.getPrototypeOf,pe=ee&&ee(ee(S([])));pe&&pe!==x&&A.call(pe,k)&&(X=pe);var re=Z.prototype=W.prototype=Object.create(X);function ae(C){["next","throw","return"].forEach(function(I){L(C,I,function(z){return this._invoke(I,z)})})}function ie(C,I){function z(Y,le,se,_e){var Se=B(C[Y],C,le);if(Se.type!=="throw"){var Ve=Se.arg,Ye=Ve.value;return Ye&&d(Ye)=="object"&&A.call(Ye,"__await")?I.resolve(Ye.__await).then(function($){z("next",$,se,_e)},function($){z("throw",$,se,_e)}):I.resolve(Ye).then(function($){Ve.value=$,se(Ve)},function($){return z("throw",$,se,_e)})}_e(Se.arg)}var G;_(this,"_invoke",{value:function(Y,le){function se(){return new I(function(_e,Se){z(Y,le,_e,Se)})}return G=G?G.then(se,se):se()}})}function fe(C,I,z){var G=T;return function(Y,le){if(G===H)throw new Error("Generator is already running");if(G===K){if(Y==="throw")throw le;return{value:c,done:!0}}for(z.method=Y,z.arg=le;;){var se=z.delegate;if(se){var _e=D(se,z);if(_e){if(_e===J)continue;return _e}}if(z.method==="next")z.sent=z._sent=z.arg;else if(z.method==="throw"){if(G===T)throw G=K,z.arg;z.dispatchException(z.arg)}else z.method==="return"&&z.abrupt("return",z.arg);G=H;var Se=B(C,I,z);if(Se.type==="normal"){if(G=z.done?K:U,Se.arg===J)continue;return{value:Se.arg,done:z.done}}Se.type==="throw"&&(G=K,z.method="throw",z.arg=Se.arg)}}}function D(C,I){var z=I.method,G=C.iterator[z];if(G===c)return I.delegate=null,z==="throw"&&C.iterator.return&&(I.method="return",I.arg=c,D(C,I),I.method==="throw")||z!=="return"&&(I.method="throw",I.arg=new TypeError("The iterator does not provide a '"+z+"' method")),J;var Y=B(G,C.iterator,I.arg);if(Y.type==="throw")return I.method="throw",I.arg=Y.arg,I.delegate=null,J;var le=Y.arg;return le?le.done?(I[C.resultName]=le.value,I.next=C.nextLoc,I.method!=="return"&&(I.method="next",I.arg=c),I.delegate=null,J):le:(I.method="throw",I.arg=new TypeError("iterator result is not an object"),I.delegate=null,J)}function F(C){var I={tryLoc:C[0]};1 in C&&(I.catchLoc=C[1]),2 in C&&(I.finallyLoc=C[2],I.afterLoc=C[3]),this.tryEntries.push(I)}function j(C){var I=C.completion||{};I.type="normal",delete I.arg,C.completion=I}function y(C){this.tryEntries=[{tryLoc:"root"}],C.forEach(F,this),this.reset(!0)}function S(C){if(C||C===""){var I=C[k];if(I)return I.call(C);if(typeof C.next=="function")return C;if(!isNaN(C.length)){var z=-1,G=function Y(){for(;++z<C.length;)if(A.call(C,z))return Y.value=C[z],Y.done=!1,Y;return Y.value=c,Y.done=!0,Y};return G.next=G}}throw new TypeError(d(C)+" is not iterable")}return q.prototype=Z,_(re,"constructor",{value:Z,configurable:!0}),_(Z,"constructor",{value:q,configurable:!0}),q.displayName=L(Z,M,"GeneratorFunction"),b.isGeneratorFunction=function(C){var I=typeof C=="function"&&C.constructor;return!!I&&(I===q||(I.displayName||I.name)==="GeneratorFunction")},b.mark=function(C){return Object.setPrototypeOf?Object.setPrototypeOf(C,Z):(C.__proto__=Z,L(C,M,"GeneratorFunction")),C.prototype=Object.create(re),C},b.awrap=function(C){return{__await:C}},ae(ie.prototype),L(ie.prototype,P,function(){return this}),b.AsyncIterator=ie,b.async=function(C,I,z,G,Y){Y===void 0&&(Y=Promise);var le=new ie(V(C,I,z,G),Y);return b.isGeneratorFunction(I)?le:le.next().then(function(se){return se.done?se.value:le.next()})},ae(re),L(re,M,"Generator"),L(re,k,function(){return this}),L(re,"toString",function(){return"[object Generator]"}),b.keys=function(C){var I=Object(C),z=[];for(var G in I)z.push(G);return z.reverse(),function Y(){for(;z.length;){var le=z.pop();if(le in I)return Y.value=le,Y.done=!1,Y}return Y.done=!0,Y}},b.values=S,y.prototype={constructor:y,reset:function(C){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(j),!C)for(var I in this)I.charAt(0)==="t"&&A.call(this,I)&&!isNaN(+I.slice(1))&&(this[I]=c)},stop:function(){this.done=!0;var C=this.tryEntries[0].completion;if(C.type==="throw")throw C.arg;return this.rval},dispatchException:function(C){if(this.done)throw C;var I=this;function z(Se,Ve){return le.type="throw",le.arg=C,I.next=Se,Ve&&(I.method="next",I.arg=c),!!Ve}for(var G=this.tryEntries.length-1;G>=0;--G){var Y=this.tryEntries[G],le=Y.completion;if(Y.tryLoc==="root")return z("end");if(Y.tryLoc<=this.prev){var se=A.call(Y,"catchLoc"),_e=A.call(Y,"finallyLoc");if(se&&_e){if(this.prev<Y.catchLoc)return z(Y.catchLoc,!0);if(this.prev<Y.finallyLoc)return z(Y.finallyLoc)}else if(se){if(this.prev<Y.catchLoc)return z(Y.catchLoc,!0)}else{if(!_e)throw new Error("try statement without catch or finally");if(this.prev<Y.finallyLoc)return z(Y.finallyLoc)}}}},abrupt:function(C,I){for(var z=this.tryEntries.length-1;z>=0;--z){var G=this.tryEntries[z];if(G.tryLoc<=this.prev&&A.call(G,"finallyLoc")&&this.prev<G.finallyLoc){var Y=G;break}}Y&&(C==="break"||C==="continue")&&Y.tryLoc<=I&&I<=Y.finallyLoc&&(Y=null);var le=Y?Y.completion:{};return le.type=C,le.arg=I,Y?(this.method="next",this.next=Y.finallyLoc,J):this.complete(le)},complete:function(C,I){if(C.type==="throw")throw C.arg;return C.type==="break"||C.type==="continue"?this.next=C.arg:C.type==="return"?(this.rval=this.arg=C.arg,this.method="return",this.next="end"):C.type==="normal"&&I&&(this.next=I),J},finish:function(C){for(var I=this.tryEntries.length-1;I>=0;--I){var z=this.tryEntries[I];if(z.finallyLoc===C)return this.complete(z.completion,z.afterLoc),j(z),J}},catch:function(C){for(var I=this.tryEntries.length-1;I>=0;--I){var z=this.tryEntries[I];if(z.tryLoc===C){var G=z.completion;if(G.type==="throw"){var Y=G.arg;j(z)}return Y}}throw new Error("illegal catch attempt")},delegateYield:function(C,I,z){return this.delegate={iterator:S(C),resultName:I,nextLoc:z},this.method==="next"&&(this.arg=c),J}},b}function f(c,b,x,A,_,w,k){try{var P=c[w](k),M=P.value}catch(L){return void x(L)}P.done?b(M):Promise.resolve(M).then(A,_)}function u(c,b){return function(x){if(Array.isArray(x))return x}(c)||function(x,A){var _=x==null?null:typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"];if(_!=null){var w,k,P,M,L=[],V=!0,B=!1;try{if(P=(_=_.call(x)).next,A!==0)for(;!(V=(w=P.call(_)).done)&&(L.push(w.value),L.length!==A);V=!0);}catch(T){B=!0,k=T}finally{try{if(!V&&_.return!=null&&(M=_.return(),Object(M)!==M))return}finally{if(B)throw k}}return L}}(c,b)||function(x,A){if(x){if(typeof x=="string")return p(x,A);var _=Object.prototype.toString.call(x).slice(8,-1);return _==="Object"&&x.constructor&&(_=x.constructor.name),_==="Map"||_==="Set"?Array.from(x):_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)?p(x,A):void 0}}(c,b)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function p(c,b){(b==null||b>c.length)&&(b=c.length);for(var x=0,A=new Array(b);x<b;x++)A[x]=c[x];return A}t(2522);var i=(0,n.forwardRef)(function(c,b){var x,A=(0,l.h1)(h.r,c),_=A.extraLib,w=A.language,k=A.defaultLanguage,P=A.isTsx,M=A.loaderConfig,L=A.eslint,V=A.theme,B=A.babel,T=w??k,U=u((0,n.useState)(!1),2),H=U[0],K=U[1],J=(0,n.useRef)(),W=(0,n.useRef)([]),q=(0,r.dJ)(),Z=(0,n.useRef)(),X=(0,n.useRef)(null);(0,n.useImperativeHandle)(b,function(){return{monaco:q,editor:J.current,format:function(){J.current&&J.current._actions.get("editor.action.formatDocument")._run()},compile:function(ie,fe){return(D=v().mark(function F(){var j,y,S,C,I,z,G;return v().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(ie&&[a.TM.Javascript,a.TM.Typescript].includes(T)){Y.next=2;break}return Y.abrupt("return",ie);case 2:return Y.prev=2,Y.next=5,(0,l.ZW)(B==null?void 0:B.standalone);case 5:return S=Y.sent,C=(0,a.jN)(T),I=C(P),z=S.transform(ie,(j=(y=B==null?void 0:B.options)!==null&&y!==void 0?y:fe)!==null&&j!==void 0?j:I),G=z.code,Y.abrupt("return",G);case 12:throw Y.prev=12,Y.t0=Y.catch(2),Y.t0;case 15:case"end":return Y.stop()}},F,null,[[2,12]])}),function(){var F=this,j=arguments;return new Promise(function(y,S){var C=D.apply(F,j);function I(G){f(C,y,S,I,z,"next",G)}function z(G){f(C,y,S,I,z,"throw",G)}I(void 0)})})();var D}}},[q,T,P,B,H]),(0,n.useLayoutEffect)(function(){M&&r.wG.config(M)},[M]),(0,n.useEffect)(function(){[a.TM.Javascript,a.TM.Typescript].includes(T)&&q&&((0,a.Cr)(T)(q,P),_&&q.languages.typescript.typescriptDefaults.addExtraLib(_,"ts:filename/facts.d.ts"))},[q,_,T,P]),(0,n.useEffect)(function(){if(q&&H&&P){var ie=(0,m.s)(J.current,q);return function(){typeof ie=="function"&&ie()}}},[q,P,H]),(0,n.useEffect)(function(){var ie=X.current.nextElementSibling.querySelector(".jsx-editor"),fe=o.r[V];if(ie&&fe)for(var D=0,F=Object.entries(fe);D<F.length;D++){var j=u(F[D],2),y=j[0],S=j[1];ie.style.setProperty(y,S)}},[V]);var ee=(0,n.useCallback)(function(ie){if(q&&J.current&&Z.current&&ie&&T===a.TM.Javascript){var fe=J.current.getModel(),D=Z.current.verify(ie,function(F){for(var j=1;j<arguments.length;j++){var y=arguments[j]!=null?arguments[j]:{};j%2?O(Object(y),!0).forEach(function(S){N(F,S,y[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(y)):O(Object(y)).forEach(function(S){Object.defineProperty(F,S,Object.getOwnPropertyDescriptor(y,S))})}return F}({env:{browser:!0,es6:!0},parserOptions:{ecmaVersion:2018,ecmaFeatures:{jsx:!0},sourceType:"module"}},L==null?void 0:L.config)).map(function(F){var j=F.line,y=F.column,S=F.message;return{startLineNumber:j,endLineNumber:j,startColumn:y,endColumn:y,message:"".concat(S),severity:3}});q.editor.setModelMarkers(fe,"ESlint",D)}},[H,L,q,T]),pe=(0,n.useCallback)(function(ie){typeof A.onFocus=="function"&&A.onFocus(ie)},[A.onFocus]),re=(0,n.useCallback)(function(ie){typeof A.onBlur=="function"&&A.onBlur(ie)},[A.onBlur]),ae=(0,n.useCallback)(function(ie,fe){ee(ie),typeof A.onChange=="function"&&A.onChange(ie,fe)},[A.onChange]);return e().createElement(e().Fragment,null,e().createElement("div",{"data-element-type":"themeTag",ref:X}),e().createElement(r.KE,E({},A,{onMount:function(ie,fe){K(!0),ie.addCommand(fe.KeyMod.CtrlCmd|fe.KeyCode.KeyS,function(){var D=ie.getValue();ae(D,null)}),W.current=(0,s.B)(ie,[{name:"onDidFocusEditorText",callback:function(){pe(ie)}},{name:"onDidBlurEditorText",callback:function(){re(ie)}}],W.current),typeof A.onMount=="function"&&A.onMount(ie,fe),J.current=ie,queueMicrotask(function(){(0,l.tI)(L==null?void 0:L.src).then(function(D){Z.current=D,ee(ie.getValue())})})},onChange:ae,className:"".concat((x=A.className)!==null&&x!==void 0?x:""," ").concat(P?"jsx-editor":"")})))})},6569:function(R,g,t){function n(m){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},n(m)}function e(m,h,l){var s;return s=function(o){if(n(o)!="object"||!o)return o;var d=o[Symbol.toPrimitive];if(d!==void 0){var E=d.call(o,"string");if(n(E)!="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(h),(h=n(s)=="symbol"?s:String(s))in m?Object.defineProperty(m,h,{value:l,enumerable:!0,configurable:!0,writable:!0}):m[h]=l,m}t.d(g,{r:function(){return a}});var r=function(m){return m.Dark="vs-dark",m.Light="light",m}({}),a=e(e({},r.Dark,{"--string-color":"#e37a11","--language-keyword-color":"#619ac3","--global-variable-color":"#fae56e","--local-variable-color":"#fae56e","--unused-opacity":.5,"--grammar-color":"#369b99","--jsx-tag-color":"#4595ce","--jsx-attribute-color":"#afd5f1","--jsx-text-color":"#efeeee","--jsx-tag-angle-bracket":"#888"}),r.Light,{"--string-color":"#c96705","--language-keyword-color":"#619ac3","--global-variable-color":"#934d08","--local-variable-color":"#934d08","--unused-opacity":.5,"--grammar-color":"#369b99","--jsx-tag-color":"#f27b0c","--jsx-attribute-color":"#f94f20","--jsx-text-color":"#333","--jsx-tag-angle-bracket":"#888"})},7525:function(R,g,t){t.d(g,{r:function(){return n}});var n={theme:"vs-dark",width:"100%",height:"100%",path:"file:///index.tsx",options:{automaticLayout:!0,detectIndentation:!1,formatOnType:!1,lineNumbers:"on",scrollbar:{horizontal:"hidden",vertical:"hidden",verticalScrollbarSize:0},lineNumbersMinChars:3,lineDecorationsWidth:0,minimap:{enabled:!1},fontSize:14,tabSize:2},loaderConfig:{paths:{vs:"https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/monaco-editor/0.45.0/min/vs"}},eslint:{src:"https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/eslint/8.15.0/eslint.js",config:{env:{browser:!0,es6:!0},parserOptions:{ecmaVersion:2018,sourceType:"module"}}}}},8347:function(R,g,t){t.d(g,{B:function(){return n}});var n=function(e,r,a){return a.length&&a.forEach(function(m){return m.dispose()}),r.forEach(function(m){var h=m.name,l=m.callback;a.push(e[h](l))}),a}},7687:function(R,g,t){var n=t(9155),e=t.n(n),r=t(1862),a=t(6342),m=t(3039),h=t(3049),l=t(553),s=t(9552),o=["value","modal","comment","toolbar","children"];function d(){return d=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var i=arguments[p];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(u[c]=i[c])}return u},d.apply(this,arguments)}function E(u,p){return function(i){if(Array.isArray(i))return i}(u)||function(i,c){var b=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(b!=null){var x,A,_,w,k=[],P=!0,M=!1;try{if(_=(b=b.call(i)).next,c!==0)for(;!(P=(x=_.call(b)).done)&&(k.push(x.value),k.length!==c);P=!0);}catch(L){M=!0,A=L}finally{try{if(!P&&b.return!=null&&(w=b.return(),Object(w)!==w))return}finally{if(M)throw A}}return k}}(u,p)||O(u,p)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function O(u,p){if(u){if(typeof u=="string")return N(u,p);var i=Object.prototype.toString.call(u).slice(8,-1);return i==="Object"&&u.constructor&&(i=u.constructor.name),i==="Map"||i==="Set"?Array.from(u):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?N(u,p):void 0}}function N(u,p){(p==null||p>u.length)&&(p=u.length);for(var i=0,c=new Array(p);i<p;i++)c[i]=u[i];return c}var v=r.A.Icon,f=function(u,p){var i=u.value,c=u.modal,b=u.comment,x=u.toolbar,A=u.children,_=function(q,Z){if(q==null)return{};var X,ee,pe=function(ae,ie){if(ae==null)return{};var fe,D,F={},j=Object.keys(ae);for(D=0;D<j.length;D++)fe=j[D],ie.indexOf(fe)>=0||(F[fe]=ae[fe]);return F}(q,Z);if(Object.getOwnPropertySymbols){var re=Object.getOwnPropertySymbols(q);for(ee=0;ee<re.length;ee++)X=re[ee],Z.indexOf(X)>=0||Object.prototype.propertyIsEnumerable.call(q,X)&&(pe[X]=q[X])}return pe}(u,o),w=E((0,n.useState)(!(c==null||!c.open)),2),k=w[0],P=w[1],M=E((0,n.useState)(function(){return i}),2),L=M[0],V=M[1];(0,l.x)(function(){P(!(c==null||!c.open))},[c==null?void 0:c.open]),(0,l.x)(function(){V(i)},[i]);var B=(0,n.useMemo)(function(){return e().createElement(m.U,d({},_,{value:L,ref:p}))},[_,L,p]),T=(0,n.useMemo)(function(){var q,Z,X,ee=Math.floor(10*Math.random());return b!=null&&b.value?e().createElement(m.U,d({},_,{value:b.value,options:{readOnly:!0,lineNumbers:"off",fontSize:(q=_.options)===null||q===void 0?void 0:q.fontSize},height:(Z=(X=b.height)!==null&&X!==void 0?X:_.height)!==null&&Z!==void 0?Z:300,path:"".concat(ee,"_comment.ts")})):null},[_,b,_.theme]),U=(0,n.useCallback)(function(){if(p.current.editor){var q=p.current.editor.getValue();V(q)}},[]),H=(0,n.useCallback)(function(){(0,h.$f)([U,function(){return P(!0)}]),typeof(c==null?void 0:c.onOpen)=="function"&&c.onOpen()},[c==null?void 0:c.onOpen]),K=(0,n.useCallback)(function(){(0,h.$f)([U,function(){return P(!1)}]),typeof(c==null?void 0:c.onClose)=="function"&&c.onClose()},[c==null?void 0:c.onClose]),J=(0,n.useMemo)(function(){if(!x)return null;var q,Z=function(X){if(Array.isArray(X))return N(X)}(q=n.Children.toArray(x))||function(X){if(typeof Symbol<"u"&&X[Symbol.iterator]!=null||X["@@iterator"]!=null)return Array.from(X)}(q)||O(q)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}();return c&&!k&&Z.push(e().createElement(v,{name:"plus",onClick:H})),e().createElement(a.A,null,Z)},[c,k,x]),W=(0,n.useMemo)(function(){var q;return(0,n.isValidElement)(A)?"fit-content":(q=_.height)!==null&&q!==void 0?q:500},[A,_.height]);return e().createElement("div",{className:s.A.wrap,style:{height:W}},k&&e().createElement(r.A,d({draggable:!0,contentClassName:s.A["dialog-content"]},c,{open:k,footer:T,onClose:K}),B,J),A,!k&&!A&&e().createElement(e().Fragment,null,B,J))};g.A=(0,n.forwardRef)(f)},553:function(R,g,t){t.d(g,{x:function(){return e}});var n=t(9155),e=function(r,a){(0,n.useEffect)(r,a)}},6342:function(R,g,t){var n=t(9155),e=t.n(n),r=t(9877);g.A=function(a){var m=a.children;return e().createElement("div",{className:r.A.toolbar},m)}},5985:function(R,g,t){t.d(g,{I:function(){return e}});var n=t(7687),e=t(1862).A.Icon;g.A=n.A},3049:function(R,g,t){function n(){n=function(){return f};var v,f={},u=Object.prototype,p=u.hasOwnProperty,i=Object.defineProperty||function(D,F,j){D[F]=j.value},c=typeof Symbol=="function"?Symbol:{},b=c.iterator||"@@iterator",x=c.asyncIterator||"@@asyncIterator",A=c.toStringTag||"@@toStringTag";function _(D,F,j){return Object.defineProperty(D,F,{value:j,enumerable:!0,configurable:!0,writable:!0}),D[F]}try{_({},"")}catch{_=function(F,j,y){return F[j]=y}}function w(D,F,j,y){var S=F&&F.prototype instanceof T?F:T,C=Object.create(S.prototype),I=new ie(y||[]);return i(C,"_invoke",{value:ee(D,j,I)}),C}function k(D,F,j){try{return{type:"normal",arg:D.call(F,j)}}catch(y){return{type:"throw",arg:y}}}f.wrap=w;var P="suspendedStart",M="suspendedYield",L="executing",V="completed",B={};function T(){}function U(){}function H(){}var K={};_(K,b,function(){return this});var J=Object.getPrototypeOf,W=J&&J(J(fe([])));W&&W!==u&&p.call(W,b)&&(K=W);var q=H.prototype=T.prototype=Object.create(K);function Z(D){["next","throw","return"].forEach(function(F){_(D,F,function(j){return this._invoke(F,j)})})}function X(D,F){function j(S,C,I,z){var G=k(D[S],D,C);if(G.type!=="throw"){var Y=G.arg,le=Y.value;return le&&h(le)=="object"&&p.call(le,"__await")?F.resolve(le.__await).then(function(se){j("next",se,I,z)},function(se){j("throw",se,I,z)}):F.resolve(le).then(function(se){Y.value=se,I(Y)},function(se){return j("throw",se,I,z)})}z(G.arg)}var y;i(this,"_invoke",{value:function(S,C){function I(){return new F(function(z,G){j(S,C,z,G)})}return y=y?y.then(I,I):I()}})}function ee(D,F,j){var y=P;return function(S,C){if(y===L)throw new Error("Generator is already running");if(y===V){if(S==="throw")throw C;return{value:v,done:!0}}for(j.method=S,j.arg=C;;){var I=j.delegate;if(I){var z=pe(I,j);if(z){if(z===B)continue;return z}}if(j.method==="next")j.sent=j._sent=j.arg;else if(j.method==="throw"){if(y===P)throw y=V,j.arg;j.dispatchException(j.arg)}else j.method==="return"&&j.abrupt("return",j.arg);y=L;var G=k(D,F,j);if(G.type==="normal"){if(y=j.done?V:M,G.arg===B)continue;return{value:G.arg,done:j.done}}G.type==="throw"&&(y=V,j.method="throw",j.arg=G.arg)}}}function pe(D,F){var j=F.method,y=D.iterator[j];if(y===v)return F.delegate=null,j==="throw"&&D.iterator.return&&(F.method="return",F.arg=v,pe(D,F),F.method==="throw")||j!=="return"&&(F.method="throw",F.arg=new TypeError("The iterator does not provide a '"+j+"' method")),B;var S=k(y,D.iterator,F.arg);if(S.type==="throw")return F.method="throw",F.arg=S.arg,F.delegate=null,B;var C=S.arg;return C?C.done?(F[D.resultName]=C.value,F.next=D.nextLoc,F.method!=="return"&&(F.method="next",F.arg=v),F.delegate=null,B):C:(F.method="throw",F.arg=new TypeError("iterator result is not an object"),F.delegate=null,B)}function re(D){var F={tryLoc:D[0]};1 in D&&(F.catchLoc=D[1]),2 in D&&(F.finallyLoc=D[2],F.afterLoc=D[3]),this.tryEntries.push(F)}function ae(D){var F=D.completion||{};F.type="normal",delete F.arg,D.completion=F}function ie(D){this.tryEntries=[{tryLoc:"root"}],D.forEach(re,this),this.reset(!0)}function fe(D){if(D||D===""){var F=D[b];if(F)return F.call(D);if(typeof D.next=="function")return D;if(!isNaN(D.length)){var j=-1,y=function S(){for(;++j<D.length;)if(p.call(D,j))return S.value=D[j],S.done=!1,S;return S.value=v,S.done=!0,S};return y.next=y}}throw new TypeError(h(D)+" is not iterable")}return U.prototype=H,i(q,"constructor",{value:H,configurable:!0}),i(H,"constructor",{value:U,configurable:!0}),U.displayName=_(H,A,"GeneratorFunction"),f.isGeneratorFunction=function(D){var F=typeof D=="function"&&D.constructor;return!!F&&(F===U||(F.displayName||F.name)==="GeneratorFunction")},f.mark=function(D){return Object.setPrototypeOf?Object.setPrototypeOf(D,H):(D.__proto__=H,_(D,A,"GeneratorFunction")),D.prototype=Object.create(q),D},f.awrap=function(D){return{__await:D}},Z(X.prototype),_(X.prototype,x,function(){return this}),f.AsyncIterator=X,f.async=function(D,F,j,y,S){S===void 0&&(S=Promise);var C=new X(w(D,F,j,y),S);return f.isGeneratorFunction(F)?C:C.next().then(function(I){return I.done?I.value:C.next()})},Z(q),_(q,A,"Generator"),_(q,b,function(){return this}),_(q,"toString",function(){return"[object Generator]"}),f.keys=function(D){var F=Object(D),j=[];for(var y in F)j.push(y);return j.reverse(),function S(){for(;j.length;){var C=j.pop();if(C in F)return S.value=C,S.done=!1,S}return S.done=!0,S}},f.values=fe,ie.prototype={constructor:ie,reset:function(D){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(ae),!D)for(var F in this)F.charAt(0)==="t"&&p.call(this,F)&&!isNaN(+F.slice(1))&&(this[F]=v)},stop:function(){this.done=!0;var D=this.tryEntries[0].completion;if(D.type==="throw")throw D.arg;return this.rval},dispatchException:function(D){if(this.done)throw D;var F=this;function j(G,Y){return C.type="throw",C.arg=D,F.next=G,Y&&(F.method="next",F.arg=v),!!Y}for(var y=this.tryEntries.length-1;y>=0;--y){var S=this.tryEntries[y],C=S.completion;if(S.tryLoc==="root")return j("end");if(S.tryLoc<=this.prev){var I=p.call(S,"catchLoc"),z=p.call(S,"finallyLoc");if(I&&z){if(this.prev<S.catchLoc)return j(S.catchLoc,!0);if(this.prev<S.finallyLoc)return j(S.finallyLoc)}else if(I){if(this.prev<S.catchLoc)return j(S.catchLoc,!0)}else{if(!z)throw new Error("try statement without catch or finally");if(this.prev<S.finallyLoc)return j(S.finallyLoc)}}}},abrupt:function(D,F){for(var j=this.tryEntries.length-1;j>=0;--j){var y=this.tryEntries[j];if(y.tryLoc<=this.prev&&p.call(y,"finallyLoc")&&this.prev<y.finallyLoc){var S=y;break}}S&&(D==="break"||D==="continue")&&S.tryLoc<=F&&F<=S.finallyLoc&&(S=null);var C=S?S.completion:{};return C.type=D,C.arg=F,S?(this.method="next",this.next=S.finallyLoc,B):this.complete(C)},complete:function(D,F){if(D.type==="throw")throw D.arg;return D.type==="break"||D.type==="continue"?this.next=D.arg:D.type==="return"?(this.rval=this.arg=D.arg,this.method="return",this.next="end"):D.type==="normal"&&F&&(this.next=F),B},finish:function(D){for(var F=this.tryEntries.length-1;F>=0;--F){var j=this.tryEntries[F];if(j.finallyLoc===D)return this.complete(j.completion,j.afterLoc),ae(j),B}},catch:function(D){for(var F=this.tryEntries.length-1;F>=0;--F){var j=this.tryEntries[F];if(j.tryLoc===D){var y=j.completion;if(y.type==="throw"){var S=y.arg;ae(j)}return S}}throw new Error("illegal catch attempt")},delegateYield:function(D,F,j){return this.delegate={iterator:fe(D),resultName:F,nextLoc:j},this.method==="next"&&(this.arg=v),B}},f}function e(v,f,u,p,i,c,b){try{var x=v[c](b),A=x.value}catch(_){return void u(_)}x.done?f(A):Promise.resolve(A).then(p,i)}function r(v){return function(){var f=this,u=arguments;return new Promise(function(p,i){var c=v.apply(f,u);function b(A){e(c,p,i,b,x,"next",A)}function x(A){e(c,p,i,b,x,"throw",A)}b(void 0)})}}function a(v){return function(f){if(Array.isArray(f))return m(f)}(v)||function(f){if(typeof Symbol<"u"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}(v)||function(f,u){if(f){if(typeof f=="string")return m(f,u);var p=Object.prototype.toString.call(f).slice(8,-1);return p==="Object"&&f.constructor&&(p=f.constructor.name),p==="Map"||p==="Set"?Array.from(f):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?m(f,u):void 0}}(v)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(v,f){(f==null||f>v.length)&&(f=v.length);for(var u=0,p=new Array(f);u<f;u++)p[u]=v[u];return p}function h(v){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},h(v)}function l(v){return Object.prototype.toString.call(v)==="[object Object]"}t.d(g,{$f:function(){return N},ZW:function(){return E},h1:function(){return o},tI:function(){return O}});var s=function v(f){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new WeakMap;if(!l(f))throw TypeError("arguments must be Object");if(u.has(f))return u.get(f);for(var p={},i=0,c=Object.keys(f);i<c.length;i++){var b=c[i],x=f[b];h(x)!=="object"||x===null?p[b]=x:Array.isArray(x)?p[b]=a(x):x instanceof Set?p[b]=new Set(a(x)):x instanceof Map?p[b]=new Map(a(x)):(u.set(x,x),p[b]=v(x,u))}return p};function o(v,f){if(!l(v))return f;if(!l(f))return v;var u=s(v),p=s(f);return Object.keys(p).forEach(function(i){var c=u[i],b=p[i];Array.isArray(c)&&Array.isArray(b)?u[i]=c.concat(b):l(c)&&l(b)?u[i]=o(c,b):u[i]=b??u[i]}),u}function d(v){return typeof window.define=="function"&&window.define.amd&&(console.log("%c".concat("@mybricks/coder"),"background: #FA6400;color: #fff;padding: 2px 6px;border-radius: 4px;","@0.0.34"),Reflect.deleteProperty(window.define,"amd")),new Promise(function(f,u){var p=document.createElement("script");p.src=v,p.crossOrigin="anonymous",p.onload=function(i){f(null)},p.onerror=u,document.body.appendChild(p)})}var E=function(){var v=r(n().mark(function f(){var u,p=arguments;return n().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(u=p.length>0&&p[0]!==void 0?p[0]:"https://unpkg.com/@babel/standalone/babel.min.js",window.Babel){i.next=5;break}return console.info("%c[Babel was not found in global,loading babel...]","color: orange"),i.next=5,d(u);case 5:return i.abrupt("return",window.Babel);case 6:case"end":return i.stop()}},f)}));return function(){return v.apply(this,arguments)}}(),O=function(){var v=r(n().mark(function f(u){var p;return n().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(u){i.next=2;break}return i.abrupt("return");case 2:if(window.eslint){i.next=5;break}return i.next=5,d(u);case 5:return p=window.eslint.Linter,i.abrupt("return",new p);case 7:case"end":return i.stop()}},f)}));return function(f){return v.apply(this,arguments)}}(),N=function(v){v.reduce(function(f,u){return f.then(u)},Promise.resolve())}},9267:function(R){R.exports=function(g){var t=[];return t.toString=function(){return this.map(function(n){var e=g(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e}).join("")},t.i=function(n,e,r){typeof n=="string"&&(n=[[null,n,""]]);var a={};if(r)for(var m=0;m<this.length;m++){var h=this[m][0];h!=null&&(a[h]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&a[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},8434:function(R,g,t){t.d(g,{f:function(){return e},w:function(){return r}});var n={worker:`/******************************************************************************\r
Copyright (c) Microsoft Corporation.\r
\r
Permission to use, copy, modify, and/or distribute this software for any\r
purpose with or without fee is hereby granted.\r
\r
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r
PERFORMANCE OF THIS SOFTWARE.\r
***************************************************************************** */\r
\r
var __assign = function() {\r
    __assign = Object.assign || function __assign(t) {\r
        for (var s, i = 1, n = arguments.length; i < n; i++) {\r
            s = arguments[i];\r
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r
        }\r
        return t;\r
    };\r
    return __assign.apply(this, arguments);\r
};

var getTypescriptUrl=function(){var t="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.6.4/typescript.min.js";try{return __TYPESCRIPT_CUSTOM_URL__||t}catch(r){return t}};self.importScripts([getTypescriptUrl()]);var Typescript=self.ts;

var JsxToken={angleBracket:"jsx-tag-angle-bracket",attributeKey:"jsx-tag-attribute-key",tagName:"jsx-tag-name",expressionBraces:"jsx-expression-braces",text:"jsx-text",orderTokenPrefix:"jsx-tag-order"};

var getRowAndColumn=function(n,o){for(var t=0,e=0;e+o[t]<n;)e+=o[t],t+=1;return {row:t+1,column:n-e}};var getNodeRange=function(n){return "function"==typeof n.getStart&&"function"==typeof n.getEnd?[n.getStart(),n.getEnd()]:void 0!==n.pos&&void 0!==n.end?[n.pos,n.end]:[0,0]};var calcPosition=function(n,o){var t=getNodeRange(n),e=t[0],r=t[1];return {indexes:[e,r],positions:[getRowAndColumn(e+1,o),getRowAndColumn(r,o)]}};

var disposeJsxElementOrFragment=function(n){var s=n.node,e=n.lines,t=n.classifications,o=n.config,a=n.context,i="".concat(JsxToken.orderTokenPrefix,"-").concat(a.jsxTagOrder);if(a.jsxTagOrder=a.jsxTagOrder+1>o.jsxTagCycle?1:a.jsxTagOrder+1,s.kind===Typescript.SyntaxKind.JsxSelfClosingElement){var r=calcPosition(s,e).positions,c=calcPosition(s.tagName,e).positions;t.push({start:r[0],end:r[0],tokens:[JsxToken.angleBracket,i]}),t.push({start:__assign(__assign({},r[1]),{column:r[1].column-1}),end:r[1],tokens:[JsxToken.angleBracket,i]}),t.push({start:c[0],end:c[1],tokens:[JsxToken.tagName,i]});}else {var p=s.kind===Typescript.SyntaxKind.JsxFragment?s.openingFragment:s.openingElement,g=s.kind===Typescript.SyntaxKind.JsxFragment?s.closingFragment:s.closingElement,l=calcPosition(p,e).positions,k=calcPosition(g,e).positions;if(t.push({start:l[0],end:l[0],tokens:[JsxToken.angleBracket,i]}),t.push({start:l[1],end:l[1],tokens:[JsxToken.angleBracket,i]}),t.push({start:k[0],end:__assign(__assign({},k[0]),{column:k[0].column+1}),tokens:[JsxToken.angleBracket,i]}),t.push({start:k[1],end:k[1],tokens:[JsxToken.angleBracket,i]}),s.kind===Typescript.SyntaxKind.JsxElement){var m=calcPosition(p.tagName,e).positions,x=calcPosition(g.tagName,e).positions;t.push({start:m[0],end:m[1],tokens:[JsxToken.tagName,i]}),t.push({start:x[0],end:x[1],tokens:[JsxToken.tagName,i]});}}};

var disposeJsxAttributeKey=function(o){var t=o.node,i=o.lines,s=o.classifications,e=calcPosition(t,i).positions;s.push({start:e[0],end:e[1],tokens:[JsxToken.attributeKey]});};

var disposeJsxExpression=function(s){var o=s.node,e=s.lines,n=s.classifications,i=calcPosition(o,e).positions;n.push({start:i[0],end:i[0],tokens:[JsxToken.expressionBraces]}),n.push({start:i[1],end:i[1],tokens:[JsxToken.expressionBraces]});};

var disposeJsxText=function(o){var s=o.node,i=o.lines,t=o.classifications,n=calcPosition(s,i).positions;t.push({start:n[0],end:n[1],tokens:[JsxToken.text]});};

var disposeNode=function(e){var s=e.node,i=e.index;[Typescript.SyntaxKind.JsxFragment,Typescript.SyntaxKind.JsxElement,Typescript.SyntaxKind.JsxSelfClosingElement].includes(s.kind)&&disposeJsxElementOrFragment(e),s.parent&&s.parent.kind===Typescript.SyntaxKind.JsxAttribute&&s.kind===Typescript.SyntaxKind.Identifier&&0===i&&disposeJsxAttributeKey(e),s.kind===Typescript.SyntaxKind.JsxExpression&&disposeJsxExpression(e),s.kind===Typescript.SyntaxKind.JsxText&&disposeJsxText(e);},walkAST=function(e){disposeNode(e);var s=0;Typescript.forEachChild(e.node,(function(i){return walkAST(__assign(__assign({},e),{node:i,index:s++}))}));},withDefaultConfig=function(e){var s=(e||{}).jsxTagCycle;return {jsxTagCycle:void 0===s?3:s}};var analysis=function(e,s,i){try{var t=[],n=Typescript.createSourceFile(e,s,Typescript.ScriptTarget.ES2020,!0),r=s.split("\\n").map((function(e){return e.length+1}));return walkAST({node:n,lines:r,context:{jsxTagOrder:1},classifications:t,config:withDefaultConfig(i),index:0}),t}catch(e){return (null==i?void 0:i.enableConsole)&&console.error(e),[]}};

self.addEventListener("message",(function(s){var a=s.data,e=a.code,i=a.filePath,n=a.version,o=a.config;try{var l=analysis(i,e,o);self.postMessage({classifications:l,version:n,filePath:i});}catch(s){(null==o?void 0:o.enableConsole)&&console.error(s);}}));
`},e=function(){return n},r=function(a,m,h){var l=this;this.createWorkerFromPureString=function(s,o){var d;window.URL=window.URL||window.webkitURL,s=s.replace("__TYPESCRIPT_CUSTOM_URL__",o!=null&&o.customTypescriptUrl?"'".concat(o==null?void 0:o.customTypescriptUrl,"'"):"undefined");try{d=new Blob([s],{type:"application/javascript"})}catch{window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder,(d=new window.BlobBuilder).append(s),d=d.getBlob()}var E=new Worker(URL.createObjectURL(d));return URL.revokeObjectURL(d),E},this.highlighterBuilder=function(s){var o=s.editor,d=s.filePath,E=d===void 0?o.getModel().uri.toString():d,O={current:[]},N=function(v){var f=v.data,u=f.classifications,p=f.version,i=f.filePath;requestAnimationFrame(function(){if(i===E&&p===o.getModel().getVersionId()){var c=O.current;O.current=o.deltaDecorations(c,u.map(function(b){return{range:new l.monaco.Range(b.start.row,b.start.column,b.end.row,b.end.column+1),options:{inlineClassName:b.tokens.join(" ")}}}))}})};return l.worker.addEventListener("message",N),{highlighter:function(v){requestAnimationFrame(function(){var f=v||o.getModel().getValue();l.worker.postMessage({code:f,filePath:E,version:o.getModel().getVersionId()})})},dispose:function(){l.worker.removeEventListener("message",N)}}},this.monaco=m,typeof a=="string"?this.worker=new Worker(a):a.worker&&typeof a.worker=="string"?this.worker=this.createWorkerFromPureString(a.worker,h):this.worker=a}},8733:function(R,g){function t(f,u,p){return u in f?Object.defineProperty(f,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):f[u]=p,f}function n(f,u){var p=Object.keys(f);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(f);u&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(f,c).enumerable})),p.push.apply(p,i)}return p}function e(f){for(var u=1;u<arguments.length;u++){var p=arguments[u]!=null?arguments[u]:{};u%2?n(Object(p),!0).forEach(function(i){t(f,i,p[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(p)):n(Object(p)).forEach(function(i){Object.defineProperty(f,i,Object.getOwnPropertyDescriptor(p,i))})}return f}function r(f){return function u(){for(var p=this,i=arguments.length,c=new Array(i),b=0;b<i;b++)c[b]=arguments[b];return c.length>=f.length?f.apply(this,c):function(){for(var x=arguments.length,A=new Array(x),_=0;_<x;_++)A[_]=arguments[_];return u.apply(p,[].concat(c,A))}}}function a(f){return{}.toString.call(f).includes("Object")}function m(f){return typeof f=="function"}var h=r(function(f,u){throw new Error(f[u]||f.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),l=function(f,u){return a(u)||h("changeType"),Object.keys(u).some(function(p){return i=f,c=p,!Object.prototype.hasOwnProperty.call(i,c);var i,c})&&h("changeField"),u},s=function(f){m(f)||h("selectorType")},o=function(f){m(f)||a(f)||h("handlerType"),a(f)&&Object.values(f).some(function(u){return!m(u)})&&h("handlersType")},d=function(f){var u;f||h("initialIsRequired"),a(f)||h("initialType"),u=f,Object.keys(u).length||h("initialContent")};function E(f,u){return m(u)?u(f.current):u}function O(f,u){return f.current=e(e({},f.current),u),u}function N(f,u,p){return m(u)?u(f.current):Object.keys(p).forEach(function(i){var c;return(c=u[i])===null||c===void 0?void 0:c.call(u,f.current[i])}),p}var v={create:function(f){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};d(f),o(u);var p={current:f},i=r(N)(p,u),c=r(O)(p),b=r(l)(f),x=r(E)(p);return[function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(_){return _};return s(A),A(p.current)},function(A){(function(){for(var _=arguments.length,w=new Array(_),k=0;k<_;k++)w[k]=arguments[k];return function(P){return w.reduceRight(function(M,L){return L(M)},P)}})(i,c,b,x)(A)}]}};g.A=v},5283:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.jsx-editor {
  --string-color: #e37a11;
  --language-keyword-color: #619ac3;
  --global-variable-color: #fae56e;
  --local-variable-color: #fae56e;
  --unused-opacity: 0.5;
  --grammar-color: #369b99;
  --jsx-tag-color: #4595ce;
  --jsx-attribute-color: #afd5f1;
  --jsx-text-color: #efeeee;
  --jsx-tag-angle-bracket: #888;
  p {
    color: var(--string-color) !important;
  }

  .mtk1 {
    color: var(--local-variable-color);
  }

  .mtk5 {
    color: var(--string-color);
  }

  .mtk8 {
    color: var(--language-keyword-color);
  }

  .mtk9 {
    color: var(--grammar-color);
  }

  .mtk22 {
    color: var(--global-variable-color);
  }

  .monaco-editor.showUnused .squiggly-inline-unnecessary {
    opacity: var(--unused-opacity);
  }

  .jsx-tag-angle-bracket {
    color: var(--jsx-tag-angle-bracket);
  }

  .jsx-tag-name {
    color: var(--jsx-tag-color);
  }

  .jsx-tag-attribute-key {
    color: var(--jsx-attribute-color);
  }

  .jsx-text {
    color: var(--jsx-text-color);
  }
}
`,""]),g.A=e},671:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_collapse_haKdx {
  position: relative;
}
.http_plugin_collapse_haKdx .http_plugin_icon_NfOLM {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 8px 0;
  transition: all 0.35s;
}
.http_plugin_collapse_haKdx .http_plugin_icon_NfOLM::before,
.http_plugin_collapse_haKdx .http_plugin_icon_NfOLM::after {
  display: block;
  width: 50%;
  content: "";
  border-top: 1px dashed #cfcdcd92;
  margin: 0 18px;
}
.http_plugin_collapse_haKdx .http_plugin_collapsed_FWaP\\+ {
  height: 0;
  transition: all 0.35s;
  overflow: hidden;
}
`,""]),e.locals={collapse:"http_plugin_collapse_haKdx",icon:"http_plugin_icon_NfOLM",collapsed:"http_plugin_collapsed_FWaP+"},g.A=e},4134:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_mask_eRPJ6 {
  position: fixed;
  inset: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  overflow: hidden;
}
`,""]),e.locals={mask:"http_plugin_mask_eRPJ6"},g.A=e},5786:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_wrap_s5MHP {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  outline: 0;
}
`,""]),e.locals={wrap:"http_plugin_wrap_s5MHP"},g.A=e},7223:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_dialog_4xLUf {
  position: relative;
  top: 100px;
  padding: 20px 24px;
  background-color: #fff;
  border-radius: 6px;
  margin: 0 auto;
  pointer-events: initial;
  cursor: pointer;
  max-height: 100vh;
  max-width: 100vw;
  overflow: auto;
}
.http_plugin_dialog_4xLUf .http_plugin_dialog-header_tBF2C {
  font-size: 16px;
  font-weight: 500;
  user-select: none;
  line-height: 1.25;
  word-wrap: break-word;
  margin: -20px -24px;
  padding: 20px 24px;
  margin-bottom: 0;
}
.http_plugin_dialog_4xLUf .http_plugin_dialog-content_6JtHe {
  border-radius: 2px;
  position: relative;
}
.http_plugin_dialog_4xLUf .http_plugin_close_CoW4b {
  position: absolute;
  top: 20px;
  right: 20px;
}
.http_plugin_dialog_4xLUf .http_plugin_close_CoW4b svg {
  display: inline-block;
  width: 22px;
  height: 22px;
  line-height: 1;
}
.http_plugin_dialog_4xLUf .http_plugin_close_CoW4b svg:hover path {
  fill: #ff000092;
}
`,""]),e.locals={dialog:"http_plugin_dialog_4xLUf","dialog-header":"http_plugin_dialog-header_tBF2C","dialog-content":"http_plugin_dialog-content_6JtHe",close:"http_plugin_close_CoW4b"},g.A=e},5392:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_icon_Y5N3B {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  -webkit-font-smoothing: antialiased;
}
.http_plugin_icon_Y5N3B:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.35s;
}
.http_plugin_icon_Y5N3B svg {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 1;
}
.http_plugin_icon_Y5N3B svg:hover path {
  fill: #1677ff;
}
`,""]),e.locals={icon:"http_plugin_icon_Y5N3B"},g.A=e},8311:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_wrap_YTanF {
  position: relative;
}
.http_plugin_dialog-content_3Nys0 {
  height: 500px;
}
`,""]),e.locals={wrap:"http_plugin_wrap_YTanF","dialog-content":"http_plugin_dialog-content_3Nys0"},g.A=e},596:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_toolbar_U3P2R {
  position: absolute;
  bottom: 14px;
  right: 18px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  pointer-events: auto;
}
`,""]),e.locals={toolbar:"http_plugin_toolbar_U3P2R"},g.A=e},7679:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`button.http_plugin_btn_35GaF {
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.85);
  border: 1px solid #d9d9d9;
  background: #fff;
  font-size: 12px;
  height: 24px;
  line-height: 1;
  border-radius: 3px;
  padding: 0 10px;
  outline: 0;
  cursor: pointer;
  user-select: none;
}
button.http_plugin_btn_35GaF[type="primary"] {
  color: #fff;
  border-color: #fa6400;
  background-color: #fa6400;
  font-weight: bold;
}
button.http_plugin_btn_35GaF[type="default"] {
  color: #fa6400;
  border-color: #fa6400;
}
.http_plugin_dotTip_Qy4Ky {
  position: absolute;
  top: -1px;
  right: 3px;
  font-size: 12px;
  color: #FFF;
  transform: scale(0.8);
}
`,""]),e.locals={btn:"http_plugin_btn_35GaF",dotTip:"http_plugin_dotTip_Qy4Ky"},g.A=e},4884:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_collapse_BSQER {
  position: relative;
  font-size: 12px;
  height: auto;
  padding: 0 6px 0;
  border-radius: 6px;
  border: 1px solid #eee;
  margin-bottom: 12px;
}
.http_plugin_collapse_BSQER .http_plugin_header_Vv1Ta {
  display: flex;
  height: 30px;
  align-items: center;
  cursor: pointer;
}
.http_plugin_collapse_BSQER .http_plugin_header_Vv1Ta svg {
  max-width: 10px;
}
.http_plugin_collapse_BSQER .http_plugin_header_Vv1Ta .http_plugin_icon_dE9w9 {
  display: flex;
  align-items: center;
  margin-right: 6px;
  transform: rotate(90deg);
}
.http_plugin_collapse_BSQER .http_plugin_header_Vv1Ta .http_plugin_fold_zmH-D {
  transform: rotate(0);
}
.http_plugin_collapse_BSQER .http_plugin_content_Ye5fL {
  height: 100%;
}
`,""]),e.locals={collapse:"http_plugin_collapse_BSQER",header:"http_plugin_header_Vv1Ta",icon:"http_plugin_icon_dE9w9",fold:"http_plugin_fold_zmH-D",content:"http_plugin_content_Ye5fL"},g.A=e},2546:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_dropdown_rYfiS {
  position: relative;
}
.http_plugin_dropdown_rYfiS .http_plugin_content_gokc7 {
  position: absolute;
  z-index: 1;
}
.http_plugin_dropdown_rYfiS:hover .http_plugin_content_gokc7 {
  display: inline-block;
}
`,""]),e.locals={dropdown:"http_plugin_dropdown_rYfiS",content:"http_plugin_content_gokc7"},g.A=e},7322:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_item_bJJv8 {
  display: flex;
  flex-direction: row;
  margin: 14px 0;
  align-items: center;
  font-size: 12px;
  position: relative;
}
.http_plugin_item_bJJv8.http_plugin_labelTop_KUYPc {
  align-items: normal;
}
.http_plugin_item_bJJv8 label {
  flex: 0 0 75px;
  text-align: right;
  padding-right: 5px;
  font-size: 12px;
}
.http_plugin_item_bJJv8 label i {
  font-style: normal;
  color: #FF0000;
}
.http_plugin_item_bJJv8 .http_plugin_editor_F2d0T {
  flex: 1;
  display: flex;
  position: relative;
  padding-left: 6px;
}
.http_plugin_item_bJJv8 .http_plugin_textEdt_5gQ7r input,
.http_plugin_item_bJJv8 .http_plugin_textEdt_5gQ7r textarea {
  border: 1px solid #DDD;
  border-radius: 3px;
  padding: 5px;
  background: #FFF;
  width: 100%;
  line-height: 1;
}
.http_plugin_item_bJJv8 .http_plugin_textEdt_5gQ7r textarea {
  min-height: 50px;
}
.http_plugin_item_bJJv8 .http_plugin_content_ADEiD {
  flex: 1;
  padding-left: 6px;
}
`,""]),e.locals={item:"http_plugin_item_bJJv8",labelTop:"http_plugin_labelTop_KUYPc",editor:"http_plugin_editor_F2d0T",textEdt:"http_plugin_textEdt_5gQ7r",content:"http_plugin_content_ADEiD"},g.A=e},6557:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_input_B1NQM {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
}
.http_plugin_input_B1NQM label {
  width: 75px;
  text-align: right;
  padding-right: 5px;
  font-size: 12px;
}
.http_plugin_input_B1NQM label i {
  font-style: normal;
  color: #FF0000;
}
.http_plugin_input_B1NQM .http_plugin_editor_ipRem {
  flex: 1;
  display: flex;
  position: relative;
}
.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 input,
.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 textarea {
  border: 1px solid #DDD;
  border-radius: 3px;
  padding: 5px;
  background: #FFF;
  width: 100%;
  line-height: 1;
}
.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 input:focus,
.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 textarea:focus {
  outline: 1px solid #fa6400;
}
.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 textarea {
  min-height: 50px;
}
.http_plugin_input_B1NQM .http_plugin_error_bKX\\+F {
  border: 1px solid #FF0000 !important;
  padding: 0;
  margin-bottom: 4px;
}
.http_plugin_input_B1NQM .http_plugin_error_bKX\\+F::after {
  content: attr(data-err);
  color: red;
  position: absolute;
  bottom: -17px;
}
`,""]),e.locals={input:"http_plugin_input_B1NQM",editor:"http_plugin_editor_ipRem",textEdt:"http_plugin_textEdt_3cuh0",error:"http_plugin_error_bKX+F"},g.A=e},6094:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`@keyframes http_plugin_animation_ZEbqT {
  0% {
    top: -20px;
  }
  100% {
    top: 20px;
  }
}
.http_plugin_message_vZqSi {
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 1001;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  pointer-events: all;
  animation: http_plugin_animation_ZEbqT 0.25s;
}
.http_plugin_message_vZqSi > svg {
  flex-shrink: 0;
}
.http_plugin_message_vZqSi .http_plugin_content_IT5bL {
  margin-left: 8px;
}
`,""]),e.locals={message:"http_plugin_message_vZqSi",animation:"http_plugin_animation_ZEbqT",content:"http_plugin_content_IT5bL"},g.A=e},9081:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_sidebarPanelCodeIcon_wIxqH {
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 1;
  cursor: pointer;
}
.http_plugin_sidebarPanelCodeIcon_wIxqH .http_plugin_icon_KS6B\\+ svg {
  width: 16px;
  height: 16px;
}
.http_plugin_sidebarPanelCodeIcon_wIxqH .http_plugin_icon_KS6B\\+ svg path {
  fill: #333;
}
.http_plugin_sidebarPanelCodeIcon_wIxqH .http_plugin_icon_KS6B\\+ svg:hover path {
  fill: #fa6400;
}
.http_plugin_sidebarPanelCodeIcon_wIxqH .http_plugin_icon_KS6B\\+:hover {
  transform: scale(1);
}
.http_plugin_modalContent_6eZvv {
  height: 80vh;
  min-height: 700px;
}
.http_plugin_wrap_SxS2- {
  border: 1px solid #eeee;
  background: #fff;
}
.http_plugin_sidebarPanelCodeIconFull_FEUZW {
  position: fixed;
  top: 48px;
  right: 50px;
  z-index: 10;
  cursor: pointer;
}
.http_plugin_sidebarPanelCodeFull_72i6U {
  position: fixed;
  z-index: 9;
  padding: 40px 42px 26px;
  background-color: rgba(0, 0, 0, 0.45);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.http_plugin_sidebarPanelCodeFull_72i6U .monaco-editor {
  padding-top: 16px;
}
`,""]),e.locals={sidebarPanelCodeIcon:"http_plugin_sidebarPanelCodeIcon_wIxqH",icon:"http_plugin_icon_KS6B+",modalContent:"http_plugin_modalContent_6eZvv",wrap:"http_plugin_wrap_SxS2-",sidebarPanelCodeIconFull:"http_plugin_sidebarPanelCodeIconFull_FEUZW",sidebarPanelCodeFull:"http_plugin_sidebarPanelCodeFull_72i6U"},g.A=e},3687:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_edt_ocZuK {
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  overflow: hidden;
}
.http_plugin_edt_ocZuK .http_plugin_opt_ynQHu {
  padding: 3px 8px;
  font-size: 12px;
  background: #FFF;
  cursor: pointer;
  border: 1px solid #DDD;
  display: flex;
  align-items: center;
}
.http_plugin_edt_ocZuK .http_plugin_opt_ynQHu:not(:last-child) {
  border-right: 1px solid #DDD;
}
.http_plugin_edt_ocZuK .http_plugin_selected_2I6EK {
  background: #616C81;
  color: #FFF;
  font-weight: bold;
  margin: -1px;
}
`,""]),e.locals={edt:"http_plugin_edt_ocZuK",opt:"http_plugin_opt_ynQHu",selected:"http_plugin_selected_2I6EK"},g.A=e},2999:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_ct_VLaxB {
  display: flex;
  align-items: center;
}
.http_plugin_ct_VLaxB label {
  width: 75px;
  text-align: right;
  padding-right: 5px;
  font-size: 12px;
}
.http_plugin_ct_VLaxB label i {
  font-style: normal;
  color: #FF0000;
}
.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL {
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  padding-left: 6px;
  background-color: rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 100px;
  cursor: pointer;
  min-width: 28px;
  height: 16px;
  line-height: 16px;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  transition: all 0.2s;
}
.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL.http_plugin_checked_V90Jh {
  background-color: #fa6400;
}
.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL.http_plugin_checked_V90Jh .http_plugin_handle_56\\+K2 {
  left: initial;
  right: 2px;
}
.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL .http_plugin_handle_56\\+K2 {
  width: 12px;
  height: 12px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  top: 2px;
  left: 2px;
}
.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL .http_plugin_handle_56\\+K2::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  content: '';
}
`,""]),e.locals={ct:"http_plugin_ct_VLaxB",switch:"http_plugin_switch_xQgWL",checked:"http_plugin_checked_V90Jh",handle:"http_plugin_handle_56+K2"},g.A=e},8229:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_hovering_FlAI0 {
  position: relative;
}
.http_plugin_hovering_FlAI0 > div {
  background: rgba(250, 100, 0, 0.1) !important;
}
.http_plugin_hoverTop_uVeJ7,
.http_plugin_hoverBottom_02VbU {
  position: relative;
}
.http_plugin_hoverTop_uVeJ7:before,
.http_plugin_hoverBottom_02VbU:before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #fa6400;
  z-index: 100;
}
.http_plugin_hoverBottom_02VbU:before {
  top: unset;
  bottom: 0;
}
`,""]),e.locals={hovering:"http_plugin_hovering_FlAI0",hoverTop:"http_plugin_hoverTop_uVeJ7",hoverBottom:"http_plugin_hoverBottom_02VbU"},g.A=e},3683:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_pluginPanelContainer_xDTz0 {
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 10px -5px #ddd;
  overflow: hidden;
  width: 560px;
  height: 100%;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 320px;
  background-color: #f7f7f7;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.http_plugin_pluginPanelTitle_sMkvZ {
  font-size: 12px;
  font-weight: bold;
  padding: 0 10px;
  line-height: 50px;
  height: 50px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: text;
}
.http_plugin_pluginPanelContent_PvIPa {
  padding: 0 12px 12px;
  overflow-y: auto;
  height: calc(100% - 32px);
  font-size: 12px;
}
`,""]),e.locals={pluginPanelContainer:"http_plugin_pluginPanelContainer_xDTz0",pluginPanelTitle:"http_plugin_pluginPanelTitle_sMkvZ",pluginPanelContent:"http_plugin_pluginPanelContent_PvIPa"},g.A=e},6874:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_tooltipContainer_yrOMQ {
  position: relative;
}
.http_plugin_tooltipContainer_yrOMQ .http_plugin_tooltip_qQMkl {
  display: none;
}
.http_plugin_tooltipContainer_yrOMQ:hover .http_plugin_tooltip_qQMkl {
  display: block;
  max-width: 250px;
  overflow: hidden;
  position: absolute;
  top: calc(100% + 2px);
  right: 0;
  z-index: 1;
  min-height: 24px;
  height: auto;
  padding: 3px 10px;
  color: #fff;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
  background-color: #616C81;
  border-radius: 4px;
  font-size: 12px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
}
.http_plugin_tooltipContainer_yrOMQ:hover .http_plugin_arrow_A6CLc {
  position: absolute;
  top: calc(100% - 2px);
  opacity: 1;
  right: 50%;
  transform: translate(5px);
  content: '';
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 5px solid #616C81;
}
`,""]),e.locals={tooltipContainer:"http_plugin_tooltipContainer_yrOMQ",tooltip:"http_plugin_tooltip_qQMkl",arrow:"http_plugin_arrow_A6CLc"},g.A=e},8219:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_comsList_Ia\\+yf {
  display: flex;
  flex-flow: row wrap;
  background-color: #FFF;
  padding: 0 5px 10px 5px;
  border-bottom: 1px solid #DDD;
}
.http_plugin_comsList_Ia\\+yf .http_plugin_comItem_RzYav {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4px;
  color: #5b6b73;
  border-radius: 4px;
  border: 1px transparent solid;
  position: relative;
  cursor: pointer;
  user-select: none;
  margin: 0 2px;
  width: 75px;
  height: fit-content;
  padding: 0px 0px 8px 0px;
}
.http_plugin_comsList_Ia\\+yf .http_plugin_comItem_RzYav:hover {
  background: rgba(225, 228, 231, 0.5);
  border-color: #616C81;
}
.http_plugin_comsList_Ia\\+yf .http_plugin_comItem_RzYav .http_plugin_comIcon_dCbnT {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.http_plugin_comsList_Ia\\+yf .http_plugin_comItem_RzYav .http_plugin_comIcon_dCbnT .http_plugin_comImg_CwUHd {
  width: 22px;
  height: 22px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
}
.http_plugin_comsList_Ia\\+yf .http_plugin_comItem_RzYav .http_plugin_comTitle_eO6lL {
  width: 100%;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.http_plugin_tips_D1C5e {
  padding: 3px 0px 3px 15px;
  color: #AAA;
  font-style: italic;
  background: #FFF;
}
`,""]),e.locals={comsList:"http_plugin_comsList_Ia+yf",comItem:"http_plugin_comItem_RzYav",comIcon:"http_plugin_comIcon_dCbnT",comImg:"http_plugin_comImg_CwUHd",comTitle:"http_plugin_comTitle_eO6lL",tips:"http_plugin_tips_D1C5e"},g.A=e},4998:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_title_gZJHr {
  font-size: 12px;
  padding: 4px;
  margin-top: -20px;
}
.http_plugin_formItem_5hQ3b label {
  width: 75px;
  text-align: right;
  padding-right: 5px;
  font-size: 12px;
}
.http_plugin_paramEditContainer_CmgwA {
  position: relative;
}
.http_plugin_paramEditContainer_CmgwA .http_plugin_codeIcon_eMek4 {
  right: 0;
  top: -26px;
}
.http_plugin_codeText_tmlRE {
  width: calc(100% - 12px);
  margin-top: 4px;
  padding: 5px;
  border: 1px solid #CCC;
  border-radius: 3px;
  overflow: auto;
  resize: vertical;
}
.http_plugin_codeIcon_eMek4 {
  position: absolute;
  cursor: pointer;
  width: 34px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-left: 6px;
}
.http_plugin_codeIcon_eMek4.http_plugin_focus_c5w8D,
.http_plugin_codeIcon_eMek4:hover {
  background-color: #AAA;
}
.http_plugin_codeIcon_eMek4.http_plugin_focus_c5w8D svg,
.http_plugin_codeIcon_eMek4:hover svg {
  fill: #FFFFFF;
}
.http_plugin_buttonGroup_-A8F6 {
  display: flex;
  justify-content: space-between;
}
.http_plugin_textEdt_jiCm1 {
  background: #FFF;
}
.http_plugin_textEdt_jiCm1:focus {
  outline: 1px solid #fa6400;
}
.http_plugin_responseCodeIcon_9Yu8x {
  position: relative;
  right: 0;
  top: 0;
}
.http_plugin_categoryContainer_LZhsJ {
  display: flex;
  align-items: center;
  height: 24px;
  flex: 1;
  flex-shrink: 0;
}
.http_plugin_categoryContainer_LZhsJ > * {
  flex-shrink: 0;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp {
  display: flex;
  flex-direction: row;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp .http_plugin_option_O6mQK {
  position: relative;
  padding: 3px 8px;
  font-size: 12px;
  background: #FFF;
  cursor: pointer;
  border: 1px solid #DDD;
  display: flex;
  align-items: center;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp .http_plugin_option_O6mQK:hover .http_plugin_optionCancelIcon_Msf2J {
  display: flex;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp .http_plugin_option_O6mQK:not(:last-child) {
  border-right: 1px solid #DDD;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp .http_plugin_option_O6mQK:not(:first-of-type) {
  margin-left: -1px;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp .http_plugin_option_O6mQK:first-of-type {
  border-radius: 3px 0 0 3px;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp .http_plugin_option_O6mQK:last-child {
  border-radius: 0 3px 3px 0;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp .http_plugin_option_O6mQK:first-of-type:last-child {
  border-radius: 3px;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp .http_plugin_selected_w2aPj {
  background: #616C81;
  color: #FFF;
  font-weight: bold;
  margin: -1px;
}
.http_plugin_categoryContainer_LZhsJ .http_plugin_buttons_AVezp .http_plugin_optionCancelIcon_Msf2J {
  z-index: 1;
  display: none;
  position: absolute;
  right: -6px;
  top: -6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  font-size: 8px;
  color: #FFFFFF;
  background: #fa6400;
}
.http_plugin_rightBox_ZbPhu {
  display: flex;
  height: 100%;
  align-items: center;
}
.http_plugin_iconRootClose_q7IpF,
.http_plugin_iconRootAdder_hz5pj {
  cursor: pointer;
  font-size: 20px;
  font-weight: normal;
  color: #555;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
}
.http_plugin_iconRootClose_q7IpF:hover,
.http_plugin_iconRootAdder_hz5pj:hover {
  color: #fa6400;
}
.http_plugin_iconRootClose_q7IpF {
  font-size: 12px;
}
.http_plugin_markAdder_1mg5P {
  display: flex;
}
.http_plugin_markAdder_1mg5P .http_plugin_markInput_v66f9 {
  border: 1px solid #DDD;
  box-sizing: border-box;
  border-radius: 3px 0 0 3px;
  padding: 5px;
  background: #FFF;
  width: 80px;
  line-height: 1;
  height: 24px;
}
.http_plugin_markAdder_1mg5P .http_plugin_markInput_v66f9:focus {
  border-color: #fa6400;
}
.http_plugin_markAdder_1mg5P .http_plugin_button_HE93O {
  font-weight: 400;
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
  border: 1px solid #d9d9d9;
  background: #fff;
  font-size: 12px;
  box-sizing: border-box;
  height: 24px;
  line-height: 1;
  border-radius: 0 3px 3px 0;
  border-left: none;
  padding: 0 10px;
  outline: 0;
  cursor: pointer;
  user-select: none;
}
.http_plugin_markAdder_1mg5P .http_plugin_button_HE93O:hover {
  opacity: 0.8;
}
.http_plugin_scrollFormItem_9KMvr {
  overflow: auto;
  padding-top: 10px;
}
.http_plugin_scrollFormItem_9KMvr::-webkit-scrollbar {
  display: none;
}
`,""]),e.locals={title:"http_plugin_title_gZJHr",formItem:"http_plugin_formItem_5hQ3b",paramEditContainer:"http_plugin_paramEditContainer_CmgwA",codeIcon:"http_plugin_codeIcon_eMek4",codeText:"http_plugin_codeText_tmlRE",focus:"http_plugin_focus_c5w8D",buttonGroup:"http_plugin_buttonGroup_-A8F6",textEdt:"http_plugin_textEdt_jiCm1",responseCodeIcon:"http_plugin_responseCodeIcon_9Yu8x",categoryContainer:"http_plugin_categoryContainer_LZhsJ",buttons:"http_plugin_buttons_AVezp",option:"http_plugin_option_O6mQK",optionCancelIcon:"http_plugin_optionCancelIcon_Msf2J",selected:"http_plugin_selected_w2aPj",rightBox:"http_plugin_rightBox_ZbPhu",iconRootClose:"http_plugin_iconRootClose_q7IpF",iconRootAdder:"http_plugin_iconRootAdder_hz5pj",markAdder:"http_plugin_markAdder_1mg5P",markInput:"http_plugin_markInput_v66f9",button:"http_plugin_button_HE93O",scrollFormItem:"http_plugin_scrollFormItem_9KMvr"},g.A=e},2537:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_editContainer_1QZp5 {
  margin-top: 10px;
}
.http_plugin_adder_7d4HU {
  font-size: 20px;
  font-weight: normal;
  height: 22px;
  display: flex;
  align-items: center;
  margin-top: -6px;
}
.http_plugin_adder_7d4HU > span {
  cursor: pointer;
}
.http_plugin_item_PAjnY,
.http_plugin_header_ezIv6 {
  display: flex;
  font-size: 12px;
}
.http_plugin_item_PAjnY .http_plugin_fieldName_RIzsL,
.http_plugin_header_ezIv6 .http_plugin_fieldName_RIzsL {
  width: 331px;
}
.http_plugin_item_PAjnY .http_plugin_type_KITjl,
.http_plugin_header_ezIv6 .http_plugin_type_KITjl {
  text-align: center;
  width: 60px;
  border: none;
  background-color: transparent;
}
.http_plugin_item_PAjnY .http_plugin_defaultValue_LJrVo,
.http_plugin_header_ezIv6 .http_plugin_defaultValue_LJrVo {
  text-align: center;
  width: 48px;
}
.http_plugin_item_PAjnY .http_plugin_range_5oHmV,
.http_plugin_header_ezIv6 .http_plugin_range_5oHmV {
  text-align: center;
  width: 121px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
}
.http_plugin_item_PAjnY .http_plugin_range_5oHmV input,
.http_plugin_header_ezIv6 .http_plugin_range_5oHmV input {
  width: 60px;
}
.http_plugin_item_PAjnY .http_plugin_range_5oHmV .http_plugin_min_x083\\+,
.http_plugin_header_ezIv6 .http_plugin_range_5oHmV .http_plugin_min_x083\\+ {
  margin-right: 1px;
}
.http_plugin_item_PAjnY .http_plugin_range_5oHmV .http_plugin_max_\\+ugoa,
.http_plugin_header_ezIv6 .http_plugin_range_5oHmV .http_plugin_max_\\+ugoa {
  margin-left: 1px;
}
.http_plugin_item_PAjnY .http_plugin_range_5oHmV .http_plugin_error_jjRrf,
.http_plugin_header_ezIv6 .http_plugin_range_5oHmV .http_plugin_error_jjRrf {
  border: 1px solid red;
}
.http_plugin_item_PAjnY .http_plugin_operate_Ne4f5,
.http_plugin_header_ezIv6 .http_plugin_operate_Ne4f5 {
  width: 40px;
  text-align: center;
}
.http_plugin_item_PAjnY p,
.http_plugin_header_ezIv6 p {
  margin-bottom: 0;
}
.http_plugin_content_RD8xB {
  display: flex;
}
.http_plugin_item_PAjnY {
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 20px;
}
.http_plugin_item_PAjnY .http_plugin_label_vS3Z6 {
  text-align: right;
  padding: 0 5px;
  color: #777;
}
.http_plugin_item_PAjnY input {
  border: 1px solid #ddd;
  border-radius: 3px;
  background: #fff;
  padding: 5px;
  line-height: 1;
  text-align: left !important;
  box-sizing: border-box;
}
.http_plugin_item_PAjnY input:focus {
  outline: 1px solid #fa6400;
}
.http_plugin_item_PAjnY input[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
}
.http_plugin_item_PAjnY .http_plugin_iconRemove_S8VtZ {
  height: 12px;
  cursor: pointer;
  margin-right: 8px;
}
.http_plugin_item_PAjnY .http_plugin_iconRemove_S8VtZ:hover {
  color: #fa6400;
}
.http_plugin_item_PAjnY .http_plugin_iconAdder_jDca0 {
  cursor: pointer;
  font-size: 20px;
  font-weight: normal;
  color: #555;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.http_plugin_item_PAjnY .http_plugin_iconAdder_jDca0:hover {
  color: #fa6400;
}
.http_plugin_ct_ouJUF {
  margin-left: 20px;
}
.http_plugin_list_bOsuy {
  margin-left: -20px;
  display: flex;
  flex-wrap: wrap;
}
.http_plugin_flex_8pEQw {
  display: flex;
  align-items: center;
}
.http_plugin_mockData_WvBPT {
  margin: 0 10px 0 -80px;
}
.http_plugin_empty_YNMML {
  position: relative;
  color: #999;
  font-style: italic;
  font-size: 12px;
}
`,""]),e.locals={editContainer:"http_plugin_editContainer_1QZp5",adder:"http_plugin_adder_7d4HU",item:"http_plugin_item_PAjnY",header:"http_plugin_header_ezIv6",fieldName:"http_plugin_fieldName_RIzsL",type:"http_plugin_type_KITjl",defaultValue:"http_plugin_defaultValue_LJrVo",range:"http_plugin_range_5oHmV",min:"http_plugin_min_x083+",max:"http_plugin_max_+ugoa",error:"http_plugin_error_jjRrf",operate:"http_plugin_operate_Ne4f5",content:"http_plugin_content_RD8xB",label:"http_plugin_label_vS3Z6",iconRemove:"http_plugin_iconRemove_S8VtZ",iconAdder:"http_plugin_iconAdder_jDca0",ct:"http_plugin_ct_ouJUF",list:"http_plugin_list_bOsuy",flex:"http_plugin_flex_8pEQw",mockData:"http_plugin_mockData_WvBPT",empty:"http_plugin_empty_YNMML"},g.A=e},6521:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_item_ibWVW,
.http_plugin_header_7V0Uh {
  display: flex;
  font-size: 12px;
}
.http_plugin_item_ibWVW .http_plugin_column_WlvRV,
.http_plugin_header_7V0Uh .http_plugin_column_WlvRV {
  text-align: center;
  width: 78px;
}
.http_plugin_item_ibWVW .http_plugin_fileName_BBnMd,
.http_plugin_header_7V0Uh .http_plugin_fileName_BBnMd {
  text-align: center;
  width: 78px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}
.http_plugin_item_ibWVW p,
.http_plugin_header_7V0Uh p {
  margin-bottom: 0;
}
.http_plugin_content_u-KJk {
  display: flex;
  margin-left: -30px;
}
.http_plugin_item_ibWVW {
  display: flex;
  align-items: center;
  margin-top: 4px;
  position: relative;
}
.http_plugin_item_ibWVW::before {
  position: absolute;
  left: -14px;
  width: 12px;
  top: 10px;
  border-bottom: 1px solid #aaa;
  content: '';
}
.http_plugin_item_ibWVW .http_plugin_label_2EWBI {
  text-align: right;
  padding: 0 5px;
  color: #777;
}
.http_plugin_item_ibWVW .http_plugin_type_NJ-q9 {
  width: 30px;
  text-align: left;
  padding-right: 5px;
}
.http_plugin_item_ibWVW input {
  border: 1px solid #ddd;
  border-radius: 3px;
  background: #fff;
  padding: 5px;
  line-height: 1;
  text-align: left !important;
}
.http_plugin_item_ibWVW input:focus {
  outline: 1px solid #fa6400;
}
.http_plugin_item_ibWVW input[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
}
.http_plugin_item_ibWVW .http_plugin_iconRemove_1oGEY {
  cursor: pointer;
}
.http_plugin_item_ibWVW .http_plugin_iconAdder_03zzO {
  cursor: pointer;
  font-size: 20px;
  font-weight: normal;
  color: #555;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
  margin-left: 5px;
  margin-bottom: 3px;
}
.http_plugin_item_ibWVW .http_plugin_iconAdder_03zzO:hover {
  color: #ffffff;
  background-color: #fa6400;
}
.http_plugin_rootItem_Xp5ci::before {
  display: none;
}
.http_plugin_ct_1v7re {
  position: relative;
  width: 100%;
  margin-left: 12px;
  padding: 0 5px 0 15px;
}
.http_plugin_ct_1v7re::before {
  position: absolute;
  left: 0;
  top: -2px;
  bottom: -2px;
  border-left: 1px solid #aaa;
  content: '';
}
.http_plugin_ct_1v7re:first-child::before {
  display: none;
}
.http_plugin_ct_1v7re:last-child::before {
  height: 13px;
}
.http_plugin_list_FFYRn {
  margin-left: -12px;
  display: flex;
  flex-wrap: wrap;
}
.http_plugin_flex_bLr30 {
  display: flex;
  align-items: center;
}
.http_plugin_typeName_HswdI {
  font-style: italic;
  color: #777;
  padding-left: 3px;
}
.http_plugin_debug_zzVZi {
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.http_plugin_connectionButton_vescM {
  position: relative;
}
.http_plugin_connectionButton_vescM .http_plugin_tipContainer_3XAAg {
  position: absolute;
  top: 50px;
  right: 0;
  min-height: 100px;
  padding: 16px;
  background: #FFFFFF;
  width: 240px;
  opacity: 1;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
}
.http_plugin_connectionButton_vescM .http_plugin_tipContainer_3XAAg:after {
  position: absolute;
  top: -10px;
  right: 30px;
  content: '';
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid #FFFFFF;
}
.http_plugin_connectionButton_vescM .http_plugin_tipContainer_3XAAg .http_plugin_preview_fL58- {
  color: #fa6400;
  text-decoration: underline;
  cursor: pointer;
}
.http_plugin_connectionButton_vescM .http_plugin_buttonGroup_MR9pA {
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
}
`,""]),e.locals={item:"http_plugin_item_ibWVW",header:"http_plugin_header_7V0Uh",column:"http_plugin_column_WlvRV",fileName:"http_plugin_fileName_BBnMd",content:"http_plugin_content_u-KJk",label:"http_plugin_label_2EWBI",type:"http_plugin_type_NJ-q9",iconRemove:"http_plugin_iconRemove_1oGEY",iconAdder:"http_plugin_iconAdder_03zzO",rootItem:"http_plugin_rootItem_Xp5ci",ct:"http_plugin_ct_1v7re",list:"http_plugin_list_FFYRn",flex:"http_plugin_flex_bLr30",typeName:"http_plugin_typeName_HswdI",debug:"http_plugin_debug_zzVZi",connectionButton:"http_plugin_connectionButton_vescM",tipContainer:"http_plugin_tipContainer_3XAAg",preview:"http_plugin_preview_fL58-",buttonGroup:"http_plugin_buttonGroup_MR9pA"},g.A=e},4749:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_item_AgYH6,
.http_plugin_header_D3SgC {
  display: flex;
  font-size: 12px;
}
.http_plugin_item_AgYH6 .http_plugin_column1_eCaQ8,
.http_plugin_header_D3SgC .http_plugin_column1_eCaQ8 {
  width: 270px;
}
.http_plugin_item_AgYH6 .http_plugin_column2_RU9Ik,
.http_plugin_header_D3SgC .http_plugin_column2_RU9Ik {
  text-align: center;
  width: 45px;
  border: none;
  background-color: transparent;
}
.http_plugin_item_AgYH6 .http_plugin_column3_wXNHV,
.http_plugin_header_D3SgC .http_plugin_column3_wXNHV {
  text-align: center;
  width: 68px;
}
.http_plugin_item_AgYH6 .http_plugin_uploadFile_L6LNu,
.http_plugin_header_D3SgC .http_plugin_uploadFile_L6LNu {
  border: none;
  text-align: center;
  width: 68px;
  background: none;
  padding: 0;
}
.http_plugin_item_AgYH6 .http_plugin_uploadFileName_dkICC,
.http_plugin_header_D3SgC .http_plugin_uploadFileName_dkICC {
  border: none;
  text-align: center;
  width: 68px;
  background: none;
  padding: 0;
}
.http_plugin_item_AgYH6 .http_plugin_uploadFileName_dkICC .http_plugin_clear_Uay1j,
.http_plugin_header_D3SgC .http_plugin_uploadFileName_dkICC .http_plugin_clear_Uay1j {
  color: #fa6400;
  cursor: pointer;
  padding: 0 2px;
  vertical-align: middle;
}
.http_plugin_item_AgYH6 .http_plugin_column4_zJpCa,
.http_plugin_header_D3SgC .http_plugin_column4_zJpCa {
  width: 46px;
  margin-left: 8px;
}
.http_plugin_item_AgYH6 p,
.http_plugin_header_D3SgC p {
  margin-bottom: 0;
}
.http_plugin_content_3Ap3m {
  display: flex;
}
.http_plugin_item_AgYH6 {
  display: flex;
  align-items: center;
  margin-top: 4px;
}
.http_plugin_item_AgYH6 .http_plugin_label_v7aDm {
  text-align: right;
  padding: 0 5px;
  color: #777;
}
.http_plugin_item_AgYH6 .http_plugin_type_ztsDl {
  width: 30px;
  text-align: left;
  padding-right: 5px;
}
.http_plugin_item_AgYH6 input {
  border: 1px solid #ddd;
  border-radius: 3px;
  background: #fff;
  padding: 5px;
  line-height: 1;
  text-align: left !important;
  box-sizing: border-box;
}
.http_plugin_item_AgYH6 input:focus {
  outline: 1px solid #fa6400;
}
.http_plugin_item_AgYH6 input[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
}
.http_plugin_item_AgYH6 .http_plugin_iconRemove_APjEA {
  cursor: pointer;
}
.http_plugin_item_AgYH6 .http_plugin_iconRemove_APjEA:hover {
  color: #fa6400;
}
.http_plugin_item_AgYH6 .http_plugin_iconAdder_wElo7 {
  cursor: pointer;
  font-size: 20px;
  font-weight: normal;
  color: #555;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
  margin-left: 5px;
  margin-bottom: 3px;
}
.http_plugin_item_AgYH6 .http_plugin_iconAdder_wElo7:hover {
  color: #fa6400;
}
.http_plugin_ct_dWePW {
  width: 100%;
  margin-left: 20px;
}
.http_plugin_list_ZnoCC {
  margin-left: -20px;
  display: flex;
  flex-wrap: wrap;
}
.http_plugin_flex_thC3Z {
  display: flex;
  align-items: center;
}
.http_plugin_iconRootAdder_1JqjU {
  cursor: pointer;
  font-size: 20px;
  font-weight: normal;
  color: #555;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  margin: 0;
}
.http_plugin_iconRootAdder_1JqjU:hover {
  color: #fa6400;
}
`,""]),e.locals={item:"http_plugin_item_AgYH6",header:"http_plugin_header_D3SgC",column1:"http_plugin_column1_eCaQ8",column2:"http_plugin_column2_RU9Ik",column3:"http_plugin_column3_wXNHV",uploadFile:"http_plugin_uploadFile_L6LNu",uploadFileName:"http_plugin_uploadFileName_dkICC",clear:"http_plugin_clear_Uay1j",column4:"http_plugin_column4_zJpCa",content:"http_plugin_content_3Ap3m",label:"http_plugin_label_v7aDm",type:"http_plugin_type_ztsDl",iconRemove:"http_plugin_iconRemove_APjEA",iconAdder:"http_plugin_iconAdder_wElo7",ct:"http_plugin_ct_dWePW",list:"http_plugin_list_ZnoCC",flex:"http_plugin_flex_thC3Z",iconRootAdder:"http_plugin_iconRootAdder_1JqjU"},g.A=e},8366:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_returnParams_TAMol {
  position: relative;
  padding: 0 5px 5px 15px;
  font-size: 12px;
  margin-left: -10px;
  margin-top: 10px;
}
.http_plugin_returnParams_TAMol:hover .http_plugin_keyName_NIZYr button {
  display: block !important;
}
.http_plugin_returnParams_TAMol .http_plugin_item_7UKiu {
  margin-left: 10px;
  padding: 0 5px 0 15px;
  position: relative;
}
.http_plugin_returnParams_TAMol .http_plugin_item_7UKiu:before {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-left: 1px solid #aaa;
  content: '';
}
.http_plugin_returnParams_TAMol .http_plugin_item_7UKiu:last-child:before {
  left: 0;
  top: 0;
  height: 15px;
  border-left: 1px solid #aaa;
  content: '';
}
.http_plugin_returnParams_TAMol .http_plugin_item_7UKiu .http_plugin_keyName_NIZYr {
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  flex-wrap: nowrap;
  white-space: nowrap;
}
.http_plugin_returnParams_TAMol .http_plugin_item_7UKiu .http_plugin_keyName_NIZYr:before {
  position: absolute;
  left: -14px;
  width: 12px;
  top: 14px;
  border-bottom: 1px solid #aaa;
  content: '';
}
.http_plugin_returnParams_TAMol .http_plugin_item_7UKiu .http_plugin_keyName_NIZYr .http_plugin_typeName_H2Gtk {
  font-style: italic;
  color: #777;
  padding-left: 3px;
}
.http_plugin_returnParams_TAMol .http_plugin_item_7UKiu .http_plugin_keyName_NIZYr button {
  display: none;
  margin: 0 0 0 5px;
  padding: 2px;
  font-size: 10px;
  cursor: pointer;
  line-height: 1;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #fa6400;
}
.http_plugin_returnParams_TAMol .http_plugin_rootItem_5l9Db {
  margin-left: 0 !important;
  padding-left: 0 !important;
}
.http_plugin_returnParams_TAMol .http_plugin_rootItem_5l9Db:before {
  border-left-width: 0 !important;
}
.http_plugin_returnParams_TAMol .http_plugin_rootItem_5l9Db > .http_plugin_keyName_NIZYr {
  margin-left: -8px;
}
.http_plugin_returnParams_TAMol .http_plugin_rootItem_5l9Db > .http_plugin_keyName_NIZYr:before {
  border-bottom-width: 0 !important;
}
.http_plugin_returnParams_TAMol .http_plugin_markAsReturn_dwVeS .http_plugin_marked_GBr-r {
  border-radius: 10px;
  border-left: 2px solid #fa6400;
  color: #fa6400;
  font-size: 10px;
  font-weight: bold;
  padding: 1px 5px;
  position: absolute;
  left: -11px;
  right: 0;
  height: 100%;
  background: rgba(250, 100, 0, 0.1);
}
.http_plugin_returnParams_TAMol .http_plugin_markAsReturn_dwVeS .http_plugin_marked_GBr-r:before {
  position: absolute;
  content: attr(data-content);
  width: 49px;
  height: 100%;
  left: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.http_plugin_returnParams_TAMol .http_plugin_markAsReturn_dwVeS .http_plugin_exclude_tgNHv {
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(-45deg, #ccc 0, #ccc 25%, transparent 25%, transparent 50%, #ccc 50%, #ccc 75%, transparent 75%, transparent 100%);
  background-size: 6px 6px;
}
.http_plugin_returnParams_TAMol .http_plugin_popMenu_7C\\+Mx {
  display: none;
  width: 120px;
  position: absolute;
  background: #fff;
  padding: 5px;
  box-shadow: 0 1px 5px #aaa;
}
.http_plugin_returnParams_TAMol .http_plugin_popMenu_7C\\+Mx .http_plugin_menuItem_iUZh8 {
  padding: 5px 10px;
  cursor: pointer;
}
.http_plugin_returnParams_TAMol .http_plugin_popMenu_7C\\+Mx .http_plugin_menuItem_iUZh8:hover {
  background: #eee;
}
.http_plugin_errorInfo_7JMqN {
  font-size: 14px;
  font-style: italic;
  color: #fa6400;
  margin-right: 30px;
  margin-top: 10px;
}
.http_plugin_empty_Tr\\+p4 {
  position: relative;
  color: #999;
  font-style: italic;
  font-size: 12px;
  margin-top: 10px;
}
.http_plugin_markValueSelect_jiaei {
  color: #8d7a34;
  font-style: normal;
  text-align: center;
  text-decoration: underline;
}
.http_plugin_markValueInput_4nfn1 {
  margin: 0 10px;
  width: 60px;
  border: 1px solid #CCC;
  padding-left: 4px;
  border-radius: 3px;
}
.http_plugin_markValueSelect_jiaei + .http_plugin_markValueInput_4nfn1 {
  margin-left: 4px;
}
`,""]),e.locals={returnParams:"http_plugin_returnParams_TAMol",keyName:"http_plugin_keyName_NIZYr",item:"http_plugin_item_7UKiu",typeName:"http_plugin_typeName_H2Gtk",rootItem:"http_plugin_rootItem_5l9Db",markAsReturn:"http_plugin_markAsReturn_dwVeS",marked:"http_plugin_marked_GBr-r",exclude:"http_plugin_exclude_tgNHv",popMenu:"http_plugin_popMenu_7C+Mx",menuItem:"http_plugin_menuItem_iUZh8",errorInfo:"http_plugin_errorInfo_7JMqN",empty:"http_plugin_empty_Tr+p4",markValueSelect:"http_plugin_markValueSelect_jiaei",markValueInput:"http_plugin_markValueInput_4nfn1"},g.A=e},5590:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_toolbar_v64U3 {
  height: 30px;
  background: #FFF;
  border-bottom: 1px solid #DDD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 10px;
}
.http_plugin_toolbar_v64U3 .http_plugin_search_wchsf {
  border-radius: 3px;
  height: 22px;
  flex: 1;
  padding: 0 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.http_plugin_toolbar_v64U3 .http_plugin_search_wchsf input {
  flex: 1;
  height: 100%;
  padding: 5px;
}
.http_plugin_toolbar_v64U3 .http_plugin_search_wchsf svg {
  width: 13px;
}
.http_plugin_toolbar_v64U3 .http_plugin_search_wchsf svg path {
  stroke: #AAA;
}
.http_plugin_toolbar_v64U3 .http_plugin_icon_xCTAs {
  cursor: pointer;
  color: #555;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.http_plugin_toolbar_v64U3 .http_plugin_icon_xCTAs:hover {
  color: #fa6400;
}
.http_plugin_toolbar_v64U3 .http_plugin_icon_xCTAs:last-child {
  margin-right: -4px;
}
.http_plugin_toolbar_v64U3 .http_plugin_disable_TvEuX {
  opacity: 0.3;
  pointer-events: none;
}
.http_plugin_center_6XF3p {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.http_plugin_center_6XF3p:hover {
  color: #ffffff;
  background-color: #fa6400;
}
.http_plugin_separator-divider_890VW {
  border-top: 1px solid #DDD;
  margin: 4px 0px;
}
.http_plugin_clickAble_98mf0 {
  cursor: pointer;
}
.http_plugin_ct_1rDNO {
  background-color: #fff;
  padding: 4px 0;
  box-shadow: 0 0 10px 3px #ddd;
  width: 100px;
}
.http_plugin_ct_1rDNO .http_plugin_item_tSH\\+- {
  padding: 5px 12px;
  cursor: pointer;
}
.http_plugin_ct_1rDNO .http_plugin_item_tSH\\+-:hover {
  background-color: #f5f7f9;
}
`,""]),e.locals={toolbar:"http_plugin_toolbar_v64U3",search:"http_plugin_search_wchsf",icon:"http_plugin_icon_xCTAs",disable:"http_plugin_disable_TvEuX",center:"http_plugin_center_6XF3p","separator-divider":"http_plugin_separator-divider_890VW",clickAble:"http_plugin_clickAble_98mf0",ct:"http_plugin_ct_1rDNO",item:"http_plugin_item_tSH+-"},g.A=e},1541:function(R,g,t){var n=t(9267),e=t.n(n)()(function(r){return r[1]});e.push([R.id,`.http_plugin_sidebar-panel_GHUlq {
  width: 320px;
  background-color: #f7f7f7;
  z-index: 9;
  display: none;
  height: 100%;
}
.http_plugin_sidebar-panel-view_0gxBI {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.http_plugin_sidebar-panel-edit_s4Z6O {
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 10px -5px #ddd;
  overflow: hidden;
  width: 560px;
  position: absolute;
  z-index: 1000;
  bottom: 26px;
  left: 271px;
  background-color: #f7f7f7;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.http_plugin_sidebar-panel-edit-open_4lOrY {
  display: block;
}
.http_plugin_sidebar-panel-open_uPyBS {
  display: flex;
}
.http_plugin_sidebar-panel-title_xa-Ws {
  font-size: 12px;
  font-weight: bold;
  padding: 0 10px;
  line-height: 50px;
  height: 50px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: text;
}
.http_plugin_sidebar-panel-header_4JOSd {
  background-color: #f7f7f7;
  justify-content: space-between;
}
.http_plugin_sidebar-panel-header_4JOSd .http_plugin_icon_nACnc {
  cursor: pointer;
  font-size: 16px;
  display: flex;
  height: 22px;
  align-items: center;
}
.http_plugin_sidebar-panel-header_4JOSd .http_plugin_icon_nACnc:hover {
  color: #fa6400;
}
.http_plugin_sidebar-panel-header_4JOSd .http_plugin_rightOperate_PJ8Pf {
  display: flex;
  align-items: center;
  height: 22px;
}
.http_plugin_sidebar-panel-header_4JOSd .http_plugin_globalMock_vv7tM {
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-top: 1px;
}
.http_plugin_sidebar-panel-header_4JOSd .http_plugin_globalMock_vv7tM .http_plugin_warning_Q4d6I {
  color: #ff4d4f;
}
.http_plugin_sidebar-panel-header_4JOSd .http_plugin_globalMock_vv7tM span {
  font-size: 12px;
  font-weight: 666;
  margin-right: 4px;
}
.http_plugin_sidebar-panel-header__title_thLVH {
  font-size: 14px;
  font-weight: 666;
  height: 49px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.http_plugin_sidebar-panel-header__title_thLVH span {
  line-height: 22px;
}
.http_plugin_sidebar-panel-list_aq3Qk {
  display: flex;
  width: 100%;
  overflow-y: auto;
  flex: 1;
  flex-direction: column;
  padding-bottom: 30px;
}
.http_plugin_sidebar-panel-list_aq3Qk::-webkit-scrollbar {
  width: 6px;
  border-radius: 5px;
}
.http_plugin_sidebar-panel-list_aq3Qk::-webkit-scrollbar-track {
  background: #EEE;
  border-radius: 10px;
}
.http_plugin_sidebar-panel-list_aq3Qk::-webkit-scrollbar-thumb {
  background: #BBB;
  border-radius: 10px;
}
.http_plugin_sidebar-panel-list_aq3Qk::-webkit-scrollbar-thumb:hover {
  background: #888;
}
.http_plugin_sidebar-panel-list-item_sNxjR {
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  padding: 0 3px;
  position: relative;
  cursor: pointer;
}
.http_plugin_sidebar-panel-list-item_sNxjR > div:first-child {
  display: flex;
  justify-content: space-between;
}
.http_plugin_sidebar-panel-list-item_sNxjR.http_plugin_active_fNepW {
  background-color: rgba(247, 247, 247, 0.4);
}
.http_plugin_sidebar-panel-list-item__name_vnnd\\+ {
  display: inline-block;
  color: #aaa;
  padding-right: 3px;
  text-align: right;
}
.http_plugin_sidebar-panel-list-item__content_Q3yhh {
  flex: 1;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
}
.http_plugin_sidebar-panel-list-item__param_txKyf {
  display: flex;
  margin-bottom: 4px;
  font-size: 12px;
  padding: 0 6px;
}
.http_plugin_sidebar-panel-list-item__param_txKyf:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
}
.http_plugin_sidebar-panel-list-item__expand_Xs3Ts {
  background-color: #fff;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.http_plugin_sidebar-panel-list-item__copy_pvSYY {
  user-select: text;
}
.http_plugin_sidebar-panel-list-item__copy_pvSYY:hover {
  color: #fa6400;
}
.http_plugin_sidebar-panel-list-item_sNxjR:hover {
  background-color: #f1f1f1;
}
.http_plugin_sidebar-panel-list-item_sNxjR .http_plugin_icon_nACnc {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
}
.http_plugin_sidebar-panel-list-item_sNxjR .http_plugin_icon_nACnc svg {
  max-width: 12px;
}
.http_plugin_sidebar-panel-list-item_sNxjR .http_plugin_iconExpand_RhA7T {
  transform: rotate(90deg);
  transition: 0.1s;
}
.http_plugin_sidebar-panel-list-item_sNxjR .http_plugin_tag_G68CQ {
  padding: 0 8px 0 2px;
  color: #fa6400;
  min-width: 35px;
  cursor: pointer;
  flex-shrink: 0;
}
.http_plugin_sidebar-panel-list-item_sNxjR .http_plugin_tag__no-address_71DkZ {
  color: rgba(255, 0, 0, 0.8);
}
.http_plugin_sidebar-panel-list-item_sNxjR .http_plugin_folder_mcGdD {
  color: #fa6400;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin: 0 8px;
}
.http_plugin_sidebar-panel-list-item_sNxjR .http_plugin_name_W6ch7 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.http_plugin_sidebar-panel-list-item__left_lkPc9 {
  padding: 12px 0 12px 4px;
  display: flex;
  min-width: 130px;
  flex: 1;
}
.http_plugin_sidebar-panel-list-item__left--tag_niOv5 {
  display: none;
  position: absolute;
  right: 20px;
  top: -14px;
  transform: scale(0.8);
}
.http_plugin_sidebar-panel-list-item__right_lHXz6 {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
  margin-right: 8px;
}
.http_plugin_sidebar-panel-list-item__right_lHXz6 .http_plugin_action_pC7aZ {
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.85);
}
.http_plugin_sidebar-panel-list-item__right_lHXz6 .http_plugin_action_pC7aZ:hover {
  color: #fa6400;
}
.http_plugin_doc-link_CYmpa {
  cursor: pointer;
}
.http_plugin_separator-divider_pi2b\\+ {
  border-top: 1px solid #DDD;
  margin: 4px 0px;
}
.http_plugin_ct_1s7\\+J {
  padding: 0 6px 0;
  border-radius: 6px;
  border: 1px solid #eee;
  margin-bottom: 12px;
}
.http_plugin_disabled_KnU1j {
  opacity: 0.5;
}
.http_plugin_chose_dNlu8 {
  border-bottom-color: transparent;
  box-shadow: 0 0 6px 2px #ddd;
}
.http_plugin_chose_dNlu8:hover {
  background-color: transparent;
}
.http_plugin_dashedDivider_VWUMU {
  border-top: 1px dashed #ccc;
  margin: 8px 0;
}
.http_plugin_dividerText_CcMpK {
  font-style: italic;
  color: #999999;
  margin-top: 12px;
}
.http_plugin_dropdownItem_DI7U5 {
  background-color: #fff;
  padding: 4px 0;
  box-shadow: 0 0 10px 3px #ddd;
  width: 100px;
}
.http_plugin_dropdownItem_DI7U5 .http_plugin_item_5mPYl {
  padding: 5px 12px;
  cursor: pointer;
}
.http_plugin_dropdownItem_DI7U5 .http_plugin_item_5mPYl:hover {
  background-color: #f5f7f9;
}
.http_plugin_empty_Ho6NQ {
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #999;
  font-style: italic;
  font-size: 12px;
}
.http_plugin_folderList_voR2i {
  position: relative;
  padding: 0 0 0 12px;
}
.http_plugin_folderList_voR2i:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 12px;
  background: #eae9e9;
}
.http_plugin_split_y6SMx {
  border-bottom: 1px solid #ccc;
  margin: 6px 6px 10px 6px;
}
`,""]),e.locals={"sidebar-panel":"http_plugin_sidebar-panel_GHUlq","sidebar-panel-view":"http_plugin_sidebar-panel-view_0gxBI","sidebar-panel-edit":"http_plugin_sidebar-panel-edit_s4Z6O","sidebar-panel-edit-open":"http_plugin_sidebar-panel-edit-open_4lOrY","sidebar-panel-open":"http_plugin_sidebar-panel-open_uPyBS","sidebar-panel-title":"http_plugin_sidebar-panel-title_xa-Ws","sidebar-panel-header":"http_plugin_sidebar-panel-header_4JOSd",icon:"http_plugin_icon_nACnc",rightOperate:"http_plugin_rightOperate_PJ8Pf",globalMock:"http_plugin_globalMock_vv7tM",warning:"http_plugin_warning_Q4d6I","sidebar-panel-header__title":"http_plugin_sidebar-panel-header__title_thLVH","sidebar-panel-list":"http_plugin_sidebar-panel-list_aq3Qk","sidebar-panel-list-item":"http_plugin_sidebar-panel-list-item_sNxjR",active:"http_plugin_active_fNepW","sidebar-panel-list-item__name":"http_plugin_sidebar-panel-list-item__name_vnnd+","sidebar-panel-list-item__content":"http_plugin_sidebar-panel-list-item__content_Q3yhh","sidebar-panel-list-item__param":"http_plugin_sidebar-panel-list-item__param_txKyf","sidebar-panel-list-item__expand":"http_plugin_sidebar-panel-list-item__expand_Xs3Ts","sidebar-panel-list-item__copy":"http_plugin_sidebar-panel-list-item__copy_pvSYY",iconExpand:"http_plugin_iconExpand_RhA7T",tag:"http_plugin_tag_G68CQ","tag__no-address":"http_plugin_tag__no-address_71DkZ",folder:"http_plugin_folder_mcGdD",name:"http_plugin_name_W6ch7","sidebar-panel-list-item__left":"http_plugin_sidebar-panel-list-item__left_lkPc9","sidebar-panel-list-item__left--tag":"http_plugin_sidebar-panel-list-item__left--tag_niOv5","sidebar-panel-list-item__right":"http_plugin_sidebar-panel-list-item__right_lHXz6",action:"http_plugin_action_pC7aZ","doc-link":"http_plugin_doc-link_CYmpa","separator-divider":"http_plugin_separator-divider_pi2b+",ct:"http_plugin_ct_1s7+J",disabled:"http_plugin_disabled_KnU1j",chose:"http_plugin_chose_dNlu8",dashedDivider:"http_plugin_dashedDivider_VWUMU",dividerText:"http_plugin_dividerText_CcMpK",dropdownItem:"http_plugin_dropdownItem_DI7U5",item:"http_plugin_item_5mPYl",empty:"http_plugin_empty_Ho6NQ",folderList:"http_plugin_folderList_voR2i",split:"http_plugin_split_y6SMx"},g.A=e},2522:function(R,g,t){var n=t(5072),e=t.n(n),r=t(5283);e()(r.A,{insert:"head",singleton:!1}),r.A.locals},50:function(R,g,t){var n=t(5072),e=t.n(n),r=t(671);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},259:function(R,g,t){var n=t(5072),e=t.n(n),r=t(4134);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},4343:function(R,g,t){var n=t(5072),e=t.n(n),r=t(5786);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},2096:function(R,g,t){var n=t(5072),e=t.n(n),r=t(7223);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},4087:function(R,g,t){var n=t(5072),e=t.n(n),r=t(5392);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},9552:function(R,g,t){var n=t(5072),e=t.n(n),r=t(8311);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},9877:function(R,g,t){var n=t(5072),e=t.n(n),r=t(596);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},2028:function(R,g,t){var n=t(5072),e=t.n(n),r=t(7679);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},5543:function(R,g,t){var n=t(5072),e=t.n(n),r=t(4884);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},7273:function(R,g,t){var n=t(5072),e=t.n(n),r=t(2546);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},1249:function(R,g,t){var n=t(5072),e=t.n(n),r=t(7322);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},8640:function(R,g,t){var n=t(5072),e=t.n(n),r=t(6557);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},4723:function(R,g,t){var n=t(5072),e=t.n(n),r=t(6094);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},9226:function(R,g,t){var n=t(5072),e=t.n(n),r=t(9081);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},5236:function(R,g,t){var n=t(5072),e=t.n(n),r=t(3687);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},5708:function(R,g,t){var n=t(5072),e=t.n(n),r=t(2999);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},2642:function(R,g,t){var n=t(5072),e=t.n(n),r=t(8229);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},2238:function(R,g,t){var n=t(5072),e=t.n(n),r=t(3683);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},8803:function(R,g,t){var n=t(5072),e=t.n(n),r=t(6874);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},7030:function(R,g,t){var n=t(5072),e=t.n(n),r=t(8219);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},3873:function(R,g,t){var n=t(5072),e=t.n(n),r=t(4998);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},9144:function(R,g,t){var n=t(5072),e=t.n(n),r=t(2537);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},2092:function(R,g,t){var n=t(5072),e=t.n(n),r=t(6521);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},4608:function(R,g,t){var n=t(5072),e=t.n(n),r=t(4749);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},367:function(R,g,t){var n=t(5072),e=t.n(n),r=t(8366);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},2461:function(R,g,t){var n=t(5072),e=t.n(n),r=t(5590);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},8978:function(R,g,t){var n=t(5072),e=t.n(n),r=t(1541);e()(r.A,{insert:"head",singleton:!1}),g.A=r.A.locals||{}},5072:function(R,g,t){var n,e=function(){var v={};return function(f){if(v[f]===void 0){var u=document.querySelector(f);if(window.HTMLIFrameElement&&u instanceof window.HTMLIFrameElement)try{u=u.contentDocument.head}catch{u=null}v[f]=u}return v[f]}}(),r=[];function a(v){for(var f=-1,u=0;u<r.length;u++)if(r[u].identifier===v){f=u;break}return f}function m(v,f){for(var u={},p=[],i=0;i<v.length;i++){var c=v[i],b=f.base?c[0]+f.base:c[0],x=u[b]||0,A="".concat(b," ").concat(x);u[b]=x+1;var _=a(A),w={css:c[1],media:c[2],sourceMap:c[3]};_!==-1?(r[_].references++,r[_].updater(w)):r.push({identifier:A,updater:N(w,f),references:1}),p.push(A)}return p}function h(v){var f=document.createElement("style"),u=v.attributes||{};if(u.nonce===void 0){var p=t.nc;p&&(u.nonce=p)}if(Object.keys(u).forEach(function(c){f.setAttribute(c,u[c])}),typeof v.insert=="function")v.insert(f);else{var i=e(v.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(f)}return f}var l,s=(l=[],function(v,f){return l[v]=f,l.filter(Boolean).join(`
`)});function o(v,f,u,p){var i=u?"":p.media?"@media ".concat(p.media," {").concat(p.css,"}"):p.css;if(v.styleSheet)v.styleSheet.cssText=s(f,i);else{var c=document.createTextNode(i),b=v.childNodes;b[f]&&v.removeChild(b[f]),b.length?v.insertBefore(c,b[f]):v.appendChild(c)}}function d(v,f,u){var p=u.css,i=u.media,c=u.sourceMap;if(i?v.setAttribute("media",i):v.removeAttribute("media"),c&&typeof btoa<"u"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),v.styleSheet)v.styleSheet.cssText=p;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(p))}}var E=null,O=0;function N(v,f){var u,p,i;if(f.singleton){var c=O++;u=E||(E=h(f)),p=o.bind(null,u,c,!1),i=o.bind(null,u,c,!0)}else u=h(f),p=d.bind(null,u,f),i=function(){(function(b){if(b.parentNode===null)return!1;b.parentNode.removeChild(b)})(u)};return p(v),function(b){if(b){if(b.css===v.css&&b.media===v.media&&b.sourceMap===v.sourceMap)return;p(v=b)}else i()}}R.exports=function(v,f){(f=f||{}).singleton||typeof f.singleton=="boolean"||(f.singleton=(n===void 0&&(n=!!(window&&document&&document.all&&!window.atob)),n));var u=m(v=v||[],f);return function(p){if(p=p||[],Object.prototype.toString.call(p)==="[object Array]"){for(var i=0;i<u.length;i++){var c=a(u[i]);r[c].references--}for(var b=m(p,f),x=0;x<u.length;x++){var A=a(u[x]);r[A].references===0&&(r[A].updater(),r.splice(A,1))}u=b}}}},9155:function(R){R.exports=__WEBPACK_EXTERNAL_MODULE__9155__},9514:function(R){R.exports=__WEBPACK_EXTERNAL_MODULE__9514__},3713:function(R,g,t){t.d(g,{KE:function(){return u},dJ:function(){return v},wG:function(){return n.A}});var n=t(6398),e=t(9155),r={display:"flex",position:"relative",textAlign:"initial"},a={width:"100%"},m={display:"none"},h={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},l=function({children:p}){return e.createElement("div",{style:h.container},p)},s=(0,e.memo)(function({width:p,height:i,isEditorReady:c,loading:b,_ref:x,className:A,wrapperProps:_}){return e.createElement("section",{style:{...r,width:p,height:i},..._},!c&&e.createElement(l,null,b),e.createElement("div",{ref:x,style:{...a,...!c&&m},className:A}))}),o=function(p){(0,e.useEffect)(p,[])},d=function(p,i,c=!0){let b=(0,e.useRef)(!0);(0,e.useEffect)(b.current||!c?()=>{b.current=!1}:p,i)};function E(){}function O(p,i,c,b){return function(x,A){return x.editor.getModel(N(x,A))}(p,b)||function(x,A,_,w){return x.editor.createModel(A,_,w?N(x,w):void 0)}(p,i,c,b)}function N(p,i){return p.Uri.parse(i)}(0,e.memo)(function({original:p,modified:i,language:c,originalLanguage:b,modifiedLanguage:x,originalModelPath:A,modifiedModelPath:_,keepCurrentOriginalModel:w=!1,keepCurrentModifiedModel:k=!1,theme:P="light",loading:M="Loading...",options:L={},height:V="100%",width:B="100%",className:T,wrapperProps:U={},beforeMount:H=E,onMount:K=E}){let[J,W]=(0,e.useState)(!1),[q,Z]=(0,e.useState)(!0),X=(0,e.useRef)(null),ee=(0,e.useRef)(null),pe=(0,e.useRef)(null),re=(0,e.useRef)(K),ae=(0,e.useRef)(H),ie=(0,e.useRef)(!1);o(()=>{let F=n.A.init();return F.then(j=>(ee.current=j)&&Z(!1)).catch(j=>(j==null?void 0:j.type)!=="cancelation"&&console.error("Monaco initialization: error:",j)),()=>X.current?function(){var y,S,C,I;let j=(y=X.current)==null?void 0:y.getModel();w||((S=j==null?void 0:j.original)==null||S.dispose()),k||((C=j==null?void 0:j.modified)==null||C.dispose()),(I=X.current)==null||I.dispose()}():F.cancel()}),d(()=>{if(X.current&&ee.current){let F=X.current.getOriginalEditor(),j=O(ee.current,p||"",b||c||"text",A||"");j!==F.getModel()&&F.setModel(j)}},[A],J),d(()=>{if(X.current&&ee.current){let F=X.current.getModifiedEditor(),j=O(ee.current,i||"",x||c||"text",_||"");j!==F.getModel()&&F.setModel(j)}},[_],J),d(()=>{let F=X.current.getModifiedEditor();F.getOption(ee.current.editor.EditorOption.readOnly)?F.setValue(i||""):i!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:i||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[i],J),d(()=>{var F,j;(j=(F=X.current)==null?void 0:F.getModel())==null||j.original.setValue(p||"")},[p],J),d(()=>{let{original:F,modified:j}=X.current.getModel();ee.current.editor.setModelLanguage(F,b||c||"text"),ee.current.editor.setModelLanguage(j,x||c||"text")},[c,b,x],J),d(()=>{var F;(F=ee.current)==null||F.editor.setTheme(P)},[P],J),d(()=>{var F;(F=X.current)==null||F.updateOptions(L)},[L],J);let fe=(0,e.useCallback)(()=>{var y;if(!ee.current)return;ae.current(ee.current);let F=O(ee.current,p||"",b||c||"text",A||""),j=O(ee.current,i||"",x||c||"text",_||"");(y=X.current)==null||y.setModel({original:F,modified:j})},[c,i,x,p,b,A,_]),D=(0,e.useCallback)(()=>{var F;!ie.current&&pe.current&&(X.current=ee.current.editor.createDiffEditor(pe.current,{automaticLayout:!0,...L}),fe(),(F=ee.current)==null||F.editor.setTheme(P),W(!0),ie.current=!0)},[L,P,fe]);return(0,e.useEffect)(()=>{J&&re.current(X.current,ee.current)},[J]),(0,e.useEffect)(()=>{!q&&!J&&D()},[q,J,D]),e.createElement(s,{width:B,height:V,isEditorReady:J,loading:M,_ref:pe,className:T,wrapperProps:U})});var v=function(){let[p,i]=(0,e.useState)(n.A.__getMonacoInstance());return o(()=>{let c;return p||(c=n.A.init(),c.then(b=>{i(b)})),()=>c==null?void 0:c.cancel()}),p},f=new Map,u=(0,e.memo)(function({defaultValue:p,defaultLanguage:i,defaultPath:c,value:b,language:x,path:A,theme:_="light",line:w,loading:k="Loading...",options:P={},overrideServices:M={},saveViewState:L=!0,keepCurrentModel:V=!1,width:B="100%",height:T="100%",className:U,wrapperProps:H={},beforeMount:K=E,onMount:J=E,onChange:W,onValidate:q=E}){let[Z,X]=(0,e.useState)(!1),[ee,pe]=(0,e.useState)(!0),re=(0,e.useRef)(null),ae=(0,e.useRef)(null),ie=(0,e.useRef)(null),fe=(0,e.useRef)(J),D=(0,e.useRef)(K),F=(0,e.useRef)(),j=(0,e.useRef)(b),y=function(z){let G=(0,e.useRef)();return(0,e.useEffect)(()=>{G.current=z},[z]),G.current}(A),S=(0,e.useRef)(!1),C=(0,e.useRef)(!1);o(()=>{let z=n.A.init();return z.then(G=>(re.current=G)&&pe(!1)).catch(G=>(G==null?void 0:G.type)!=="cancelation"&&console.error("Monaco initialization: error:",G)),()=>{var G,Y;return ae.current?((G=F.current)==null||G.dispose(),V?L&&f.set(A,ae.current.saveViewState()):(Y=ae.current.getModel())==null||Y.dispose(),void ae.current.dispose()):z.cancel()}}),d(()=>{var G,Y,le,se;let z=O(re.current,p||b||"",i||x||"",A||c||"");z!==((G=ae.current)==null?void 0:G.getModel())&&(L&&f.set(y,(Y=ae.current)==null?void 0:Y.saveViewState()),(le=ae.current)==null||le.setModel(z),L&&((se=ae.current)==null||se.restoreViewState(f.get(A))))},[A],Z),d(()=>{var z;(z=ae.current)==null||z.updateOptions(P)},[P],Z),d(()=>{!ae.current||b===void 0||(ae.current.getOption(re.current.editor.EditorOption.readOnly)?ae.current.setValue(b):b!==ae.current.getValue()&&(C.current=!0,ae.current.executeEdits("",[{range:ae.current.getModel().getFullModelRange(),text:b,forceMoveMarkers:!0}]),ae.current.pushUndoStop(),C.current=!1))},[b],Z),d(()=>{var G,Y;let z=(G=ae.current)==null?void 0:G.getModel();z&&x&&((Y=re.current)==null||Y.editor.setModelLanguage(z,x))},[x],Z),d(()=>{var z;w!==void 0&&((z=ae.current)==null||z.revealLine(w))},[w],Z),d(()=>{var z;(z=re.current)==null||z.editor.setTheme(_)},[_],Z);let I=(0,e.useCallback)(()=>{var z;if(ie.current&&re.current&&!S.current){D.current(re.current);let G=A||c,Y=O(re.current,b||p||"",i||x||"",G||"");ae.current=(z=re.current)==null?void 0:z.editor.create(ie.current,{model:Y,automaticLayout:!0,...P},M),L&&ae.current.restoreViewState(f.get(G)),re.current.editor.setTheme(_),w!==void 0&&ae.current.revealLine(w),X(!0),S.current=!0}},[p,i,c,b,x,A,P,M,L,_,w]);return(0,e.useEffect)(()=>{Z&&fe.current(ae.current,re.current)},[Z]),(0,e.useEffect)(()=>{!ee&&!Z&&I()},[ee,Z,I]),j.current=b,(0,e.useEffect)(()=>{var z,G;Z&&W&&((z=F.current)==null||z.dispose(),F.current=(G=ae.current)==null?void 0:G.onDidChangeModelContent(Y=>{C.current||W(ae.current.getValue(),Y)}))},[Z,W]),(0,e.useEffect)(()=>{if(Z){let z=re.current.editor.onDidChangeMarkers(G=>{var le;let Y=(le=ae.current.getModel())==null?void 0:le.uri;if(Y&&G.find(se=>se.path===Y.path)){let se=re.current.editor.getModelMarkers({resource:Y});q==null||q(se)}});return()=>{z==null||z.dispose()}}return()=>{}},[Z,q]),e.createElement(s,{width:B,height:T,isEditorReady:Z,loading:k,_ref:ie,className:U,wrapperProps:H})})},9492:function(R,g,t){var n=t(2472),e=t(3114),r=t(5156),a=t(9010),m=t(873);function h(d,E){(E==null||E>d.length)&&(E=d.length);for(var O=0,N=Array(E);O<E;O++)N[O]=d[O];return N}var l={http:e.A,xhr:r.A,fetch:a.A};n.A.forEach(l,function(d,E){if(d){try{Object.defineProperty(d,"name",{value:E})}catch{}Object.defineProperty(d,"adapterName",{value:E})}});var s=function(d){return"- ".concat(d)},o=function(d){return n.A.isFunction(d)||d===null||d===!1};g.A={getAdapter:function(d){for(var E,O,N=(d=n.A.isArray(d)?d:[d]).length,v={},f=0;f<N;f++){var u=void 0;if(O=E=d[f],!o(E)&&(O=l[(u=String(E)).toLowerCase()])===void 0)throw new m.A("Unknown adapter '".concat(u,"'"));if(O)break;v[u||"#"+f]=O}if(!O){var p=Object.entries(v).map(function(c){var b,x,A=(x=2,function(k){if(Array.isArray(k))return k}(b=c)||function(k,P){var M=k==null?null:typeof Symbol<"u"&&k[Symbol.iterator]||k["@@iterator"];if(M!=null){var L,V,B,T,U=[],H=!0,K=!1;try{if(B=(M=M.call(k)).next,P===0){if(Object(M)!==M)return;H=!1}else for(;!(H=(L=B.call(M)).done)&&(U.push(L.value),U.length!==P);H=!0);}catch(J){K=!0,V=J}finally{try{if(!H&&M.return!=null&&(T=M.return(),Object(T)!==T))return}finally{if(K)throw V}}return U}}(b,x)||function(k,P){if(k){if(typeof k=="string")return h(k,P);var M={}.toString.call(k).slice(8,-1);return M==="Object"&&k.constructor&&(M=k.constructor.name),M==="Map"||M==="Set"?Array.from(k):M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?h(k,P):void 0}}(b,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),_=A[0],w=A[1];return"adapter ".concat(_," ")+(w===!1?"is not supported by the environment":"is not available in the build")}),i=N?p.length>1?`since :
`+p.map(s).join(`
`):" "+s(p[0]):"as no adapter specified";throw new m.A("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return O},adapters:l}},9010:function(R,g,t){var n=t(125),e=t(2472),r=t(873),a=t(6902),m=t(5776),h=t(1733),l=t(5636),s=t(8985),o=t(2598);function d(B){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},d(B)}function E(B,T){var U=Object.keys(B);if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(B);T&&(H=H.filter(function(K){return Object.getOwnPropertyDescriptor(B,K).enumerable})),U.push.apply(U,H)}return U}function O(B){for(var T=1;T<arguments.length;T++){var U=arguments[T]!=null?arguments[T]:{};T%2?E(Object(U),!0).forEach(function(H){N(B,H,U[H])}):Object.getOwnPropertyDescriptors?Object.defineProperties(B,Object.getOwnPropertyDescriptors(U)):E(Object(U)).forEach(function(H){Object.defineProperty(B,H,Object.getOwnPropertyDescriptor(U,H))})}return B}function N(B,T,U){return(T=function(H){var K=function(J){if(d(J)!="object"||!J)return J;var W=J[Symbol.toPrimitive];if(W!==void 0){var q=W.call(J,"string");if(d(q)!="object")return q;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(J)}(H);return d(K)=="symbol"?K:K+""}(T))in B?Object.defineProperty(B,T,{value:U,enumerable:!0,configurable:!0,writable:!0}):B[T]=U,B}function v(B,T){return function(U){if(Array.isArray(U))return U}(B)||function(U,H){var K=U==null?null:typeof Symbol<"u"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var J,W,q,Z,X=[],ee=!0,pe=!1;try{if(q=(K=K.call(U)).next,H!==0)for(;!(ee=(J=q.call(K)).done)&&(X.push(J.value),X.length!==H);ee=!0);}catch(re){pe=!0,W=re}finally{try{if(!ee&&K.return!=null&&(Z=K.return(),Object(Z)!==Z))return}finally{if(pe)throw W}}return X}}(B,T)||function(U,H){if(U){if(typeof U=="string")return f(U,H);var K={}.toString.call(U).slice(8,-1);return K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set"?Array.from(U):K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K)?f(U,H):void 0}}(B,T)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(B,T){(T==null||T>B.length)&&(T=B.length);for(var U=0,H=Array(T);U<T;U++)H[U]=B[U];return H}function u(){u=function(){return T};var B,T={},U=Object.prototype,H=U.hasOwnProperty,K=Object.defineProperty||function($,te,ce){$[te]=ce.value},J=typeof Symbol=="function"?Symbol:{},W=J.iterator||"@@iterator",q=J.asyncIterator||"@@asyncIterator",Z=J.toStringTag||"@@toStringTag";function X($,te,ce){return Object.defineProperty($,te,{value:ce,enumerable:!0,configurable:!0,writable:!0}),$[te]}try{X({},"")}catch{X=function(te,ce,ve){return te[ce]=ve}}function ee($,te,ce,ve){var he=te&&te.prototype instanceof F?te:F,de=Object.create(he.prototype),Ie=new Ve(ve||[]);return K(de,"_invoke",{value:le($,ce,Ie)}),de}function pe($,te,ce){try{return{type:"normal",arg:$.call(te,ce)}}catch(ve){return{type:"throw",arg:ve}}}T.wrap=ee;var re="suspendedStart",ae="suspendedYield",ie="executing",fe="completed",D={};function F(){}function j(){}function y(){}var S={};X(S,W,function(){return this});var C=Object.getPrototypeOf,I=C&&C(C(Ye([])));I&&I!==U&&H.call(I,W)&&(S=I);var z=y.prototype=F.prototype=Object.create(S);function G($){["next","throw","return"].forEach(function(te){X($,te,function(ce){return this._invoke(te,ce)})})}function Y($,te){function ce(he,de,Ie,Be){var Ge=pe($[he],$,de);if(Ge.type!=="throw"){var et=Ge.arg,Q=et.value;return Q&&d(Q)=="object"&&H.call(Q,"__await")?te.resolve(Q.__await).then(function(ne){ce("next",ne,Ie,Be)},function(ne){ce("throw",ne,Ie,Be)}):te.resolve(Q).then(function(ne){et.value=ne,Ie(et)},function(ne){return ce("throw",ne,Ie,Be)})}Be(Ge.arg)}var ve;K(this,"_invoke",{value:function(he,de){function Ie(){return new te(function(Be,Ge){ce(he,de,Be,Ge)})}return ve=ve?ve.then(Ie,Ie):Ie()}})}function le($,te,ce){var ve=re;return function(he,de){if(ve===ie)throw Error("Generator is already running");if(ve===fe){if(he==="throw")throw de;return{value:B,done:!0}}for(ce.method=he,ce.arg=de;;){var Ie=ce.delegate;if(Ie){var Be=se(Ie,ce);if(Be){if(Be===D)continue;return Be}}if(ce.method==="next")ce.sent=ce._sent=ce.arg;else if(ce.method==="throw"){if(ve===re)throw ve=fe,ce.arg;ce.dispatchException(ce.arg)}else ce.method==="return"&&ce.abrupt("return",ce.arg);ve=ie;var Ge=pe($,te,ce);if(Ge.type==="normal"){if(ve=ce.done?fe:ae,Ge.arg===D)continue;return{value:Ge.arg,done:ce.done}}Ge.type==="throw"&&(ve=fe,ce.method="throw",ce.arg=Ge.arg)}}}function se($,te){var ce=te.method,ve=$.iterator[ce];if(ve===B)return te.delegate=null,ce==="throw"&&$.iterator.return&&(te.method="return",te.arg=B,se($,te),te.method==="throw")||ce!=="return"&&(te.method="throw",te.arg=new TypeError("The iterator does not provide a '"+ce+"' method")),D;var he=pe(ve,$.iterator,te.arg);if(he.type==="throw")return te.method="throw",te.arg=he.arg,te.delegate=null,D;var de=he.arg;return de?de.done?(te[$.resultName]=de.value,te.next=$.nextLoc,te.method!=="return"&&(te.method="next",te.arg=B),te.delegate=null,D):de:(te.method="throw",te.arg=new TypeError("iterator result is not an object"),te.delegate=null,D)}function _e($){var te={tryLoc:$[0]};1 in $&&(te.catchLoc=$[1]),2 in $&&(te.finallyLoc=$[2],te.afterLoc=$[3]),this.tryEntries.push(te)}function Se($){var te=$.completion||{};te.type="normal",delete te.arg,$.completion=te}function Ve($){this.tryEntries=[{tryLoc:"root"}],$.forEach(_e,this),this.reset(!0)}function Ye($){if($||$===""){var te=$[W];if(te)return te.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var ce=-1,ve=function he(){for(;++ce<$.length;)if(H.call($,ce))return he.value=$[ce],he.done=!1,he;return he.value=B,he.done=!0,he};return ve.next=ve}}throw new TypeError(d($)+" is not iterable")}return j.prototype=y,K(z,"constructor",{value:y,configurable:!0}),K(y,"constructor",{value:j,configurable:!0}),j.displayName=X(y,Z,"GeneratorFunction"),T.isGeneratorFunction=function($){var te=typeof $=="function"&&$.constructor;return!!te&&(te===j||(te.displayName||te.name)==="GeneratorFunction")},T.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,y):($.__proto__=y,X($,Z,"GeneratorFunction")),$.prototype=Object.create(z),$},T.awrap=function($){return{__await:$}},G(Y.prototype),X(Y.prototype,q,function(){return this}),T.AsyncIterator=Y,T.async=function($,te,ce,ve,he){he===void 0&&(he=Promise);var de=new Y(ee($,te,ce,ve),he);return T.isGeneratorFunction(te)?de:de.next().then(function(Ie){return Ie.done?Ie.value:de.next()})},G(z),X(z,Z,"Generator"),X(z,W,function(){return this}),X(z,"toString",function(){return"[object Generator]"}),T.keys=function($){var te=Object($),ce=[];for(var ve in te)ce.push(ve);return ce.reverse(),function he(){for(;ce.length;){var de=ce.pop();if(de in te)return he.value=de,he.done=!1,he}return he.done=!0,he}},T.values=Ye,Ve.prototype={constructor:Ve,reset:function($){if(this.prev=0,this.next=0,this.sent=this._sent=B,this.done=!1,this.delegate=null,this.method="next",this.arg=B,this.tryEntries.forEach(Se),!$)for(var te in this)te.charAt(0)==="t"&&H.call(this,te)&&!isNaN(+te.slice(1))&&(this[te]=B)},stop:function(){this.done=!0;var $=this.tryEntries[0].completion;if($.type==="throw")throw $.arg;return this.rval},dispatchException:function($){if(this.done)throw $;var te=this;function ce(Ge,et){return de.type="throw",de.arg=$,te.next=Ge,et&&(te.method="next",te.arg=B),!!et}for(var ve=this.tryEntries.length-1;ve>=0;--ve){var he=this.tryEntries[ve],de=he.completion;if(he.tryLoc==="root")return ce("end");if(he.tryLoc<=this.prev){var Ie=H.call(he,"catchLoc"),Be=H.call(he,"finallyLoc");if(Ie&&Be){if(this.prev<he.catchLoc)return ce(he.catchLoc,!0);if(this.prev<he.finallyLoc)return ce(he.finallyLoc)}else if(Ie){if(this.prev<he.catchLoc)return ce(he.catchLoc,!0)}else{if(!Be)throw Error("try statement without catch or finally");if(this.prev<he.finallyLoc)return ce(he.finallyLoc)}}}},abrupt:function($,te){for(var ce=this.tryEntries.length-1;ce>=0;--ce){var ve=this.tryEntries[ce];if(ve.tryLoc<=this.prev&&H.call(ve,"finallyLoc")&&this.prev<ve.finallyLoc){var he=ve;break}}he&&($==="break"||$==="continue")&&he.tryLoc<=te&&te<=he.finallyLoc&&(he=null);var de=he?he.completion:{};return de.type=$,de.arg=te,he?(this.method="next",this.next=he.finallyLoc,D):this.complete(de)},complete:function($,te){if($.type==="throw")throw $.arg;return $.type==="break"||$.type==="continue"?this.next=$.arg:$.type==="return"?(this.rval=this.arg=$.arg,this.method="return",this.next="end"):$.type==="normal"&&te&&(this.next=te),D},finish:function($){for(var te=this.tryEntries.length-1;te>=0;--te){var ce=this.tryEntries[te];if(ce.finallyLoc===$)return this.complete(ce.completion,ce.afterLoc),Se(ce),D}},catch:function($){for(var te=this.tryEntries.length-1;te>=0;--te){var ce=this.tryEntries[te];if(ce.tryLoc===$){var ve=ce.completion;if(ve.type==="throw"){var he=ve.arg;Se(ce)}return he}}throw Error("illegal catch attempt")},delegateYield:function($,te,ce){return this.delegate={iterator:Ye($),resultName:te,nextLoc:ce},this.method==="next"&&(this.arg=B),D}},T}function p(B,T,U,H,K,J,W){try{var q=B[J](W),Z=q.value}catch(X){return void U(X)}q.done?T(Z):Promise.resolve(Z).then(H,K)}function i(B){return function(){var T=this,U=arguments;return new Promise(function(H,K){var J=B.apply(T,U);function W(Z){p(J,H,K,W,q,"next",Z)}function q(Z){p(J,H,K,W,q,"throw",Z)}W(void 0)})}}var c,b,x=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",A=x&&typeof ReadableStream=="function",_=x&&(typeof TextEncoder=="function"?(c=new TextEncoder,function(B){return c.encode(B)}):function(){var B=i(u().mark(function T(U){return u().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.t0=Uint8Array,H.next=3,new Response(U).arrayBuffer();case 3:return H.t1=H.sent,H.abrupt("return",new H.t0(H.t1));case 5:case"end":return H.stop()}},T)}));return function(T){return B.apply(this,arguments)}}()),w=function(B){try{for(var T=arguments.length,U=new Array(T>1?T-1:0),H=1;H<T;H++)U[H-1]=arguments[H];return!!B.apply(void 0,U)}catch{return!1}},k=A&&w(function(){var B=!1,T=new Request(n.A.origin,{body:new ReadableStream,method:"POST",get duplex(){return B=!0,"half"}}).headers.has("Content-Type");return B&&!T}),P=A&&w(function(){return e.A.isReadableStream(new Response("").body)}),M={stream:P&&function(B){return B.body}};x&&(b=new Response,["text","arrayBuffer","blob","formData","stream"].forEach(function(B){!M[B]&&(M[B]=e.A.isFunction(b[B])?function(T){return T[B]()}:function(T,U){throw new r.A("Response type '".concat(B,"' is not supported"),r.A.ERR_NOT_SUPPORT,U)})}));var L=function(){var B=i(u().mark(function T(U){var H;return u().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:if(U!=null){K.next=2;break}return K.abrupt("return",0);case 2:if(!e.A.isBlob(U)){K.next=4;break}return K.abrupt("return",U.size);case 4:if(!e.A.isSpecCompliantForm(U)){K.next=9;break}return H=new Request(n.A.origin,{method:"POST",body:U}),K.next=8,H.arrayBuffer();case 8:case 15:return K.abrupt("return",K.sent.byteLength);case 9:if(!e.A.isArrayBufferView(U)&&!e.A.isArrayBuffer(U)){K.next=11;break}return K.abrupt("return",U.byteLength);case 11:if(e.A.isURLSearchParams(U)&&(U+=""),!e.A.isString(U)){K.next=16;break}return K.next=15,_(U);case 16:case"end":return K.stop()}},T)}));return function(T){return B.apply(this,arguments)}}(),V=function(){var B=i(u().mark(function T(U,H){var K;return u().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return K=e.A.toFiniteNumber(U.getContentLength()),J.abrupt("return",K??L(H));case 2:case"end":return J.stop()}},T)}));return function(T,U){return B.apply(this,arguments)}}();g.A=x&&function(){var B=i(u().mark(function T(U){var H,K,J,W,q,Z,X,ee,pe,re,ae,ie,fe,D,F,j,y,S,C,I,z,G,Y,le,se,_e,Se,Ve,Ye,$,te,ce,ve,he;return u().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:if(H=(0,s.A)(U),K=H.url,J=H.method,W=H.data,q=H.signal,Z=H.cancelToken,X=H.timeout,ee=H.onDownloadProgress,pe=H.onUploadProgress,re=H.responseType,ae=H.headers,ie=H.withCredentials,fe=ie===void 0?"same-origin":ie,D=H.fetchOptions,re=re?(re+"").toLowerCase():"text",F=(0,a.A)([q,Z&&Z.toAbortSignal()],X),y=F&&F.unsubscribe&&function(){F.unsubscribe()},de.prev=4,de.t0=pe&&k&&J!=="get"&&J!=="head",!de.t0){de.next=11;break}return de.next=9,V(ae,W);case 9:de.t1=S=de.sent,de.t0=de.t1!==0;case 11:if(!de.t0){de.next=15;break}C=new Request(K,{method:"POST",body:W,duplex:"half"}),e.A.isFormData(W)&&(I=C.headers.get("content-type"))&&ae.setContentType(I),C.body&&(z=(0,l.Vj)(S,(0,l.C1)((0,l.mM)(pe))),G=v(z,2),Y=G[0],le=G[1],W=(0,m.E9)(C.body,65536,Y,le));case 15:return e.A.isString(fe)||(fe=fe?"include":"omit"),se="credentials"in Request.prototype,j=new Request(K,O(O({},D),{},{signal:F,method:J.toUpperCase(),headers:ae.normalize().toJSON(),body:W,duplex:"half",credentials:se?fe:void 0})),de.next=20,fetch(j);case 20:return _e=de.sent,Se=P&&(re==="stream"||re==="response"),P&&(ee||Se&&y)&&(Ve={},["status","statusText","headers"].forEach(function(Ie){Ve[Ie]=_e[Ie]}),Ye=e.A.toFiniteNumber(_e.headers.get("content-length")),$=ee&&(0,l.Vj)(Ye,(0,l.C1)((0,l.mM)(ee),!0))||[],te=v($,2),ce=te[0],ve=te[1],_e=new Response((0,m.E9)(_e.body,65536,ce,function(){ve&&ve(),y&&y()}),Ve)),re=re||"text",de.next=26,M[e.A.findKey(M,re)||"text"](_e,U);case 26:return he=de.sent,!Se&&y&&y(),de.next=30,new Promise(function(Ie,Be){(0,o.A)(Ie,Be,{data:he,headers:h.A.from(_e.headers),status:_e.status,statusText:_e.statusText,config:U,request:j})});case 30:return de.abrupt("return",de.sent);case 33:if(de.prev=33,de.t2=de.catch(4),y&&y(),!de.t2||de.t2.name!=="TypeError"||!/fetch/i.test(de.t2.message)){de.next=38;break}throw Object.assign(new r.A("Network Error",r.A.ERR_NETWORK,U,j),{cause:de.t2.cause||de.t2});case 38:throw r.A.from(de.t2,de.t2&&de.t2.code,U,j);case 39:case"end":return de.stop()}},T,null,[[4,33]])}));return function(T){return B.apply(this,arguments)}}()},5156:function(R,g,t){var n=t(2472),e=t(2598),r=t(7820),a=t(873),m=t(6068),h=t(3612),l=t(125),s=t(1733),o=t(5636),d=t(8985);function E(v,f){return function(u){if(Array.isArray(u))return u}(v)||function(u,p){var i=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(i!=null){var c,b,x,A,_=[],w=!0,k=!1;try{if(x=(i=i.call(u)).next,p!==0)for(;!(w=(c=x.call(i)).done)&&(_.push(c.value),_.length!==p);w=!0);}catch(P){k=!0,b=P}finally{try{if(!w&&i.return!=null&&(A=i.return(),Object(A)!==A))return}finally{if(k)throw b}}return _}}(v,f)||function(u,p){if(u){if(typeof u=="string")return O(u,p);var i={}.toString.call(u).slice(8,-1);return i==="Object"&&u.constructor&&(i=u.constructor.name),i==="Map"||i==="Set"?Array.from(u):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?O(u,p):void 0}}(v,f)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function O(v,f){(f==null||f>v.length)&&(f=v.length);for(var u=0,p=Array(f);u<f;u++)p[u]=v[u];return p}var N=typeof XMLHttpRequest<"u";g.A=N&&function(v){return new Promise(function(f,u){var p,i,c,b,x,A=(0,d.A)(v),_=A.data,w=s.A.from(A.headers).normalize(),k=A.responseType,P=A.onUploadProgress,M=A.onDownloadProgress;function L(){b&&b(),x&&x(),A.cancelToken&&A.cancelToken.unsubscribe(p),A.signal&&A.signal.removeEventListener("abort",p)}var V=new XMLHttpRequest;function B(){if(V){var K=s.A.from("getAllResponseHeaders"in V&&V.getAllResponseHeaders()),J={data:k&&k!=="text"&&k!=="json"?V.response:V.responseText,status:V.status,statusText:V.statusText,headers:K,config:v,request:V};(0,e.A)(function(W){f(W),L()},function(W){u(W),L()},J),V=null}}if(V.open(A.method.toUpperCase(),A.url,!0),V.timeout=A.timeout,"onloadend"in V?V.onloadend=B:V.onreadystatechange=function(){V&&V.readyState===4&&(V.status!==0||V.responseURL&&V.responseURL.indexOf("file:")===0)&&setTimeout(B)},V.onabort=function(){V&&(u(new a.A("Request aborted",a.A.ECONNABORTED,v,V)),V=null)},V.onerror=function(){u(new a.A("Network Error",a.A.ERR_NETWORK,v,V)),V=null},V.ontimeout=function(){var K=A.timeout?"timeout of "+A.timeout+"ms exceeded":"timeout exceeded",J=A.transitional||r.A;A.timeoutErrorMessage&&(K=A.timeoutErrorMessage),u(new a.A(K,J.clarifyTimeoutError?a.A.ETIMEDOUT:a.A.ECONNABORTED,v,V)),V=null},_===void 0&&w.setContentType(null),"setRequestHeader"in V&&n.A.forEach(w.toJSON(),function(K,J){V.setRequestHeader(J,K)}),n.A.isUndefined(A.withCredentials)||(V.withCredentials=!!A.withCredentials),k&&k!=="json"&&(V.responseType=A.responseType),M){var T=E((0,o.C1)(M,!0),2);c=T[0],x=T[1],V.addEventListener("progress",c)}if(P&&V.upload){var U=E((0,o.C1)(P),2);i=U[0],b=U[1],V.upload.addEventListener("progress",i),V.upload.addEventListener("loadend",b)}(A.cancelToken||A.signal)&&(p=function(K){V&&(u(!K||K.type?new m.A(null,v,V):K),V.abort(),V=null)},A.cancelToken&&A.cancelToken.subscribe(p),A.signal&&(A.signal.aborted?p():A.signal.addEventListener("abort",p)));var H=(0,h.A)(A.url);H&&l.A.protocols.indexOf(H)===-1?u(new a.A("Unsupported protocol "+H+":",a.A.ERR_BAD_REQUEST,v)):V.send(_||null)})}},2936:function(R,g,t){var n=t(2472),e=t(9328),r=t(6751),a=t(755),m=t(5504),h=t(4334),l=t(6068),s=t(8235),o=t(4180),d=t(3922),E=t(780),O=t(873),N=t(9048),v=t(1919),f=t(1733),u=t(9492),p=t(2536),i=function c(b){var x=new r.A(b),A=(0,e.A)(r.A.prototype.request,x);return n.A.extend(A,r.A.prototype,x,{allOwnKeys:!0}),n.A.extend(A,x,null,{allOwnKeys:!0}),A.create=function(_){return c((0,a.A)(b,_))},A}(m.A);i.Axios=r.A,i.CanceledError=l.A,i.CancelToken=s.A,i.isCancel=o.A,i.VERSION=d.x,i.toFormData=E.A,i.AxiosError=O.A,i.Cancel=i.CanceledError,i.all=function(c){return Promise.all(c)},i.spread=N.A,i.isAxiosError=v.A,i.mergeConfig=a.A,i.AxiosHeaders=f.A,i.formToJSON=function(c){return(0,h.A)(n.A.isHTMLForm(c)?new FormData(c):c)},i.getAdapter=u.A.getAdapter,i.HttpStatusCode=p.A,i.default=i,g.A=i},8235:function(R,g,t){var n=t(6068);function e(h){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},e(h)}function r(h,l){for(var s=0;s<l.length;s++){var o=l[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(h,a(o.key),o)}}function a(h){var l=function(s){if(e(s)!="object"||!s)return s;var o=s[Symbol.toPrimitive];if(o!==void 0){var d=o.call(s,"string");if(e(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(h);return e(l)=="symbol"?l:l+""}var m=function(){function h(d){if(function(N,v){if(!(N instanceof v))throw new TypeError("Cannot call a class as a function")}(this,h),typeof d!="function")throw new TypeError("executor must be a function.");var E;this.promise=new Promise(function(N){E=N});var O=this;this.promise.then(function(N){if(O._listeners){for(var v=O._listeners.length;v-- >0;)O._listeners[v](N);O._listeners=null}}),this.promise.then=function(N){var v,f=new Promise(function(u){O.subscribe(u),v=u}).then(N);return f.cancel=function(){O.unsubscribe(v)},f},d(function(N,v,f){O.reason||(O.reason=new n.A(N,v,f),E(O.reason))})}return l=h,o=[{key:"source",value:function(){var d;return{token:new h(function(E){d=E}),cancel:d}}}],(s=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(d){this.reason?d(this.reason):this._listeners?this._listeners.push(d):this._listeners=[d]}},{key:"unsubscribe",value:function(d){if(this._listeners){var E=this._listeners.indexOf(d);E!==-1&&this._listeners.splice(E,1)}}},{key:"toAbortSignal",value:function(){var d=this,E=new AbortController,O=function(N){E.abort(N)};return this.subscribe(O),E.signal.unsubscribe=function(){return d.unsubscribe(O)},E.signal}}])&&r(l.prototype,s),o&&r(l,o),Object.defineProperty(l,"prototype",{writable:!1}),l;var l,s,o}();g.A=m},6068:function(R,g,t){var n=t(873);function e(r,a,m){n.A.call(this,r??"canceled",n.A.ERR_CANCELED,a,m),this.name="CanceledError"}t(2472).A.inherits(e,n.A,{__CANCEL__:!0}),g.A=e},4180:function(R,g,t){function n(e){return!(!e||!e.__CANCEL__)}t.d(g,{A:function(){return n}})},6751:function(R,g,t){var n=t(2472),e=t(6358),r=t(8683),a=t(3342),m=t(755),h=t(3891),l=t(2325),s=t(1733);function o(u){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},o(u)}function d(){d=function(){return p};var u,p={},i=Object.prototype,c=i.hasOwnProperty,b=Object.defineProperty||function(j,y,S){j[y]=S.value},x=typeof Symbol=="function"?Symbol:{},A=x.iterator||"@@iterator",_=x.asyncIterator||"@@asyncIterator",w=x.toStringTag||"@@toStringTag";function k(j,y,S){return Object.defineProperty(j,y,{value:S,enumerable:!0,configurable:!0,writable:!0}),j[y]}try{k({},"")}catch{k=function(y,S,C){return y[S]=C}}function P(j,y,S,C){var I=y&&y.prototype instanceof H?y:H,z=Object.create(I.prototype),G=new D(C||[]);return b(z,"_invoke",{value:re(j,S,G)}),z}function M(j,y,S){try{return{type:"normal",arg:j.call(y,S)}}catch(C){return{type:"throw",arg:C}}}p.wrap=P;var L="suspendedStart",V="suspendedYield",B="executing",T="completed",U={};function H(){}function K(){}function J(){}var W={};k(W,A,function(){return this});var q=Object.getPrototypeOf,Z=q&&q(q(F([])));Z&&Z!==i&&c.call(Z,A)&&(W=Z);var X=J.prototype=H.prototype=Object.create(W);function ee(j){["next","throw","return"].forEach(function(y){k(j,y,function(S){return this._invoke(y,S)})})}function pe(j,y){function S(I,z,G,Y){var le=M(j[I],j,z);if(le.type!=="throw"){var se=le.arg,_e=se.value;return _e&&o(_e)=="object"&&c.call(_e,"__await")?y.resolve(_e.__await).then(function(Se){S("next",Se,G,Y)},function(Se){S("throw",Se,G,Y)}):y.resolve(_e).then(function(Se){se.value=Se,G(se)},function(Se){return S("throw",Se,G,Y)})}Y(le.arg)}var C;b(this,"_invoke",{value:function(I,z){function G(){return new y(function(Y,le){S(I,z,Y,le)})}return C=C?C.then(G,G):G()}})}function re(j,y,S){var C=L;return function(I,z){if(C===B)throw Error("Generator is already running");if(C===T){if(I==="throw")throw z;return{value:u,done:!0}}for(S.method=I,S.arg=z;;){var G=S.delegate;if(G){var Y=ae(G,S);if(Y){if(Y===U)continue;return Y}}if(S.method==="next")S.sent=S._sent=S.arg;else if(S.method==="throw"){if(C===L)throw C=T,S.arg;S.dispatchException(S.arg)}else S.method==="return"&&S.abrupt("return",S.arg);C=B;var le=M(j,y,S);if(le.type==="normal"){if(C=S.done?T:V,le.arg===U)continue;return{value:le.arg,done:S.done}}le.type==="throw"&&(C=T,S.method="throw",S.arg=le.arg)}}}function ae(j,y){var S=y.method,C=j.iterator[S];if(C===u)return y.delegate=null,S==="throw"&&j.iterator.return&&(y.method="return",y.arg=u,ae(j,y),y.method==="throw")||S!=="return"&&(y.method="throw",y.arg=new TypeError("The iterator does not provide a '"+S+"' method")),U;var I=M(C,j.iterator,y.arg);if(I.type==="throw")return y.method="throw",y.arg=I.arg,y.delegate=null,U;var z=I.arg;return z?z.done?(y[j.resultName]=z.value,y.next=j.nextLoc,y.method!=="return"&&(y.method="next",y.arg=u),y.delegate=null,U):z:(y.method="throw",y.arg=new TypeError("iterator result is not an object"),y.delegate=null,U)}function ie(j){var y={tryLoc:j[0]};1 in j&&(y.catchLoc=j[1]),2 in j&&(y.finallyLoc=j[2],y.afterLoc=j[3]),this.tryEntries.push(y)}function fe(j){var y=j.completion||{};y.type="normal",delete y.arg,j.completion=y}function D(j){this.tryEntries=[{tryLoc:"root"}],j.forEach(ie,this),this.reset(!0)}function F(j){if(j||j===""){var y=j[A];if(y)return y.call(j);if(typeof j.next=="function")return j;if(!isNaN(j.length)){var S=-1,C=function I(){for(;++S<j.length;)if(c.call(j,S))return I.value=j[S],I.done=!1,I;return I.value=u,I.done=!0,I};return C.next=C}}throw new TypeError(o(j)+" is not iterable")}return K.prototype=J,b(X,"constructor",{value:J,configurable:!0}),b(J,"constructor",{value:K,configurable:!0}),K.displayName=k(J,w,"GeneratorFunction"),p.isGeneratorFunction=function(j){var y=typeof j=="function"&&j.constructor;return!!y&&(y===K||(y.displayName||y.name)==="GeneratorFunction")},p.mark=function(j){return Object.setPrototypeOf?Object.setPrototypeOf(j,J):(j.__proto__=J,k(j,w,"GeneratorFunction")),j.prototype=Object.create(X),j},p.awrap=function(j){return{__await:j}},ee(pe.prototype),k(pe.prototype,_,function(){return this}),p.AsyncIterator=pe,p.async=function(j,y,S,C,I){I===void 0&&(I=Promise);var z=new pe(P(j,y,S,C),I);return p.isGeneratorFunction(y)?z:z.next().then(function(G){return G.done?G.value:z.next()})},ee(X),k(X,w,"Generator"),k(X,A,function(){return this}),k(X,"toString",function(){return"[object Generator]"}),p.keys=function(j){var y=Object(j),S=[];for(var C in y)S.push(C);return S.reverse(),function I(){for(;S.length;){var z=S.pop();if(z in y)return I.value=z,I.done=!1,I}return I.done=!0,I}},p.values=F,D.prototype={constructor:D,reset:function(j){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(fe),!j)for(var y in this)y.charAt(0)==="t"&&c.call(this,y)&&!isNaN(+y.slice(1))&&(this[y]=u)},stop:function(){this.done=!0;var j=this.tryEntries[0].completion;if(j.type==="throw")throw j.arg;return this.rval},dispatchException:function(j){if(this.done)throw j;var y=this;function S(le,se){return z.type="throw",z.arg=j,y.next=le,se&&(y.method="next",y.arg=u),!!se}for(var C=this.tryEntries.length-1;C>=0;--C){var I=this.tryEntries[C],z=I.completion;if(I.tryLoc==="root")return S("end");if(I.tryLoc<=this.prev){var G=c.call(I,"catchLoc"),Y=c.call(I,"finallyLoc");if(G&&Y){if(this.prev<I.catchLoc)return S(I.catchLoc,!0);if(this.prev<I.finallyLoc)return S(I.finallyLoc)}else if(G){if(this.prev<I.catchLoc)return S(I.catchLoc,!0)}else{if(!Y)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return S(I.finallyLoc)}}}},abrupt:function(j,y){for(var S=this.tryEntries.length-1;S>=0;--S){var C=this.tryEntries[S];if(C.tryLoc<=this.prev&&c.call(C,"finallyLoc")&&this.prev<C.finallyLoc){var I=C;break}}I&&(j==="break"||j==="continue")&&I.tryLoc<=y&&y<=I.finallyLoc&&(I=null);var z=I?I.completion:{};return z.type=j,z.arg=y,I?(this.method="next",this.next=I.finallyLoc,U):this.complete(z)},complete:function(j,y){if(j.type==="throw")throw j.arg;return j.type==="break"||j.type==="continue"?this.next=j.arg:j.type==="return"?(this.rval=this.arg=j.arg,this.method="return",this.next="end"):j.type==="normal"&&y&&(this.next=y),U},finish:function(j){for(var y=this.tryEntries.length-1;y>=0;--y){var S=this.tryEntries[y];if(S.finallyLoc===j)return this.complete(S.completion,S.afterLoc),fe(S),U}},catch:function(j){for(var y=this.tryEntries.length-1;y>=0;--y){var S=this.tryEntries[y];if(S.tryLoc===j){var C=S.completion;if(C.type==="throw"){var I=C.arg;fe(S)}return I}}throw Error("illegal catch attempt")},delegateYield:function(j,y,S){return this.delegate={iterator:F(j),resultName:y,nextLoc:S},this.method==="next"&&(this.arg=u),U}},p}function E(u,p,i,c,b,x,A){try{var _=u[x](A),w=_.value}catch(k){return void i(k)}_.done?p(w):Promise.resolve(w).then(c,b)}function O(u,p){for(var i=0;i<p.length;i++){var c=p[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(u,N(c.key),c)}}function N(u){var p=function(i){if(o(i)!="object"||!i)return i;var c=i[Symbol.toPrimitive];if(c!==void 0){var b=c.call(i,"string");if(o(b)!="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(u);return o(p)=="symbol"?p:p+""}var v=l.A.validators,f=function(){return u=function b(x){(function(A,_){if(!(A instanceof _))throw new TypeError("Cannot call a class as a function")})(this,b),this.defaults=x,this.interceptors={request:new r.A,response:new r.A}},p=[{key:"request",value:(i=d().mark(function b(x,A){var _,w;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.prev=0,k.next=3,this._request(x,A);case 3:return k.abrupt("return",k.sent);case 6:if(k.prev=6,k.t0=k.catch(0),k.t0 instanceof Error){Error.captureStackTrace?Error.captureStackTrace(_={}):_=new Error,w=_.stack?_.stack.replace(/^.+\n/,""):"";try{k.t0.stack?w&&!String(k.t0.stack).endsWith(w.replace(/^.+\n.+\n/,""))&&(k.t0.stack+=`
`+w):k.t0.stack=w}catch{}}throw k.t0;case 10:case"end":return k.stop()}},b,this,[[0,6]])}),c=function(){var b=this,x=arguments;return new Promise(function(A,_){var w=i.apply(b,x);function k(M){E(w,A,_,k,P,"next",M)}function P(M){E(w,A,_,k,P,"throw",M)}k(void 0)})},function(b,x){return c.apply(this,arguments)})},{key:"_request",value:function(b,x){typeof b=="string"?(x=x||{}).url=b:x=b||{};var A=x=(0,m.A)(this.defaults,x),_=A.transitional,w=A.paramsSerializer,k=A.headers;_!==void 0&&l.A.assertOptions(_,{silentJSONParsing:v.transitional(v.boolean),forcedJSONParsing:v.transitional(v.boolean),clarifyTimeoutError:v.transitional(v.boolean)},!1),w!=null&&(n.A.isFunction(w)?x.paramsSerializer={serialize:w}:l.A.assertOptions(w,{encode:v.function,serialize:v.function},!0)),x.method=(x.method||this.defaults.method||"get").toLowerCase();var P=k&&n.A.merge(k.common,k[x.method]);k&&n.A.forEach(["delete","get","head","post","put","patch","common"],function(q){delete k[q]}),x.headers=s.A.concat(P,k);var M=[],L=!0;this.interceptors.request.forEach(function(q){typeof q.runWhen=="function"&&q.runWhen(x)===!1||(L=L&&q.synchronous,M.unshift(q.fulfilled,q.rejected))});var V,B=[];this.interceptors.response.forEach(function(q){B.push(q.fulfilled,q.rejected)});var T,U=0;if(!L){var H=[a.A.bind(this),void 0];for(H.unshift.apply(H,M),H.push.apply(H,B),T=H.length,V=Promise.resolve(x);U<T;)V=V.then(H[U++],H[U++]);return V}T=M.length;var K=x;for(U=0;U<T;){var J=M[U++],W=M[U++];try{K=J(K)}catch(q){W.call(this,q);break}}try{V=a.A.call(this,K)}catch(q){return Promise.reject(q)}for(U=0,T=B.length;U<T;)V=V.then(B[U++],B[U++]);return V}},{key:"getUri",value:function(b){b=(0,m.A)(this.defaults,b);var x=(0,h.A)(b.baseURL,b.url);return(0,e.A)(x,b.params,b.paramsSerializer)}}],p&&O(u.prototype,p),Object.defineProperty(u,"prototype",{writable:!1}),u;var u,p,i,c}();n.A.forEach(["delete","get","head","options"],function(u){f.prototype[u]=function(p,i){return this.request((0,m.A)(i||{},{method:u,url:p,data:(i||{}).data}))}}),n.A.forEach(["post","put","patch"],function(u){function p(i){return function(c,b,x){return this.request((0,m.A)(x||{},{method:u,headers:i?{"Content-Type":"multipart/form-data"}:{},url:c,data:b}))}}f.prototype[u]=p(),f.prototype[u+"Form"]=p(!0)}),g.A=f},873:function(R,g,t){var n=t(2472);function e(m,h,l,s,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=m,this.name="AxiosError",h&&(this.code=h),l&&(this.config=l),s&&(this.request=s),o&&(this.response=o,this.status=o.status?o.status:null)}n.A.inherits(e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n.A.toJSONObject(this.config),code:this.code,status:this.status}}});var r=e.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(m){a[m]={value:m}}),Object.defineProperties(e,a),Object.defineProperty(r,"isAxiosError",{value:!0}),e.from=function(m,h,l,s,o,d){var E=Object.create(r);return n.A.toFlatObject(m,E,function(O){return O!==Error.prototype},function(O){return O!=="isAxiosError"}),e.call(E,m.message,h,l,s,o),E.cause=m,E.name=m.name,d&&Object.assign(E,d),E},g.A=e},1733:function(R,g,t){var n=t(2472),e=t(8312);function r(v){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},r(v)}function a(v,f){return function(u){if(Array.isArray(u))return u}(v)||function(u,p){var i=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(i!=null){var c,b,x,A,_=[],w=!0,k=!1;try{if(x=(i=i.call(u)).next,p!==0)for(;!(w=(c=x.call(i)).done)&&(_.push(c.value),_.length!==p);w=!0);}catch(P){k=!0,b=P}finally{try{if(!w&&i.return!=null&&(A=i.return(),Object(A)!==A))return}finally{if(k)throw b}}return _}}(v,f)||m(v,f)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(v,f){if(v){if(typeof v=="string")return h(v,f);var u={}.toString.call(v).slice(8,-1);return u==="Object"&&v.constructor&&(u=v.constructor.name),u==="Map"||u==="Set"?Array.from(v):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?h(v,f):void 0}}function h(v,f){(f==null||f>v.length)&&(f=v.length);for(var u=0,p=Array(f);u<f;u++)p[u]=v[u];return p}function l(v,f){for(var u=0;u<f.length;u++){var p=f[u];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(v,s(p.key),p)}}function s(v){var f=function(u){if(r(u)!="object"||!u)return u;var p=u[Symbol.toPrimitive];if(p!==void 0){var i=p.call(u,"string");if(r(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(u)}(v);return r(f)=="symbol"?f:f+""}var o=Symbol("internals");function d(v){return v&&String(v).trim().toLowerCase()}function E(v){return v===!1||v==null?v:n.A.isArray(v)?v.map(E):String(v)}function O(v,f,u,p,i){return n.A.isFunction(p)?p.call(this,f,u):(i&&(f=u),n.A.isString(f)?n.A.isString(p)?f.indexOf(p)!==-1:n.A.isRegExp(p)?p.test(f):void 0:void 0)}var N=function(){return v=function p(i){(function(c,b){if(!(c instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),i&&this.set(i)},f=[{key:"set",value:function(p,i,c){var b=this;function x(M,L,V){var B=d(L);if(!B)throw new Error("header name must be a non-empty string");var T=n.A.findKey(b,B);(!T||b[T]===void 0||V===!0||V===void 0&&b[T]!==!1)&&(b[T||L]=E(M))}var A=function(M,L){return n.A.forEach(M,function(V,B){return x(V,B,L)})};if(n.A.isPlainObject(p)||p instanceof this.constructor)A(p,i);else if(n.A.isString(p)&&(p=p.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(p.trim()))A((0,e.A)(p),i);else if(n.A.isHeaders(p)){var _,w=function(M){var L=typeof Symbol<"u"&&M[Symbol.iterator]||M["@@iterator"];if(!L){if(Array.isArray(M)||(L=m(M))){L&&(M=L);var V=0,B=function(){};return{s:B,n:function(){return V>=M.length?{done:!0}:{done:!1,value:M[V++]}},e:function(K){throw K},f:B}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T,U=!0,H=!1;return{s:function(){L=L.call(M)},n:function(){var K=L.next();return U=K.done,K},e:function(K){H=!0,T=K},f:function(){try{U||L.return==null||L.return()}finally{if(H)throw T}}}}(p.entries());try{for(w.s();!(_=w.n()).done;){var k=a(_.value,2),P=k[0];x(k[1],P,c)}}catch(M){w.e(M)}finally{w.f()}}else p!=null&&x(i,p,c);return this}},{key:"get",value:function(p,i){if(p=d(p)){var c=n.A.findKey(this,p);if(c){var b=this[c];if(!i)return b;if(i===!0)return function(x){for(var A,_=Object.create(null),w=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;A=w.exec(x);)_[A[1]]=A[2];return _}(b);if(n.A.isFunction(i))return i.call(this,b,c);if(n.A.isRegExp(i))return i.exec(b);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(p,i){if(p=d(p)){var c=n.A.findKey(this,p);return!(!c||this[c]===void 0||i&&!O(0,this[c],c,i))}return!1}},{key:"delete",value:function(p,i){var c=this,b=!1;function x(A){if(A=d(A)){var _=n.A.findKey(c,A);!_||i&&!O(0,c[_],_,i)||(delete c[_],b=!0)}}return n.A.isArray(p)?p.forEach(x):x(p),b}},{key:"clear",value:function(p){for(var i=Object.keys(this),c=i.length,b=!1;c--;){var x=i[c];p&&!O(0,this[x],x,p,!0)||(delete this[x],b=!0)}return b}},{key:"normalize",value:function(p){var i=this,c={};return n.A.forEach(this,function(b,x){var A=n.A.findKey(c,x);if(A)return i[A]=E(b),void delete i[x];var _=p?function(w){return w.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(k,P,M){return P.toUpperCase()+M})}(x):String(x).trim();_!==x&&delete i[x],i[_]=E(b),c[_]=!0}),this}},{key:"concat",value:function(){for(var p,i=arguments.length,c=new Array(i),b=0;b<i;b++)c[b]=arguments[b];return(p=this.constructor).concat.apply(p,[this].concat(c))}},{key:"toJSON",value:function(p){var i=Object.create(null);return n.A.forEach(this,function(c,b){c!=null&&c!==!1&&(i[b]=p&&n.A.isArray(c)?c.join(", "):c)}),i}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(p){var i=a(p,2);return i[0]+": "+i[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],u=[{key:"from",value:function(p){return p instanceof this?p:new this(p)}},{key:"concat",value:function(p){for(var i=new this(p),c=arguments.length,b=new Array(c>1?c-1:0),x=1;x<c;x++)b[x-1]=arguments[x];return b.forEach(function(A){return i.set(A)}),i}},{key:"accessor",value:function(p){var i=(this[o]=this[o]={accessors:{}}).accessors,c=this.prototype;function b(x){var A=d(x);i[A]||(function(_,w){var k=n.A.toCamelCase(" "+w);["get","set","has"].forEach(function(P){Object.defineProperty(_,P+k,{value:function(M,L,V){return this[P].call(this,w,M,L,V)},configurable:!0})})}(c,x),i[A]=!0)}return n.A.isArray(p)?p.forEach(b):b(p),this}}],f&&l(v.prototype,f),u&&l(v,u),Object.defineProperty(v,"prototype",{writable:!1}),v;var v,f,u}();N.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),n.A.reduceDescriptors(N.prototype,function(v,f){var u=v.value,p=f[0].toUpperCase()+f.slice(1);return{get:function(){return u},set:function(i){this[p]=i}}}),n.A.freezeMethods(N),g.A=N},8683:function(R,g,t){var n=t(2472);function e(h){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},e(h)}function r(h,l){for(var s=0;s<l.length;s++){var o=l[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(h,a(o.key),o)}}function a(h){var l=function(s){if(e(s)!="object"||!s)return s;var o=s[Symbol.toPrimitive];if(o!==void 0){var d=o.call(s,"string");if(e(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(h);return e(l)=="symbol"?l:l+""}var m=function(){return h=function s(){(function(o,d){if(!(o instanceof d))throw new TypeError("Cannot call a class as a function")})(this,s),this.handlers=[]},(l=[{key:"use",value:function(s,o,d){return this.handlers.push({fulfilled:s,rejected:o,synchronous:!!d&&d.synchronous,runWhen:d?d.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(s){this.handlers[s]&&(this.handlers[s]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(s){n.A.forEach(this.handlers,function(o){o!==null&&s(o)})}}])&&r(h.prototype,l),Object.defineProperty(h,"prototype",{writable:!1}),h;var h,l}();g.A=m},3891:function(R,g,t){t.d(g,{A:function(){return r}});var n=t(2717),e=t(2684);function r(a,m){return a&&!(0,n.A)(m)?(0,e.A)(a,m):m}},3342:function(R,g,t){t.d(g,{A:function(){return s}});var n=t(6925),e=t(4180),r=t(5504),a=t(6068),m=t(1733),h=t(9492);function l(o){if(o.cancelToken&&o.cancelToken.throwIfRequested(),o.signal&&o.signal.aborted)throw new a.A(null,o)}function s(o){return l(o),o.headers=m.A.from(o.headers),o.data=n.A.call(o,o.transformRequest),["post","put","patch"].indexOf(o.method)!==-1&&o.headers.setContentType("application/x-www-form-urlencoded",!1),h.A.getAdapter(o.adapter||r.A.adapter)(o).then(function(d){return l(o),d.data=n.A.call(o,o.transformResponse,d),d.headers=m.A.from(d.headers),d},function(d){return(0,e.A)(d)||(l(o),d&&d.response&&(d.response.data=n.A.call(o,o.transformResponse,d.response),d.response.headers=m.A.from(d.response.headers))),Promise.reject(d)})}},755:function(R,g,t){t.d(g,{A:function(){return l}});var n=t(2472),e=t(1733);function r(s){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r(s)}function a(s,o){var d=Object.keys(s);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(s);o&&(E=E.filter(function(O){return Object.getOwnPropertyDescriptor(s,O).enumerable})),d.push.apply(d,E)}return d}function m(s,o,d){return(o=function(E){var O=function(N){if(r(N)!="object"||!N)return N;var v=N[Symbol.toPrimitive];if(v!==void 0){var f=v.call(N,"string");if(r(f)!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(N)}(E);return r(O)=="symbol"?O:O+""}(o))in s?Object.defineProperty(s,o,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[o]=d,s}var h=function(s){return s instanceof e.A?function(o){for(var d=1;d<arguments.length;d++){var E=arguments[d]!=null?arguments[d]:{};d%2?a(Object(E),!0).forEach(function(O){m(o,O,E[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(E)):a(Object(E)).forEach(function(O){Object.defineProperty(o,O,Object.getOwnPropertyDescriptor(E,O))})}return o}({},s):s};function l(s,o){o=o||{};var d={};function E(p,i,c){return n.A.isPlainObject(p)&&n.A.isPlainObject(i)?n.A.merge.call({caseless:c},p,i):n.A.isPlainObject(i)?n.A.merge({},i):n.A.isArray(i)?i.slice():i}function O(p,i,c){return n.A.isUndefined(i)?n.A.isUndefined(p)?void 0:E(void 0,p,c):E(p,i,c)}function N(p,i){if(!n.A.isUndefined(i))return E(void 0,i)}function v(p,i){return n.A.isUndefined(i)?n.A.isUndefined(p)?void 0:E(void 0,p):E(void 0,i)}function f(p,i,c){return c in o?E(p,i):c in s?E(void 0,p):void 0}var u={url:N,method:N,data:N,baseURL:v,transformRequest:v,transformResponse:v,paramsSerializer:v,timeout:v,timeoutMessage:v,withCredentials:v,withXSRFToken:v,adapter:v,responseType:v,xsrfCookieName:v,xsrfHeaderName:v,onUploadProgress:v,onDownloadProgress:v,decompress:v,maxContentLength:v,maxBodyLength:v,beforeRedirect:v,transport:v,httpAgent:v,httpsAgent:v,cancelToken:v,socketPath:v,responseEncoding:v,validateStatus:f,headers:function(p,i){return O(h(p),h(i),!0)}};return n.A.forEach(Object.keys(Object.assign({},s,o)),function(p){var i=u[p]||O,c=i(s[p],o[p],p);n.A.isUndefined(c)&&i!==f||(d[p]=c)}),d}},2598:function(R,g,t){t.d(g,{A:function(){return e}});var n=t(873);function e(r,a,m){var h=m.config.validateStatus;m.status&&h&&!h(m.status)?a(new n.A("Request failed with status code "+m.status,[n.A.ERR_BAD_REQUEST,n.A.ERR_BAD_RESPONSE][Math.floor(m.status/100)-4],m.config,m.request,m)):r(m)}},6925:function(R,g,t){t.d(g,{A:function(){return a}});var n=t(2472),e=t(5504),r=t(1733);function a(m,h){var l=this||e.A,s=h||l,o=r.A.from(s.headers),d=s.data;return n.A.forEach(m,function(E){d=E.call(l,d,o.normalize(),h?h.status:void 0)}),o.normalize(),d}},5504:function(R,g,t){var n=t(2472),e=t(873),r=t(7820),a=t(780),m=t(153),h=t(125),l=t(4334),s={transitional:r.A,adapter:["xhr","http","fetch"],transformRequest:[function(o,d){var E,O=d.getContentType()||"",N=O.indexOf("application/json")>-1,v=n.A.isObject(o);if(v&&n.A.isHTMLForm(o)&&(o=new FormData(o)),n.A.isFormData(o))return N?JSON.stringify((0,l.A)(o)):o;if(n.A.isArrayBuffer(o)||n.A.isBuffer(o)||n.A.isStream(o)||n.A.isFile(o)||n.A.isBlob(o)||n.A.isReadableStream(o))return o;if(n.A.isArrayBufferView(o))return o.buffer;if(n.A.isURLSearchParams(o))return d.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();if(v){if(O.indexOf("application/x-www-form-urlencoded")>-1)return(0,m.A)(o,this.formSerializer).toString();if((E=n.A.isFileList(o))||O.indexOf("multipart/form-data")>-1){var f=this.env&&this.env.FormData;return(0,a.A)(E?{"files[]":o}:o,f&&new f,this.formSerializer)}}return v||N?(d.setContentType("application/json",!1),function(u){if(n.A.isString(u))try{return(0,JSON.parse)(u),n.A.trim(u)}catch(p){if(p.name!=="SyntaxError")throw p}return(0,JSON.stringify)(u)}(o)):o}],transformResponse:[function(o){var d=this.transitional||s.transitional,E=d&&d.forcedJSONParsing,O=this.responseType==="json";if(n.A.isResponse(o)||n.A.isReadableStream(o))return o;if(o&&n.A.isString(o)&&(E&&!this.responseType||O)){var N=!(d&&d.silentJSONParsing)&&O;try{return JSON.parse(o)}catch(v){if(N)throw v.name==="SyntaxError"?e.A.from(v,e.A.ERR_BAD_RESPONSE,this,null,this.response):v}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:h.A.classes.FormData,Blob:h.A.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};n.A.forEach(["delete","get","head","post","put","patch"],function(o){s.headers[o]={}}),g.A=s},7820:function(R,g){g.A={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},3922:function(R,g,t){t.d(g,{x:function(){return n}});var n="1.7.7"},5150:function(R,g,t){var n=t(780);function e(m){var h={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(m).replace(/[!'()~]|%20|%00/g,function(l){return h[l]})}function r(m,h){this._pairs=[],m&&(0,n.A)(m,this,h)}var a=r.prototype;a.append=function(m,h){this._pairs.push([m,h])},a.toString=function(m){var h=m?function(l){return m.call(this,l,e)}:e;return this._pairs.map(function(l){return h(l[0])+"="+h(l[1])},"").join("&")},g.A=r},2536:function(R,g){function t(e,r){(r==null||r>e.length)&&(r=e.length);for(var a=0,m=Array(r);a<r;a++)m[a]=e[a];return m}var n={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(n).forEach(function(e){var r,a,m=(a=2,function(s){if(Array.isArray(s))return s}(r=e)||function(s,o){var d=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(d!=null){var E,O,N,v,f=[],u=!0,p=!1;try{if(N=(d=d.call(s)).next,o===0){if(Object(d)!==d)return;u=!1}else for(;!(u=(E=N.call(d)).done)&&(f.push(E.value),f.length!==o);u=!0);}catch(i){p=!0,O=i}finally{try{if(!u&&d.return!=null&&(v=d.return(),Object(v)!==v))return}finally{if(p)throw O}}return f}}(r,a)||function(s,o){if(s){if(typeof s=="string")return t(s,o);var d={}.toString.call(s).slice(8,-1);return d==="Object"&&s.constructor&&(d=s.constructor.name),d==="Map"||d==="Set"?Array.from(s):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?t(s,o):void 0}}(r,a)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),h=m[0],l=m[1];n[l]=h}),g.A=n},9328:function(R,g,t){function n(e,r){return function(){return e.apply(r,arguments)}}t.d(g,{A:function(){return n}})},6358:function(R,g,t){t.d(g,{A:function(){return a}});var n=t(2472),e=t(5150);function r(m){return encodeURIComponent(m).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(m,h,l){if(!h)return m;var s,o=l&&l.encode||r,d=l&&l.serialize;if(s=d?d(h,l):n.A.isURLSearchParams(h)?h.toString():new e.A(h,l).toString(o)){var E=m.indexOf("#");E!==-1&&(m=m.slice(0,E)),m+=(m.indexOf("?")===-1?"?":"&")+s}return m}},2684:function(R,g,t){function n(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}t.d(g,{A:function(){return n}})},6902:function(R,g,t){var n=t(6068),e=t(873),r=t(2472);g.A=function(a,m){var h=(a=a?a.filter(Boolean):[]).length;if(m||h){var l,s=new AbortController,o=function(N){if(!l){l=!0,E();var v=N instanceof Error?N:this.reason;s.abort(v instanceof e.A?v:new n.A(v instanceof Error?v.message:v))}},d=m&&setTimeout(function(){d=null,o(new e.A("timeout ".concat(m," of ms exceeded"),e.A.ETIMEDOUT))},m),E=function(){a&&(d&&clearTimeout(d),d=null,a.forEach(function(N){N.unsubscribe?N.unsubscribe(o):N.removeEventListener("abort",o)}),a=null)};a.forEach(function(N){return N.addEventListener("abort",o)});var O=s.signal;return O.unsubscribe=function(){return r.A.asap(E)},O}}},3608:function(R,g,t){var n=t(2472),e=t(125);g.A=e.A.hasStandardBrowserEnv?{write:function(r,a,m,h,l,s){var o=[r+"="+encodeURIComponent(a)];n.A.isNumber(m)&&o.push("expires="+new Date(m).toGMTString()),n.A.isString(h)&&o.push("path="+h),n.A.isString(l)&&o.push("domain="+l),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},4334:function(R,g,t){var n=t(2472);g.A=function(e){function r(m,h,l,s){var o=m[s++];if(o==="__proto__")return!0;var d=Number.isFinite(+o),E=s>=m.length;return o=!o&&n.A.isArray(l)?l.length:o,E?(n.A.hasOwnProp(l,o)?l[o]=[l[o],h]:l[o]=h,!d):(l[o]&&n.A.isObject(l[o])||(l[o]=[]),r(m,h,l[o],s)&&n.A.isArray(l[o])&&(l[o]=function(O){var N,v,f={},u=Object.keys(O),p=u.length;for(N=0;N<p;N++)f[v=u[N]]=O[v];return f}(l[o])),!d)}if(n.A.isFormData(e)&&n.A.isFunction(e.entries)){var a={};return n.A.forEachEntry(e,function(m,h){r(function(l){return n.A.matchAll(/\w+|\[(\w*)]/g,l).map(function(s){return s[0]==="[]"?"":s[1]||s[0]})}(m),h,a,0)}),a}return null}},2717:function(R,g,t){function n(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}t.d(g,{A:function(){return n}})},1919:function(R,g,t){t.d(g,{A:function(){return e}});var n=t(2472);function e(r){return n.A.isObject(r)&&r.isAxiosError===!0}},3430:function(R,g,t){var n=t(2472),e=t(125);g.A=e.A.hasStandardBrowserEnv?function(){var r,a=e.A.navigator&&/(msie|trident)/i.test(e.A.navigator.userAgent),m=document.createElement("a");function h(l){var s=l;return a&&(m.setAttribute("href",s),s=m.href),m.setAttribute("href",s),{href:m.href,protocol:m.protocol?m.protocol.replace(/:$/,""):"",host:m.host,search:m.search?m.search.replace(/^\?/,""):"",hash:m.hash?m.hash.replace(/^#/,""):"",hostname:m.hostname,port:m.port,pathname:m.pathname.charAt(0)==="/"?m.pathname:"/"+m.pathname}}return r=h(window.location.href),function(l){var s=n.A.isString(l)?h(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return!0}},3114:function(R,g){g.A=null},8312:function(R,g,t){var n=t(2472).A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);g.A=function(e){var r,a,m,h={};return e&&e.split(`
`).forEach(function(l){m=l.indexOf(":"),r=l.substring(0,m).trim().toLowerCase(),a=l.substring(m+1).trim(),!r||h[r]&&n[r]||(r==="set-cookie"?h[r]?h[r].push(a):h[r]=[a]:h[r]=h[r]?h[r]+", "+a:a)}),h}},3612:function(R,g,t){function n(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}t.d(g,{A:function(){return n}})},5636:function(R,g,t){t.d(g,{C1:function(){return m},Vj:function(){return h},mM:function(){return l}});var n=t(2770),e=t(3895),r=t(2472);function a(s){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},a(s)}var m=function(s,o){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:3,E=0,O=(0,n.A)(50,250);return(0,e.A)(function(N){var v=N.loaded,f=N.lengthComputable?N.total:void 0,u=v-E,p=O(u);E=v;var i=function(c,b,x){return(b=function(A){var _=function(w){if(a(w)!="object"||!w)return w;var k=w[Symbol.toPrimitive];if(k!==void 0){var P=k.call(w,"string");if(a(P)!="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(w)}(A);return a(_)=="symbol"?_:_+""}(b))in c?Object.defineProperty(c,b,{value:x,enumerable:!0,configurable:!0,writable:!0}):c[b]=x,c}({loaded:v,total:f,progress:f?v/f:void 0,bytes:u,rate:p||void 0,estimated:p&&f&&v<=f?(f-v)/p:void 0,event:N,lengthComputable:f!=null},o?"download":"upload",!0);s(i)},d)},h=function(s,o){var d=s!=null;return[function(E){return o[0]({lengthComputable:d,total:s,loaded:E})},o[1]]},l=function(s){return function(){for(var o=arguments.length,d=new Array(o),E=0;E<o;E++)d[E]=arguments[E];return r.A.asap(function(){return s.apply(void 0,d)})}}},8985:function(R,g,t){var n=t(125),e=t(2472),r=t(3430),a=t(3608),m=t(3891),h=t(755),l=t(1733),s=t(6358);function o(O,N){if(O){if(typeof O=="string")return d(O,N);var v={}.toString.call(O).slice(8,-1);return v==="Object"&&O.constructor&&(v=O.constructor.name),v==="Map"||v==="Set"?Array.from(O):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?d(O,N):void 0}}function d(O,N){(N==null||N>O.length)&&(N=O.length);for(var v=0,f=Array(N);v<N;v++)f[v]=O[v];return f}function E(O){if(typeof Symbol<"u"&&O[Symbol.iterator]!=null||O["@@iterator"]!=null)return Array.from(O)}g.A=function(O){var N,v,f=(0,h.A)({},O),u=f.data,p=f.withXSRFToken,i=f.xsrfHeaderName,c=f.xsrfCookieName,b=f.headers,x=f.auth;if(f.headers=b=l.A.from(b),f.url=(0,s.A)((0,m.A)(f.baseURL,f.url),O.params,O.paramsSerializer),x&&b.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):""))),e.A.isFormData(u)){if(n.A.hasStandardBrowserEnv||n.A.hasStandardBrowserWebWorkerEnv)b.setContentType(void 0);else if((N=b.getContentType())!==!1){var A=function(P){if(Array.isArray(P))return P}(v=N?N.split(";").map(function(P){return P.trim()}).filter(Boolean):[])||E(v)||o(v)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(),_=A[0],w=A.slice(1);b.setContentType([_||"multipart/form-data"].concat(function(P){return function(M){if(Array.isArray(M))return d(M)}(P)||E(P)||o(P)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}(w)).join("; "))}}if(n.A.hasStandardBrowserEnv&&(p&&e.A.isFunction(p)&&(p=p(f)),p||p!==!1&&(0,r.A)(f.url))){var k=i&&c&&a.A.read(c);k&&b.set(i,k)}return f}},2770:function(R,g){g.A=function(t,n){t=t||10;var e,r=new Array(t),a=new Array(t),m=0,h=0;return n=n!==void 0?n:1e3,function(l){var s=Date.now(),o=a[h];e||(e=s),r[m]=l,a[m]=s;for(var d=h,E=0;d!==m;)E+=r[d++],d%=t;if((m=(m+1)%t)===h&&(h=(h+1)%t),!(s-e<n)){var O=o&&s-o;return O?Math.round(1e3*E/O):void 0}}}},9048:function(R,g,t){function n(e){return function(r){return e.apply(null,r)}}t.d(g,{A:function(){return n}})},3895:function(R,g){g.A=function(t,n){var e,r,a=0,m=1e3/n,h=function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Date.now();a=s,e=null,r&&(clearTimeout(r),r=null),t.apply(null,l)};return[function(){for(var l=Date.now(),s=l-a,o=arguments.length,d=new Array(o),E=0;E<o;E++)d[E]=arguments[E];s>=m?h(d,l):(e=d,r||(r=setTimeout(function(){r=null,h(e)},m-s)))},function(){return e&&h(e)}]}},780:function(R,g,t){var n=t(2472),e=t(873),r=t(3114);function a(o){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},a(o)}function m(o){return n.A.isPlainObject(o)||n.A.isArray(o)}function h(o){return n.A.endsWith(o,"[]")?o.slice(0,-2):o}function l(o,d,E){return o?o.concat(d).map(function(O,N){return O=h(O),!E&&N?"["+O+"]":O}).join(E?".":""):d}var s=n.A.toFlatObject(n.A,{},null,function(o){return/^is[A-Z]/.test(o)});g.A=function(o,d,E){if(!n.A.isObject(o))throw new TypeError("target must be an object");d=d||new(r.A||FormData);var O=(E=n.A.toFlatObject(E,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,A){return!n.A.isUndefined(A[x])})).metaTokens,N=E.visitor||i,v=E.dots,f=E.indexes,u=(E.Blob||typeof Blob<"u"&&Blob)&&n.A.isSpecCompliantForm(d);if(!n.A.isFunction(N))throw new TypeError("visitor must be a function");function p(x){if(x===null)return"";if(n.A.isDate(x))return x.toISOString();if(!u&&n.A.isBlob(x))throw new e.A("Blob is not supported. Use a Buffer instead.");return n.A.isArrayBuffer(x)||n.A.isTypedArray(x)?u&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function i(x,A,_){var w=x;if(x&&!_&&a(x)==="object"){if(n.A.endsWith(A,"{}"))A=O?A:A.slice(0,-2),x=JSON.stringify(x);else if(n.A.isArray(x)&&function(k){return n.A.isArray(k)&&!k.some(m)}(x)||(n.A.isFileList(x)||n.A.endsWith(A,"[]"))&&(w=n.A.toArray(x)))return A=h(A),w.forEach(function(k,P){!n.A.isUndefined(k)&&k!==null&&d.append(f===!0?l([A],P,v):f===null?A:A+"[]",p(k))}),!1}return!!m(x)||(d.append(l(_,A,v),p(x)),!1)}var c=[],b=Object.assign(s,{defaultVisitor:i,convertValue:p,isVisitable:m});if(!n.A.isObject(o))throw new TypeError("data must be an object");return function x(A,_){if(!n.A.isUndefined(A)){if(c.indexOf(A)!==-1)throw Error("Circular reference detected in "+_.join("."));c.push(A),n.A.forEach(A,function(w,k){(!(n.A.isUndefined(w)||w===null)&&N.call(d,w,n.A.isString(k)?k.trim():k,_,b))===!0&&x(w,_?_.concat(k):[k])}),c.pop()}}(o),d}},153:function(R,g,t){t.d(g,{A:function(){return a}});var n=t(2472),e=t(780),r=t(125);function a(m,h){return(0,e.A)(m,new r.A.classes.URLSearchParams,Object.assign({visitor:function(l,s,o,d){return r.A.isNode&&n.A.isBuffer(l)?(this.append(s,l.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},h))}},5776:function(R,g,t){function n(f){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},n(f)}function e(f,u,p,i,c,b,x){try{var A=f[b](x),_=A.value}catch(w){return void p(w)}A.done?u(_):Promise.resolve(_).then(i,c)}function r(){r=function(){return u};var f,u={},p=Object.prototype,i=p.hasOwnProperty,c=Object.defineProperty||function(F,j,y){F[j]=y.value},b=typeof Symbol=="function"?Symbol:{},x=b.iterator||"@@iterator",A=b.asyncIterator||"@@asyncIterator",_=b.toStringTag||"@@toStringTag";function w(F,j,y){return Object.defineProperty(F,j,{value:y,enumerable:!0,configurable:!0,writable:!0}),F[j]}try{w({},"")}catch{w=function(j,y,S){return j[y]=S}}function k(F,j,y,S){var C=j&&j.prototype instanceof U?j:U,I=Object.create(C.prototype),z=new fe(S||[]);return c(I,"_invoke",{value:pe(F,y,z)}),I}function P(F,j,y){try{return{type:"normal",arg:F.call(j,y)}}catch(S){return{type:"throw",arg:S}}}u.wrap=k;var M="suspendedStart",L="suspendedYield",V="executing",B="completed",T={};function U(){}function H(){}function K(){}var J={};w(J,x,function(){return this});var W=Object.getPrototypeOf,q=W&&W(W(D([])));q&&q!==p&&i.call(q,x)&&(J=q);var Z=K.prototype=U.prototype=Object.create(J);function X(F){["next","throw","return"].forEach(function(j){w(F,j,function(y){return this._invoke(j,y)})})}function ee(F,j){function y(C,I,z,G){var Y=P(F[C],F,I);if(Y.type!=="throw"){var le=Y.arg,se=le.value;return se&&n(se)=="object"&&i.call(se,"__await")?j.resolve(se.__await).then(function(_e){y("next",_e,z,G)},function(_e){y("throw",_e,z,G)}):j.resolve(se).then(function(_e){le.value=_e,z(le)},function(_e){return y("throw",_e,z,G)})}G(Y.arg)}var S;c(this,"_invoke",{value:function(C,I){function z(){return new j(function(G,Y){y(C,I,G,Y)})}return S=S?S.then(z,z):z()}})}function pe(F,j,y){var S=M;return function(C,I){if(S===V)throw Error("Generator is already running");if(S===B){if(C==="throw")throw I;return{value:f,done:!0}}for(y.method=C,y.arg=I;;){var z=y.delegate;if(z){var G=re(z,y);if(G){if(G===T)continue;return G}}if(y.method==="next")y.sent=y._sent=y.arg;else if(y.method==="throw"){if(S===M)throw S=B,y.arg;y.dispatchException(y.arg)}else y.method==="return"&&y.abrupt("return",y.arg);S=V;var Y=P(F,j,y);if(Y.type==="normal"){if(S=y.done?B:L,Y.arg===T)continue;return{value:Y.arg,done:y.done}}Y.type==="throw"&&(S=B,y.method="throw",y.arg=Y.arg)}}}function re(F,j){var y=j.method,S=F.iterator[y];if(S===f)return j.delegate=null,y==="throw"&&F.iterator.return&&(j.method="return",j.arg=f,re(F,j),j.method==="throw")||y!=="return"&&(j.method="throw",j.arg=new TypeError("The iterator does not provide a '"+y+"' method")),T;var C=P(S,F.iterator,j.arg);if(C.type==="throw")return j.method="throw",j.arg=C.arg,j.delegate=null,T;var I=C.arg;return I?I.done?(j[F.resultName]=I.value,j.next=F.nextLoc,j.method!=="return"&&(j.method="next",j.arg=f),j.delegate=null,T):I:(j.method="throw",j.arg=new TypeError("iterator result is not an object"),j.delegate=null,T)}function ae(F){var j={tryLoc:F[0]};1 in F&&(j.catchLoc=F[1]),2 in F&&(j.finallyLoc=F[2],j.afterLoc=F[3]),this.tryEntries.push(j)}function ie(F){var j=F.completion||{};j.type="normal",delete j.arg,F.completion=j}function fe(F){this.tryEntries=[{tryLoc:"root"}],F.forEach(ae,this),this.reset(!0)}function D(F){if(F||F===""){var j=F[x];if(j)return j.call(F);if(typeof F.next=="function")return F;if(!isNaN(F.length)){var y=-1,S=function C(){for(;++y<F.length;)if(i.call(F,y))return C.value=F[y],C.done=!1,C;return C.value=f,C.done=!0,C};return S.next=S}}throw new TypeError(n(F)+" is not iterable")}return H.prototype=K,c(Z,"constructor",{value:K,configurable:!0}),c(K,"constructor",{value:H,configurable:!0}),H.displayName=w(K,_,"GeneratorFunction"),u.isGeneratorFunction=function(F){var j=typeof F=="function"&&F.constructor;return!!j&&(j===H||(j.displayName||j.name)==="GeneratorFunction")},u.mark=function(F){return Object.setPrototypeOf?Object.setPrototypeOf(F,K):(F.__proto__=K,w(F,_,"GeneratorFunction")),F.prototype=Object.create(Z),F},u.awrap=function(F){return{__await:F}},X(ee.prototype),w(ee.prototype,A,function(){return this}),u.AsyncIterator=ee,u.async=function(F,j,y,S,C){C===void 0&&(C=Promise);var I=new ee(k(F,j,y,S),C);return u.isGeneratorFunction(j)?I:I.next().then(function(z){return z.done?z.value:I.next()})},X(Z),w(Z,_,"Generator"),w(Z,x,function(){return this}),w(Z,"toString",function(){return"[object Generator]"}),u.keys=function(F){var j=Object(F),y=[];for(var S in j)y.push(S);return y.reverse(),function C(){for(;y.length;){var I=y.pop();if(I in j)return C.value=I,C.done=!1,C}return C.done=!0,C}},u.values=D,fe.prototype={constructor:fe,reset:function(F){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.method="next",this.arg=f,this.tryEntries.forEach(ie),!F)for(var j in this)j.charAt(0)==="t"&&i.call(this,j)&&!isNaN(+j.slice(1))&&(this[j]=f)},stop:function(){this.done=!0;var F=this.tryEntries[0].completion;if(F.type==="throw")throw F.arg;return this.rval},dispatchException:function(F){if(this.done)throw F;var j=this;function y(Y,le){return I.type="throw",I.arg=F,j.next=Y,le&&(j.method="next",j.arg=f),!!le}for(var S=this.tryEntries.length-1;S>=0;--S){var C=this.tryEntries[S],I=C.completion;if(C.tryLoc==="root")return y("end");if(C.tryLoc<=this.prev){var z=i.call(C,"catchLoc"),G=i.call(C,"finallyLoc");if(z&&G){if(this.prev<C.catchLoc)return y(C.catchLoc,!0);if(this.prev<C.finallyLoc)return y(C.finallyLoc)}else if(z){if(this.prev<C.catchLoc)return y(C.catchLoc,!0)}else{if(!G)throw Error("try statement without catch or finally");if(this.prev<C.finallyLoc)return y(C.finallyLoc)}}}},abrupt:function(F,j){for(var y=this.tryEntries.length-1;y>=0;--y){var S=this.tryEntries[y];if(S.tryLoc<=this.prev&&i.call(S,"finallyLoc")&&this.prev<S.finallyLoc){var C=S;break}}C&&(F==="break"||F==="continue")&&C.tryLoc<=j&&j<=C.finallyLoc&&(C=null);var I=C?C.completion:{};return I.type=F,I.arg=j,C?(this.method="next",this.next=C.finallyLoc,T):this.complete(I)},complete:function(F,j){if(F.type==="throw")throw F.arg;return F.type==="break"||F.type==="continue"?this.next=F.arg:F.type==="return"?(this.rval=this.arg=F.arg,this.method="return",this.next="end"):F.type==="normal"&&j&&(this.next=j),T},finish:function(F){for(var j=this.tryEntries.length-1;j>=0;--j){var y=this.tryEntries[j];if(y.finallyLoc===F)return this.complete(y.completion,y.afterLoc),ie(y),T}},catch:function(F){for(var j=this.tryEntries.length-1;j>=0;--j){var y=this.tryEntries[j];if(y.tryLoc===F){var S=y.completion;if(S.type==="throw"){var C=S.arg;ie(y)}return C}}throw Error("illegal catch attempt")},delegateYield:function(F,j,y){return this.delegate={iterator:D(F),resultName:j,nextLoc:y},this.method==="next"&&(this.arg=f),T}},u}function a(f){return function(){return new m(f.apply(this,arguments))}}function m(f){var u,p;function i(b,x){try{var A=f[b](x),_=A.value,w=_ instanceof s;Promise.resolve(w?_.v:_).then(function(k){if(w){var P=b==="return"?"return":"next";if(!_.k||k.done)return i(P,k);k=f[P](k).value}c(A.done?"return":"normal",k)},function(k){i("throw",k)})}catch(k){c("throw",k)}}function c(b,x){switch(b){case"return":u.resolve({value:x,done:!0});break;case"throw":u.reject(x);break;default:u.resolve({value:x,done:!1})}(u=u.next)?i(u.key,u.arg):p=null}this._invoke=function(b,x){return new Promise(function(A,_){var w={key:b,arg:x,resolve:A,reject:_,next:null};p?p=p.next=w:(u=p=w,i(b,x))})},typeof f.return!="function"&&(this.return=void 0)}function h(f){return new s(f,0)}function l(f){var u={},p=!1;function i(c,b){return p=!0,b=new Promise(function(x){x(f[c](b))}),{done:!1,value:new s(b,1)}}return u[typeof Symbol<"u"&&Symbol.iterator||"@@iterator"]=function(){return this},u.next=function(c){return p?(p=!1,c):i("next",c)},typeof f.throw=="function"&&(u.throw=function(c){if(p)throw p=!1,c;return i("throw",c)}),typeof f.return=="function"&&(u.return=function(c){return p?(p=!1,c):i("return",c)}),u}function s(f,u){this.v=f,this.k=u}function o(f){var u,p,i,c=2;for(typeof Symbol<"u"&&(p=Symbol.asyncIterator,i=Symbol.iterator);c--;){if(p&&(u=f[p])!=null)return u.call(f);if(i&&(u=f[i])!=null)return new d(u.call(f));p="@@asyncIterator",i="@@iterator"}throw new TypeError("Object is not async iterable")}function d(f){function u(p){if(Object(p)!==p)return Promise.reject(new TypeError(p+" is not an object."));var i=p.done;return Promise.resolve(p.value).then(function(c){return{value:c,done:i}})}return d=function(p){this.s=p,this.n=p.next},d.prototype={s:null,n:null,next:function(){return u(this.n.apply(this.s,arguments))},return:function(p){var i=this.s.return;return i===void 0?Promise.resolve({value:p,done:!0}):u(i.apply(this.s,arguments))},throw:function(p){var i=this.s.return;return i===void 0?Promise.reject(p):u(i.apply(this.s,arguments))}},new d(f)}t.d(g,{E9:function(){return v}}),m.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},m.prototype.next=function(f){return this._invoke("next",f)},m.prototype.throw=function(f){return this._invoke("throw",f)},m.prototype.return=function(f){return this._invoke("return",f)};var E=r().mark(function f(u,p){var i,c,b;return r().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(i=u.byteLength,p&&!(i<p)){x.next=5;break}return x.next=4,u;case 4:return x.abrupt("return");case 5:c=0;case 6:if(!(c<i)){x.next=13;break}return b=c+p,x.next=10,u.slice(c,b);case 10:c=b,x.next=6;break;case 13:case"end":return x.stop()}},f)}),O=function(){var f=a(r().mark(function u(p,i){var c,b,x,A,_,w;return r().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:c=!1,b=!1,k.prev=2,A=o(N(p));case 4:return k.next=6,h(A.next());case 6:if(!(c=!(_=k.sent).done)){k.next=12;break}return w=_.value,k.delegateYield(l(o(E(w,i))),"t0",9);case 9:c=!1,k.next=4;break;case 12:k.next=18;break;case 14:k.prev=14,k.t1=k.catch(2),b=!0,x=k.t1;case 18:if(k.prev=18,k.prev=19,!c||A.return==null){k.next=23;break}return k.next=23,h(A.return());case 23:if(k.prev=23,!b){k.next=26;break}throw x;case 26:return k.finish(23);case 27:return k.finish(18);case 28:case"end":return k.stop()}},u,null,[[2,14,18,28],[19,,23,27]])}));return function(u,p){return f.apply(this,arguments)}}(),N=function(){var f=a(r().mark(function u(p){var i,c,b,x;return r().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(!p[Symbol.asyncIterator]){A.next=3;break}return A.delegateYield(l(o(p)),"t0",2);case 2:return A.abrupt("return");case 3:i=p.getReader(),A.prev=4;case 5:return A.next=7,h(i.read());case 7:if(c=A.sent,b=c.done,x=c.value,!b){A.next=12;break}return A.abrupt("break",16);case 12:return A.next=14,x;case 14:A.next=5;break;case 16:return A.prev=16,A.next=19,h(i.cancel());case 19:return A.finish(16);case 20:case"end":return A.stop()}},u,null,[[4,,16,20]])}));return function(u){return f.apply(this,arguments)}}(),v=function(f,u,p,i){var c,b=O(f,u),x=0,A=function(_){c||(c=!0,i&&i(_))};return new ReadableStream({pull:function(_){return(w=r().mark(function k(){var P,M,L,V,B;return r().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.prev=0,T.next=3,b.next();case 3:if(P=T.sent,M=P.done,L=P.value,!M){T.next=10;break}return A(),_.close(),T.abrupt("return");case 10:V=L.byteLength,p&&(B=x+=V,p(B)),_.enqueue(new Uint8Array(L)),T.next=19;break;case 15:throw T.prev=15,T.t0=T.catch(0),A(T.t0),T.t0;case 19:case"end":return T.stop()}},k,null,[[0,15]])}),function(){var k=this,P=arguments;return new Promise(function(M,L){var V=w.apply(k,P);function B(U){e(V,M,L,B,T,"next",U)}function T(U){e(V,M,L,B,T,"throw",U)}B(void 0)})})();var w},cancel:function(_){return A(_),b.return()}},{highWaterMark:2})}},2325:function(R,g,t){var n=t(3922),e=t(873);function r(h){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},r(h)}var a={};["object","boolean","number","function","string","symbol"].forEach(function(h,l){a[h]=function(s){return r(s)===h||"a"+(l<1?"n ":" ")+h}});var m={};a.transitional=function(h,l,s){function o(d,E){return"[Axios v"+n.x+"] Transitional option '"+d+"'"+E+(s?". "+s:"")}return function(d,E,O){if(h===!1)throw new e.A(o(E," has been removed"+(l?" in "+l:"")),e.A.ERR_DEPRECATED);return l&&!m[E]&&(m[E]=!0,console.warn(o(E," has been deprecated since v"+l+" and will be removed in the near future"))),!h||h(d,E,O)}},g.A={assertOptions:function(h,l,s){if(r(h)!=="object")throw new e.A("options must be an object",e.A.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(h),d=o.length;d-- >0;){var E=o[d],O=l[E];if(O){var N=h[E],v=N===void 0||O(N,E,h);if(v!==!0)throw new e.A("option "+E+" must be "+v,e.A.ERR_BAD_OPTION_VALUE)}else if(s!==!0)throw new e.A("Unknown option "+E,e.A.ERR_BAD_OPTION)}},validators:a}},7238:function(R,g){g.A=typeof Blob<"u"?Blob:null},9143:function(R,g){g.A=typeof FormData<"u"?FormData:null},4822:function(R,g,t){var n=t(5150);g.A=typeof URLSearchParams<"u"?URLSearchParams:n.A},1494:function(R,g,t){var n=t(4822),e=t(9143),r=t(7238);g.A={isBrowser:!0,classes:{URLSearchParams:n.A,FormData:e.A,Blob:r.A},protocols:["http","https","file","blob","url","data"]}},574:function(R,g,t){function n(l){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},n(l)}t.r(g),t.d(g,{hasBrowserEnv:function(){return e},hasStandardBrowserEnv:function(){return a},hasStandardBrowserWebWorkerEnv:function(){return m},navigator:function(){return r},origin:function(){return h}});var e=typeof window<"u"&&typeof document<"u",r=(typeof navigator>"u"?"undefined":n(navigator))==="object"&&navigator||void 0,a=e&&(!r||["ReactNative","NativeScript","NS"].indexOf(r.product)<0),m=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",h=e&&window.location.href||"http://localhost"},125:function(R,g,t){var n=t(1494),e=t(574);function r(l){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},r(l)}function a(l,s){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);s&&(d=d.filter(function(E){return Object.getOwnPropertyDescriptor(l,E).enumerable})),o.push.apply(o,d)}return o}function m(l){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?a(Object(o),!0).forEach(function(d){h(l,d,o[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(d){Object.defineProperty(l,d,Object.getOwnPropertyDescriptor(o,d))})}return l}function h(l,s,o){return(s=function(d){var E=function(O){if(r(O)!="object"||!O)return O;var N=O[Symbol.toPrimitive];if(N!==void 0){var v=N.call(O,"string");if(r(v)!="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(O)}(d);return r(E)=="symbol"?E:E+""}(s))in l?Object.defineProperty(l,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[s]=o,l}g.A=m(m({},e),n.A)},2472:function(R,g,t){var n=t(9328);function e(y,S){(S==null||S>y.length)&&(S=y.length);for(var C=0,I=Array(S);C<S;C++)I[C]=y[C];return I}function r(y){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},r(y)}var a,m,h=Object.prototype.toString,l=Object.getPrototypeOf,s=(a=Object.create(null),function(y){var S=h.call(y);return a[S]||(a[S]=S.slice(8,-1).toLowerCase())}),o=function(y){return y=y.toLowerCase(),function(S){return s(S)===y}},d=function(y){return function(S){return r(S)===y}},E=Array.isArray,O=d("undefined"),N=o("ArrayBuffer"),v=d("string"),f=d("function"),u=d("number"),p=function(y){return y!==null&&r(y)==="object"},i=function(y){if(s(y)!=="object")return!1;var S=l(y);return!(S!==null&&S!==Object.prototype&&Object.getPrototypeOf(S)!==null||Symbol.toStringTag in y||Symbol.iterator in y)},c=o("Date"),b=o("File"),x=o("Blob"),A=o("FileList"),_=o("URLSearchParams"),w=function(y){if(Array.isArray(y))return y}(m=["ReadableStream","Request","Response","Headers"].map(o))||function(y){var S=y==null?null:typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"];if(S!=null){var C,I,z,G,Y=[],le=!0,se=!1;try{for(z=(S=S.call(y)).next,!1;!(le=(C=z.call(S)).done)&&(Y.push(C.value),Y.length!==4);le=!0);}catch(_e){se=!0,I=_e}finally{try{if(!le&&S.return!=null&&(G=S.return(),Object(G)!==G))return}finally{if(se)throw I}}return Y}}(m)||function(y){if(y){if(typeof y=="string")return e(y,4);var S={}.toString.call(y).slice(8,-1);return S==="Object"&&y.constructor&&(S=y.constructor.name),S==="Map"||S==="Set"?Array.from(y):S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)?e(y,4):void 0}}(m)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(),k=w[0],P=w[1],M=w[2],L=w[3];function V(y,S){var C,I,z=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).allOwnKeys,G=z!==void 0&&z;if(y!=null)if(r(y)!=="object"&&(y=[y]),E(y))for(C=0,I=y.length;C<I;C++)S.call(null,y[C],C,y);else{var Y,le=G?Object.getOwnPropertyNames(y):Object.keys(y),se=le.length;for(C=0;C<se;C++)Y=le[C],S.call(null,y[Y],Y,y)}}function B(y,S){S=S.toLowerCase();for(var C,I=Object.keys(y),z=I.length;z-- >0;)if(S===(C=I[z]).toLowerCase())return C;return null}var T,U,H,K,J,W=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:commonjsGlobal,q=function(y){return!O(y)&&y!==W},Z=(T=typeof Uint8Array<"u"&&l(Uint8Array),function(y){return T&&y instanceof T}),X=o("HTMLFormElement"),ee=function(){var y=Object.prototype.hasOwnProperty;return function(S,C){return y.call(S,C)}}(),pe=o("RegExp"),re=function(y,S){var C=Object.getOwnPropertyDescriptors(y),I={};V(C,function(z,G){var Y;(Y=S(z,G,y))!==!1&&(I[G]=Y||z)}),Object.defineProperties(y,I)},ae="abcdefghijklmnopqrstuvwxyz",ie="0123456789",fe={DIGIT:ie,ALPHA:ae,ALPHA_DIGIT:ae+ae.toUpperCase()+ie},D=o("AsyncFunction"),F=(U=typeof setImmediate=="function",H=f(W.postMessage),U?setImmediate:H?(K="axios@".concat(Math.random()),J=[],W.addEventListener("message",function(y){var S=y.source,C=y.data;S===W&&C===K&&J.length&&J.shift()()},!1),function(y){J.push(y),W.postMessage(K,"*")}):function(y){return setTimeout(y)}),j=typeof queueMicrotask<"u"?queueMicrotask.bind(W):typeof process<"u"&&process.nextTick||F;g.A={isArray:E,isArrayBuffer:N,isBuffer:function(y){return y!==null&&!O(y)&&y.constructor!==null&&!O(y.constructor)&&f(y.constructor.isBuffer)&&y.constructor.isBuffer(y)},isFormData:function(y){var S;return y&&(typeof FormData=="function"&&y instanceof FormData||f(y.append)&&((S=s(y))==="formdata"||S==="object"&&f(y.toString)&&y.toString()==="[object FormData]"))},isArrayBufferView:function(y){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(y):y&&y.buffer&&N(y.buffer)},isString:v,isNumber:u,isBoolean:function(y){return y===!0||y===!1},isObject:p,isPlainObject:i,isReadableStream:k,isRequest:P,isResponse:M,isHeaders:L,isUndefined:O,isDate:c,isFile:b,isBlob:x,isRegExp:pe,isFunction:f,isStream:function(y){return p(y)&&f(y.pipe)},isURLSearchParams:_,isTypedArray:Z,isFileList:A,forEach:V,merge:function y(){for(var S=(q(this)&&this||{}).caseless,C={},I=function(Y,le){var se=S&&B(C,le)||le;i(C[se])&&i(Y)?C[se]=y(C[se],Y):i(Y)?C[se]=y({},Y):E(Y)?C[se]=Y.slice():C[se]=Y},z=0,G=arguments.length;z<G;z++)arguments[z]&&V(arguments[z],I);return C},extend:function(y,S,C){return V(S,function(I,z){C&&f(I)?y[z]=(0,n.A)(I,C):y[z]=I},{allOwnKeys:(arguments.length>3&&arguments[3]!==void 0?arguments[3]:{}).allOwnKeys}),y},trim:function(y){return y.trim?y.trim():y.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(y){return y.charCodeAt(0)===65279&&(y=y.slice(1)),y},inherits:function(y,S,C,I){y.prototype=Object.create(S.prototype,I),y.prototype.constructor=y,Object.defineProperty(y,"super",{value:S.prototype}),C&&Object.assign(y.prototype,C)},toFlatObject:function(y,S,C,I){var z,G,Y,le={};if(S=S||{},y==null)return S;do{for(G=(z=Object.getOwnPropertyNames(y)).length;G-- >0;)Y=z[G],I&&!I(Y,y,S)||le[Y]||(S[Y]=y[Y],le[Y]=!0);y=C!==!1&&l(y)}while(y&&(!C||C(y,S))&&y!==Object.prototype);return S},kindOf:s,kindOfTest:o,endsWith:function(y,S,C){y=String(y),(C===void 0||C>y.length)&&(C=y.length),C-=S.length;var I=y.indexOf(S,C);return I!==-1&&I===C},toArray:function(y){if(!y)return null;if(E(y))return y;var S=y.length;if(!u(S))return null;for(var C=new Array(S);S-- >0;)C[S]=y[S];return C},forEachEntry:function(y,S){for(var C,I=(y&&y[Symbol.iterator]).call(y);(C=I.next())&&!C.done;){var z=C.value;S.call(y,z[0],z[1])}},matchAll:function(y,S){for(var C,I=[];(C=y.exec(S))!==null;)I.push(C);return I},isHTMLForm:X,hasOwnProperty:ee,hasOwnProp:ee,reduceDescriptors:re,freezeMethods:function(y){re(y,function(S,C){if(f(y)&&["arguments","caller","callee"].indexOf(C)!==-1)return!1;var I=y[C];f(I)&&(S.enumerable=!1,"writable"in S?S.writable=!1:S.set||(S.set=function(){throw Error("Can not rewrite read-only method '"+C+"'")}))})},toObjectSet:function(y,S){var C={},I=function(z){z.forEach(function(G){C[G]=!0})};return E(y)?I(y):I(String(y).split(S)),C},toCamelCase:function(y){return y.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(S,C,I){return C.toUpperCase()+I})},noop:function(){},toFiniteNumber:function(y,S){return y!=null&&Number.isFinite(y=+y)?y:S},findKey:B,global:W,isContextDefined:q,ALPHABET:fe,generateString:function(){for(var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:16,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fe.ALPHA_DIGIT,C="",I=S.length;y--;)C+=S[Math.random()*I|0];return C},isSpecCompliantForm:function(y){return!!(y&&f(y.append)&&y[Symbol.toStringTag]==="FormData"&&y[Symbol.iterator])},toJSONObject:function(y){var S=new Array(10),C=function(I,z){if(p(I)){if(S.indexOf(I)>=0)return;if(!("toJSON"in I)){S[z]=I;var G=E(I)?[]:{};return V(I,function(Y,le){var se=C(Y,z+1);!O(se)&&(G[le]=se)}),S[z]=void 0,G}}return I};return C(y,0)},isAsyncFn:D,isThenable:function(y){return y&&(p(y)||f(y))&&f(y.then)&&f(y.catch)},setImmediate:F,asap:j}},8330:function(R){R.exports=JSON.parse('{"UU":"@mybricks/plugin-connector-http","rE":"1.2.36"}')}},__webpack_module_cache__={};function __webpack_require__(R){var g=__webpack_module_cache__[R];if(g!==void 0)return g.exports;var t=__webpack_module_cache__[R]={id:R,exports:{}};return __webpack_modules__[R](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=function(R){var g=R&&R.__esModule?function(){return R.default}:function(){return R};return __webpack_require__.d(g,{a:g}),g},__webpack_require__.d=function(R,g){for(var t in g)__webpack_require__.o(g,t)&&!__webpack_require__.o(R,t)&&Object.defineProperty(R,t,{enumerable:!0,get:g[t]})},__webpack_require__.o=function(R,g){return Object.prototype.hasOwnProperty.call(R,g)},__webpack_require__.r=function(R){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(R,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(R,"__esModule",{value:!0})},__webpack_require__.nc=void 0;var __webpack_exports__={};__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Items:function(){return _components__WEBPACK_IMPORTED_MODULE_7__},call:function(){return _runtime_callConnectorHttp__WEBPACK_IMPORTED_MODULE_4__.call},default:function(){return pluginEntry},mock:function(){return _script_mock__WEBPACK_IMPORTED_MODULE_6__.mock}});var _plugin__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7258),_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8997),_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3366),_constant__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2810),_runtime_callConnectorHttp__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8352),_script__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8362),_script_mock__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4410),_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6545),_package_json__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8330),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(8298),__assign=function(){return __assign=Object.assign||function(R){for(var g,t=1,n=arguments.length;t<n;t++)for(var e in g=arguments[t])Object.prototype.hasOwnProperty.call(g,e)&&(R[e]=g[e]);return R},__assign.apply(this,arguments)};function pluginEntry(R){return R===void 0&&(R={}),{name:_constant__WEBPACK_IMPORTED_MODULE_3__.Yp,namespace:_constant__WEBPACK_IMPORTED_MODULE_3__.Yp,title:"连接器",description:"连接器",data:_data__WEBPACK_IMPORTED_MODULE_2__.A,onLoad:function(){var g,t,n,e,r,a;this.data&&(R.isPrivatization===!1&&(0,_constant__WEBPACK_IMPORTED_MODULE_3__.vc)(),(g=this.data.connectors)===null||g===void 0||g.forEach(function(m){var h,l;m.type===_constant__WEBPACK_IMPORTED_MODULE_3__.Hx.HTTP&&(!((l=(h=m.content)===null||h===void 0?void 0:h.markList)===null||l===void 0)&&l.length||(m.content.markList=[{title:"默认",id:"default",predicate:{},outputKeys:m.content.outputKeys||[],excludeKeys:m.content.excludeKeys||[],outputSchema:m.content.outputSchema||{},resultSchema:m.content.resultSchema}],delete m.content.outputKeys,delete m.content.excludeKeys,delete m.content.outputSchema,delete m.content.resultSchema))}),this.data.config=this.data.config||{paramsFn:((t=R==null?void 0:R.initialValue)===null||t===void 0?void 0:t.paramsFn)||_constant__WEBPACK_IMPORTED_MODULE_3__.B_,resultFn:((n=R==null?void 0:R.initialValue)===null||n===void 0?void 0:n.resultFn)||_constant__WEBPACK_IMPORTED_MODULE_3__.Ih,errorResultFn:((e=R==null?void 0:R.initialValue)===null||e===void 0?void 0:e.errorResultFn)||_constant__WEBPACK_IMPORTED_MODULE_3__.uG},this.data.config.resultFn=this.data.config.resultFn||((r=R==null?void 0:R.initialValue)===null||r===void 0?void 0:r.resultFn)||_constant__WEBPACK_IMPORTED_MODULE_3__.Ih,this.data.config.errorResultFn=this.data.config.errorResultFn||((a=R==null?void 0:R.initialValue)===null||a===void 0?void 0:a.errorResultFn)||_constant__WEBPACK_IMPORTED_MODULE_3__.uG)},callConnector:function(g,t,n,e){var r,a=__assign(__assign({},this.data),{connectors:(0,_utils__WEBPACK_IMPORTED_MODULE_9__.Y6)(this.data.connectors)});if(g.mode!=="test"&&(a.config.globalMock||n!=null&&n.openMock))return(0,_script_mock__WEBPACK_IMPORTED_MODULE_6__.mock)(__assign(__assign({},g),n));var m=g.mode==="test"?g:(r=a.connectors.find(function(l){return l.id===g.id}))!==null&&r!==void 0?r:g;if(m){var h=__assign({},m);return h.script||(h=__assign(__assign(__assign({},h),{globalParamsFn:a.config.paramsFn,globalResultFn:a.config.resultFn,globalErrorResultFn:a.config.errorResultFn}),m.content||{})),(0,_runtime_callConnectorHttp__WEBPACK_IMPORTED_MODULE_4__.call)(__assign(__assign({useProxy:!0},g),h),t,n,e)}return Promise.reject("接口不存在，请检查连接器插件中接口配置")},toJSON:function(g){var t=g.data,n=__assign(__assign({},t),{connectors:(0,_utils__WEBPACK_IMPORTED_MODULE_9__.Y6)(t.connectors)});if(n.config||(n.config={}),R==null?void 0:R.pure){try{n.config.paramsFn=(0,_script__WEBPACK_IMPORTED_MODULE_5__.cR)(n.config.paramsFn),n.config.resultFn=(0,_script__WEBPACK_IMPORTED_MODULE_5__.cR)(n.config.resultFn),n.config.errorResultFn=(0,_script__WEBPACK_IMPORTED_MODULE_5__.cR)(n.config.errorResultFn),n.connectors=n.connectors.map(function(e){var r=e.type,a=e.id,m=e.content,h=m.input,l=m.output,s=m.method,o=m.path,d=m.markList;return{type:r,id:a,input:(0,_script__WEBPACK_IMPORTED_MODULE_5__.cR)(h),output:(0,_script__WEBPACK_IMPORTED_MODULE_5__.cR)(l),method:s,path:o==null?void 0:o.trim(),globalMock:n.config.globalMock,markList:d.map(function(E){return{id:E.id,title:E.title,predicate:E.predicate,excludeKeys:E.excludeKeys,outputKeys:E.outputKeys}})}})}catch(e){console.log("连接器 toJSON 错误",e)}return n}return n.connectors.map(function(e){return e.type===_constant__WEBPACK_IMPORTED_MODULE_3__.Hx.JS?{id:e.id,type:e.type,title:e.content.title,script:(0,_script__WEBPACK_IMPORTED_MODULE_5__.vW)(__assign({},e.content))}:{id:e.id,type:e.type,title:e.content.title,globalMock:n.config.globalMock,script:(0,_script__WEBPACK_IMPORTED_MODULE_5__.IT)(__assign(__assign({},e.content),{globalParamsFn:n.config.paramsFn,globalResultFn:n.config.resultFn,globalErrorResultFn:n.config.errorResultFn}))}})},getConnectorScript:function(g){var t=g.mode==="test",n=t?g:(0,_utils__WEBPACK_IMPORTED_MODULE_9__.Y6)(this.data.connectors).find(function(e){return e.id===g.id});try{return{id:n.id,type:n.type,title:n.content.title,script:(0,_script__WEBPACK_IMPORTED_MODULE_5__.IT)(__assign(__assign({isTestMode:t},n.content),{globalParamsFn:this.data.config.paramsFn,globalResultFn:this.data.config.resultFn,globalErrorResultFn:this.data.config.errorResultFn}))}}catch{throw Error("找不到对应连接器数据")}},contributes:{sliderView:{tab:{title:"连接器",icon:_icon__WEBPACK_IMPORTED_MODULE_1__.Kk,apiSet:["connector","component"],render:function(g){return React.createElement(_plugin__WEBPACK_IMPORTED_MODULE_0__.A,__assign({},R,g))}}}}}}return console.log("%c ".concat(_package_json__WEBPACK_IMPORTED_MODULE_8__.UU," %c@").concat(_package_json__WEBPACK_IMPORTED_MODULE_8__.rE),"color:#FFF;background:#fa6400","",""),__webpack_exports__}()})})(plugin);var pluginExports=plugin.exports;const servicePlugin=getDefaultExportFromCjs(pluginExports);class TabbarModel{constructor(){this.tabbar=[],this.handlers=[],this.initFromFileContent=g=>{this.tabbar=g&&g.extra&&g.extra.tabbar||[],console.log("tabbar初始化",this.tabbar),this.notify()},this.get=()=>this.tabbar,this.set=g=>{this.tabbar=g,this.notify()},this.remove=g=>{this.tabbar=this.tabbar.filter(t=>t.scene.id!==g),this.notify()},this.on=(g,t)=>{this.handlers.push({key:g,handler:t})},this.off=g=>{this.handlers=this.handlers.filter(t=>t.key!==g)},this.notify=()=>{this.handlers.forEach(g=>{g.handler(this.tabbar)})}}}const tabbarModel=new TabbarModel,vsCodeMessage$1=getWebViewMessageAPI();async function config({designerRef:R}){const g=await vsCodeMessage$1.call("getFileContent");return tabbarModel.initFromFileContent(g),{version:new Date().getTime(),type:"mpa",plugins:[servicePlugin({isPrivatization:!1,pure:!0})],comLibAdder(){},comLibLoader(t){return new Promise((n,e)=>{n(["https://p66-ec.becukwai.com/udata/pkg/eshop/fangzhou/mybricks.normal-miniapp.taro/0.5.17/edit.js","https://p66-ec.becukwai.com/udata/pkg/eshop/fangzhou/mybricks.chart-miniapp.taro/0.0.23/edit.js"])})},async save(){try{if(!R.current){staticMethods.error("设计器未初始化");return}const t=R.current.dump(!0,!0);if(!t){staticMethods.error("无法获取设计器数据"),console.error("dump() 返回 undefined");return}const{json:n,reset:e}=t;if(!n){staticMethods.error("导出数据为空"),console.error("dumped.json 为空:",t);return}console.log("dumpedJson",n);const{pageAry:r,projectContent:a,openedPageAry:m,updatedPageAry:h,deletedPageAry:l}=n;let s=g;s?s.project.projectContent=a:s={project:{projectContent:a},pages:[],extra:{}},s.project.pageAry=r,s.project.openedPageAry=m,s.project.deletedPageAry=l,h&&h.forEach(d=>{const E=s.pages.findIndex(O=>O.id===d.id);E>-1?s.pages[E].content=d.content:s.pages.push(d)}),s.extra||(s.extra={});const o=tabbarModel.get();s.extra.tabbar=o,await vsCodeMessage$1.call("saveFileContent",s),staticMethods.info("保存完成")}catch(t){console.error("❌ 保存失败:",t)}},pageMetaLoader(){return new Promise((t,n)=>{if(g){const{project:e}=g;t(e)}else t()})},pageContentLoader(t){return new Promise((n,e)=>{if(g){const{pages:r}=g,a=r.find(m=>m.id===t);n(a)}else n()})},geoView:{toolbarContainer:"#toolbarBtns",type:"mobile",width:375,height:667,scenes:{presets:[],adder:[{type:"normal",title:"小程序标签页",template:{namespace:"mybricks.taro.systemPage",deletable:!1,asRoot:!0},inputs:[{id:"open",title:"打开",schema:{type:"object"}}]},{type:"normal",title:"小程序页面",template:{namespace:"mybricks.taro.systemPage",deletable:!1,asRoot:!0,data:{useTabBar:!1}},inputs:[{id:"open",title:"打开",schema:{type:"object"}}]},{type:"popup",title:"对话框",template:{namespace:"mybricks.taro.popup",deletable:!1,asRoot:!0},inputs:[{id:"open",title:"打开",schema:{type:"object"}}]},{type:"normal",title:"网页",template:{namespace:"mybricks.taro.systemWebview",deletable:!1,asRoot:!0},inputs:[{id:"open",title:"打开",schema:{type:"object"}}]}]},theme:{css:["https://my.mybricks.world/mybricks-app-mpsite/public/brickd-mobile/0.0.53/index.css","https://my.mybricks.world/mybricks-app-mpsite/public/edit-reset.css"]}},toplView:{title:"交互",cards:{main:{title:"页面",ioEditable:!0}},vars:{},fx:{},useStrict:!1},com:{env:{i18n(t){return t},callConnector(t,n){var r;const e=(r=R.current)==null?void 0:r.getPlugin(t.connectorName||"@mybricks/plugins/service");return e?e.callConnector(t,n):Promise.reject("错误的连接器类型.")}}},editView:{items({},t,n,e){t.title="项目",t.items=[{items:[{title:"项目的配置项例子",type:"switch",value:{get(r){return r._useRem},set(r,a){r._useRem=a}}}]}]}}}}const ANTD_CONFIG={theme:{token:{colorPrimary:"#fa6400"}}},vsCodeMessage=getWebViewMessageAPI();function App(){const{SPADesigner:R}=window.mybricks||{},[g,t]=reactExports.useState(0),[n,e]=reactExports.useState(!1),r=reactExports.useCallback((d,E,O=3)=>{staticMethods.destroy(),staticMethods[d](E,O)},[]),a=reactExports.useRef(null),[m,h]=reactExports.useState(!1),l=reactExports.useRef(null);reactExports.useEffect(()=>{config({designerRef:a}).then(d=>{h(!0),l.current=d})},[a]);const s=reactExports.useCallback(d=>{t(0),l.current.save(d)},[]),o=reactExports.useCallback(()=>{e(!0),r("loading","导出中...",0);const d=a.current.toJSON({withDiagrams:!0,withIOSchema:!0});console.log("configJson",d),vsCodeMessage.call("exportProject",{configJson:d}).then(E=>{console.log(">>>>>导出结果",E),E.success?r("success",E.message):r("error",typeof E.message=="string"?E.message:"导出失败")}).finally(()=>{e(!1)})},[]);return React$1.createElement(ConfigProvider,{...ANTD_CONFIG},React$1.createElement("div",{className:"ide"},React$1.createElement("div",{className:"toolbar"},React$1.createElement("div",{className:"logo"},"MyBricks"),React$1.createElement("div",{className:"btns",id:"toolbarBtns"}),React$1.createElement(Space,null,React$1.createElement("button",{className:"button primary",onClick:s},g?"*":"","保存"),React$1.createElement("button",{className:"button ",disabled:n,onClick:o},"导出"))),React$1.createElement("div",{className:"designer"},!R&&React$1.createElement("div",{style:{padding:20,textAlign:"center"}},"设计器引擎加载中..."),m&&R&&React$1.createElement(R,{config:l.current,ref:a,onLoad:d=>console.log("loaded"),onMessage:r,onEdit:()=>t(g+1)}))))}export{App as default};
