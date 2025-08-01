import React from 'react';
import img1 from '../assets/child/diverse-people-refugee-camps.jpg';
import img2 from '../assets/child/monochrome-street-food-entertainment.jpg';
import img3 from '../assets/child/photo-1588075506694-d6ab61c85d2c.avif';

const Work = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto my-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Don't Waste Food
      </h2>
       <p className='text-center text-2xl font-semibold mb-4'>Share your food to bring a smile to someone else's face—it costs little, but means everything</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex-1">
          <img
            src={img1}
            alt="Diverse people in refugee camps"
            className="w-full rounded-lg object-cover shadow-md"
          />
        </div>
        <div className="flex-1">
          <img
            src={img2}
            alt="Monochrome street food entertainment"
            className="w-full rounded-lg object-cover shadow-md"
          />
        </div>
        <div className="flex-1">
          <img
            src={img3}
            alt="Food serving"
            className="w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
