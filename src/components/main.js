import React from 'react';
// import { Switch } from 'react-mdl';
import { Switch, Route } from 'react-router-dom';
import LandlingPage from './landingpage';
import AboutMe from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandlingPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/aboutme" component={AboutMe} />
    </Switch>

)
export default Main;