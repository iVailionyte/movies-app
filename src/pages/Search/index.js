import React, { Component } from 'react';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(event) {
    this.setState({value: event.target.value});
  }

  submitHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type="search" value={this.state.value} onInput={this.inputHandler} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchPage;
