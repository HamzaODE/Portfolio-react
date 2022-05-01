import React, { Fragment } from 'react'

function Feedback() {
    return (
        <Fragment>
            {/* <!-- Start Feedback--> */}
            <div id="feed" class="feedback-area de-padding">
                <div class="line_wrap">
                    {/* <!-- line animation --> */}
                    <div class="line_item"></div>
                    <div class="line_item"></div>
                    <div class="line_item"></div>
                    <div class="line_item"></div>
                    <div class="line_item"></div>
                </div>
                {/* <!-- end line animation --> */}
                <div class="container pl-20">
                    {/* <!-- start container --> */}
                    <div class="site-title text-center">
                        <span class="resume-title text-center wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">
                            Testimonial
                        </span>
                        <h2 data-splitting class="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".01s">
                            People What Are Saying
                        </h2>
                    </div>
                    {/* <!-- end section title --> */}
                    <div class="feedback-wpr feed-sldr">
                        {/* <!-- start feedback-wpr --> */}
                        <div class="feedback-box">
                            <div class="feedback-pc">
                                <i class="icofont-quote-left"></i>
                            </div>
                            <p>
                                Printing and typesetting industry Lorem Ipsum has the industry's standard dummy text ever the since the 1500s when an unknown took.
                            </p>
                            <div class="feedback-desc">
                                <img src="img/client/1.jpg" alt="audiobook maker" />
                                <div class="feedback-bio">
                                    <h5 class="fz-20 l-h-1">Devid Nikolas</h5>
                                    <span class="fz-16 l-h-1">Chairman, Square Inc</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end single feedback --> */}
                        <div class="feedback-box">
                            <div class="feedback-pc">
                                <i class="icofont-quote-left"></i>
                            </div>
                            <p>
                                Printing and typesetting industry Lorem Ipsum has the industry's standard dummy text ever the since the 1500s when an unknown took.
                            </p>
                            <div class="feedback-desc">
                                <img src="img/client/2.jpg" alt="audiobook maker" />
                                <div class="feedback-bio">
                                    <h5 class="fz-20 l-h-1">Devid Nikolas</h5>
                                    <span class="fz-16 l-h-1">Chairman, Square Inc</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end single feedback --> */}
                        <div class="feedback-box">
                            <div class="feedback-pc">
                                <i class="icofont-quote-left"></i>
                            </div>
                            <p>
                                Printing and typesetting industry Lorem Ipsum has the industry's standard dummy text ever the since the 1500s when an unknown took.
                            </p>
                            <div class="feedback-desc">
                                <img src="img/client/3.jpg" alt="audiobook maker" />
                                <div class="feedback-bio">
                                    <h5 class="fz-20 l-h-1">Devid Nikolas</h5>
                                    <span class="fz-16 l-h-1">Chairman, Square Inc</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end single feedback --> */}
                    </div>
                    {/* <!-- end feedback-wpr --> */}
                </div>
                {/* <!-- end container --> */}
            </div>
            {/* <!-- End Feedback --> */}
        </Fragment>
    )
}

export default Feedback