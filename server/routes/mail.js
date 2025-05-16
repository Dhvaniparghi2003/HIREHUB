// email.js

const nodemailer = require('nodemailer');

// Function to send email
async function sendEmail(formData) {
  try {
    const { fullName, email, phone, linkedIn, portfolio, Github, education, experience, skills, resume } = formData;

    // Configure Nodemailer with your email service provider
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      }
    });

    // Email content
    let mailOptions = {
     from: `"Hire Hub | search your job " <${process.env.MAIL_USER}>`, 
      to: email,
      subject: 'New Job Application Submitted',
      html: `
        <p>Hello,</p>
        <p>A new job application has been submitted with the following details:</p>
        <ul>
          <li><strong>Full Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>LinkedIn:</strong> ${linkedIn}</li>
          <li><strong>Portfolio/Website:</strong> ${portfolio}</li>
          <li><strong>Github:</strong> ${Github}</li>
          <li><strong>Education:</strong> ${education}</li>
          <li><strong>Experience:</strong> ${experience.map(exp => `${exp.title} (${exp.years} years)`).join(', ')}</li>
          <li><strong>Skills:</strong> ${skills}</li>
        </ul>
        <p>Please find the attached resume.</p>
      `,
      attachments: [{
        filename: 'resume.pdf', // Replace with actual filename
        content: resume, // Replace with actual resume file content
      }]
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return { message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

module.exports = { sendEmail };
