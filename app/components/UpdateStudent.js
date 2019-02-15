import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateStudent } from '../reducers'

class UpdateStudent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: 0,
      zodiac: '',
      campus: ''
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
    const studentId = this.props.studentId
    const oldStudent = this.props.student
    let input = {}
    Object.keys(this.state)
    .filter( prop => {return this.state[prop] !== ''}).forEach( prop => { input[prop] = this.state[prop]})
    const newStuff = {...oldStudent, ...input}
    this.props.update(newStuff, studentId)
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div >
        <label>
          FIRST NAME
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          LAST NAME
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
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
        <label>
          EMAIL
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          GPA
          <input
            type="number"
            name="gpa"
            value={this.state.gpa}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          ZODIAC
          <input
            type="text"
            name="zodiac"
            value={this.state.zodiac}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          CAMPUS
          <input
            type="text"
            name="campus"
            value={this.state.campus}
            onChange={this.handleInputChange}
          />
        </label>
        </div>
        <button type="submit">UPDATE</button>
      </form>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  update: (newStuff, studentId) => dispatch(updateStudent(newStuff, studentId))
})

export default connect(null, mapDispatchToProps)(UpdateStudent)
