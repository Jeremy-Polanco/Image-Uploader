import { StatusCodes } from 'http-status-codes';
import Image from '../model/Image.js';
import cloudinaryModule from 'cloudinary';
const cloudinary = cloudinaryModule.v2;
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import CustomError from '../errors/index.js';
import fs from 'fs';

const uploadImageLocal = async (req, res) => {
  if (!req.files) {
    throw new CustomError.BadRequestError('No File Uploaded');
  }

  const image = req.files.image;

  if (!image.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please Upload Image');
  }

  const maxSize = 1024 * 1024;

  if (image.size > maxSize) {
    throw new CustomError.BadRequestError(
      'Please Upload Image smaller than 1kb'
    );
  }

  const __dirname = dirname(fileURLToPath(import.meta.url));

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${image.name}`
  );

  await image.mv(imagePath);

  res.status(StatusCodes.CREATED).json({
    image: { src: `/uploads/${image.name}` },
  });
};

const uploadImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'image-upload',
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  res.status(StatusCodes.CREATED).json({
    image: { src: result.secure_url },
  });
};

export { uploadImage };
