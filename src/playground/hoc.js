// Higher Order Component (HOC) - A component (HOC) that renders another component
// Advantages
  // Reuse code
  // Render hijacking
  // Prop manipulation
  // Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin  && <p>This is private info. Please don't share!</p> }
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'));

// Challenge
  // requireAuthentication
  const requireAuthentication = (WrappedComponent) => {
    return (props) => (
      <div>
        { props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>You have to be logged in to access this information</p>
        )}
      </div>
    );
  }

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details"/>, document.getElementById('app'));
