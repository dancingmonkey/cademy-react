import React from 'react';
import PropTypes from 'prop-types';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div className="mx-auto mt-32 max-w-lg text-center">
        <h1>Cute Guinea Pigs</h1>
        <img src={src} className="mx-auto" />
      </div>
    );
  }
}

GuineaPigs.propTypes = {
  src: PropTypes.string,
};
