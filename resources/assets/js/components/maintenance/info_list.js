import React, { Component } from 'react';
import axios from 'axios';

import Autosuggest from 'react-autosuggest';
import ReactPaginate from 'react-paginate';

class info_list extends Component {


    constructor() {
        super();

        this.state = {
            list : [],
            value : '',
            suggestions : [],
            limit : 5,
            offset : 0,
            total_rows : 0,
        };

        // this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    }

    componentDidMount() {
        
        document.title = 'Query List';

        this.index(this.state.limit,this.state.offset,'');
    }


    index (limit,offset,search) {

        const data = { limit : limit, offset : offset, search : search }
    
        axios.post('api/query/',data) 
        .then(res => {
          this.setState({ list : res.data, total_rows : res.data[0].total_page });
        })
        .catch(err => err)
    
    }


    delete_user (id) {

        axios.delete('/api/delete/'+id)
            .then( (res) =>  {
            alert('Successfully Deleted.');
            window.location.reload();
        })
        .catch( (error) => {
            console.log(error);
        });
    }


    search_info(e,search) {

        if(e.key === 'Enter' || ( search.length <= 1 && e.keyCode == 8) ){

            const { limit, offset } = this.state;

            this.index(limit, offset, search);
        }

    }

    //autocomplete

    getSuggestionValue(suggestion) {
        return suggestion.name;
    }


    renderSuggestion (suggestion) {
        
        return (<div>
            {suggestion.name}
        </div>);
    };
  
  
    onChange(event, { newValue }) {
        this.setState({value : newValue});
    };
  
    onSuggestionsFetchRequested ({ value }) {
        
        axios.get('api/get_ac_list/'+value)
        .then( (res) =>  {
            this.setState({
            suggestions: res.data
            });
        })
        .catch( (error) => {
            console.log(error);
        });

    };
  
  
    onSuggestionsClearRequested() {
      this.setState({
        suggestions: []
      });
  
    };


    //autocomplete


    handlePageClick (data)  {

        const { limit, value } = this.state;

        let selected = data.selected;
        let offset = Math.ceil(selected * limit);

        this.index(limit, offset, value);
    
    };

    render() { 

        const { list, total_rows, limit } = this.state;

        const total_page = Math.ceil(total_rows / limit);

        //for autocomplete
        const { value, suggestions } = this.state;
            const inputProps = {
            placeholder: 'Type a keyword...',
            value,
            className : 'form-control input-sm search_info',
            onChange: this.onChange.bind(this),
            onKeyDown: e => this.search_info(e,value),
            tabIndex : '1',
        };
        //for autocomplete

        return(
            <div className="container">
                <div className="row ">
                    <h3 className="col-sm-2">Query List </h3>
                    <div className="col-sm-4 col-sm-offset-5">
                    <Autosuggest
                        suggestions={suggestions}
                        getSuggestionValue={this.getSuggestionValue.bind(this)}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                        renderSuggestion={this.renderSuggestion.bind(this)}
                        inputProps={inputProps}
                    />
                    </div>
                    <a href="/add_new" className="btn btn-primary btn-sm  btn-mrg-top" >Add New</a>
                </div>
                
                <hr/>
                <div className="row ">
                    

                </div>
                <br/>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ADDRESS</th> 
                        <th className="text-center">ACTION</th>
                    </tr>   
                    </thead>
                    <tbody> 
                    { list.map(ls => (
                        <tr key={ls.id}>
                            <td>{ls.id}</td>
                            <td>{ls.fullname}</td>
                            <td>{ls.age}</td>
                            <td>{ls.address}</td>
                            <td className="text-center">
                            
                            <div className="btn-group">
                                <a className="btn btn-primary btn-sm" href={'edit/'+ls.id} >Edit</a>
                                <button className="btn btn-danger btn-sm" onClick={ () => this.delete_user(ls.id) } >Delete</button>
                            </div>
                            </td>
                        </tr>
                    )) }
                    </tbody>
                </table>
          
            <ReactPaginate previousLabel={"Prev"}
                        nextLabel={"Next"}
                        breakLabel={<a href="">...</a>}
                        breakClassName={"break-me"}
                        pageCount={total_page}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick.bind(this)}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} 
                />
            <hr />
        </div>
       
        );
    }

}


export default info_list;