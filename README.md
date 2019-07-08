# Node.js and Sequelize quick start

## Init
* `$ npm install`
* `$ npm run db:migrate`
* `$ npm run db:seed`

## Example
* `$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string` generate model
* `$ npx sequelize-cli seed:generate --name demo-user` create seeder

## References
* migration http://docs.sequelizejs.com/manual/migrations.html

## Contributors
* Autor : raksa <eng.raksa@gmail.com>

## License
MIT