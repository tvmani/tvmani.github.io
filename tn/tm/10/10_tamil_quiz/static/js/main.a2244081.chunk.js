(this["webpackJsonpfcc-multiple-choice"]=this["webpackJsonpfcc-multiple-choice"]||[]).push([[0],{26:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),c=n.n(i),l=n(15),o=n(10);var s=n(4),u=n(5),p=n(7),m=n(6),h=n(40),d=n(41),f=n(42),v=n(39),g=n(9),E=function(){return{type:"FINISH_QUIZ"}},y=n(11),b=function(e){var t={},n=e.length-1,a=function(){return Math.floor(Math.random()*(n+1))};return e.reduce((function(e,n){return e[function(){for(var e=a();e in t;)e=a();return t[e]=!0,e}()]=n,e}),[])},w=function(e){var t=e.choices[+e.solution];e.choices=b(e.choices);var n=e.choices.indexOf(t);return e.solution=n,e},k=function(e){var t=e.toJS();return t.challenges=b(t.challenges),t.challenges=t.challenges.map(w),Object(y.fromJS)(t)},z=function(e,t){return t.filter((function(t){return t.get("title")===e})).first()},N=function(e){for(var t=document.getElementsByTagName("meta"),n=0;n<t.length;n++)"og:title"===t[n].getAttribute("property")&&t[n].setAttribute("content",e)},S=function(e){return{screen:{isTablet:e.small,isMobile:e.mobile,isDesktop:e["> small"]}}},O=Object(g.connectScreenSize)(S)(Object(o.b)((function(e){return{quizzes:e.get("quizzes"),isActive:e.get("active")}}),{cancelQuiz:E})(function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onHover=function(){return a.setState({selection:null})},a.handleKeyDown=function(e){var t=e.code;"Space"!==t&&"ArrowDown"!==t&&"ArrowUp"!==t||e.preventDefault();var n=a.state,r=n.selection,i=n.maxOptions;switch(t){case"Space":var c,l=a.props.quizzes;if(null!==r)c=r<=a.props.quizzes.size-1?"practice/".concat(l.find((function(e,t){return t===r})).get("title")):r===i-1?"practice/shuffle":"/about",a.props.history.push(c);break;case"ArrowDown":null===r||++r===i+1?a.setState({selection:0}):a.setState({selection:r});break;case"ArrowUp":null===r||-1===--r?a.setState({selection:i}):a.setState({selection:r});break;default:return}},a.state={maxOptions:a.props.quizzes.size+1,selection:null,answer:null},document.addEventListener("keydown",a.handleKeyDown),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.isActive&&this.props.cancelQuiz()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var e=this,t=this.state,n=(t.maxOptions,t.selection),a=this.props,i=a.screen,c=a.quizzes,l=i.isDesktop,o=(c.reduce((function(e,t){return e+t.get("challenges").size}),0),function(e){var t="title ";return l&&e===n&&(t+="titleHover"),t});return r.a.createElement("div",null,function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("span",null,"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd 10\u0bae\u0bcd \u0bb5\u0b95\u0bc1\u0baa\u0bcd\u0baa\u0bc1"),e&&r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"contributeLink",href:"https://www.google.com/search?q=daily+practice+quotes&newwindow=1"},"Daily Practice Quotes"))}(l),r.a.createElement("div",{className:"studyComponent"},c.map((function(t,n){var a=t.get("title").replace(/\s/g,"-"),i=t.get("challenges");return r.a.createElement("div",{key:a,className:"quizContainer"},r.a.createElement(v.a,{className:"review",to:"/review/".concat(a),title:"Review All Questions"},r.a.createElement("i",{className:"fa fa-search"})),r.a.createElement(v.a,{to:"/practice/".concat(a),className:o(n),onMouseEnter:e.onHover},t.get("title")," ",r.a.createElement("span",null,"(",i.size," questions)")))}))))}}]),n}(r.a.Component))),q=n(12),Q=n.n(q),j=function(e){return r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})},T=function(e){var t=+e.get("solution"),n=e.get("title"),a=e.get("choices"),i=e.get("explanation");return r.a.createElement("div",{key:n},r.a.createElement("div",{className:"reviewTitle"},r.a.createElement("h1",{className:"questionTitle"},j(n))),a.map((function(e,n){return r.a.createElement("div",{key:e,className:t===n?"choice review solution":"choice review"},r.a.createElement("p",null,j(e)))})),i&&r.a.createElement("div",{className:"explanation"},r.a.createElement("h3",null,"Explanation:"),r.a.createElement("p",null,j(i))))},x=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.history.push("/")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),Q.a.highlightAll()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentDidUpdate",value:function(){Q.a.highlightAll()}},{key:"render",value:function(){var e=this.props,t=e.quiz,n=e.screen;if(!t)return null;var a=t.get("challenges");return r.a.createElement("div",{className:"studyWrapper reviewContainer"},r.a.createElement("div",{className:"studyContainer"},r.a.createElement("div",{className:"quizHeader"},r.a.createElement("div",{className:"quizTitle"},r.a.createElement("span",null,t.get("title")," Overview"),r.a.createElement("span",{style:{marginLeft:10}},"\ud83e\uddd9\u200d\u2642\ufe0f")),r.a.createElement("h3",{className:"quizMeta"},a.size>1?"".concat(a.size," total questions"):""),n.isDesktop&&r.a.createElement("span",{id:"return"},r.a.createElement(v.a,{to:"/"},r.a.createElement("i",{className:"fa fa-times-circle","aria-hidden":"true"})))),a.map(T)))}}]),n}(r.a.Component),A=Object(o.b)((function(e,t){var n=t.match.params.title,a=e.get("quizzes"),r=z(n.replace(/-/g," "),a);return r||t.history.push("/"),{quiz:r}}))(x),D=Object(g.connectScreenSize)(S)(A),_=Object(g.connectScreenSize)(S)(function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.history.push("/")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var e=this.props.screen;return r.a.createElement("div",{className:"studyWrapper reviewContainer"},r.a.createElement("div",{className:"studyContainer"},r.a.createElement("div",{className:"quizHeader"},r.a.createElement("div",{className:"quizTitle"},r.a.createElement("span",null,"About")),!e.isMobile&&r.a.createElement("span",{id:"return"},r.a.createElement(v.a,{to:"/"},r.a.createElement("i",{className:"fa fa-times-circle","aria-hidden":"true"})))),r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,"Practice Lessons \ud83e\udd39\u200d\u2642\ufe0f"),r.a.createElement("p",null,"These are weekly review quizzes for the content we cover in class."),r.a.createElement("p",null,"The questions should be simply and easy but enough to keep the concepts fresh in your mind."),r.a.createElement("p",null,"Spaced repetition is the key to learning. \ud83d\ude03"),r.a.createElement("button",{className:"aboutContribute"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/bonham000/app-time-lessons"},"Contribute")),r.a.createElement("br",null),r.a.createElement(v.a,{className:"finishBtn",to:"/"},r.a.createElement("button",null,"Return to Quiz Page")))))}}]),n}(r.a.Component)),L=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onHover=function(){return a.setState({selection:null})},a.handleKeyDown=function(e){var t=e.code;"Space"!==t&&"ArrowDown"!==t&&"ArrowUp"!==t||e.preventDefault();var n=a.state,r=n.answer,i=n.selection,c=n.complete,l=a.props.meta.get("currentQuestion"),o=l.get("choices").size,s=+l.get("solution");switch(t){case"Space":c?(a.props.finishQuiz(),a.props.history.push("/")):null!==i?a.handleAnswer(i,s):null!==r&&a.nextQuestion();break;case"ArrowDown":null===i||++i===o?a.setState({selection:0}):a.setState({selection:i});break;case"ArrowUp":null===i||-1===--i?a.setState({selection:o-1}):a.setState({selection:i});break;case"Escape":a.props.finishQuiz(),a.props.history.push("/");break;default:return}},a.handleAnswer=function(e,t){e===t?a.setState({answer:!0,selection:null}):a.setState({answer:!1,selection:null})},a.nextQuestion=function(){var e=a.props,t=e.meta,n=e.title,r=t.get("index"),i=t.getIn(["quiz","challenges"]).size;if(a.state.answer&&a.props.correct(),r===i-1)a.props.viewResults(),a.setState({complete:!0});else{a.props.nextQuestion();var c=t.getIn(["quiz","challenges"]).find((function(e,t){return t===r+1})).get("subtitle").replace(/\s/g,"-");a.props.history.replace("/practice/".concat(n.replace(/\s/g,"-"),"/").concat(c)),a.setState({answer:null,selection:null})}},a.renderMarkup=function(e){return r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})},a.state={complete:!1,selection:null,answer:null},document.addEventListener("keydown",a.handleKeyDown),a}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentDidMount",value:function(){var e=this.props.meta.getIn(["currentQuestion","subtitle"]);N(e),Q.a.highlightAll()}},{key:"componentWillReceiveProps",value:function(e){if(this.props.meta!==e.meta){var t=e.meta.getIn(["currentQuestion","subtitle"]);N(t)}}},{key:"componentDidUpdate",value:function(){Q.a.highlightAll()}},{key:"render",value:function(){var e=this,t=this.state,n=t.selection,a=t.answer,i=t.complete,c=this.props,l=c.meta,o=c.screen,s=o.isMobile,u=o.isDesktop,p=l.get("quiz"),m=l.get("score"),h=l.get("index"),d=p.get("challenges").size,f=l.get("currentQuestion"),g=f.get("explanation"),E=+f.get("solution"),y=m/l.getIn(["quiz","challenges"]).size,b=function(e,t,n){for(var a=0,r=[];e>0;)r.push("success"),e--,a++;for(;a<t;)r.push("failure"),a++;for(;a<n;)r.push("blank"),a++;return r}(m,h,d),w=100/d;return r.a.createElement("div",{className:"studyWrapper"},r.a.createElement("div",{className:"studyContainer"},r.a.createElement("div",{id:"score-tower"},b.map((function(e,t){return r.a.createElement("div",{className:e,key:p.get("challenges").find((function(e,n){return n===t})),style:{width:"".concat(w,"%")}})}))),r.a.createElement("div",{className:"quizHeader"},r.a.createElement("div",{className:"quizTitle"},r.a.createElement("span",null,p.get("title")," Quiz"),r.a.createElement("span",{style:{marginLeft:10}},"\ud83d\udcd5")),this.state.complete?r.a.createElement("h3",{className:"quizMeta"},"Quiz Complete"):r.a.createElement("h3",{className:"quizMeta"},"Question ",h+1," of ",d),u&&r.a.createElement("span",{id:"return"},r.a.createElement(v.a,{to:"/"},r.a.createElement("i",{className:"fa fa-times-circle","aria-hidden":"true"})))),!i&&r.a.createElement("h1",{className:"questionTitle"},this.renderMarkup(f.get("title"))),!i&&f.get("choices").map((function(t,i){var c,l=t+i;return null===a?r.a.createElement("div",{key:l,className:(c=i,n===c?"choice selected ".concat(s?"mobile":"desktop"):"choice ".concat(s?"mobile":"desktop")),onMouseEnter:e.onHover,onClick:function(){return e.handleAnswer(i,E)}},r.a.createElement("p",null,e.renderMarkup(t))):a?E===i?r.a.createElement("div",{key:l,className:"choice",id:"correctWinner"},r.a.createElement("p",null,e.renderMarkup(t))):r.a.createElement("div",{key:l,className:"choice",id:"wrongWinner"},r.a.createElement("p",null,e.renderMarkup(t))):E===i?r.a.createElement("div",{key:l,className:"choice",id:"correctLoser"},r.a.createElement("p",null,e.renderMarkup(t))):r.a.createElement("div",{key:l,className:"choice",id:"wrongLoser"},r.a.createElement("p",null,e.renderMarkup(t)))})),null!==a&&!i&&r.a.createElement("div",{className:"messageDiv"},a?r.a.createElement("h1",{className:"correctAnswer"},"Correct, great work!"):r.a.createElement("h1",{className:"wrongAnswer"},"Sorry, that is not correct!"),null!==a&&!a&&g&&r.a.createElement("div",{className:"explanation"},r.a.createElement("h3",null,"Explanation:"),r.a.createElement("p",null,this.renderMarkup(g))),h+1===d?r.a.createElement("button",{onClick:this.nextQuestion},"View Results"):r.a.createElement("button",{onClick:this.nextQuestion},"Next Question")),i&&r.a.createElement("div",null,r.a.createElement("h1",{className:"scoreMessage"},"You scored ",m," correct out of ",d," questions! ",y>.75?"Nice work!":"Better luck next time!"),r.a.createElement(v.a,{className:"finishBtn",to:"/",onClick:function(){return e.props.finishQuiz()}},r.a.createElement("button",null,"Return to Quiz Page"))),!s&&r.a.createElement("div",{id:"infoBox"},r.a.createElement("p",null,"Use ",r.a.createElement("i",{className:"fa fa-long-arrow-up"})," ",r.a.createElement("i",{className:"fa fa-long-arrow-down"})," space and esc"))))}}]),n}(r.a.Component),M=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentWillMount",value:function(){var e=this.props,t=e.title,n=e.question,a=e.meta,r=t.replace(/-/g," "),i=a.get("active"),c=a.get("quizzes");if(!i)if("shuffle"===r)this.props.startAllQuestionQuiz();else if(r&&!n)this.props.startQuiz(r);else if(r&&n){var l=function(e,t,n){var a=z(e,n);return!!a&&a.get("challenges").reduce((function(e,n){if(e)return e;var a=n.get("subtitle");if(a===t)return t;var r=a.length-1;return"?"===a.charAt(r)&&t===a.slice(0,r)&&a}),!1)}(r,n.replace(/-/g," "),c);l?this.props.startQuizByQuestion(r,l):this.props.history.push("/")}}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.title,n=e.question,a=e.meta.getIn(["currentQuestion","subtitle"]);if(!n&&a){var r="".concat(t.replace(/\s/g,"-"),"/").concat(a.replace(/\s/g,"-"));this.props.history.replace(r)}}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.question,a=e.meta.get("active");return t&&n&&a?r.a.createElement(L,this.props):null}}]),n}(r.a.Component),C={startQuiz:function(e){return{type:"START_QUIZ",payload:e}},startQuizByQuestion:function(e,t){return{type:"START_QUIZ_BY_QUESTION",payload:{title:e,question:t}}},startAllQuestionQuiz:function(){return{type:"START_ALL"}},nextQuestion:function(){return{type:"NEXT_QUESTION"}},correct:function(){return{type:"SCORE"}},viewResults:function(){return{type:"RESULTS"}},finishQuiz:E},I=Object(o.b)((function(e,t){var n=t.match.params;return{meta:e,title:n.title,question:n.question}}),C)(M),U=Object(g.connectScreenSize)(S)(I),R=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{path:"/",exact:!0,component:O}),r.a.createElement(f.a,{path:"/practice/:title/:question",component:U}),r.a.createElement(f.a,{path:"/practice/:title",component:U}),r.a.createElement(f.a,{path:"/review/:title",component:D}),r.a.createElement(f.a,{exact:!0,path:"/about",component:_}),r.a.createElement(f.a,{component:O})))}}]),n}(r.a.Component),W=(n(36),function(e){var t=0,n=[],a=[],r=e.reduce((function(e,r){var i={},c={};if(!r.title||!r.category)return a.push(r.title),e;var l=r.challenges.filter((function(e){return!!(e.title&&e.subtitle&&e.solution)&&(!(e.choices.length<2)&&(i[e.title]?(n.push(e.title),!1):c[e.subtitle]?(n.push(e.subtitle),!1):(i[e.title]=!0,c[e.subtitle]=!0,e.explanation||t++,!0)))}));return l.length>0?(r.challenges=l,e.concat(r)):(a.push(r.title),e)}),[]);return(a.length||t)&&console.warn("Take Note:"),n.length&&console.log("The following question titles are duplicates, titles must be "+"unique: ".concat(n.join(", "))),a.length&&console.log("The following quiz categories could not be added, "+"probably because they are incomplete: ".concat(a.join(", "))),t&&console.log("".concat(t," Questions have no explanation. ")+"Adding explanations will improve the learning experience."),r}([{title:"\u0baa\u0bbe\u0b9f\u0bae\u0bcd_1_Q1",category:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bca\u0bb2\u0bcd \u0bb5\u0bb3\u0bae\u0bcd - \u0b87\u0bb2\u0bc8",challenges:[{title:"\u0b87\u0bb2\u0bc8",subtitle:"1",choices:["\u0ba8\u0bc6\u0bb2\u0bcd,\u0baa\u0bc1\u0bb2\u0bcd \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0baa\u0bc1\u0bb3\u0bbf, \u0bb5\u0bc7\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b9a\u0bcb\u0bb3\u0bae\u0bcd, \u0b95\u0bb0\u0bc1\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0ba4\u0bc6\u0ba9\u0bcd\u0ba9\u0bc8, \u0baa\u0ba9\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b95\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4 \u0b87\u0bb2\u0bc8 "],solution:"1",explanation:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bca\u0bb2\u0bcd \u0bb5\u0bb3\u0bae\u0bcd - \u0b87\u0bb2\u0bc8"},{title:"\u0ba4\u0bbe\u0bb3\u0bcd",subtitle:"2",choices:["\u0b9a\u0bcb\u0bb3\u0bae\u0bcd, \u0b95\u0bb0\u0bc1\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0ba4\u0bc6\u0ba9\u0bcd\u0ba9\u0bc8, \u0baa\u0ba9\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b95\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4 \u0b87\u0bb2\u0bc8 ","\u0ba8\u0bc6\u0bb2\u0bcd,\u0baa\u0bc1\u0bb2\u0bcd \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0baa\u0bc1\u0bb3\u0bbf, \u0bb5\u0bc7\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8"],solution:"3",explanation:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bca\u0bb2\u0bcd \u0bb5\u0bb3\u0bae\u0bcd - \u0b87\u0bb2\u0bc8"},{title:"\u0ba4\u0bcb\u0b95\u0bc8",subtitle:"3",choices:["\u0ba4\u0bc6\u0ba9\u0bcd\u0ba9\u0bc8, \u0baa\u0ba9\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b95\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4 \u0b87\u0bb2\u0bc8 ","\u0ba8\u0bc6\u0bb2\u0bcd,\u0baa\u0bc1\u0bb2\u0bcd \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0baa\u0bc1\u0bb3\u0bbf, \u0bb5\u0bc7\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b9a\u0bcb\u0bb3\u0bae\u0bcd, \u0b95\u0bb0\u0bc1\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8"],solution:"4",explanation:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bca\u0bb2\u0bcd \u0bb5\u0bb3\u0bae\u0bcd - \u0b87\u0bb2\u0bc8"},{title:"\u0b93\u0bb2\u0bc8",subtitle:"4",choices:["\u0baa\u0bc1\u0bb3\u0bbf, \u0bb5\u0bc7\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b9a\u0bcb\u0bb3\u0bae\u0bcd, \u0b95\u0bb0\u0bc1\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0ba4\u0bc6\u0ba9\u0bcd\u0ba9\u0bc8, \u0baa\u0ba9\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b95\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4 \u0b87\u0bb2\u0bc8 ","\u0b95\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4 \u0ba4\u0bbe\u0bb3\u0bc1\u0bae\u0bcd \u0ba4\u0bcb\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd "],solution:"2",explanation:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bca\u0bb2\u0bcd \u0bb5\u0bb3\u0bae\u0bcd - \u0b87\u0bb2\u0bc8"},{title:"\u0b9a\u0bb0\u0bc1\u0b95\u0bc1 ",subtitle:"5",choices:["\u0baa\u0bc1\u0bb3\u0bbf, \u0bb5\u0bc7\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b95\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4 \u0b87\u0bb2\u0bc8 ","\u0b95\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4 \u0ba4\u0bbe\u0bb3\u0bc1\u0bae\u0bcd \u0ba4\u0bcb\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd ","\u0b9a\u0bcb\u0bb3\u0bae\u0bcd, \u0b95\u0bb0\u0bc1\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0ba4\u0bc6\u0ba9\u0bcd\u0ba9\u0bc8, \u0baa\u0ba9\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8"],solution:"1",explanation:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bca\u0bb2\u0bcd \u0bb5\u0bb3\u0bae\u0bcd - \u0b87\u0bb2\u0bc8"},{title:"\u0b9a\u0ba3\u0bcd\u0b9f\u0bc1",subtitle:"6",choices:["\u0b95\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4 \u0b87\u0bb2\u0bc8 ","\u0ba4\u0bc6\u0ba9\u0bcd\u0ba9\u0bc8, \u0baa\u0ba9\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b9a\u0bcb\u0bb3\u0bae\u0bcd, \u0b95\u0bb0\u0bc1\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8","\u0b95\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4 \u0ba4\u0bbe\u0bb3\u0bc1\u0bae\u0bcd \u0ba4\u0bcb\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd ","\u0baa\u0bc1\u0bb3\u0bbf, \u0bb5\u0bc7\u0bae\u0bcd\u0baa\u0bc1 \u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0bc8"],solution:"3",explanation:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bca\u0bb2\u0bcd \u0bb5\u0bb3\u0bae\u0bcd - \u0b87\u0bb2\u0bc8"}]}])),H=Object(y.Map)({active:!1,score:0,index:0,quiz:null,currentQuestion:null,quizzes:Object(y.List)(Object(y.fromJS)(W))}),K=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"START_ALL":var r=e.get("quizzes").map(k),i=Object(y.fromJS)({title:"All Categories",challenges:r.reduce((function(e,t){return e.concat(t.get("challenges"))}),Object(y.List)())});return e.set("active",!0).set("quiz",i).set("currentQuestion",i.get("challenges").first());case"START_QUIZ":var c=e.get("quizzes"),l=k(z(a,c));return e.set("active",!0).set("quiz",l).set("currentQuestion",l.get("challenges").first());case"START_QUIZ_BY_QUESTION":var o=a.title,s=a.question,u=e.get("quizzes"),p=k(z(o,u)),m=p.get("challenges").findEntry((function(e,t){return e.get("subtitle")===s})),h=p.update("challenges",(function(e){return e.splice(m[0],1)})).update("challenges",(function(e){return e.insert(0,m[1])}));return e.set("active",!0).set("quiz",h).set("currentQuestion",h.get("challenges").first());case"NEXT_QUESTION":var d=e.get("index")+1,f=e.get("quiz");return e.update("index",(function(){return d})).update("currentQuestion",(function(){return f.get("challenges").find((function(e,t){return t===d}))}));case"SCORE":return e.update("score",(function(e){return e+1}));case"RESULTS":return e.update("index",(function(e){return e+1}));case"FINISH_QUIZ":return H;default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),B=r.a.createElement(o.a,{store:K},r.a.createElement(R,null));c.a.render(B,document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a2244081.chunk.js.map