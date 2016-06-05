import React, { Component } from 'react'

export default (ArticleComponent) => class DecoratedComponent extends Component {

    constructor(props) {
        super();

        this.state = {
            openedArticle: null
        };
    }

    toggleArticleOpen = id => ev => {

        this.setState({
            openedArticle: (this.state.openedArticle != id) ? id : null
        })
    }

    render() {

        return <ArticleComponent {...this.props} toggleArticleOpen = {this.toggleArticleOpen} openedArticle = {this.state.openedArticle} />
    }
}