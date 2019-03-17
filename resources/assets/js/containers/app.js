import React, { Component } from 'react';

import User from '../components/user';
import Main from '../components/main';
import { connect } from 'react-redux';
import { setName } from '../actions/userActions';

class App extends Component {

    constructor() {
        super();
    }

    render() { 

        return (
            <div className="container col-sm-8 col-sm-offset-2">
                <Main change_name={ () => this.props.setName('asds') } />
                <User user={this.props.user.name}  /> 
                
            </div>
        );
    }
}
  
const mapStateToProps = (state) => {
    return {
        user : state.userReducer,
        math : state.mathReducer,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName : (name) => {
            dispatch(setName(name))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
