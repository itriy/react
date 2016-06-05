import React, {PropTypes, Component} from 'react';
import CommentList from './CommentList';


class Article extends Component {


    render() {

        const {article, openArticle} = this.props

        if (!article) return <h3>No article</h3>
        
        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} />
            </section>
        )
    }
}


export default Article