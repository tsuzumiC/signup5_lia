(this.webpackJsonpsignup5_lia=this.webpackJsonpsignup5_lia||[]).push([[0],{47:function(e,t,n){e.exports=n(61)},54:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(39),i=n.n(c),r=n(25),m=n(27),o=n(17),s=n(6),u=n(16),d=n(14),v=n(12);function E(){var e=Object(d.a)(["\n    extend type Mutation {\n        storeEvent(event: Event!): Event!\n    }\n"]);return E=function(){return e},e}var f=Object(v.a)(E()),p=(n(54),n(23)),g=n(22),b=n(20),y=n(18),h=n(21);function N(){var e=Object(d.a)(["\n    query getCachedEvents {\n        events @client {\n            id\n            title\n            host {\n                id\n                first_name\n                last_name\n            }\n            description\n            date_of_event\n            start_time_of_event\n            end_time_of_event\n            location\n            invitations {\n                id\n                guest {\n                    id\n                    first_name\n                    last_name\n                }\n                event {\n                    id\n                }\n                attendance\n                comment\n            }\n        }\n    }\n"]);return N=function(){return e},e}function x(){var e=Object(d.a)(["\n    query loggedInUser {\n        loggedInUser @client {\n            id\n        }\n    }\n"]);return x=function(){return e},e}function _(){var e=Object(d.a)(["\n    query getEventById($id: Int!) {\n        getEventById(id: $id) {\n            id\n            title\n            host {\n                id\n                first_name\n                last_name\n            }\n            description\n            date_of_event\n            start_time_of_event\n            end_time_of_event\n            location\n            invitations {\n                id\n                guest {\n                    id\n                    first_name\n                    last_name\n                }\n                event {\n                    id\n                }\n                attendance\n                comment\n            }\n        }\n    }\n"]);return _=function(){return e},e}function j(){var e=Object(d.a)(["\n    query getUserById($id: Int!) {\n        getUserById(id: $id) {\n            email\n            first_name\n            last_name\n        }\n    }\n"]);return j=function(){return e},e}function O(){var e=Object(d.a)(["\n    query getUsers {\n        getUsers {\n            id\n            email\n            first_name\n            last_name\n        }\n    }\n"]);return O=function(){return e},e}Object(v.a)(O()),Object(v.a)(j());var C=Object(v.a)(_()),T=(Object(v.a)(x()),Object(v.a)(N())),k=n(44),w=n.n(k),I=function(e){var t=e.event,n=t.host,a=n.first_name,c=n.last_name,i=t.name,r=void 0===i?"".concat(a," ").concat(c):i,m=t.title,o=t.location,s=t.time_of_event,u=t.date_of_event,d=t.description;return l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{style:{fontWeight:"bold"},className:"card-header "}," ","Event by ",r),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"card-title"},m),l.a.createElement("div",{className:"card-text"},d),l.a.createElement("div",{className:"card-text"},"Location: ",o),l.a.createElement("div",{className:"card-text"},"Date: ",u," ",l.a.createElement("br",null)," Time: ",s)))},S=function(e){return{ATTENDING:function(){return l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("i",{style:{marginTop:"5px"},className:"fas fa-check"})," ",l.a.createElement("p",{style:{marginLeft:"60px"}}," Attending"))},NOT_ATTENDING:function(){return l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("i",{style:{marginTop:"5px"},className:"fas fa-times-circle"}),l.a.createElement("p",{style:{marginLeft:"60px"}},"Not Attending "))},MAYBE:function(){return l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("i",{style:{marginTop:"5px"},className:"fas fa-question-circle"}),l.a.createElement("p",{style:{marginLeft:"60px"}},"Maybe"))},NO_RESPONSE:function(){return l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("i",{style:{marginTop:"5px"},className:"fas fa-sync"}),l.a.createElement("p",{style:{marginLeft:"60px"}},"Not respondend"))}}[e.decision]()},A={ATTENDING:"Is attending.",NOT_ATTENDING:"Can't attend.",MAYBE:"Haven't decided yet.",NO_RESPONSE:"Not responded."},F=function(e){var t=Object(a.useState)({commentVisibility:!1}),n=Object(y.a)(t,2),c=n[0],i=n[1],r=e.fname,m=e.lname,o=e.attendance,s=e.comment,u=e.inviteId,d=Object(p.g)(),v=Object(p.f)();return l.a.createElement("div",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header",onClick:function(){return s?i({commentVisibility:!c.commentVisibility}):null}},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",null,r," ",m),l.a.createElement(S,{decision:A[o]}),l.a.createElement("i",{onClick:function(e){e.stopPropagation(),v.push("".concat(d.pathname,"/").concat(u))},className:"fas fa-user-edit",style:{cursor:"pointer"}}))),l.a.createElement("div",null,c.commentVisibility?l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"card-text"},s)):null)))},D=function(e){var t=e.invited.map((function(e){return l.a.createElement("li",{key:e.id,className:"list-group-item list-group-item-warning"},l.a.createElement(F,{fname:e.guest.first_name,lname:e.guest.last_name,attendance:e.attendance,comment:e.comment,inviteId:e.id}))}));return l.a.createElement("ul",{className:"list-group"},t)},B=n(30);function G(){var e=Object(d.a)(["\n    mutation StoreEvent($event: Event) {\n        storeEvent(event: $event) @client\n    }\n"]);return G=function(){return e},e}function W(){var e=Object(d.a)(["\n    mutation createEvent($event: CreateEventInput) {\n        createEvent(event: $event) {\n            id\n            message\n        }\n    }\n"]);return W=function(){return e},e}function q(){var e=Object(d.a)(["\n    mutation updateInvitation($invitation: UpdateInvitationInput) {\n        updateInvitation(invitation: $invitation) {\n            id\n            message\n        }\n    }\n"]);return q=function(){return e},e}var L=Object(v.a)(q()),$=Object(v.a)(W()),M=(Object(v.a)(G()),n(60),function(e){return l.a.createElement("input",{type:"submit",key:e.key?e.key:e.id,name:e.name?e.name:e.id,id:e.id,value:e.value,className:"".concat(e.cssButton," button")})}),R=function(e){return l.a.createElement("input",{type:"button",key:e.key?e.key:e.id,name:e.name?e.name:e.id,id:e.id,value:e.value,onClick:e.onClick,className:"".concat(e.cssButton," button")})},V=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:e.id},e.labelText),l.a.createElement("input",{type:"radio",key:e.key?e.key:e.id,id:e.id,name:e.name?e.name:e.id,value:e.value,onChange:e.onChange,checked:e.compare===e.value}))},U=function(e){return l.a.createElement("div",{className:"".concat(e.cssContainer," container")},l.a.createElement("label",{className:"".concat(e.cssLabel," label ").concat(e.value?"active":e.isActive),htmlFor:e.id},e.labelText),l.a.createElement("input",{className:"".concat(e.cssField," field ").concat(e.isActive),key:e.key?e.key:e.id,id:e.id,name:e.name?e.name:e.id,type:e.type,value:e.value,onChange:e.onChange,onMouseOver:e.onActive,onMouseLeave:e.onActive,onFocus:e.onActive,onBlur:e.onActive}))},H=function(e){var t=Object(p.f)(),n=e.invite,c=n.id,i=n.guest,r=i.first_name,m=i.last_name,o=n.event.id,s=n.attendance,u=n.comment,d=Object(a.useState)({attendance:s,comment:u}),v=Object(y.a)(d,2),E=v[0],f=v[1],h=function(e){e.persist(),f((function(t){return Object(b.a)({},t,Object(g.a)({},e.target.name,e.target.value))}))};return l.a.createElement(B.a,{mutation:L,update:function(e,t){t.data.updateInvitation;var n=e.readQuery({query:T}).events,a=n.find((function(e){return e.id===o})),l=a.invitations.find((function(e){return e.id===c}));l.attendance=E.attendance,l.comment=E.comment,a.invitations=a.invitations.concat(l),e.writeQuery({query:T,data:{events:n.concat(a)}})}},(function(e,n){n.loading,n.error;return l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"card bg-warning "},l.a.createElement("div",{style:{color:"black"},className:"card-header "},l.a.createElement("div",{className:"d-flex  justify-content-center"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({variables:{invitation:{id:c,comment:E.comment,attendance:E.attendance}}})}},l.a.createElement("div",{className:"d-flex flex-column text-center"},"".concat(r," ").concat(m),l.a.createElement("div",{className:"card-title mt-5"},"Are you attending this event ?"),l.a.createElement("div",{className:"d-flex  justify-content-around"},l.a.createElement("div",{className:"d-flex  flex-column"},l.a.createElement(V,{id:"attending",name:"attendance",value:"ATTENDING",labelText:"Attending",onChange:h,compare:E.attendance})),l.a.createElement("div",{className:"d-flex  flex-column"},l.a.createElement(V,{id:"not_attending",name:"attendance",value:"NOT_ATTENDING",labelText:"Can't Attend",onChange:h,compare:E.attendance})),l.a.createElement("div",{className:"d-flex  flex-column"},l.a.createElement(V,{id:"maybe",name:"attendance",value:"MAYBE",labelText:"Maybe",onChange:h,compare:E.attendance})))),l.a.createElement("div",{className:"card-body"},l.a.createElement(U,{type:"text",id:"comment",value:E.comment?E.comment:"",onChange:h,labelText:"Comments"}),l.a.createElement(M,{id:"submit",value:"Save"}),l.a.createElement(R,{id:"back",value:"Back",onClick:function(){t.push("/events/".concat(o))}})))))))}))},P=function(){var e=Object(p.h)(),t=Object(p.g)().pathname,n=Object(h.a)(),c=new RegExp("".concat(e.url,"/*[0-9]+/*")),i=new RegExp("".concat(e.url)),r=new RegExp("/[0-9]+/*","g"),m=t.match(r)[0].replace(/\//g,""),o=t.replace(i,"").replace(/\//g,""),s=Object(a.useState)(null),u=Object(y.a)(s,2),d=u[0],v=u[1],E=Object(h.d)(T).data.events,f=Object(h.b)(C),g=Object(y.a)(f,2),b=g[0],N=g[1],x=N.data,_=N.loading,j=N.error,O=null,k=null;if(_)return null!==d&&v(null),l.a.createElement("p",null,"Loading event ".concat(m));if(x&&x.getEventById.id===m)null!==d&&v(null),O=x.getEventById,E.find((function(e){return w.a.isEqual(e,O)}))||n.writeData({data:{events:E.length>0?E.concat(O):[O]}});else if(E.find((function(e){return e.id===m})))null!==d&&v(null),O=E.find((function(e){return e.id===m}));else{if(j&&(m===d||null===d))return null===d&&v(m),l.a.createElement("pre",null,"Error loading event ".concat(m," with response:\n    ").concat(j));null!==d&&v(null),b({variables:{id:m}})}return c.test(t)&&O&&(k=O.invitations.find((function(e){return e.id===o}))),null===O?l.a.createElement("p",null,"Loading event ".concat(m)):l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{event:O}),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"".concat(e.path,"/:inviteId")},k?l.a.createElement(H,{invite:k}):l.a.createElement("p",null,"Invalid invite ID")),l.a.createElement(p.a,{path:e.path},l.a.createElement(D,{invited:O.invitations}))))},Y=function(){var e=Object(p.h)(),t=Object(p.g)().pathname,n=Object(p.f)(),c=new RegExp("".concat(e.url,"/[0-9]+/*")),i=new RegExp("/[0-9]+/*","g"),r=Object(a.useState)({inputValue:c.test(t)?t.match(i)[0].replace(/\//g,""):""}),m=Object(y.a)(r,2),o=m[0],s=m[1];return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.push("/events/".concat(o.inputValue))}},l.a.createElement("input",{type:"number",value:o.inputValue,onChange:function(e){e.persist(),s((function(t){return Object(b.a)({},t,Object(g.a)({},e.target.name,e.target.value))}))},name:"inputValue"}),l.a.createElement("input",{type:"submit",value:"Search"})),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"".concat(e.path,"/:eventId")},l.a.createElement(P,null)),l.a.createElement(p.a,{path:e.path},"Search for an Event")))},z=function(){var e=Object(a.useState)({addGuestForm:!1,title:"",location:"",date:"",startTime:"",endTime:"",description:"",guests:[],gName:"",gSurname:"",gEmail:""}),t=Object(y.a)(e,2),n=t[0],c=t[1],i=n.addGuestForm,r=n.title,m=n.location,o=n.date,s=n.startTime,u=n.endTime,d=n.description,v=n.guests,E=n.gName,f=n.gSurname,h=n.gEmail,N=Object(p.f)(),x=function(e){e.persist(),c((function(t){return Object(b.a)({},t,Object(g.a)({},e.target.name,e.target.value))}))};return l.a.createElement("div",{style:{backgroundColor:"#ECD275"},className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{style:{fontSize:24,padding:"0 5px"},className:"d-inline ml-3"},"Create New Event")),l.a.createElement(B.a,{mutation:$,onCompleted:function(e){var t=e.id;N.push("/events/".concat(t))}},(function(e,t){var n=t.loading,a=t.error;return l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("div",null,l.a.createElement("label",{className:"mr-2",style:{fontWeight:"bold"},htmlFor:"title"},"Event Name :"),l.a.createElement("input",{value:r,onChange:x,name:"title",id:"title",type:"text"})),l.a.createElement("div",null,l.a.createElement("label",{className:"mr-4",style:{fontWeight:"bold"},htmlFor:"location"},"Location :"),l.a.createElement("input",{value:m,onChange:x,name:"location",id:"location",type:"text"})),l.a.createElement("div",null,l.a.createElement("label",{className:"mr-5",style:{fontWeight:"bold"},htmlFor:"date"},"Date:"),l.a.createElement("input",{value:o,onChange:x,name:"date",id:"date",type:"date"}),l.a.createElement("label",{className:"ml-1",style:{fontWeight:"bold"},htmlFor:"startTime"},"Start Time:"),l.a.createElement("input",{value:s,onChange:x,name:"startTime",id:"startTime",type:"time"}),l.a.createElement("label",{className:"ml-1",style:{fontWeight:"bold"},htmlFor:"endTime"},"End Time:"),l.a.createElement("input",{value:u,onChange:x,name:"endTime",id:"endTime",type:"time"}))),l.a.createElement("div",null,l.a.createElement("p",{className:"ml-3"},"Description : "),l.a.createElement("textarea",{value:d,onChange:x,name:"description",id:"description",cols:"50",rows:"10"})),l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,v.length>0?l.a.createElement("div",null,l.a.createElement("div",{style:{color:"grey"}},"Name\u2003\u2003\u2003\u2003Surname\u2003\u2003\u2003\u2003Email"," ",l.a.createElement("br",null)),l.a.createElement("ul",{className:"list-group"},v.map((function(e){return l.a.createElement("li",{key:e.id,className:"list-group-item list-group-item-warning"},l.a.createElement("div",null,l.a.createElement("div",{style:{color:"#000",fontWeight:"bold"}},e.first_name,"\u2003\u2003\u2003\u2003",e.last_name,"\u2003\u2003\u2003\u2003",e.email," ","\u2003\u2003\u2003\u2003",l.a.createElement("i",{onClick:function(){c((function(t){return Object(b.a)({},t,{guests:v.filter((function(t){return t.id!==e.id}))})}))},style:{cursor:"pointer"},className:"fas fa-trash-alt"}))))})))):null),l.a.createElement("button",{onClick:function(){c((function(e){return Object(b.a)({},e,{addGuestForm:!i})}))},type:"button",className:"btn btn-warning mt-2 mb-2"}," ",l.a.createElement("i",{style:{marginRight:"10px"},className:"fas fa-plus"})," ","Invitation"),l.a.createElement("div",null,i?l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==E&&""!==f&&""!==h&&c((function(e){return Object(b.a)({},e,{addGuestForm:!i,gEmail:"",gName:"",gSurname:"",guests:v.concat({first_name:E,last_name:f,email:h})})})),console.log(v)},className:"d-inline-flex flex-column border border-info mb-5"},l.a.createElement("div",null,l.a.createElement("label",{className:"mr-2",style:{fontWeight:"bold"},htmlFor:"gName"}," ","Guest Name :"),l.a.createElement("input",{value:E,onChange:x,name:"gName",id:"gName",type:"text"})),l.a.createElement("div",null,l.a.createElement("label",{className:"mr-4",style:{fontWeight:"bold"},htmlFor:"gSurname"},"Guest Surname :"),l.a.createElement("input",{value:f,onChange:x,name:"gSurname",id:"gSurname",type:"text"})),l.a.createElement("div",null,l.a.createElement("label",{className:"mr-4",style:{fontWeight:"bold"},htmlFor:"gEmail"},"Guest Email :"),l.a.createElement("input",{value:h,onChange:x,name:"gEmail",id:"gEmail",type:"email"})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:"btn btn-success mb-3"},"Add Invitation"))):null)),l.a.createElement("div",{className:"d-inline-flex"},l.a.createElement("button",{onClick:function(){N.push("/")},type:"button",className:"btn btn-light mr-2"},"Cancel"),l.a.createElement("button",{onClick:function(t){!function(e,t){""!==r&&""!==m&&""!==o&&""!==s&&""!==u&&""!==d&&v.length>0?e({variables:{event:{host:{id:1},title:r,description:d,date_of_event:o,start_time_of_event:s,end_time_of_event:u,location:m,invitations:v.map((function(e){return{guest:e}}))}}}):alert("missing field pls fill everywhere")}(e)},type:"button",className:"btn btn-primary",disabled:n},"Create"),a))})))},J=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{width:"300px"}},l.a.createElement("ul",{style:{height:"40px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",listStyle:"none",padding:0,fontSize:"24px"}},l.a.createElement("li",null,l.a.createElement(u.b,{exact:!0,to:"/",activeStyle:{fontWeight:"bold",color:"red"}},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/events",activeStyle:{fontWeight:"bold",color:"red"}},"Events")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/new-event",activeStyle:{fontWeight:"bold",color:"red"}},"New Event")))),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/"},l.a.createElement("div",null,"Home")),l.a.createElement(p.a,{path:"/events"},l.a.createElement(Y,null)),l.a.createElement(p.a,{path:"/new-event"},l.a.createElement(z,null))))},Q=new r.a,K=new m.a({uri:"https://signup5liadev.herokuapp.com/graphql/"}),X=new o.a({cache:Q,link:K,resolvers:{Mutation:{storeEvent:function(e,t,n){n.cache.writeData({storedEvent:t.event})}}},typeDefs:f});Q.writeData({data:{events:[]}}),i.a.render(l.a.createElement(s.a,{client:X},l.a.createElement(u.a,{basename:"/signup5_lia"},l.a.createElement(J,null))),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d0ebae58.chunk.js.map