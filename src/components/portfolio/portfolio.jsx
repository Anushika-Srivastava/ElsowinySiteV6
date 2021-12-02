import React from 'react'
import {GiMicroscope} from "react-icons/gi";
import projectConfig from "./config";
var projects = projectConfig.ElsowinyPortfolioListContent;

export default function portfolio({displayCount}) {
    let styevariation = "text-center mt--40";
    let column = "col-lg-4 col-md-6 col-sm-6 col-12";

    projects = projects.slice(0, displayCount);
    return (

         <div id="portfolio" className="fix">
         <div className="portfolio-area ptb--120 bg_color--1">
             <div className="portfolio-sacousel-inner">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-12">
                             <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                 <h2 className="title">Elsowiny Laboratory</h2>
                                 <p>A collection of some of the projects I have worked on.</p>
                             </div>
                         </div>
                     </div>
                     <div className="row">
                          <React.Fragment> 
                             {projects.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                <div className={`portfolio ${styevariation}`}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href={value.page}>View Details <GiMicroscope /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    
                    </React.Fragment>
                     </div>
                     <div className="row">
                         <div className="col-lg-12">
                             <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                 <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More</span></a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    )
}
