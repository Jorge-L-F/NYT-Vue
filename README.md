# NYT-Feed
This is a simple application built with HTML, CSS, Vue and Node.js to retrieve and show a news feed from the [New York Times journal](https://www.nytimes.com/). This was made in 2021 at the beginning of my internship at [Link Consulting](https://linkconsulting.com/) to prove I was capable of using Vue.

To setup, get a token for the journal's api and replace the `api_key` constant string inside of file `server.js` inside the back-end folder. Afterwards, open a terminal in that directory, run `npm install` to get the node modules and then run `node server.js` to start the back-end. With the back-end running, go in the front-end folder, open the index.html file and that should get it to work.

##### Setup:
- Get a token for the journal's api.
- Replace the string of `api_key` in the `server.js` file inside the back-end directory with your api key.
- Open a terminal in that directory, run `npm install` to get the node modules and then run `node server.js` to start the back-end.
- With the back-end running, go in the front-end directory and open the index.html file.

If the application does not work as expected, check if nothing else is using the port 7070 in your local system. If you need to change the used port, make sure to do so in the javascript files of both the back-end and front-end.
