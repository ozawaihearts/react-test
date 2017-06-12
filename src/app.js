import React from 'react';
import ReactDom from 'react-dom';
import App from './components/HelloWorld';
import Counter from './components/counter';

window.App = {
    render:  () => {
        ReactDom.render(
            <App />,
            document.getElementById('root')
        );
    }
};
