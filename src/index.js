import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';

import config from './config';

const app = express();
app.use(bodyParser.json());
app.use(helmet());

mongoose
  .connect(config.mongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database'));

app.listen(config.port, (error) => {
  if (error) return console.log(error);
  console.log(`Server is listening on port ${PORT}`);
});
