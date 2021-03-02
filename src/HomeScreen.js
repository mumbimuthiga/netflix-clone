import React from 'react';
import Banner from './Banner';
import './HomeScreen.css';
import NavBar from './NavBar';
import requests from './Requests';
import Row from "./Row";

 function HomeScreen ()  {
    return (
        <div className="homescreen">

         {/**NavBar */}
        <NavBar></NavBar>
        

        {/**Banner */}
        <Banner></Banner>

        {/**Rows */}
        <Row
        title='Netflix Originals'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
        > </Row>
        <Row
        title='Romance Movies'
        fetchURL={requests.fetchRomanceMovies}
        ></Row>
        <Row
        title='Top Rated'
        fetchURL={requests.fetchTopRated}
        ></Row>
        <Row
        title='Trending'
        fetchURL={requests.fetchtrending}
        ></Row>
        <Row
        title='Action Movies'
        fetchURL={requests.fetchActionMovies}
        ></Row>
        <Row
        title='Comedy Movies'
        fetchURL={requests.fetchComedyMovies}
        ></Row>
        <Row
        title='Documentaries'
        fetchURL={requests.fetchDocumentaries}
        ></Row>
        <Row 
        title='Horror Movies'
        fetchURL={requests.fetchHorrorMovies}
        ></Row>
            
        </div>
    )
}
export default HomeScreen;