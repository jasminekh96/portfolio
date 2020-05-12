import React from 'react';

function Resume() {
	return (
		<div className='container'>
			{/* <header className='header'>
				<h1>JASMINE KASHEBOON KHOURY</h1>
				<h4>FULL STACK WEB DEVELOPER</h4>
				<div className='social'>
					<div className='top-item'>
						<div className='item'>
							<i className='fas fa-phone-square-alt' />
							<span>631.245.4439 |</span>
						</div>
						<div className='item'>
							<i className='fas fa-map-marker-alt' />
							<span>Long Island, NY |</span>
						</div>
						<div className='item'>
							<a href='mailto: jasminekh96@gmail.com'>
								<i className='fas fa-envelope' />

								<span>jasminekh96@gmail.com</span>
							</a>
						</div>
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
			</header> */}
			<div className='card'>
				<h2>SKILLS AND LANGUAGES</h2>
				<article class='skills'>
					<section class='skill'> JavaScript </section>
					<section class='skill'>NodeJS</section>
					<section class='skill'>React Native</section>
					<section class='skill'>HTML5</section>
					<section class='skill'>CSS</section>
					<section class='skill'>Redux</section>
					<section class='skill'>React</section>
					<section class='skill'>Express</section>
					<section class='skill'>PostgresSQL</section>
					<section class='skill'>JEST</section>
					<section class='skill'>Knex</section>
					<section class='skill'>Formik</section>
					<section class='skill'>YUP</section>
				</article>
			</div>
			<div className='card'>
				<h2>PROJECTS</h2>
				<article class='project'>
					<a href='https://github.com/Lambda-School-Labs/key-conservation-mobile'>
						<h4 className='project-title'>KEY CONSERVATION</h4>
					</a>
					<p className='projectInfo'>React Native | Expo | Redux | CSS </p>
					<ul className='info'>
						<li>
							Key Conservation is helping conservationists gain critical funding and global support through a mobile app
							that provides real-time updates on day-to-day campaigns.
						</li>
						<li>
							Collaborated with a React team of 7 and functioned as a Frontend Web Developer creating a connect feature
							allowing supporters and conservationists the ability to follow each other, as well as updating the
							Frontend with CSS.
						</li>
					</ul>
					{/* <a href='https://github.com/farmFreshProduce/frontEnd'>
					<h4>FARM FRESH PRODUCE</h4>
				</a>
				<p className='projectInfo'>Lambda School</p>
				<ul className='info'>
					<li>
						Farm Fresh Produce supplies shoppers with the option to see local farms inventory and for local farmers to
						post their inventory for locals to see what's available. These products being Non-GMO, pesticide/herbicide
						free, and organic.
					</li>
					<li>
						Collaborated with a React team of 4 and functioned as a React II Frontend Developer using React,
						ContextAPI, and implementing all CRUD applications (create, read, update, delete).
					</li>
				</ul> */}
					<a href='https://github.com/Spotify-Song-Suggester/Backend-SSS'>
						<h4 className='project-title'>SPOTIFY SONG SUGGESTER</h4>
					</a>
					<p className='projectInfo'>Express | PostgresSQL | JEST | Insomnia | Knex </p>
					<ul className='info'>
						<li>
							Spotify Song Suggester is meant to retrieve Spotify data about songs the user inputs/searches for, and use
							that data to pull and display important features of the song and other songs with similar features.
						</li>
						<li>
							Developed an API as a Backend Engineer in a cross-functional environment for the Data Science team that
							was utlized by the Frontend Team of 4.
						</li>
					</ul>
				</article>
			</div>
			<div className='card'>
				<h2>EXPERIENCE</h2>
				<article class='experience'>
					<h4>TEAM LEAD</h4>
					<p className='experienceInfo'>Lambda School/Remote/October 2019-Present</p>
					<ul className='responsibilities'>
						<li>
							Served as teaching assistant, leading a team of 10+ students in daily code challenges in JS and React.
						</li>
						<li>Provided daily feedback and issue resolution of curriculum through about 100 slack messages weekly.</li>
						<li>Delivered one-on-one feedback and code review on a weekly basis, providing debugging solutions.</li>
					</ul>
					<h4>NON-TEACHING ADJUNCT</h4>
					<p className='experienceInfo'>CUNY City College of NY/New York, NY/August 2018-December 2019</p>
					<ul className='responsibilities'>
						<li>Grading 100 midterm and final exams from 150 students of the Anthropology 101 course.</li>
					</ul>
				</article>
			</div>
			<div className='card'>
				<h2>EDUCATION</h2>
				<article class='education'>
					<h4>LAMBDA SCHOOL</h4>
					<p className='educationInfo'>Full Stack Web Development/Remote/September 2019-Present</p>
					<h4>CUNY City College of New York</h4>
					<p className='educationInfo'>B.A Anthropology/New York, NY/May 2018</p>
				</article>
			</div>
		</div>
	);
}
// 		<div className='container'>
// 			{/* <header className='header'>
// 				<h1>JASMINE KASHEBOON KHOURY</h1>
// 				<h4>FULL STACK WEB DEVELOPER</h4>
// 				<div className='social'>
// 					<div className='item'>
// 						<i className='fas fa-phone-square-alt' />
// 						<span>631.245.4439</span>
// 					</div>
// 					<div className='item'>
// 						<i className='fas fa-map-marker-alt' />
// 						<span>Long Island, NY</span>
// 					</div>
// 					<div className='item'>
// 						<a href='mailto: jasminekh96@gmail.com'>
// 							<i className='fas fa-envelope' />

