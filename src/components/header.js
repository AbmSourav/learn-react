import React from 'react';

//Events. React's Synthetic Events. Functional component use case
//more info: https://reactjs.org/docs/events.html

const Header = () => {

    function inputClickHandler(event) {
        event.preventDefault();
        alert('Hello Universe');
    }

    function onChangeHandler(event) {
        console.log(event.target.value);
    }

    return (
        <header>
            <h1>Logo</h1>
            <button onClick = {inputClickHandler}>Greeting</button> <br /><br />

            <input onChange = {onChangeHandler} type="text" />
        </header>
    );
}

//available for other components
export default Header;