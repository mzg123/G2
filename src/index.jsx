import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import { BrowserRouter,Link , Switch, Route } from 'react-router-dom';
import store from './Store/Store.js';
//import Pc1 from './Views/pc1.jsx';
import GG from './Views/g2.jsx';
//import Pc2 from 'bundle-loader?lazy!./Views/pc1.jsx' 
import Bundle from './bundle.jsx';

//g2 
import G2 from '@antv/g2';
window.G2 = G2;
 


ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
            <GG />
      </BrowserRouter>
   </Provider>,
   document.getElementById('g2-con'));
