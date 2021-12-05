import React from "react";
import "./Testimonial.css";
import ryahnah from './img/ryahnah.jpeg'
import mahdi from './img/mahdi.jfif'
import toqa from './img/toqa.jpeg'
import gassan from './img/gassan.jfif'
import hannen from './img/hanen.jfif'
function Testimonial() {
  return (
    <section className="testimonial-section pb-5" id="testimonials-section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <h1 className="header">TESTIMONIALS</h1>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-50 pb-3"
              src={ryahnah}
              alt="Ahmad Ryahnah"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio fuga officia alias voluptatibus labore aliquam, maxime
              delectus, nemo incidunt.
            </div>

            <span>Ahmad Ryahnah </span>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 pb-3"
              src={mahdi}
              alt="Second slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio fuga officia alias voluptatibus labore aliquam, maxime
              delectus, nemo incidunt
            </div>
            <span>Mahdi Suliman </span>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 pb-3"
              src={toqa}
              alt="Third slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio fuga officia alias voluptatibus labore aliquam, maxime
              delectus, nemo incidunt
            </div>
            <span>Toqa Swedat </span>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 pb-3"
              src={gassan}
              alt="Third slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio fuga officia alias voluptatibus labore aliquam, maxime
              delectus, nemo incidunt
            </div>
            <span>Gassan Dabak</span>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 pb-3"
              src={hannen}
              alt="Third slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio fuga officia alias voluptatibus labore aliquam, maxime
              delectus, nemo incidunt
            </div>
            <span>Haneen Sharabaty</span>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Testimonial;
