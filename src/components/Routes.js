import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import Skills from "./Skills";
import Works from "./Projects";
import Contact from "./Contact";
import NotFound from "./NotFound";

const Routes = (props) => (
    <Switch>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/projects' component={Works}/>
        <Route path='/contact' component={Contact}/>
        <Route component={NotFound}/>
    </Switch>
)

export default Routes;
