(this.webpackJsonpsignup5_lia=this.webpackJsonpsignup5_lia||[]).push([[0],{46:function(e,t,n){e.exports=n(60)},51:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(38),r=n.n(c),l=n(24),m=n(27),o=n(16),u=n(6),d=n(18),s=(n(51),n(19)),v=n(23),E=n(25),b=n(21),p=n(20),f=n(15),g=n(13);function y(){var e=Object(f.a)(["\n    query getStoredEvent {\n        storedEvent @client {\n            id\n            title\n            host {\n                id\n                first_name\n                last_name\n            }\n            description\n            date_of_event\n            time_of_event\n            location\n            invitations {\n                id\n                guest {\n                    id\n                    first_name\n                    last_name\n                }\n                event_id\n                attendance\n            }\n        }\n    }\n"]);return y=function(){return e},e}function h(){var e=Object(f.a)(["\n    query loggedInUser {\n        loggedInUser @client {\n            id\n        }\n    }\n"]);return h=function(){return e},e}function O(){var e=Object(f.a)(["\n    query getEventById($id: Int!) {\n        getEventById(id: $id) {\n            id\n            title\n            host {\n                id\n                first_name\n                last_name\n            }\n            description\n            date_of_event\n            time_of_event\n            location\n            invitations {\n                id\n                guest {\n                    id\n                    first_name\n                    last_name\n                }\n                event {\n                    id\n                }\n                attendance\n                comment\n            }\n        }\n    }\n"]);return O=function(){return e},e}function j(){var e=Object(f.a)(["\n    query getPersonByEmail($email: String!) {\n        getPersonByEmail(email: $email) {\n            id\n        }\n    }\n"]);return j=function(){return e},e}function _(){var e=Object(f.a)(["\n    query getPersonByEmail($email: String!) {\n        getPersonByEmail(email: $email) {\n            id\n            first_name\n            last_name\n        }\n    }\n"]);return _=function(){return e},e}function N(){var e=Object(f.a)(["\n    query getUserById($id: Int!) {\n        getUserById(id: $id) {\n            email\n            first_name\n            last_name\n        }\n    }\n"]);return N=function(){return e},e}function I(){var e=Object(f.a)(["\n    query getUsers {\n        getUsers {\n            id\n            email\n            first_name\n            last_name\n        }\n    }\n"]);return I=function(){return e},e}Object(g.a)(I()),Object(g.a)(N()),Object(g.a)(_()),Object(g.a)(j());var k=Object(g.a)(O()),x=(Object(g.a)(h()),Object(g.a)(y()),function(e){var t=e.event,n=(t.id,t.host),a=n.first_name,c=n.last_name,r=t.name,l=void 0===r?"".concat(a," ").concat(c):r,m=t.title,o=t.location,u=t.time_of_event,d=t.date_of_event,s=t.description;return i.a.createElement("div",{className:"card text-center"},i.a.createElement("div",{style:{fontWeight:"bold"},className:"card-header "}," ","Event by ",l),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"card-title"},m),i.a.createElement("div",{className:"card-text"},s),i.a.createElement("div",{className:"card-text"},"Location: ",o),i.a.createElement("div",{className:"card-text"},"Date: ",d," ",i.a.createElement("br",null)," Time: ",u)))}),C={ATTENDING:"Is attending.",NOT_ATTENDING:"Can't attend.",MAYBE:"Haven't decided yet.",NO_RESPONSE:"Not responded."},T=function(e){var t=Object(a.useState)({commentVisibility:!1}),n=Object(b.a)(t,2),c=n[0],r=n[1],l=e.fname,m=e.lname,o=e.attendance,u=e.comment,d=e.inviteId,v=Object(s.h)(),E=Object(s.g)();return i.a.createElement("div",null,i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header",onClick:function(){return u?r({commentVisibility:!c.commentVisibility}):null}},i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("div",null,l," ",m),i.a.createElement("i",{className:"fas fa-check"}),i.a.createElement("div",null,C[o]),i.a.createElement("i",{onClick:function(e){e.stopPropagation(),E.push("".concat(v.pathname,"/").concat(d))},className:"fas fa-user-edit",style:{cursor:"pointer"}}))),i.a.createElement("div",null,c.commentVisibility?i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"card-text"},u)):null)))},B=function(e){var t=e.invited.map((function(e){return i.a.createElement("li",{key:e.id,className:"list-group-item list-group-item-warning"},i.a.createElement(T,{fname:e.guest.first_name,lname:e.guest.last_name,attendance:e.attendance,comment:e.comment,inviteId:e.id}))}));return i.a.createElement("ul",{className:"list-group"},t)},A=n(45);function S(){var e=Object(f.a)(["\n    mutation StoreEvent($event: Event) {\n        storeEvent(event: $event) @client\n    }\n"]);return S=function(){return e},e}function $(){var e=Object(f.a)(["\n    mutation updateInvitation($invitationUpdateInput: InvitationUpdateInput) {\n        updateInvitation(invitationUpdateInput: $invitationUpdateInput) {\n            id\n            message\n        }\n    }\n"]);return $=function(){return e},e}var w=Object(g.a)($()),U=(Object(g.a)(S()),n(58),function(e){return i.a.createElement("input",{type:"submit",key:e.key?e.key:e.id,name:e.name?e.name:e.id,id:e.id,value:e.value,className:"".concat(e.cssButton," button")})}),D=function(e){return i.a.createElement("input",{type:"button",key:e.key?e.key:e.id,name:e.name?e.name:e.id,id:e.id,value:e.value,onClick:e.onClick,className:"".concat(e.cssButton," button")})},q=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{htmlFor:e.id},e.labelText),i.a.createElement("input",{type:"radio",key:e.key?e.key:e.id,id:e.id,name:e.name?e.name:e.id,value:e.value,onChange:e.onChange,checked:e.compare===e.value}))},F=function(e){return i.a.createElement("div",{className:"".concat(e.cssContainer," container")},i.a.createElement("label",{className:"".concat(e.cssLabel," label ").concat(e.value?"active":e.isActive),htmlFor:e.id},e.labelText),i.a.createElement("input",{className:"".concat(e.cssField," field ").concat(e.isActive),key:e.key?e.key:e.id,id:e.id,name:e.name?e.name:e.id,type:e.type,value:e.value,onChange:e.onChange,onMouseOver:e.onActive,onMouseLeave:e.onActive,onFocus:e.onActive,onBlur:e.onActive}))},P=function(e){var t=e.invite,n=t.id,c=t.guest,r=(c.id,c.first_name,c.last_name,t.event.id),l=t.attendance,m=t.comment,o=Object(s.g)(),u=Object(a.useState)({attendance:l,comment:m}),d=Object(b.a)(u,2),p=d[0],f=d[1],g=function(e){e.persist(),f((function(t){return Object(E.a)({},t,Object(v.a)({},e.target.name,e.target.value))}))};return i.a.createElement(A.a,{mutation:w},(function(e,t){t.data;return i.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({variables:{invitationUpdateInput:{id:n,comment:p.comment,attendance:p.attendance}}})}},i.a.createElement(q,{id:"attending",name:"attendance",value:"ATTENDING",labelText:"Attending",onChange:g,compare:p.attendance}),i.a.createElement(q,{id:"not_attending",name:"attendance",value:"NOT_ATTENDING",labelText:"Can't Attend",onChange:g,compare:p.attendance}),i.a.createElement(q,{id:"maybe",name:"attendance",value:"MAYBE",labelText:"Maybe",onChange:g,compare:p.attendance}),i.a.createElement(F,{type:"text",id:"comment",value:p.comment,onChange:g,labelText:"Comments"}),i.a.createElement(U,{id:"submit",value:"Save"}),i.a.createElement(D,{id:"back",value:"Back",onClick:function(){return o.push("/events/".concat(r))}}))}))},L=function(){var e=null,t=null,n=Object(s.h)().pathname,c=Object(s.i)(),r=new RegExp("^/events/[0-9]+/*$"),l=new RegExp("^/events/[0-9]+/[0-9]+/*$"),m=Object(a.useState)({eventId:"",storedEvent:null}),o=Object(b.a)(m,2),u=o[0],d=o[1],f=Object(p.a)(k),g=Object(b.a)(f,2),y=g[0],h=g[1],O=h.loading,j=h.error,_=h.data;return O&&(e=i.a.createElement("p",null,"Loading...")),j&&(e=i.a.createElement("p",null,"No event with this ID.")),_?(t=_.getEventById,u.storedEvent&&t.id===u.storedEvent.id||d((function(e){return Object(E.a)({},e,{storedEvent:t})}))):u.storedEvent||O||j||(r.test(n)||l.test(n))&&y({variables:{id:n.match(/[0-9]+/)[0]}}),u.storedEvent&&(l.test(n)||(e=i.a.createElement(s.a,{to:"".concat(c.path,"/").concat(u.storedEvent.id)}))),i.a.createElement("div",null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.storedEvent&&u.storedEvent.id===u.eventId||y({variables:{id:u.eventId}})}},i.a.createElement("input",{type:"number",value:u.eventId,onChange:function(e){e.persist(),d((function(t){return Object(E.a)({},t,Object(v.a)({},e.target.name,e.target.value))}))},name:"eventId",min:"1",max:"10"}),i.a.createElement("input",{type:"submit",value:"Search"})),i.a.createElement("div",null,e),i.a.createElement(s.d,null,i.a.createElement(s.b,{path:"".concat(c.path,"/:eventId")},u.storedEvent?i.a.createElement(M,{event:u.storedEvent}):null),i.a.createElement(s.b,{path:c.path},O?null:i.a.createElement("h3",null,"Please enter an Event ID (1-3)"))))},M=function(e){var t=Object(s.i)(),n=Object(s.h)().pathname,a=new RegExp("events/[0-9]+/[0-9]+");return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{event:e.event}),i.a.createElement(s.d,null,i.a.createElement(s.b,{path:"".concat(t.path,"/:inviteId")},a.test(n)?i.a.createElement(P,{invite:e.event.invitations.find((function(e){return e.id===n.slice(n.lastIndexOf("/")+1)}))}):i.a.createElement("div",null,"Loading")),i.a.createElement(s.b,{path:t.path},i.a.createElement(B,{invited:e.event.invitations}))))},G=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.b,{to:"/events"},i.a.createElement("h1",null,"Events")))},R=function(){return i.a.createElement(s.d,null,i.a.createElement(s.b,{path:"/events"},i.a.createElement(L,null)),i.a.createElement(s.b,{path:"/"},i.a.createElement(G,null)))},V=new l.a({addTypename:!1}),J=new m.a({uri:"https://signup5lia.herokuapp.com/graphql/"}),Y=new o.a({cache:V,link:J});V.writeData({data:{storedEvent:null}}),r.a.render(i.a.createElement(u.a,{client:Y},i.a.createElement(d.a,null,i.a.createElement(R,null))),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.735b5e86.chunk.js.map
