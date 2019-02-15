import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getStudents, deleteStudent } from '../reducers'

import AddStudent from './AddStudent'

export class StudentList extends Component {

  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.loadStudents()
  }

  handleClick (event) {
    event.preventDefault()
    const studentId = event.target.name
    this.props.deleteStudent(studentId)
  }

  render () {
    const students = this.props.students
    return (
      <main>
        <AddStudent />
        <ul>
          {students.map(student => {
            return (
              <li key={student.id}>
                <span>
                  <button name={student.id} onClick={this.handleClick}> X </button>
                </span>
                <Link to={`/students/${student.id}`}>{` ${student.firstName}  ${student.lastName}`}</Link>
              </li>
            )
          })}
        </ul>
      </main>
    )
  }

}

const mapStateToProps = (state) => ({
  students: state.students
})

const mapDispatchToProps = (dispatch) => ({
  loadStudents: () => dispatch(getStudents()),
  deleteStudent: (studentId) => dispatch(deleteStudent(studentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
