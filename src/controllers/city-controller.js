const {CityService} = require('../services/index');

const cityService = new CityService();

//method - POST - 
// data - req.body

const create = async (req,res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data:city,
      success: true,
      message :"successfully created a city",
      err : {}
    })
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message:'not able to create a City',
      err : error
    })
    
  }

}

// DELETE -> /city/:id
const destroy = async (req,res) => {
  try {
     const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message :"successfully deleted a city",
      err : {}
    })
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message:'not able to delete a City',
      err : error
    })
    
  }
  
}

//GET - >/city/:ud

const get = async (req,res) => {
  try {
     const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message :"successfully fetched a city",
      err : {}
    })
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message:'not able to fetch a City',
      err : error
    })
    
  }
  
}


// PATCH - > /city/:id  -> req.body
const update = async (req,res) => {
  try {
    const response = await cityService.updateCity(req.params.id,req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message :"successfully update a city",
      err : {}
    })
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message:'not able to update a City',
      err : error
    })
    
  }
  
}

const getAll = async (req,res) => {
  try {
    const cities = await cityService.getAllCities();
    return res.status(200).json({
      data: cities,
      success: true,
      message :"successfully fetched al city",
      err : {}
    })
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      message:'not able to fetch a Cities',
      err : error
    })
    
  }
  
}

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll
}

