# Node.js and Sequelize quick start

## Init
* `$ npm install`
* `$ npm run migrate`
* `$ npm run seed`

## Example
* `$ npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string` generate model user
* `$ npx sequelize seed:generate --name demo-user` create seeder for user
* `$ npx sequelize migration:generate --name "update user"` create migration for updated user

## References
* migration http://docs.sequelizejs.com/manual/migrations.html

## Contributors
* Autor : raksa <eng.raksa@gmail.com>

## License
MIT