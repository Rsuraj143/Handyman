import React from 'react'
import "./FAQComponenent.css"
import wrong from "../../images/wrong_icon_bg.png"
import faqBG from "../../images/faq_bg_2.png"
import title from "../../images/title_img.png"

const FAQComponenent = () => {
  return (
    <section class="our_faq_wrapper">
        <div class="faq_bg_1 action">
            <img src={wrong} alt="wrong_icon_bg" />
        </div>
        <div class="faq_bg_2 action ">
            <img src={faqBG} alt="faq_bg_2" />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="troo_da_hand_we_r_done_title_outer m-auto text-center">
                        <div class="troo_da_hero_small_outer about d-flex justify-content-center">
                            <div class="troo_da_small_title_img zoom-in-zoom-out">
                                <img src={title} alt="title_img"/>
                            </div>
                            <div class="troo_da_hero_left_small_title">
                                <h4>Do you have Questions?</h4>
                            </div>
                        </div>
                        <div class="troo_da_hero_we_r_done_title">
                            <h2>Frequently asked questions</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="our_faq_left">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading1">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                        <h5>How Much Does A Handyman Charge Per Hour?</h5>
                                    </button>
                                </h2>
                                <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting
                                            industry. Lorem Ipsum has been is text of the printing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                        <h5>What Kind Of Work Can A Handyman Do?</h5>
                                    </button>
                                </h2>
                                <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting
                                            industry. Lorem Ipsum has been is text of the printing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        <h5>Does A Handyman Need Insurance?</h5>
                                    </button>
                                </h2>
                                <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting
                                            industry. Lorem Ipsum has been is text of the printing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading4">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        <h5>Can A Handyman Do Plumbing Work?</h5>
                                    </button>
                                </h2>
                                <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting
                                            industry. Lorem Ipsum has been is text of the printing.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="our_faq_right">
                        <div class="accordion" id="accordionExample2">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingLeft6">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseLeft6" aria-expanded="false"
                                        aria-controls="collapseLeft6">
                                        <h5>How Much Does A Handyman Charge Per Hour?</h5>
                                    </button>
                                </h2>
                                <div id="collapseLeft6" class="accordion-collapse collapse"
                                    aria-labelledby="headingLeft6" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                        <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting
                                            industry. Lorem Ipsum has been is text of the printing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading12">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                        <h5>What Kind Of Work Can A Handyman Do?</h5>
                                    </button>
                                </h2>
                                <div id="collapse12" class="accordion-collapse collapse" aria-labelledby="heading12"
                                    data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                        <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting
                                            industry. Lorem Ipsum has been is text of the printing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading13">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                        <h5>Does A Handyman Need Insurance?</h5>
                                    </button>
                                </h2>
                                <div id="collapse13" class="accordion-collapse collapse" aria-labelledby="heading13"
                                    data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                        <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting
                                            industry. Lorem Ipsum has been is text of the printing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading14">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                        <h5>Can A Handyman Do Plumbing Work?</h5>
                                    </button>
                                </h2>
                                <div id="collapse14" class="accordion-collapse collapse" aria-labelledby="heading14"
                                    data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                        <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting
                                            industry. Lorem Ipsum has been is text of the printing.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="troo_da_about_we_r_done_btn text-center">
                <button type="button" class="btn btn-primary">See All FAQ’s</button>
            </div>
        </div>
    </section>
  )
}

export default FAQComponenent