import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class PropertiesPage extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}
