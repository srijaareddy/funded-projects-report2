// import React, { useState } from 'react';
// import './ProjectRegistration.css'; 

// const ProjectRegistration = () => {
//   const [facultyForms, setFacultyForms] = useState([{ id: 1 }]);

//   const addFacultyForm = () => {
//     setFacultyForms([...facultyForms, { id: facultyForms.length + 1 }]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Collect data from all forms and handle submission logic here
//     console.log('Form submitted');
//   };

//   return (
//     <div className="registration-container">
//       <div className="header">
//         <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Logo" className="logo" />
//         <h1>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
//         <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
//         <h2>Project Registration</h2>
//       </div>
//       <form id="registrationForm" onSubmit={handleSubmit}>
//         {facultyForms.map((form, index) => (
//           <div key={form.id} className="faculty-form">
//             <h3>Faculty {index + 1}</h3>
//             <div className="form-group">
//               <label htmlFor={`facultyId-${form.id}`}>Faculty ID:</label>
//               <select id={`facultyId-${form.id}`} name={`facultyId-${form.id}`}>
//                 <option value="">Select</option>
//                 <option value="F1234">F1234</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor={`facultyName-${form.id}`}>Faculty Name:</label>
//               <input type="text" id={`facultyName-${form.id}`} name={`facultyName-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`projectTitle-${form.id}`}>Project Title:</label>
//               <input type="text" id={`projectTitle-${form.id}`} name={`projectTitle-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`organization-${form.id}`}>Organization:</label>
//               <input type="text" id={`organization-${form.id}`} name={`organization-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`designation-${form.id}`}>Designation:</label>
//               <select id={`designation-${form.id}`} name={`designation-${form.id}`}>
//                 <option value="pi">PI</option>
//                 <option value="co-pi">Co-PI</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor={`department-${form.id}`}>Department:</label>
//               <select id={`department-${form.id}`} name={`department-${form.id}`}>
//                 <option value="">Select</option>
//                 <option value="Computer Science and Engineering">Computer Science and Engineering</option>
//                 <option value="Computer Science and Business Systems">Computer Science and Business Systems</option>
//                 <option value="Computer Science and Engineering-AIML">Computer Science and Engineering-AIML</option>
//                 <option value="Computer Science and Engineering-AIDS">Computer Science and Engineering-AIDS</option>
//                 <option value="Computer Science and Engineering-Cybersecurity">Computer Science and Engineering-Cybersecurity</option>
//                 <option value="Computer Science and Engineering-Data Science">Computer Science and Engineering-Data Science</option>
//                 <option value="Computer Science and Engineering-IOT">Computer Science and Engineering-IOT</option>
//                 <option value="Information Technology">Information Technology</option>
//                 <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
//                 <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
//                 <option value="Electronics and Instrumentation Engineering">Electronics and Instrumentation Engineering</option>
//                 <option value="Civil Engineering">Civil Engineering</option>
//                 <option value="Mechanical Engineering">Mechanical Engineering</option>
//                 <option value="Automobile Engineering">Automobile Engineering</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor={`dateOfApplication-${form.id}`}>Date of Application:</label>
//               <input type="date" id={`dateOfApplication-${form.id}`} name={`dateOfApplication-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`emailId-${form.id}`}>Email ID:</label>
//               <input type="email" id={`emailId-${form.id}`} name={`emailId-${form.id}`} placeholder="xyz@vnrvjiet.in" />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`contactNumber-${form.id}`}>Contact Number:</label>
//               <input type="text" id={`contactNumber-${form.id}`} name={`contactNumber-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`agency-${form.id}`}>Agency:</label>
//               <input type="text" id={`agency-${form.id}`} name={`agency-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`amount-${form.id}`}>Amount:</label>
//               <input type="number" id={`amount-${form.id}`} name={`amount-${form.id}`} />
//             </div>
//           </div>
//         ))}
//         <button type="button" id="addFacultyBtn" onClick={addFacultyForm}>+ add faculty (for collaborations)</button>
//         <button type="submit" id="Submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ProjectRegistration;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ProjectRegistration.css'; 

// const ProjectRegistration = () => {
//   const [facultyForms, setFacultyForms] = useState([{ id: 1 }]);
//   const navigate = useNavigate();

