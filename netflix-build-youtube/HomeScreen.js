 import React from 'react'
import "./HomeScreen.css"
import Banner from '../Banner'
import Nav from '../Nav'
import requests from '../Requests'
import  Row from '../Row'




function HomeScreen() {
    return (
        <div className="HomeScreen">
           <Nav/> 
           
            <Banner  />
            {/* Banner */}
            
            <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow

            />
            <Row
            title="Trending Now" fetchUrl={requests.fetchTrending}/>

            <Row
            title="Top Rated" fetchUrl={requests.fetchTopRated}
            />
            <Row
            title="Action Movie" fetchUrl={requests.fetchActionMovies}/>
            <Row
            title="Comedy Movie" fetchUrl={requests.fetchComedyMovies}/>
           
            <Row
            title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
             <Row
            title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>
            <Row
            title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>






            {/* Row */}
        </div> )}
export default HomeScreen
