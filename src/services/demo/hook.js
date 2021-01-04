const { ObjectID } = require('mongodb');
module.exports = function () {
  return async context => {
    // context.result = {hola: 1}
    context.result.data[0].addresses = [ 
      { _id: ObjectID(context.result.data[0]._id), address: 'Hazelnut Av.', number: '123', __v: 0 },
      { _id: ObjectID(context.result.data[0]._id), address: 'Walnut St.', number: '123', __v: 0 } 
    ]
  };
};
