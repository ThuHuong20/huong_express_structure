// Kichs hoatj env
import dotenv from 'dotenv'
dotenv.config();

// Tao server
import express from 'express'
const server = express();

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
})