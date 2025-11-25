import multer from "multer";
import path from 'path';
import { fileURLToPath } from "url";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.dirname(fileURLToPath(import.meta.url)), '../multerupload'));
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 10) + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

export default upload;
