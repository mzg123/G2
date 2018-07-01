import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import { BrowserRouter,Link , Switch, Route } from 'react-router-dom';
import store from './Store/Store.js';
//import Pc1 from './Views/pc1.jsx';
//import Pc2 from './Views/pc2.jsx';
//import Pc2 from 'bundle-loader?lazy!./Views/pc1.jsx' 
import Bundle from './bundle.jsx';
 

class Header extends React.Component {
    render() {
	    return (
            <div>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/1'>pc1</Link></li>
                <li><Link to='/2'>pc2</Link></li>
              </ul>
            </div>
        );
    }
}
const Pc2 = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
console.log(store.getState());
	    const {view, reducer, stateKey, initialState} = require('./component/pc2');
	    const state = store.getState();
	    store.reset(combineReducers({
	      ...store._reducers,
	      reducer2: reducer
	    }), {
	      ...state,
	      reducer2: {
	      [stateKey]: state.reducer2?state.reducer2[stateKey]:initialState
		}
	    });

            cb(require('./Views/pc2.jsx'));
        });
    }}>
        {(Pc2) => <Pc2 {...props}/>}
    </Bundle>
);
const Pc1 = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {

	    const {view, reducer, stateKey, initialState} = require('./component/pc1');
	    const state = store.getState();
	    store.reset(combineReducers({
	      ...store._reducers,
	      reducer1: reducer
	    }), {
	      ...state,
	      reducer1: {
	      [stateKey]: state.reducer1?state.reducer1[stateKey]:initialState
		}
	    });

console.log(store.getState());
            cb(require('./Views/pc1.jsx'));
        });
    }}>
        {(Pc1) => <Pc1 {...props}/>}
    </Bundle>
);
class Main extends React.Component {
    render() {
	    return (
            <div>
                <Switch>
                  <Route exact path='/2' 
                        component={Pc2}
                    />
                  <Route path='/1' component={Pc1}/>
                </Switch>
            </div>
        );
    }
}
class App extends React.Component {
    render() {
	    return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
            <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById('g2-con'));
