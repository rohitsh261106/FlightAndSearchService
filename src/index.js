const express  = require("express");
const { PORT} = require('./config/serverconfig')


const setupAndStartServar = async () => {
  // create the express object
  const app = express();

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  
  app.listen(PORT,() => {
    console.log(`server started at ${PORT}`);
   // console.log(process.env)
  })
  
}
setupAndStartServar();
