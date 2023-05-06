import React from 'react';
import './ContactForm.scss';
import { useState } from 'react';


const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [timings, setTimings] = useState('');
    const [services, setServices] = useState('');
    const [budget, setBudget] = useState('');
    const [social, setSocial] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // add code here to handle form submission and sending data to the server
        alert(`Form Submitted Successfully! Name: ${name} Email: ${email} Phone: ${phone} Timings: ${timings} Services: ${services} Budget: ${budget} Social: ${social} Message: ${message}`);
        setName('');
        setEmail('');
        setPhone('');
        setTimings('');
        setServices('');
        setBudget('');
        setSocial('');
        setMessage('');
    }

    return (
        <div className='container my-md-5 my-4'>
            <h2 className="text-center"> Request a Quote/Callback </h2>

            <form className='custom-form' onSubmit={handleSubmit}>

                <div className='row'>

                    <div className='col-md-4'>

                        <div className='row'>

                            <div className='col-md-12 my-md-2 my-2'>

                                <input type='text' placeholder='Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />

                            </div>

                            <div className='col-md-12 my-md-2 my-2'>

                                <input type='email' placeholder='enter your email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />

                            </div>

                            <div className='col-md-12 my-md-2 my-2'>

                                <input type='text' placeholder='enter your phone number' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />

                            </div>

                            <div className='col-md-12 my-md-2 my-2'>

                                <select name="call_time" className="form-control" value={timings} onChange={(e) => setTimings(e.target.value)}>
                                    <option value="Best time to call">Best time to call</option>
                                    <option value="Morning">Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Evening">Evening</option>
                                    <option value="Anytime">Anytime</option>
                                </select>

                            </div>



                        </div>

                    </div>

                    <div className='col-md-8'>

                        <div className='row'>

                            <div className='col-md-4 my-md-2 my-2'>

                                <select
                                    className="form-control"
                                    value={services} onChange={(e) => setServices(e.target.value)}>

                                    <option value="Service">
                                        Select Service
                                    </option>
                                    <option value="Ready Softwares">Ready Softwares
                                    </option>
                                    <option value="Ready Softwares">Ready Softwares
                                    </option>
                                    <option value="Warehouse Management System">Warehouse Management System
                                    </option>
                                    <option value="ERP">ERP</option>
                                    <option value="POS">POS</option>
                                    <option value="HRM">HRM</option>
                                    <option value="CRM">CRM</option>
                                    <option value="Hotel Management System">Hotel Management System
                                    </option>

                                    <option value="Morning">Web Development
                                    </option>
                                    <option value="Afternoon">Software Development
                                    </option>
                                    <option value="Evening">Domain and Hosting
                                    </option>
                                    <option value="Anytime"> Products
                                    </option>
                                </select>

                            </div>

                            <div className='col-md-4 my-md-2 my-2'>

                                <select
                                    className="form-control"
                                    value={budget} onChange={(e) => setBudget(e.target.value)}>
                                    <option value="budget">
                                        Select Your Budget
                                    </option>
                                    <option value="Morning">$500 - $1000
                                    </option>
                                    <option value="Afternoon">$1000 - $5000
                                    </option>
                                    <option value="Afternoon">$1000 - $5000
                                    </option>
                                    <option value="Afternoon">$5000 - $10000
                                    </option>
                                    <option value="Afternoon">$10000 & up
                                    </option>

                                </select>

                            </div>

                            <div className='col-md-4 my-md-2 my-2'>

                                <select
                                    className="form-control"
                                    value={social} onChange={(e) => setSocial(e.target.value)}>
                                    <option value="Social">
                                        How did You Find Us
                                    </option>
                                    <option value="Morning"> Google
                                    </option>
                                    <option value="Afternoon"> Social Media
                                    </option>
                                    <option value="Afternoon"> Through a Friend
                                    </option>
                                    <option value="Afternoon"> From another website
                                    </option>
                                    <option value="Afternoon"> Others
                                    </option>

                                </select>

                            </div>

                            <div className='col-md-12 my-md-2 my-2'>

                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control custom-text-area" placeholder='Message'></textarea>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='row justify-content-center mt-md-4 mt-2'>

                    <div className='col-md-2 my-md-3'>

                        <div className='d-grid'>
                            <button type="submit" className='btn btn-primary'> Send Message </button>
                        </div>
                    </div>

                </div>

            </form>

        </div>
    )
}

export default ContactForm;