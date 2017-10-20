const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Students = models.Students;


router.get('/', function (req, res, next) {
	Students.findAll({
		include: [{ model: models.Campuses }],
		order: ['id']
	})
		.then(students => res.json(students))
		.catch(next)
})
router.get('/:id', function (req, res, next) {
	let studentId = req.params.id
	Students.findById(studentId, {
		include: [{ model: models.Campuses }],
	})
		.then(student => res.json(student))
		.catch(next)
})

router.post('/add', function (req, res, next) {
	let newStudentInfo = req.body;

	Students.create({
		name: newStudentInfo.name,
		email: newStudentInfo.email,
		campusId: newStudentInfo.campusId || null
	})
		.catch(next);
})

router.put('/:id', function (req, res, next) {
	let studentInfo = req.params.id;
	console.log(studentInfo)
	Students.findById(studentInfo)
		.then(student => student.update({
			name: req.body.name || student.name,
			email: req.body.email || student.email,
			campusId: req.body.campusId || student.campusId
		}))
		.catch(next);
})
router.put('/remove/:id', function (req, res, next) {
	let studentId = req.params.id;
	Students.findById(studentId)
		.then(student => student.update({
			campusId: req.body.campusId
		}))
		.catch(next);
})



router.delete('/:id', function (req, res, next) {
	let studentId = req.params.id;
	Students.findById(studentId)
		.then(student => student.destroy())
		.catch(next);
})

module.exports = router;