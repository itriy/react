import React, { PropTypes, Component } from 'react';

class Comment extends Component {
	state = {
	    isOpenComment: false
	}

	render(){
		const { comment } = this.props;
		const { isOpenComment } = this.state;
		const body =  <section>{comment.text} </section>;

		return (
			<div>
				<h4 onClick = {this.toggleOpen}>{comment.name}</h4>
				{body}
			</div>
		)
	}
	toggleOpen = (ev) => {
	    this.setState({
	        isOpenComment: !this.state.isOpenComment
	    })
	}



}
export default Comment