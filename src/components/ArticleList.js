import React, { PropTypes, Component } from 'react'
import Article from './Article'
import toggleArticleOpen from '../decorators/toggleArticleOpen'

import DayPicker from './DayPicker'
import Select from './Select'



class  ArticleList extends Component {

    render(){
        const { articles, openedArticle,toggleArticleOpen } = this.props;
  
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
            <Select articles={articles}/>
            <DayPicker />
            </div>
        )
    }

}


export default toggleArticleOpen(ArticleList)