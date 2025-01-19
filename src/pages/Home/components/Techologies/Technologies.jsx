import React from 'react';
import javascript from '../../../../assets/images/techstack/JavaScript.png';
import typescript from '../../../../assets/images/techstack/typescript.png';
import react from '../../../../assets/images/techstack/ReactJS.png';
import reduxToolkit from '../../../../assets/images/techstack/redux.png';
import next from '../../../../assets/images/techstack/next.png';
import vue from '../../../../assets/images/techstack/vu.png';
import nuxt from '../../../../assets/images/techstack/nuxt.png';
import angular from '../../../../assets/images/techstack/Angular.png';
import html5 from '../../../../assets/images/techstack/html.png';
import css3 from '../../../../assets/images/techstack/css.png';
import bootstrap from '../../../../assets/images/techstack/bootstrap.png';
import tailwindCSS from '../../../../assets/images/techstack/tailwind.png';
import antDesign from '../../../../assets/images/techstack/ant-design.png';
import materialUI from '../../../../assets/images/techstack/material-ui.png';
import vite from '../../../../assets/images/techstack/vite.png';
import npm from '../../../../assets/images/techstack/npm.png';
import yarn from '../../../../assets/images/techstack/yarn.png';
import scss from '../../../../assets/images/techstack/scss.png';
import dotnet from '../../../../assets/images/techstack/dotnet.webp';
import php from '../../../../assets/images/techstack/php.webp';
import node from '../../../../assets/images/techstack/Node.webp';
import express from '../../../../assets/images/techstack/express.png';
import nestJS from '../../../../assets/images/techstack/nestjs.png';
import java from '../../../../assets/images/techstack/jsp.webp';
import python from '../../../../assets/images/techstack/Python.webp';
import django from '../../../../assets/images/techstack/django.png';
import laravel from '../../../../assets/images/techstack/laravel.png';
import ruby from '../../../../assets/images/techstack/ruby.png';
import flask from '../../../../assets/images/techstack/flask.png';
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
import mysql from '../../../../assets/images/techstack/mysql.png';
import sql from '../../../../assets/images/techstack/microsoft-sql.png';
import mongoDB from '../../../../assets/images/techstack/mongodb.png';
import postgrsql from '../../../../assets/images/techstack/postgresql.png';
import firebase from '../../../../assets/images/techstack/firebase.png';
import redis from '../../../../assets/images/techstack/redis.png';
import aws from '../../../../assets/images/techstack/aws.webp';
import azure from '../../../../assets/images/techstack/Azure.png';
import vercel from '../../../../assets/images/techstack/vercel.png';
import git from '../../../../assets/images/techstack/git.png';
import microServices from '../../../../assets/images/techstack/microservices.webp';
import devOps from '../../../../assets/images/techstack/DevOps.webp';
import docker from '../../../../assets/images/techstack/Docker.webp';
import kubernetes from '../../../../assets/images/techstack/Kubernetes.webp';
import jenkins from '../../../../assets/images/techstack/cicd.webp';
import bitbucket from '../../../../assets/images/techstack/bitbucket.png';
import terraform from '../../../../assets/images/techstack/terraform.png';
import bamboo from '../../../../assets/images/techstack/bamboo.png';
import photoshop from '../../../../assets/images/techstack/photoshop.png';
import illustrator from '../../../../assets/images/techstack/illustrator.png';
import afterEffects from '../../../../assets/images/techstack/after-effects.png';
import corelDraw from '../../../../assets/images/techstack/coreldraw.png';
import figma from '../../../../assets/images/techstack/figma.png';
import indesign from '../../../../assets/images/techstack/indesign.png';
import xd from '../../../../assets/images/techstack/xd.png';
import invision from '../../../../assets/images/techstack/invision.png';
import premiere from '../../../../assets/images/techstack/premiere.png';
import sketch from '../../../../assets/images/techstack/sketch.png';
import canva from '../../../../assets/images/techstack/canva.png';

import './techologies.scss';
import { Tabs } from 'antd';
import CustomHeading from '../../../../components/heading/CustomHeading';

