(this.webpackJsonpsignup5_lia=this.webpackJsonpsignup5_lia||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),l=a.n(s),o=a(2),c=a(3),r=a(1),u=a(5),m=a(6),h=(a(16),a(7)),d=a(10),g=a(4),v=(a(18),a(19),function(e){return i.a.createElement("div",{className:"input-container"},i.a.createElement("label",{className:"input-lable ".concat(e.value?"active":e.isActive),htmlFor:e.name},e.lableText),i.a.createElement("input",{className:"".concat(e.cssClass," ").concat(e.isActive),type:e.type,value:e.value,name:e.name,id:e.name,onChange:e.onChange,onClick:e.onClick,onMouseOver:e.onActive,onMouseLeave:e.onActive,onFocus:e.onActive,onBlur:e.onActive}))});v.defaultProps={type:"text",name:"input"};var p=v,b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",active:{email:"",password:""}},n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleCancle=n.handleCancle.bind(Object(r.a)(n)),n.handleActive=n.handleActive.bind(Object(r.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.loginSubmit(this.state.email,this.state.password)}},{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleCancle",value:function(){this.props.loginCancel()}},{key:"handleActive",value:function(e){var t=Object(d.a)({},this.state.active);"mouseover"===e.type||"focus"===e.type?(t[e.target.name]="active",this.setState({active:t})):("mouseleave"===e.type&&document.activeElement.id!==e.target.name||"blur"===e.type)&&(t[e.target.name]="",this.setState({active:t}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"login-box"},i.a.createElement("form",{className:"form-container",onSubmit:this.handleSubmit},i.a.createElement(p,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,lableText:"E-mail",cssClass:"login-field",onActive:this.handleActive,isActive:this.state.active.email}),i.a.createElement(p,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,lableText:"Password",cssClass:"login-field",onActive:this.handleActive,isActive:this.state.active.password}),i.a.createElement("div",{className:"warning"},this.props.loginResult),i.a.createElement("div",{className:"buttons"},i.a.createElement(p,{type:"button",value:"Cancel",onClick:this.handleCancle,name:"cancel",cssClass:"cancel-button"}),i.a.createElement(p,{type:"submit",value:"Login",name:"login",cssClass:"login-button"}))))}}]),a}(n.Component),f=(a(20),function(e){return i.a.createElement("div",{className:"background"},i.a.createElement("div",{className:e.childDisplay},e.children))});f.defaultProps={childDisplay:""};var y=f,C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loggedUser:null,loginResult:null,users:[{name:"Erik",id:"0001",email:"erik@eriksson.se",password:"1234"},{name:"Anna",id:"0002",email:"anna@hotmail.com",password:"ab23"}],showLogin:!1},n.checkLogin=n.checkLogin.bind(Object(r.a)(n)),n.signUp=n.signUp.bind(Object(r.a)(n)),n.startLogin=n.startLogin.bind(Object(r.a)(n)),n.closeLogin=n.closeLogin.bind(Object(r.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"checkLogin",value:function(e,t){var a=null;e?t?(this.state.users.forEach((function(n){n.email===e&&n.password===t&&(a=n)})),a?(this.setState({loggedUser:a,loginResult:null,showLogin:!1}),h.a.off(),alert("Logged in as ".concat(a.name))):this.setState({loginResult:"Wrong email or password."})):this.setState({loginResult:"Password is required."}):this.setState({loginResult:"E-mail is required."})}},{key:"signUp",value:function(){console.log("Test!")}},{key:"startLogin",value:function(){this.setState({showLogin:!0,loginResult:""}),h.a.on()}},{key:"closeLogin",value:function(){this.setState({showLogin:!1,loginResult:""}),h.a.off()}},{key:"render",value:function(){var e;!0===this.state.showLogin&&(e=i.a.createElement(y,null,i.a.createElement(b,{loginSubmit:this.checkLogin,loginResult:this.state.loginResult,loginCancel:this.closeLogin})));var t="Existing accounts to try: \n"+this.state.users.map((function(e){return"E-mail: "+e.email+"\nPassword: "+e.password+"\n"}));return i.a.createElement("div",{className:"app-body"},e,i.a.createElement("div",{className:"top-bar"},i.a.createElement(p,{type:"button",value:"Sign up",name:"signup",onClick:this.signUp,cssClass:"signup-button"}),i.a.createElement(p,{type:"button",value:"Login",name:"login",onClick:this.startLogin,cssClass:"login-button"})),i.a.createElement("div",{style:{whiteSpace:"pre-line",color:"#fff",position:"relative",top:"50px"}},t))}}]),a}(n.Component);l.a.render(i.a.createElement(C,null),document.querySelector("#root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.5c093cfd.chunk.js.map