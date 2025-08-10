import React from 'react';
import img1 from '../assets/child/diverse-people-refugee-camps.jpg';
import img2 from '../assets/child/monochrome-street-food-entertainment.jpg';
import img3 from '../assets/child/photo-1588075506694-d6ab61c85d2c.avif';
import img4 from '../assets/child/img-street-child.jpg';

const Work = () => {
  return (
    <section className="w-11/12 max-w-[1600px] mx-auto mt-12">
      <h2 className="text-2xl text-primary md:text-3xl font-semibold text-center mb-6">
        Don't Waste Food
      </h2>
      <p className="text-center text-2xl text-green-500 font-semibold mb-4">
        Share your food to bring a smile to someone else's face—it costs little, but means everything
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[img1, img2, img3,img4].map((src, idx) => (
          <div key={idx} className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
            <img
              src={src}
              alt={`Food image ${idx + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
