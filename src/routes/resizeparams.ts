import express from 'express';
const routes = express.Router();

routes.get('/ImageProcessor', (req, res) => {
  res.sendFile('/Users/brittanysalas/Documents/ImageProessingAPI/assets/treelady.png');
});

module.exports default routes;
