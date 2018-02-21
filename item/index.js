'use strict';

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    // example cors headers
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    },
    body: JSON.stringify({
      message: 'Booyaka!',
    }),
  };

  return callback(null, response);
};
