export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error('file is empty'), false);

  const fileExptension = file.mimetype.split('/')[1];
  const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];

  if (validExtensions.includes(fileExptension)) {
    return callback(null, true);
  }

  callback(null, false);
};
