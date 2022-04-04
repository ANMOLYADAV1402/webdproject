import React from 'react';
import './sponsors.css';

function sponsors(){
    return(
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script> 
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="sponsors.css"></link>
            <h1 className="sponsor-heading">OUR SPONSORS</h1>
  <div className="bgImg">
    <div className="sponsorcard">
    <div className="row">
    <div className="card " style={{width: "18rem"}}>
     <a href="https://www.imdb.com/" className="href"> <img className="card-img-top" src="https://indiafilmproject.co/wp-content/uploads/2019/07/IMDb-125x125.png" alt="Card image cap"/></a>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card" style={{width: "18rem"}}>
      <a href="https://www.mtvindia.com/" className="href"><img className="card-img-top" src="https://indiafilmproject.co/wp-content/uploads/2019/09/MTV-125x125.png" alt="Card image cap"/></a>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card" style={{width: "18rem"}}>
      <a href="https://www.filmfare.com/" className="href"><img className="card-img-top" src="https://indiafilmproject.co/wp-content/uploads/2021/10/filmfare-125x125.png" alt="Card image cap"/></a>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="card" style={{width: "18rem"}}>
     <a href="https://www.bollywoodirect.com/" className="href"><img className="card-img-top" src="https://indiafilmproject.co/wp-content/uploads/2021/09/bollywooddirect-125x125.png" alt="Card image cap"/></a> 
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card" style={{width: "18rem"}}>
     <a href="https://www.carnivalcinemas.com/" className="href"><img className="card-img-top" src="https://indiafilmproject.co/wp-content/uploads/2019/09/carnival-125x125.png" alt="Card image cap"/></a> 
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card" style={{width: "18rem"}}>
     <a href="https://thebombayreview.com/" className="href"> <img className="card-img-top" src="https://indiafilmproject.co/wp-content/uploads/2021/08/bombayreview-1-125x125.png" alt="Card image cap"/></a>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  </div>
  </div>
        </div>
    );
}
export default sponsors;