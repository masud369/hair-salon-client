import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../ContactUs/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Heder';
import OurServices from '../OurServices/OurServices';
import OurWorks from '../OurWorks/OurWorks';
import ReviewSection from '../ReviewSection/ReviewSection';
const Home = () => {
    return (
        <div>
            <Header />
            <OurWorks />
            <OurServices />
            <AboutUs />
            <ReviewSection />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;