import React from 'react';

const Important = () => {
    return (

        <section className="max-w-[1600px] w-11/12 mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Why Food is Important?</h2>
            <div className="flex flex-col md:flex-row gap-6">

                <div className="flex-1 bg-white text-black border-2 border-green-400 p-6 rounded-lg shadow-md text-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-3 ">Nourishment & Energy</h3>
                    <p>
                        Food provides the essential nutrients and energy required for our bodies to grow,
                        repair, and stay active throughout the day.
                    </p>
                </div>

                <div className="flex-1 bg-white text-black border-2 border-green-400 p-6 rounded-lg shadow-md text-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-3">Health & Immunity</h3>
                    <p>
                        A balanced diet strengthens the immune system, helping to fight illnesses
                        and maintain overall wellbeing.
                    </p>
                </div>

                <div className="flex-1 bg-white text-black border-2 border-green-400 p-6 rounded-lg shadow-md text-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-3">Community & Sustainability</h3>
                    <p>
                        Sharing food and reducing waste supports communities, protects the environment,
                        and promotes sustainable living for future generations.
                    </p>
                </div>

                {/* New card */}
                <div className="flex-1 bg-white text-black border-2 border-green-400 p-6 rounded-lg shadow-md text-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-3">Innovation & Growth</h3>
                    <p>
                        Creativity in food production and distribution helps build stronger economies,
                        support farmers, and introduce healthier choices for everyone.
                    </p>
                </div>

            </div>


        </section>

    );
};

export default Important;