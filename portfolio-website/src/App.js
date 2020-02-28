import React from 'react';
import './Normalized.css';
import Header from '../src/Components/Header';
import Contact from '../src/Components/Contact';
import Projects from '../src/Components/Projects';
import Resume from '../src/Components/Resume';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	flex-wrap: wrap;
	max-width: 1200px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	text-decoration: none;
`;

function App() {
	return (
		<Container className='container'>
			<Header />
			<Route exact path='/' component={Projects} />
			<Route exact path='/contact' component={Contact} />
			<Route exact path='/resume' component={Resume} />
		</Container>
	);
}
export default App;
