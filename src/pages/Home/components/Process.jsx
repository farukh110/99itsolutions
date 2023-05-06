import React, { useState } from 'react';
import planning from '../../../assets/images/process/process.png';
import design from '../../../assets/images/process/design.png';
import develop from '../../../assets/images/process/develop.png';
import testing from '../../../assets/images/process/testing.png';
import delivery from '../../../assets/images/process/delivery.png';
import './Process.scss';

const Process = () => {

    const [currentTab, setCurrentTab] = useState('planning');

    const handleClick = (tab) => {
        setCurrentTab(tab);
    };

    return (
        <>
            <div className='process-section container my-md-4 my-4'>
                <h2 className='text-center'> Process </h2>

                <div className='row justify-content-center mt-md-4'>

                    <div className='col-md-2 col-6 p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'planning' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('planning')}
                            >
                                Planning
                            </button>

                        </div>

                    </div>

                    <div className='col-md-2 col-6 p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'design' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('design')}
                            >
                                Design
                            </button>

                        </div>

                    </div>

                    <div className='col-md-2 col-6 p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'develop' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('develop')}
                            >
                                Develop
                            </button>

                        </div>

                    </div>

                    <div className='col-md-2 col-6 p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'test' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('test')}
                            >
                                Test
                            </button>
                        </div>

                    </div>

                    <div className='col-md-2 col-6 p-1'>

                        <div className="d-grid">
                            <button
                                className={`btn ${currentTab === 'deliver' ? 'btn-primary' : 'btn-info'
                                    }`}
                                onClick={() => handleClick('deliver')}
                            >
                                Deliver
                            </button>

                        </div>

                    </div>

                </div>

                {/* ----------- start planning content ------------ */}

                {currentTab === 'planning' && (
                    <div id='planning' className='row planning'>
                        <div className='col-md-5'>
                            <img className='img-fluid' src={planning} alt='' />
                        </div>

                        <div className='col-md-7 mb-md-0 mb-4'>
                            <h5 className='text-darkblue mt-md-5'>
                                The planning stage is arguable.
                            </h5>

                            <h3>The most important</h3>
                            <p>
                                Because what’s decided and mapped here sets the stage for the
                                entire project. This is also the stage that requires client
                                interaction and the accompanying attention to detail.
                                Requirements analysis,Project charter &amp; Site map.
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

                {currentTab === 'design' && (<div id="design" className='row design'>

                    <div className='col-md-5'>
                        <img className='img-fluid' src={design} alt="" />
                    </div>

                    <div className='col-md-7 mb-md-0 mb-4'>

                        <h5 className="text-darkblue mt-md-5">
                            The design stage typically.
                        </h5>

                        <h3>Involves moving the</h3>
                        <p>
                            The information outlined the planning stage further into reality. The main deliverables are a documented site structure and, more importantly, a visual representation. Upon completion of the design phase, the website should more or less have taken shape, but for the absence of the content and special features.
                        </p>

                        <h6>Planning 20%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}></div></div>

                        <h6 className='mt-md-3'>Design 40%</h6>

                        <div className="progress"><div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated planning" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div></div>

                    </div>

                </div>)}

                {/* ----------- end design content ------------ */}

                {/* ----------- start develop content ------------ */}

                {currentTab === 'develop' && (<div id="develop" className='row develop'>

                    <div className='col-md-5'>
                        <img className='img-fluid' src={develop} alt="" />
                    </div>

                    <div className='col-md-7 mb-md-0 mb-4'>

                        <h5 className="text-darkblue mt-md-5">
                            Development involves the bulk
                        </h5>

                        <h3>of the programming work</h3>
                        <p>
                            Keep code organized and commented, and continuously refer to the planning details as the full website takes shape. Take a strategic approach, and avoid future hassles by constantly testing as you go.
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

                {currentTab === 'test' && (<div id="test" className='row test'>

                    <div className='col-md-5'>
                        <img className='img-fluid' src={testing} alt="" />
                    </div>

                    <div className='col-md-7 mb-md-0 mb-4'>

                        <h5 className="text-darkblue mt-md-5">
                            Run the website through the final diagnostics
                        </h5>

                        <h3>using the available tools</h3>
                        <p>
                            code validators, broken-link checkers, website health checks, spell-checker and the like. You want to find any mistakes yourself rather than hearing complaints from the client or an end-user.
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

                {currentTab === 'deliver' && (<div id="deliver" className='row deliver'>

                    <div className='col-md-5'>
                        <img className='img-fluid' src={delivery} alt="" />
                    </div>

                    <div className='col-md-7 mb-md-0 mb-4'>

                        <h5 className="text-darkblue mt-md-5">
                            Handoff to client Be sure the client is
                        </h5>

                        <h3>Satisfied with the product</h3>
                        <p>
                            Business re-enters the picture at this point as you take care of all the little tasks related to closing the project. Packaging source files, providing instructions for use, and any required training occurs at this time.
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

            </div>
        </>
    )
}

export default Process;