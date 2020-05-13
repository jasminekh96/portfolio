import React from 'react';
import oliveTree from '../img/olive.jpg';

const About = () => {
	return (
		<div className='aboutContainer'>
			<img className='imgAbout' src={oliveTree} alt='Olive Tree branches' />
			<header className='aboutHeader'>
				<p className='aboutPrgh'>
					From a Bachelor's Degree in Anthropology to a Full Stack Web Developer at Lambda School, I design and
					implement websites that are responsive and accessible to all people. I utilize my skills in programming
					languages and frameworks such as React Native, ReactJS, JavaScript, HTML5, CSS, LESS, Redux, and Formik.
				</p>
				<p className='aboutPrgh'>
					In my free time, I like to take hikes, cook, or read a book that teaches me about another era, country, or
					person's life. When able to, I like to visit my family in Haifa, Israel and learn more about our language,
					Arabic, and our culture.
				</p>
			</header>
		</div>
	);
};

export default About;
