
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
      room: 'kitchen',
      unit_location: 'center left',
      description: 'Plates and other flatware'
    },
    {
      id: 2,
      unit_id: 2,
      identifier: 'box2',
      unit_number: 222,
      date_packed: '05-03-17',
      date_stored: '05-08-17',
      room: 'bedroom',
      unit_location: 'front middle',
      description: 'linens and blankets'
    },{
      id: 3,
      unit_id: 3,
      identifier: 'box3',
      unit_number: 333,
      date_packed: '05-05-17',
      date_stored: '05-10-17',
      room: 'office',
      unit_location: 'back right',
      description: 'Office electronics for Jeremys office, including monitor, mouse, and cables'
    },
  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('boxes_id_seq', (SELECT MAX(id) FROM boxes))"
    )
  })
}
