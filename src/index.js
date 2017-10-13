import React, {Component} from 'react';
import {render} from 'react-dom';
import store from './store/index.js';
import {Provider} from 'react-redux';
import Routes from './routes';
// import 'babel-polyfill';

import "./style.css";

import { Menu, Icon, Button } from 'antd';

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

render(<App />, document.getElementById('root'));
