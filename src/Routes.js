import React from 'react'
import { BrowserRouter, Switch, Route, HashRouter, NavLink } from "react-router-dom";

import { Home } from './features/home/screens/Home';
import { Dashboard } from './features/dashboard/screens/Dashboard';
import { Destinations } from './features/destinations/screens/Destinations';

export const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="#/about-comfy" exact component={Destinations}/>
            <Route path="/membership" exact component={Dashboard}/>
        </Switch>
    </BrowserRouter>

    // <HashRouter>
    //   <div>
    //     <h1>Simple SPA</h1>
    //     <ul className="header">
    //       <li><NavLink to="/">Home</NavLink></li>
    //       <li><NavLink to="/stuff">Stuff</NavLink></li>
    //       <li><NavLink to="/contact">Contact</NavLink></li>
    //     </ul>
    //     <div className="content">
    //       <Route path="/" component={Home}/>
    //       <Route path="/stuff" component={Destinations}/>
    //       <Route path="/contact" component={Dashboard}/>
    //     </div>
    //   </div>
    // </HashRouter>
  )
}

export default Routes;