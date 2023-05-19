import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();

const prisma = new PrismaClient();
const users = async () => {
    const users = await prisma.user.findMany();
    console.log(users);
}

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hellow world!' });
});
users();
const port = process.env.PORT ?? 8081;
app.listen(port, () => {
    console.log('Server lisning on port', port);
});
