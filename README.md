# What To Watch With Friends (WTWWF)
WTWWF is a react app for solving the problem of what to watch with your friends next.

## Architecture
The frontend is a react app using redux for state management.
The backend is an express API that manages a postgres database and requests data from The Movie Database (TMDB) API as needed.

## Installation
### WTWWF-API
[github repo](https://github.com/JohnFlorkey/wtwwf_backend.git)
Install dependencies
```bash
wtwwf_backend$ npm i
```
WTWWF-API requires a local PostgreSQL database. [Download](https://www.postgresql.org/download/)
Create the WTWWF database
```bash
wtwwf_backend$ createdb wtwwf
```
Once the database is created, create the required database schema objects.
```bash
wtwwf_backend$ psql < db.sql
```
You can seed the database with sample data if desired.
```bash
wtwwf_backend$ psql < seed_data.sql
```
Create a .env file based on example.env in the repo. The main thing here is to secure your own TMDB API key and save it in your .env file. TMDB API keys are free. Check out the TMDB API [documentation](https://developers.themoviedb.org/3/getting-started/introduction) for instructions on how to get your API key.

### WTWWF
Install dependencieis
```bash
wtwwf_frontend$ npm i
```

## Running
Start the WTWWF-API
```bash
wtwwf_backend$ nodemon
```
Start WTWWF
```bash
wtwwf_frontend$ npm start
```