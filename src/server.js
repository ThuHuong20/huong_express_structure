// Kichs hoatj env
import dotenv from 'dotenv'
dotenv.config();

// Tao server
import express from 'express'
const server = express();

// Connect my sql
import mySQL from './databases/mySQL';
import { mysqlConnect } from './databases/mySQL'
mysqlConnect();
import bodyParser from 'body-parser';
server.use(bodyParser.json());
/* Setup Views */
import viewConfig from './views';
server.use("/views", viewConfig);

/* Setup Api */
import apiConfig from './routes';
server.use("/apis", apiConfig);



server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
})