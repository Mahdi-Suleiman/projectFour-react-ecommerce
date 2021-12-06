import React from "react";
import "./Testimonial.css";
import ryahnah from './img/ryahnah.jpeg'
import mahdi from './img/mahdi.jfif'
import toqa from './img/toqa.jpeg'
import gassan from './img/gassan.jfif'
import hannen from './img/hanen.jfif'
function Testimonial() {
  return (
<div className="d-flex align-items-center py-5 mh-100 customTestimonial"> <a className="carousel-control-prev text-decoration-none " href="#mycarousel" role="button" data-bs-slide="prev">
    <div className="d-flex flex-column justify-content-center me-2 ms-auto left">PREV<span className="fas fa-arrow-left" /> </div> <span className="sr-only">Previous</span>
  </a>
  <div className="container">
    <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#mycarousel" data-bs-slide-to={0} className="active" />
        <li data-bs-target="#mycarousel" data-bs-slide-to={1} />
        <li data-bs-target="#mycarousel" data-bs-slide-to={2} />
        <li data-bs-target="#mycarousel" data-bs-slide-to={3} />
        <li data-bs-target="#mycarousel" data-bs-slide-to={4} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-lg-6 "> <img src={mahdi} className="d-block w-100" alt="..." /> </div>
            <div className="col-lg-6 ">
              <div className=" d-flex flex-column justify-content-center my-5 px-3">
                <p className="review text-center">"Incredible services and amazing customer support"</p>
                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1" />
                  <p className="m-0">Mahdi Suliman</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-6 "> <img src={gassan} className="d-block w-100" alt="..." /> </div>
            <div className="col-lg-6 ">
              <div className=" d-flex flex-column justify-content-center my-5 px-3">
                <p className="review text-center">"Incredible services and amazing customer support"</p>
                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1" />
                  <p className="m-0">Gassan Dabak</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-6 "> <img src={toqa} className="d-block w-100" alt="..." /> </div>
            <div className="col-lg-6 ">
              <div className=" d-flex flex-column justify-content-center my-5 px-3">
                <p className="review text-center">"Incredible services and amazing customer support"</p>
                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1" />
                  <p className="m-0">Toqa Swedat</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-6 "> <img src={hannen} className="d-block w-100" alt="..." /> </div>
            <div className="col-lg-6 ">
              <div className=" d-flex flex-column justify-content-center my-5 px-3">
                <p className="review text-center">"Incredible services and amazing customer support"</p>
                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1" />
                  <p className="m-0">Haneen Sharabaty</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-6 "> <img src={ryahnah} className="d-block w-100" alt="..." /> </div>
            <div className="col-lg-6 ">
              <div className=" d-flex flex-column justify-content-center my-5 px-3">
                <p className="review text-center">"Incredible services and amazing customer support"</p>
                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1" />
                  <p className="m-0">Ahmad Ryahnah</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> <a className="carousel-control-next text-decoration-none " href="#mycarousel" role="button" data-bs-slide="next">
    <div className="d-flex flex-column justify-content-center right ms-2 me-auto"> NEXT <span className="fas fa-arrow-right" /> </div> <span className="sr-only">Next</span>
  </a>
</div>


  );
}

export default Testimonial;
