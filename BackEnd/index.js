import dotenv from "dotenv";
import express from "express";
import db from "./config/database.js";
import NewsRoutes from "./routes/news.js";
import UsersRoutes from "./routes/users.js";
import cookieParser from 'cookie-parser';
import cors from "cors";


dotenv.config();
const app = express();


try {
    await db.authenticate();
    console.log("Database Terhubung ...");
} catch (error) {
    console.log("Connection error: ", error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use(NewsRoutes);
app.use(UsersRoutes);
app.use(express.static('public'))
app.listen(5000, () => { console.log("Server Running at port 5000") })