import React, { Component } from 'react';

import Home from '../home/home';
import Error_page from '../error_page/error_page';

import Register from '../home/register';
import Login from '../home/login';
import Logout from '../home/logout';

import Add_new from '../maintenance/info_add';
import Query from '../maintenance/info_list';
import Edit from '../maintenance/info_edit';


import test_page from '../test_page/test_page';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const routes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/logout" component={ Logout } />

                <Route exact path="/add_new" component={ Add_new } />
                <Route exact path="/query" component={ Query } />
                <Route exact path="/edit/:id" component={ Edit } />

                <Route exact path="/test_page" component={ test_page } />


                <Route component={ Error_page } />
            </Switch>
        </Router>
    );
}
 
export default routes;
