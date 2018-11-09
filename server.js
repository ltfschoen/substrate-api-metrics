// Copyright 2017-2018 substrate-api-metrics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const readme = require('readmeio');

const server = express();
const whitelist = ['https://substrate.readme.io'];
const publicdir = __dirname + '/';

// options ensure .json files may be accessed even if they do not have the extension
server.use(express.static(publicdir, { index: false, extensions: ['json'] }));
server.use(cors({ origin: whitelist }));

// send API Logs to ReadMe.io https://readme.readme.io/v2.0/docs/sending-logs-to-readme-with-nodejs
server.use(readme.metrics(process.env.READMEIO_API_KEY, req => ({
  id: req.project._id,            // a unique id associated with the project
  label: req.project.name,        // a human-readable name for the project
  email: req.project.user.email,  // email associated with this project
})));

// access .json files with localhost:7000/api/xyz.json
server.use((req, res) => {
  // optional 404 handler
  res.status(404);
  res.json({ error: { code: 404 } });
})

const app = server.listen(7000);
const port = app.address().port;

console.log(`Substrate OAS API listening on port: ${port}`);
