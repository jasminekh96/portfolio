import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import farmFresh from '../img/farmfresh.png';
import restPassport from '../img/res-passport.png';
import keyConMain from '../img/keyConMain.png';

const Containter = styled.div`
	display: flex;
	justify-content: center;
	font-family: 'PT Sans', sans-serif;
	flex-direction: column;
`;

const Cards = styled.div`
	width: 80%;
	//background-color: #dcdcdc;
	border: solid 2px #e6e6fa;
	border-radius: 10px;
	padding: 15px;
	margin-top: 15px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 1.8rem;
	//color: #e05839;
	color: black;
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
		font-size: 1.0rem
	}
	`;

const Desc = styled.p`
	color: black;
	display: flex;
	align-items: center;
	font-family: 'Poppins';
	text-align: center;
`;

const Projects = () => {
	return (
		<div>
			<Containter>
				<Cards>
					<Title>Key Conservation</Title>
					<Desc>
						Key Conservation is helping conservationists gain critical funding and global support through a mobile app
						(in development) that provides real-time updates on day-to-day campaigns.The Key App will have a scrolling
						live feed that updates as needs from conservationists occur around the world in real-time. Supporters will
						be transported to the front lines alongside our conservationists and be given actionable steps they can take
						to make a real difference right then and there.
					</Desc>
					<div>
						<img className='keyProjectImages' src={keyConMain} alt='Login-Page for Key Conservation' />
					</div>
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
					<div>
						<img className='projectImages' src={farmFresh} alt='Login-Page for Farm Fresh Produce' />
						{/* <img className='farmFreshImg' src={farmPage} alt='Farmers profile page' />
						<img className='farmFreshImg' src={farmInventory} alt='Invtentory of Farm' /> */}
					</div>
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
					<div>
						<img className='projectImages' src={restPassport} alt='Login-Page for Restaurant Passport' />
					</div>
					<ButtonLink to='https://github.com/bw-restaurant-passport-1/Front-end/tree/master/restaurant-passport'>
						View Code
					</ButtonLink>
					<ButtonLink to='https://restaurantpassportlogin.netlify.com/'>View Live</ButtonLink>
				</Cards>
			</Containter>
			<Containter>
				<Cards>
					<Title> Spotify Song Suggester</Title>
					<Desc>
						{' '}
						This project is meant to retrieve Spotify data about songs the user inputs/searches for, and use that data
						to pull and display important features of the song and other songs with similar features.
					</Desc>
					<ButtonLink to='https://github.com/Spotify-Song-Suggester/Backend-SSS'>View Code</ButtonLink>
					{/* <ButtonLink to='https://front-end-sss.now.sh/login'>View Live</ButtonLink> */}
				</Cards>
			</Containter>
			<Containter>
				{/* <Cards>
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
				</Cards> */}
			</Containter>
		</div>
	);
};

export default Projects;
