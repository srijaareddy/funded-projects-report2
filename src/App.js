import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FundedProjectsTable from './components/FundedProjectsTable';
import ProjectRegistration from './components/ProjectRegistration'; // Create this component if needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funded-projects-report" element={<FundedProjectsTable />} />
        <Route path="/project-registration" element={<ProjectRegistration />} />
      </Routes>
    </Router>
  );
};

export default App;
