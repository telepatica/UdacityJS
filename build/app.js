import express from 'express';
import resize from './routes/resize.js';
const app = express();
const port = 3000;
//define path for route 
app.use('/', resize);
// start the Express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
export default app;
