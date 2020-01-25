import React from 'react';
import moominPNG from '../Pictures/moominPNG.png'

class Navbar extends React.Component {

    render(){
        return(
            <div id='nav-bar' >
                <img alt='moomin' style={{width:'85px',float:'left'}} src={moominPNG} />
                <div id='nav-buttons' >
                    <span> <a href="/home">Home</a> </span>
                    &nbsp;&nbsp;&nbsp;
                    <span> <a href="/about">About</a> </span>
                    {/* &nbsp;&nbsp;&nbsp;
                    <span> <a href="/contact">Creator</a> </span> */}
                </div>
            </div>
        )
    }
}
export default Navbar;