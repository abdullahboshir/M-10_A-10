import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/carousel-img/slider-img1.jpg';
import img2 from '../../../images/carousel-img/slider-img2.jpg';
import img3 from '../../../images/carousel-img/slider-img3.jpg';

  

const Slider = () => {
    return (
        <div>
             <div className="carousel" id='slider'>
                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='carousel-caption carousel-caption2'>
                            <div className='hero-title'>
                                <h2>IT'S TIME FOR A NEW JOURNEY </h2>
                                <p>Enjoy the journey and try to get better every day. And don't lose the passion and the love for what you do.</p>
                                <button className='hero-title-btn'>VIEW MORE</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className='hero-title'>
                                <h2>PLEASURE TO TRAVEL WITH FAMILY </h2>
                                <p>Build traditions of family vacations and trips and outings. These memories will never be forgotten by your children.</p>
                                <button  className='hero-title-btn'>VIEW MORE</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className='hero-title'>
                                <h2>THE PLACE FOR YOUR ENJOYMENT </h2>
                                <p>The journey of a thousand miles begins with a single step.</p>
                                <button  className='hero-title-btn'>VIEW MORE</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> 
        </div>
    );

};

export default Slider;