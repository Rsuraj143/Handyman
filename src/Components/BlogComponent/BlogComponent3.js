import React from "react";
import blog1 from "../../images/our_team_img_3.png";
import blog2 from "../../images/lastest_blog_2.png";
import blog3 from "../../images/lastest_blog_3.png";
import "./BlogDetails.css"

const BlogComponent3 = () => {
  return (
    <section class="read_ur_latest_blox_wrapper blog_detail_latest">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="troo_da_about_hero_handyman_title">
              <h2>Realeted Blogs</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img src={blog1} alt="our_team_img_3" />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail">
                  <h3>When have a problem with cracked pipes</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting & industry. Lorem Ipsum has...
                  </p>
                  <div class="readmore">
                    <p>Continue More</p>
                  </div>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h4>Best repairs for a car's resale or trade-in value</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img src={blog2} alt="lastest_blog_2" />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail">
                  <h3>The most common painting mistakes</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting & industry. Lorem Ipsum has...
                  </p>
                  <div class="readmore">
                    <p>Continue More</p>
                  </div>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h4>The most common painting mistakes</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img src={blog3} alt="lastest_blog_3" />
                </div>
                <div class="troo_da_hand_we_r_done_box_hover_detail">
                  <h3>Dangers of having high water pressure</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting & industry. Lorem Ipsum has...
                  </p>
                  <div class="readmore">
                    <p>Continue More</p>
                  </div>
                </div>
                <div class="troo_da_hand_we_r_done_box_title">
                  <h4>Dangers of having high water pressure</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent3;
