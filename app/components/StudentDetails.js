import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getStudent, clearStudentSelection } from '../reducers'
import UpdateStudent from './UpdateStudent'

class StudentDetails extends Component {

  componentDidMount () {
    const studentId = this.props.match.params.id
    this.props.loadStudent(studentId)
  }

  componentWillUnmount () {
    this.props.clear()
  }

  render () {
    console.log('props', this.props);
    const student = this.props.selectedStudent
    const campus = student.campus
    return (
      <div>
        <h1>{`${student.firstName}  ${student.lastName}`}</h1>
        <h2>{student.zodiac}</h2>
        <h3>{student.gpa}</h3>
        <img src={student.imageUrl} />
        <p>{student.email}</p>
        <p>{campus === null ? 'no campus' : ( <Link to={`/campuses/${campus.id}`}>{campus.name}</Link> ) }</p>
        <UpdateStudent student={student} studentId={this.props.match.params.id} />
      </div>
    )

  }

}

const mapStateToProps = (state) => ({
  selectedStudent: state.selectedStudent
})

const mapDispatchToProps = (dispatch) => ({
  loadStudent: (id) => dispatch(getStudent(id)),
  clear: () => dispatch(clearStudentSelection())
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)
