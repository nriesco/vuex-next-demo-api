// Initializes the `demo` service on path `/demo`
const { Demo } = require('./demo.class');
const createModel = require('../../models/demo.model');
const hooks = require('./demo.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/demo', new Demo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('demo');

  service.hooks(hooks);
};
