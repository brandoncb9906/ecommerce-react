import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { MainScreen } from '../components/e-commerce/MainScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <MainScreen />
                </Route>
                <Redirect to='/home'/>
            </Switch>
        </Router>
    )
}
