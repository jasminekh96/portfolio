import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Container = styled.div`
	height: 20vh;
	background: #dcdcdc;
	font-family: 'PT Sans', sans-serif;
	color: #e05839;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const HeaderTitle = styled(Link)`
	font-size: 2.5em;
	color: #e05839;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	color: white;
	justify-content: flex-end;
	margin-left: 100px;
	color: #e05839;
`;

const StyledLink = styled(NavLink)`
	font-size: 1.2rem;
	color: #e05839;
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
		</Container>
	);
};

export default Header;
