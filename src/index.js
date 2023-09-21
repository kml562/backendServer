import * as dotenv from 'dotenv';
import { startServer } from './db/mongoose';
import app from './app.js';
dotenv.config();

const {PORT , MONGO_URI}= process.env;
startServer(app, PORT ,MONGO_URI);