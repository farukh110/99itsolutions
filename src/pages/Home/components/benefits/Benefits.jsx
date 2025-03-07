import React from 'react';
import saveCost from '../../../../assets/images/icons/index-Save-Costs.webp';
import expertTalent from '../../../../assets/images/icons/top-talent.png';
import flexibleTeam from '../../../../assets/images/icons/index-Flexible-Teams.webp';
import quickLaunch from '../../../../assets/images/icons/index-Quick-Launch.webp';
// import newIdeas from '../../../../assets/images/icons/index-New-Ideas .webp';
import lessRisk from '../../../../assets/images/icons/index-Less-Risk.webp';
import focusGrowth from '../../../../assets/images/icons/focus_on_growth.png';
import ltp from '../../../../assets/images/icons/ltp1.png';
import boostProfit from '../../../../assets/images/icons/Profit.png';

import './Benefits.scss';
import CustomHeading from '../../../../components/heading/CustomHeading';

const Benefits = () => {
    return (
        <div className='container benefits pt-md-5 pb-md-5'>

            <div className='row'>

                <div className='col-md-4 col-12'>

                    <CustomHeading
                        firstWord="Benefits of"
                        lastWord="Outsourcing with us"
                        textCenter="text-md-left text-center"
                    />

                </div>

                <div className='col-md-8 col-12'>

                    <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-2">
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
                        {/* <div className="col mb-3">
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
                        </div> */}
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
                        <div className="col mb-3">
                            <div className="sw-methods-box text-center">
                                <img
                                    src={focusGrowth}
                                    alt="Focus on Growth"
                                    loading="lazy"
                                    width="64px"
                                    height="64px"
                                />
                                <p className="sw-heading pt-2">Focus on Growth </p>
                            </div>
                        </div>

                        <div className="col mb-3">
                            <div className="sw-methods-box text-center">
                                <img
                                    src={ltp}
                                    alt="Long-Term Partnership"
                                    loading="lazy"
                                    width="64px"
                                    height="64px"
                                />
                                <p className="sw-heading pt-2">Long-Term Partnership </p>
                            </div>
                        </div>

                        <div className="col mb-3">
                            <div className="sw-methods-box text-center">
                                <img
                                    src={boostProfit}
                                    alt="Boost Profit Margin"
                                    loading="lazy"
                                    width="64px"
                                    height="64px"
                                />
                                <p className="sw-heading pt-2">Boost Profit Margin </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Benefits;
