import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 7070;
const listen_url = 'http://localhost:' + port;
const api_key = 'your api key here!'
const get_url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + api_key;

let corsConfig = {
    origin: listen_url
}

app.get('/', cors(corsConfig), (req, res) => {
    axios.get(get_url)
        .then(
            response => (
                res.set("Access-Control-Allow-Origin", "*"),
                res.send(response.data.results),
                console.log('Request completed with success.')
            ),
            error => {
                res.send(error),
                console.log('Request failed with error.\n' + error)
            }
        )
});

let server = app.listen(port, function() {
    let port = server.address().port;
    console.log('Server listening at port %s.', port);
});