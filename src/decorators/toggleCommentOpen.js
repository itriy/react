import React, { Component } from 'react'

export default (CustomComponent) => class DecoratedComponent extends Component {

    constructor(props) {
        super();

        this.state = {
            isOpen: false
        };
    }

    toggleCommentOpen = (ev) => {
        if (ev && ev.preventDefault) ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <CustomComponent {...this.props} isOpen = {this.state.isOpen} toggleCommentOpen = {this.toggleCommentOpen}/>
    }
}