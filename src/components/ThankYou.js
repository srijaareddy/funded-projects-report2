import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css'; 

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="Logo" className="logo" />
        <h1>VALLURUPALLI NAGESHWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
        <p>Pragati Nagar, Nizampet(S.O), Hyderabad-500 090, TS, India.</p>
      </div>
      <div className="content">
        <h2>Thank you for registering!</h2>
        <p>You can find the status of your projects in the <Link to="/FundedProjectsTable">Projects Report</Link></p>
      </div>
    </div>
  );
};

export default ThankYou;
