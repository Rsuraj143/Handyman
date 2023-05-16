import React from "react";
import "./ServiceComponent.css";
import serviceBg from "../../images/what_we_r_done_bg_1.png"
import serviceBg2 from "../../images/what_we_r_done_bg_2.png"
import title from "../../images/title_img.png"
import service1 from "../../images/service_img-1.png"
import service2 from "../../images/service_img-2.png"
import service3 from "../../images/service_img-3.png"
import service4 from "../../images/service_img-4.png"
import service5 from "../../images/service_img-5.png"
import service6 from "../../images/service_img-6.png"

const ServiceComponent = () => {
  return (
    <section class="troo_da_hand_we_r_done_wrapper">
      <div class="what_we_r_done_bg_1">
        <img
          src={serviceBg}
          alt="what_we_r_done_bg_1"
        />
      </div>
      <div class="what_we_r_done_bg_2">
        <img
          src={serviceBg2}
          alt="what_we_r_done_bg_2"
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="troo_da_hand_we_r_done_title_outer m-auto text-center">
              <div class="troo_da_hero_small_outer about d-flex justify-content-center">
                <div class="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div class="troo_da_hero_left_small_title">
                  <h4>What we are done</h4>
                </div>
              </div>
              <div class="troo_da_hero_we_r_done_title">
                <h2>We provide one of the best of handyman services</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img
                    src={service1}
                    alt="service_img-1"
                  />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail">
                  <h3>Painting Services</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <div class="readmore">
                    <p>Read More</p>
                  </div>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h3>Painting Services</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img
                    src={service2}
                    alt="service_img-2"
                  />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail">
                  <h3>Plumbing Services</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <div class="readmore">
                    <p>Read More</p>
                  </div>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h3>Plumbing Services</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img
                    src={service3}
                    alt="service_img-3"
                  />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail">
                  <h3>Electrical Services</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <div class="readmore">
                    <p>Read More</p>
                  </div>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h3>Electrical Services</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img
                   src={service4}
                    alt="service_img-4"
                  />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail">
                  <h3>Home Renovation</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <div class="readmore">
                    <p>Read More</p>
                  </div>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h3>Home Renovation</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img
                   src={service5}
                    alt="service_img-5"
                  />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail">
                  <h3>Cleaning Services</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <div class="readmore">
                    <p>Read More</p>
                  </div>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h3>Cleaning Services</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img
                   src={service6}
                    alt="service_img-6"
                  />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail">
                  <h3>Carpenter Services</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <div class="readmore">
                    <p>Read More</p>
                  </div>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h3>Carpenter Services</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="troo_da_about_we_r_done_btn text-center">
          <button type="button" class="btn btn-primary">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
