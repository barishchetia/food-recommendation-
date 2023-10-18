import React from 'react';
import img1 from './images/chickencurry.jpg';
import img2 from './images/pizza.jpg';


export default function Card({ name, imageSrc }) {
  return (
    <div>
      <div className='d-flex flex-row justify-content-between align-items-center mt-4 '> 
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px", marginRight: "20px" }}>
          <img src={img1} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text custom-font">Chicken Curry.</p>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success'>
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}> {i + 1}</option>
                ))}
              </select>
              <select className='m-2 h-100 bg-success rounded'>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className='d-inline h-100 fs-5'>
              ₹200
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src={img2} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Pizza</p>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success'>
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}> {i + 1}</option>
                ))}
              </select>
              <select className='m-2 h-100 bg-success rounded'>
                <option value="half">7 inches</option>
                <option value="full">10 inches</option>
              </select>
              <div className='d-inline h-100 fs-5'>
              ₹250
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

