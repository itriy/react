import React, { PropTypes } from 'react'
import Comment from './Comment'

function CommentList(props){
	const { comments } = props;
	//console.log({ comments });
	const commentItems = comments ? comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>) : null;

	return (
	    <ul>
	        {commentItems}
	    </ul>
    )
}
export default CommentList