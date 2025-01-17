(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{8590:(e,t,n)=>{Promise.resolve().then(n.bind(n,5431))},5431:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var i=n(5155),s=n(9124),a=n(5683),r=n(5565),l=n(2115);let o={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},c=e=>{let{active:t,children:n,onClick:a}=e;return(0,i.jsx)(s.P.button,{className:"px-6 py-2 rounded-full transition-colors duration-200 ".concat(t?"bg-primary-blue text-white":"text-gray-600 hover:bg-gray-200"),onClick:a,whileHover:{scale:1.05},whileTap:{scale:.95},children:n})},d=e=>{let{title:t,date:n,location:a,description:l,status:o,image:c,index:d}=e,u=(e=>{switch(e){case"open":return{bg:"bg-green-500",text:"Registration Open"};case"coming":return{bg:"bg-orange-500",text:"Coming Soon"};case"closed":return{bg:"bg-red-500",text:"Registration Closed"};default:return{bg:"bg-gray-500",text:"Status Unknown"}}})(o);return(0,i.jsxs)(s.P.div,{className:"bg-white md:mx-0 mx-4 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300",variants:{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.5,delay:.1*d},children:[(0,i.jsxs)("div",{className:"relative h-48 overflow-hidden",children:[(0,i.jsx)(r.default,{src:c||"/event-default.jpg",alt:t,fill:!0,className:"object-cover transform hover:scale-110 transition-transform duration-700"}),(0,i.jsx)("div",{className:"absolute top-4 right-4",children:(0,i.jsx)(s.P.span,{className:"".concat(u.bg," text-white px-3 py-1 rounded-full text-sm font-semibold"),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.2},children:u.text})})]}),(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsx)("h3",{className:"text-xl font-bold text-primary-blue mb-3",children:t}),(0,i.jsxs)("div",{className:"space-y-2 mb-4",children:[(0,i.jsxs)("p",{className:"flex items-center text-gray-600",children:[(0,i.jsx)("span",{className:"mr-2",children:"\uD83D\uDCC5"})," ",n]}),(0,i.jsxs)("p",{className:"flex items-center text-gray-600",children:[(0,i.jsx)("span",{className:"mr-2",children:"\uD83D\uDCCD"})," ",a]})]}),(0,i.jsx)("p",{className:"text-gray-600 mb-4",children:l}),"open"===o&&(0,i.jsx)(s.P.button,{className:"w-full bg-primary-yellow text-primary-gray font-bold py-2 rounded-full",whileHover:{scale:1.02},whileTap:{scale:.98},children:"Register Now"})]})]})};function u(){let[e,t]=(0,l.useState)("upcoming"),[n,u]=(0,l.useState)(!1),m=e=>{t(e)};return(0,i.jsxs)("div",{className:"min-h-screen",children:[(0,i.jsxs)(s.P.div,{className:"relative h-[70vh]",initial:{opacity:0},animate:{opacity:1},children:[(0,i.jsx)(r.default,{src:"/events-hero.jpg",alt:"Roundnet tournament",fill:!0,className:"object-cover",priority:!0}),(0,i.jsx)("div",{className:"absolute inset-0 bg-black/40"}),(0,i.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,i.jsx)("h1",{className:"text-4xl md:text-5xl mt-16 font-bold text-white text-center",children:"Events & Tournaments"})})]}),(0,i.jsxs)("div",{className:"max-w-6xl my-6 mx-auto",children:[(0,i.jsx)(s.P.div,{className:"flex justify-center mb-8",variants:o,initial:"initial",animate:"animate",children:(0,i.jsxs)("div",{className:"flex space-x-4 bg-gray-100 p-2 rounded-full",children:[(0,i.jsx)(c,{active:"upcoming"===e,onClick:()=>m("upcoming"),children:"Upcoming Events"}),(0,i.jsx)(c,{active:"past"===e,onClick:()=>m("past"),children:"Past Events"})]})}),(0,i.jsx)(a.N,{mode:"wait",children:n?(0,i.jsx)(s.P.div,{className:"flex justify-center py-20",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,i.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-blue"})}):(0,i.jsx)(s.P.div,{className:"grid md:grid-cols-2 gap-8",initial:"initial",animate:"animate",exit:"exit",variants:{animate:{transition:{staggerChildren:.1}}},children:"upcoming"===e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{title:"Atlantic Roundnet Tournament",date:"June 15, 2025",location:"Halifax Commons, NS",description:"Join us for the Atlantic stop of the Roundnet Canada series.",status:"open",image:"/square-logo.jpg",index:0}),(0,i.jsx)(d,{title:"Coming Soon",date:"TBD",location:"TBD",description:"Stay tuned!",status:"coming",image:"/net.jpg",index:1})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d,{title:"Fall Open Tournament",date:"October 14, 2023",location:"Halifax Commons",description:"Registration is now closed.",status:"closed",image:"/location-map.jpg",index:2})})})})]})]})}},5683:(e,t,n)=>{"use strict";n.d(t,{N:()=>g});var i=n(5155),s=n(2115),a=n(4710),r=n(9234),l=n(9656),o=n(7249);class c extends s.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d(e){let{children:t,isPresent:n}=e,a=(0,s.useId)(),r=(0,s.useRef)(null),l=(0,s.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,s.useContext)(o.Q);return(0,s.useInsertionEffect)(()=>{let{width:e,height:t,top:i,left:s}=l.current;if(n||!r.current||!e||!t)return;r.current.dataset.motionPopId=a;let o=document.createElement("style");return d&&(o.nonce=d),document.head.appendChild(o),o.sheet&&o.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(i,"px !important;\n            left: ").concat(s,"px !important;\n          }\n        ")),()=>{document.head.removeChild(o)}},[n]),(0,i.jsx)(c,{isPresent:n,childRef:r,sizeRef:l,children:s.cloneElement(t,{ref:r})})}let u=e=>{let{children:t,initial:n,isPresent:a,onExitComplete:o,custom:c,presenceAffectsLayout:u,mode:p}=e,h=(0,r.M)(m),x=(0,s.useId)(),f=(0,s.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;o&&o()},[h,o]),g=(0,s.useMemo)(()=>({id:x,initial:n,isPresent:a,custom:c,onExitComplete:f,register:e=>(h.set(e,!1),()=>h.delete(e))}),u?[Math.random(),f]:[a,f]);return(0,s.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[a]),s.useEffect(()=>{a||h.size||!o||o()},[a]),"popLayout"===p&&(t=(0,i.jsx)(d,{isPresent:a,children:t})),(0,i.jsx)(l.t.Provider,{value:g,children:t})};function m(){return new Map}var p=n(5087);let h=e=>e.key||"";function x(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}var f=n(5403);let g=e=>{let{children:t,custom:n,initial:l=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:d="sync",propagate:m=!1}=e,[g,j]=(0,p.xQ)(m),v=(0,s.useMemo)(()=>x(t),[t]),y=m&&!g?[]:v.map(h),b=(0,s.useRef)(!0),N=(0,s.useRef)(v),w=(0,r.M)(()=>new Map),[C,E]=(0,s.useState)(v),[P,R]=(0,s.useState)(v);(0,f.E)(()=>{b.current=!1,N.current=v;for(let e=0;e<P.length;e++){let t=h(P[e]);y.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[P,y.length,y.join("-")]);let k=[];if(v!==C){let e=[...v];for(let t=0;t<P.length;t++){let n=P[t],i=h(n);y.includes(i)||(e.splice(t,0,n),k.push(n))}"wait"===d&&k.length&&(e=k),R(x(e)),E(v);return}let{forceRender:D}=(0,s.useContext)(a.L);return(0,i.jsx)(i.Fragment,{children:P.map(e=>{let t=h(e),s=(!m||!!g)&&(v===P||y.includes(t));return(0,i.jsx)(u,{isPresent:s,initial:(!b.current||!!l)&&void 0,custom:s?void 0:n,presenceAffectsLayout:c,mode:d,onExitComplete:s?void 0:()=>{if(!w.has(t))return;w.set(t,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==D||D(),R(N.current),m&&(null==j||j()),o&&o())},children:e},t)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[124,565,441,517,358],()=>t(8590)),_N_E=e.O()}]);