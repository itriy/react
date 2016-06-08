import React, { PropTypes, Component } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

export default class SelectComponent extends Component {

    constructor(props) {
        super();

        this.state = {
            selected: null
        };
        
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }

    render() {
    	const {articles} = this.props;

    	const options = articles.map((article) => ({
    	    label: article.title,
    	    value: article.id
    	}))

        return  <Select
                options = {options}
                onChange = {this.handleChange}
                value= {this.state.selected}
                multi = {true}
            />
    }
}