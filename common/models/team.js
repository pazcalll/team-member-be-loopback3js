'use strict';

const { Model } = require("loopback");

module.exports = function(Team) {

};

// var schema_v1 = {
//   'name': 'Team',
//   'options': {
//     'idInjection': true,
//     'postgresql': {
//       'schema': 'LOOPBACK',
//       'table': 'Team',
//     },
//   },
//   'properties': {
//     'id': {
//       'type': 'Number',
//       'length': 20,
//       'id': 1,
//     },
//     'name': {
//       'type': 'String',
//       'required': true,
//       'length': 100,
//     },
//     'description': {
//       'type': 'String',
//       'required': false,
//       'length': 255,
//     },
//   },
// };

// var ds = Model.apply.dataSources.postgresql;

// ds.createModel(schema_v1.name, schema_v1.properties, schema_v1.options);

// ds.automigrate(function () {
//   ds.discoverModelProperties('Team', function (err, props) {
//     console.log(props);
//   });
// });
