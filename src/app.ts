import express from 'express';
import morgan from 'morgan';
import errorHandler from 'errorhandler';
import cors from 'cors';
import { json } from 'body-parser';
import * as bd from './database/index'
import { router as inicialRouter } from './routes/routes';
import * as dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(json());
bd.connecting();
dotenv.config();


app.set('port', process.env.PORT || 1234);
if (process.env.NODE_ENV! !== 'production') {
    app.use(morgan('dev'));
    app.use(errorHandler());
} else {
    app.use(morgan('tiny'));
}

app.use(`/api`, inicialRouter);

export default app;
