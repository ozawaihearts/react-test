import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import createStoreWithMiddleware from "./store/ConfigureStore"

import HelloWorld from './components/helloWorld';
import Counter from './components/counter';
import TestRedux from './components/testRedux';

const store = createStoreWithMiddleware();

ReactDOM.render(
  <Provider store={store}>
    <TestRedux />
  </Provider>,
  document.getElementById('root')
);
