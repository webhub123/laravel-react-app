import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Route_controller from './router/router';
import Header from './includes/header';
import Admin from './includes/admin/header';
import Footer from './includes/footer';

export default class Welcome extends Component {


    constructor() {
        super();

        this.state = {
            session_status : localStorage.getItem('id')
        };
    }

    render() {

        let nav;
        const { session_status } = this.state;

        if(session_status !== null) {
            nav = (
                <Admin />
            );
        }else {
            nav = (
                <Header />
            );
        }

        return (
            <React.Fragment>
                { nav }
                    <Route_controller />
                <Footer />
            </React.Fragment>
        );
    }
} 

if (document.getElementById('root')) {
    ReactDOM.render(<Welcome />, document.getElementById('root'));
}
