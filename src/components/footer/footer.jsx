import React from 'react';
import {FaTwitter ,FaInstagram  , FaLinkedinIn} from "react-icons/fa";
import logo from "../header/elsowiz.png";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/sheriefelsowiny'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/wiszird'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/wiszird'},
]


const Footer = () => {

    let currentYear = new Date().getFullYear();
    let Copyright = `Copyright ${currentYear}`
    return (
        <div className="footer-style-2 bg_image bg_image--1 visibleOverParticles" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/">
                                    <img src={logo} id="logoResize" alt="sherief elsowiny"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}    target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>{Copyright} <span className="blueify">Elsowiny.com</span> All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;