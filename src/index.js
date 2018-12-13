import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

// components
import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profiles'

const App = () => {
    return (
        <BrowserRouter>
            <div>

                {/* e.x: https://facebook.com/ Or https://facebook.com/username that's what it's doing */}

                {/* 'exact' means if it's http://localhost:3000/ only then Home component will be loaded, Otherwise something else. */}
                <Route path="/" exact component={Home} />

                {/* Posts component can be found on http://localhost:3000/posts . */}
                <Route path="/posts" component={Posts} />

                {/* Profile component can be found on http://localhost:3000/profiles */}
                <Route path="/profiles" component={Profile} />
                
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById( 'root' ) );