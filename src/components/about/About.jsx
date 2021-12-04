import React from 'react'
import config from "./config";
import myBitmi from "./reefsanta.png";
import HomeTabs from '../tabs/Tabs';
export default function About() {
    let title = config.title, description = config.description;


    return (

         <div id="about" className="fix">
         <div className="about-area ptb--120  bg_color--1">
             <div className="about-wrapper">
                 <div className="container">

                     <div className="row row--35 align-items-center">
                         <div className="col-lg-5 visibleOverParticles">
                             <div className="thumbnail">
                                 <img className="w-100" src={myBitmi} alt="Sherief Elsowiny"/>
                             </div>
                         </div>
                         <div className="col-lg-7 visibleOverParticles">
                             <div className="about-inner inner">
                                 <div className="section-title">
                                     <a href="/about"><h2 className="title">{title}</h2></a>
                                     <p className="description">
                                                Software developer and computer scientist.
                                                <br/>
                                                    I am currently pursuing a master's degree in computer science from Columbus State University.
                                                    This site will be updated periodically and contain some of my many projects.
                                                More of my projects and the accompanying code can be found on my github page.
                                     </p>
                                 </div>
                                 <div className="row mt--30">
                                    <HomeTabs/>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     
    )
}
