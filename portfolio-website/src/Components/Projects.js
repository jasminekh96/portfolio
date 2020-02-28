import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Containter = styled.div`
	display: flex;
	justify-content: center;
	font-family: 'PT Sans', sans-serif;
	flex-direction: row;
`;

const Cards = styled.div`
	width: 80%;
	background-color: #dcdcdc;
	border-radius: 10px;
	padding: 15px;
	margin-top: 15px;
	margin-bottom: 20px;
`;

const Title = styled.h1`
	font-size: 1.8rem;
	color: #e05839;
`;

const ButtonLink = styled(Link)`
	font-size: .8rem;
	padding: 10px;
	border: 2px solid red;
	border-radius: 8px;
	display: inline-block;
	text-decoration: none;
	background-color: white;
	color: #e05839;
	&:hover{
		background-color: #dcdcdc;
		color: red;
	}
	`;

const Desc = styled.p`color: black;`;

const Projects = () => {
	return (
		<div>
			<Containter>
				<Cards>
					<Title>Key Conservation</Title>
					<Desc>
						Key Conservation is helping conservationists gain critical funding and global support through a mobile app
						that provides real-time updates on day-to-day campaigns. With the use of programs such as React Native,
						expo, redux among many more I was apart of a team of eight people preparing this project to be deployed to
						the Google PlayStore and the App Store in June.
					</Desc>
					<ButtonLink to='https://github.com/Lambda-School-Labs/key-conservation-mobile'>View Code</ButtonLink>
				</Cards>
			</Containter>
			<Containter>
				<Cards>
					<Title>Farm Fresh Produce</Title>
					<Desc>
						The point of this app is to supply shoppers with the option to see local farms inventory and for local
						farmers to post their inventory onto a site for locals to see what's available. These products being
						Non-gmo, pesticide/herbicide free, and organic.
					</Desc>
					<ButtonLink to='https://github.com/farmFreshProduce/frontEnd'>View Code</ButtonLink>
					<ButtonLink to='https://farmfreshapp.netlify.com/'>View Live</ButtonLink>
				</Cards>
			</Containter>
			<Containter>
				<Cards>
					<Title>Restaurant Passport </Title>
					<Desc>
						View the restaurants you've been to, have suggestions at your fingertips for any occasion and taste, and
						brag to your friends about all the cool eateries you've been to.
					</Desc>
					<ButtonLink to='https://github.com/bw-restaurant-passport-1/Front-end/tree/master/restaurant-passport'>
						View Code
					</ButtonLink>
					<ButtonLink to='https://restaurantpassportlogin.netlify.com/'>View Live</ButtonLink>
				</Cards>
			</Containter>
			<Containter>
				<Cards>
					<Title> Spotify Song Suggester</Title>
					<Desc>Spotify Song Suggester</Desc>
					<ButtonLink to='https://github.com/Spotify-Song-Suggester/Backend-SSS'>View Code</ButtonLink>
					<ButtonLink to='https://front-end-sss.now.sh/login'>View Live</ButtonLink>
				</Cards>
			</Containter>
			<Containter>
				<Cards>
					<Title>Secret Family Recipes</Title>
					<Desc>SFR</Desc>
					<ButtonLink to='https://github.com/BuildWeek-SecretFamilyRecipes/SecretFamilyRecipesUI'>View Code</ButtonLink>
					<ButtonLink to='https://bw-secretfamilyrecipes.netlify.com/index.html'>View Live</ButtonLink>
				</Cards>
			</Containter>
			<Containter>
				<Cards>
					<Title>TODO LIST</Title>
					<Desc>Todo</Desc>
					<ButtonLink to='https://github.com/jasminekh96/React-Todo/tree/Jasmine-KasheboonKhoury'>View Code</ButtonLink>
					<ButtonLink to='https://to-dolists.netlify.com/'>View Live</ButtonLink>
				</Cards>
			</Containter>
			<Containter>
				<Cards>
					<Title>Crypto Tracker</Title>
					<Desc>Crypto Tracker</Desc>
					<ButtonLink to='https://github.com/jasminekh96/dark-mode/tree/Jasmine-KasheboonKhoury'>View Code</ButtonLink>
					<ButtonLink to='need link'>Need link</ButtonLink>
				</Cards>
			</Containter>
		</div>
	);
};

export default Projects;
