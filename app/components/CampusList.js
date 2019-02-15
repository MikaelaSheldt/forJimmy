import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCampuses, deleteCampus } from '../reducers'
import AddCampus from './AddCampus'

export class CampusList extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.loadCampuses()
  }

  handleClick (event) {
    event.preventDefault()
    const campusId = event.target.name
    this.props.deleteCampus(campusId)
  }

  render () {
    const campuses = this.props.campuses
    return (
      <main>
        <AddCampus />
        <ul>
          {campuses.map(campus => {
            return (
              <li key={campus.id}>
                <h1>
                <span>
                  <button name={campus.id} onClick={this.handleClick}>X</button>
                </span>
                  <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                </h1>
                <img src={campus.imageUrl} />
              </li>
          )
          })}
        </ul>
      </main>
    )
  }

}

const mapStateToProps = (state) => ({
  campuses: state.campuses
})

const mapDispatchToProps = (dispatch) => ({
  loadCampuses: () => dispatch(getCampuses()),
  deleteCampus: (campusId) => dispatch(deleteCampus(campusId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CampusList)
