import React, { Component } from 'react';

class ExampleComponent extends Component{

    constructor(){
        super()

        this.state = {
            articles: [
                { title: "Simple React App using Create-React-App and Webpack", id: 1 },
                { title: "React Redux Tutorial for Beginners", id: 2 }
            ]
        }
    }

    render(){
        const { articles } = this.state;
        return (
            <div>
                <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>
            </div>
        );
    }

}

export default ExampleComponent;