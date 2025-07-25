import express from 'express';
import cors from 'cors';
import axios from 'axios';
import {readFile} from 'fs/promises';

const secrets = JSON.parse(
    await readFile(new URL('../secrets.json', import.meta.url))
);
const config = JSON.parse(
    await readFile(new URL('../config.json', import.meta.url))
);

const app = express();
const get_url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + secrets.token;


let corsConfig = {
    origin: '*'
}

app.get('/', cors(corsConfig), (req, res) => {
    axios.get(get_url)
        .then(
            response => (
                res.set("Content-Type", "application/json"),
                res.send(response.data.results),
                console.log('Request completed with success.')
            ),
            error => {
                res.set("Content-Type", "application/json"),
                res.send(error),
                console.log('Request failed with error.\n' + error)
            }
        )
});

let server = app.listen(config.port, function() {
    let port = server.address().port;
    console.log('Server listening at port %s.', port);
});