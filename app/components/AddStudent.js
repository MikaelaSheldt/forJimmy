import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addStudent } from '../reducers'

class AddStudent extends Component {

  constructor() {
    super()
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
    const input = this.state
    this.props.add(input)
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
        <button type="submit">ADD</button>
      </form>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  add: (input) => dispatch(addStudent(input))
})

export default connect(null, mapDispatchToProps)(AddStudent)
