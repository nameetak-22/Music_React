import React from 'react';
import img from './mt.png';
import './styleabout.css'
const About = () => {
return (

    <div class="main">
        <div class="top_section">
			<h5>MFN&nbsp;&nbsp;<i class="fa fa-headphones" aria-hidden="true"></i></h5>
		</div>
		<hr noshade size="30%" color="#000000"/>
		<div class="about">
		<h1><u>About Us</u></h1>
		</div>
		<div class="content">
			<p>
			Established in 2021,MFN music player strives to achieve a seamless music listening experience.
			<br/>We,here at MFN live by the motto Music for Never Ending Entertainment and we hope to spread this by providing an ad-free music listening environment.
		</p>
		</div>
		<img src={img} class="image"></img>
	</div>

);
};

export default About;

//"font-size:1.3em;;  text-align: left; margin-top: 0.5%; padding-left: 2%;padding-right:60% ;"