// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Modal from 'react-modal';

// Modal.setAppElement('#root');
// const FundedProjectsTable = () => {
//   const [projects, setProjects] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterOptions, setFilterOptions] = useState({
//     status: true,
//     yearOfSanction: true,
//     amountSanctioned: true,
//     fundingAgency: true,
//   });
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [currentProject, setCurrentProject] = useState(null);

//   useEffect(() => {
//     // Simulating fetching data
//     const data = [
//       {
//         id: 1,
//         facultyName: 'ABC',
//         projectTitle: 'AI Research',
//         fundingAgency: 'ABC Foundation',
//         amountSanctioned: 10,
//         duration: '2 years',
//         yearOfSanction: 2023,
//         status: 'Ongoing'
//       },
//       {
//         id: 2,
//         facultyName: 'XYZ',
//         projectTitle: 'ML Project',
//         fundingAgency: 'XYZ Trust',
//         amountSanctioned: 15,
//         duration: '3 years',
//         yearOfSanction: 2024,
//         status: 'Pending'
//       }
//     ];
//     setProjects(data);
//   }, []);

//   const handleSearch = event => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFilterChange = event => {
//     const { name, checked } = event.target;
//     setFilterOptions(prevOptions => ({
//       ...prevOptions,
//       [name]: checked
//     }));
//   };

//   const openModal = project => {
//     setCurrentProject(project);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setCurrentProject(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentProject({
//       ...currentProject,
//       [name]: value
//     });
//   };

//   const handleUpdate = () => {
//     setProjects(prevProjects =>
//       prevProjects.map(project =>
//         project.id === currentProject.id ? currentProject : project
//       )
//     );
//     closeModal();
//   };

//   const filteredProjects = projects.filter(project => {
//     if (
//       (startDate && new Date(project.yearOfSanction) < startDate) ||
//       (endDate && new Date(project.yearOfSanction) > endDate)
//     ) {
//       return false;
//     }
//     return (
//       project.facultyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.fundingAgency.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.status.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   return (
//     <div className="container">
//       <div className="header">
//         <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Institute Logo" className="logo" />
//         <h1>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
//         <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
//         <h2>Funded Projects</h2>
//       </div>
//       <div className="filter-container">
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="status"
//             name="status"
//             checked={filterOptions.status}
//             onChange={handleFilterChange}
//           />
//           <label className="form-check-label" htmlFor="status">Status</label>
//         </div>
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="yearOfSanction"
//             name="yearOfSanction"
//             checked={filterOptions.yearOfSanction}
//             onChange={handleFilterChange}
//           />
//           <label className="form-check-label" htmlFor="yearOfSanction">Year of Sanction</label>
//         </div>
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="amountSanctioned"
//             name="amountSanctioned"
//             checked={filterOptions.amountSanctioned}
//             onChange={handleFilterChange}
//           />
//           <label className="form-check-label" htmlFor="amountSanctioned">Amount Sanctioned</label>
//         </div>
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="fundingAgency"
//             name="fundingAgency"
//             checked={filterOptions.fundingAgency}
//             onChange={handleFilterChange}
//           />
//           <label className="form-check-label" htmlFor="fundingAgency">Funding Agency</label>
//         </div>
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="DurationofProject"
//             name="duration"
//             checked={filterOptions.DurationofProject}
//             onChange={handleFilterChange}
//           />
//           <label className="form-check-label" htmlFor="DurationofProject">Duration of Project</label>
//         </div>
//         <div>
//           <label>From Date: </label>
//           <DatePicker
//             selected={startDate}
//             onChange={date => setStartDate(date)}
//             isClearable
//             placeholderText="Select start date"
//           />
//         </div>
//         <div>
//           <label>To Date: </label>
//           <DatePicker
//             selected={endDate}
//             onChange={date => setEndDate(date)}
//             isClearable
//             placeholderText="Select end date"
//           />
//         </div>
//       </div>
//       <div className="search-bar">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search projects..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
//       <div className="table-container">
//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th scope="col">S.NO</th>
//               <th scope="col">Name of the Faculty</th>
//               <th scope="col">Project Title</th>
//               {filterOptions.fundingAgency && <th scope="col">Funding agency</th>}
//               {filterOptions.amountSanctioned && <th scope="col">Amount/Fund Sanctioned in lakhs</th>}
//               <th scope="col">Duration of project</th>
//               {filterOptions.yearOfSanction && <th scope="col">Year of Sanction</th>}
//               {filterOptions.status && <th scope="col">Status</th>}
//               <th scope="col">Update Project Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td colSpan="9" className="text-center">2023-2024</td>
//             </tr>
//             {filteredProjects.map((project, index) => (
//               <tr key={project.id}>
//                 <td>{index + 1}</td>
//                 <td>{project.facultyName}</td>
//                 <td>{project.projectTitle}</td>
//                 {filterOptions.fundingAgency && <td>{project.fundingAgency}</td>}
//                 {filterOptions.amountSanctioned && <td>{project.amountSanctioned}</td>}
//                 <td>{project.duration}</td>
//                 {filterOptions.yearOfSanction && <td>{project.yearOfSanction}</td>}
//                 {filterOptions.status && <td>{project.status}</td>}
//                 <td>
//                   <button className="btn btn-primary" onClick={() => openModal(project)}>Update</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Update Project Details"
//         className="Modal"
//         overlayClassName="Overlay"
//       >
//         {currentProject && (
//           <div>
//             <h2>Update Project Details</h2>
//             <form>
//               <div className="form-group">
//                 <label htmlFor="facultyName">Name of the Faculty</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="facultyName"
//                   name="facultyName"
//                   value={currentProject.facultyName}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="projectTitle">Project Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="projectTitle"
//                   name="projectTitle"
//                   value={currentProject.projectTitle}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="fundingAgency">Funding Agency</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="fundingAgency"
//                   name="fundingAgency"
//                   value={currentProject.fundingAgency}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="amountSanctioned">Amount Sanctioned</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="amountSanctioned"
//                   name="amountSanctioned"
//                   value={currentProject.amountSanctioned}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="duration">Duration</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="duration"
//                   name="duration"
//                   value={currentProject.duration}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="yearOfSanction">Year of Sanction</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="yearOfSanction"
//                   name="yearOfSanction"
//                   value={currentProject.yearOfSanction}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="status">Status</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="status"
//                   name="status"
//                   value={currentProject.status}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
//               <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
//             </form>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default FundedProjectsTable;


























