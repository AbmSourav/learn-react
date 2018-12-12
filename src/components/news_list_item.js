import React from 'react'

const NewsItem = ( { item } ) => {
    //console.log( item );
    return (
        <div className="items">
            <h2>{ item.title }</h2>
            <p>{ item.feed }</p>
        </div>
    )
}

export default NewsItem;