// 							<span>jasminekh96@gmail.com</span>
// 						</a>
// 					</div>
// 					<div className='item'>
// 						<a href='https://github.com/jasminekh96'>
// 							<i className='fab fa-github-square' />
// 							<span>github.com/jasminekh96</span>
// 						</a>
// 					</div>
// 					<div className='item'>
// 						<a href='https://www.linkedin.com/in/jasmine-kasheboon-khoury/'>
// 							<i className='fab fa-linkedin' />
// 							<span>linkedin.com/in/jasmine-kasheboon-khoury</span>
// 						</a>
// 					</div>
// 				</div>
// 			</header> */}
// 			<div className='card'>
// 				<h2>SKILLS AND LANGUAGES</h2>
// 				<article class='skills'>
// 					<section class='skill'> JavaScript </section>
// 					<section class='skill'>NodeJS</section>
// 					<section class='skill'>React Native</section>
// 					<section class='skill'>HTML5</section>
// 					<section class='skill'>CSS</section>
// 					<section class='skill'>Redux</section>
// 					<section class='skill'>React</section>
// 					<section class='skill'>Express</section>
// 					<section class='skill'>PostgresSQL</section>
// 					<section class='skill'>JEST</section>
// 					<section class='skill'>Formik</section>
// 					<section class='skill'>YUP</section>
// 				</article>
// 			</div>
// 			<div className='card'>
// 				<h2>EXPERIENCE</h2>
// 				<article class='experience'>
// 					<h4>TEAM LEAD</h4>
// 					<p className='experienceInfo'>Lambda School/Remote/October 2019-Present</p>
// 					<ul className='responsibilities'>
// 						<li>
// 							Served as teaching assistant, leading a team of 10+ students in daily code challenges in JS and React
// 						</li>
// 						<li>Provided daily feedback and issue resolution of all curriculum through slack or code review</li>
// 						<li>Delivered one-on-one feedback and code review on a weekly basis, providing debugging solutions</li>
// 					</ul>
// 					<h4>NON-TEACHING ADJUNCT</h4>
// 					<p className='experienceInfo'>CUNY City College of NY/New York, NY/August 2018-December 2019</p>
// 					<ul className='responsibilities'>
// 						<li>Grading exams and essays from students of the Anthropology 101 course</li>
// 					</ul>
// 				</article>
// 			</div>
// 			<div className='card'>
// 				<h2>PROJECTS</h2>
// 				<article class='project'>
// 					<a className='linkProjects' href='https://github.com/Lambda-School-Labs/key-conservation-mobile'>
// 						<h4>KEY CONSERVATION</h4>
// 					</a>
// 					<p className='projectInfo'>Lambda School</p>
// 					<ul className='info'>
// 						<li>
// 							Key Conservation is helping conservationists gain critical funding and global support through a mobile app
// 							that provides real-time updates on day-to-day campaigns.
// 						</li>
// 						<li>
// 							Collaborated with a React team of 7 and a Android Devloper. Functioned as a Frontend Web Developer using
// 							programs such as React Native, Expo, and Redux.
// 						</li>
// 					</ul>
// 					<a href='https://github.com/farmFreshProduce/frontEnd'>
// 						<h4>FARM FRESH PRODUCE</h4>
// 					</a>
// 					<p className='projectInfo'>Lambda School</p>
// 					<ul className='info'>
// 						<li>
// 							Farm Fresh Produce supplies shoppers with the option to see local farms inventory and for local farmers to
// 							post their inventory for locals to see what's available. These products being Non-GMO, pesticide/herbicide
// 							free, and organic.
// 						</li>
// 						<li>
// 							Collaborated with a React team of 4 and functioned as a React II Frontend Developer using React,
// 							ContextAPI, and implementing all CRUD applications (create, read, update, delete).
// 						</li>
// 					</ul>
// 					{/* <a className='linkProjects' href='https://github.com/Spotify-Song-Suggester/Backend-SSS'>
// 						<h4>SPOTIFY SONG SUGGESTER</h4>
// 					</a>
// 					<p className='projectInfo'>Lambda School</p>
// 					<ul className='info'>
// 						<li>
// 							This project is meant to retrieve Spotify data about songs the user inputs/searches for, and use that data
// 							to pull and display important features of the song and other songs with similar features.
// 						</li>
// 						<li>
// 							Developed an API as a Backend Engineer in a cross-functional environment for the Data Science team using
// 							Express, PostgresSQL, and JWT.
// 						</li>
// 					</ul> */}
// 				</article>
// 			</div>
// 			<div className='card'>
// 				<h2>EDUCATION</h2>
// 				<article class='education'>
// 					<h4>LAMBDA SCHOOL</h4>
// 					<p className='educationInfo'>Full Stack Web Development/Remote/September 2019-Present</p>
// 					<h4>CUNY City College of New York</h4>
// 					<p className='educationInfo'>B.A Anthropology/New York, NY/May 2018</p>
// 				</article>
// 			</div>
// 		</div>
// 	);
// }

export default Resume;
