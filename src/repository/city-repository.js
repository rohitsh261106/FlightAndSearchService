const { where } = require('sequelize');
const {City} =  require('../models/index');

class CityRepository {
  async createCity({name}){
    try{
      const city = await City.create({
        name
      });
      return city;
    }
    catch (error){
      console.log('Something went wrong in the repository layer');
      throw {error};
      
    }
  }
  async deleteCity(cityid){
    try{
        await City.destroy({
          where: {
            id:cityid
          }
        });
    }
    catch (error){
      console.log('Something went wrong in the repository layer');
      throw {error};

    }
  }
  async updateCity(cityid,data) {// {name: "BAsti"}
    try {
      // the below approach also works but will not return updated object
      // if we are using Pg then returning true can be used else not;
      // const city = await City.update(data,{
      //   where : {
      //     id:cityid
      //   }
      // });
      // returning :  city ,
      // plain: true
    // for getting updated data in mysql we use the below approach
      const city = await City.findByPk(cityid);
      city.name = data.name;
      await city.save();
      return city;
      
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw {error};
      
      
    }
  }

  async getCity(cityid) {
    try {
      const city = await City.findByPk(cityid);
      return city;
      
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw {error};
      
    }
  }
  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
      
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw {error};
      
    }
  }
}

module.exports = CityRepository;