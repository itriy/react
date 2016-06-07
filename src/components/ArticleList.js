import React, { PropTypes, Component } from 'react'
import Article from './Article'
import toggleArticleOpen from '../decorators/toggleArticleOpen'

import DayPicker from './DayPicker'


class  ArticleList extends Component {

    render(){
        const { articles, openedArticle,toggleArticleOpen } = this.props;
        console.log(this.props);
  
        const articleItems = articles.map((article) => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openedArticle}
                openArticle = {toggleArticleOpen(article.id)}
            /></li>);

        return (
        	<div>
            <ul>
                {articleItems}
            </ul>
            <DayPicker/>
            </div>
        )
    }

}


export default toggleArticleOpen(ArticleList)