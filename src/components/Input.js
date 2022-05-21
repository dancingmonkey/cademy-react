import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    return (
      <div className="mx-auto mt-32 max-w-lg text-center">
        <input
          placeholder="Type something"
          className="m-1 rounded-sm border border-secondary bg-slate-800 p-1 outline-none"
          type="text"
          value={this.state.userInput}
          onChange={this.handleUserInput}
        />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}
