import React from 'react';
import expertiseIcon from '../../../../assets/images/icons/index-expertise.png';
import customerIcon from '../../../../assets/images/icons/index-customer.png';
import earthIcon from '../../../../assets/images/icons/index-earth.png';
import settingsIcon from '../../../../assets/images/icons/index-settings.png';
import programmerIcon from '../../../../assets/images/icons/index-programmer.png';
import lightbulbIcon from '../../../../assets/images/icons/index-lightbulb.png';

import './Outsourcing.scss';
import CustomHeading from '../../../../components/heading/CustomHeading';

const Outsourcing = () => {
    return (
        <div className='container outsourcing mt-md-5 mt-4 mb-md-5'>

            <CustomHeading
                firstWord="Why"
                lastWord="Choose Us?"
                textCenter="text-center"
            />

            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-6 g-2 g-lg-3 d-flex justify-content-center">
                <div className="col">
                    <div className="p-3 text-center">
                        <img
                            src={expertiseIcon}
                            alt="Expert team strategizing in software development outsourcing."
                            width="64px"
                            height="64px"
                            className="pb-2"
                            loading="lazy"
                        />
                        <p className="p-18px">10 Years of Experience</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 text-center">
                        <img
                            src={customerIcon}
                            alt="Satisfied clients thanks to our software outsourcing services."
                            width="64px"
                            height="64px"
                            className="pb-2"
                            loading="lazy"
                        />
                        <p className="p-18px">100+ Clients</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 text-center">
                        <img
                            src={settingsIcon}
                            alt="Bright idea symbol for creative software development strategies."
                            width="64px"
                            height="64px"
                            className="pb-2"
                            loading="lazy"
                        />
                        <p className="p-18px">Custom Solutions</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 text-center">
                        <img
                            src={earthIcon}
                            alt="Software outsourcing connecting businesses across the globe."
                            width="64px"
                            height="64px"
                            className="pb-2"
                            loading="lazy"
                        />
                        <p className="p-18px">10+ Outsource Partners</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 text-center">
                        <img
                            src={programmerIcon}
                            alt="Programmer writing code, essential in software development."
                            width="64px"
                            height="64px"
                            className="pb-2"
                            loading="lazy"
                        />
                        <p className="p-18px">Experienced Team</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 text-center">
                        <img
                            src={lightbulbIcon}
                            alt="Cogwheels representing the intricate settings in software dev."
                            width="64px"
                            height="64px"
                            className="pb-2"
                            loading="lazy"
                        />
                        <p className="p-18px">Expertise in Latest Tech</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Outsourcing;
