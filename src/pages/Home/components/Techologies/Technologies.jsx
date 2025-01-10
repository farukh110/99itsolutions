import React from 'react';
import './techologies.scss';
import { SiJavascript } from "react-icons/si";
import { Tabs } from 'antd';

const Technologies = () => {

    const FrontendTemplate = () => {

        return (
            <div className='row'>

                <div className='col-md-2'>

                    <SiJavascript />

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
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Mobility Stack',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '4',
            label: 'Artificial Intelligence',
            children: 'Content of Tab Pane 4',
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

                    <h2 className='text-center'> Our Software Development Tech Stack </h2>

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