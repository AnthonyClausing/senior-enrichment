import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';


export default class AllCampuses extends Component {

	constructor(props) {
		super()
		this.state = {
			isClicked: false
		}
		this.deleteCampus = this.deleteCampus.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.refreshClick = this.refreshClick.bind(this);
	}



	deleteCampus(evt) {
		evt.preventDefault()
		const campusID = evt.target.value
		const confirmation = confirm('Are you sure you want to delete this campus?')
		if (confirmation) {
			axios.delete(`/api/campuses/${campusID}`)
		}
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

	render() {
		const campuses = this.props.campuses;
		return (
			<div>
				<button onClick={this.handleAdd}>{!this.state.isClicked? "Add A Campus" : "Close Form"}</button>
				{this.state.isClicked ? <AddCampus refreshClick={this.refreshClick}  /> : null}
				<div id="AllCampuses">
					<ul>
						{
							campuses && campuses.map((campus, idx) => {
								return (

									<div className="all-campuses-list-item" key={idx}>
										<li value={campus.id}>
											<NavLink to={`/campuses/${campus.id}`}>
												{campus && campus.name}
												<img src={campus.imageUrl} height="300px" width="200px" />
											</NavLink>
										</li>
										<button value={campus.id} onClick={this.deleteCampus}>Delete</button>
									</div>
								)
							})

						}
					</ul>
				</div>
			</div>
		)
	}

}