import sharp from 'sharp';

const newPayload = ((file: unknown):string  => {
      sharp.resize({
        width: 200,
        height: 200,
        fit: sharp.fit.cover,
        postion: sharp.gravity.center});
  return(
    sharp.code(200),
    sharp.type('image/png'),
    sharp.send(newPayload))
});

module.exports default newPayload;
