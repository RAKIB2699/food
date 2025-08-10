import React, { useState, useEffect } from "react";
import { FaUsers, FaUtensils, FaHandHoldingHeart } from "react-icons/fa";

const Stats = () => {
  const statsData = [
    {
      label: "Total Users",
      value: 1200,
      icon: <FaUsers className="text-4xl mb-2 text-blue-300" />, 
    },
    {
      label: "Daily Food Donations",
      value: 350,
      icon: <FaHandHoldingHeart className="text-4xl mb-2 text-blue-300" />, 
    },
    {
      label: "Daily Food Served",
      value: 300,
      icon: <FaUtensils className="text-4xl mb-2 text-blue-300" />, 
    },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, i) => {
      let start = 0;
      const increment = Math.ceil(stat.value / 50);
      return setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(intervals[i]);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = start;
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach((int) => clearInterval(int));
  }, []);

  return (
    <section className="w-11/12 max-w-[1600px] mx-auto mt-12">
        <p className="text-primary text-center text-3xl font-semibold mb-6">Our Service</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:bg-green-300 hover:text-white transition-colors duration-300 flex flex-col items-center"
          >
            {stat.icon}
            <h3 className="text-4xl font-bold">{counts[index]}</h3>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
