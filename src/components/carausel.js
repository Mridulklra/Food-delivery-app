import React from 'react';
import bgimage from './bg.jpg';
import img2 from './abc.jpeg';
import img3 from './xyz.jpeg';
import '../css/carausel.css';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={bgimage} alt="First slide" style={{ opacity: 0.7 }} />
            <div className="carousel-caption d-none d-md-block">
              <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                  <form className="d-flex">
                    <input className="form-control me-2 search-input" type="search" placeholder="" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide" style={{ opacity: 0.7 }} />
            <div className="carousel-caption d-none d-md-block">
              <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                  <form className="d-flex">
                    <input className="form-control me-2 search-input" type="search" placeholder="" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Third slide" style={{ opacity: 0.7 }} />
            <div className="carousel-caption d-none d-md-block">
              <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                  <form className="d-flex">
                    <input className="form-control me-2 search-input" type="search" placeholder="" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
