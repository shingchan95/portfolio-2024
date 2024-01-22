import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ContactForm from '../components/ContactForm';


const ContactPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resetForm, setResetForm] = useState(false);

    const handleDownloadCV = () => {
        const cvPath = '/cv.pdf';
        window.open(cvPath, '_blank');
    };

    const handleFormSubmit = async (formData) => {
        setIsLoading(true);
        const formSubmitEndpoint = 'https://formsubmit.co/ajax/2092447f16864bfd213b76ed069368e8';

        try {

            const response = await fetch(formSubmitEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                setResetForm(true);


            } else {
                alert('Form submission failed. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="contact" className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4">Contact Me</h1>

                <ContactForm onSubmit={handleFormSubmit} isLoading={isLoading} onReset={resetForm} />


                <div className="mt-24 flex flex-wrap items-center md:space-x-24">
                    <div className='flex sm:p-2 lg:p-0'>
                        <MdEmail size={32} className="mr-2" />
                        <p className="text-lg">shingchan1219@gmail.com</p>
                    </div>
                    <a href="https://www.linkedin.com/in/shing-hei-chan-b74747120/" target="_blank" rel="noopener noreferrer" className="mr-4 sm:p-2 lg:p-0">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://github.com/shingchan95" target="_blank" rel="noopener noreferrer" className="mr-4 sm:p-2 lg:p-0">
                        <FaGithub size={32} />
                    </a>
                </div>

                <div className="mt-8 flex">
                    <p className="text-lg mr-4 font-semibold">Download CV:</p>
                    <button onClick={handleDownloadCV} className="text-white">
                        <span>📄</span>CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
