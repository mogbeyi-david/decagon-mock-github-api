const getRepos = require('./github-api');


describe('Testing the getRepos function', () => {
  it('should return the users repository', async () => {
    const response = await getRepos('mogbeyi-david');
    expect(response).toContain('code-hack');
    expect(response).toContain('kirusa-challenge');
  }, 30000);

  it('should return the users repository', async () => {
    const response = await getRepos('*****6)');
    expect(response).toMatch('Error');
  }, 30000);
});