const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'project_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('MySQL connected...');
});

app.get('/projects', (req, res) => {
  const query = 'SELECT * FROM projects';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
    } else {
      res.status(200).json(results);
    }
  });
});

app.post('/register', (req, res) => {
  const projects = req.body;
  const query = 'INSERT INTO projects (facultyId, facultyName, projectTitle, organization, designation, department, dateOfApplication, emailId, contactNumber, agency, amount) VALUES ?';
  const values = projects.map(project => [
    project.facultyId, project.facultyName, project.projectTitle, project.organization, project.designation,
    project.department, project.dateOfApplication, project.emailId, project.contactNumber, project.agency, project.amount
  ]);

  db.query(query, [values], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.status(200).send('Data inserted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
