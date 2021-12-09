import React from 'react';
import './stylecontact.css'
import img from './Happy.png';
const Contact = () => {
return (
<div class="main">
        <div class="top_section">
              <h5>MFN&nbsp;&nbsp;<i class="fa fa-headphones" aria-hidden="true"></i></h5>
		</div>
		<div class="contact">
        <h1>Contact Us</h1>
		<p>
			MFN Headquarters
		</p>
        <p>
			121 Rainbow Road
		</p>
        <p>
			Bangalore,Karnataka
		</p>
        <p>
			India-560106
		</p>
        <p>
			<b>Email:</b>mfn@musicplayer.com
		</p>
        <p>
			<b>Phone number:</b>123456789
		</p>
		</div>
        <img src={img} alt="Happy Listening" align="left" />
</div>
);
};

export default Contact;