import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../../Home/Home";
import Watched from "../../Watched/Watched";
import Quiz from "../../Quiz/Quiz";


const Main = props => <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/watched">
            <Watched/>
        </Route>
        <Route exact path="/quiz">
            <Quiz/>
        </Route>
    </Switch>;
export default Main;