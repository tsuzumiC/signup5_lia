(this.webpackJsonpsignup5_lia=this.webpackJsonpsignup5_lia||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"users":[{"name":"Anna","name-long":"Anna Bj\xf6rn","id":1,"email":"anna.bjorn@gmail.com","password":"4nn4b34r"},{"name":"Per","name-long":"Per Eriksson","id":2,"email":"per@erikssonsab.se","password":"notSafe"},{"id":3,"email":"a@b.c","password":"abc"}]}')},19:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(7),i=n.n(o),r=n(1),c=n(2),l=n(15),u=n(3),m=n(4),d=n(5),g=n(6),p=(n(30),n(31),function(e){return s.a.createElement("div",{className:"top-bar"},e.children)}),v=function(e){Object(g.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return s.a.createElement("div",null,"Menu")}}]),n}(a.Component),h=(n(32),n(33),function(e){return s.a.createElement("input",{type:"submit",value:e.value,className:"".concat(e.cssButton," button")})}),f=function(e){return s.a.createElement("input",{type:"button",value:e.value,onClick:e.onClick,className:"".concat(e.cssButton," button")})},b=function(e){return s.a.createElement("div",{className:"".concat(e.cssContainer," container")},s.a.createElement("label",{className:"".concat(e.cssLabel," label ").concat(e.value?"active":e.isActive),htmlFor:e.name},e.labelText),s.a.createElement("input",{className:"".concat(e.cssField," field ").concat(e.isActive),name:e.name,type:e.type,value:e.value,onChange:e.onChange,onMouseOver:e.onActive,onMouseLeave:e.onActive,onFocus:e.onActive,onBlur:e.onActive}))};b.defaultProps={type:"text",name:"field"};var O=n(12),w=n.n(O),E=n(16),y=n(17),L=function(){return{type:"LOG_OUT"}},C=Object(r.b)((function(e){return{loggedInUser:e.loggedInUser}}),{logOut:L})((function(e){return e.loggedInUser.id>0?s.a.createElement(f,{onClick:function(){return e.logOut()},value:"Log out",cssButton:"login"}):s.a.createElement("div",{className:"show-login"},s.a.createElement(f,{onClick:function(){return e.signUp()},value:"Sign Up",cssButton:"signup left"}),s.a.createElement(f,{onClick:function(){return e.showLogin()},value:"Login",cssButton:"login right"}))})),j=n(18),I=n(8),S=(n(35),function(e){Object(g.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",message:"",active:{email:"",password:""}},e.handleSubmit=function(t){t.preventDefault(),e.state.email?e.state.password?(e.setState({message:""}),e.props.tryLogin(e.state.email,e.state.password)):e.setState({message:"Password is required."}):e.setState({message:"E-mail is required."})},e.handleChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value)),0===e.props.loggedInUser.id&&(e.props.logOut(),e.setState({message:""}))},e.handleCancle=function(){e.props.loginCancel()},e.handleActive=function(t){var n=Object(j.a)({},e.state.active);"mouseover"===t.type||"focus"===t.type?(n[t.target.name]="active",e.setState({active:n})):("mouseleave"===t.type&&document.activeElement.id!==t.target.name||"blur"===t.type)&&(n[t.target.name]="",e.setState({active:n}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=0===this.props.loggedInUser.id&&this.props.loggedInUser.name;return s.a.createElement("div",{className:"login-box"},s.a.createElement("form",{className:"form-container",onSubmit:this.handleSubmit},s.a.createElement(b,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,labelText:"E-mail",cssClass:"login-field",onActive:this.handleActive,isActive:this.state.active.email}),s.a.createElement(b,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,labelText:"Password",cssField:"login-field",onActive:this.handleActive,isActive:this.state.active.password}),s.a.createElement("div",{className:"warning"},e||this.state.message),s.a.createElement("div",{className:"buttons"},s.a.createElement(f,{value:"Cancel",onClick:this.handleCancle,name:"cancel",cssButton:"cancel"}),s.a.createElement(h,{value:"Login",name:"login",cssButton:"login"}))))}}]),n}(a.Component)),U=Object(r.b)((function(e){return{loggedInUser:e.loggedInUser}}),{tryLogin:function(e,t){return function(){var n=Object(E.a)(w.a.mark((function n(a){var s,o;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.users;case 2:s=n.sent,o=s.find((function(n){return n.email===e&&n.password===t})),a(o?{type:"TRY_LOGIN",payload:o}:{type:"INVALID_LOGIN"});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logOut:L})(S),N=(n(36),function(e){return s.a.createElement("div",{className:"background"},s.a.createElement("div",{className:e.childDisplay},e.children))});N.defaultProps={childDisplay:""};var A=N,k=function(e){Object(g.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={showLogin:!1},e.componentDidUpdate=function(){e.props.loggedInUser.id>0&&e.state.showLogin&&e.setState({showLogin:!1})},e.handleShowLogin=function(){null===e.props.loggedInUser.id&&e.setState({showLogin:!0})},e.handleSignUp=function(){alert("Sign Up!")},e.handleLoginCancel=function(){e.setState({showLogin:!1})},e}return Object(m.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"app-body"},this.state.showLogin&&s.a.createElement(A,null,s.a.createElement(U,{loginCancel:this.handleLoginCancel})),s.a.createElement(p,null,s.a.createElement(v,null),s.a.createElement(C,{showLogin:this.handleShowLogin,signUp:this.handleSignUp})))}}]),n}(a.Component),x=Object(r.b)((function(e){return{loggedInUser:e.loggedInUser}}))(k),B=Object(c.c)({loggedInUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRY_LOGIN":return t.payload;case"LOG_OUT":return{id:null};case"INVALID_LOGIN":return{id:0,name:"Invalid user or password."};default:return e}}});i.a.render(s.a.createElement(r.a,{store:Object(c.d)(B,Object(c.a)(l.a))},s.a.createElement(x,null)),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f3fca31d.chunk.js.map