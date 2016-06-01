import React, { PropTypes } from 'react'
import Comment from './Comment'

function CommentList(props){
	let isOpenComments = true;

	let toggleOpenComments = (ev) => {
        isOpenComments = !isOpenComments
        console.log(isOpenComments)
  
    }

	const { comments } = props;
	const commentItems = comments ? comments.map((comment) => <li key={comment.id}><div><Comment comment = {comment}/></div></li>) : null;
	//Решение правильное, но такие условия тяжело читаються, разбивайте их
	const commentsBody = isOpenComments ?  <div><h6 onClick = {toggleOpenComments}>Hide comments</h6>
											{commentItems}</div>
                                        :   
                                           <h6 onClick = {toggleOpenComments}>Show comments</h6>
                                                

	
// console.log(commentItems)
	return (
	    <ul>
	    	{commentsBody}
	        
	    </ul>
    )

}
export default CommentList
