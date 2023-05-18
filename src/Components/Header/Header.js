import React, { useEffect, useRef } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Header_Logo.svg";
import { HeaderData } from "./HeaderData";
import Navmenu from "./Navmenu";
import mail from "../../images/Top_header_mail.png";
import call from "../../images/top_header_call.png";

const Header = () => {
  const navigate = useNavigate();
  const navbar_ref = useRef();
  function handleScroll() {
    if (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) {
      if (navbar_ref.current) {
        navbar_ref.current.style.top = "0px";
      }
    } else {
      if (navbar_ref.current) {
        navbar_ref.current.style.top = "-150px";
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header className="show_nav" ref={navbar_ref}>
        <Navbar expand="lg">
          <div className="container">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav ">
                {HeaderData.slice(0, 6).map((item, i) => {
                  return <Navmenu key={i} item={item} />;
                })}
              </ul>

              <div class="header_btn">
                {HeaderData.slice(-1).map((e, i) => {
                  return (
                    <button
                      type="button"
                      class="btn btn-primary"
                      key={i}
                      onClick={() => navigate(e.path)}
                    >
                      {e.title}
                    </button>
                  );
                })}
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
      <section class="troo_da_top_header_wrapper">
        <div class="container">
          <div class="troo_da_top_header_outer d-flex align-items-center justify-content-between">
            <div class="troo_da_top_header_left">
              <div class="troo_da_top_header_social_icon">
                <div class="troo_da_top_header_inner d-flex">
                  <span>Connect with us</span>
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
              </div>
            </div>
            <div class="troo_da_top_header_right d-flex">
              <div class="troo_da_top_header_right_inner d-flex">
                <div class="call">
                  <img src={call} alt="Call" />
                </div>
                <div class="call_detail">
                  <span>Call Us on</span>
                  <div class="number">
                    <a href="tel:+91 123 456 7890">+91 123 456 7890</a>
                  </div>
                </div>
              </div>
              <div class="troo_da_top_header_right_inner d-flex">
                <div class="mail">
                  <img src={mail} alt="Mail" />
                </div>
                <div class="mail_detail">
                  <span>Email Us</span>
                  <div class="number">
                    <a href="mailto:troohandyman@email.com">
                      troohandyman@email.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header>
        <Navbar expand="lg">
          <div className="container">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav ">
                {HeaderData.slice(0, 6).map((item, i) => {
                  return <Navmenu key={i} item={item} />;
                })}
              </ul>

              <div class="header_btn">
                {HeaderData.slice(-1).map((e, i) => {
                  return (
                    <button
                      type="button"
                      class="btn btn-primary"
                      key={i}
                      onClick={() => navigate(e.path)}
                    >
                      {e.title}
                    </button>
                  );
                })}
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
