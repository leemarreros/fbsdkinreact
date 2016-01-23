'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId : '1528085177508710',
        xfbml : true,
        version : 'v2.'
      });

     (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }

  render() {
    return (
       <div>Login Process</div>
    );
  }

};