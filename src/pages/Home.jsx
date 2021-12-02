import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../components/common/Helmet";
//import FooterTwo from "../component/footer/FooterTwo";
//import TabTwo from "../elements/tab/TabTwo";
//import PortfolioList from "../elements/portfolio/PortfolioList";
//import ServiceTwo from "../elements/service/ServiceTwo";
//import Contact from "../elements/contact/ContactInfo";


import About from '../components/about/About';
import Slider from '../components/slider/Slider';
import Services from '../components/services/Services';

import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/portfolio";



const HomePage = () => {
   

    return (
    <div>
            {/* seo content */}
            <Helmet/>
        <div className="active-dark">
        

            <Header />
            <Slider />
            <About />
            <Services />
            <Portfolio displayCount = {6} />
              

           

            <div id="contact" className="fix">
            <div className="container ">
            <div className="row ">
            <div className="rn-contact-area ptb--120">
          {/*  <Contact /> */}
            </div>
            </div>
            </div>
            </div>
           {/* <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>

    </div>
    )
}

export default HomePage;
