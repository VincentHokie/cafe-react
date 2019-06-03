import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/containers/:containerId/details" component={InspectContainer} />
      </Switch>
      <ToastContainer />
    </div>
  </BrowserRouter>
);
