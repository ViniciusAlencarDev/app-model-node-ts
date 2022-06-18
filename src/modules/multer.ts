import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

function main(destination: string) {
    const dest = path.join(__dirname, destination);

    // const upload = multer({ dest });

    const upload = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, dest)
        },
        filename: function (req, file, cb) {
            const filename = crypto
                .randomBytes(64)
                .toString('hex');
            const ext = file.originalname.split('.').at(-1);
            cb(null, `${filename}.${ext}`)
        }
    });

    return upload
}

export default main