// final
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './FundedProjectsTable.css';
import axios from 'axios';

const FundedProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [filters, setFilters] = useState({
    facultyName: true,
    projectTitle: true,
    fundingAgency: true,
    duration: true,
    yearOfSanction: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const openModal = (project) => {
    setCurrentProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProject(null);
  };

  const toggleFilter = (field) => {
    setFilters({
      ...filters,
      [field]: !filters[field],
    });
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearchTerm =
      project.facultyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.organization.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearchTerm;
  });

  return (
    <div className="container">
      <header className="header">
      <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Institute Logo" className="logo" />
        <h1>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
        <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
        <h2>Funded Projects</h2>
      </header>
      <button onClick={fetchData}>Fetch Projects</button>
      <div className="filters">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="checkbox-filters">
        <label>
          <input
            type="checkbox"
            checked={filters.facultyName}
            onChange={() => toggleFilter('facultyName')}
          />
          Name of the Faculty
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.projectTitle}
            onChange={() => toggleFilter('projectTitle')}
          />
          Project Title
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.fundingAgency}
            onChange={() => toggleFilter('fundingAgency')}
          />
          Funding Agency
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.duration}
            onChange={() => toggleFilter('duration')}
          />
          Duration of Project
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.yearOfSanction}
            onChange={() => toggleFilter('yearOfSanction')}
          />
          Year of Sanction
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            {filters.facultyName && <th>Name of the Faculty</th>}
            {filters.projectTitle && <th>Project Title</th>}
            <th>Organization</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Date of Application</th>
            <th>Email ID</th>
            <th>Contact Number</th>
            {filters.fundingAgency && <th>Agency</th>}
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              {filters.facultyName && <td>{project.facultyName}</td>}
              {filters.projectTitle && <td>{project.projectTitle}</td>}
              <td>{project.organization}</td>
              <td>{project.designation}</td>
              <td>{project.department}</td>
              <td>{project.dateOfApplication}</td>
              <td>{project.emailId}</td>
              <td>{project.contactNumber}</td>
              {filters.fundingAgency && <td>{project.agency}</td>}
              <td>{project.amount}</td>
              <td>
                <button onClick={() => openModal(project)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
      >
        {currentProject && (
          <div>
            <h2>Project Details</h2>
            <p><strong>Faculty ID:</strong> {currentProject.facultyId}</p>
            <p><strong>Faculty Name:</strong> {currentProject.facultyName}</p>
            <p><strong>Project Title:</strong> {currentProject.projectTitle}</p>
            <p><strong>Organization:</strong> {currentProject.organization}</p>
            <p><strong>Designation:</strong> {currentProject.designation}</p>
            <p><strong>Department:</strong> {currentProject.department}</p>
            <p><strong>Date of Application:</strong> {currentProject.dateOfApplication}</p>
            <p><strong>Email ID:</strong> {currentProject.emailId}</p>
            <p><strong>Contact Number:</strong> {currentProject.contactNumber}</p>
            <p><strong>Agency:</strong> {currentProject.agency}</p>
            <p><strong>Amount:</strong> {currentProject.amount}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FundedProjectsTable;

































// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './FundedProjectsTable.css';

// const FundedProjectsTable = () => {
//   const [projects, setProjects] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [currentProject, setCurrentProject] = useState(null);
//   const [filters, setFilters] = useState({
//     facultyName: true,
//     projectTitle: true,
//     fundingAgency: true,
//     duration: true,
//     yearOfSanction: true,
//   });

//   const fetchData = () => {
//     fetch('http://localhost:3001/projects')  // Update the URL to your backend endpoint
//       .then(response => response.json())
//       .then(data => setProjects(data))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleDateChange = (dates) => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);
//   };

//   const openModal = (project) => {
//     setCurrentProject(project);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setCurrentProject(null);
//   };

//   const toggleFilter = (field) => {
//     setFilters({
//       ...filters,
//       [field]: !filters[field],
//     });
//   };

//   const filteredProjects = projects.filter((project) => {
//     const projectDate = new Date(project.dateOfApplication);
//     const matchesSearchTerm =
//       project.facultyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.organization.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesDateRange =
//       (!startDate || projectDate >= startDate) &&
//       (!endDate || projectDate <= endDate);

//     return matchesSearchTerm && matchesDateRange;
//   });

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Projects</button>
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search projects..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <DatePicker
//           selected={startDate}
//           onChange={handleDateChange}
//           startDate={startDate}
//           endDate={endDate}
//           selectsRange
//           placeholderText="Select date range"
//           isClearable
//         />
//       </div>
//       <div className="checkbox-filters">
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.facultyName}
//             onChange={() => toggleFilter('facultyName')}
//           />
//           Name of the Faculty
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.projectTitle}
//             onChange={() => toggleFilter('projectTitle')}
//           />
//           Project Title
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.fundingAgency}
//             onChange={() => toggleFilter('fundingAgency')}
//           />
//           Funding Agency
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.duration}
//             onChange={() => toggleFilter('duration')}
//           />
//           Duration of Project
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.yearOfSanction}
//             onChange={() => toggleFilter('yearOfSanction')}
//           />
//           Year of Sanction
//         </label>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             {filters.facultyName && <th>Name of the Faculty</th>}
//             {filters.projectTitle && <th>Project Title</th>}
//             {filters.fundingAgency && <th>Funding Agency</th>}
//             {filters.duration && <th>Duration of Project</th>}
//             {filters.yearOfSanction && <th>Year of Sanction</th>}
//             <th>Update Project Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProjects.map((project, index) => (
//             <tr key={project.id}>
//               <td>{index + 1}</td>
//               {filters.facultyName && <td>{project.facultyName}</td>}
//               {filters.projectTitle && <td>{project.projectTitle}</td>}
//               {filters.fundingAgency && <td>{project.fundingAgency}</td>}
//               {filters.duration && <td>{project.duration}</td>}
//               {filters.yearOfSanction && <td>{project.yearOfSanction}</td>}
//               <td>
//                 <button onClick={() => openModal(project)}>View Details</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Project Details"
//       >
//         {currentProject && (
//           <div>
//             <h2>Project Details</h2>
//             <p><strong>Name of the Faculty:</strong> {currentProject.facultyName}</p>
//             <p><strong>Project Title:</strong> {currentProject.projectTitle}</p>
//             <p><strong>Funding Agency:</strong> {currentProject.fundingAgency}</p>
//             <p><strong>Duration of Project:</strong> {currentProject.duration}</p>
//             <p><strong>Year of Sanction:</strong> {currentProject.yearOfSanction}</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default FundedProjectsTable;
