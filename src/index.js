import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';

const PORT = 5000;
const MONGO = 'mongodb://localhst:27017/school';

const app = express();
app.use(bodyParser.json());
app.use(helmet());

mongoose
  .connect(MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database'));

app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server is listening on port ${PORT}`);
});
