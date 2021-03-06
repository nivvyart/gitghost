## gitghost 1.0
- GA - Sydney final project - Presented on 13/06/19
- A webapp to give Project Managers or Team leads a quick overview of projects hosted on Github.
- connects to Githubs Graphql endpoint to provide statistics.
- Provides details such as: Commit Totals by team/colaborator, refactor totals, issue status, pull request status and more.

### Libraries & Tools
- [react](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Patternfly](https://www.patternfly.org/)
- [Apollo](https://www.apollographql.com/)
- [github graphQL](https://developer.github.com/v4/)

### Getting started
Run locally with:

`git clone https://github.com/nivvyart/gitghost.git`

`npm install`

update utils/GitHubGQL.js ${token} with your github auth token.  [Link - How to get a Token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)

`npm start`

### Site map
Couple quick Gif videos of the site in action:

[Search Page](https://i.imgur.com/oJm32hG.gifv)
Shows the last 10 projects that the user has been working on, link will take you to the page on githubs site.

[Project page](https://i.imgur.com/Yt07ihy.gifv)
Once the date range has been set, summary page is provided with details of open/closed issues, total commits over the time period, pull request status and more.


### Short term Roadmap
This is an ongoing project, next steps:

- Node backend to save queries
- Oauth to github
- Statistics related to code reviews
