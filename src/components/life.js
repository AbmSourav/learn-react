import React, { Component } from 'react'

// A component does 5 things -
// 1. get default props
// 2. set default state
// 3. before render
// 4. render jsx
// 4. after render

class Life extends Component {

    // 2
    state = { title: 'Life Cycle' }

    // 3
    componentWillMount() {
        console.log('before render');
        // document.querySelector('h2').style.color = 'red'; 
        //it'll through error, bcoz h2 does not exist before rendering jsx
    }

    // 5
    componentDidMount() {
        console.log('after render');
        document.querySelector('h2').style.color = 'red';
    }

    // 4
    render() { 
        
        // 1
        console.log(this.props)

        return ( 
            <div>
                <h2>{ this.state.title }</h2>
            </div>
         );
    }
}
 
export default Life;