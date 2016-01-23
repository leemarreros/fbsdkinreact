'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'

class FbSdkReact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
};


ReactDOM.render(<FbSdkReact />, document.getElementById('react'));
