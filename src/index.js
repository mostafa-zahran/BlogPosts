import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PostsIndex from './components/posts_index';
import Promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Route path="/" component={PostsIndex}/>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
