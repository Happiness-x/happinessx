import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("App Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-center px-6">
          <div>
            <h1 className="text-3xl text-cyan-300 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Please refresh the page. If the issue persists, contact support.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
