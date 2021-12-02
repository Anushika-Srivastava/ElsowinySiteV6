import React from 'react'
import ServicesList from './ServicesList';

const services = ServicesList.ElsowinyServiceList;

export default function Services() {
    let title = 'Services',
    description = 'Here are a select few services I offer. For more information, or to request a quote, please contact me.';
    return (
        <div id="service" className="service-area ptb--80  bg_image">
            <div className="container">
            <React.Fragment>
            <div className="row">
                <div className="col-lg-4 col-12">
                    <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                        <h2 className="title">{title}</h2>
                        <p>{description}</p>
                        
                    </div>
                </div>
                <div className="col-lg-8 col-12 mt_md--50">
                    <div className="row creative-service">
                        {services.map( (val , i) => (
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 servicesmain" key={i}>
                                
                                    <div className="service service__style--2 darkcontent">
                                        <div className="icon">
                                            {val.icon}
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
            </div>
     </div>

    )
}