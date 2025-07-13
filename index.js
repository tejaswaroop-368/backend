require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


const gitData = 
    {
  "login": "tejaswaroop-368",
  "id": 196463929,
  "node_id": "U_kgDOC7XNOQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/196463929?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tejaswaroop-368",
  "html_url": "https://github.com/tejaswaroop-368",
  "followers_url": "https://api.github.com/users/tejaswaroop-368/followers",
  "following_url": "https://api.github.com/users/tejaswaroop-368/following{/other_user}",
  "gists_url": "https://api.github.com/users/tejaswaroop-368/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tejaswaroop-368/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tejaswaroop-368/subscriptions",
  "organizations_url": "https://api.github.com/users/tejaswaroop-368/orgs",
  "repos_url": "https://api.github.com/users/tejaswaroop-368/repos",
  "events_url": "https://api.github.com/users/tejaswaroop-368/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tejaswaroop-368/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-25T16:54:02Z",
  "updated_at": "2025-07-13T13:39:45Z"

}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/git', (req, res) => {
  res.json(gitData)
})