// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Components
import App from './components/App';

// Store
import configureStore from './store';

// Styles
import './styles/styles.scss';

const store = configureStore();

ReactDOM.render(
	<Provider store = {store}> 
		<App /> 
	</Provider>, document.getElementById('app')
);
