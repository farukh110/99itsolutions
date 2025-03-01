import React, { useState } from 'react';
import consultation from '../../../../assets/images/process/consultation.jpg';
import planning from '../../../../assets/images/process/planning.jpg';
import design from '../../../../assets/images/process/design.jpg';
import develop from '../../../../assets/images/process/develop.jpg';
import testing from '../../../../assets/images/process/testing.jpg';
import delivery from '../../../../assets/images/process/delivery.jpg';
import support from '../../../../assets/images/process/support.jpg';

import consultIcon from '../../../../assets/images/icons/Conceptualisation-icon.webp';
import planningIcon from '../../../../assets/images/icons/planning-icon.webp';
import designIcon from '../../../../assets/images/icons/prototype-icon.webp';
import developIcon from '../../../../assets/images/icons/system-design-development.webp';
import testIcon from '../../../../assets/images/icons/agile-process-support.webp';
import deliveryIcon from '../../../../assets/images/icons/deployment-icon.webp';
import supportIcon from '../../../../assets/images/icons/agile-process-support.webp';

import './Process.scss';
import CustomHeading from '../../../../components/heading/CustomHeading';

const Process = () => {

    const [currentTab, setCurrentTab] = useState('planning');

    const handleClick = (tab) => {
        setCurrentTab(tab);
    };

    return (
        <>
            <div className='process-section container my-lg-5 my-md-4 my-4'>

                <CustomHeading
                    firstWord="How"
                    lastWord="We Work"
                    textCenter="text-center"
                />

                <div className='row row-cols-lg-7 g-2 g-lg-2 justify-content-center mt-md-4'>

                    <div className='col p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'consultation' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('consultation')}
                            >
                                <img src={consultIcon} alt="Consultation" />
                                <br />
                                Consultation
                            </button>

                        </div>

                    </div>

                    <div className='col p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'planning' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('planning')}
                            >
                                <img src={planningIcon} alt="Planning" />
                                <br />
                                Gathering ideas
                            </button>

                        </div>

                    </div>

                    <div className='col p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'design' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('design')}
                            >
                                <img src={designIcon} alt="Design" />
                                <br />

                                Design
                            </button>

                        </div>

                    </div>

                    <div className='col p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'develop' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('develop')}
                            >
                                <img src={developIcon} alt="Planning" />
                                <br />
                                Development

                            </button>

                        </div>

                    </div>

                    <div className='col p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'test' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('test')}
                            >
                                <img src={testIcon} alt="Planning" />
                                <br />
                                Testing
                            </button>
                        </div>

                    </div>

                    <div className='col p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'deliver' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('deliver')}
                            >
                                <img src={deliveryIcon} alt="Planning" />
                                <br />
                                Deliver
                            </button>

                        </div>

                    </div>

                    <div className='col p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'maintenance' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('maintenance')}
                            >
                                <img src={supportIcon} alt="Planning" />
                                <br />
                                Maintenance
                            </button>

                        </div>

                    </div>

                </div>

                {/* ----------- start consultation content ------------ */}

                {currentTab === 'consultation' && (
                    <div id='consultation' className='row mt-md-5 mt-4 consultation'>
                        <div className='col-md-5'>
                            <img className='img-fluid' src={consultation} alt='' />
                        </div>

                        <div className='col-md-7 mb-md-0 mb-4'>
                            {/* <h5 className='text-darkblue mt-md-0 mt-4'>
                                The planning stage is debatable
                            </h5> */}

                            <h3>Consultation</h3>
                            <p>
                                Looking for a company to help you with Software Development? 99 IT Solutions is providing the best solutions beginning with asking questions. We study your business vision, analyse your users and competitors, examine problems and promote your product's commercial strengths. Then transmute that into goals.

                            </p>

                            <h6>Consultation 100%</h6>

                            <div
                                className='progress'
                                role='progressbar'
                                aria-valuenow='10'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                <div
                                    className='progress-bar progress-bar-striped progress-bar-animated planning'
                                    style={{ width: '10%' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ----------- end consultation content ------------ */}

                {/* ----------- start planning content ------------ */}

                {currentTab === 'planning' && (
                    <div id='planning' className='row mt-md-5 mt-4 planning'>
                        <div className='col-md-5'>
                            <img className='img-fluid' src={planning} alt='' />
                        </div>

                        <div className='col-md-7 mb-md-0 mb-4'>
                            <h5 className='text-darkblue mt-md-0 mt-4'>
                                The planning stage is debatable
                            </h5>

                            <h3>but crucial</h3>
                            <p>
                                as it sets the foundation of the project. With active client involvement and careful attention to detail, the 99 i.T Solutions team will work with you to create a detailed project plan and roadmap, defining milestones and scope. This stage plays a critical role in setting the direction for the entire project. We will conduct requirements analysis, develop a project charter, and design a site map to ensure a thorough and well-planned approach.

                            </p>

                            <h6>Planning 20%</h6>

                            <div
                                className='progress'
                                role='progressbar'
                                aria-valuenow='80'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                <div
                                    className='progress-bar progress-bar-striped progress-bar-animated planning'
                                    style={{ width: '20%' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ----------- end planning content ------------ */}

                {/* ----------- start design content ------------ */}
                {currentTab === 'design' && (
                    <div id="design" className='row mt-md-5 mt-4'>

                        <div className='col-md-5'>
                            <img className='img-fluid' src={design} alt="" />
                        </div>

                        <div className='col-md-7 mb-md-0 mb-4'>

                            <h5 className="text-darkblue mt-md-0 mt-4">
                                The design stage mostly.
                            </h5>

                            <h3>After sorting out the scope</h3>
                            <p>
                                The 99 i.T Solutions team brings your design to life in the design stage. We transform the planned design structure into a visual representation, including documented design structure, wireframes, and UX maps. Our expertise in UI design ensures a visually appealing and user-friendly design experience for your project.

                            </p>

                            <h6>Planning 20%</h6>

                            <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}></div></div>

                            <h6 className='mt-md-3'>Design 40%</h6>

                            <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div></div>

                        </div>

                    </div>)}

                {/* ----------- end design content ------------ */}

                {/* ----------- start develop content ------------ */}

                {currentTab === 'develop' && (<div id="develop" className='row mt-md-5 mt-4 develop'>

                    <div className='col-md-5'>
                        <img className='img-fluid' src={develop} alt="" />
                    </div>

                    <div className='col-md-7 mb-md-0 mb-4'>

                        <h5 className="text-darkblue mt-md-0 mt-4">
                            The development stage primarily involves the core
                        </h5>

                        <h3>and extensive programming tasks</h3>
                        <p>
                            Maintain code organized, well-structured, and commented, and continuously refer to the planning details as the project evolves. Adopting a strategic approach and conducting regular testing throughout the development process helps prevent future complications. Designs undergo rigorous testing using relevant technologies as part of the development process, and the architects forward the builds for testing.
                        </p>

                        <h6>Planning 20%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}></div></div>

                        <h6 className='mt-md-3'>Design 40%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div></div>

                        <h6 className='mt-md-3'>Develop 60%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div></div>

                    </div>

                </div>)}

                {/* ----------- end develop content ------------ */}

                {/* ----------- start test content ------------ */}

                {currentTab === 'test' && (<div id="test" className='row mt-md-5 mt-4 test'>

                    <div className='col-md-5'>
                        <img className='img-fluid' src={testing} alt="" />
                    </div>

                    <div className='col-md-7 mb-md-0 mb-4'>

                        <h5 className="text-darkblue mt-md-0 mt-4">
                            Perform the project through the final diagnostics
                        </h5>

                        <h3>using the available tools</h3>
                        <p>
                            such as code validators, broken-link checkers, website health checks, and spell-checker. Proactively identify and address any mistakes to ensure a flawless experience for the client and end-users.

                        </p>

                        <h6>Planning 20%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}></div></div>

                        <h6 className='mt-md-3'>Design 40%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div></div>

                        <h6 className='mt-md-3'>Develop 60%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div></div>

                        <h6 className='mt-md-3'>Test 80%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div></div>

                    </div>

                </div>)}

                {/* ----------- end test content ------------ */}

                {/* ----------- start deliver content ------------ */}

                {currentTab === 'deliver' && (<div id="deliver" className='row mt-md-5 mt-4 deliver'>

                    <div className='col-md-5'>
                        <img className='img-fluid' src={delivery} alt="" />
                    </div>

                    <div className='col-md-7 mb-md-0 mb-4'>

                        <h5 className="text-darkblue mt-md-0 mt-4">
                            Upon reaching the handover stage
                        </h5>

                        <h3>Our priority is to ensure the client's satisfaction</h3>
                        <p>
                            with the project or final product. The business takes charge of closing the project by addressing any remaining tasks. This includes packaging source files, providing usage instructions, and delivering any required training. After thorough testing, the seamless product is launched and deployed to relevant servers or app stores, marking a successful launch and delivery of the project.

                        </p>

                        <h6>Planning 20%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}></div></div>

                        <h6 className='mt-md-3'>Design 40%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div></div>

                        <h6 className='mt-md-3'>Develop 60%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div></div>

                        <h6 className='mt-md-3'>Test 80%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div></div>

                        <h6 className='mt-md-3'>Deliver 100%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div></div>

                    </div>

                </div>)}

                {/* ----------- end deliver content ------------ */}

                {/* ----------- start maintenance content ------------ */}

                {currentTab === 'maintenance' && (<div id="maintenance" className='row mt-md-5 mt-4 deliver'>

                    <div className='col-md-5'>
                        <img className='img-fluid' src={support} alt="" />
                    </div>

                    <div className='col-md-7 mb-md-0 mb-4'>

                        <h5 className="text-darkblue mt-md-0 mt-4">
                            During the maintenance phase
                        </h5>

                        <h3>we ensure your website remains in optimal condition and</h3>
                        <p>
                            continues to perform at its best. Our dedicated team takes care of regular updates, security patches, and ongoing support to keep your online presence running smoothly. We proactively monitor for any issues and swiftly address them to ensure minimal downtime. With our comprehensive maintenance services, you can focus on your core business while we handle the technical aspects, providing you peace of mind and continuous website excellence.

                        </p>

                        {/* <h6>Planning 20%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}></div></div>

                        <h6 className='mt-md-3'>Design 40%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div></div>

                        <h6 className='mt-md-3'>Develop 60%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div></div>

                        <h6 className='mt-md-3'>Test 80%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div></div> */}

                        <h6 className='mt-md-3'>Up to date 100%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div></div>

                    </div>

                </div>)}

                {/* ----------- end maintenance content ------------ */}

            </div>
        </>
    )
}

export default Process;