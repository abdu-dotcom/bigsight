import multer from "multer";
import News from "../models/newsModel.js";
import Minio from 'minio';
import multerMinio from 'multer-minio-storage-engine';


var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'Test1234567',
    secretKey: 'Test1234567'
});



export const upload = multer({
    storage: multerMinio({
        minio: minioClient,
        bucketName: 'new',
        metaData: function(req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        objectName: function(req, file, cb) {
            cb(null, file.originalname);
        },
    }),
});


// mengambil semua data berita
export const getAllNews = async(req, res) => {
    try {
        const news = await News.findAll(); {
            news.map((berita) => (
                minioClient.presignedUrl('GET', 'new', berita.img, 60, function(err, presignedUrl) { // expire 60s
                    if (err) return console.log(err)
                    berita.img = presignedUrl
                })
            ))
        }

        res.json(news);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// membuat berita baru
export const createNews = async(req, res) => {

    try {
        const newAdd = {
            title: req.body.title,
            description: req.body.description,
            img: req.file.originalname
        }
        const news = await News.create(newAdd);
        res.status(200).send(news);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// mengambil satu data berita
export const getNewsById = async(req, res) => {
    try {
        const news = await News.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(news[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// mengambil satu data berita
export const updateNews = async(req, res) => {
    try {
        await News.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "News Updated" });
    } catch (error) {
        res.json({ message: error.message });
    }
};
// hapus satu data berita
export const deleteNews = async(req, res) => {
    try {
        await News.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "News Deleted" });
    } catch (error) {
        res.json({ message: error.message });
    }
};