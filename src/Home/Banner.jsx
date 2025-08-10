import React, { useEffect } from 'react';
import img1 from '../assets/foodimg1.avif';
import img2 from '../assets/foodimg2.avif';
import img3 from '../assets/foodimg3.avif';

const Banner = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.carousel a[href^="#slide"]');
    function handleClick(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
    links.forEach(link => link.addEventListener('click', handleClick));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className='h-30vh max-w-[1600px] w-11/12 mx-auto mt-6'>
      <div className="carousel  h-[60vh]  rounded-lg overflow-hidden shadow-md">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover" alt="Slide 1" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-cover" alt="Slide 2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-cover" alt="Slide 3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
