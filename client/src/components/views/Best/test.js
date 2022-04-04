import React from 'react';
import './test.css';

function rcb() {
    return (
        <div>
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script> 
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="testimonials.css"></link>
        <div style={{backgroundColor: "#474e5d"}}>
        <h1 className="typewriter" >TESTIMONIALS</h1>
    </div>
    <div>
        <p className="paragraph">Movies App is the world’s most trusted recommendation resources for quality entertainment. As the leading online aggregator of movie and TV show reviews from critics, we provide fans with a comprehensive guide to what’s Fresh – and what’s Rotten – in theaters and at home. We also serve movie and TV fans with original editorial content on our site and through social channels, produce fun and informative video series, and hold live events for fans across the country, with our ‘Your Opinion Sucks’ live shows. If you’re an entertainment fan looking for a recommendation, or to share an opinion, you’ve come to the right place.</p>
    </div>
    <div>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators ">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active bgcolor">
            <img src="https://i.postimg.cc/sg4QL280/kindpng-1636340.png" className="d-block w-100 imgsize" alt="..."/>
            <p className="text">This is a great place to find a movie title from around the world complete with director and cast. You can read reviews from users and find showtimes for currently playing films in theaters near you. You may even write your own reviews and give ratings to your favorite movies and television programs.
            </p>
          </div>
          <div className="carousel-item bgcolor">
            <img src="https://assets.webiconspng.com/uploads/2016/12/User-Icon.png" className="d-block w-100 imgsize" alt="..."/>
            <p  className="text">Great website, very useful and informative. I always trust Movie App and check the movie's ratings before I watch it. It has great movie listings and suggestions as well as short biographies of actors, movie directors and so on. Everything you need in one place. Again, great website for movie lovers </p>
          </div>
          <div className="carousel-item bgcolor">
            <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" className="d-block w-100 imgsize" alt="..."/>
            <p  className="text">This site is a leader among the others for me. It always helps me to look for some great movies by means of their authentic film-ranking. The reviews are also very informative and sometimes enforce you to see the other side of the film, which you even haven't thought about.</p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
    );
    }
export default rcb;