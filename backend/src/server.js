import 'dotenv/config';
import cors from 'cors';
import connectDB  from './config/user.js';
import dns from 'node:dns';
import express from "express";
import userRouter from './routers/users.js';

const server = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
}

connectDB();

server.use(cors());
server.use(express.json());

server.use('/usuario', userRouter);

server.get('/',(req,res)=>{
    res.send('Hello World!');
})

server.listen(PORT, ()=>{
    console.info(`Server conection online: ${PORT}`);
});