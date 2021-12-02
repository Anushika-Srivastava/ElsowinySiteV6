import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function HomeTabs(){

        let tab1 = "Main skills",
        tab3 = "Experience",
        tab4 = "Education",
        tab5 = "Frameworks & Tools";
        let tabStyle = "tab-style--1";
        
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                     {/*   <Tab>{tab2}</Tab>   */}
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                        <Tab>{tab5}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                            <li>
                                                    <span className="tabHeader">Web Apps - <span className="lvl">4 Years</span></span>
                                                    <br />
                                                    React, Node.js/Express, Vanilla JavaScript, HTML, etc
                                                </li>

                                                <li>
                                                    <span className="tabHeader">Software Development - <span className="lvl">3 Years</span></span>
                                                    <br />
                                                    Python and Java software development.
                                                </li>
                                                
                                                <li>
                                                    <span className="tabHeader">App Development - <span className="lvl">1 Year</span></span>
                                                    <br />
                                                    React Native app development for cross-platform mobile apps.
                                                </li>
                                                <li>
                                                    <span className="tabHeader">DevOps and Testing - <span className="lvl">1 ½ Years</span></span>
                                                    <br />
                                                    Configuring remote servers, setting up repositories with CI/CD pipelines, integrating testing, etc.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <span className="tabHeader">Software Engineer - <span className="lvl">Self</span></span>
                                                   <br />
                                                   2020 - Current
                                               </li>
                                               <li>
                                                   <span className="tabHeader">Developer - <span className="lvl">King Willy Studios</span></span>
                                                   <br />
                                                   2020 - Current
                                               </li>
                                               <li>
                                                   <span className="tabHeader">Analyst - <span className="lvl">Bloomberg </span></span>
                                                   <br /> 
                                                   2018 - 2019
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                               <span className="tabHeader">Masters in Computer Science<span> - Columbus State, GA</span></span>
                                                  <br />
                                                  <span>*Concentration in Software Engineering - <span>2022</span></span>
                                               </li>
                                               <li>
                                               <span className="tabHeader">Bachelors in Economics<span> - Rutgers University, NJ</span></span>
                                                <br />
                                                <span>*Minor in Music - <span>2018</span></span>
                                               </li>
                    
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <strong>React</strong>  &emsp;&emsp; <strong>Node.js</strong>
                                                   &emsp;&emsp; <strong>Express</strong>
                                               </li>
                                               <li>
                                                   
                                               </li>
                                               <li>
                                                   <strong>Django</strong>&emsp;&emsp;<strong>Flask</strong>
                                                   &emsp;&emsp;<strong>Python</strong>
                                               </li>
                                               <li>
                                                   <strong>TypeScript</strong>&emsp;&emsp; <strong>React Native</strong>
                                                   &emsp;&emsp; <strong>Redux</strong>
                                               </li>
                    
                                               <li>
                                                   <strong>MySql</strong>&emsp;&emsp; <strong>MongoDB</strong>
                                                    &emsp;&emsp; <strong>PostgreSQL</strong>
                                               </li>
                                               <li>
                                                <strong>Git</strong>&emsp;&emsp; <strong>GitHub</strong>
                                                &emsp;&emsp; <strong>BitBucket</strong>
                                                </li>
                                              
                                               <li>
                                                    <strong>Jest</strong>&emsp;&emsp; <strong>React Testing Library</strong>
                                                    &emsp;&emsp; <strong>Enzyme</strong>
                                                </li>

                                            <li>
                                                   <strong>FireBase</strong>&emsp;&emsp; <strong>AWS</strong>
                                                    &emsp;&emsp; <strong>Google Cloud</strong>
                                                    &emsp;&emsp; <strong>Heroku</strong>
                                                    &emsp;&emsp; <strong>Netlify</strong>
                                               </li>
                                          
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }


