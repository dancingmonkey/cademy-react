import React from 'react';
import { Child } from './Child';
import { Sibling } from './Sibling';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return (
      <div className="mx-auto mt-32 max-w-lg">
        <Sibling name={this.state.name} />
        <Child onChange={this.changeName} />
      </div>
    );
  }
}
