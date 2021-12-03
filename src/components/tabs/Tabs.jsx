import React from "react";
import {DiReact} from "react-icons/di"; 
import {IoLogoNodejs} from "react-icons/io";
import {SiExpress} from "react-icons/si";
import {DiDjango} from "react-icons/di";
import {SiFlask, SiPython,
     SiTypescript, SiRedux, SiMysql,
      SiMongodb, SiPostgresql,SiGithub,SiBitbucket,
       SiJest, SiTestinglibrary, SiAirbnb,
    SiFirebase, SiAmazonaws, SiGoogle, SiHeroku, SiDocker, SiKubernetes,
     SiJava, SiSpringboot, SiHtml5, SiCss3} from "react-icons/si";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {FaGit} from "react-icons/fa"
import {DiSass} from "react-icons/di";

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
                                                   <span className="tabHeader">Software Engineer - <span className="lvl">Black Axe Tech (cofounded)</span></span>
                                                   <br />
                                                   2021 - Current
                                               </li>
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
                                               <span className="tabHeader">Masters in Computer Science<span className="lvl"> - Columbus State, GA</span></span>
                                                  <br />
                                                  <span>*Concentration in Software Engineering - <span>2022</span></span>
                                               </li>
                                               <li>
                                               <span className="tabHeader">Bachelors in Economics<span className="lvl"> - Rutgers University, NJ</span></span>
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
                                                   <span className="lvlSkills"><DiReact size={50} /></span> 
                                                   <span className="lvlSkillsTwo">React</span>
                                                    &emsp;&emsp; 
                                                    <span className="lvlSkills"><IoLogoNodejs size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Node.js</span>                                                      
                                                   &emsp;&emsp; 
                                                   <span className="lvlSkills"><SiExpress size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Express</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><SiDocker size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Docker</span>
                                               </li>
                                               <li>
                                               <span className="lvlSkills"><DiDjango size={50} />  </span>
                                                    <span className="lvlSkillsTwo">Django</span>
                                                    &emsp;&emsp;
                                                    
                                                    <span className="lvlSkills"> <SiFlask size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Flask</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><SiPython size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Python</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><SiJava size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Java</span>
                                                    
                                               </li>
                                               <li>
                                                   <span className="lvlSkills"><SiTypescript size={50} />  </span>
                                                    <span className="lvlSkillsTwo">Typescript</span>
                                                    &emsp;&emsp;
                                                   <span className="lvlSkills"><DiReact size={50} /> </span>
                                                    <span className="lvlSkillsTwo">React Native</span>
                                                   &emsp;&emsp; 
                                                   <span className="lvlSkills"><SiRedux size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Redux</span>
                                                    &emsp;&emsp;
                                                  
                                               </li>
                    
                                               <li>
                                                   <span className="lvlSkills"><SiMysql size={50} /> </span>
                                                    <span className="lvlSkillsTwo">MySQL</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><SiMongodb size={50} /> </span>
                                                    <span className="lvlSkillsTwo">MongoDB</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><SiPostgresql size={50} /> </span>
                                                     <span className="lvlSkillsTwo">PostgreSQL</span>
                                               </li>
                                               <li>
                                                   <span className="lvlSkills"><FaGit size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Git</span>
                                                    &emsp;&emsp; 
                                                    <span className="lvlSkills"><SiGithub size={50} /> </span>
                                                    <span className="lvlSkillsTwo">GitHub</span>
                                                    &emsp;&emsp; 
                                                    <span className="lvlSkills"><SiBitbucket size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Bit Bucket</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><SiCss3 size={50} /> </span>
                                                    <span className="lvlSkillsTwo">CSS</span>
                                                </li>
                                              
                                               <li>
                                                   <span className="lvlSkills"><SiJest size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Jest</span>
                                                    &emsp;&emsp;

                                                    <span className="lvlSkills"><SiTestinglibrary size={50} /> </span>
                                                    <span className="lvlSkillsTwo">React Testing Library</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><SiAirbnb size={50} /> </span> 
                                                    <span className="lvlSkillsTwo">Enzyme</span>
                                                </li>

                                            <li>
                                                <span className="lvlSkills"><SiFirebase size={50} /> </span>
                                                <span className="lvlSkillsTwo">Firebase</span>
                                                &emsp;&emsp;
                                                <span className="lvlSkills"><SiAmazonaws size={50} /> </span>
                                                <span className="lvlSkillsTwo">AWS</span>
                                                &emsp;&emsp;
                                                <span className="lvlSkills"><SiGoogle size={50} /> </span>
                                                <span className="lvlSkillsTwo">Google Cloud</span>
                                                &emsp;&emsp;
                                                <span className="lvlSkills"><SiHeroku size={50} /> </span>
                                                <span className="lvlSkillsTwo">Heroku</span>
                                                &emsp;&emsp;

                                               </li>
                                                  <li>
                                                  <span className="lvlSkills"><SiKubernetes size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Kubernetes</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><SiSpringboot size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Spring Boot</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><SiHtml5 size={50} /> </span>
                                                    <span className="lvlSkillsTwo">HTML5</span>
                                                    &emsp;&emsp;
                                                    <span className="lvlSkills"><DiSass size={50} /> </span>
                                                    <span className="lvlSkillsTwo">Sass</span>
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


