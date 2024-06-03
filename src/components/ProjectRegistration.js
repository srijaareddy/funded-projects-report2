import React from 'react';
import './ProjectRegistration.css'; // Add any specific styles for this component

const ProjectRegistration = () => {
  return (
    <div className="registration-container">
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Logo" className="logo" />
        <h1>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
        <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
        <h2>Project Registration</h2>
      </div>
      <form id="registrationForm">
        <div className="form-group">
          <label htmlFor="facultyId">Faculty ID:</label>
          <select id="facultyId" name="facultyId">
            <option value="">Select</option>
            <option value="">Select Faculty ID</option>
            <option value="F1234">F1234</option>

          </select>
        </div>
        <div className="form-group">
          <label htmlFor="facultyName">Faculty Name:</label>
          <input type="text" id="facultyName" name="facultyName" />
        </div>
        <div className="form-group">
          <label htmlFor="projectTitle">Project Title:</label>
          <input type="text" id="projectTitle" name="projectTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization:</label>
          <input type="text" id="organization" name="organization" />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <select id="designation" name="designation">
            <option value="pi">PI</option>
            <option value="co-pi">Co-PI</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select id="department" name="department">
            <option value="">Select</option>
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science and Engineering</option>
                    <option value="Computer Science and Business Systems">Computer Science and Business Systems</option>
                    <option value="Computer Science and Engineering-AIML">Computer Science and Engineering-AIML</option>
                    <option value="Computer Science and Engineering-AIDS">Computer Science and Engineering-AIDS</option>
                    <option value="Computer Science and Engineering-Cybersecurity">Computer Science and Engineering-Cybersecurity</option>
                    <option value="Computer Science and Engineering-Data Science">Computer Science and Engineering-Data Science</option>
                    <option value="Computer Science and Engineering-IOT">Computer Science and Engineering-IOT</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                    <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                    <option value="Electronics and Instrumentation Engineering">Electronics and Instrumentation Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Automobile Engineering">Automobile Engineering</option>
            {/* Add options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfApplication">Date of Application:</label>
          <input type="date" id="dateOfApplication" name="dateOfApplication" />
        </div>
        <div className="form-group">
          <label htmlFor="emailId">Email ID:</label>
          <input type="email" id="emailId" name="emailId" placeholder="xyz@vnrvjiet.in" />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="text" id="contactNumber" name="contactNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="agency">Agency:</label>
          <input type="text" id="agency" name="agency" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" />
        </div>
        <button type="button" id="addFacultyBtn">+ add faculty(for collaborations)</button>
        <button type="submit" id="Submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectRegistration;
