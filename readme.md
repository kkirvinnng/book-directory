# Getting started 

## 🛠 Clone this repository and configure your database

In my case, i'm using MySQL so if you want to use another database you will have to install the specific driver and change the Sequelize dialect. 
This option is found in ```src/shared/infraestructure/persistence/sequelize/SequelizeConfig.ts```

![image](https://user-images.githubusercontent.com/82684580/191640637-c22574ad-5e27-4ac5-84a0-d1fffb78e930.png)
### Example with Postgres
```sh
npm install --save pg pg-hstore
```
![image](https://user-images.githubusercontent.com/82684580/191640775-01da6737-75e6-4baa-a179-31045a977f91.png)

### Then set up your env file
Following the `example.env`
```sh
DB_USER=... 
DB_PASSWORD=... 
DB_NAME=database_name 
DB_HOST=127.0.0.1
```
For more information, visit https://sequelize.org/docs/v6/getting-started/

## 🚀 To run migrations and seeds
```sh
npm run build  # This will create the lib folder with the .js files, where Sequelize entries are located
```
```sh
npm run db:create
```
```sh
npm run migrate
```
❗❗ Don't use ```npx sequelize-cli db:seed``` because csv files aren't read in parallel. To solve it you must execute the following commands
```sh
npm run seed -- --seed 20220919020000-users.js --seeders-path lib/shared/infraestructure/persistence/sequelize/seeds
```
```sh
npm run seed -- --seed 20220920020000-books.js --seeders-path lib/shared/infraestructure/persistence/sequelize/seeds
```
```sh
npm run seed -- --seed 20220921020000-book_ratings.js --seeders-path lib/shared/infraestructure/persistence/sequelize/seeds
```
