import React, {PropTypes, Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

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
        const {isOpen, toggleOpen ,comments} = this.props;

        console.log({comments});
        const text = (isOpen && comments) ? 'hide comments' : comments ? 'show comments' : 'No comments';
        return <h6 href="#" onClick={toggleOpen}>{text}</h6>
    }

    getList() {
        const {isOpen, comments} = this.props;

        if (!isOpen) return null;
        const commentItems = comments ? comments.map((comment) => <li key={comment.id}><Comment comment={comment}/>
        </li>) : null;
        return <ul>{commentItems}</ul>
    }

}

export default toggleOpen(CommentList)