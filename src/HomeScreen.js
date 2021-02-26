import React from 'react';
import Banner from './Banner';
import './HomeScreen.css';
import NavBar from './NavBar';

 function HomeScreen ()  {
    return (
        <div className="homescreen">

         {/**NavBar */}
        <NavBar></NavBar>
        

        {/**Banner */}
        <Banner></Banner>

        {/**Rows */}
            
        </div>
    )
}
export default HomeScreen;