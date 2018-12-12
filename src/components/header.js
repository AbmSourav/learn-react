import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>News App</h1>
            <h2>{}</h2>
            <input 
                onChange = {props.keywords} 
                type="text" placeholder="Search News"
            />
        </header>
    )
}

//available for other components
export default Header;