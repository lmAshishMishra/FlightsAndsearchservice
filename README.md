# Welcome to flight service

## Project Setup
-clone the project on your local
-Execute `npm install` on the same path as of teh downloaded project
- create a dotenv file in root directory and add the following environment variable 
  -`PORT =3000`
  Inside the `src/config` folder create anew file `config.json` and then add the following piece of json

  ---
{
  "development": {
    "username": <your name>
    "password": <YOUR_DB_PASSWORD>
    "database": "Flights_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  
}

  ----


