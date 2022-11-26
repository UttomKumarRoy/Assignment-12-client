import React from 'react';
import Advertisement from './Advertisement';
import Banner from './Banner';
import CompanySummary from './CompanySummary';
import Footer from './Footer';
import ProductCategories from './ProductCategories';

const Home = () => {
    return (
        <div> <br /> <br />
            <Banner></Banner> <br /> <br />
            <Advertisement></Advertisement> <br /> <br />
            <ProductCategories></ProductCategories> <br /> <br />
            <CompanySummary></CompanySummary> <br /> <br />
            <Footer></Footer> <br />
        </div>
    );
};

export default Home;