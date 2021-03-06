import React, { Component, PropTypes } from 'react';

export default class LeasesPage extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  render() {
    const { children } = this.props;
    return (
      <div className="leasesPage">
        {children}
      </div>
    );
  }
}
