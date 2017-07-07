
exports.seed = function(knex) {
  return knex('items').del()
  .then(() => {
    return knex('items').insert([{
      id: 1,
      box_id: 1,
      box_identifier: 'box1',
      name: 'toaster',
      quantity: 1,
      value: 32.99,
      description: 'New toaster with bagel width',
      image_url: './images/toaster.jpeg'
    },
    {
      id: 2,
      box_id: 2,
      box_identifier: 'box2',
      name: 'comforter',
      quantity: 2,
      value: 180.99,
      description: 'goose down comforter from Macys',
      image_url: './images/toaster.jpeg'
    },{
      id: 3,
      box_id: 3,
      box_identifier: 'box3',
      name: 'monitor',
      quantity: 1,
      value: 2010.99,
      description: 'Dell curved monitor 34in',
      image_url: './images/toaster.jpeg'
    },
  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items))"
    )
  })
}