const Technologies = () => {

    const FrontendTemplate = () => {

        return (
            <div className='row'>

                <div className='col-md-2 icon-column'>

                    <img src={javascript} className='custom-icon' alt='JavaScript' />

                    <p className="techstack-p mt-md-3 text-center">JavaScript</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={typescript} className='custom-icon' alt='TypeScript' />

                    <p className="techstack-p mt-md-3 text-center">TypeScript</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={react} className='custom-icon' alt='React' />

                    <p className="techstack-p mt-md-3 text-center">ReactJS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={reduxToolkit} className='custom-icon' alt='Redux Toolkit' />

                    <p className="techstack-p mt-md-3 text-center">Redux Toolkit</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={next} className='custom-icon' alt='NextJS' />

                    <p className="techstack-p mt-md-3 text-center">NextJS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={vue} className='custom-icon' alt='Vue' />

                    <p className="techstack-p mt-md-3 text-center">Vue JS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={nuxt} className='custom-icon' alt='NuxtJS' />

                    <p className="techstack-p mt-md-3 text-center">NuxtJS</p>

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

                <div className='col-md-2 icon-column'>

                    <img src={scss} className='custom-icon' alt='Scss' />

                    <p className="techstack-p mt-md-3 text-center">Scss</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={bootstrap} className='custom-icon' alt='Bootstrap' />

                    <p className="techstack-p mt-md-3 text-center">Bootstrap</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={tailwindCSS} className='custom-icon' alt='Tailwind CSS' />

                    <p className="techstack-p mt-md-3 text-center">Tailwind CSS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={antDesign} className='custom-icon' alt='Ant Design' />

                    <p className="techstack-p mt-md-3 text-center">Ant Design</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={materialUI} className='custom-icon' alt='Material UI' />

                    <p className="techstack-p mt-md-3 text-center">Material UI</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={vite} className='custom-icon' alt='Vite' />

                    <p className="techstack-p mt-md-3 text-center">Vite</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={npm} className='custom-icon' alt='Npm' />

                    <p className="techstack-p mt-md-3 text-center">Npm</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={yarn} className='custom-icon' alt='Yarn' />

                    <p className="techstack-p mt-md-3 text-center">Yarn</p>

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

                    <img src={express} className='custom-icon' alt='ExpressJS' />

                    <p className="techstack-p mt-md-3 text-center">ExpressJS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={nestJS} className='custom-icon' alt='NestJS' />

                    <p className="techstack-p mt-md-3 text-center">NestJS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={next} className='custom-icon' alt='NextJS' />

                    <p className="techstack-p mt-md-3 text-center">NextJS</p>

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

                    <img src={django} className='custom-icon' alt='Django' />

                    <p className="techstack-p mt-md-3 text-center">Django</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={laravel} className='custom-icon' alt='Laravel' />

                    <p className="techstack-p mt-md-3 text-center">Laravel</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={ruby} className='custom-icon' alt='Laravel' />

                    <p className="techstack-p mt-md-3 text-center">Ruby on Rails</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={flask} className='custom-icon' alt='Flask' />

                    <p className="techstack-p mt-md-3 text-center">Flask</p>

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

    const Databases = () => {

        return (
            <div className='row'>

                <div className='col-md-2 icon-column'>

                    <img src={mysql} className='custom-icon' alt='MySQL' />

                    <p className="techstack-p mt-md-3 text-center">MySQL</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={sql} className='custom-icon' alt='SQL Server' />

                    <p className="techstack-p mt-md-3 text-center">SQL Server</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={mongoDB} className='custom-icon' alt='MongoDB' />

                    <p className="techstack-p mt-md-3 text-center">MongoDB</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={postgrsql} className='custom-icon' alt='postgreSQL' />

                    <p className="techstack-p mt-md-3 text-center">postgreSQL</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={firebase} className='custom-icon' alt='Firebase' />

                    <p className="techstack-p mt-md-3 text-center">Firebase</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={redis} className='custom-icon' alt='Redis' />

                    <p className="techstack-p mt-md-3 text-center">Redis</p>

                </div>

            </div>
        );
    };

    const Design = () => {

        return (
            <div className='row'>

                <div className='col-md-2 icon-column'>

                    <img src={photoshop} className='custom-icon' alt='Photoshop' />

                    <p className="techstack-p mt-md-3 text-center">Photoshop</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={illustrator} className='custom-icon' alt='Illustrator' />

                    <p className="techstack-p mt-md-3 text-center">Illustrator</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={afterEffects} className='custom-icon' alt='After Effects' />

                    <p className="techstack-p mt-md-3 text-center">After Effects</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={indesign} className='custom-icon' alt='Indesign' />

                    <p className="techstack-p mt-md-3 text-center">Indesign</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={premiere} className='custom-icon' alt='Premiere' />

                    <p className="techstack-p mt-md-3 text-center">Premiere</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={xd} className='custom-icon' alt='Xd' />

                    <p className="techstack-p mt-md-3 text-center">Xd</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={corelDraw} className='custom-icon' alt='Corel Draw' />

                    <p className="techstack-p mt-md-3 text-center">Corel Draw</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={figma} className='custom-icon' alt='Figma' />

                    <p className="techstack-p mt-md-3 text-center">Figma</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={invision} className='custom-icon' alt='Invision' />

                    <p className="techstack-p mt-md-3 text-center">Invision</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={sketch} className='custom-icon' alt='Sketch' />

                    <p className="techstack-p mt-md-3 text-center">Sketch</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={canva} className='custom-icon' alt='Canva' />

                    <p className="techstack-p mt-md-3 text-center">Canva</p>

                </div>

            </div>
        );
    };

    const Cloud = () => {

        return (
            <div className='row'>

                <div className='col-md-2 icon-column'>

                    <img src={aws} className='custom-icon' alt='AWS' />

                    <p className="techstack-p mt-md-3 text-center">AWS</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={azure} className='custom-icon' alt='Microsoft Azure' />

                    <p className="techstack-p mt-md-3 text-center">Microsoft Azure</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={vercel} className='custom-icon' alt='Vercel' />

                    <p className="techstack-p mt-md-3 text-center">Vercel</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={git} className='custom-icon' alt='Git' />

                    <p className="techstack-p mt-md-3 text-center">Git</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={microServices} className='custom-icon' alt='Microservices' />

                    <p className="techstack-p mt-md-3 text-center">Microservices</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={devOps} className='custom-icon' alt='DevOps' />

                    <p className="techstack-p mt-md-3 text-center">DevOps</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={docker} className='custom-icon' alt='Docker' />

                    <p className="techstack-p mt-md-3 text-center">Docker</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={kubernetes} className='custom-icon' alt='Kubernetes' />

                    <p className="techstack-p mt-md-3 text-center">Kubernetes</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={jenkins} className='custom-icon' alt='Jenkins' />

                    <p className="techstack-p mt-md-3 text-center">Jenkins</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={bitbucket} className='custom-icon' alt='Bitbucket' />

                    <p className="techstack-p mt-md-3 text-center">Bitbucket</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={terraform} className='custom-icon' alt='Terraform' />

                    <p className="techstack-p mt-md-3 text-center">Terraform</p>

                </div>

                <div className='col-md-2 icon-column'>

                    <img src={bamboo} className='custom-icon' alt='Bamboo' />

                    <p className="techstack-p mt-md-3 text-center">Bamboo</p>

                </div>

            </div>
        );
    };

    const items = [
        {
            key: '1',
            label: 'Graphic & UI/UX Design | Media',
            children: <Design />,
        },
        {
            key: '2',
            label: 'Frontend',
            children: <FrontendTemplate />,
        },
        {
            key: '3',
            label: 'Backend',
            children: <BackendTemplate />,
        },
        {
            key: '4',
            label: 'Mobility Stack',
            children: <MobileTemplate />,
        },
        {
            key: '5',
            label: 'Databases',
            children: <Databases />,
        },
        {
            key: '6',
            label: 'Artificial Intelligence',
            children: <AI />,
        },
        {
            key: '7',
            label: 'Cloud & DevOps',
            children: <Cloud />,
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <section className='technologies'>
                <div className='container'>

                    <CustomHeading
                        firstWord="Our 360 Expertise Tools &"
                        lastWord="Tech Stack"
                        textCenter="text-center"
                    />

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