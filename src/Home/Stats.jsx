import React, { useState, useEffect } from "react";
import { FaUsers, FaUtensils, FaHandHoldingHeart } from "react-icons/fa";

const Stats = () => {
  const statsData = [
    {
      label: "Total Users",
      value: 1200,
      icon: <FaUsers className="text-5xl mb-3 text-green-500" />,
    },
    {
      label: "Daily Food Donations",
      value: 350,
      icon: <FaHandHoldingHeart className="text-5xl mb-3 text-green-500" />,
    },
    {
      label: "Daily Food Served",
      value: 300,
      icon: <FaUtensils className="text-5xl mb-3 text-green-500" />,
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
      <p className="text-green-700 text-center text-3xl font-extrabold mb-10 tracking-wide">
        Our Service
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 border border-green-200 flex flex-col items-center"
          >
            {stat.icon}
            <h3 className="text-5xl font-extrabold text-green-700">{counts[index]}</h3>
            <p className="mt-2 text-xl font-semibold text-green-600">{stat.label}</p>
            {/* Graphical colored bar below the number */}
            <div className="w-24 h-1 rounded-full bg-green-400 mt-4 animate-pulse"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
