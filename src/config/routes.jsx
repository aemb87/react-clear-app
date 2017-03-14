import React from 'react';
import {Router, IndexRoute} from 'react-router';

import MainView from './components/MainView';
import SubView from './components/SubView';

export default (
  <Route path="/" component={MainView}>
    <Route path="//:listId" component={SubView} />
    <IndexRoute component={MainView} />
  </Route>
);