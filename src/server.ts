import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/route';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
// 5 => number 5 + '5' => an error
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
// console.log("CORS enabled on", "*" );

//
const endPoint = process.env.ENDPOINT || '/api/v1';
// routing
app.use(endPoint, router);

// console.log("env",process.env.ENDPOINT);
// console.log("endpoint", endPoint );
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Hello!' });
});
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server listening', "http://localhost:" + port + endPoint);
});
