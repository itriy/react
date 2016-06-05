import React, { PropTypes, Component } from 'react';

class Comment extends Component {

	render(){
		const { comment } = this.props;
		console.log(this.props)
		const body =  <section><h4>{comment.name}</h4>{comment.text} </section>;

		return (
			<div>
				{body}
			</div>
		)
	}




}
export default Comment