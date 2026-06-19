const {CityRepository} = require('../repository/index');

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
      
    } catch (error) {
      console.log("Something went wrong at service layer")
      throw(error);
      
    }
  }

  async deleteCity(cityid) {
    try {
      const response = await this.CityRepository.deleteCity(cityid);
      return response;
      
      
    } catch (error) {
      console.log("Something went wrong at service layer")
      throw(error);
      
    }
  }

  async updateCity(cityid,data) {
    try {
      const city  = await this.CityRepository.updateCity(cityid,data);
      return city;
      
    } catch (error) {
      console.log("Something went wrong at service layer")
      throw(error);
      
    }
  }

  async getCity(cityid) {
    try {
      const city = await this.CityRepository.getCity(cityid);
      return city;
      
    } catch (error) {
      console.log("Something went wrong at service layer")
      throw(error);
      
    }
  }
  async getAllCities(filter) {
    try {
      const cities = await this.CityRepository.getAllCities({name:filter.name});
      return cities;
      
    } catch (error) {
      console.log("Something went wrong at service layer")
      throw(error);
      
    }
  }
}

module.exports = CityService;