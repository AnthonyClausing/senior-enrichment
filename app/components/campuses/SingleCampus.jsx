import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import UpdateCampus from './UpdateCampus'

export default class SingleCampus extends Component {
	constructor(props) {
		super()
		this.state = {
			selectedCampus: {},
			isClicked: false
		}
		this.handleUpdate = this.handleUpdate.bind(this)
		this.refreshClick = this.refreshClick.bind(this)
	}

	componentDidMount() {
		const campusId = this.props.match.params.campusId
		axios.get(`/api/campuses/${campusId}`)
			.then(res => res.data)
			.then(campus => {
				this.setState({ selectedCampus: campus })
			})
	}
	handleUpdate(evt) {
		if (!this.state.isClicked) {
			this.setState({ isClicked: true })
		} else {
			this.setState({ isClicked: false })
		}
	}
	refreshClick() {
		this.setState({ isClicked: false })
	}
	removeStudent(evt) {
		const studentID = evt.target.value
		const confirmation = confirm('Are you sure you want to remove this student from the campus?')
		if (confirmation) {
			axios.put(`/api/students/remove/${studentID}`, {
				campusId: null
			})
		}
	}



	render() {
		const campus = this.state.selectedCampus
		const students = campus.students
		return (
			<div>
				<button onClick={this.handleUpdate} className="update-button">{!this.state.isClicked ? "Update" : "Exit Update"}</button>
				<div>
				{this.state.isClicked ? <UpdateCampus students={this.props.students} campus={campus} refreshClick={this.refreshClick}/> : null}
					<h2 id="single-campus">{campus.name}</h2>
					<aside><img src={campus.imageUrl} height="300" width="200" /></aside>
					<ol>
						{
							students && students.map((student, idx) => {

								return (
									<div key={idx}>
										<NavLink to={`/students/${student.id}`}>
											<li className="single-campus-students">
												{student.name}
											</li>
										</NavLink>
										<button onClick={this.removeStudent} value={student.id}>Remove from Campus</button>
									</div>
								)
							})
						}
					</ol>
				</div>
			</div>
		)
	}
}