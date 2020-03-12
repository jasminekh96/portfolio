import React from 'react';
import Picture from '../../src/img/profile.png';
import styled from 'styled-components';

const Contact = () => {
	return (
		<div className='contactContainer'>
			<img className='imgContact' src={Picture} />
			<header className='contactHeader'>
				<h4>FULL STACK WEB DEVELOPER</h4>
				<div className='social'>
					<div className='item-contact'>
						<i className='fas fa-phone-square-alt' />
						<span>631.245.4439</span>
					</div>
					<div className='item-contact'>
						<i className='fas fa-map-marker-alt' />
						<span>Long Island, NY</span>
					</div>
					<div className='item-contact'>
						<a href='mailto: jasminekh96@gmail.com'>
							<i className='fas fa-envelope' />

							<span>jasminekh96@gmail.com</span>
						</a>
					</div>
					<div className='item-contact'>
						<a href='https://github.com/jasminekh96'>
							<i className='fab fa-github-square' />
							<span>github.com/jasminekh96</span>
						</a>
					</div>
					<div className='item-contact'>
						<a href='https://www.linkedin.com/in/jasmine-kasheboon-khoury/'>
							<i className='fab fa-linkedin' />
							<span>linkedin.com/in/jasmine-kasheboon-khoury</span>
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Contact;
