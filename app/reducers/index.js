import axios from 'axios'

// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

// import {combineReducers} from 'redux'

// action types
const GOT_STUDENTS = 'GOT_STUDENTS'
const GOT_STUDENT = 'GOT_STUDENT'
const ADDED_STUDENT = 'ADDED_STUDENT'
const UPDATED_STUDENT ='UPDATED_STUDENT'
const DELETED_STUDENT = 'DELETED_STUDENT'
const CLEAR_STUDENT_SELECTION = 'CLEAR_STUDENT_SELECTION'


const GOT_CAMPUSES = 'GOT_CAMPUSES'
const GOT_CAMPUS = 'GOT_CAMPUS'
const ADDED_CAMPUS = 'ADDED_CAMPUS'
const UPDATED_CAMPUS = 'UPDATED_CAMPUS'
const DELETED_CAMPUS = 'DELETED_CAMPUS'
const CLEAR_CAMPUS_SELCTION = 'CLEAR_CAMPUS_SELECTION'



// action creators
export const gotStudents = (students) => ({
  type: GOT_STUDENTS,
  students
})
export const gotStudent = (student) => ({
  type: GOT_STUDENT,
  student
})
export const addedStudent = (student) => ({
  type: ADDED_STUDENT,
  student
})
export const updatedStudent = (updatedStudent, studentId) => ({
  type: UPDATED_STUDENT,
  updatedStudent,
  studentId
})
export const deletedStudent = (studentId) => ({
  type: DELETED_STUDENT,
  studentId
})
export const clearStudentSelection = () => ({
  type: CLEAR_STUDENT_SELECTION
})


export const gotCampuses = (campuses) => ({
  type: GOT_CAMPUSES,
  campuses
})
export const gotCampus = (campus) => ({
  type: GOT_CAMPUS,
  campus
})
export const addedCampus = (campus) => ({
  type: ADDED_CAMPUS,
  campus
})
export const updatedCampus = (updatedCampus, campusId) => ({
  type: UPDATED_CAMPUS,
  updatedCampus,
  campusId
})
export const deletedCampus = (campusId) => ({
  type: DELETED_CAMPUS,
  campusId
})
export const clearCampusSelection = () => ({
  type: CLEAR_CAMPUS_SELCTION
})

// thunk creators
export const getStudents = () => async (dispatch) => {
  const response = await axios.get('/api/students')
  const students = response.data
  dispatch(gotStudents(students))
}
export const getStudent = (id) => async (dispatch) => {
  const response = await axios.get(`/api/students/${id}`)
  const student = response.data[0]
  dispatch(gotStudent(student))
}
export const addStudent = (input) => async (dispatch) => {
  const response = await axios.post('/api/students', input)
  const student = response.data
  dispatch(addedStudent(student))
}
export const updateStudent = (newStudent, studentId) => async (dispatch) => {
  const response = await axios.put(`/api/students/${studentId}`, newStudent)
  const brandNew = response.data[0]
  dispatch(updatedStudent(brandNew, studentId))
}
export const deleteStudent = (studentId) => async (dispatch) => {
  const response = await axios.delete(`/api/students/${studentId}`)
  dispatch(deletedStudent(studentId))
}


export const getCampuses = () => async (dispatch) => {
  const response = await axios.get('/api/campuses')
  const campuses = response.data
  dispatch(gotCampuses(campuses))
}
export const getCampus = (id) => async (dispatch) => {
  const response = await axios.get(`/api/campuses/${id}`)
  const campus = response.data[0]
  dispatch(gotCampus(campus))
}
export const addCampus = (input) => async (dispatch) => {
  const response = await axios.post('/api/campuses', input)
  const campus = response.data
  dispatch(addedCampus(campus))
}
export const updateCampus = (newCampus, campusId) => async (dispatch) => {
  const response = await axios.put(`/api/campuses/${campusId}`, newCampus)
  const brandNew = response.data
  dispatch(updatedCampus(brandNew, campusId))
}
export const deleteCampus = (campusId) => async (dispatch) => {
  const response = await axios.delete(`/api/campuses/${campusId}`)
  dispatch(deletedCampus(campusId))
}

const initialState = {
  students: [],
  campuses: [],
  selectedCampus: {students:[]},
  selectedStudent: {campus: {}}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_STUDENTS:
      return {...state, students: action.students}
    case GOT_STUDENT:
      return {...state, selectedStudent: action.student}
    case ADDED_STUDENT:
      return {...state, students: [...state.students, action.student]}
    case UPDATED_STUDENT:
      return {...state, selectedStudent: action.updatedStudent}
    case DELETED_STUDENT:
      const remainingStudents = state.students.filter( student => { return student.id !== Number(action.studentId)})
      return {...state, students: remainingStudents}
    case CLEAR_STUDENT_SELECTION:
      return {...state, selectedStudent: {campus: {}}}


    case GOT_CAMPUSES:
      return {...state, campuses: action.campuses}
    case GOT_CAMPUS:
      return {...state, selectedCampus: action.campus}
    case ADDED_CAMPUS:
      return {...state, campuses: [...state.campuses, action.campus]}
    case UPDATED_CAMPUS:
      return {...state, selectedCampus: action.updatedCampus}
    case DELETED_CAMPUS:
      const depricatedCampuses = state.campuses.filter( campus => {campus.id !== action.campusId})
      return {...state, campuses: depricatedCampuses }
    case CLEAR_CAMPUS_SELCTION:
      return {...state, selectedCampus: {students:[]}}
    default:
      return state
  }
}

export default rootReducer
