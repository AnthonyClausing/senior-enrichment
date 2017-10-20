import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';

export default class AllStudents extends Component {

	constructor(props) {
		super()
		this.state = {
			isClicked: false,
			allStudents: []
		}
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.refreshClick = this.refreshClick.bind(this);
	}


	handleAdd() {
		if (!this.state.isClicked) {
			this.setState({ isClicked: true })
		} else {
			this.setState({ isClicked: false })
		}
	}
	refreshClick() {
		this.setState({ isClicked: false });
	}
	handleDelete(evt) {
		evt.preventDefault()
		const studentID = evt.target.value
		const confirmation = confirm('Are you sure you want to delete this student?')
		const newStudentList = this.state.allStudents.filter(student => student.id != studentID)
		if (confirmation) {
			this.setState({ allStudents: newStudentList })
			axios.delete(`/api/students/${studentID}`)
		}
	}
	componentDidMount() {
		this.setState({ allStudents: this.props.students })
	}

	componentWillReceiveProps() {}


	render() {
		const students = this.props.students
		return (
			<div>
				<div >
					<img id="add-button" src="https://imgur.com/lkdNvmr.png"
						onClick={this.handleAdd}
						height="90"
						width="90"
					/>
					{this.state.isClicked ? <AddStudent refreshClick={this.refreshClick} /> : null}
				</div>
				<div id="student-table">
					<table>
						<thead>
							<tr>
								<th>#ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Campus</th>
							</tr>
						</thead>
						<tbody>
							{
								students && students.map((student) => {
									return (
										<tr key={student.id} >
											<td ><NavLink to={`/students/${student.id}`}>{student.id}</NavLink></td>
											<td >{student.name}</td>
											<td>{student.email}</td>
											<td>{student.campus ?
												<NavLink to={`/campuses/${student.campus.id}`}>
													{student.campus.name}
												</NavLink>
												:
												"NOT ASSIGNED"
											}
											</td>
											<td id="delete-student-button">
												<button value={student.id} onClick={this.handleDelete}>Delete</button>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>

			</div>
		);
	}
}
