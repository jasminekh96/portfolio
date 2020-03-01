import React from 'react';
import Picture from '../../src/img/profile.png';
import styled from 'styled-components';

const Container = styled.div`
	justify-content: row;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 20px;
	border: 1px solid black;
`;

const Image = styled.img`
	width: 20%;
	height: 15%;
	display: flex;
	padding: 20px;
	align-content: center;
	border: 1px solid orange;
	margin-right: 10px;
`;
const Contact = () => {
	return (
		<Container>
			<Image src={Picture} />
			<header className='contactHeader'>
				<h4>FULL STACK WEB DEVELOPER</h4>
				<div className='social'>
					<div className='item'>
						<i className='fas fa-phone-square-alt' />
						<span>631.245.4439</span>
					</div>
					<div className='item'>
						<i className='fas fa-map-marker-alt' />
						<span>Long Island, NY</span>
					</div>
					<div className='item'>
						<a href='mailto: jasminekh96@gmail.com'>
							<i className='fas fa-envelope' />

							<span>jasminekh96@gmail.com</span>
						</a>
					</div>
					<div className='item'>
						<a href='https://github.com/jasminekh96'>
							<i className='fab fa-github-square' />
							<span>github.com/jasminekh96</span>
						</a>
					</div>
					<div className='item'>
						<a href='https://www.linkedin.com/in/jasmine-kasheboon-khoury/'>
							<i className='fab fa-linkedin' />
							<span>linkedin.com/in/jasmine-kasheboon-khoury</span>
						</a>
					</div>
				</div>
			</header>
		</Container>
	);
};

export default Contact;
