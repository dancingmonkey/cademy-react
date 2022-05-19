import React from 'react';
import PropTypes from 'prop-types';

export class Sibling extends React.Component {
  render() {
    let name = this.props.name;
    return (
      <div className='my-4'>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don&apos;t you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}

Sibling.propTypes = {
  name: PropTypes.string,
}
