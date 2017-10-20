const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Campuses = models.Campuses;


router.get('/', function (req, res, next) {///so that only one axios is needed, unsure if bad practice for much larger data amounts
	Campuses.findAll({
		include: [{ model: models.Students }],
		order: ['id']
	})
		.then(campusList => res.json(campusList))
		.catch(next);
})

router.get('/:id', function (req, res, next) {
	let campusID = req.params.id
	Campuses.findById(campusID, {
		include: [{
			model: models.Students
		}]
	})
		.then(campus => res.json(campus))
		.catch(next);
})

router.post('/add', function (req, res, next) {
	let newCampusInfo = req.body;
	Campuses.create({
		name: newCampusInfo.name,
		imageUrl: newCampusInfo.imageUrl
	})
		.catch(next);
})

router.put('/:id', function (req, res, next) {
	let campusId = req.params.id
	let newCampusName = req.body.name;
	let newImageUrl = req.body.imageUrl
	Campuses.findById(campusId)
		.then(campus => campus.update({
			name: newCampusName || campus.name,
			imageUrl: newImageUrl || campus.imageUrl,
		}))
		.catch(next);
})

router.delete('/:id', function (req, res, next) {
	let campusId = req.params.id
	Campuses.findById(campusId)
		.then(campus => campus.destroy())
		.catch(next);
})

module.exports = router;