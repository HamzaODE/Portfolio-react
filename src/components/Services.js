import React, { Fragment } from 'react'

function Services() {
    return (
        <Fragment>
            {/* <!-- Start Services --> */}
            <div id="service" className="service-area de-padding">
                <div className="container pl-20">
                    <div className="site-title text-center">
                        {/* <!-- service section title --> */}
                        <span className="resume-title">My Services</span>
                        <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".01s">
                            A brief of Offerting Services
                        </h2>
                    </div>
                    <div className="row">
                        {/* <!-- start row --> */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box mt-30 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                                <div className="service-icon service-one">
                                    <i className="icofont-vector-path"></i>
                                </div>
                                <div className="service-info">
                                    <h2>Branding</h2>
                                    <ul>
                                        <li>Logo design</li>
                                        <li>Brand Guide</li>
                                        <li>Brand Printing</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end service one --> */}
                        </div>
                        {/* <!-- end col-4 --> */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box mt-30 wow fadeInDown" data-wow-duration=".7s" data-wow-delay=".6s">
                                <div className="service-icon service-two">
                                    <i className="icofont-ui-browser"></i>
                                </div>
                                <div className="service-info">
                                    <h2>Print Design</h2>
                                    <ul>
                                        <li>Business Card</li>
                                        <li>Brochure</li>
                                        <li>Magazine</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end service two --> */}
                        </div>
                        {/* <!-- end col-4 --> */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box mt-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".8s">
                                <div className="service-icon service-three">
                                    <i className="icofont-ui-theme"></i>
                                </div>
                                <div className="service-info">
                                    <h2>Wordpress Ninja</h2>
                                    <ul>
                                        <li>PSD to WP</li>
                                        <li>Woocommerce</li>
                                        <li>Speed Optimization</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end service three --> */}
                        </div>
                        {/* <!-- end col-4 --> */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box mt-30 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                                <div className="service-icon service-one">
                                    <i className="icofont-ship-wheel"></i>
                                </div>
                                <div className="service-info">
                                    <h2>Graphic Design</h2>
                                    <ul>
                                        <li>Package Design</li>
                                        <li>Email Signature</li>
                                        <li>Social Media Banner</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end service one --> */}
                        </div>
                        {/* <!-- end col-4 --> */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box mt-30 wow fadeInDown" data-wow-duration=".7s" data-wow-delay=".6s">
                                <div className="service-icon service-two">
                                    <i className="icofont-ssl-security"></i>
                                </div>
                                <div className="service-info">
                                    <h2>Cyber Security</h2>
                                    <ul>
                                        <li>Ethical Hacking</li>
                                        <li>Security Analysis</li>
                                        <li>Remove Malware</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end service two --> */}
                        </div>
                        {/* <!-- end col-4 --> */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box mt-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".8s">
                                <div className="service-icon service-three">
                                    <i className="icofont-bulb-alt"></i>
                                </div>
                                <div className="service-info">
                                    <h2>Web Development</h2>
                                    <ul>
                                        <li>React JS</li>
                                        <li>PSD to HTML</li>
                                        <li>Javascript</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end service six --> */}
                        </div>
                        {/* <!-- end col-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </div>
            {/* <!-- End Services --> */}
        </Fragment>
    )
}

export default Services 