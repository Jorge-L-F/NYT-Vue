# NYT-Feed
This is a simple application built with HTML, CSS, Vue and Node.js to retrieve and show a news feed from the [New York Times journal](https://www.nytimes.com/). This was made in 2021 at the beginning of my internship at [Link Consulting](https://linkconsulting.com/) to prove I was capable of using Vue.

##### Setup:
- Get a token for the journal's api.
- Replace the `token` string in the `config.json.example` file with your api key and rename the file to `config.json`.
- Open a terminal inside the back-end directory, run `npm install` to get the node modules and then run `node server.js` to start the back-end.
- Running the front-end used to be as simple as opening the index.html file in the front-end directory, but modern web browsers do not allow this for http connections. Instead you have to run it in a web server. To keep it simple, open a terminal in the front-end directory and run it with `npx http-server . --cors -p 9009`, this temporarily installs the http-server npm package just for a one-time use. If you don't want to use port 9009, replace it with whatever you like.

Note that this application has been tested with Node 22. Ideally it should work with other versions, but its back-end might not work with older ones without downgrading the npm packages.

If the application does not work as expected, check if nothing else is using port 7070 (the back-end listen to it by default) in your local system. If you need to change the used port, make sure to do so in the `config.json` file and in the front-end `main.js` file.

If the web page does not load or the http-server fails to start, check if the port set for it is not already in use.