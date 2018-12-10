import React from 'react'
import ReactDOM from 'react-dom'
//Components
import Header from './components/header'

const App = () => {   
    return (
        <div>
            <Header /> {/* using Header component */}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById( 'root' ) )