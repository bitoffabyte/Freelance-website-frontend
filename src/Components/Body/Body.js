import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './body.css';
const Body = () => {
    useEffect(() => {
        Aos.init({ duration: 800 });
        Aos.refresh();
    }, []);
    return (
        <div
            style={{
                position: 'absolute',
                top: '100%',
                margin: '10% 0',
                width: '100%',
            }}
        >
            <div className="bodyDivs" data-aos="fade-up">
                <h1 align="center">Need Something Done?</h1>
                <div class="some-stuff">
                    <div
                        className="details"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        data-aos-duration="200"
                    >
                        <img
                            src={require('../../assets/rocket.svg')}
                            style={{ width: '50%' }}
                        />
                        <h3>Post a job</h3>
                        <p>
                            It's easy. Simply post a job you need completed and
                            receive competitive bids from freelancers within
                            minutes.
                        </p>
                    </div>
                    <div
                        className="details"
                        data-aos="zoom-in"
                        data-aos-delay="800"
                        data-aos-duration="200"
                    >
                        <img
                            src={require('../../assets/group.svg')}
                            style={{ width: '50%' }}
                        />
                        <h3>Choose freelancers</h3>
                        <p>
                            Whatever your needs, there will be a freelancer to
                            get it done: from web design, mobile app
                            development, virtual assistants, product
                            manufacturing, and graphic design (and a whole lot
                            more).
                        </p>
                    </div>
                    <div
                        className="details"
                        data-aos="zoom-in"
                        data-aos-delay="900"
                        data-aos-duration="200"
                    >
                        <img
                            src={require('../../assets/tick.svg')}
                            style={{ width: '50%' }}
                        />
                        <h3>Get Work Done</h3>
                        <p>
                            Get your work taken care of by assured freelancers
                            within the given timeline, with qualtiy assured
                            work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
