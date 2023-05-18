import React from 'react'
import "./ServiceListComponent.css"
import title from "../../images/title_img.png"
import service1 from "../../images/service_img-1.png"
import service2 from "../../images/service_img-2.png"
import service3 from "../../images/service_img-3.png"
import service4 from "../../images/service_img-4.png"
import service5 from "../../images/service_img-5.png"
import service6 from "../../images/service_img-6.png"
import serviceArrow from "../../images/service_box_Arrow.svg"
import Arrowyellow from "../../images/service_box_yellow_icon.png"


const ServiceListComponent = () => {
  return (
    <section class="service_box_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="troo_da_hand_we_r_done_title_outer m-auto text-center">
                        <div class="troo_da_hero_small_outer about d-flex justify-content-center">
                            <div class="troo_da_small_title_img zoom-in-zoom-out">
                                <img src={title} alt="title_img"/>
                            </div>
                            <div class="troo_da_hero_left_small_title">
                                <h4>What we are done</h4>
                            </div>
                        </div>
                        <div class="troo_da_hero_we_r_done_title">
                            <h2>We provide one of the
                                best of handyman services</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="servive_box d-flex align-items-center">
                        <div class="service_box_img_outer">
                            <img src={service1} alt="service_img-1"/>
                        </div>
                        <div class="service_box_detail">
                            <div class="service_box_title">
                                <h4>Painting Services</h4>
                            </div>
                            <div class="service_box_content">
                                <p>Lorem Ipsum is & simply dummy text of the printing and is typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy.</p>
                            </div>
                            <div class="service_box_readmore d-flex">
                                <span>Read More</span>
                                <div class="servive_box_img_arrow">
                                    <div class="servive_box_blue_icon">
                                        <img src={serviceArrow} alt="service_box_Arrow"/>
                                    </div>
                                    
                                    <div class="service_box_yellow_icon">
                                        <img src={Arrowyellow} alt="service_box_yellow_icon"/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="servive_box d-flex align-items-center">
                        <div class="service_box_img_outer">
                            <img src={service2} alt="service_img-2"/>
                        </div>
                        <div class="service_box_detail">
                            <div class="service_box_title">
                                <h4>Plumbing Services</h4>
                            </div>
                            <div class="service_box_content">
                                <p>Lorem Ipsum is & simply dummy text of the printing and is typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy.</p>
                            </div>
                            <div class="service_box_readmore d-flex">
                                <span>Read More</span>
                                <div class="servive_box_img_arrow">
                                    <div class="servive_box_blue_icon">
                                        <img src={serviceArrow} alt="service_box_Arrow"/>
                                    </div>
                                    
                                    <div class="service_box_yellow_icon">
                                        <img src={Arrowyellow} alt="service_box_yellow_icon"/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="servive_box d-flex align-items-center">
                        <div class="service_box_img_outer">
                            <img src={service3} alt="service_img-3"/>
                        </div>
                        <div class="service_box_detail">
                            <div class="service_box_title">
                                <h4>Electrical Services</h4>
                            </div>
                            <div class="service_box_content">
                                <p>Lorem Ipsum is & simply dummy text of the printing and is typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy.</p>
                            </div>
                            <div class="service_box_readmore d-flex">
                                <span>Read More</span>
                                <div class="servive_box_img_arrow">
                                    <div class="servive_box_blue_icon">
                                        <img src={serviceArrow} alt="service_box_Arrow"/>
                                    </div>
                                    
                                    <div class="service_box_yellow_icon">
                                        <img src={Arrowyellow} alt="service_box_yellow_icon"/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="servive_box d-flex align-items-center">
                        <div class="service_box_img_outer">
                            <img src={service4} alt="service_img-4"/>
                        </div>
                        <div class="service_box_detail">
                            <div class="service_box_title">
                                <h4>Home Renovation</h4>
                            </div>
                            <div class="service_box_content">
                                <p>Lorem Ipsum is & simply dummy text of the printing and is typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy.</p>
                            </div>
                            <div class="service_box_readmore d-flex">
                                <span>Read More</span>
                                <div class="servive_box_img_arrow">
                                    <div class="servive_box_blue_icon">
                                        <img src={serviceArrow} alt="service_box_Arrow"/>
                                    </div>
                                    
                                    <div class="service_box_yellow_icon">
                                        <img src={Arrowyellow} alt="service_box_yellow_icon"/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="servive_box d-flex align-items-center">
                        <div class="service_box_img_outer">
                            <img src={service5} alt="service_img-5"/>
                        </div>
                        <div class="service_box_detail">
                            <div class="service_box_title">
                                <h4>Cleaning Services</h4>
                            </div>
                            <div class="service_box_content">
                                <p>Lorem Ipsum is & simply dummy text of the printing and is typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy.</p>
                            </div>
                            <div class="service_box_readmore d-flex">
                                <span>Read More</span>
                                <div class="servive_box_img_arrow">
                                    <div class="servive_box_blue_icon">
                                        <img src={serviceArrow} alt="service_box_Arrow"/>
                                    </div>
                                    
                                    <div class="service_box_yellow_icon">
                                        <img src={Arrowyellow} alt="service_box_yellow_icon"/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="servive_box d-flex align-items-center">
                        <div class="service_box_img_outer">
                            <img src={service6} alt="service_img-6"/>
                        </div>
                        <div class="service_box_detail">
                            <div class="service_box_title">
                                <h4>Carpenter Services</h4>
                            </div>
                            <div class="service_box_content">
                                <p>Lorem Ipsum is & simply dummy text of the printing and is typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy.</p>
                            </div>
                            <div class="service_box_readmore d-flex">
                                <span>Read More</span>
                                <div class="servive_box_img_arrow">
                                    <div class="servive_box_blue_icon">
                                        <img src={serviceArrow} alt="service_box_Arrow"/>
                                    </div>
                                    
                                    <div class="service_box_yellow_icon">
                                        <img src={Arrowyellow} alt="service_box_yellow_icon"/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceListComponent