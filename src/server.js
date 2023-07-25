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

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
})