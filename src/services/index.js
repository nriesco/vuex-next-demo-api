const demo = require('./demo/demo.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(demo);
}
