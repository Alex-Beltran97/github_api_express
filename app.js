/*
  ** Importing elements for API Management **
*/

// Express
const express = require('express');
// Fetch Data
const http = require("./http");
// Utils
const { mapperRepo, sortRepos } = require('./utils');

/*
  ** Working up with the API **
*/

// App Configuration
const app = express();
const PORT = 3001;

// Query Data
const path = '/users';
const userName = 'Google';
const query = `${ path }/${ userName }/repos?sort=stars&per_page=10`;

// Routes
app.get("/repos", async (req, res) => {
  try {
    // Fetching Data GitHub API
    const topTenRepos = await http.get(query);
    const repos = mapperRepo(topTenRepos);
    res.status(200).json(sortRepos(repos));
  } catch (error) {
    // Error Fetching Data
    res.status(500).json({
      message: 'Somethingent went wrong while fetching data!!!', error
    });
  };
});

// Listener
app.listen(PORT, () => {
  console.log(`Connected in http://localhost:${ PORT }/repos`);
});