import React, { PropTypes, Component } from 'react'
import Article from './Article'
import toggleArticleOpen from '../decorators/toggleArticleOpen'

import DayPicker from './DayPicker'
import Select from './Select'



class  ArticleList extends Component {

    state = {
        range: {from:null,to:null}
    };

    render(){
        const { articles, openedArticle,toggleArticleOpen } = this.props;

        const selectedArticles = articles.filter((article)=>{
            return article.date > this.state.range.from && article.date < this.state.range.to
        });
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
            <Select articles={selectedArticles}/>
            <DayPicker getDayRange = {this.getDayRange.bind(this)} />
            </div>
        )
    }

    getDayRange(range) {
        console.log('---', range);
        this.setState({
            range: range
        })
    }

}


export default toggleArticleOpen(ArticleList)