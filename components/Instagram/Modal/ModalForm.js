import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    text: ""
};

const ModalForm = (props) => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const [modal, setModal] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const toggle = () => setModal(!modal);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, text } = contact;
            const payload = { name, email, text };
            await axios.post(url, payload);
            setContact(INITIAL_STATE);
            toggle();
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };
  
    return (
        <>
            <Button className="default-btn" onClick={toggle}>Contact Me</Button>

            <Modal 
                isOpen={modal} 
                toggle={toggle} 
                className={props.className}
                centered={true}
                backdrop="static" 
                className="contactModal"
            >
                <ModalHeader toggle={toggle}>Send Me A Message!</ModalHeader>
                
                <ModalBody>
                    <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="form-control" 
                                        placeholder="Enter your name" 
                                        value={contact.name}
                                        onChange={handleChange}
                                        ref={register({ required: true })}
                                    />
                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.name && 'Name is required.'}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="email" 
                                        className="form-control" 
                                        placeholder="Enter your email" 
                                        value={contact.email}
                                        onChange={handleChange}
                                        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                    />
                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.email && 'Email is required.'}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea 
                                        name="text" 
                                        className="form-control" 
                                        cols="30" 
                                        rows="5" 
                                        placeholder="Enter your message" 
                                        value={contact.text}
                                        onChange={handleChange}
                                        ref={register({ required: true })}
                                    />
                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.text && 'Text body is required.'}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <button type="submit" className="default-btn">Send Message</button>
                            </div>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default ModalForm;