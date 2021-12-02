import React from 'react'
import config from "./config";
import myBitmi from "./bitmi.png";
export default function About() {
    let title = config.title, description = config.description;


    return (

         <div id="about" className="fix">
         <div className="about-area ptb--120  bg_color--1">
             <div className="about-wrapper">
                 <div className="container">

                     <div className="row row--35 align-items-center">
                         <div className="col-lg-5">
                             <div className="thumbnail">
                                 <img className="w-100" src={myBitmi} alt="Sherief Elsowiny"/>
                             </div>
                         </div>
                         <div className="col-lg-7">
                             <div className="about-inner inner">
                                 <div className="section-title">
                                     <a href="/about"><h2 className="title">{title}</h2></a>
                                     <p className="description">{description}</p>
                                 </div>
                                 <div className="row mt--30">
                                    {/* <TabTwo tabStyle="tab-style--1" /> */}
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
