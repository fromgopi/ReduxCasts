import React, { Component } from 'react';
import {addArticle} from "../../action/index";
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

const mapDispatchToProps = dispatch => {
    return{
        addArticle: articles => dispatch(addArticle(articles))
    }
}

class Forms extends Component{

    constructor(){
        super();
        this.state = {
            title: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("Inside Constructor of Form")
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        console.log("UUID -> " + id);
        this.props.addArticle({ title, id });
        this.setState( { title: " " } );
    }

    render(){
       const { title } = this.state;

       return(
           <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                   <label htmlFor="title">Title</label>
                   <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange}/>
               </div>
               <button type="submit" className="btn btn-successful btn-lg">SAVE</button>
           </form>
       );
    }

}


const Form = connect(null, mapDispatchToProps)(Forms);
export default Form;