(this["webpackJsonpag-site"]=this["webpackJsonpag-site"]||[]).push([[0],{190:function(e,t,a){e.exports=a.p+"static/media/logo-text.deeb7ee7.png"},191:function(e,t,a){e.exports=a.p+"static/media/logo-text-white.af336776.png"},196:function(e,t,a){e.exports=a.p+"static/media/photo-reel.b98efbd9.png"},199:function(e,t,a){e.exports=a(426)},204:function(e,t,a){},235:function(e,t){},237:function(e,t){},267:function(e,t){},268:function(e,t){},333:function(e,t){},426:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(78),o=a.n(c),l=(a(204),a(41)),i=a(27),s=a(28),m=a(30),u=a(29),d=a(31),f=a(40),E=a(6),h=a.n(E),p=a(189),v=a.n(p),b=a(190),g=a.n(b),N=a(191),w=a.n(N),O=a(22),y=function(e){var t=e.raised,a=e.text,n=e.href,c=e.onPress,o=e.hasShadow,l=e.hasDarkShadow,i=e.isSecondary,s=e.className,m=e.isWhite,u=e.hasDownArrow,d=e.isTertiary,f=e.disabled,E=h()("button-component","".concat(t?"is-raised":"is-ghost"),o&&"has-shadow",l&&"dark-shadow",i&&"button-secondary",m&&"button-white",f&&"disabled-button",d&&"is-tertiary",s);return r.a.createElement("div",{className:"button-container"},r.a.createElement("button",Object.assign({},e,{href:n,onClick:c,className:E,target:"_blank",rel:"noopener noreferrer"}),a,u&&r.a.createElement("span",{className:"down-arrow"},r.a.createElement(O.f,null))))},M="/",k="/events",S="/about",j="/contact",x=(a(207),a(16)),D=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:h()("row-component",a)},t)},A=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:h()("column-component",a)},t)},T=function(e){var t=e.children,a=e.text,n=e.isSecondary,c=e.className,o=h()("section-header-component",c),l=h()("title",n&&"title-secondary");return r.a.createElement(D,{className:o},r.a.createElement(A,{className:"container section-header-container"},r.a.createElement(D,{className:"section-header-text-container"},r.a.createElement("h1",{className:l},Object(x.startCase)(a))),t))},C=h()("input-component","input","is-rounded"),L=h()("input-component","textarea"),I=function(e){return r.a.createElement("div",{className:"input-container"},e.isTextArea?r.a.createElement("textarea",Object.assign({className:L,name:"",id:"",cols:"30",rows:"10"},e)):r.a.createElement("input",Object.assign({className:C},e)))},B=function(e){var t=e.html,a=e.classNames,n=void 0===a?"":a;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t},className:n})},P=a(198),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:null,result:null,message:""},a.resetState=function(){return setTimeout((function(){return a.setState({result:null,message:""})}),3e3)},a.handleSubmit=function(e){e.preventDefault(),e.stopPropagation()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderContent",value:function(){var e=this;return r.a.createElement(T,{text:"Join our mailing list",className:h()("mailing-list-section-header",this.props.isInModal&&"is-in-modal")},r.a.createElement(P.a,{url:"https://facebook.us16.list-manage.com/subscribe/post?u=5ae11bc484c4c935998f1fcbc&amp;id=01b1dca7fa",render:function(t){var a=t.subscribe,n=(t.status,t.message);return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{html:n}),r.a.createElement(D,{className:"input-row"},r.a.createElement("div",{className:"email-input-container"},r.a.createElement(I,{placeholder:"example@domain.com",onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"add-button-container"},r.a.createElement(y,{text:"Add me!",onPress:function(){return a({EMAIL:e.state.email,FNAME:"N-A",LNAME:"N-A"})},type:"submit",raised:!0,hasShadow:!0,hasDarkShadow:!0,disabled:Object(x.isEmpty)(e.state.email)}))))}}),this.props.isInModal?r.a.createElement(D,{className:"links-row"},r.a.createElement("a",{href:"https://www.facebook.com/animationutd/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(O.c,null)),r.a.createElement("a",{href:"mailto:utdanimationguild@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(O.b,null)),r.a.createElement("a",{href:"https://www.instagram.com/utdallas_ag/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(O.d,null)),r.a.createElement("a",{href:"https://discord.gg/AGzrNd8",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(O.a,null))):r.a.createElement(D,{className:"links-row"}))}},{key:"render",value:function(){return this.props.isInModal?this.renderContent():r.a.createElement("section",{className:"mailing-list-section-component"},r.a.createElement("div",{className:"container"},this.renderContent()))}}]),t}(n.Component),W="header-component",_="is-transparent",G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleMobileNavClick=function(){var e=document.querySelector(".navbar-burger");e&&e.addEventListener("click",(function(){a.setState({isDropDownOpen:!a.state.isDropDownOpen},(function(){return a.toggleMobileMenu(e)}))}))},a.state={isModalVisible:!1,isDropDownOpen:!1},a.getClassNames=function(e){return h()(W,"navbar","is-fixed-top",e&&!a.state.isDropDownOpen&&_,a.state.isDropDownOpen&&"is-navbar-menu-active")},a.renderMobileMenu=function(){return r.a.createElement("button",{className:"navbar-burger","data-target":"navMenu","aria-label":"menu","aria-expanded":"false"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))},a.renderMenuItem=function(e,t){return r.a.createElement("div",{className:"navbar-item text-link"},r.a.createElement(f.b,{to:e},t))},a.renderMenu=function(e){return r.a.createElement("div",{className:"navbar-menu",id:"navMenu"},r.a.createElement("div",{className:"navbar-start"}),r.a.createElement("div",{className:"navbar-end"},a.renderMenuItem(M,"Home"),a.renderMenuItem(k,"Events"),a.renderMenuItem(S,"About"),a.renderMenuItem(j,"Contact"),r.a.createElement("div",{className:"navbar-item",href:"https://bulma.io/"},r.a.createElement(y,{text:"Keep In Touch",raised:!e||a.state.isDropDownOpen,isWhite:e&&!a.state.isDropDownOpen,hasShadow:!0,isTertiary:!0,onPress:function(){return a.setState({isModalVisible:!0})}}))))},a.renderModal=function(){return r.a.createElement(v.a,{visible:a.state.isModalVisible,onClose:function(){return a.setState({isModalVisible:!1})}},r.a.createElement(U,{isInModal:!0}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"toggleMobileMenu",value:function(e){var t=document.getElementById(e.dataset.target);e.classList.toggle("is-active"),t.classList.toggle("is-active")}},{key:"componentDidMount",value:function(){this.handleMobileNavClick()}},{key:"componentWillUnmount",value:function(){var e=this,t=document.querySelector(".navbar-burger");t.removeEventListener("click",(function(){e.setState({isDropDownOpen:!e.state.isDropDownOpen},(function(){return e.toggleMobileMenu(t)}))}))}},{key:"render",value:function(){var e=this.props.isTransparent;return r.a.createElement("nav",{className:this.getClassNames(e),role:"navigation","aria-label":"main-navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(f.b,{className:"navbar-item logo-container",to:"/"},r.a.createElement("img",{src:w.a,className:"logo white-logo",alt:"Animation Guild at UT Dallas"}),r.a.createElement("img",{src:g.a,className:"logo colored-logo",alt:"Animation Guild at UT Dallas"})),this.renderMobileMenu()),this.renderMenu(e)),this.renderModal())}}]),t}(n.Component),H=function(){var e=h()("footer-component","footer");return r.a.createElement("div",{className:"footer-text"},r.a.createElement("p",null,"Made with \u2764 by the Animation Guild Officers"),r.a.createElement("footer",{className:e}))},V=a(80),q="events-id",F=80,z=q,J=h()("hero-section-component hero","hero"),X=h()("huge-font","title"),K=function(){V.scroller.scrollTo(z,{duration:1e3,smooth:!0,offset:-F})},Q=function(e){e.backgroundUrl;return r.a.createElement("section",{className:J},r.a.createElement("div",{className:"text-container hero-body container"},r.a.createElement("h3",null,"Welcome to"),r.a.createElement("h1",{className:X},"Animation Guild"),r.a.createElement("h3",null,"at University of Texas at Dallas"),r.a.createElement("div",{className:"button-container"},r.a.createElement(y,{text:"Learn More",isWhite:!0,hasDarkShadow:!0,hasDownArrow:!0,onPress:K}))))},Y=function(){return r.a.createElement("section",{className:"mission-statement-section-component"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Our goal is to build a community of students working together to break into the animation industry"),r.a.createElement("p",{className:"sub-title"},"We aim to become an open and collaborative community where members feel inspired to fulfill their creative potential")))},R=a(196),Z=a.n(R),$=function(){return r.a.createElement("section",{className:"photo-reel-section-component"},r.a.createElement("div",null,r.a.createElement("img",{src:Z.a,className:"logo",alt:"Animation Guild at UT Dallas"})))},ee=a(197),te=a(49),ae=a.n(te),ne=h()("container","event-component"),re=function(e){var t=e.event,a=t.date,n=t.imageUrl;return r.a.createElement("div",{className:ne},function(e){return r.a.createElement("div",{className:"event-image image is-2by1"},r.a.createElement("img",{src:e,alt:""}))}(n),function(e){var t=e.title,a=e.date,n=e.location,c=e.time,o=e.eventUrl,l=e.eventHTML,i=ae()(a).format("dddd, MMMM DD");return r.a.createElement("div",{className:"event-content container content"},r.a.createElement("h2",null,t),r.a.createElement("h3",null,"".concat(i),n&&", ".concat(n)),r.a.createElement("h3",null,c),r.a.createElement(B,{html:l,classNames:"content"}),r.a.createElement("div",{className:"learn-more-button-container"},r.a.createElement(y,{text:"Learn More",onPress:function(){return window.location.href=o}})))}(t),function(e){var t=ae()(e),a=t.format("D"),n=Object(x.toUpper)(t.format("MMM"));return r.a.createElement("div",{className:"event-date-container"},r.a.createElement("p",{className:"event-month"},n),r.a.createElement("p",{className:"event-day"},a))}(a))},ce=function(e){var t=e.events;return r.a.createElement("section",{className:"home-page-events-section-component"},r.a.createElement("div",{className:"container"},r.a.createElement(T,{text:"upcoming events"}),r.a.createElement("div",{className:"events-container"},Array.isArray(t)&&function(e){return e.map((function(e){return r.a.createElement(re,{event:e})}))}(t)),r.a.createElement(T,{className:"big-section-header",text:"More Events Coming Soon!",isSecondary:!0},r.a.createElement(f.b,{to:"Events"},r.a.createElement(y,{text:"View Our Past Events",isSecondary:!0})))))},oe=a(119),le=a.n(oe),ie=null,se=[],me=[],ue=function(e){ie=e,se=[],me=[],de=0,le.a.init({key:"https://docs.google.com/spreadsheets/d/1V3ZVLOu47u_P1yBePGJuxginScsswPu3gTS8W0A3N_4/edit?usp=sharing",callback:be,simpleSheet:!0}),le.a.init({key:"https://docs.google.com/spreadsheets/d/1PXeXmX5u1cB-1TdtTfLf7tqsav203c4Qo0quof5BUaQ/edit?usp=sharing",callback:pe,simpleSheet:!0})},de=0,fe=function(){2===++de&&null!==ie&&ie()},Ee=function(){return se},he=function(){return me},pe=function(e,t){e.forEach((function(e){return ve(e)})),fe()},ve=function(e){""!==e.order?e.order=parseInt(e.order):e.order=100,se.push(e)},be=function(e,t){e.forEach((function(e){return me.push(e)})),fe()},ge=function(e){var t=ae()(),a=ae()(e.date),n=a.diff(t)>=0,r=a.isSame(t,"d")&&a.isSame(t,"y");return n||r},Ne=q,we=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={isAtHeroSection:!0,events:[]},a.dataLoadedCB=function(){var e=he();e=e.filter(ge),a.setState({events:e})},a.renderHeroSection=function(){return r.a.createElement(ee.a,{onEnter:function(){return a.setState({isAtHeroSection:!0})},onLeave:function(){return a.setState({isAtHeroSection:!1})},topOffset:F+5},r.a.createElement("div",null,r.a.createElement(Q,null)))},ue(a.dataLoadedCB),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderHeroSection(),r.a.createElement(G,{isTransparent:this.state.isAtHeroSection}),r.a.createElement(V.Element,{name:Ne},r.a.createElement(ce,{events:this.state.events})),r.a.createElement($,null),r.a.createElement(Y,null),r.a.createElement(U,null),r.a.createElement(H,null))}}]),t}(n.Component),Oe=a(120),ye=function(e){var t=e.events;return r.a.createElement("section",{className:"events-page-events-section-component"},r.a.createElement("div",{className:"container"},r.a.createElement(T,{text:"events"}),r.a.createElement("div",{className:"events-container"},Array.isArray(t)&&function(e){return e.map((function(e){return r.a.createElement(re,{event:e})}))}(t))))},Me=function(e){var t=Object(x.reverse)(e.filter(ge)),a=Object(x.reverse)(Object(x.difference)(e,t));return[].concat(Object(Oe.a)(t),Object(Oe.a)(a))},ke=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={events:[]},a.dataLoadedCB=function(){var e=he();a.setState({events:e})},ue(a.dataLoadedCB),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(ye,{events:Me(this.state.events)}),r.a.createElement(U,null),r.a.createElement(H,null))}}]),t}(n.Component),Se=function(){return r.a.createElement("section",{className:"about-section"},r.a.createElement("div",{className:"container"},r.a.createElement(T,{text:"Who We Are"},r.a.createElement("p",{className:"sub-title"},"The Animation Guild at UT Dallas was founded in 2012 and has been growing steadily since as an active student-run organization representing and serving animation students in the School of Arts, Technology, and Emerging Communication (ATEC)."),r.a.createElement("p",null,"In 2017, the Guild launched a new brand identity and refocused its mission around building a community of aspiring animation professionals. The Guild seeks to foster more collaboration among students and build stronger relationships with animation studios, alumni, faculty, and the local community."))))},je=function(e){var t=e.firstName,a=e.lastName,n=e.position,c=e.linkedin,o=e.image;return r.a.createElement("section",{className:"officer-section-component"},""!==o&&r.a.createElement("img",{src:o,alt:t+" "+a,className:"officer-image"}),r.a.createElement("div",{className:"officer-information"},r.a.createElement("p",{className:"position"},Object(x.capitalize)(n)),r.a.createElement("p",{className:"name"},"".concat(Object(x.capitalize)(t)," ").concat(Object(x.capitalize)(a))),r.a.createElement("div",{className:"officer-links"},c&&r.a.createElement("a",{className:"linkedin-icon",href:c,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(O.e,null)))))},xe=function(e){var t=e.officers,a=void 0===t?[]:t;return r.a.createElement("section",{className:"officers-section-component"},r.a.createElement(T,{text:"The Team"}),r.a.createElement("div",{className:"container"},console.log(a),a.map((function(e){return function(e){return r.a.createElement(je,e)}(e)}))))},De=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={officers:[]},a.dataLoadedCB=function(){var e=Ee();console.log(e),console.log("SORT",Object(x.sortBy)(e,"order")),e=Object(x.sortBy)(e,"order"),a.setState({officers:e})},ue(a.dataLoadedCB),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(Se,null),r.a.createElement(xe,{officers:this.state.officers}),r.a.createElement(U,null),r.a.createElement(H,null))}}]),t}(n.Component),Ae=function(){return r.a.createElement("section",{className:"contact-form-component"},r.a.createElement(T,{text:"Keep In Touch"}),r.a.createElement("div",{className:"container"},r.a.createElement("form",{action:"https://formspree.io/xeqgqeao",method:"POST"},r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement("div",{className:"field half first"},r.a.createElement("label",{htmlFor:"name"},"Name*"),r.a.createElement(I,{type:"text",name:"name",id:"name",placeholder:"Your Name"})),r.a.createElement("div",{className:"field half"},r.a.createElement("label",{htmlFor:"email"},"Email*"),r.a.createElement(I,{type:"text",name:"email",id:"email",placeholder:"example@domain.com"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"message"},"Message*"),r.a.createElement(I,{name:"message",id:"message",rows:"6",isTextArea:!0})),r.a.createElement(y,{type:"submit",text:"Submit",raised:!0}))))},Te=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(Ae,null),r.a.createElement(U,null),r.a.createElement(H,null))},Ce=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))};var Le=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:j,component:Te}),r.a.createElement(l.a,{path:S,component:De}),r.a.createElement(l.a,{path:k,component:ke}),r.a.createElement(l.a,{exact:!0,path:M,component:we}),r.a.createElement(l.a,{path:"*",component:Ce})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f.a,null,r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[199,1,2]]]);
//# sourceMappingURL=main.079701da.chunk.js.map