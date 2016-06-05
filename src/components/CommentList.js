import React, {PropTypes, Component} from 'react'
import Comment from './Comment'
import toggleCommentOpen from '../decorators/toggleCommentOpen'

class CommentList extends Component {

    render() {
        return (
            <ul>
                {this.getToggler()}
                {this.getList()}
            </ul>
        )
    }

    getToggler() {
        const {isOpen, toggleCommentOpen, comments} = this.props;
        const text = (isOpen && comments) ? 'hide comments' : comments ? 'show comments' : 'No comments';
        
        return <h6 onClick={toggleCommentOpen}>{text}</h6>
    }

    getList() {
        const {isOpen, comments} = this.props;

        if (!isOpen) return null;

        const commentItems = comments ? comments.map((comment) => <li key={comment.id}><Comment comment={comment}/>
        </li>) : null;
        return <ul>{commentItems}</ul>
    }

}

export default toggleCommentOpen(CommentList)