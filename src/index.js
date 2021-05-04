import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './components/Context';
import './index.css';
import App from './components/App';

ReactDOM.render(
	<Provider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,

	document.getElementById('root')
);
