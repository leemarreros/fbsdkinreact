'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class FbSdkReact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
};


ReactDOM.render(<FbSdkReact />, document.getElementById('react'));
