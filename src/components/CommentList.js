import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
	
	state = {
	    isOpenComment: false
	}

	render(){
		const { isOpenComment } = this.state
		console.log({ isOpenComment })
		const { comments } = this.props;
		//Решение правильное, но такие условия тяжело читаються, разбивайте их
		const commentItems = comments ? comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>) : null;
		const commentsBody = (isOpenComment && commentItems) ?   
												<div>
		                                           <h6 onClick = {this.toggleOpenComments}>Hide comments</h6>
		                                           {commentItems}
		                                        </div>

		                                    : commentItems ? <div><h6 onClick = {this.toggleOpenComments}>Show comments</h6></div>
		                                     
		                                    :   <div><h6>No comments</h6></div> 
			
			return (
			    <ul>
			        {commentsBody}
			    </ul>
		    )
	}
	toggleOpenComments = (ev) => {
	    this.setState({
	        isOpenComment: !this.state.isOpenComment
	    })
	}
}

export default CommentList
