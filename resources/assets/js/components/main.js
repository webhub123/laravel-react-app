import React from 'react';

const Main = (props) => {

    return (
        <div className="container col-sm-8 col-sm-offset-2">
            <button className="btn btn-primary" onClick={ () => props.change_name() }> Boom</button>
        </div>
    );
    
}

export default Main;
