import { Request } from 'express';
import multer from 'multer';

import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: (req: Request & { user?: { id: string } }, file, cb) => {
    const pathname = path.join(
      __dirname,
      '..',
      'static',
      'images',
      req.user!.id
    );
    fs.mkdirSync(pathname, { recursive: true });
    cb(null, pathname);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
