// Getting some especific data
function mapperRepo(data) {
  return data.data.map(repo => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
  }))
};

// Sorting the data from best to worst
function sortRepos(data) {
  return data.sort((a,b)=>{
    if (a.stars > b.stars) return -1;
    if (a.stars < b.stars) return 1;
    return 0;
  });
};

module.exports = {
  mapperRepo,
  sortRepos
};