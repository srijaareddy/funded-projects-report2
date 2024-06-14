import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import './FundedProjectsTable.css';

Modal.setAppElement('#root');
const FundedProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    status: true,
    yearOfSanction: true,
    amountSanctioned: true,
    fundingAgency: true,
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    // Simulating fetching data
    const data = [
      {
        id: 1,
        facultyName: 'ABC',
        projectTitle: 'AI Research',
        fundingAgency: 'ABC Foundation',
        amountSanctioned: 10,
        duration: '2 years',
        yearOfSanction: 2023,
        status: 'Ongoing'
      },
      {
        id: 2,
        facultyName: 'XYZ',
        projectTitle: 'ML Project',
        fundingAgency: 'XYZ Trust',
        amountSanctioned: 15,
        duration: '3 years',
        yearOfSanction: 2024,
        status: 'Pending'
      }
    ];
    setProjects(data);
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = event => {
    const { name, checked } = event.target;
    setFilterOptions(prevOptions => ({
      ...prevOptions,
      [name]: checked
    }));
  };

  const openModal = project => {
    setCurrentProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProject(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({
      ...currentProject,
      [name]: value
    });
  };

  const handleUpdate = () => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === currentProject.id ? currentProject : project
      )
    );
    closeModal();
  };

  const filteredProjects = projects.filter(project => {
    if (
      (startDate && new Date(project.yearOfSanction) < startDate) ||
      (endDate && new Date(project.yearOfSanction) > endDate)
    ) {
      return false;
    }
    return (
      project.facultyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.fundingAgency.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container">
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Institute Logo" className="logo" />
        <h1>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
        <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
        <h2>Funded Projects</h2>
      </div>
      <div className="filter-container">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="status"
            name="status"
            checked={filterOptions.status}
            onChange={handleFilterChange}
          />
          <label className="form-check-label" htmlFor="status">Status</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="yearOfSanction"
            name="yearOfSanction"
            checked={filterOptions.yearOfSanction}
            onChange={handleFilterChange}
          />
          <label className="form-check-label" htmlFor="yearOfSanction">Year of Sanction</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="amountSanctioned"
            name="amountSanctioned"
            checked={filterOptions.amountSanctioned}
            onChange={handleFilterChange}
          />
          <label className="form-check-label" htmlFor="amountSanctioned">Amount Sanctioned</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="fundingAgency"
            name="fundingAgency"
            checked={filterOptions.fundingAgency}
            onChange={handleFilterChange}
          />
          <label className="form-check-label" htmlFor="fundingAgency">Funding Agency</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="DurationofProject"
            name="duration"
            checked={filterOptions.DurationofProject}
            onChange={handleFilterChange}
          />
          <label className="form-check-label" htmlFor="DurationofProject">Duration of Project</label>
        </div>
        <div>
          <label>From Date: </label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            isClearable
            placeholderText="Select start date"
          />
        </div>
        <div>
          <label>To Date: </label>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            isClearable
            placeholderText="Select end date"
          />
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="form-control"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="table-container">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Name of the Faculty</th>
              <th scope="col">Project Title</th>
              {filterOptions.fundingAgency && <th scope="col">Funding agency</th>}
              {filterOptions.amountSanctioned && <th scope="col">Amount/Fund Sanctioned in lakhs</th>}
              <th scope="col">Duration of project</th>
              {filterOptions.yearOfSanction && <th scope="col">Year of Sanction</th>}
              {filterOptions.status && <th scope="col">Status</th>}
              <th scope="col">Update Project Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="9" className="text-center">2023-2024</td>
            </tr>
            {filteredProjects.map((project, index) => (
              <tr key={project.id}>
                <td>{index + 1}</td>
                <td>{project.facultyName}</td>
                <td>{project.projectTitle}</td>
                {filterOptions.fundingAgency && <td>{project.fundingAgency}</td>}
                {filterOptions.amountSanctioned && <td>{project.amountSanctioned}</td>}
                <td>{project.duration}</td>
                {filterOptions.yearOfSanction && <td>{project.yearOfSanction}</td>}
                {filterOptions.status && <td>{project.status}</td>}
                <td>
                  <button className="btn btn-primary" onClick={() => openModal(project)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Update Project Details"
        className="Modal"
        overlayClassName="Overlay"
      >
        {currentProject && (
          <div>
            <h2>Update Project Details</h2>
            <form>
              <div className="form-group">
                <label htmlFor="facultyName">Name of the Faculty</label>
                <input
                  type="text"
                  className="form-control"
                  id="facultyName"
                  name="facultyName"
                  value={currentProject.facultyName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectTitle">Project Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="projectTitle"
                  name="projectTitle"
                  value={currentProject.projectTitle}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fundingAgency">Funding Agency</label>
                <input
                  type="text"
                  className="form-control"
                  id="fundingAgency"
                  name="fundingAgency"
                  value={currentProject.fundingAgency}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="amountSanctioned">Amount Sanctioned</label>
                <input
                  type="number"
                  className="form-control"
                  id="amountSanctioned"
                  name="amountSanctioned"
                  value={currentProject.amountSanctioned}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration</label>
                <input
                  type="text"
                  className="form-control"
                  id="duration"
                  name="duration"
                  value={currentProject.duration}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="yearOfSanction">Year of Sanction</label>
                <input
                  type="number"
                  className="form-control"
                  id="yearOfSanction"
                  name="yearOfSanction"
                  value={currentProject.yearOfSanction}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  name="status"
                  value={currentProject.status}
                  onChange={handleInputChange}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FundedProjectsTable;

