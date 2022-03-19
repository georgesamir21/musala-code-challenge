const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const routes = {};
fs.readdirSync(__dirname)
  .filter((file) => file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))();
    routes[`${file.split('.')[0]}Router`] = model;
  });
module.exports = routes;
