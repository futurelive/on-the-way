import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * componentDidCatch did not work in create-react-app
 * https://github.com/facebook/react/issues/12740
 */

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catchError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      catchError: true,
    });
  }

  render() {
    const { catchError } = this.state;
    const { children } = this.props;
    if (catchError) return <div>Error</div>;
    return <>{ children }</>;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
