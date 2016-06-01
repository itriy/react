import React, { PropTypes } from 'react'
import Comment from './Comment'

function CommentList(props){
	let isOpenComments = false;

	const { comments } = props;
	
	const commentsBody = isOpenComments ?   <div>
	                                           <h6 onClick = {toggleOpenComments}>Hide comments</h6>
	                                          
	                                        </div>
	                                    :   <div>
	                                            <h6 onClick = {toggleOpenComments}>Show comments</h6>
	                                        </div>
console.log(commentsBody)
	const commentItems = comments ? comments.map((comment) => {
		<li key={comment.id}>{commentsBody}<Comment comment = {comment}/></li>
	}) : null;

	return (
	    <ul>
	        {commentItems}
	    </ul>
    )
    let toggleOpenComments = (ev) => {
        console.log('test')
        isOpenComments = !isOpenComments
        // this.setState({
        //     isOpenComments: !this.state.isOpenComments
        // })
    }
}
export default CommentList