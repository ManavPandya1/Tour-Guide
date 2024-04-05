// src/App.js

import React from 'react';
import '../styles/NewHome.css';


function NewHome() {

    const htmlContent=`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Travel buddies</title>
    
        <link rel="stylesheet" href="home.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
      </head>
      <style></style>
      <body>
        <div id="Home">
        <nav>
         
          <div class="container">
            <div class="menu-par">
              <div class="logo-par">
                <a href="home.html">
                  <h2 style="font-family: cursive; font-weight: bolder">
                    travelBuddies
                  </h2></a
                >
              </div>
              <div class="nav">
                <ul>
                  <li><a class="menu-hover" href="#Home">Home</a></li>
                  <li>
                    <a class="menu-hover" href="#Regions">Regions</a>
                  </li>
                  <li><a class="menu-hover" href="#reviews">Reviews</a></li>
                  <li>
                    <a class="menu-hover" href="#travelinfo"
                      >Travel Information</a
                    >
                  </li>
                  <li><a class="menu-bar" href="about.html">About Us</a></li>
    
                  <li><a class="menu-bar" href="contact.html">Contact us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </nav>
    
        <header>
          <div class="container">
            <div class="header-info-par">
              <h1
                class="typewrite"
                data-period="2000"
                data-type='["Dont be a tourist, Be a traveller" , "Adventure is worthwile" , "Go where you feel most alive." ]'></h1>
              <p>
                Dare to live the life you always wanted. Some beautiful paths can't
                be discovered without getting lost.
              </p>
              <a href="#welcome-text">Explore</a>
            </div>
          </div>
          
          <div class="video">
            <video id="video" autoplay loop muted>
              
              <source src="travel-video.mp4" type="video/mp4" />
              
            </video>
    
          </div>
        </header>
        
    
        <br>
        <br>
        
        <br>
        <br>
        <section id="welcome-text">
          <div class="container">
            <h2>Oh, the places you'll go!! </h2>
            <p>Find your vibe here and wander...</p>
          </div>
        </section>
        <section id="slider-par">
          <div class="container">
            <div class="slides">
              <div class="slide-1">
                <div class="slides-info">
                ide-name">Maldives</p>
                </div>
              </div>  
              <div class="slide-1 slide-4">
                <div class="slides-info">
                  <p class="slide-name">Corsica</p>
                </div>
              </div>  
              <div class="slide-1 slide-5">
                <div class="slides-info">
                  <p class="slide-name">Barcelona</p>
                </div>
              </div>  
              <div class="slide-1 slide-6">
                <div class="slides-info">
                  <p class="slide-name">Rohtang Pass</p>
                </div>
              </div>  
              <div class="slide-1 slide-7">
                <div class="slides-info">
                  <p class="slide-name">Mount Fuji</p>
                </div>
              </div>  
            </div>
          </div>
        </section>
        
            </section>
            
        <script src="jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="extrenaljq.js"></script>
      </body>
    </html>
    `;


    
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

  );
}

export default NewHome;