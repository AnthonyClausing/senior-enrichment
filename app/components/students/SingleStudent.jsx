import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import UpdateStudent from './UpdateStudent'

export default class SingleStudent extends Component {

	constructor(props) {
		super()
		this.state = {
			student: {},
			isClicked: false
		}
		this.refreshClick = this.refreshClick.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	refreshClick() {
		this.setState({ isClicked: false })
	}
	handleUpdate(evt) {
		if (!this.state.isClicked) {
			this.setState({ isClicked: true })
		} else {
			this.setState({ isClicked: false })
		}
	}

	componentDidMount() {
		const studentID = this.props.match.params.studentId

		axios.get(`/api/students/${studentID}`)
			.then(res => res.data)
			.then(student => this.setState({ student }))
			.catch(err => console.log(err))
	}

	render() {
		const student = this.state.student
		const campusID = student.campusId;
		const studentsCampus = student.campus ? student.campus.name : 'TBA';

		return (
			<div id="single-student">
				<button id="update-student-button" value={student.id} onClick={this.handleUpdate}>Update Student</button>
				<h2>Student Name: {student.name}</h2>
				<h2>Student Email: {student.email}</h2>
				<h2><NavLink to={`/campuses/${campusID}`}>{studentsCampus}		</NavLink></h2>
				{this.state.isClicked ? <UpdateStudent student={this.state.student} campuses={this.props.campuses} refreshClick={this.refreshClick} /> : null}
			</div>

		)
	}


}