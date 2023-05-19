var _a;
import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
dotenv.config();
const app = express();
const prisma = new PrismaClient();
const users = await prisma.user.findMany();
app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hellow world!' });
});
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
app.listen(port, () => {
    console.log('Server lisning on port', port);
});
