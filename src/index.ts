import express from 'express'
import newPayload from './utilities/sharp'
import routes from './src/routes/resizeparams'

const app = express();
const port = 3000;


//define route handler ImageProcessor, sendFile from local machine
app.use('/ImageProessingAPI', routes);



// start the Express server
app.listen(port, ()=> {
 console.log('server started at http://localhost:${port}');
});
