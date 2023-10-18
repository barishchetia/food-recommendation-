import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <div className="caption-background"> {/* Add this div for the background */}
                <h5>Burger</h5>
                <p>Juicy, big, loaded with toppings of your choice</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <div className="caption-background"> {/* Add this div for the background */}
                <h5>Pastry</h5>
                <p> cookie or small cake made of sugar, egg white, and almonds, ground or in paste form, or coconut</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?curry" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <div className="caption-background"> {/* Add this div for the background */}
                <h5>Curry</h5>
                <p>a dish composed with a sauce or gravy seasoned with a mixture of ground spices</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
