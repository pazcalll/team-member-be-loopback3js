'use strict';

module.exports = async function (app) {
  await app.dataSources.postgresql.autoupdate('Team');
  await app.dataSources.postgresql.autoupdate('Member');

  // await app.models.Team.create([
  //   {
  //     name: 'Team 1',
  //     description: 'Team 1 description'
  //   },
  //   {
  //     name: 'Team 2',
  //     description: 'Team 2 description'
  //   }
  // ])

  // await app.models.Member.create([
  //   {
  //     name: 'Member 1',
  //     role: 'thief',
  //     teamId: 1,
  //     description: 'Member 1 description'
  //   }
  // ])
  console.log('migrated')
}
