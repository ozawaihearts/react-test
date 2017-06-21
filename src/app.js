import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"

import HelloWorld from './components/helloWorld';
import Counter from './components/counter';

ReactDOM.render(
  <div>
    <HelloWorld />
    <Counter />
  </div>,
  document.getElementById('root')
);
