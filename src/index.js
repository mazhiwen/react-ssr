import _ from 'lodash';
import printMe from './print.js';
import {utiDate} from 'utility-mar';
import { cube } from './math.js';
import './style.less';
import React from 'react'
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import { Route,Router } from 'react-router-dom';
import history from 'router/history';
import reducers from './reducers';
import ReactDOM from 'react-dom'
// 主应用app入口文件
import App from './App.jsx';


let store = createStore(reducers,
  {
    login:{
      LoginStatus:false
    }
  }
);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);




//测试模块热更新  
/*  
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
*/


//测试 node环境
/*
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
*/