# Setting Up HasMany Associations or Foreign Key Using Sequelize
This source code belongs to a detailed tutorial on [How to set up hasMany association or foreign key Using Sequelize](https://codehandbook.org/implement-has-many-association-in-sequelize/) published on [CodeHandbook](www.codehandbook.org). 

# Clone and install the required dependencies
```
git clone https://github.com/codehandbook/sequelize_foreign_key
cd sequelize_foreign_key
npm install
```
Create MySQL database called `user_task`. Once the database has been created, migrate the sequelize models and seed data.
```
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
```
# Running the app
`node app.js`
