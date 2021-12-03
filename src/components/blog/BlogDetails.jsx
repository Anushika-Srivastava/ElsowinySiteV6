import React, { useEffect, useState } from "react";

import { FiClock , FiUser } from "react-icons/fi";

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from 'react-router-dom';
import Particles from "../particles/Particles";
import { useNavigate  } from "react-router-dom";
import {
    
    useLocation, useParams
  } from "react-router-dom";

  import { sanitize } from 'dompurify';      

const BlogDetails = ({match,  data}) => {
      const navigate = useNavigate()

      let {blogSlug} = useParams();

    const fetchUrl = `https://wiszird.com/wp-json/wp/v2/posts?slug=${blogSlug}`;
    const [postFromSlug, setPostFromSlug] = useState({});

    const dateConverter = (date) => {
        return new Date(date).toLocaleDateString();
      }

      

    useEffect(() => {
          
        async function getPostBySlug(){
            const response = await fetch(fetchUrl);
            if(!response.ok){
                return;
            }
            const postData = await response.json();
            console.log(postData);
            console.log(postData.length);
            if(!postData.length){
                  navigate("/404");                          
            }
            setPostFromSlug(postData[0]);           
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
            
            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7" data-black-overlay="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single-page-title text-center pt--100">
                                <h2 className="title theme-gradient" dangerouslySetInnerHTML={
                                    {__html: sanitize(postFromSlug?.title ? postFromSlug?.title?.rendered : 'invalid title' )}
                                    } />
                                <ul className="blog-meta d-flex justify-content-center align-items-center">
                                    <li><FiClock />{dateConverter(postFromSlug?.date)}</li>
                                    <li><FiUser />{"Sherief Elsowiny"}</li>
                                   
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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-wrapper">
                                <div className="inner" dangerouslySetInnerHTML={{__html: sanitize(
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