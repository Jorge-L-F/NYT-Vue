# NYT-Feed
This is a simple application built with HTML, CSS, Vue and Node.js to retrieve and show a news feed from the [New York Times journal](https://www.nytimes.com/). This was made in 2021 at the beginning of my internship at [Link Consulting](https://linkconsulting.com/) to prove I was capable of using Vue 2. The original version can be found [here](https://github.com/Jorge-L-F/NYT-Feed/tree/original). Currently the front-end has been updated to use Vue 3 and its CSS rules have also been tweaked to work in a variety of displays.

##### Setup:
- Get a token for the journal's api.
- Replace the `token` string in the `secrets.json.example` file with your api key and rename the file to `secrets.json`.
- Open a terminal inside the back-end directory, run `npm install` to install the dependencies and then run `node server.js` to start the back-end.
- Open a terminal inside the front-end directory, run `npm install` to get the dependencies and then run `npm run dev` to start the front-end.

The application should be functional in all displays from 4 inch screens to 4K monitors. However, the testing and tweaking I could do for resolutions higher than 1080p is quite limited due to hardware constraints.

Note that this application has been tested with Node 22. Ideally it should work with other versions, but may not work with older ones without downgrading the npm packages.

If the application does not work as expected, check if nothing else is using port 7070 (the back-end listens to it by default) in your local system. If you need to change the used port, make sure to do so in the `config.json` file.
