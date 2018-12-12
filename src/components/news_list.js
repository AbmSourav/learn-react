import React from 'react'
import NewsItem from './news_list_item'

const NewsList = ( props ) => {
    //console.log( props );
    const items = props.news.map( ( item ) => {
        return (
            <NewsItem item={ item } key={ item.id } /> //react needs 'key', so that it can identify what's going on.
        )
    } );

    return(
        <div>
            <h1 className="heading">News List</h1>
            {items}
        </div>
    )
}

export default NewsList;