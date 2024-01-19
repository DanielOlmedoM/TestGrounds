const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'classlist_db'
}, console.log(`Connected to the classlist_db database.`));

// Function to query the database
const queryDatabase = () => {
  db.query('SELECT * FROM students', function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log(results);
    }
  });
};

// Call the function after the connection is established
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to MySQL server');
    // Call the function to query the database
    queryDatabase();
  }
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
