import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    return (
        <div>
            <Link to='/posts/title1'>This is Post Title One</Link><br />
            <Link to='/posts/post2'>This is Post Title Two</Link><br />
            <Link to='/posts/post3'>This is Post Title Three</Link>
        </div>
    )
}

export default Posts