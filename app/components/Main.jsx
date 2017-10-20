import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'

import Header from './Header';
import Home from './Home';
import AllCampuses from './campuses/AllCampuses';
import AllStudents from './students/AllStudents';
import SingleCampus from './campuses/SingleCampus';
import SingleStudent from './students/SingleStudent';

export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			students: [],
			campuses: []
		}
	}
	componentDidMount() {
		axios.get('/api/students')
			.then(res => res.data)
			.then(students => {
				this.setState({ students });
			})
		axios.get('/api/campuses')
			.then(res => res.data)
			.then(campuses => {
				this.setState({ campuses })
			});
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/students" render={() => (<AllStudents students={this.state.students} />)} />
					<Route exact path="/students/:studentId" render={({ match }) => (<SingleStudent match={match} campuses={this.state.campuses} />)} />
					<Route exact path="/campuses" component={() => (<AllCampuses campuses={this.state.campuses} />)} />
					<Route exact path="/campuses/:campusId" render={({ match }) => (<SingleCampus match={match} students={this.state.students} />)} />
					<Redirect to="/" />
				</Switch>
			</div>
		)
	}
}