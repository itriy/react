import React, { PropTypes, Component } from 'react';
import CommentList from './CommentList';


class Article extends Component {

    state = {
        isOpen: false,
        isOpenComments: false
    }

    render() {

        const { article } = this.props
        const { isOpen } = this.state
       // const { isOpenComments } = this.state

        const { comments } = this.props.article;

        if (!article) return <h3>No article</h3>
        // const commentsBody = isOpenComments ?   <div>
        //                                            <h6 onClick = {this.toggleOpenComments}>Hide comments</h6>
        //                                            <CommentList comments={ comments } />
        //                                         </div>
        //                                     :   <div>
        //                                             <h6 onClick = {this.toggleOpenComments}>Show comments</h6>
        //                                         </div>

   
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
    toggleOpenComments = (ev) => {
        console.log('test')
        this.setState({
            isOpenComments: !this.state.isOpenComments
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