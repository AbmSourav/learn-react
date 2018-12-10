import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import JSON from './db.json' /* featching json file */

//Components
// import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {   
    state = {
        news: JSON
    }

    render() {
        return (
            /* pasing data to the NewsList component through props(news) */
            <div>
                <NewsList news = { this.state.news } />
            </div>
        )   
    }
}

ReactDOM.render(<App />, document.getElementById( 'root' ) )