import React from 'react';

const User = (props) => {

    return (
        <div className="container col-sm-8 col-sm-offset-2">
            { props.user }
        </div>
    );
    
}
  
export default User;