import React, { useState, useEffect } from 'react';

const ContactForm = ({ onSubmit, isLoading, onReset }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        onSubmit(formData);
    };
    useEffect(() => {
        // Reset the form when the onReset prop changes
        if (onReset) {
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }
    }, [onReset]);
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`mt-1 p-2 border border-gray-300 rounded w-full text-black ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={isLoading}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`mt-1 p-2 border border-gray-300 rounded w-full text-black ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={isLoading}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`mt-1 p-2 border border-gray-300 rounded w-full text-black ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={isLoading}
                />
            </div>

            <button type="submit" className={`bg-blue-500 text-white py-2 px-4 rounded ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`} disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default ContactForm;
