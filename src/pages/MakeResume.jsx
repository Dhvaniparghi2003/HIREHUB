import React, { useState } from 'react'
import jsPDF from "jspdf";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MakeResume = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    education: "",
    experience: "",
    projects: "",
    skills: "",
    certifications: "",
    github: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize jsPDF
    const pdf = new jsPDF();

    // Add content to the PDF
    pdf.setFontSize(20);
    pdf.text("Resume", 20, 20);

    pdf.setFontSize(16);
    pdf.text(`Name: ${formData.name}`, 20, 40);
    pdf.text(`Email: ${formData.email}`, 20, 50);
    pdf.text(`Phone: ${formData.phone}`, 20, 60);
    pdf.text(`Address: ${formData.address}`, 20, 70);
    pdf.text(`GitHub: ${formData.github}`, 20, 80);
    pdf.text(`LinkedIn: ${formData.linkedin}`, 20, 90);

    pdf.setFontSize(16);
    pdf.text("Summary: ", 20, 100);
    pdf.setFontSize(14);
    pdf.text(formData.summary, 20, 110, { maxWidth: 170 });

    pdf.setFontSize(16);
    pdf.text("Education: ", 20, 120);
    pdf.setFontSize(14);
    pdf.text(formData.education, 20, 130, { maxWidth: 170 });

    pdf.setFontSize(16);
    pdf.text("Experience: ", 20, 150);
    pdf.setFontSize(14);
    pdf.text(formData.experience, 20, 160, { maxWidth: 170 });

    pdf.setFontSize(16);
    pdf.text("Projects: ", 20, 180);
    pdf.setFontSize(14);
    pdf.text(formData.projects, 20, 190, { maxWidth: 170 });

    pdf.setFontSize(16);
    pdf.text("Skills: ", 20, 210);
    pdf.setFontSize(14);
    pdf.text(formData.skills, 20, 220, { maxWidth: 170 });

    pdf.setFontSize(16);
    pdf.text("Certifications: ", 20, 240);
    pdf.setFontSize(14);
    pdf.text(formData.certifications, 20, 250, { maxWidth: 170 });

    // Save the PDF with the user's name
    pdf.save(`${formData.name}_resume.pdf`);
  };

  return(
  <>
  <Header/>
  <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Resume Form</h2>

        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Name"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Phone</span>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Phone Number"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Address</span>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Address"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">GitHub</span>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your GitHub Profile"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">LinkedIn</span>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your LinkedIn Profile"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Summary</span>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Brief Summary"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Education</span>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Education"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Experience</span>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Experience"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Projects</span>
          <textarea
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Projects"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Skills</span>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Skills"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Certifications</span>
          <textarea
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Certifications"
            required
          />
        </label>

        <button
          type="submit"
          className=" bg-blue-900 hover:bg-blue-800 w-full text-white py-2 px-4 rounded-lg transition duration-300 "
        >
          Download Resume
        </button>
      </form>
    </div>
    <Footer/>
  </>
  )
}

export default MakeResume
