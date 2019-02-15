const router = require('express').Router()

const { Campus, Student } = require('../db')

// serve up all campuses
// /api/campuses
router.get('/', async (req, res, next) => {
    try {
      const campuses = await Campus.findAll()
      res.json(campuses)
    } catch (err) {
      next(err)
    }
})

// serves a campus by id, includes students
// /api/campuses/:id

router.post('/', async (req, res, next) => {
  console.log(req.body);
  try{
    const campus = await Campus.build(req.body)
    await campus.save()
    res.json(campus)
  } catch (err) {
    console.log("post shit ain't right");
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
    try {
      const campuses = await Campus.findAll({
        where: { id: req.params.id },
        include: [{model: Student}]
      })
      res.json(campuses)
    } catch (err) {
      next(err)
    }
})

router.put('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id)
    await campus.update(req.body)
    res.json(campus)
  } catch (err) {
    console.log('update fail');
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try{
    await Campus.destroy({
      where: {id: req.params.id}
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})



module.exports = router
