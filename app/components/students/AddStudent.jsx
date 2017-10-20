import axios from 'axios'
import React, { Component } from 'react';
import { render } from 'react-dom';



export default class AddStudent extends Component {
	constructor(props) {
		super()
		this.state = {
			campuses: [],
			email: '',
			name: '',
			campusID: 0

		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleCampusID = this.handleCampusID.bind(this);
		this.handleName = this.handleName.bind(this);
	}

	componentDidMount() {
		axios.get('/api/campuses')
			.then(res => res.data)
			.then(campuses => this.setState({ campuses }))
	}

	handleEmail(evt) {
		this.setState({ email: evt.target.value })
	}
	handleCampusID(evt) {
		this.setState({ campusID: evt.target.value })
	}
	handleName(evt) {
		this.setState({ name: evt.target.value })
	}

	handleSubmit(evt) {
		evt.preventDefault()
		const name = this.state.name
		const email = this.state.email
		const campusid = this.state.campusID
		axios.post('/api/students/add', { name: name, email: email, campusId: campusid })
			.then(this.props.refreshClick())

	}
	render() {
		const campusChoices = this.state.campuses
		return (<div>
			<form action="" onSubmit={this.handleSubmit}>
				<div>
					<label>Student Name:</label> <input type="text" id="name" name="name" onChange={this.handleName} required />
				</div>
				<div>
					<label>E-mail:</label> <input type="email" id="email" name="email" onChange={this.handleEmail} required />
				</div>
				<div>
					<select onChange={this.handleCampusID}>
						<option value="">Choose a campus</option>
						{
							campusChoices && campusChoices.map(campus => {
								return (<option key={campus.id} value={campus.id}>{campus.name}</option>)
							})
						}
					</select>
				</div>
				<div className="button">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>)
	}
}