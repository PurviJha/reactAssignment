import React, { Component } from 'react'


export default class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.state.title,
            body: this.props.state.body,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert("I am clicked")
    }
    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(null)
    }
    render() {
        return (
            <div>
                                        <label for="title"><b>Title</b></label>
                                        <input placeholder="Title" id="title" value={this.state.title} onChange={this.handleChange} type="text" />

                                        <label for="body"><b>What you are thinking about?</b></label>
                                        <input placeholder="What you are thinking about?" value={this.state.body} onChange={this.handleChange} id="body" type="text" />
            </div>
        )
    }
}
