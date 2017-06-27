
exports.seed = function(knex) {
  return knex('boxes').del()
  .then(() => {
    return knex('boxes').insert([{
      id: 1,
      unit_id: 1,
      label: 'box_1',
      description: 'Plates and other flatware',
      room: 'kitchen',
      date_packed: '05-04-17',
      date_stored: '05-09-17',
      unit_location: 'center left'
    },
    {
      id: 2,
      unit_id: 2,
      label: 'box_2',
      description: 'linens and blankets',
      room: 'bedroom',
      date_packed: '05-03-17',
      date_stored: '05-08-17',
      unit_location: 'front middle'
    },{
      id: 3,
      unit_id: 3,
      label: 'box_3',
      description: 'Office electronics for Jeremys office, including monitor, mouse, and cables',
      room: 'office',
      date_packed: '05-05-17',
      date_stored: '05-10-17',
      unit_location: 'back right'
    },
  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('boxes_id_seq', (SELECT MAX(id) FROM boxes))"
    )
  })
}
