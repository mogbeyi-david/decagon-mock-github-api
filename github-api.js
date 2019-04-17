const fetch = require('node-fetch');

async function getRepos(username) {
  try {
    const endpoint = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(endpoint);
    const repositories = await response.json();
    return repositories.map((repository) => {
      return repository.name;
    });
  } catch (exception) {
    return `Error ${exception.message}`;
  }
}

module.exports = getRepos;