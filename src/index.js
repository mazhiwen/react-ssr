import _ from 'lodash';
import printMe from './print.js';
import {utiDate} from 'utility-mar';
import { cube } from './math.js';
import './style.css';
import jspdf from 'jspdf';
import React from 'react'

import ReactDOM from 'react-dom'


console.log(new jspdf());
function component() {
  console.log(utiDate);
  var element = document.createElement('div');
  var btn = document.createElement('button');
  
  cube(5);
  
  console.log(
    _.join(['dddddddd', 'module', 'loaded!'], ' ')
  );
  [1, 2, 3].map((n) => {
    console.log(n);
  });  
  btn.innerHTML = 'fuckindex!';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
  
  
  



  
}

document.body.appendChild(component());





 
// class MyComponent extends React.Component {
//   render() {
//     return <div>Hello World</div>;
//   }
// }
 
// ReactDOM.render(<MyComponent />, node);






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