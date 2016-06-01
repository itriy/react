import React, { PropTypes } from 'react'
import Article from './Article'



function ArticleList(props) {
    const { articles } = props
//	console.log({articles})
    const articleItems = articles.map((article) => <li key={article.id}><Article article = {article}/></li>)

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList