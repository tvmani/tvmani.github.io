(this.webpackJsonpscripts=this.webpackJsonpscripts||[]).push([[0],{180:function(e,t,n){e.exports=n(329)},185:function(e,t,n){},329:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),l=(n(185),n(15)),c=n(53),u=n(13),s=n(11),m=n(379),f=n(388),d=n(389),g=n(390),p=n(171),h=n(330),b=n(387),E=n(172),v=n(377),y=n(378),x=n(23),O=n(24),j=function(){function e(t,n,a,r,i){Object(x.a)(this,e),this.firstNum=t,this.secondNum=n,this.operation=a,this.submittedAnswer=r,this.submissionTime=i,this.expectedAnswer=null,this.result=null}return Object(O.a)(e,null,[{key:"questionWithAnswers",value:function(t,n){var a=new e(t.firstNum,t.secondNum,t.operation,t.submittedAnswer,t.submissionTime);return a.expectedAnswer=n,a.result=null,a}},{key:"questionWithResult",value:function(e,t,n){var a=this.questionWithAnswers(e,t);return a.result=n,a}}]),e}(),w=n(169),S=n(393),I=n(161);function k(e){var t=e.inputRef,n=e.onChange,a=Object(w.a)(e,["inputRef","onChange"]);return r.a.createElement(I.a,Object.assign({},a,{getInputRef:t,onValueChange:function(t){n({target:{name:e.name,value:t.value}})},thousandSeparator:!0,isNumericString:!0,prefix:""}))}var N=r.a.forwardRef((function(e,t){var n=e.value,a=e.handleChange,i=e.callback;window.requestAnimationFrame((function(){var e=document.getElementById("formatted-numberformat-input");null!=e&&(e.focus(),e.select())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{label:"",value:n,autoFocus:!0,onKeyDown:function(e){return function(e,t){9!==e.keyCode&&13!==e.keyCode||n.length>=1&&t(e)}(e,i)},onChange:function(e){a(e)},name:"numberformat",size:"medium",id:"formatted-numberformat-input",inputProps:{},InputProps:{inputComponent:k,style:{fontSize:"30px"}}}))})),F=r.a.forwardRef((function(e,t){var n,i={numberformat:""},o=e.firstInput,c=e.secondInput,m=e.operation,f=e.submissionHandler,d=r.a.useState(i),g=Object(u.a)(d,2),p=g[0],b=g[1],x=function(){var e=Object(a.useRef)(null);return[e,function(){e.current&&e.current.focus()}]}(),O=Object(u.a)(x,2),w=O[0],S=O[1],I=(n=f,function(e){var t=p.numberformat,a=new j(parseFloat(o),parseFloat(c),m.mathFunction,parseFloat(t),Date.now());b(i),n(a),S()});return console.log("QuestionForm - ReRender"),window.requestAnimationFrame(S),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},m.name),r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,sm:5},r.a.createElement(y.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(h.a,{label:"Button",size:"large",variant:"outlined",color:"primary",style:{fontSize:30}},r.a.createElement("span",null,o)),r.a.createElement(h.a,{label:"Button",size:"medium",variant:"outlined",color:"primary",style:{fontSize:25}},r.a.createElement("span",null,m.mathFunction)),r.a.createElement(h.a,{label:"Button",size:"large",variant:"outlined",color:"primary",style:{fontSize:30}},r.a.createElement("span",null,c)))),r.a.createElement(v.a,{item:!0,xs:12,sm:2},r.a.createElement(h.a,{label:"Button",size:"large",variant:"outlined",color:"primary",style:{borderStyle:"none",fontSize:30}},"=")),r.a.createElement(v.a,{item:!0,xs:12,sm:5},r.a.createElement(y.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(N,{value:p.numberformat,ref:w,callback:I,handleChange:function(e){b(Object(l.a)(Object(l.a)({},p),{},Object(s.a)({},e.target.name,e.target.value)))}}),r.a.createElement(h.a,{label:"Button",size:"large",variant:"outlined",color:"primary",onClick:I,style:{fontSize:30}},"GO")))))})),C=(n(189),n(166));var W=r.a.forwardRef((function(e,t){var n,i={numberformat:""},o=e.firstInput,c=e.secondInput,m=e.operation,f=e.submissionHandler,d=r.a.useState(i),g=Object(u.a)(d,2),p=g[0],b=g[1],x=function(){var e=Object(a.useRef)(null);return[e,function(){e.current&&e.current.focus()}]}(),O=Object(u.a)(x,2),w=O[0],S=O[1],I=(n=f,function(e){var t=p.numberformat,a=new j(parseFloat(o),parseFloat(c),m.mathFunction,parseFloat(t),Date.now());b(i),n(a),S()});window.requestAnimationFrame(S);var k=function(e,t){return"square".startsWith(t)?e+"^2":"cube".startsWith(t)?e+"^3":void 0}(o,m.id);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Question"),r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,sm:5},r.a.createElement(h.a,{label:"Button",size:"large",variant:"outlined",color:"primary",style:{fontSize:30}},r.a.createElement(C.InlineMath,null,k))),r.a.createElement(v.a,{item:!0,xs:12,sm:2},r.a.createElement(h.a,{label:"Button",size:"large",variant:"outlined",color:"primary",style:{borderStyle:"none",fontSize:30}},"=")),r.a.createElement(v.a,{item:!0,xs:12,sm:5},r.a.createElement(y.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(N,{value:p.numberformat,ref:w,callback:I,handleChange:function(e){b(Object(l.a)(Object(l.a)({},p),{},Object(s.a)({},e.target.name,e.target.value)))}}),r.a.createElement(h.a,{label:"Button",size:"large",variant:"outlined",color:"primary",onClick:I,style:{fontSize:30}},"GO")))))})),z=n(381),R=n(385),A=n(384),T=n(380),B=n(382),q=n(383),M=n(167),D=n.n(M),G=n(168),J=n.n(G),L=Object(m.a)({table:{minWidth:500}});function P(e){var t=L(),n=e.questions||[],a=n.filter((function(e){return!e.result})).length;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{component:p.a},r.a.createElement(z.a,{className:t.table,size:"small","aria-label":"simple table"},r.a.createElement(B.a,null,r.a.createElement(q.a,{key:"summaryHeader"},r.a.createElement(A.a,{align:"right"},"Speed"),r.a.createElement(A.a,{align:"right"},"Total"),r.a.createElement(A.a,{align:"right"},"InCorrect"),r.a.createElement(A.a,{align:"right"},"Correct"))),r.a.createElement(R.a,null,r.a.createElement(q.a,{key:"summary"},r.a.createElement(A.a,{align:"right"},r.a.createElement("b",null,n.length>0?((n[0].submissionTime-n[n.length-1].submissionTime+2)/n.filter((function(e){return e.result})).length/1e3).toFixed(2):9999999999)),r.a.createElement(A.a,{align:"right"},n.length),r.a.createElement(A.a,{align:"right"},a),r.a.createElement(A.a,{align:"right"},n.length-a))))),r.a.createElement(T.a,{component:p.a},r.a.createElement(z.a,{className:t.table,size:"small","aria-label":"simple table"},r.a.createElement(B.a,null,r.a.createElement(q.a,null,r.a.createElement(A.a,null,"Time"),r.a.createElement(A.a,{align:"right"},"Result"),r.a.createElement(A.a,{align:"right"},"input"),r.a.createElement(A.a,{align:"right"},"input"),r.a.createElement(A.a,{align:"right"},"Your Answer"),r.a.createElement(A.a,{align:"right"},"Expected Answer"),r.a.createElement(A.a,{align:"right"},"operation"),r.a.createElement(A.a,{align:"right"},"Clue"))),r.a.createElement(R.a,null,n.map((function(e){return r.a.createElement(q.a,{key:e.submissionTime},r.a.createElement(A.a,{component:"th",scope:"row"},new Date(e.submissionTime).toLocaleTimeString()),r.a.createElement(A.a,{align:"right"},e.result?r.a.createElement(D.a,null):r.a.createElement(J.a,null)),r.a.createElement(A.a,{align:"right"},e.firstNum),r.a.createElement(A.a,{align:"right"},e.secondNum),r.a.createElement(A.a,{align:"right"},e.submittedAnswer),r.a.createElement(A.a,{align:"right"},e.expectedAnswer),r.a.createElement(A.a,{align:"right"},e.operation.operation),r.a.createElement(A.a,{align:"right"},e.operation))}))))))}var X,H=n(52),_=n(192),Q=n(317);function K(e){return e.reduce((function(e,t){return"undefined"===typeof e[t]?e[t]=1:e[t]+=1,e}),{})}var V=(X={"+":function(e,t){var n=e+t;return console.log("Lambda answer ".concat(n)),n},x:function(e,t){return e*t},X:function(e,t){return e*t},square:function(e,t){return e*e},cube:function(e,t){return e*e*e},"/":function(e,t){return e/t},"-":function(e,t){return e-t},junior_addition:function(e,t){return e+t},junior_counting:function(e,t){return e},junior_subtraction:function(e,t){return e-t},junior_multiplication:function(e,t){return e*t},addition:function(e,t){return e+t},multiplication:function(e,t){return e*t},subtraction:function(e,t){return e-t},division:function(e,t){return e/t}},Object(s.a)(X,"square",(function(e){return e*e})),Object(s.a)(X,"cube",(function(e){return e*e*e})),Object(s.a)(X,"squareroot",(function(e){return Math.sqrt(e)})),Object(s.a)(X,"cuberoot",(function(e){return Math.cbrt(e)})),X),Y=function(){function e(t){Object(x.a)(this,e),this.name=t}return Object(O.a)(e,null,[{key:"answer",value:function(e){console.log(e);var t=V[e.operation];return null==t&&(t=V[e.operation.mathFunction]),t(e.firstNum,e.secondNum)}},{key:"evaluateQuestion",value:function(e){var t=V[e.operation];return null==t&&(t=V[e.operation.mathFunction]),Math.abs(t(e.firstNum,e.secondNum)-e.submittedAnswer)<.1}},{key:"analyze",value:function(e){var t=Object(H.a)(e).slice(0);t.forEach((function(e){e.result=V[e.operation](e.firstNum,e.secondNum)===e.submittedAnswer}));var n=Q((function(e){return e.operation}),t);return console.log("1......"+JSON.stringify(n)),n.map((function(e){return _((function(e){return e.result}),e)}))}},{key:"evaluate",value:function(e){var t=Object(H.a)(e).slice(0),n=t.filter((function(e){return"multiplication"===e.operation})).filter((function(e){return e.firstNum*e.secondNum===e.submittedAnswer})).map((function(e){return[e.firstNum,e.secondNum]})),a="undefined"!==typeof n?[].concat.apply([],n):[],r=t.filter((function(e){return"multiplication"===e.operation})).filter((function(e){return e.firstNum*e.secondNum!==e.submittedAnswer})).map((function(e){return[e.firstNum,e.secondNum]})),i="undefined"!==typeof r?[].concat.apply([],r):[];return{wins:K(a),needPractice:K(i)}}}]),e}(),$=n(159),U=n(324);var Z=function(){function e(){Object(x.a)(this,e)}return Object(O.a)(e,null,[{key:"getRandomIntInclusive",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}},{key:"getRandomIntInclusiveWithExceptions",value:function(e,t,n){var a=Array.from(Array(t-e).keys()).map((function(t){return t+e})).map((function(e){return""+e})).filter((function(e){return n.indexOf(e)<0})).filter((function(e){return n.indexOf(+e)<0})),r=U(a,n),i=$(Array.from(r))[0];return parseInt(i,10)}}]),e}(),ee=n(159),te=function(){function e(){Object(x.a)(this,e)}return Object(O.a)(e,null,[{key:"getShuffledRange",value:function(e,t,n,a){var r=t-e,i=Array.from(Array(r).keys()).filter((function(t){return t+e})).filter((function(e){return n.indexOf(+e)<0}));return ee(i)}},{key:"getStatefulShuffledGenerator",value:function(e,t,n,a){var r=t-e,i=Array.from(Array(r).keys()).filter((function(t){return t+e})).filter((function(e){return n.indexOf(+e)<0})),o=ee(i);return{getNext:function(){var e=o,t=Object(H.a)(e),n=t[0],a=t.slice(1);return o=[].concat(Object(c.a)(a),[n]),n}}}},{key:"getTwoNumbers",value:function(e,t,n){return[Z.getRandomIntInclusiveWithExceptions(e,t,n),Z.getRandomIntInclusiveWithExceptions(e,t,n)]}},{key:"isCommonBase",value:function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1],r=n%10,i=a%10,o=Math.floor(n/10),l=Math.floor(a/10);return(r+i)%10===0&&o===l}},{key:"isSameTens",value:function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1],r=n%10,i=a%10,o=Math.floor(n/10),l=Math.floor(a/10);return(r+i)%10!==0&&o===l}},{key:"isEndsIn5",value:function(e){var t=Object(u.a)(e,2),n=t[0]%10;return n===t[1]%10&&5===n}},{key:"getCommonBase10sComplement",value:function(e,t,n){var a=Z.getRandomIntInclusiveWithExceptions(e,t,n),r=a%10;return[a,a-r+(10-r)]}},{key:"getJunior5s",value:function(e,t,n){return[5,Z.getRandomIntInclusive(1,9)]}},{key:"getSameTens",value:function(e,t,n){var a=Z.getRandomIntInclusiveWithExceptions(e,t,n),r=Z.getRandomIntInclusive(1,9);return[a,10*Math.floor(a/10)+r]}},{key:"getNumberEndsWith5",value:function(e,t,n){var a=Z.getRandomIntInclusiveWithExceptions(e,t,n),r=Z.getRandomIntInclusiveWithExceptions(e,t,[a].concat(Object(c.a)(n)));return[10*a+5,10*r+5]}}]),e}(),ne=n(386),ae=n(394),re=n(395),ie=n(396),oe=n(376),le=Object(m.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"20ch"}}}}));function ce(e){var t=le(),n=r.a.useState({exerciseId:"addition",name:""}),a=Object(u.a)(n,2),i=a[0],o=a[1],c=function(e){console.log("Selected exercise-id :: ".concat(e.target.value)),o(Object(l.a)(Object(l.a)({},i),{},Object(s.a)({},e.target.name,e.target.value)))},m=e.callback,f=e.exercises,d=f.map((function(e){return r.a.createElement(ne.a,{key:e.id,value:e.id,control:r.a.createElement(ae.a,null),label:e.name})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(ie.a,{component:"fieldset"},r.a.createElement(oe.a,{component:"legend"},"Exercise"),r.a.createElement(re.a,{row:!0,"aria-label":"Exercises",name:"exerciseId",value:i.exerciseId,onChange:c},d))),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement(S.a,{id:"outlined-basic",label:"name",variant:"outlined",size:"medium",name:"name",value:i.name,autoFocus:!0,onKeyDown:function(e){return function(e,t){9!==e.keyCode&&13!==e.keyCode||i.name&&i.name.length>=2&&t(i)}(e,m)},onChange:c}),r.a.createElement(h.a,{label:"Start",size:"small",variant:"contained",color:"primary",onClick:function(e){return m(i)},style:{fontSize:25}},"Start")))))}var ue=n(391),se=n(392);function me(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(b.a,{color:"inherit",href:"https://material-ui.com/"},"DailyPractice")," ",(new Date).getFullYear(),".")}var fe=Object(m.a)((function(e){return{appBar:{position:"relative"},layout:Object(s.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(s.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}}));var de=te.getStatefulShuffledGenerator(2,25,[5,10]),ge=te.getStatefulShuffledGenerator(2,50,[5,10]),pe=[{id:"addition",level:10,name:"Addition (+)",mathFunction:"+",min:20,max:40,excludes:[5,10]},{id:"subtraction",level:20,name:"Subtraction (-)",mathFunction:"-",min:2,max:40,excludes:[5,10]},{id:"multiplicationJr",level:30,name:"Basics Multiplication (x)",mathFunction:"X",min:2,max:11,excludes:[5,10]},{id:"multiplication",level:40,name:"Multiplication (x)",mathFunction:"X",min:9,max:21,excludes:[5,10]},{id:"onesSumTo10",level:50,name:"One`s Sum To 10",mathFunction:"X",min:20,max:40,excludes:[5,10,15,11,20]},{id:"getNumberEndsWith5",level:60,name:"Number 5`s (x)",mathFunction:"X",min:2,max:9,excludes:[0]},{id:"sameTens",level:70,name:"SameTens",mathFunction:"X",min:11,max:100,excludes:[5,10,15,11,20]},{id:"division",level:80,name:"Division &divide;",mathFunction:"/",min:2,max:20,excludes:[5,10]},{id:"square",level:90,name:"Square (x^2)",mathFunction:"square",min:2,max:50,excludes:[5,10]},{id:"cube",level:100,name:"Cube (x^3)",mathFunction:"cube",min:2,max:25,excludes:[5,10]}].sort((function(e,t){return e.level-t.level})),he=pe.reduce((function(e,t){return e[t.id]=t,e}),{});function be(){var e=fe(),t=r.a.useState([]),n=Object(u.a)(t,2),i=n[0],o=n[1],m=r.a.useState({name:"",sid:"",exerciseId:"onesSumTo10"}),b=Object(u.a)(m,2),y=b[0],x=b[1],O=function(e){var t=[j.questionWithResult(e,Y.answer(e),Y.evaluateQuestion(e))].concat(Object(c.a)(i));o(t)};Object(a.useEffect)((function(){i&&i.length>4&&y.sid.length>2&&localStorage.setItem(y.sid,JSON.stringify(i))}),[i]);var w=function(e){console.log("getGeneratorFor"+e);var t=he[e].min,n=he[e].max,a=he[e].excludes,r=te.getTwoNumbers(t,n,a);return"onesSumTo10".startsWith(e)?te.getCommonBase10sComplement(t,n,a):"getNumberEndsWith5".startsWith(e)?te.getNumberEndsWith5(t,n,a):"sameTens".startsWith(e)?te.getSameTens(t,n,a):"subtraction".startsWith(e)?(r.sort((function(e,t){return t-e})),r):"division".startsWith(e)?(r.sort((function(e,t){return t-e})),[r[1]*r[0],r[0]]):"square".startsWith(e)?[ge.getNext(),2]:"cube".startsWith(e)?[de.getNext(),3]:r}(y.exerciseId),S=null;return S="square"===y.exerciseId||"cube"===y.exerciseId?r.a.createElement(W,{submissionHandler:O,firstInput:w[0],secondInput:w[1],operation:he[y.exerciseId]}):r.a.createElement(F,{submissionHandler:O,firstInput:w[0],secondInput:w[1],operation:he[y.exerciseId]}),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null),r.a.createElement(d.a,{position:"absolute",color:"transparent",className:e.appBar},r.a.createElement(g.a,{variant:"dense"},r.a.createElement(E.a,{variant:"h6",color:"inherit",noWrap:!0},"Daily Practice"))),r.a.createElement("main",{className:e.layout},r.a.createElement(p.a,{className:e.paper},0===y.sid.length&&r.a.createElement(ce,{exercises:pe,callback:function(e){var t=(new Date).toISOString(),n="Practice_".concat(e.name,"@").concat(t,"~").concat(e.exerciseId);console.dir("Local session from session handler - ".concat(e)),x(Object(l.a)(Object(l.a)({},e),{},{sid:n})),o([])}}),y.sid.length>10&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{className:e.root},r.a.createElement("div",{className:e.details},r.a.createElement(se.a,{className:e.content},r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,sm:4},r.a.createElement(E.a,{component:"h3",variant:"h3"},y.name)),r.a.createElement(v.a,{item:!0,xs:12,sm:4},r.a.createElement("img",{src:"/icon/1.png",alt:"recipe thumbnail",height:"50",width:"50"})),r.a.createElement(v.a,{item:!0,xs:12,sm:4},r.a.createElement(h.a,{label:"End",size:"small",variant:"contained",color:"secondary",onClick:function(e){var t;x(Object(l.a)(Object(l.a)({},y),{},(t={},Object(s.a)(t,e.target.name,e.target.value),Object(s.a)(t,"sid",""),t)))},style:{fontSize:25}},"End")))))),S,r.a.createElement(P,{questions:i}))),r.a.createElement(me,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[180,1,2]]]);
//# sourceMappingURL=main.e9569425.chunk.js.map