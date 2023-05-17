import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'


dotenv.config();

const app = express();

const prisma = new PrismaClient();
const users = await prisma.user.findMany();

app.get('/', (req, res) => {
    res.status(200).send({message: 'Hello world'});
});

const port = process.env.PORT ?? 8080;
app.listen(port, () => {
    console.log('server runing on 8080');
});