import express from 'express';
import routes from './routes/resizeparams';

const app = express();
const port = 3000;

//define route handler for Image
app.use('/', routes);

// start the Express server
app.listen(port, ()=> {
 console.log('server started at http://localhost:${port}');
});
