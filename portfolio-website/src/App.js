import React from 'react';
import './Normalized.css';
import Header from '../src/Components/Header';
import Contact from '../src/Components/Contact';
import Projects from '../src/Components/Projects';
import Resume from '../src/Components/Resume';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<Route exact path='/' component={Projects} />
			<Route exact path='/contact' component={Contact} />
			<Route exact path='/resume' component={Resume} />
		</div>
	);
}
export default App;
