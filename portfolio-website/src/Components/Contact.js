import React from 'react';
import Picture from '../../src/img/profile.png';
import styled from 'styled-components';

const Container = styled.div`justify-content: row;`;

const Image = styled.img`
	width: 15%;
	height: 15%;
	display: flex;
	padding: 20px;
	align-content: center;
`;
const Contact = () => {
	return (
		<Container>
			<Image src={Picture} />
		</Container>
	);
};

export default Contact;
