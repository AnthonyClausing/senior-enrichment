import React, {Component} from 'react';
import axios from 'axios';

export default class UpdateCampus extends Component{
		constructor(props){
			super()
			this.state = {
					imageUrl : "",
					campusName: "",
					selectedStudent :1
			}
			this.handleCampusName = this.handleCampusName.bind(this);
			this.handleCampusPic = this.handleCampusPic.bind(this);
			this.handleStudentSelect = this.handleStudentSelect.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}
	handleCampusName(evt) {
	this.setState({campusName :evt.target.value})
	}

	handleCampusPic(evt) {
		this.setState({imageUrl : evt.target.value})
	}
	handleStudentSelect(evt) {
		console.log(evt.target.value)
		this.setState({selectedStudent: evt.target.value})
	}

	handleSubmit(evt) {
		evt.preventDefault()
		const enrolledStudent = this.state.selectedStudent
		axios.put(`/api/campuses/${this.props.campus.id}`, {
			name: this.state.campusName,
			imageUrl: this.state.imageUrl
		})
		axios.put(`/api/students/${enrolledStudent}`, {
			campusId: this.props.campus.id
		})
		.then(this.props.refreshClick())
	}

render(){
	const students = this.props.students

	const availableStudents = students.filter(student => student.campusId === null)

	return (
		<div>
			<form action="" onSubmit={this.handleSubmit}>
				<label>Campus Name:</label> <input type="text" id="name" name="name" onChange={this.handleCampusName} />
				<label>Image URL</label> <input type="text" id="imageUrl" name="imageUrl" onChange={this.handleCampusPic} />
				<select onChange={this.handleStudentSelect}>
					<option value="">Choose an Available Student</option>
					{
						availableStudents && availableStudents.map((student, idx) => {
							return (<option value={student.id} key={student.id}>{student.name}</option>)
						})
					}
				</select>
				<button type="submit" className="campus-update-button">Submit Changes</button>
			</form>
		</div>)
	}
}