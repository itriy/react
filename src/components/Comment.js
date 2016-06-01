import React, { PropTypes, Component } from 'react';

class Comment extends Component {

	render(){
		const { comment } = this.props;
		const body =  <section><h4>{comment.name}</h4><p>{comment.text}</p> </section>;

		return (
			<div>
				{body}
			</div>
		)
	}


}
export default Comment