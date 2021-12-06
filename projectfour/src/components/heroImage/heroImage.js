import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero.jpg'
import './heroImage.css'

function Heroimg() {
    return (

        <div className="homecon">

            <div className="headimg hero-img">

                <div className='text-hero-img'>
                    <h1>lorem lorem <br /> lorem  lorem lorem!</h1>


                    <Link to={'/products'}> <button className="btn-hover color-2">SHOP NOW</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Heroimg;