//   const addFacultyForm = () => {
//     setFacultyForms([...facultyForms, { id: facultyForms.length + 1 }]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Collect data from all forms
//     const formData = facultyForms.map((form) => {
//       return {
//         facultyId: event.target[`facultyId-${form.id}`].value,
//         facultyName: event.target[`facultyName-${form.id}`].value,
//         projectTitle: event.target[`projectTitle-${form.id}`].value,
//         organization: event.target[`organization-${form.id}`].value,
//         designation: event.target[`designation-${form.id}`].value,
//         department: event.target[`department-${form.id}`].value,
//         dateOfApplication: event.target[`dateOfApplication-${form.id}`].value,
//         emailId: event.target[`emailId-${form.id}`].value,
//         contactNumber: event.target[`contactNumber-${form.id}`].value,
//         agency: event.target[`agency-${form.id}`].value,
//         amount: event.target[`amount-${form.id}`].value,
//       };
//     });
//     console.log('Form Data Submitted:', formData);
    
//     // Redirect to thank you page after submission
//     navigate('/ThankYou');
//   };

//   return (
//     <div className="registration-container">
//       <div className="header">
//         <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Logo" className="logo" />
//         <h1>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
//         <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
//         <h2>Project Registration</h2>
//       </div>
//       <form id="registrationForm" onSubmit={handleSubmit}>
//         {facultyForms.map((form, index) => (
//           <div key={form.id} className="faculty-form">
//             <h3>Faculty {index + 1}</h3>
//             <div className="form-group">
//               <label htmlFor={`facultyId-${form.id}`}>Faculty ID:</label>
//               <select id={`facultyId-${form.id}`} name={`facultyId-${form.id}`}>
//                 <option value="">Select</option>
//                 <option value="F1234">F1234</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor={`facultyName-${form.id}`}>Faculty Name:</label>
//               <input type="text" id={`facultyName-${form.id}`} name={`facultyName-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`projectTitle-${form.id}`}>Project Title:</label>
//               <input type="text" id={`projectTitle-${form.id}`} name={`projectTitle-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`organization-${form.id}`}>Organization:</label>
//               <input type="text" id={`organization-${form.id}`} name={`organization-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`designation-${form.id}`}>Designation:</label>
//               <select id={`designation-${form.id}`} name={`designation-${form.id}`}>
//                 <option value="pi">PI</option>
//                 <option value="co-pi">Co-PI</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor={`department-${form.id}`}>Department:</label>
//               <select id={`department-${form.id}`} name={`department-${form.id}`}>
//                 <option value="">Select</option>
//                 <option value="Computer Science and Engineering">Computer Science and Engineering</option>
//                 <option value="Computer Science and Business Systems">Computer Science and Business Systems</option>
//                 <option value="Computer Science and Engineering-AIML">Computer Science and Engineering-AIML</option>
//                 <option value="Computer Science and Engineering-AIDS">Computer Science and Engineering-AIDS</option>
//                 <option value="Computer Science and Engineering-Cybersecurity">Computer Science and Engineering-Cybersecurity</option>
//                 <option value="Computer Science and Engineering-Data Science">Computer Science and Engineering-Data Science</option>
//                 <option value="Computer Science and Engineering-IOT">Computer Science and Engineering-IOT</option>
//                 <option value="Information Technology">Information Technology</option>
//                 <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
//                 <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
//                 <option value="Electronics and Instrumentation Engineering">Electronics and Instrumentation Engineering</option>
//                 <option value="Civil Engineering">Civil Engineering</option>
//                 <option value="Mechanical Engineering">Mechanical Engineering</option>
//                 <option value="Automobile Engineering">Automobile Engineering</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor={`dateOfApplication-${form.id}`}>Date of Application:</label>
//               <input type="date" id={`dateOfApplication-${form.id}`} name={`dateOfApplication-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`emailId-${form.id}`}>Email ID:</label>
//               <input type="email" id={`emailId-${form.id}`} name={`emailId-${form.id}`} placeholder="xyz@vnrvjiet.in" />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`contactNumber-${form.id}`}>Contact Number:</label>
//               <input type="text" id={`contactNumber-${form.id}`} name={`contactNumber-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`agency-${form.id}`}>Agency:</label>
//               <input type="text" id={`agency-${form.id}`} name={`agency-${form.id}`} />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`amount-${form.id}`}>Amount:</label>
//               <input type="number" id={`amount-${form.id}`} name={`amount-${form.id}`} />
//             </div>
//           </div>
//         ))}
//         <button type="button" id="addFacultyBtn" onClick={addFacultyForm}>+ add faculty (for collaborations)</button>
//         <button type="submit" id="Submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ProjectRegistration;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectRegistration.css'; 

