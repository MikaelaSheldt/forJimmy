import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateCampus } from '../reducers'

class UpdateCampus extends Component {

  constructor(props) {
    super(props)
    this.state = {
        name: '',
        description: '',
        imageUrl: '',
        address: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (event) {
    event.preventDefault()
    const campusId = this.props.campusId
    const oldCampus = this.props.campus
    let input = {}
    // only add things to input object that are changed
    Object.keys(this.state)
    .filter( prop => {return this.state[prop] !== ''}).forEach( prop => { input[prop] = this.state[prop]})
    // merge old campus with new campus to prevent validation errors
    const newStuff = {...oldCampus, ...input}
    this.props.update(newStuff, campusId)
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div >
        <label>
          NAME
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          DESCRIPTION
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          IMAGE URL
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          ADDRESS
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        </div>
        <button type="submit">UPDATE</button>
      </form>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  update: (newCampus, campusId) => dispatch(updateCampus(newCampus, campusId))
})

export default connect(null, mapDispatchToProps)(UpdateCampus)
