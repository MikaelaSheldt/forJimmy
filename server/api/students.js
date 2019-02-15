const router = require('express').Router()

const { Student, Campus } = require('../db')

// serve all students
router.get('/', async (req, res, next) => {
    try {
      const students = await Student.findAll()
      res.json(students)
    } catch (err) {
      next(err)
    }
})

// serves a student by id, includes campuses
// /api/students/:id
router.post('/', async (req, res, next) => {
  try{
    const student = await Student.build(req.body)
    const campus = await Campus.findOne({
      where: {
        name: student.campusName
      }})
    if (campus) {
      await student.setCampus(campus)
    }
    await student.save()
    res.json(student)
  } catch (err) {
      next(err)
  }
})


router.get('/:id', async (req, res, next) => {
    try {
      const student = await Student.findAll({
        where: { id: req.params.id },
        include: [{model: Campus}]
      })
      res.json(student)
    } catch (err) {
      next(err)
    }
})

router.put('/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id)
    await student.update(req.body)
    const studentWithCampus = await Student.findAll({
      where: { id: req.params.id },
      include: [{model: Campus}]
    })
    res.json(studentWithCampus)
  } catch (err) {
    console.log('update fail');
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try{
    await Student.destroy({
      where: {id: req.params.id}
    })
    res.end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
