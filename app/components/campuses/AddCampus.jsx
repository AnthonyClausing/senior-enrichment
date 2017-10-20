import axios from 'axios'
import React, { Component } from 'react';



export default class AddStudent extends Component {
	constructor(props) {
		super()
		this.state = {
			name: '',
			imageUrl: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageUrl = this.handleImageUrl.bind(this);
		this.handleName = this.handleName.bind(this);
	}

	handleImageUrl(evt) {
		this.setState({ imageUrl: evt.target.value })
	}

	handleName(evt) {
		this.setState({ name: evt.target.value })
	}

	handleSubmit(evt) {
		evt.preventDefault()
		const name = this.state.name
		const imageUrl = this.state.imageUrl
		axios.post('/api/campuses/add', { 
			name: name, 
			imageUrl: imageUrl 
		})
		.then(this.props.refreshClick())
	}

	render() {
		return (<div>
			<form action="" onSubmit={this.handleSubmit}>
				<div>
					<label>Campus Name:</label> <input type="text" id="name" name="name" onChange={this.handleName} required />
				</div>
				<div>
					<label>Image Url:</label> <input type="text" id="image-url" name="imageUrl" onChange={this.handleImageUrl} placeholder="please use an imgur URL" required />
				</div>
				<div className="button">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>)
	}
}