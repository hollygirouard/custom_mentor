import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import AppContainer from './AppContainer';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
