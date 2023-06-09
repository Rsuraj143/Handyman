import React from "react";
import "./BlogComponent.css";
import title from "../../images/title_img.png";
import { BlogData } from "./BlogData";
import { Link, createSearchParams } from "react-router-dom";

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
              <Link to="/Home/Our_Blogs">
              <button type="button" class="btn btn-primary">
                See All Blogs
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="row">
        {BlogData.slice(0, 3).map((e, i) => (
            <div class="col-lg-4" key={i}>
              <Link to={`/Home/Our_Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
              <div class="troo_da_hand_we_r_done_box">
                <div class="troo_da_hand_we_r_done_box_inner">
                  <div class="troo_da_hand_we_r_done_box_img">
                    <img src={e.img} alt="lastest_blog_1" />
                  </div>
                  <div class="troo_da_hand_we_r_done_box_hover_detail">
                    <h3>{e.name} </h3>
                    <p>{e.para}</p>
                    <div class="readmore">
                      <p>{e.btn} </p>
                    </div>
                  </div>
                  <div class="troo_da_hand_we_r_done_box_title">
                    <h3>{e.name} </h3>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
