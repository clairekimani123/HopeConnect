import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactPage(){
    return (
        <div className="pt-20">
            <section className="max-w-5xl mx-auto text-center px-4 py-10">
                <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We'd love to hear from you. Whether you have a question, a suggestion, or want to partner with us, please reach out.
                </p>
            </section>

            <section className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 px-4 pb-16">
                
                <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
                        <div>
                            <strong>Address:</strong><br />
                            123 Hope Street, Nairobi, Kenya
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-blue-600 text-2xl mt-1" />
                        <div>
                            <strong>Email:</strong><br />
                            connect@hopeconnect.org
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaPhone className="text-blue-600 text-2xl mt-1" />
                        <div>
                            <strong>Phone:</strong><br />
                            +254 700 123 456
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6">
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="contact-name" className="block mb-1 font-medium">Your Name</label>
                            <input
                                type="text"
                                id="contact-name"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-email" className="block mb-1 font-medium">Your Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="block mb-1 font-medium">Message</label>
                            <textarea
                                id="contact-message"
                                rows="5"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </section>
        </div>
    );
};

export default ContactPage;
