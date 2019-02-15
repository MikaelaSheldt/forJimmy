import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addCampus } from '../reducers'

class AddCampus extends Component {

  constructor() {
    super()
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
    const input = this.state
    this.props.add(input)
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
          ADDRESS
          <input
            type="text"
            name="address"
            value={this.state.address}
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
  add: (campus) => dispatch(addCampus(campus))
})

export default connect(null, mapDispatchToProps)(AddCampus)
