const express  = require("express");

const { PORT} = require('./config/serverconfig');
const CityRepository = require("./repository/city-repository");

 


const setupAndStartServar = async () => {
  // create the express object
  const app = express();

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  
  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
   // console.log(process.env)
   //console.log(db.City)
   const repo = new CityRepository();
   repo.createCity({
    name:"New Delhi"
   })
 

   
  })
  
}
setupAndStartServar();
