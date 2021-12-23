import React from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../components/header/InnerHeader";
import Footer from "../../components/footer/Footer";
import Particles from "../particles/Particles";
import Helmet from "../../components/common/Helmet";
import EVOTE from "./papers/BlockChain Evoting Research.docx";
import TESTPAPER from "./papers/Blockchain implemented in Javascript tested using Jest Testing Framework.docx";
import COMPARISONPAPER from "./papers/javascriptandpython.docx";


const ResearchPapers = [
     
      {
            id: 1,
            title: "JavaScript and Python a comparison of the two and their tooling within web applications",
            description: "A deep dive into JavaScript and Python landing on React and Django and the combination of these two languages and their tooling within web applications",
            download: COMPARISONPAPER,
            author: "Sherief Elsowiny",
      },
      
      {
            id: 2,
            title: "Blockchain implemented in JavaScript tested using Postman and Jest Testing Framework",
            description: "Testing of an old Blockchain that I had created, using Javascript and Jest Testing Framework as well as Postman",
            download: TESTPAPER,
            author: "Kavya Nannaka, Sherief Elsowiny",
      },
      {
            id: 3,
            title: "Analysis of Secure Electronic Voting Using Blockchain Technology",
            description: "Blockchain Evoting Research Explores the use of Blockchain technology to implement an Electronic Voting System",
            download: EVOTE,
            author:"Carter H. Corneil, Sherief Elsowiny"
      },
]

const RESEARCHIMGURL = 'https://raw.githubusercontent.com/elsowiny/DigitalAssets/master/Research.png';
export default function Research(){
    
    
        return(
            <React.Fragment>

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area *
                <Breadcrumb title={'Blog'}   />
                {/* End Breadcrump Area */}
                  <Helmet pageTitle="Sherief Elsowiny Research Papers" />



            <div className="active-dark">

                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--1">
                <div className="frame-layout__particles">
                    <Particles /> 
                           
                </div>      
                    <div className="container blogContainer">
                 
             
                        <div className="row">
                            {ResearchPapers.map((post, index) => (
                                  
     <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>                         
           <div className="blog blog-style--1">  

           <div className="thumbnail">
           <img className="w-100" src={RESEARCHIMGURL} alt="Blog Images"/>
          <a href={post.download}>

        <div className="content blog-display-content">
        <p className="blogtype author-glitched author-research" data-text={""}>
              {post.author}
              </p>
                <h2 data-text={"title"} className="elsowinyResearch">
                        {post.title}
                </h2>

 
                    <div className="blog-btn">
                                        <span className="rn-btn text-white">Download</span>
                                    </div>
            
        </div>
        </a>
        </div>
                 </div>                   
      </div>
      
                            ))} 
    </div>








                               
                          
                    </div>
                </div>
                {/* End Blog Area */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 
                </div>
            </React.Fragment>
        )
    }

