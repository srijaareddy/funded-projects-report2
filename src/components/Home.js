import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Logo" className="logo" />
        <h2>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h2>
        <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
        <h3>Home</h3>
      </div>
      <div className="content">
        <h3>Funded Projects</h3>
        <ul>
          <li><Link to="/project-registration">Project Registration</Link></li>
          <li><Link to="/funded-projects-report">Projects Report</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
