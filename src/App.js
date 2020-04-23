import "./Components/Style/App.css";

import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Events } from "./routes";

// const response = {
//     ATTENDING: " is attending.",
//     NOT_ATTENDING: " is not attending.",
//     MAYBE: " isn't sure yet.",
//     NO_RESPONSE: " haven't responded yet.",
// };

const App = () => {
    return (
        <Switch>
            <Route path={`/events`}>
                <Events />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default App;

//     <>
//     <h1>{data.getEventById.title}</h1>
//     <div>{data.getEventById.description}</div>
//     <div>{data.getEventById.time_of_event}</div>
//     <div>{data.getEventById.date_of_event}</div>
//     <ul>
//         {data.getEventById.invitations.map((invitation) => {
//             return (
//                 <li>
//                     <>{`Guest with ID ${invitation.guest.id} ${
//                         response[invitation.attendance]
//                     }`}</>
//                 </li>
//             );
//         })}
//     </ul>
// </>;
