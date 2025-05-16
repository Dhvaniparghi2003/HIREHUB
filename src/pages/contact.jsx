import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const contact = () => {
    return (
        <>
            <Header />
            <div className="relative text-gray-800">
                <div className="area absolute inset-0 ">
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="max-w-screen-lg mx-auto lg:p-5 md:p-5 p-2 h-full bg-transparent backdrop-blur-lg">
                    <div className="grid grid-cols-1 md:grid-cols-12 bg-[#e7f3ff] rounded-md shadow-xl">
                        <div className=" md:col-span-4 p-10 text-gray-700">
                            <h3 className="mt-4 text-xl text-blue-900 font-semibold leading-7 font-regular uppercase">
                                Contact
                            </h3>
                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                                Get In <span className="text-blue-900">Touch</span>
                            </h3>
                            <p className="mt-4 leading-7 content-center w-90">
                            We value your feedback and inquiries! Whether you have questions about our products,
                            need support, or just want to share your thoughts, we're here to help. Please fill out
                            the form below with your contact details and message, and we're committed to providing the best 
                            possible assistance.Thank you for reaching out to us, and we look forward to connecting with you soon.
                            </p>
                            <div className="flex mt-8">
                                <a href="/">
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 8 19"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>

                                <a href="#" className="ms-5">
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 21 16"
                                    >
                                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                    </svg>
                                </a>
                                <a href="#" className="ms-5">
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 17"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a href="#" className="ms-5">
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <form className="md:col-span-8 p-10">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide  text-xs font-bold mb-2"
                                        for="grid-first-name"
                                    >
                                        First Name
                                    </label>
                                    <input
                                         className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"

                                        // className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="Jane"
                                        required
                                    />
                                    {/* <p className="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p> */}
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-xs font-bold mb-2"
                                        for="grid-last-name"
                                    >
                                        Last Name
                                    </label>
                                    <input
              className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"

                                        // className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-xs font-bold mb-2"
                                        for="grid-password"
                                    >
                                        Email Address
                                    </label>
                                    <input
              className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md "

                                        // className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-email"
                                        type="email"
                                        placeholder="xyz@gmail.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide  text-xs font-bold mb-2"
                                        for="grid-password"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        rows="10"
                                        required
                                        placeholder="Enter your message here"
                                        className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md resize-none"
                                        
                                        // className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    ></textarea>
                                </div>
                                <div className="lg:flex md:flex flex-col justify-between w-full mt-5 px-3">
                                    <div className="md:flex md:items-center items-center">
                                        <label className="block  font-bold">
                                            <input className="mr-2 leading-tight" type="checkbox" />
                                            <span className="text-sm">Send me your newsletter!</span>
                                        </label>
                                    </div>
                                    <button
                                        className="shadow bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded lg:my-0 md:my-0 my-4"
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default contact;
