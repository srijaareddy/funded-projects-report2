import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Logo" className="logo" />
        <h1>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
        <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
        <h2>Home</h2>
      </div>
      <div className="content">
        <h3>Funded Projects</h3>
        <ul>
          <li><Link to="/ProjectRegistration">Project Registration</Link></li>
          <li><Link to="/FundedProjectsTable">Projects Report</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
