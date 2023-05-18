import React from "react";
import "./BlogComponent.css";
import title from "../../images/title_img.png"
import blog1 from "../../images/lastest_blog_1.png"
import blog2 from "../../images/lastest_blog_2.png"
import blog3 from "../../images/lastest_blog_3.png"

const BlogComponent = () => {
  return (
    <section class="read_ur_latest_blox_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="troo_da_hero_small_outer about d-flex">
              <div class="troo_da_small_title_img zoom-in-zoom-out">
                <img src={title} alt="title_img" />
              </div>
              <div class="troo_da_hero_left_small_title">
                <h4>Read our latest blogss</h4>
              </div>
            </div>
            <div class="troo_da_about_hero_handyman_title">
              <h2>We provide best plan for your needs</h2>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="pricing_title_content">
              <p>
                Lorem Ipsum is simply dummy and is text of the printing and
                typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply
                dummy and is text of the printing and typesetting industry.
                Lorem Ipsum has been.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_about_we_r_done_btn text-end">
              <button type="button" class="btn btn-primary">
                See All Blogs
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img
                    src={blog1}
                    alt="lastest_blog_1"
                  />
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
                  <h3>When have a problem with cracked pipes</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img
                    src={blog2}
                    alt="lastest_blog_2"
                  />
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
                  <h3>The most common painting mistakes</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_hand_we_r_done_box">
              <div class="troo_da_hand_we_r_done_box_inner">
                <div class="troo_da_hand_we_r_done_box_img">
                  <img
                    src={blog3}
                    alt="lastest_blog_3"
                  />
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
                  <h3>Dangers of having high water pressure</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
