import React from "react";
import "./TeamComponent.css";
import title from "../../images/title_img.png";
import team1 from "../../images/service_img-1.png";
import team2 from "../../images/service_img-5.png";
import team3 from "../../images/service_img-6.png";
import team4 from "../../images/service_img-2.png";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamComponent = () => {
  return (
    <section class="our_team_wrapper ">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="our_team_title">
              <div class="troo_da_hero_small_outer about d-flex justify-content-center">
                <div class="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div class="troo_da_hero_left_small_title">
                  <h4>Our team member</h4>
                </div>
              </div>
              <div class="troo_da_hero_we_r_done_title">
                <h2>Your work done by them</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img src={team1} alt="service_img-1" />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail our_team_hoverBox">
                  <h4>John Doe</h4>
                  <p>Founer and SEO</p>
                  <ul class="top_header_list d-flex">
                    <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h4>John Doe</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img src={team2} alt="service_img-5" />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail our_team_hoverBox">
                  <h4>Patsy Parra</h4>
                  <p>Founer and SEO</p>
                  <ul class="top_header_list d-flex">
                    <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h4>Patsy Parra</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img src={team3} alt="service_img-6" />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail our_team_hoverBox">
                  <h4>Anderson Rich</h4>
                  <p>Founer and SEO</p>
                  <ul class="top_header_list d-flex">
                    <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h4>Anderson Rich</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img src={team4} alt="team_2" />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail our_team_hoverBox">
                  <h4>Alon Enloe</h4>
                  <p>Founer and SEO</p>
                  <ul class="top_header_list d-flex">
                    <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h4>Alon Enloe</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="troo_da_about_we_r_done_btn text-center">
          <Link to="/Home/Our_Team">
          <button type="button" class="btn btn-primary">
            View All Team
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
