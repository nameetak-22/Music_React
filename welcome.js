import React from 'react';
import './stylewelcome.css'
import img from './welc3.png';
const Welcome = () => {
return (
	<div>
    <div class="main">
        <div class="top_section">
              <h5>MFN&nbsp;&nbsp;<i class="fa fa-headphones" aria-hidden="true"></i></h5>
		</div>
            <img src={img} class="image" alt="Welcome to MFN music player"/>
    </div>
            
</div>

);
};

export default Welcome;
