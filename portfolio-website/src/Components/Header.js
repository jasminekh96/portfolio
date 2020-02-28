import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Container = styled.div`
	border-radius: 10px;
	height: 20vh;
	background: #dcdcdc;
	font-family: 'PT Sans', sans-serif;
	color: #e05839;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const HeaderTitle = styled(Link)`
	font-size: 2.5em;
	color: #e05839;
	text-decoration: none;
`;

const Nav = styled.nav`
	display: flex;
	color: white;
	margin-left: 100px;
	color: #e05839;
	justify-content: space-around;
`;

const StyledLink = styled(NavLink)`
	font-size: 1.2rem;
	color: #e05839;
	text-decoration: none;
	padding-left: 30px;

`;

const Header = () => {
	return (
		<Container>
			<HeaderTitle to='/'>
				<p>Jasmine Kasheboon Khoury</p>
			</HeaderTitle>
			<Nav>
				{/* <A href='/'>Projects</A>
				<A href='/resume'>Resume</A>
				<A href='/contact'>Contact</A> */}
				<StyledLink to='/'>Projects</StyledLink>
				<StyledLink to='/resume'>Resume</StyledLink>
				<StyledLink to='/contact'>Contact</StyledLink>
			</Nav>
			<div>
				<a href='https://github.com/jasminekh96'>
					<i class='fab fa-github-square' />
				</a>
			</div>
			<div>
				<a href='https://www.linkedin.com/in/jasmine-kasheboon-khoury/'>
					<i class='fab fa-linkedin' />
				</a>
			</div>
		</Container>
	);
};

export default Header;
