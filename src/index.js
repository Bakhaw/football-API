import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config' ;
import routes from './routes';

let app    = express();
app.server = http.createServer(app);

// middleware

// parse application to json
app.use(bodyParser.json({
  limit: config.bodyLimit // pour sécuriser en surchargeant les champs
}));

// API routes v1

app.use('/v1', routes);
app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;
