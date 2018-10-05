import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/FetchWeather";

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = { term: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onInputChange(event){
        console.log("OnInputChange Method is called -> " + this.state);
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();

        console.log("This method will invoked when the form from the UI is submitted. -> " + this.state.term);
        this.props.fetchWeather(this.state.term);
        //Resetting the term.
        this.setState({ term: " "})
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Get a five-day forecast in your favorite cities" className="from-control" onChange={e => this.setState({term: e.target.value})}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);