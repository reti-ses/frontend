const express = require('express');
const path = require('path');

const app = express();
const appName = process.env.APP_NAME || 'rete-ses';

// Serve only the static files form the dist directory
app.use(express.static(__dirname + `/dist/${appName}`));

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname + `/dist/${appName}/index.html`));
});

app.listen(process.env.PORT || 8080);