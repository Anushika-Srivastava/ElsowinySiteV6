import React, { useRef, useState } from "react";
import logo from "../header/logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required")
});





export default function Contact(){
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = async data => {
        console.log("submitted");
        console.log(data);
        const token = await recaptchaRef.current.executeAsync();
        await verifyRecaptcha(token);
    }

    const recaptchaRef = useRef();

     const verifyRecaptcha = async(recaptchaToken) => {
         console.log(recaptchaToken);
         if(recaptchaToken){
             console.log("verified");
         }
         
    }

        return(
<div id="contact" className="fix">
    <div className="container ">
    <div className="row ">
        <div className="rn-contact-area ptb--120">
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact</h2>
                                <p className="description">I am available for freelance work, consulting, or tutoring. < br /> Connect with me via email:
                                    <a href="mailto:elsowiny@yahoo.com"> elsowiny@yahoo.com</a> </p>
                            </div>
                            <div className="form-wrapper">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="item01">
                                    {<p className="form-error">{errors.name?.message}</p>}
                                        <input {...register("name")}
                                            type="text"
                                            name="name"
                                            id="item01"
                                            placeholder="Your Name *"
                                        />
                                        

                                    </label>

                                    <label htmlFor="item02">
                                    {<p className="form-error">{errors.email?.message}</p>}
                                        <input
                                            {...register("email")}
                                            type="text"
                                            name="email"
                                            id="item02"
                                            placeholder="Your email *"
                                        />
                                        
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            placeholder="Write a Subject"
                                        />
                                        
                                    </label>
                                    <label htmlFor="item04">

                                    {<p className="form-error">{errors.message?.message}</p>}
                                        <textarea
                                            {...register("message")}
                                            type="text"
                                            id="item04"
                                            name="message"
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                   <br />
                                   <br />
                                    <ReCAPTCHA
                                        sitekey="6LeXEnEdAAAAAN4ECY182t8DjV-6fTFEbW8bSeN_" 
                                        size="invisible"
                                        theme="dark"
                                        ref={recaptchaRef}                    
                                    />
                                </form>

                               
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={logo} alt="elsowiny"/>
                            </div>
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