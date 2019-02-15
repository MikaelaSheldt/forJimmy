import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCampus, clearCampusSelection } from '../reducers'
import UpdateCampus from './UpdateCampus'

class CampusDetails extends Component {

  componentDidMount () {
    const campusId = this.props.match.params.id
    this.props.loadCampus(campusId)

  }

  componentWillUnmount () {
    this.props.clear()
  }

  render () {
    const campus = this.props.selectedCampus
    const students = campus.students
    return (
      <div>
        <h1>{campus.name}</h1>
        <h2>{campus.description}</h2>
        <img src={campus.imageUrl} />
        <p>{campus.address}</p>
        {students === undefined || students.length === 0 ? "There are no students on this campus" : (
          <ul>{
            students.map( student => { return (
              <li key={student.id}>
              <Link to={`/students/${student.id}`}>{`${student.firstName}  ${student.lastName}`}</Link>
              </li>
            )})
          }</ul>
        )}
        <UpdateCampus campusId={this.props.match.params.id} campus={campus} />
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  selectedCampus: state.selectedCampus
})

const mapDispatchToProps = (dispatch) => ({
  loadCampus: (id) => dispatch(getCampus(id)),
  clear: () => dispatch(clearCampusSelection())
})

export default connect(mapStateToProps, mapDispatchToProps)(CampusDetails)
