import React from 'react';
import javascript from '../../../../assets/images/techstack/JavaScript.png';
import react from '../../../../assets/images/techstack/ReactJS.png';
import vue from '../../../../assets/images/techstack/vu.png';
import angular from '../../../../assets/images/techstack/Angular.png';
import html5 from '../../../../assets/images/techstack/html.png';
import css3 from '../../../../assets/images/techstack/css.png';
import dotnet from '../../../../assets/images/techstack/dotnet.webp';
import php from '../../../../assets/images/techstack/php.webp';
import node from '../../../../assets/images/techstack/Node.webp';
import java from '../../../../assets/images/techstack/jsp.webp';
import python from '../../../../assets/images/techstack/Python.webp';
import laravel from '../../../../assets/images/techstack/laravel.png';
import android from '../../../../assets/images/techstack/android.webp';
import ios from '../../../../assets/images/techstack/IOS.webp';
import swift from '../../../../assets/images/techstack/swift.png';
import flutter from '../../../../assets/images/techstack/flutter.png';
import kotlin from '../../../../assets/images/techstack/kotlin.png';
import r from '../../../../assets/images/techstack/R-logo.webp';
import generative from '../../../../assets/images/techstack/generative_blob.webp';
import nlp from '../../../../assets/images/techstack/natural-language-processing.webp';
import speech from '../../../../assets/images/techstack/voice-recognition.webp';
import computerVision from '../../../../assets/images/techstack/computer-vision.webp';

import './techologies.scss';
import { Tabs } from 'antd';

const Technologies = () => {

    const FrontendTemplate = () => {

        return (
            <div className='row'>

                <div className='col-md-2 icon-column'>

                    <img src={javascript} className='custom-icon' alt='JavaScript' />

                    <p className="techstack-p mt-md-3 text-center">JavaScript</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={react} className='custom-icon' alt='React' />

                    <p className="techstack-p mt-md-3 text-center">ReactJS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={vue} className='custom-icon' alt='Vue' />

                    <p className="techstack-p mt-md-3 text-center">Vue JS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={angular} className='custom-icon' alt='Angular' />

                    <p className="techstack-p mt-md-3 text-center">Angular</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={html5} className='custom-icon' alt='Html5' />

                    <p className="techstack-p mt-md-3 text-center">Html5</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={css3} className='custom-icon' alt='Css3' />

                    <p className="techstack-p mt-md-3 text-center">Css3</p>

                </div>

            </div>
        );
    };

    const BackendTemplate = () => {

        return (
            <div className='row'>

                <div className='col-md-2 icon-column'>

                    <img src={dotnet} className='custom-icon' alt='.Net' />

                    <p className="techstack-p mt-md-3 text-center">.Net</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={php} className='custom-icon' alt='PHP' />

                    <p className="techstack-p mt-md-3 text-center">PHP</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={node} className='custom-icon' alt='Node' />

                    <p className="techstack-p mt-md-3 text-center">NodeJS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={java} className='custom-icon' alt='Java Spring Boot' />

                    <p className="techstack-p mt-md-3 text-center">Java Spring Boot</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={python} className='custom-icon' alt='Python' />

                    <p className="techstack-p mt-md-3 text-center">Python</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={laravel} className='custom-icon' alt='Laravel' />

                    <p className="techstack-p mt-md-3 text-center">Laravel</p>

                </div>

            </div>
        );
    };

    const MobileTemplate = () => {

        return (
            <div className='row'>

                <div className='col-md-2 icon-column'>

                    <img src={android} className='custom-icon' alt='Android' />

                    <p className="techstack-p mt-md-3 text-center">Android</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={ios} className='custom-icon' alt='iOS' />

                    <p className="techstack-p mt-md-3 text-center">iOS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={react} className='custom-icon' alt='React Native' />

                    <p className="techstack-p mt-md-3 text-center">React Native</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={flutter} className='custom-icon' alt='Flutter' />

                    <p className="techstack-p mt-md-3 text-center">Flutter</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={swift} className='custom-icon' alt='Swift' />

                    <p className="techstack-p mt-md-3 text-center">Swift</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={kotlin} className='custom-icon' alt='Kotlin' />

                    <p className="techstack-p mt-md-3 text-center">Kotlin</p>

                </div>

            </div>
        );
    };

    const AI = () => {

        return (
            <div className='row'>

                <div className='col-md-2 icon-column'>

                    <img src={python} className='custom-icon' alt='Python' />

                    <p className="techstack-p mt-md-3 text-center">Python</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={r} className='custom-icon' alt='R Programming' />

                    <p className="techstack-p mt-md-3 text-center">R Programming</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={generative} className='custom-icon' alt='Generative AI' />

                    <p className="techstack-p mt-md-3 text-center">Generative AI</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={nlp} className='custom-icon' alt='NLP' />

                    <p className="techstack-p mt-md-3 text-center">NLP</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={speech} className='custom-icon' alt='Speech Recognition' />

                    <p className="techstack-p mt-md-3 text-center">Speech Recognition</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={computerVision} className='custom-icon' alt='Computer Vision' />

                    <p className="techstack-p mt-md-3 text-center">Computer Vision</p>

                </div>

            </div>
        );
    };

    const items = [
        {
            key: '1',
            label: 'Frontend',
            children: <FrontendTemplate />,
        },
        {
            key: '2',
            label: 'Backend',
            children: <BackendTemplate />,
        },
        {
            key: '3',
            label: 'Mobility Stack',
            children: <MobileTemplate />,
        },
        {
            key: '4',
            label: 'Artificial Intelligence',
            children: <AI />,
        },

        // {
        //     key: '5',
        //     label: 'Cloud Computing',
        //     children: 'Content of Tab Pane 5',
        // },
    ];

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <section className='technologies'>
                <div className='container'>

                    <h2 className='text-center'> Our 360 Expertise Tools & Tech Stack </h2>

                    {/* <div className='row justify-content-center'>

                        {
                            technologies.map((item, key) => <div key={key} className='col-lg-2 col-md-3 col-sm-6 col-6 my-md-3 my-3'>
                                <div className='shadow tech-column pb-md-3 pb-3 text-center'> <img src={item.img} alt={item.name} />
                                    <h4> {item.name} </h4>
                                </div>
                            </div>)}

                    </div> */}

                    <div className='row justify-content-center'>
                        <Tabs
                            cardGutter={4}
                            className='custom-tabs'
                            defaultActiveKey="1"
                            items={items} onChange={onChange}
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Technologies;