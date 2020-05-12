import React from 'react';
import farmFresh from '../img/farmfresh.png';
import restPassport from '../img/res-passport.png';
import keyConMain from '../img/key-login.png';
import keyFeed from '../img/key-feed.png';
import keyProfile from '../img/key-profile.png';
import spotifySong from '../img/spotify-icon.png';

const Projects = () => {
	return (
		<div>
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'>Key Conservation</h1>
					<a className='buttonLink' href='https://github.com/Lambda-School-Labs/key-conservation-mobile'>
						View Code
					</a>
					<p className='projectDesc'>
						Key Conservation is helping conservationists gain critical funding and global support through a mobile app
						(in development) that provides real-time updates on day-to-day campaigns. The Key App will have a scrolling
						live feed that updates as needs from conservationists occur around the world in real-time. Supporters will
						be transported to the front lines alongside our conservationists and be given actionable steps they can take
						to make a real difference right then and there.
						<p className='projectDesc'>
							Collaborated with a React team of 7 and a Android Devloper. Functioned as a Frontend Web Developer using
							programs such as React Native, Expo, and Redux.
						</p>
					</p>
					<div className='keyImages'>
						<img className='keyProjectImages' src={keyConMain} alt='Login-Page for Key Conservation' />
						<img className='keyProjectImages' src={keyFeed} alt='Login-Page for Key Conservation' />
						<img className='keyProjectImages' src={keyProfile} alt='Login-Page for Key Conservation' />
					</div>
					{/* <a className='buttonLink' href='https://github.com/Lambda-School-Labs/key-conservation-mobile'>
						View Code
					</a> */}
				</div>
			</div>
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'>Farm Fresh Produce</h1>
					<a className='buttonLink' href='https://github.com/farmFreshProduce/frontEnd'>
						View Code
					</a>
					<a className='buttonLink' href='https://farmfreshapp.netlify.com/'>
						View Live
					</a>
					<p className='projectDesc'>
						The point of this app is to supply shoppers with the option to see local farms inventory and for local
						farmers to post their inventory onto a site for locals to see what's available. These products being
						Non-GMO, pesticide/herbicide free, and organic.
					</p>
					<p className='projectDesc'>
						Collaborated with a React team of 4 and functioned as a React II Frontend Developer using React, ContextAPI,
						and implementing all CRUD applications (create, read, update, delete).
					</p>
					<div>
						<img className='projectImages' src={farmFresh} alt='Login-Page for Farm Fresh Produce' />
						{/* <img className='farmFreshImg' src={farmPage} alt='Farmers profile page' />
						<img className='farmFreshImg' src={farmInventory} alt='Invtentory of Farm' /> */}
					</div>
					{/* <a className='buttonLink' href='https://github.com/farmFreshProduce/frontEnd'>
						View Code
					</a>
					<a className='buttonLink' href='https://farmfreshapp.netlify.com/'>
						View Live
					</a> */}
				</div>
			</div>
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'>Restaurant Passport </h1>
					<a
						className='buttonLink'
						href='https://github.com/bw-restaurant-passport-1/Front-end/tree/master/restaurant-passport'>
						View Code
					</a>
					<a className='buttonLink' href='https://restaurantpassportlogin.netlify.com/'>
						View Live
					</a>
					<p className='projectDesc'>
						View the restaurants you've been to, have suggestions at your fingertips for any occasion and taste, and
						brag to your friends about all the cool eateries you've been to.
					</p>
					<p className='projectDesc'>
						Collaborated with a React team of 6 and functioned as a React I Frontend Developer using React, CSS, and
						React Hook Form.
					</p>
					<div>
						<img className='projectImages' src={restPassport} alt='Login-Page for Restaurant Passport' />
					</div>
					{/* <a
						className='buttonLink'
						href='https://github.com/bw-restaurant-passport-1/Front-end/tree/master/restaurant-passport'>
						View Code
					</a>
					<a className='buttonLink' href='https://restaurantpassportlogin.netlify.com/'>
						View Live
					</a> */}
				</div>
			</div>
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'> Spotify Song Suggester</h1>
					<a className='buttonLink' href='https://github.com/Spotify-Song-Suggester/Backend-SSS'>
						View Code
					</a>
					<p className='projectDesc'>
						This project is meant to retrieve Spotify data about songs the user inputs/searches for, and use that data
						to pull and display important features of the song and other songs with similar features.
					</p>
					<p className='projectDesc'>
						Developed an API as a Backend Engineer in a cross-functional environment for the Data Science team using
						Express, PostgresSQL, and JWT.
					</p>
					<div>
						<img className='projectImages' src={spotifySong} alt='Spotify icon with person listening to music' />
					</div>
					{/* <a className='buttonLink' href='https://github.com/Spotify-Song-Suggester/Backend-SSS'>
						View Code
					</a> */}
					{/* <ButtonLink to='https://front-end-sss.now.sh/login'>View Live</ButtonLink> */}
				</div>
			</div>
			<div className='projectsContainer'>
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
			</div>
		</div>
	);
};

export default Projects;
