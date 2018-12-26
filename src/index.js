import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

// components
import Home from './components/home'
import Posts from './components/posts'
import PostItem from './components/post_item'
import Profile from './components/profiles'
import Life from './components/life'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to={{ pathname: '/' }}>Home</NavLink><br />

                    <NavLink 
                        to={{ pathname: '/posts' }}
                        activeStyle={{color: 'red', fontSize: '25px'}}
                    >
                    Post
                    </NavLink><br />

                    <NavLink to={{pathname: '/profiles'}}>Profile</NavLink><br />

                    <NavLink to={{pathname: '/life'}}>Life Cycle</NavLink>
                    <hr />
                </header>

                <Switch>
                    <Route path="/posts/:title1" component={PostItem} />
                    <Route path="/profiles" component={Profile} />
                    <Route path="/life" component={Life} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/" component={Home} />
                </Switch>
                
                
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById( 'root' ) );