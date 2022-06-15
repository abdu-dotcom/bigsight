import express from "express";
import { getAllNews, createNews, getNewsById, updateNews, deleteNews, upload } from "../controllers/news.js";
const router = express.Router();



router.get('/news', getAllNews);
router.get('/news/:id', getNewsById);
router.post('/news', upload.single('img'), createNews);
router.patch('/news/:id', updateNews);
router.delete('/news/:id', deleteNews);



export default router;