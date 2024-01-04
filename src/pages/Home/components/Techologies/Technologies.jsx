import React from 'react';
import frontend from '../../../../assets/images/technologies/front-end.svg';
import fullstack from '../../../../assets/images/technologies/full-stack.svg';
import angular from '../../../../assets/images/technologies/angular.svg';
import node from '../../../../assets/images/technologies/node.svg';
import javascript from '../../../../assets/images/technologies/javascript.svg';
import reactjs from '../../../../assets/images/technologies/react.svg';
import dotnet from '../../../../assets/images/technologies/dotnet.svg';
import java from '../../../../assets/images/technologies/java.svg';
import scala from '../../../../assets/images/technologies/scala.svg';
import php from '../../../../assets/images/technologies/php.svg';
import c from '../../../../assets/images/technologies/c.svg';
import './techologies.scss';

const Technologies = () => {

    const technologies = [
        { img: frontend, name: 'Front-End' },
        { img: fullstack, name: 'Full-Stack' },
        { img: angular, name: 'Angular' },
        { img: node, name: 'Node.js' },
        { img: javascript, name: 'JavaScript' },
        { img: reactjs, name: 'React' },
        { img: dotnet, name: '.Net' },
        { img: java, name: 'Java' },
        { img: scala, name: 'Scala' },
        { img: php, name: 'PHP' },
        { img: c, name: 'C/C++' },
    ]

    return (
        <>
            <section className='technologies'>
                <div className='container'>

                    <h2 className='text-center'> Technologies </h2>

                    <div className='row justify-content-center'>

                        {
                            technologies.map((item, key) => <div key={key} className='col-lg-2 col-md-3 col-sm-6 col-6 my-md-3 my-3'>
                                <div className='shadow tech-column pb-md-3 pb-3 text-center'> <img src={item.img} alt={item.name} />
                                    <h4> {item.name} </h4>
                                </div>
                            </div>)}

                    </div>

                </div>
            </section>
        </>
    )
}

export default Technologies;