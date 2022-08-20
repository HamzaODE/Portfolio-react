import React, { Fragment } from 'react'

function About() {
    return (
        <Fragment>
            {/* <!-- About us --> */}
            {/* Testing Multi Accounts */}
            {/* Testing Multi Accounts */}
            <div id="about" className="about-area de-padding">
                <div className="line_wrap">
                    {/* <!-- line animation --> */}
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                </div>
                {/* <!-- end line animation --> */}
                <div className="about-wpr mt-20">
                    {/* <!-- start about --> */}
                    <div className="container pl-20">
                        {/* <!-- container --> */}
                        <div className="row">
                            {/* <!-- row --> */}
                            <div className="col-md-5 mb-50">
                                <div className="about-left wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
                                    <div className="about-header-img">
                                        <img src="img/about-me.png" alt="about me" className="responsive-fluid bounce-animate" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- about left text end --> */}
                            <div className="col-md-7">
                                {/* <!-- col-7 --> */}
                                <div className="about-right wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                                    <span className="top-title">About Me</span>
                                    <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".1s">
                                        Creative Designer
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-duration=".2s" data-wow-delay=".2s">
                                        I am dedicated his life to learning what makes humans tick. He studies, researches and reads everything hecan, and shares his
                                        findings with his clients. His philosophy is to learn, test, analyse,
                                        improve and re-test. His motto is stay agile. I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco.
                                        <br />
                                        I code and create web elements for amazing people around the world. I like work with new people.
                                        New people new Experiences.
                                    </p>
                                    <div className="row">
                                        {/* <!-- row --> */}
                                        <div className="col-md-6 col-sm-12">
                                            {/* <!-- col-6 --> */}
                                            <div className="about-cn">
                                                <ul>
                                                    <li><i className="fas fa-user-tie"></i> Devid William</li>
                                                    <li><i className="fab fa-skype"></i> chat@devid</li>
                                                    <li><i className="far fa-envelope"></i> chat@example.com</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- end col-6 --> */}
                                        <div className="col-md-6 col-sm-12">
                                            {/* <!-- col-6 --> */}
                                            <div className="about-cn">
                                                <ul>
                                                    <li><i className="fas fa-map-marker-alt"></i> 205 NewYork, USA</li>
                                                    <li><i className="fas fa-birthday-cake"></i> 14 Jan, 1988</li>
                                                    <li><i className="fab fa-whatsapp"></i> 123 456 7899</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- end col-6 --> */}
                                    </div>
                                    {/* <!-- end row --> */}
                                </div>
                                {/* <!-- end about right --> */}
                            </div>
                            {/* <!-- end col-7 --> */}
                        </div>
                        {/* <!-- end row --> */}
                        <div className="counter-counter grid-4">
                            {/* <!-- start counter --> */}
                            <div className="fun-fact">
                                <span className="fun-icon one"><i className="icofont-calendar"></i></span>
                                <div className="fun-desc">
                                    <p className="timer" data-to="2550" data-speed="3000">2550</p>
                                    <span className="medium">Working Hours</span>
                                </div>
                            </div>
                            <div className="fun-fact fun-active">
                                <span className="fun-icon two"><i className="icofont-globe"></i></span>
                                <div className="fun-desc">
                                    <p className="timer" data-to="550" data-speed="3000">550</p>
                                    <span className="medium">Total projects</span>
                                </div>
                            </div>
                            <div className="fun-fact">
                                <span className="fun-icon three"><i className="icofont-bulb-alt"></i></span>
                                <div className="fun-desc">
                                    <p className="timer" data-to="12" data-speed="3000">12</p>
                                    <span className="medium">Years Journey</span>
                                </div>
                            </div>
                            <div className="fun-fact">
                                <span className="fun-icon four"><i className="icofont-nerd-smile"></i></span>
                                <div className="fun-desc">
                                    <p className="timer" data-to="502" data-speed="3000">1500</p>
                                    <span className="medium">Total Client</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end counter --> */}
                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end about wrp --> */}
            </div>
            {/* <!-- About us --> */}
        </Fragment>
    )
}

export default About        