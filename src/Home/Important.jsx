import React from 'react';

const Important = () => {
    return (

        <section className="w-11/12 max-w-6xl mx-auto my-16 py-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-yellow-700">Why Food is Important?</h2>
            <div className="flex flex-col md:flex-row gap-6">

                <div className="flex-1 bg-yellow-100 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-800">Nourishment & Energy</h3>
                    <p className="text-yellow-900">
                        Food provides the essential nutrients and energy required for our bodies to grow,
                        repair, and stay active throughout the day.
                    </p>
                </div>

                <div className="flex-1 bg-yellow-100 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-800">Health & Immunity</h3>
                    <p className="text-yellow-900">
                        A balanced diet strengthens the immune system, helping to fight illnesses
                        and maintain overall wellbeing.
                    </p>
                </div>

                <div className="flex-1 bg-yellow-100 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-800">Community & Sustainability</h3>
                    <p className="text-yellow-900">
                        Sharing food and reducing waste supports communities, protects the environment,
                        and promotes sustainable living for future generations.
                    </p>
                </div>

            </div>
        </section>

    );
};

export default Important;