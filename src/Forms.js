import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }


  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  PressEnter = () => {
    document.addEventListener("keypress", function (e) {
      if (e.key === 'Enter') {
        var btn = document.querySelector("#submit");
        btn.click(this.submitForm);
      }
    });
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
        <input type="button" value="Submit" id="submit" onClick={this.submitForm}/>
      </form>

    );
  }


}
export default Form;