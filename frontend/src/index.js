import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css'; 
import './styles/index.less'
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './app/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


