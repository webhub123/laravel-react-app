import React, { Component } from 'react';

import Home from '../home/home';
import Error_page from '../error_page/error_page';

import Register from '../home/register';
import Login from '../home/login';
import Logout from '../home/logout';

import Add_new from '../maintenance/info_add';
import Query from '../maintenance/info_list';
import Edit from '../maintenance/info_edit';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

//////////////////////

import { Provider } from 'react-redux';
import ReactRedux from '../../containers/app';
import store from '../../store'; 

//////////////////////

const routes = () => {
    return (
        <Router>
            <Switch>
                <Provider store={store}>
                    <Route exact path="/test" component={ ReactRedux } />
                </Provider>

                <Route exact path="/" component={ Home } />
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/logout" component={ Logout } />

                <Route exact path="/add_new" component={ Add_new } />
                <Route exact path="/query" component={ Query } />
                <Route exact path="/edit/:id" component={ Edit } />

                <Route component={ Error_page } />
            </Switch>
        </Router>
    );
}
 
export default routes;
