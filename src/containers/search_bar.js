import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term:'' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    
    //Fetch weather data here!
  }

  render () {
    return (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}>
        <input placeholder="Get the forecast of your city here"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-warning">Submit</button>
        </span>
      </form>
    )
  }
}
