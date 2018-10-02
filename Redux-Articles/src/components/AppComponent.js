import React, { Component } from 'react'
import List from '../components/articles/List';
import Form from '../components/articles/Forms';

class AppComponent extends Component{

    constructor(){
        super();
        console.log("Inside App component");
    }

    render(){
        return(
            <div className="container">
                <div className="col-md-5">
                    <h2>Articles</h2>
                    <List/>
                </div>
                <div className="col-md-4">
                    <h2>Add New Article</h2>
                    <Form/>
                </div>
            </div>
        );
    }
}


export default AppComponent;