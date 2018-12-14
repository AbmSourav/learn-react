import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'

// components
import Home from './components/home'
import Posts from './components/posts'
import PostItem from './components/post_item'
import Profile from './components/profiles'

const App = () => {
    return (
        /* we also can use HashRouter or MemoryRouter */
        <BrowserRouter>
            <div>
                <header>
                    {/* <Link> works as a <a href=""> */}
                    <Link to={{ pathname: '/' }}>Home</Link><br />

                    {/* insted of Link we also can use NavLink */}
                    <NavLink 
                        to={{ pathname: '/posts' }}
                        activeStyle={{color: 'red', fontSize: '25px'}}
                    >
                    Post
                    </NavLink><br />

                    <Link to={{pathname: '/profiles'}}>Profile</Link>
                    <hr />
                </header>

                <Route path="/" exact component={Home} />
                <Route path="/posts" exact component={Posts} />
                {/* it's saying that, go to the PostItem component through Posts component */}
                <Route path="/posts/:title1" component={PostItem} />{/* insted of hard coding make it dynamic with ':' */}
                <Route path="/profiles" component={Profile} />
                
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById( 'root' ) );