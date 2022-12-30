import * as express from 'express';
import newPayload from '../utilities/sharp';

const routes = express.Router();

routes.get('/ImageProcessor', newPayload, (req, res) => {
  res.sendFile('/Users/brittanysalas/Documents/ImageProessingAPI/assets/treelady.png');
  next();
});


export default routes;
