import React from 'react';
import './Normalized.css';
import Header from '../src/Components/Header';
import Contact from '../src/Components/Contact';
import Projects from '../src/Components/Projects';
import Resume from '../src/Components/Resume';
import About from '../src/Components/About';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='container'>
			<div className='appCont'>
				<Header />
				<Route exact path='/' component={Projects} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/resume' component={Resume} />
				<Route exact path='/about' component={About} />
			</div>
		</div>
	);
}
export default App;
