import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.state = {
      value: '',
    }
  }

  inputHandler(event) {
    this.setState({value: event.target.value});
  }

  submitHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input type="search" defaultValue={this.state.value} onInput={this.inputHandler} />
        </div>
      </form>
    );
  }
}

export default Search;
