import React, { Component } from "react";

import "./error-boundary.css";

import ErrorImg from "../../assets/error.png";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary">
          <img src={ErrorImg} alt="Something went wrong" />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
