import React from 'react';

const MyHeader = () => {
  return (
    <div className="jumbotron">
      <h1>React Weather Forecasting</h1>
      <p>Using React, Redux and AJAX to create a weather forecasting application using public API <br /><strong>Note: </strong>This API search term only works for US cities and regions.</p>
      <p><i>Second note: this public API don't work over <strong>HTTPS</strong>, so no matter what you search for, it will be blank. You can clone my repo at <a href="https://github.com/yonathansebhastian/react-redux-ajax-weather">this link</a> and try it locally.</i></p>
    </div>
  );
};

module.exports = MyHeader;