const ProjectRegistration = () => {
  const [facultyForms, setFacultyForms] = useState([{ id: 1 }]);
  const navigate = useNavigate();

  const addFacultyForm = () => {
    setFacultyForms([...facultyForms, { id: facultyForms.length + 1 }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = facultyForms.map((form) => ({
      facultyId: event.target[`facultyId-${form.id}`].value,
      facultyName: event.target[`facultyName-${form.id}`].value,
      projectTitle: event.target[`projectTitle-${form.id}`].value,
      organization: event.target[`organization-${form.id}`].value,
      designation: event.target[`designation-${form.id}`].value,
      department: event.target[`department-${form.id}`].value,
      dateOfApplication: event.target[`dateOfApplication-${form.id}`].value,
      emailId: event.target[`emailId-${form.id}`].value,
      contactNumber: event.target[`contactNumber-${form.id}`].value,
      agency: event.target[`agency-${form.id}`].value,
      amount: event.target[`amount-${form.id}`].value,
    }));

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form Data Submitted:', formData);
        navigate('/ThankYou');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="registration-container">
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Logo" className="logo" />
        <h1>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
        <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
        <h2>Project Registration</h2>
      </div>
      <form id="registrationForm" onSubmit={handleSubmit}>
        {facultyForms.map((form, index) => (
          <div key={form.id} className="faculty-form">
            <h3>Faculty {index + 1}</h3>
            <div className="form-group">
              <label htmlFor={`facultyId-${form.id}`}>Faculty ID:</label>
              <select id={`facultyId-${form.id}`} name={`facultyId-${form.id}`}>
                <option value="">Select</option>
                <option value="A1234">F1234</option>
                <option value="B1234">F1234</option>
                <option value="C1234">F1234</option>
                <option value="D1234">F1234</option>
                <option value="E1234">F1234</option>
                <option value="F1234">F1234</option>

              </select>
            </div>
            <div className="form-group">
              <label htmlFor={`facultyName-${form.id}`}>Faculty Name:</label>
              <input type="text" id={`facultyName-${form.id}`} name={`facultyName-${form.id}`} />
            </div>
            <div className="form-group">
              <label htmlFor={`projectTitle-${form.id}`}>Project Title:</label>
              <input type="text" id={`projectTitle-${form.id}`} name={`projectTitle-${form.id}`} />
            </div>
            <div className="form-group">
              <label htmlFor={`organization-${form.id}`}>Organization:</label>
              <input type="text" id={`organization-${form.id}`} name={`organization-${form.id}`} />
            </div>
            <div className="form-group">
              <label htmlFor={`designation-${form.id}`}>Designation:</label>
              <select id={`designation-${form.id}`} name={`designation-${form.id}`}>
                <option value="pi">PI</option>
                <option value="co-pi">Co-PI</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor={`department-${form.id}`}>Department:</label>
              <select id={`department-${form.id}`} name={`department-${form.id}`}>
                <option value="">Select</option>
                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
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
              </select>
            </div>
            <div className="form-group">
              <label htmlFor={`dateOfApplication-${form.id}`}>Date of Application:</label>
              <input type="date" id={`dateOfApplication-${form.id}`} name={`dateOfApplication-${form.id}`} />
            </div>
            <div className="form-group">
              <label htmlFor={`emailId-${form.id}`}>Email ID:</label>
              <input type="email" id={`emailId-${form.id}`} name={`emailId-${form.id}`} placeholder="xyz@vnrvjiet.in" />
            </div>
            <div className="form-group">
              <label htmlFor={`contactNumber-${form.id}`}>Contact Number:</label>
              <input type="text" id={`contactNumber-${form.id}`} name={`contactNumber-${form.id}`} />
            </div>
            <div className="form-group">
              <label htmlFor={`agency-${form.id}`}>Agency:</label>
              <input type="text" id={`agency-${form.id}`} name={`agency-${form.id}`} />
            </div>
            <div className="form-group">
              <label htmlFor={`amount-${form.id}`}>Amount:</label>
              <input type="number" id={`amount-${form.id}`} name={`amount-${form.id}`} />
            </div>
          </div>
        ))}
        <button type="button" id="addFacultyBtn" onClick={addFacultyForm}>+ add faculty (for collaborations)</button>
        <button type="submit" id="Submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectRegistration;
