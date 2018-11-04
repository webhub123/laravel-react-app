import React, { Component } from 'react';


class Home extends Component {

  
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
        <div className="jumbotron text-center">
            <h2>Admin Page</h2>
            <p>Bootstrap 3</p> 
        </div>
        );
    }else {
      nav = (
        <div className="jumbotron text-center">
            <h2>Public Page</h2>
            <p>Bootstrap 3</p> 
        </div>
        );
    }

    return(
      <div>
        { nav }
      </div>
    );
      

  }
}



  
  export default Home;