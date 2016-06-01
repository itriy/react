import React, { PropTypes, Component } from 'react';
import CommentList from './CommentList';


class Article extends Component {

    state = {
        isOpen: false
    }

    render() {

        const { article } = this.props
        const { isOpen } = this.state

        const { comments } = this.props.article;

      // console.log({ comments });

        if (!article) return <h3>No article</h3>
        const body = isOpen ? <section>{article.text}<CommentList comments={ comments } /></section> : null

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired
    }),
    options: PropTypes.object
}

export default Article