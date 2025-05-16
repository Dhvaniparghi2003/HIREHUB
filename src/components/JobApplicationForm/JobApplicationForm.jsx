import React, { useState,useEffect,useDispatch } from 'react';
import Modal from 'react-modal';
import { Link, useParams } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { IoIosArrowBack } from "react-icons/io";
import {
  getFullDetailsOfJob,
} from "../../operations/jobDetailsAPI"
import { endpoints } from '../../apis';
const {SEND_MAIL}=endpoints;
import { useSelector } from 'react-redux';




function JobApplicationForm() {
  const { token } = useSelector((state) => state.auth);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '', // Added email field
    phone: '',
    linkedIn: '',
    portfolio: '',
    Github: '',
    education: '',
    experience: [{ title: '', years: '' }],
    skills: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchJobDetails(id);
    }
  }, [id]);

  const fetchJobDetails = async (id) => {
    try {
      const result = await getFullDetailsOfJob(id, token);
      console.log("bala", result)
      if (result?.jobDetails) {
        // Assuming job details contain admin email
        setFormData(prevState => ({
          ...prevState,
          email: result.jobDetails.jobadmin.email // Assuming adminEmail is fetched
        }));
      }
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes("experience")) {
      const [key, index, field] = name.split(/[\[\]]/).filter(Boolean);
      const updatedExperience = [...formData.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: type === 'checkbox' ? checked : value,
      };
      setFormData({
        ...formData,
        experience: updatedExperience,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.authorized) newErrors.authorized = 'Authorization confirmation is required';
    if (!formData.certify) newErrors.certify = 'Certification is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    if (validate()) {
      try {
        const response = await submitJobApplication(formData);
        console.log(response);
        setIsModalOpen(true); // Open modal on successful submission
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  
  const submitJobApplication = async (formData) => {
    const dispatch = useDispatch();
  
    try {
      const formDataWithResume = new FormData();
      for (const key in formData) {
        if (key === 'resume') {
          formDataWithResume.append(key, formData[key], formData[key].name);
        } else if (key === 'experience') {
          formDataWithResume.append(key, JSON.stringify(formData[key]));
        } else {
          formDataWithResume.append(key, formData[key]);
        }
      }
  
      const response = await dispatch(SEND_MAIL(formDataWithResume));
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      return response.payload; // Assuming response payload is in response.payload
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  };
  return (
    <>
      <Header />
      <button className='flex items-center gap-1 bg-blue-900 px-2 py-1 pr-4 ml-8 mt-5 rounded-[8px] text-white'> 
        <Link className='flex items-center' to="/job"><IoIosArrowBack />back</Link>
      </button>
      <div className='m-6'>
        <form onSubmit={(e) => handleSubmit(submitJobApplication(e))} className="space-y-6 p-6 bg-white rounded shadow-lg max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Job Application Form</h1>

          {/* Basic Information */}
          <div className="space-y-4">
            <label className="block">
              Full Name
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
              {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
            </label>
            <label className="block">
              Phone Number
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            </label>
            <label className="block">
              LinkedIn Profile
              <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            </label>
            <label className="block">
              Portfolio/Website
              <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            </label>
            <label className="block">
              Github Profile
              <input type="url" name="Github" value={formData.Github} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            </label>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <label className="block">
              Job Title
              <input type="text" name="title" value={formData.title || ''} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            </label>
            <label className="block">
              Years of Experience
              <input type="text" name="years" value={formData.years || ''} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            </label>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <label className="block">
              Relevant Skills
              <input type="text" name="skills" value={formData.skills} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            </label>
          </div>  
        
          {/* Additional Information */}
          <div className="space-y-4">
            <label className="block">
              Resume/CV
              <input type="file" name="resume" onChange={handleFileChange} className="block w-full mt-1 p-2 border rounded" />
            </label>
          </div>

          <button type="submit"  className="block w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded">
            Submit Application
          </button>
        </form>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
          overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
        >
          <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Application Submitted</h2>
            <p className="mb-4">Thank you for submitting your application. We will review your application and get back to you shortly.</p>
            <button onClick={() => setIsModalOpen(false)} className="bg-blue-500 text-white py-2 px-4 rounded">
              <Link to="/"> Close </Link>
            </button>
          </div>
        </Modal>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.5s ease-in-out;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}

export default JobApplicationForm;
