import React from 'react'

const NewsItem = ( { item } ) => {
    //console.log( item );
    return (
        <div>
            <h2>{ item.title }</h2>
            <p>{ item.feed }</p>
            <br />
        </div>
    )
}

export default NewsItem;