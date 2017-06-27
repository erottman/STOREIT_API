
exports.seed = function(knex) {
  return knex('items').del()
  .then(() => {
    return knex('items').insert([{
      id: 1,
      box_id: 1,
      box_label: 'box_1',
      label: 'toaster',
      description: 'New toaster with bagel width',
      value: 32.99,
      quantity: 1,
      image_url: './images/toaster.jpeg'
    },
    {
      id: 2,
      box_id: 2,
      box_label: 'box_2',
      label: 'comforter',
      description: 'goose down comforter from Macys',
      value: 180.99,
      quantity: 2,
      image_url: './images/toaster.jpeg'
    },{
      id: 3,
      box_id: 3,
      box_label: 'box_3',
      label: 'monitor',
      description: 'Dell curved monitor 34in',
      value: 2010.99,
      quantity: 1,
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
