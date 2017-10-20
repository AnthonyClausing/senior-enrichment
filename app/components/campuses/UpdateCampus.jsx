import React from 'react';
import axios from 'axios';

const UpdateCampus = (props) => {
	let imageUrl = "" || props.campus.imageUrl;
	let campusName = "" || props.campus.name;
	let selectedStudent = 1;
	const students = props.students
	const campusId = props.campus.id

	const availableStudents = props.students.filter(student => student.campusId === null)

	const handleCampusName = function (evt) {
		campusName = evt.target.value
	}.bind(this)

	const handleCampusPic = function (evt) {
		imageUrl = evt.target.value
	}.bind(this)
	const handleStudentSelect = function (evt) {
		console.log(evt.target.value)
		selectedStudent = evt.target.value
	}

	const handleSubmit = function (evt) {
		evt.preventDefault()

		axios.put(`/api/campuses/${campusId}`, {
			name: campusName,
			imageUrl: imageUrl
		})
		axios.put(`/api/students/${selectedStudent}`, {
			campusId: campusId
		}).then(props.refreshClick())
	}.bind(this)


	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<label>Campus Name:</label> <input type="text" id="name" name="name" onChange={handleCampusName} />
				<label>Image URL</label> <input type="text" id="imageUrl" name="imageUrl" onChange={handleCampusPic} />
				<select onChange={handleStudentSelect}>
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

export default UpdateCampus;