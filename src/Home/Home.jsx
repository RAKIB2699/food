import React from 'react';
import Banner from './Banner';
import FeaturedFood from './FeaturedFood';

import Important from './Important';
import Work from './Work';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <Important></Important>
            <Work></Work>
        </div>
    );
};

export default Home;