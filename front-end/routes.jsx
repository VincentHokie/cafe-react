import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MenuAdd from './components/containers/general/menu_add.jsx';
import MenuList from './components/containers/general/menu_list.jsx';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={MenuList} />
        <Route exact path="/menu" component={MenuList} />
        <Route exact path="/menu/add" component={MenuAdd} />
      </Switch>
      <ToastContainer />
    </div>
  </BrowserRouter>
);
