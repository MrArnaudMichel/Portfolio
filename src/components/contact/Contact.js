import React, {useEffect, useState} from 'react';
import './css/contact.css';
import AOS from "aos";
// import axios from 'axios';

// function resetForm() {
//     document.getElementById('contact-form').reset();
// }

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //
    //     axios({
    //         method: "POST",
    //         url:"http://localhost:3000/send",
    //         data: {
    //             name: 'Name',
    //             email: 'Email',
    //             title: 'Title',
    //             message: 'Your Message'
    //         }
    //     }).then((response) => {
    //         if (response.data.status === 'success') {
    //             alert("Message Sent.");
    //             resetForm()
    //         } else if (response.data.status === 'fail') {
    //             alert("Message failed to send.")
    //         }
    //     })
    // }

    return (
        <div id={"Contact"} className={"Contact"}>
            <h1 data-aos="fade-up">Contact</h1>
            <form className="contact-form"> {/*onSubmit={handleSubmit}>*/}
                <input data-aos="fade-up" type="text" name="name" placeholder="Your name" value={formState.name} onChange={handleChange} />
                <input data-aos="fade-up"type="email" name="email" placeholder="Your email" value={formState.email} onChange={handleChange} />
                <input data-aos="fade-up" type="text" name="title" placeholder="Your title" value={formState.title} onChange={handleChange} />
                <textarea data-aos="fade-up" name="message" placeholder="Your message" value={formState.message} onChange={handleChange} />
                <button data-aos="fade-up" type="submit">Send</button>
            </form>
        </div>
    );
}

