import React from 'react';
import { Route , IndexRoute } from 'react-router';
import App from './App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventpage from './components/event/NewEventpage';
import HigherOderComponent from './utils/requireAuth';

export default(
	<Route path="/" component={App}>
	<IndexRoute component={Greetings} />
	<Route path="signup" component={SignupPage} />
	<Route path="login" component={LoginPage} />
	<Route path="new-event" component={HigherOderComponent(NewEventpage) } />
	</Route>
)