import React from 'react';
import ReactDOM from 'react-dom';

//first component. keep it simple
const App = () => {
    //it's not HTML, it's JSX
    return <h1>Hello, Universe</h1>
}

ReactDOM.render(<App />, document.getElementById( 'root' ) );