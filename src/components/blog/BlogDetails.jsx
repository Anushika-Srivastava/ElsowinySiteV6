import React, { useEffect, useState } from "react";

import { FiClock } from "react-icons/fi";
import {GiRobotAntennas} from "react-icons/gi";

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../components/header/InnerHeader";
import Footer from "../../components/footer/Footer";
import Particles from "../particles/Particles";
import { useNavigate  } from "react-router-dom";
import {useParams} from "react-router-dom";
import { sanitize } from 'dompurify';      
import Helmet from "../../components/common/Helmet";

const BlogDetails = ({match,  data}) => {
      const navigate = useNavigate()

      let {blogSlug} = useParams();

    const fetchUrl = `https://wiszird.com/wp-json/wp/v2/posts?slug=${blogSlug}`;
    const [postFromSlug, setPostFromSlug] = useState({});
    const [cleanedTitle, setCleanedTitle] = useState('');
    const [convertedDate, setConvertedDate] = useState('');

    const [pageTitle, setPageTitle] = useState('');
    const dateConverter = (date) => {
        return new Date(date).toLocaleDateString();
      }

      const titleStrip = (title) => {
           return title.replace(/[^a-zA-Z]/g, "");
      }

      

    useEffect(() => {
          
        async function getPostBySlug(){
            const response = await fetch(fetchUrl);
            if(!response.ok){
                return;
            }
            const postData = await response.json();
            if(!postData.length){
                  navigate("/404");                          
            }
            setPostFromSlug(postData[0]);
            let cleanTitle = titleStrip(postData[0].title.rendered);
            let cleanDate = dateConverter(postData[0].date);
            setConvertedDate(cleanDate);
            setCleanedTitle(cleanTitle);
            setPageTitle(cleanTitle + " - Sherief Elsowiny");
        };
        getPostBySlug();

        //cleanup
            return () => {
                  setPostFromSlug({});
                  };
        

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

   
        return (
            
            <React.Fragment>
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            
            <Helmet pageTitle={pageTitle? pageTitle : "Sherief Elsowiny Article"} />


            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7" data-black-overlay="7">
            <div className="frame-layout__particles">
                    <Particles /> 
                           
                </div>  
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single-page-title text-center pt--100">
                                <h2 data-text={cleanedTitle} className="title article-title" dangerouslySetInnerHTML={
                                    {__html: sanitize(postFromSlug?.title ? postFromSlug?.title?.rendered : 'invalid title' )}
                                    } />
                                <ul className="blog-meta d-flex justify-content-center align-items-center">
                                    <li><FiClock /><span className="author-glitched" data-text={convertedDate? convertedDate : ""}>{dateConverter(postFromSlug?.date)}</span></li>
                                    <li><GiRobotAntennas /><span className="author-glitched" data-text={"Sherief Elsowiny"}>{"Sherief Elsowiny"}</span></li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Blog Details */}
            <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                <div className="container">
                    <div className="row visibleOverParticles">
                        <div className="col-lg-12 visibleOverParticles">
                            <div className="inner-wrapper visibleOverParticles blog-content-white">
                                <div className="inner visibleOverParticles" dangerouslySetInnerHTML={{__html: sanitize(
                                    postFromSlug?.content ? postFromSlug?.content?.rendered : '' 
                                )}} />
                                   
                                  

                                       
                                                                       </div>
                            </div>
                        </div>
                    </div>
                </div>
            

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            <Footer /> 

        </React.Fragment>
                
                
                
                
                
                )
    
  
        }
export default BlogDetails;