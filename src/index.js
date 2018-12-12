import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../src/css/style.css'

import JSON from './db.json' /* featching json file */

//Components
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {   
    state = {
        news: JSON,
        filtered: []
    }
    getKeyWord = (event) => {
        //console.log( event.target.value )
        let keyword = event.target.value
        let filtered = this.state.news.filter( (item) => {
            return item.title.indexOf(keyword) > -1 /* filterin on news title. -1 makes it true */
        } )
        this.setState( {
            filtered
        } )
    }

    render() {
        let newsFiltered = this.state.filtered
        let newsAll = this.state.news
        return (
            <div>
                <Header keywords={ this.getKeyWord } />

                {/* pasing conditional data to the NewsList component through props(news) */}
                <div className="container">
                    <NewsList 
                        news= { newsFiltered.length === 0 ? newsAll : newsFiltered } 
                    />
                </div>
            </div>
        )   
    }
}

ReactDOM.render(<App />, document.getElementById( 'root' ) )