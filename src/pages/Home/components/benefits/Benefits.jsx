import React from 'react';
import saveCost from '../../../../assets/images/icons/index-Save-Costs.webp';
import expertTalent from '../../../../assets/images/icons/index-Expert-Talent .webp';
import flexibleTeam from '../../../../assets/images/icons/index-Flexible-Teams.webp';
import quickLaunch from '../../../../assets/images/icons/index-Quick-Launch.webp';
import newIdeas from '../../../../assets/images/icons/index-New-Ideas .webp';
import lessRisk from '../../../../assets/images/icons/index-Less-Risk.webp';

import './Benefits.scss';

const Benefits = () => {
    return (
        <div className='container benefits pt-md-5 pb-md-5'>

            <div className='row'>

                <div className='col-md-6'>

                    <h1>
                        Benefits of Software
                        Development Outsourcing
                    </h1>

                </div>

                <div className='col-md-6'>

                    <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                        <div className="col mb-3">
                            <div className="sw-methods-box text-center">
                                <img
                                    src={saveCost}
                                    alt="Save Cost"
                                    loading="lazy"
                                    width="64px"
                                    height="64px"
                                />
                                <p className="sw-heading pt-2">Save Costs</p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="sw-methods-box text-center">
                                <img
                                    src={expertTalent}
                                    alt="Expert Talent"
                                    loading="lazy"
                                    width="64px"
                                    height="64px"
                                />
                                <p className="sw-heading pt-2">Expert Talent </p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="sw-methods-box text-center">
                                <img
                                    src={flexibleTeam}
                                    alt="Flexible Teams"
                                    loading="lazy"
                                    width="64px"
                                    height="64px"
                                />
                                <p className="sw-heading pt-2">Flexible Teams</p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="sw-methods-box text-center">
                                <img
                                    src={quickLaunch}
                                    alt="Quick Launch"
                                    loading="lazy"
                                    width="64px"
                                    height="64px"
                                />
                                <p className="sw-heading pt-2">Quick Launch </p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="sw-methods-box text-center">
                                <img
                                    src={newIdeas}
                                    alt="New Ideas"
                                    loading="lazy"
                                    width="64px"
                                    height="64px"
                                />
                                <p className="sw-heading pt-2">New Ideas</p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="sw-methods-box text-center">
                                <img
                                    src={lessRisk}
                                    alt="Less Risk"
                                    loading="lazy"
                                    width="64px"
                                    height="64px"
                                />
                                <p className="sw-heading pt-2">Less Risk </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Benefits;
