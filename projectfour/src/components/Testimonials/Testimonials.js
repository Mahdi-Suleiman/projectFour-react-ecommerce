import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import "./Testimonials.css";
import "./testimonail.css";

export default function Tesimonials() {
  return (
    <section className="testimonial text-center">
      <div className="container">
        <div className="heading white-heading">Testimonial</div>
        <div
          id="testimonial4"
          className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
          data-ride="carousel"
          data-pause="hover"
          data-interval="5000"
          data-duration="2000"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  className="img-circle img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </p>
                <h4>Client 1</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  className="img-circle img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </p>
                <h4>Client 2</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  className="img-circle img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </p>
                <h4>Client 3</h4>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#testimonial4"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#testimonial4"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

// className Testimonials extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quotes: [
//         {
//           id: "4",
//           image: "",
//           name: "Gassan Dabak",
//           quote:
//             "Lorem Ipsum is simply dummy text of the printing and typeset" +
//             "ting industry. Lorem Ipsum has been the industry's standard dummy tex" +
//             "t ever since the 1500s, when an unknown printer took a galley of type and scram" +
//             "bled it to make a type specimen book. It has survived not only five centuries, but " +
//             "also the leap into electronic typesetting, ",
//         },
//         {
//           id: "1",
//           image: "images/testimonial/feras.jpg",
//           name: "Toqa Swedat",
//           quote:
//             " Lorem Ipsum is simply dummy text of the printing and typeset" +
//             "ting industry. Lorem Ipsum has been the industry's standard dummy tex" +
//             "t ever since the 1500s, when an unknown printer took a galley of type and scram" +
//             "bled it to make a type specimen book. It has survived not only five centuries, but " +
//             "also the leap into electronic typesetting, ",
//         },
//         {
//           id: "2",
//           image: "images/testimonial/hamzeh.jpg",
//           name: "Mahdi Suliman",
//           quote:
//             "Lorem Ipsum is simply dummy text of the printing and typeset" +
//             "ting industry. Lorem Ipsum has been the industry's standard dummy tex" +
//             "t ever since the 1500s, when an unknown printer took a galley of type and scram" +
//             "bled it to make a type specimen book. It has survived not only five centuries, but " +
//             "also the leap into electronic typesetting, ",
//         },
//         {
//           id: "3",
//           image: "images/testimonial/moh.jpg",
//           name: "Ahmad Ryahnah",
//           quote:
//             "Lorem Ipsum is simply dummy text of the printing and typeset" +
//             "ting industry. Lorem Ipsum has been the industry's standard dummy tex" +
//             "t ever since the 1500s, when an unknown printer took a galley of type and scram" +
//             "bled it to make a type specimen book. It has survived not only five centuries, but " +
//             "also the leap into electronic typesetting, ",
//         },
//         {
//           id: "5",
//           image: "images/testimonial/lojain.jpg",
//           name: "Hanen Sharbati",
//           quote:
//             "Lorem Ipsum is simply dummy text of the printing and typeset" +
//             "ting industry. Lorem Ipsum has been the industry's standard dummy tex" +
//             "t ever since the 1500s, when an unknown printer took a galley of type and scram" +
//             "bled it to make a type specimen book. It has survived not only five centuries, but " +
//             "also the leap into electronic typesetting, ",
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <div className="testimonials-container">
//         <div className="testimonials">
//           <div className="six-testimonial">
//             <h1>
//               OUR CLIENTS
//               <span>some quotation of our loyalty clients</span>
//             </h1>
//           </div>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12" data-wow-delay="0.2s">
//                 <div
//                   className="carousel slide"
//                   data-ride="carousel"
//                   id="quote-carousel"
//                 >
//                   {/* <!-- Bottom Carousel Indicators --> */}
//                   <ol className="carousel-indicators">
//                     <li
//                       data-target="#quote-carousel"
//                       data-slide-to="0"
//                       className="active "
//                     >
//                       <img
//                         className="img-responsive "
//                         src={this.state.quotes[0].image}
//                         alt="testimonial"
//                       />
//                     </li>
//                     <li
//                       data-target="#quote-carousel"
//                       data-slide-to="0"
//                       className=""
//                     >
//                       <img
//                         className="img-responsive "
//                         src={this.state.quotes[1].image}
//                         alt="testimonial"
//                       />
//                     </li>
//                     <li
//                       data-target="#quote-carousel"
//                       data-slide-to="0"
//                       className=""
//                     >
//                       <img
//                         className="img-responsive "
//                         src={this.state.quotes[2].image}
//                         alt="testimonial"
//                       />
//                     </li>
//                     <li
//                       data-target="#quote-carousel"
//                       data-slide-to="0"
//                       className=""
//                     >
//                       <img
//                         className="img-responsive "
//                         src={this.state.quotes[3].image}
//                         alt="testimonial"
//                       />
//                     </li>
//                     <li
//                       data-target="#quote-carousel"
//                       data-slide-to="0"
//                       className=""
//                     >
//                       <img
//                         className="img-responsive "
//                         src={this.state.quotes[4].image}
//                         alt="testimonial"
//                       />
//                     </li>
//                   </ol>

//                   {/* <!-- Carousel Slides / Quotes --> */}
//                   <div className="carousel-inner text-center">
//                     {/* <!-- Quote 1 --> */}
//                     <div className="item active">
//                       <blockquote>
//                         <div className="row">
//                           <div className="col-sm-8 col-sm-offset-2 ">
//                             <p className="quoteColor">
//                               {this.state.quotes[0].quote}
//                             </p>
//                             <small className="quoteColor">
//                               {this.state.quotes[0].name}
//                             </small>
//                           </div>
//                         </div>
//                       </blockquote>
//                     </div>
//                     {/* <!-- Quote 2 --> */}
//                     <div className="item">
//                       <blockquote>
//                         <div className="row">
//                           <div className="col-sm-8 col-sm-offset-2">
//                             <p className="quoteColor">
//                               {this.state.quotes[1].quote}
//                             </p>
//                             <small className="quoteColor">
//                               {this.state.quotes[1].name}
//                             </small>
//                           </div>
//                         </div>
//                       </blockquote>
//                     </div>
//                     {/* <!-- Quote 3 --> */}
//                     <div className="item">
//                       <blockquote>
//                         <div className="row">
//                           <div className="col-sm-8 col-sm-offset-2">
//                             <p className="quoteColor">
//                               {this.state.quotes[2].quote}
//                             </p>
//                             <small className="quoteColor">
//                               {this.state.quotes[2].name}
//                             </small>
//                           </div>
//                         </div>
//                       </blockquote>
//                     </div>
//                     <div className="item">
//                       <blockquote>
//                         <div className="row">
//                           <div className="col-sm-8 col-sm-offset-2">
//                             <p className="quoteColor">
//                               {this.state.quotes[3].quote}
//                             </p>
//                             <small className="quoteColor">
//                               {this.state.quotes[3].name}
//                             </small>
//                           </div>
//                         </div>
//                       </blockquote>
//                     </div>
//                     <div className="item">
//                       <blockquote>
//                         <div className="row">
//                           <div className="col-sm-8 col-sm-offset-2">
//                             <p className="quoteColor">
//                               {this.state.quotes[4].quote}
//                             </p>
//                             <small className="quoteColor">
//                               {this.state.quotes[4].name}
//                             </small>
//                           </div>
//                         </div>
//                       </blockquote>
//                     </div>
//                   </div>

//                   {/* <!-- Carousel Buttons Next/Prev --> */}
//                   <a
//                     data-slide="prev"
//                     href="#quote-carousel"
//                     className="left carousel-control"
//                   >
//                     <i className="fa fa-chevron-left"></i>
//                   </a>
//                   <a
//                     data-slide="next"
//                     href="#quote-carousel"
//                     className="right carousel-control"
//                   >
//                     <i className="fa fa-chevron-right"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// 
// export default Testimonials;
