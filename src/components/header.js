import React, { Component } from 'react';   /* ES6 Destructuring */

//Events. React's Synthetic Events. Class base component use case
//more info: https://reactjs.org/docs/events.html

class Header extends Component {

    inputClickHandler() {
        alert('Hello Universe');
    }

    onChangeHandler= (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <header>
                <h1>Logo</h1>
                <button onClick = {this.inputClickHandler}>Greeting</button> <br /><br />

                <input onChange = {this.onChangeHandler} type="text" />
            </header>
        )
    }
}

//available for other components
export default Header;