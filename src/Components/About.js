import React from 'react';
import Navbar from './Navbar.js'
import moomin2 from '../Pictures/moomin2.jpg'

class About extends React.Component {
    render(){
        return(
            <div> 
                <Navbar/>
                <br/><br/>
                <h4> This website was dedicated to Moomin. </h4>
                <br/><br/>
                <a id='moomin-site' href="https://www.moomin.com/en/"> To the Moomin Website </a>
                <br/><br/><br/><br/><br/>
                <img style={{width:'700px'}} alt='moomin' src={moomin2} />
            </div>
        )
    }
}
export default About;