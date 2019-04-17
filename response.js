const response = {
  success: ['first-repo', 'second-repo'],
  error: 'Error, something went wrong...'
};


function getRepos() {
  return Promise.resolve(response);
}

module.exports = getRepos;