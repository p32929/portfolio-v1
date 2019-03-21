import React from 'react';
import {Route} from 'react-router-dom'
import Home from "./Home";
import Skills from "./Skills";
import Works from "./Projects";
import Contact from "./Contact";
import {AnimatedSwitch} from 'react-router-transition';


const Routes = (props) => (
    <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper">
        <Route path='/' component={Home} exact={true}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/projects' component={Works}/>
        <Route path='/contact' component={Contact}/>
    </AnimatedSwitch>
);

export default Routes;
