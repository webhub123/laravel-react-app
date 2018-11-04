import React, { Component } from 'react';

import axios from 'axios';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            list : [
                { id : 1, name : 'christian', address : 'bats city', age : '22' }
            ]
        }
    }


    gen_id(list) {

        let ids = [];

        list.forEach(function(i) {

            ids.push(parseFloat(i.id));

        });

        let max_id = Math.max.apply(Math,ids);

        max_id = (max_id == '-Infinity') ? 0 : max_id;

        return  parseFloat(max_id) + 1;
    }

    add_row() {

        let list = this.state.list;
        let id = this.gen_id(list);

        const add_list = {
            id : parseFloat(id),
            name : 'christian 2',
            address : 'bats city 2',
            age : '22',
        };

    
        list.push(add_list);

        this.setState({ list : list })

    }

    remove_row(id) {

        let list = this.state.list;

        const search = list.filter(x => x.id === id );

        list.splice(list.indexOf(search[0]),1);
        
        this.setState({ list : list });
    }

    copy_row(id) {

        let list = this.state.list;
        let new_id = this.gen_id(list);

        const search = list.filter(x => x.id === id );

        list.push({
            id : new_id,
            name : search[0].name,
            address : search[0].address,
            age : search[0].age,
        })

        this.setState({ list : list });
    }

    render() { 
        
        const { list } = this.state;

        return (
            <div className="container col-sm-8 col-sm-offset-2">
                <h3>Test </h3>
                <hr/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(ls => (
                                <tr key={ls.id}>
                                    <td><input className="form-control input-sm" readonly value={ls.id} /></td>
                                    <td>{ls.name}</td>
                                    <td>{ls.address}</td>
                                    <td>{ls.age}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button className="btn btn-primary btn-sm" onClick={ () => this.copy_row(ls.id) }> Copy</button>
                                            <button className="btn btn-danger btn-sm" onClick={ () => this.remove_row(ls.id) } > Remove</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button onClick={ () => this.add_row() }  className="btn btn-primary">Add row</button>
            </div>
        );
    }
  }
  
  export default Login;