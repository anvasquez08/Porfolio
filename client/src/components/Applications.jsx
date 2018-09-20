import React from 'react';

const Applications = () => (
  <div>
      <div className="section-4 shop fashionImage" >
        <div className="wrap">
            <div className="section-4b">
              <h1 className='title'>ADA</h1>
                <p className='subtitle'>Your Intelligent Fashion Assistant</p>
                <p>Ada an AI powered fashion application that takes user submitted images and returns fashion recommendations based on similar styles. Images are processed through a tensor flow model which categorized each image into tags such as "dress shirt" and "white". Once images are analyzed, scrapped inventory from websites like Zara and Bloomingdales are returned with matching styles.</p>
                <p>This applications utilizes Express, Puppeteer JS, React, React Router 4, MongoDB, Mongoose and AWS S3.</p>
                <a target="_blank" className="github-button" href="https://github.com/anvasquez08/Ada">Github</a>
                <a target="_blank" className="linkedin-button" href="http://18.222.219.218:4000/">Website</a>
           </div>
          </div>
      </div>
      <div className="section-4 shop moviesImage" >
        <div className="wrap">
            <div className="section-4b">
                <h1 className='title'>FlixMix</h1>
                <p className='subtitle'>Your Spotify for Movies </p>
                <p>FlixMix is a the one stop shop to search for movies and share curated playlists with friends. Users are able to search for movies, curate a list and generate a short link to share with friends. 
                  Users are able to view YouTube trailers as well as discover playlist from other users.</p>
                <p>This applications utilizes ​Express,​​ MySQL, React, React Tooltip and Express Sessions.</p>   
                <a target="_blank" className="github-button" href="https://github.com/anvasquez08/Flixmix">Github</a>
                <a target="_blank" className="linkedin-button" href=" http://flixmix.andrewmitchell.io/">Website</a>
           </div>
          </div>
      </div>
      <div className="section-4 shop foodImage" >
        <div className="wrap">
            <div className="section-4b">
                <h1 className='title'>NYC Bite</h1>
                <p className='subtitle'>A 360° view of NYC Restaurants</p>
                <p>NYC Bite helps bridge the gap between a restaurant's health violation profile and public Yelp reviews.
                  In New York City, restaurants are graded based on their health violations.
                  Unfortunately, this information isn't readily available unless you go to the restaurant.
                  NYC Bite helps users see a holistic profile that includes historical health violations as well as their Yelp profile. Users can search for restaurants by name or address. 
                </p> 
                <p>This applications utilizes React, ReactRouter4 ,E​xpress, PostgreSQL​, Sequelize and Bootstrap.</p>     
                <a target="_blank" className="github-button" href="https://github.com/anvasquez08/NYC-Bite">Github</a>
                <a target="_blank" className="linkedin-button" href="https://camo.githubusercontent.com/705bc99aad0e7c40b7e1d73f701492ad6a7fde45/68747470733a2f2f692e696d6775722e636f6d2f744a664933655a2e706e67">More</a>
           </div>
          </div>
      </div>
  </div>
)

export default Applications