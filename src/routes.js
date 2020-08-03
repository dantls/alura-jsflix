import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Video from './pages/Video';
import Category from './pages/Category';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new/video" exact component={Video} />
        <Route path="/new/category" exact component={Category} />
        <Route component={() => (<div>Página 404</div>)} />
      </Switch>
    </BrowserRouter>
  );
}
