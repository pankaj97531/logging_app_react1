import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware , compose } from 'redux';

import { Router , browserHistory } from 'react-router';
import routes from './routes';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import setAutharizationToken from './utils/setAutharizationToken';
import { setCurreentUser } from './actions/authAction';
import jwtDecode from 'jwt-decode';


const store=createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
if(localStorage.jwtToken){
  setAutharizationToken(localStorage.jwtToken);
  store.dispatch(setCurreentUser(jwtDecode(localStorage.jwtToken)));
}


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
)