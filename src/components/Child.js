import React from 'react';
import PropTypes from 'prop-types';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div className="">
        <select
          id="great-names"
          onChange={this.handleChange}
          className="rounded-sm bg-secondary p-1 text-primary outline-none">
          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

Child.propTypes = {
  onChange: PropTypes.func,
};
