let getRepos = require('./github-api');

jest.mock('./github-api');


describe('Testing the getRepos function', () => {
  it('should return the users repository', async () => {
    const response = await getRepos('mogbeyi-david');
    expect(response.success).toContain('first-repo');
    expect(response.success).toContain('second-repo');
  });

  it('should return the users repository', async () => {
    const response = await getRepos('*****6)');
    expect(response.error).toMatch('Error');
  });
});