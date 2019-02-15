const { db, Campus, Student } = require('./server/db')
const {green, red} = require('chalk')

const students = [
  {
    firstName: 'Mikaela',
    lastName: 'Sheldt',
    email: 'msheldt@gmail.com',
    zodiac: 'Gemini',
    gpa: 4.0,
    campusId: 1
  },
  {
    firstName: 'Alex',
    lastName: 'Machiveli',
    email: 'amachiveli@gmail.com',
    zodiac: 'Virgo',
    gpa: 2.8,
    campusId: 1
  },
  {
    firstName: 'Jimmy',
    lastName: 'Holway',
    email: 'jholway@gmail.com',
    zodiac: 'Capricorn',
    gpa: 0.8,
    campusId: 1
  },
  {
    firstName: 'Mike',
    lastName: 'Dymetrenko',
    email: 'miked@gmail.com',
    zodiac: 'Cancer',
    gpa: 4.0,
    campusId: 1
  },
  {
    firstName: 'Sara',
    lastName: 'Granger',
    email: 'sgranger@gmail.com',
    zodiac: 'Aries',
    gpa: 4.0,
    campusId: 1
  },
  {
    firstName: 'Torri',
    lastName: 'Zoomples',
    email: 'tzoomples@gmail.com',
    zodiac: 'Libra',
    gpa: 3.9,
    campusId: 1
  },
  {
    firstName: 'Andrew',
    lastName: 'Rea',
    email: 'area@gmail.com',
    zodiac: 'Virgo',
    gpa: 3.8,
    campusId: 2
  },
  {
    firstName: 'Matt',
    lastName: 'Green',
    email: 'mgreen@gmail.com',
    zodiac: 'Capricorn',
    gpa: 2.7,
    campusId: 2
  },
  {
    firstName: 'Matt',
    lastName: 'IForgot',
    email: 'miforgot@gmail.com',
    zodiac: 'Virgo',
    gpa: 3.4,
    campusId: 2
  },
  {
    firstName: 'Alvin',
    lastName: 'Carr',
    email: 'acarr@gmail.com',
    zodiac: 'Scorpio',
    gpa: 3.0,
    campusId: 2
  },
  {
    firstName: 'Jeff',
    lastName: 'Steele',
    email: 'jsteele@gmail.com',
    zodiac: 'Aries',
    gpa: 1.0,
    campusId: 2
  },
  {
    firstName: 'Sean',
    lastName: 'Heffernan',
    email: 'sheffernan@gmail.com',
    zodiac: 'Libra',
    gpa: 3.0,
    campusId: 2
  },
  {
    firstName: 'Twan',
    lastName: 'Koolen',
    email: 'tkoolen@gmail.com',
    zodiac: 'Cancer',
    gpa: 3.0,
    campusId: 2
  },
  {
    firstName: 'Lauren',
    lastName: 'Cobb',
    email: 'lcobb@gmail.com',
    zodiac: 'Scorpio',
    gpa: 4.0,
    campusId: 2
  },
]

const campuses = [
  {
    name: 'Cool Kidz',
    address: 'Down on the corner, Out in the street',
    description: 'Billy and the Cool Kidz are playing. Bring a nickel. Tap your feet.'
  },
  {
    name: "All My Ex's",
    address: 'Live in Texas',
    description: "Texas is the place I'd dearly love to be. But all my ex's live in Texas. Therefore I reside in Tennessee."
  }

]

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!
  await Promise.all(campuses.map(campus => {
    return Campus.create(campus);
  }));


  await Promise.all(students.map(student => {
    return Student.create(student);
  }));

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
