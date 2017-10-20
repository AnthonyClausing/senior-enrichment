import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UpdateStudent = (props) => {
	let email = ""
	let name = ""
	let selectedCampusId = 0
	const campuses = props.campuses

	const handleStudentName = function (evt) {
		name = evt.target.value
	}.bind(this)

	const handleStudentEmail = function (evt) {
		email = evt.target.value
	}.bind(this)

	const handleChangedCampus = function (evt) {
		selectedCampusId = evt.target.value
	}

	const handleSubmit = function (evt) {
		evt.preventDefault()
		axios.put(`/api/students/${props.student.id}`, {
			name: name,
			email: email,
			campusId: selectedCampusId
		}).then(props.refreshClick())
	}.bind(this)


	return (
		<div>
			<div>
				<form action="" onSubmit={handleSubmit}>
					<label>Name:</label> <input type="text" id="name" name="name" onChange={handleStudentName} />
					<label>Email:</label> <input type="text" id="imageUrl" name="imageUrl" onChange={handleStudentEmail} />
					<select onChange={handleChangedCampus}>
						<option value="">Select a campus</option>
						{
							campuses && campuses.map((campus, idx) => {
								return (<option key={campus.id} value={campus.id}>{campus.name}</option>)
							})
						}
					</select>
					<button type="submit" className="campus-update-button">Submit Changes</button>
				</form>
			</div>
		</div>)

}

export default UpdateStudent;