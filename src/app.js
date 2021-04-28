import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import router from './router';

const app = express();
app.use(express.json());
app.use(helmet());

router(app);

export default app;
