(this["webpackJsonpreact-mesto-auth2"]=this["webpackJsonpreact-mesto-auth2"]||[]).push([[0],{28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(16),r=a.n(c),l=(a(28),a(20)),i=a(1),s=a(2),u=a(17),m=a(18),p=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(u.a)(this,e),this.url=a,this.headers=n}return Object(m.a)(e,[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.url,"/cards"),{headers:{authorization:this.headers.authorization}}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"/users/me"),{headers:{authorization:this.headers.authorization}}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"setNewAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.headers.authorization}}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var a=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this.headers.authorization}}).then((function(e){return a._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}}]),e}())({baseUrl:"https://www.api.nekker.students.nomoreparties.xyz",headers:{authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}),d="https://www.api.nekker.students.nomoreparties.xyz",_=o.a.createContext(),f="/",h="/signup",E="/signin",g="/404",b=a.p+"static/media/logo.c2821b38.svg",v=a(6);var N=function(e){var t=e.userMail,a=e.onSignOut,n=Object(s.g)();return o.a.createElement("header",{className:"header"},o.a.createElement(v.b,{to:f},o.a.createElement("img",{className:"header__logo",src:b,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})),o.a.createElement(s.b,{path:f,exact:!0},o.a.createElement("div",{className:"header__user"},o.a.createElement("p",{className:"header__user-mail"},t),o.a.createElement(v.b,{className:"header__link",to:E,onClick:function(){a(),localStorage.removeItem("jwt"),n.push("/signin")}},"\u0412\u044b\u0439\u0442\u0438"))),o.a.createElement(s.b,{path:h},o.a.createElement(v.b,{className:"header__link",to:E},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement(s.b,{path:E},o.a.createElement(v.b,{className:"header__link",to:h},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),o.a.createElement(s.b,{path:g},o.a.createElement(v.b,{className:"header__link",to:f},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))};var k=function(e){var t=o.a.useContext(_),a=e.card.owner._id===t._id,n="element__delete ".concat(a?"":"element__delete element__delete_hide"),c=e.card.likes.some((function(e){return e._id===t._id})),r="element__like ".concat(c?"elememt__like_active":"");return o.a.createElement(_.Provider,{value:t},o.a.createElement("li",{className:"element"},o.a.createElement("img",{className:"element__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),o.a.createElement("button",{className:n,onClick:function(){e.onCardDelete(e.card)}}),o.a.createElement("div",{className:"element__info"},o.a.createElement("h2",{className:"element__title"},e.card.name),o.a.createElement("div",{className:"element__likes-container"},o.a.createElement("button",{type:"button",className:r,onClick:function(){e.onCardLike(e.card)}}),o.a.createElement("p",{className:"element__likes"},e.card.likes.length)))))};var C=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,c=e.onCardClick,r=e.cards,l=e.onCardLike,i=e.onCardDelete,s=o.a.useContext(_);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__img"},o.a.createElement("span",{className:"profile__overlay",onClick:t}),o.a.createElement("img",{className:"profile__avatar",src:s.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__title-row"},o.a.createElement("h1",{className:"profile__name"},s.name),o.a.createElement("button",{className:"profile__button-edit",onClick:a})),o.a.createElement("p",{className:"profile__profession"},s.about)),o.a.createElement("button",{className:"profile__button-add",onClick:n})),o.a.createElement("section",{className:"elements"},o.a.createElement("ul",{className:"elements__list"},r.map((function(e){return o.a.createElement(k,{card:e,onCardClick:c,key:e._id,onCardLike:l,onCardDelete:i})})))))};var O=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var j=function(e){var t=e.card,a=e.isOpen,n=e.onClose;return o.a.createElement("div",{className:"popup popup_type_photo ".concat(a&&"popup_opened")},o.a.createElement("figure",{className:"popup__content"},o.a.createElement("img",{className:"popup__image",src:t.link,alt:"\u0424\u043e\u0442\u043e \u043c\u0435\u0441\u0442\u0430"}),o.a.createElement("figcaption",{className:"popup__caption"},t.name),o.a.createElement("button",{className:"popup__button-close popup__button-close_for_img",onClick:n})))};var y=function(e){return o.a.createElement("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("h2",{className:"popup__title"},e.title),o.a.createElement("form",{id:"form-".concat(e.name),className:"popup__form",noValidate:!0,onSubmit:e.onSubmit},e.children,o.a.createElement("button",{type:"submit",className:"popup__button-save"},e.buttonText)),o.a.createElement("button",{className:"popup__button-close",onClick:e.onClose})))};var S=function(e){var t=o.a.useContext(_),a=o.a.useState(""),n=Object(i.a)(a,2),c=n[0],r=n[1],l=o.a.useState(""),s=Object(i.a)(l,2),u=s[0],m=s[1];return o.a.useEffect((function(){r(t.name),m(t.about)}),[t,e.isOpen]),o.a.createElement(y,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},buttonText:e.buttonText},o.a.createElement("input",{id:"profile-name",type:"text",name:"name",className:"popup__input",placeholder:"\u0418\u043c\u044f",required:!0,minLength:2,maxLength:40,value:c||"",onChange:function(e){r(e.target.value)}}),o.a.createElement("span",{id:"profile-name-error",className:"popup__input_error"}),o.a.createElement("input",{id:"profile-profession",type:"text",name:"about",className:"popup__input popup__input_compl",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:2,maxLength:200,value:u||"",onChange:function(e){m(e.target.value)}}),o.a.createElement("span",{id:"profile-profession-error",className:"popup__input_error"}))};var w=function(e){var t=o.a.useRef();return o.a.createElement(y,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar(t.current.value),a.target.reset()},buttonText:e.buttonText},o.a.createElement("input",{id:"avatar-link",type:"url",name:"avatar",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",required:!0,ref:t}),o.a.createElement("span",{id:"avatar-link-error",className:"popup__input_error"}))};var x=function(e){var t=o.a.useState(""),a=Object(i.a)(t,2),n=a[0],c=a[1],r=o.a.useState(""),l=Object(i.a)(r,2),s=l[0],u=l[1];return o.a.createElement(y,{name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:n,link:s}),c(""),u("")},buttonText:e.buttonText},o.a.createElement("input",{id:"place-name",type:"text",name:"photoname",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:2,maxLength:30,value:n,onChange:function(e){c(e.target.value)}}),o.a.createElement("span",{id:"place-name-error",className:"popup__input_error"}),o.a.createElement("input",{id:"place-link",type:"url",name:"photolink",className:"popup__input popup__input_compl",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:s,onChange:function(e){u(e.target.value)}}),o.a.createElement("span",{id:"place-link-error",className:"popup__input_error"}))};var T=function(e){var t=o.a.useState(""),a=Object(i.a)(t,2),n=a[0],c=a[1],r=o.a.useState(""),l=Object(i.a)(r,2),s=l[0],u=l[1];return o.a.createElement("div",{className:"login"},o.a.createElement("h2",{className:"login__title"},"\u0412\u0445\u043e\u0434"),o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),n&&s||console.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),e.onLogin(n,s),c(""),u("")}},o.a.createElement("input",{className:"login__input",type:"email",required:!0,placeholder:"Email",onChange:function(e){c(e.target.value)}}),o.a.createElement("input",{className:"login__input",type:"password",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){u(e.target.value)}}),o.a.createElement("button",{type:"submit",className:"login__submit-button"},"\u0412\u043e\u0439\u0442\u0438")))};var D=function(e){var t=o.a.useState(""),a=Object(i.a)(t,2),n=a[0],c=a[1],r=o.a.useState(""),l=Object(i.a)(r,2),s=l[0],u=l[1];return o.a.createElement("div",{className:"login"},o.a.createElement("h2",{className:"login__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),n&&s||(console.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),c(""),u("")),e.onRegister(n,s),c(""),u("")}},o.a.createElement("input",{className:"login__input",type:"email",required:!0,placeholder:"Email",onChange:function(e){c(e.target.value)}}),o.a.createElement("div",{className:"login__input-box"},o.a.createElement("input",{className:"login__input",type:"password",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){u(e.target.value)}})),o.a.createElement("button",{type:"submit",className:"login__submit-button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),o.a.createElement(v.b,{className:"login__link",to:E},o.a.createElement("p",{className:"login__link_text"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438")))},P=a(21),L=function(e){var t=e.component,a=Object(P.a)(e,["component"]);return o.a.createElement(s.b,null,(function(){return a.loggedIn?o.a.createElement(t,a):o.a.createElement(s.a,{to:E})}))},R=a.p+"static/media/SucReg.1b6082f8.svg",A=a.p+"static/media/FailReg.df8eddf6.svg";var I=function(e){var t=e.isOpen,a=e.onClose,n=e.status;return o.a.createElement("div",{className:"popup popup_tooltip ".concat(t?"popup_opened":"")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("img",{alt:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",className:"popup__picture",src:n?R:A}),o.a.createElement("h2",{className:"popup__title popup__title_tooltip"},n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),o.a.createElement("button",{type:"button",className:"popup__button-close",onClick:a})))};var U=function(){return o.a.createElement("div",{className:"not-found"},o.a.createElement("h2",{className:"not-found__title"},"404"),o.a.createElement("p",{className:"not-found__text"},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),o.a.createElement("p",{className:"not-found__text"},"\u0422\u043e \u0447\u0442\u043e \u0432\u044b \u0438\u0449\u0438\u0442\u0435, \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))};var z=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),u=Object(i.a)(r,2),m=u[0],g=u[1],b=Object(n.useState)(!1),v=Object(i.a)(b,2),k=v[0],y=v[1],P=Object(n.useState)(!1),R=Object(i.a)(P,2),A=R[0],z=R[1],q=Object(n.useState)([]),J=Object(i.a)(q,2),B=J[0],M=J[1],H=Object(n.useState)({}),W=Object(i.a)(H,2),F=W[0],G=W[1],V=Object(n.useState)([]),$=Object(i.a)(V,2),K=$[0],Q=$[1],X=Object(n.useState)(!1),Y=Object(i.a)(X,2),Z=Y[0],ee=Y[1],te=Object(n.useState)(!1),ae=Object(i.a)(te,2),ne=ae[0],oe=ae[1],ce=Object(n.useState)(""),re=Object(i.a)(ce,2),le=re[0],ie=re[1],se=Object(n.useState)(!1),ue=Object(i.a)(se,2),me=ue[0],pe=ue[1],de=Object(s.g)(),_e=function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(d,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e?e.json():Promise.reject(e.status)}))}(e).then((function(e){e?(ee(!0),ie(e.data.email),de.push("/")):(ee(!1),de.push("/signin"))})).catch((function(e){console.error(e)}))};function fe(){c(!1),g(!1),y(!1),oe(!1),z(!1)}return document.addEventListener("keydown",(function(e){"Escape"===e.key&&(a||m||k||A)&&fe()})),Object(n.useEffect)((function(){_e()}),[de]),Object(n.useEffect)((function(){Promise.all([p.getUserInfo(),p.getInitialCards()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];G(a),Q(n)})).catch((function(e){console.log("\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b. ".concat(e))}))}),[]),o.a.createElement(_.Provider,{value:F},o.a.createElement("div",{className:"page"},o.a.createElement(N,{userMail:le,onSignOut:function(){ee(!1)}}),o.a.createElement(s.d,null,o.a.createElement(L,{path:f,exact:!0,component:C,loggedIn:Z,onEditAvatar:function(){c(!0)},onEditProfile:function(){g(!0)},onAddPlace:function(){y(!0)},onCardClick:function(e){z(!0),M(e)},cards:K,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===F._id}));p.changeLikeCardStatus(e._id,!t).then((function(t){var a=K.map((function(a){return a._id===e._id?t:a}));Q(a)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043b\u0430\u0439\u043a\u0430. ".concat(e))}))},onCardDelete:function(e){p.deleteCard(e._id).then((function(){var t=K.filter((function(t){return t._id!==e._id}));Q(t)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438. ".concat(e))}))}}),o.a.createElement(s.b,{path:h},o.a.createElement(D,{onRegister:function(e,t){(function(e,t){return fetch("".concat(d,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e?e.json():Promise.reject(e.status)}))})(e,t).then((function(t){oe(!0),t.data.email===e?(pe(!0),de.push("/signin")):pe(!1)})).catch((function(e){oe(!0),401===e?console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d"):console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}})),o.a.createElement(s.b,{path:E},o.a.createElement(T,{onLogin:function(e,t){(function(e,t){return fetch("".concat(d,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e?e.json():Promise.reject(e.status)}))})(e,t).then((function(t){t.token?(ee(!0),ie(e),localStorage.setItem("jwt",t.token),de.push("/")):t.message&&console.error(t.message)})).catch((function(e){400===e?console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e?console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d"):console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}})),o.a.createElement(s.b,{path:"*"},o.a.createElement(U,null))),o.a.createElement(O,null),o.a.createElement(w,{isOpen:a,onClose:fe,onUpdateAvatar:function(e){p.setNewAvatar(e).then((function(e){G(e),fe()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430. ".concat(e))}))},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),o.a.createElement(S,{isOpen:m,onClose:fe,onUpdateUser:function(e){p.setUserInfo(e).then((function(e){G(e),fe()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. ".concat(e))}))},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),o.a.createElement(x,{isOpen:k,onClose:fe,onAddPlace:function(e){p.postNewCard(e).then((function(e){Q([e].concat(Object(l.a)(K))),fe()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438. ".concat(e))}))},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),o.a.createElement(j,{card:B,isOpen:A,onClose:fe}),o.a.createElement(I,{isOpen:ne,onClose:fe,status:me})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v.a,null,o.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.55755144.chunk.js.map