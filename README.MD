# Welcome to Flights Service


## Project Setup
- clone the project on your local
- execute `npm install` on the same path as of your root dirctory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
   - 'PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": "root",
    "password": "Divya@261106",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}  




```
- once you have added your db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`
```

## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A Flight Belongs to an airplane but one airplane can be used in multiple flights
  - A city has many Airports but one airport belongd to a city
  - One airport can have many flights , but a Flights belongs to one airport
