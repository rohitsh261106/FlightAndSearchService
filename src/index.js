const express  = require("express");

const { PORT} = require('./config/serverconfig');

const ApiRoutes = require('./routes/index') 
const setupAndStartServar = async () => {
  // create the express object
  const app = express();

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  app.use('/api',ApiRoutes);
  
  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
  })
  
}
setupAndStartServar();
