## gitghost 1.0
- GA - Sydney Second project - Presented on 13/06/19
- A webapp to give Project Managers or Team leads a quick overview of projects hosted on Github.
- connects to Githubs Graphql endpoint to provide details.
- Gives details such as: Commit Totals by team/colaborator, refactor totals, issue status, pull request status and more.

### Libraries
- react
- Bootstrap
- Patternfly
- Apollo

### Getting started
Run locally with:

`git clone https://github.com/nivvyart/gitghost.git`

`npm install`

update utils/GitHubGQL.js ${token} with your github auth token.  [Link - How to get a Token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)

`npm start`

### Shortterm Roadmap
This is an ongoing project, next steps:

- Node backend to save queries
- Oauth to github
- Statistics related to code reviews
