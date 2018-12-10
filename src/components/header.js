import React, { Component } from 'react';   /* ES6 Destructuring */

//State. Class base component use case
//more info: https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class

class Header extends Component {

    state = {
        title: 'Hello Universe',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }

    onChangeHandler= (event) => {
        this.setState( {
            title: event.target.value
        } );
    }

    render() {
        return (
            <header>
                <h1>Logo</h1>
                <h2>{this.state.title}</h2>
                <p>{this.state.content}</p>

                <input onChange = {this.onChangeHandler} type="text" />
            </header>
        )
    }
}

/* class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
        <div>
            <h1>Hello, Universe</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
        );
    }
} */

//available for other components
export default Header;