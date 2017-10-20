const router = require('express').Router()


const campuses = router.use('/campuses', require('./campus'));
const students = router.use('/students', require('./student'));


module.exports = {campuses, students};

