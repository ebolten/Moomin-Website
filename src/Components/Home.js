import React from 'react'
import Navbar from './Navbar.js'

class Home extends React.Component {

    render(){
        return(
            <div>
                <Navbar/><br/><br/><br/>
                <div id="container">
                    <img style={{width:'500px'}} src="https://d1kdq4z3qhht46.cloudfront.net/uploads/2019/08/Adventures_from_Moominvalley_1990_Moomintroll_TV.jpg" alt="moomin"/>
                    <img style={{width:'500px'}} src="https://www.stylist.co.uk/images/app/uploads/2019/04/19104825/moomimns-1-1400x933.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress" alt="moomin"/> 
                    <img style={{width:'500px'}} src="https://makiaclothing.com/wp-content/uploads/2019/04/MakiaxMoomin_banner_2880x1600.jpg" alt="moomin"/>
                    <img style={{width:'500px'}} src="https://i0.wp.com/ingebretsens.com/blog/wp-content/uploads/2018/05/moomin-wallpaper.jpg" alt="moomin"/>
                    <img style={{width:'500px'}} src="https://i.ytimg.com/vi/za5qalOgt00/maxresdefault.jpg" alt="moomin"/>
                    <img style={{width:'500px'}} src="https://catastrophicfindings.files.wordpress.com/2012/07/moomin-childhood-memories-260482_829_494.jpg" alt="moomin"/>
                </div> 

            </div>
        )
    }
}
export default Home;