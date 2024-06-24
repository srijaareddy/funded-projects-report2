// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import FundedProjectsTable from './components/FundedProjectsTable';
// import ProjectRegistration from './components/ProjectRegistration'; // Create this component if needed
// import ThankYou from './components/ThankYou';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/funded-projects-report" element={<FundedProjectsTable />} />
//         <Route path="/project-registration" element={<ProjectRegistration />} />
//         <Route path="/thank-you" component={ThankYou} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FundedProjectsTable from './components/FundedProjectsTable';
import ProjectRegistration from './components/ProjectRegistration';
import ThankYou from './components/ThankYou';
 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FundedProjectsTable" element={<FundedProjectsTable />} />
        <Route path="/ProjectRegistration" element={<ProjectRegistration />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ThankYou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};
 
export default App;
