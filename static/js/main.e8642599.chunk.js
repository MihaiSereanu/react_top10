(this.webpackJsonpheadline_reddit=this.webpackJsonpheadline_reddit||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),i=(a(11),a(1)),u=a.n(i),s=a(3),o=a(2),m=function(e){var t=e.article;e.index;return r.a.createElement("article",null,r.a.createElement("a",{href:"https://reddit.com".concat(t.permalink),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h4",null,t.title)))},p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("webdev"),i=Object(o.a)(l,2),p=i[0],d=i[1];Object(n.useEffect)((function(){f(p)}),[p]);var f=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.reddit.com/r/".concat(t,".json?limit=8"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c(n.data.children),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"redditHeader"},r.a.createElement("input",{type:"text",className:"input",value:p,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"articles"},a&&a.map((function(e,t){return r.a.createElement(m,{key:t,article:e.data,index:t})}))))},d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("rainbow"),i=Object(o.a)(l,2),m=i[0],p=i[1];Object(n.useEffect)((function(){d(m)}),[m]);var d=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c(n[1]),p(n[0]),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"wikiHeader"},r.a.createElement("input",{type:"text",className:"inputWiki",value:m,onChange:function(e){return p(e.target.value)}})),r.a.createElement("div",{className:"articles"},a&&a.map((function(e,t){return r.a.createElement("article",{key:t},r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(e)},r.a.createElement("h3",null,e)))}))))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box"},r.a.createElement(d,null)),r.a.createElement("div",{className:"box"},r.a.createElement(p,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.e8642599.chunk.js.map