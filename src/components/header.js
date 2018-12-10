import React, { Component } from 'react';   /* ES6 Destructuring */

//== Types of components ==

//functional component
/* const Header = () => {
    return <h2>Hello from Header component</h2>
} */

//class base component
class Header extends Component {
    render() {
        return (
            <header>
                <h1>Logo</h1>
            </header>
        )
    }
}

//available for other components
export default Header;