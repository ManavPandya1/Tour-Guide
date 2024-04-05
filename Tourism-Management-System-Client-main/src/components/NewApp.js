// src/App.js

import React from 'react';
import '../styles/NewHome.css';


function NewApp() {

    const htmlContent=`<!DOCTYPE html>
    <html lang="en">
      <head>
      <h1>Hellllllllo</h1>
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
                  <li >
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
                  <p class="slide-name">Bali</p>
                </div>
              </div>  
              <div class="slide-1 slide-2">
                <div class="slides-info">
                  <p class="slide-name">Ladakh</p>
                </div>
              </div>  
              <div class="slide-1 slide-3">
                <div class="slides-info">
                  <p class="slide-name">Maldives</p>
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
        <br>
        <br>
        <br>
        <section id="Regions">
          <div class="tagline">
            <h2>Start Planning Your Dream Holiday!</h2></div>
            <br>
            <br>
            <div class="container">
            <div class="places">
              <div class="place">
              <div class="India">
              
                <a href="asia.html" class="Name" style="font-family:'Oswald', sans-serif;"> Asia </a>
              </div>
              </div>
              <div class="India Europe">
                <div class="place">
                <a href="#" class="Name"  style="font-family:'Oswald', sans-serif;">Europe</a>
              </div>
              </div>
              <div class="India Australia">
                <div class="place">
                <a href="#" class="Name"  style="font-family:'Oswald', sans-serif;">Australia</a>
              </div>
              </div>
              <div class="India NorthAmerica">
                <div class="place">
                <a href="#" class="Name" style="font-family:'Oswald', sans-serif;">North America</a>
              </div>
            </div>
              <div class="India Africa">
                <div class="place">
                <a href="#" class="Name"  style="font-family:'Oswald', sans-serif;" >Africa</a>
              </div>
            </div>
              <div class="India SouthAmerica">
                <div class="place">
                <a href="#" class="Name"  style="font-family:'Oswald', sans-serif;">South America</a>
              </div>
              </div>
             
            </div>
            </div>
            </section>
            <br>
            <br>
            <br>
            <section id="reviews">
              <div class="tagline2"><h2>Learn About Your Destinations</h2><p>From the best of the reviews.</p></div>
              <br>
              <h2 style="text-align:center; text-decoration:underline #00a8b4; font-size:40px;">Reviews</h2>
              <br>
              <br>
              <div class="rv-par">
              <div class="container">
                  <div class="rv"></div>
                    <div class="content-review1">
                    <div class="image">
                      <img src="barcelona3.jpg" alt="barcelona2">
                    </div>
                    <div class="content_rv">
                      <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Barcelona</h3>
                      <br>
                      <p>Barcelona is a fantastic holiday destination. It's one of the top travel destinations for a good reason. You'll love the food, the architecture and the overall atmosphere of the city. Besides, Barcelona has a seaside too, which allows you to combine a city holiday with a beach vacation.Aside from its many sights, attractions and events, it's the lifestyle and quality of life that most people appreciate. Barcelona is an incredibly creative city, which attracts open-minded people who have a desire to pursue the good things in life.</p>
                    </div>
                    </div>
                    <br>
                    <br>
                    <div class="content-review2">
                      <div class="content_rv">
                        <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Madrid</h3>
                        <br>
                        <p>Madrid is one of the world's liveliest, most entertaining and vibrant cities during the day, but even more so at night. The Spanish capital does not only offer art, shopping, nightlife and excellent gastronomy but it also presents both visitors and locals with all imaginable options for leisure. Within its boundaries you'll find a range of cultural and historical treasures such as the Royal Palace, Royal Theater along with numerous museums and art galleries that are unmatched elsewhere in Europe.</p>
                     </div>
                      <div class="image">
                        <img src="madrid.jpg" alt="Madrid">
                      </div>
                      </div>
                      <br>
                      <br>
                      <div class="content-review3">
                        <div class="image">
                          <img src="ladakh2.jpg" alt="Ladakh">
                        </div>
                        <div class="content_rv">
                          <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Ladakh</h3>
                          <br>
                          <p>In terms of culture, the Ladakhi culture offers a very unique influx of the Indo-Aryans and the people of Tibetan descent. With such a huge amalgamation of geographical wonders, cultural diversities and uniqueness in flora and fauna, Ladakh surely makes for a worth visiting destination for everyone at least once.
                            Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals.</p>
                        </div>
                     </div>
                     <br>
                     <br>
                     <div class="content-review4">
                      <div class="content_rv">
                        <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Paris</h3>
                        <br>
                          <p>The French capital is one of the most romantic cities in Europe and one of the world's most visited cities. There are endless reasons to visit Paris repeatedly: it is a beautiful and cultural city, very walkable, with great sights, and it has been a source of inspiration for many writers, artists, and filmmakers.Paris is monumental, both due to its size but also its wealth of architectural heritage! The symbol of the capital city, and doubtless its best-known monument, is the unique Eiffel Tower, the "Iron Lady" that offers visitors an unsurpassed view. Close by is the equally iconic Arc de Triomphe.</p>
                     </div>
                      <div class="image">
                        <img src="paris.jpg" alt="Paris">
                      </div>
                      </div>
                      <br>
                      <br>
                      <div class="content-review5">
                        <div class="image">
                          <img src="jaisalmer.jpg" alt="Jaisalmer">
                        </div>
                        <div class="content_rv">
                          <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Jaisalmer</h3>
                          <br>
                          <p>Jaisalmer is a charming little place which you absolutely need to visit on any tour of Rajasthan. And if you're looking to get anywhere near the actual Thar desert and visit the sand dunes, this is where you will need to come.
                            There are a few but beautiful attractions to see. A 2 night/3 day stay in Jaisalmer is ideal if you're planning it in conjunction with a longer tour of Rajasthan. Visit the Jaisalmer fort - a 1000 year old fort with a 5km circumference wall. Inside the fort a mini city exists, with a maze of tiny lanes through the crowded houses and temples that make up the fort city. </p>
                        </div>
                     </div>
                     <br>
                     <br>
                     <div class="content-review6">
                      <div class="content_rv">
                        <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Mount Fuji</h3>
                        <br>
                          <p>If you have some time, this place is really worth it. And if you're visiting during the cherry blossom season, this place is even more amazing with its 650 cherry blossom trees.Mount Fuji is the tallest mountain in Japan and is known for its graceful conical form. It is the country's sacred symbol, and temples and shrines are located around and on the volcano.</p>
                     </div>
                      <div class="image">
                        <img src="mtfuji2.webp" alt="Mount Fuji">
                      </div>
                      </div>
                    <br>
                    <br>
                    <div class="content-review7">
                      <div class="image">
                        <img src="amsterdam.jpeg" alt="Amsterdam">
                      </div>
                      <div class="content_rv">
                        <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Amsterdam</h3>
                        <br>
                        <p>Amsterdam is absolutely worth visiting for new and experienced travelers.Amsterdam is famous for its canals, beautiful houses, 'coffee' shops and Red Light District, but there's plenty more to this liberal city than most visitors realise.I would recommend the city to anyone coming to Europe.Amsterdam is definitely not cheap to live in.Three days in Amsterdam is more than enough time to see all the city's biggest sights, plus head out of town for a quick day trip.</p>
                      </div>
                   </div>
                   <br>
                   <br>
                  </div>
                </div>
              </div>
            </section>
            <br>
            <br>
            <hr>
            <br>
            <br>
            <br>
            <section id="travelinfo">
              <h2 style="text-align:center; text-decoration:underline #00a8b4; font-size:40px;">Travel Information</h2>
              <br>
              <br>
              <br>
              <br>
              <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Asia</h3>
              <br>
              <br>
              <div class="TI">
                <div class="container">
                  <div class="HT">
                    <div class="symbolht" style="font-size:25px ;"><h3>Health Tips</h3></div>
                    <div class="content-HT">
                      <p>As staying healthy while traveling is essential, here are a few tips to protect your health on the road.Hepatitis A and B and Typhoid fever vaccines are usually recommended for all travelers. If you are travelling to rural areas, you might also consider getting vaccinations against yellow fever, rabies, Japanese encephalitis and malaria (tablets).</p>
                    </div>
                  </div>
                  
                  <div class="HT">
                    <div class="symbolht2" style="font-size:25px; "><h3>Best Time to Visit</h3></div>
                    <div class="content-HT">
                        <p>Asia is the biggest continent in the world consisting of 48 breath-taking countries which attract thousands of tourists every year. Best time to visit Asia would vary according to the different parts of the continent. Temperatures keep fluctuating from 20 degrees Celsius to 32 degrees Celsius according to the month and season.If you are in Bali and are a beach lover, then the best time to visit Bali is from April-May and June-September. During New year’s, and other significant holidays, crowds swarm all over the city and it gets hugely flocked. The tropical monsoon region is comparatively dry and sunny for most of the day during this time. Therefore, it is an excellent time for a good vacation.</p>
                    </div>
              </div>
              <br>
              <br>
              <br>
              <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Europe</h3>
              <br>
              <br>
             
                  <div class="HT">
                    <div class="symbolht" style="font-size:25px ;"><h3>Health Tips</h3></div>
                    <div class="content-HT">
                      <p>Different areas in Europe present different possible contagions, so be sure to research your destination before you leave. The Centre for Disease Control and Prevention offers an in depth look at each country, and the risks associated with it for travellers. Below is a general list of the vaccinations you should consider getting before you travel anywhere in Europe. Routine vaccinations include: Human Papilloma Virus (HPV),Influenza (Flu),The MMR Vaccine (Measles, Mumps and Rubella),Polio.</p>
                    </div>
                  </div>
                  
                  <div class="HT">
                    <div class="symbolht2" style="font-size:25px; "><h3>Best Time to Visit</h3></div>
                    <div class="content-HT">
                        <p>Although Europe is a year-round travel destination, the best time to visit Europe is during the summer months of June to September. This is the time when the sun is high, the beaches are warm and the weather is sunny.Also if you want to travel cheaper,the late fall and winter months—from mid to late October through mid-to-late March—are often the cheapest time to fly to Europe (though fares can spike in December). It's often cheaper to fly to Europe mid-week, on Tuesdays and Wednesdays, in particular.</p>
                    </div>
                  </div>
              <br>
              <br>
              <br>
              <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Australia</h3>
              <br>
              <br>
             
                  <div class="HT">
                    <div class="symbolht" style="font-size:25px ;"><h3>Health Tips</h3></div>
                    <div class="content-HT">
                      <p>All inbound travellers must declare their vaccination status to enter Australia and provide appropriate proof, such as an International COVID-19 Vaccination Certificate (ICVC). Vaccination requirements for travellers to Australia are separate from ATAGI's advice on vaccination for Australians.</p>
                    </div>
                  </div>
                  
                  <div class="HT">
                    <div class="symbolht2" style="font-size:25px; "><h3>Best Time to Visit</h3></div>
                    <div class="content-HT">
                        <p>Spring and autumn are among the best times to travel the entire country. International flights to Australia are more affordable than in summer; the weather is warming up (or cooling down from summer highs); and the north, from Broome to Cairns, experiences the dry season, offering perfect travel conditions.September to November & March to May are best time to visit Australia. Most of the tourists opt for these months to visit Australia. The weather during these seasons is neither too hot nor too cold that makes it perfect to have a walk around Australia.</p>
                    </div>
                  </div>
              <br>
              <br>
              <br>
              <h3 style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 30px;">Africa</h3>
              <br>
              <br>
             
                  <div class="HT">
                    <div class="symbolht" style="font-size:25px ;"><h3>Health Tips</h3></div>
                    <div class="content-HT">
                      <p>Africa's varied ecology presents a wide range of travel health threats: infections; accidents; envenomations; an uncertain drug supply; problematic access to competent medical care outside South Africa. Important vaccine preventable diseases include yellow fever, meningococcal disease, typhoid, polio, rabies, and hepatitis A and B; routine vaccinations should be up to date. Much, but not all, of sub-Saharan Africa is malarious with chloroquine resistant falciparum dominating; chemoprophylaxis and personal protection measures will often be indicated. Other threats are less obvious, e.g. helminth and protozoal infections.</p>
                    </div>
                  </div>
                  
                  <div class="HT">
                    <div class="symbolht2" style="font-size:25px; "><h3>Best Time to Visit</h3></div>
                    <div class="content-HT">
                        <p>The best time to visit Africa is during the drier winter months, from May to September, when vegetation thins out and wildlife congregates around remaining water sources. The large southern game reserves are at their best during this time.The best time to go on safari is between June and October, during the dry season. This is a cooler time of the year and you are more likely to see animals, who are searching for water sources. During these months, you can also catch the iconic Masai Mara migration. </p>
                    </div>
                  </div>
              <br>
              <br>
              
                </div>
              </div>
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

export default NewApp;