
exports.seed = function(knex) {
  return knex('boxes').del()
  .then(() => {
    return knex('boxes').insert([{
      id: 1,
      unit_id: 1,
      identifier: 'box1',
      unit_number: 111,
      date_packed: '05-04-17',
      date_stored: '05-09-17',
      room: 'game room',
      unit_location: 'Middle Center',
      description: 'Seahawks room posters and gear'
    },
    {
      id: 2,
      unit_id: 2,
      identifier: 'box2',
      unit_number: 222,
      date_packed: '05-03-17',
      date_stored: '05-08-17',
      room: 'bedroom',
      unit_location: 'Front Left',
      description: 'linens and blankets'
    },{
      id: 3,
      unit_id: 3,
      identifier: 'box3',
      unit_number: 333,
      date_packed: '05-05-17',
      date_stored: '05-10-17',
      room: 'office',
      unit_location: 'Front Left',
      description: 'Office electronics for Jeremys office, including monitor, mouse, and cables'
    },
    {
      id: 4,
      unit_id: 3,
      identifier: 'box4',
      unit_number: 444,
      date_packed: '05-05-17',
      date_stored: '05-15-17',
      room: 'office',
      unit_location: 'Middle Left',
      description: 'Seahawks room posters, wine glasses, and the 12th man cooler'
    },
  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('boxes_id_seq', (SELECT MAX(id) FROM boxes))"
    )
  })
}
