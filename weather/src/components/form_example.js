import React, { Component } from 'react';

class Forms extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        console.log(this.state);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onChange}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
                    </label>
                    <label>
                        Age:
                        <input type="text" value={this.state.age} onChange={ e => this.setState({ age: e.target.value})}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Forms;