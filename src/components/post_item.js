import React from 'react'

const PostItem = (props) => {
    console.log(props) /* got the title inside match > params */
    return (
        <div>
            <h2>{props.match.params.title1}</h2>
            <p>Breacking News: I'm learning React JS</p>
        </div>
    )
}

export default PostItem