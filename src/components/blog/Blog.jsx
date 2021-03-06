import React,  {  useEffect, useState } from "react";
import { sanitize } from 'dompurify';    
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../components/header/InnerHeader";
import Footer from "../../components/footer/Footer";
import { Link } from 'react-router-dom';
import Particles from "../particles/Particles";
import Helmet from "../../components/common/Helmet";

const fetchUrl = 'https://wiszird.com/wp-json/wp/v2/posts?categories=45&_embed';
const blogImgUrl = 'https://raw.githubusercontent.com/elsowiny/DigitalAssets/master/Article.png';
export default function Blog2(){
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch(fetchUrl);
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setPosts(posts);
            
            //console.log(posts);
        }
        loadPosts();
    }, [])

    const cleanTitle = (title) => {
          return title.replace(/[^a-zA-Z]/g, "");
      }
 
    
        //const posts = useFetch(fetchUrl);
       // useUpdateLogger(posts);
    
        return(
            <React.Fragment>

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area *
                <Breadcrumb title={'Blog'}   />
                {/* End Breadcrump Area */}
                  <Helmet pageTitle="Sherief Elsowiny Articles" />



            <div className="active-dark">

                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--1">
                <div className="frame-layout__particles">
                    <Particles /> 
                           
                </div>      
                    <div className="container blogContainer">
                 
             
                        <div className="row">
                            {posts.map((post, index) => (
                                  
     <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>                         
           <div className="blog blog-style--1">  

           <div className="thumbnail">
           <img className="w-100" src={blogImgUrl} alt="Blog Images"/>
          <Link  to={{
              pathname: '/articles/'+(post.slug),
              state:    {
                  post:post
                }
            
        }} >










        <div className="content blog-display-content">
        <p className="blogtype author-glitched" data-text={post._embedded['wp:term'][0][0].slug}>{post._embedded['wp:term'][0][0].slug}</p>
                <h2 data-text={cleanTitle(post?.title?.rendered)} className="elsowinyBlog"
                    dangerouslySetInnerHTML={{__html: sanitize(post.title.rendered)}} />
 
                    <div className="blog-btn">
                                        <span className="rn-btn text-white" href={post.slug}>Read More</span>
                                    </div>
            
        </div>
        </Link>
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

