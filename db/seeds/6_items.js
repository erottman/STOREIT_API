
exports.seed = function(knex) {
  return knex('items').del()
  .then(() => {
    return knex('items').insert([{
      id: 1,
      box_id: 1,
      box_identifier: 'box1',
      name: 'toaster',
      quantity: 1,
      value: 32,
      description: 'New toaster with bagel width',
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/81ehu9hadkL._SX355_.jpg'
    },
    {
      id: 2,
      box_id: 2,
      box_identifier: 'box2',
      name: 'comforter',
      quantity: 2,
      value: 180,
      description: 'goose down comforter from Macys',
      image_url: 'https://secure.img1-fg.wfcdn.com/im/d5ea3c03/resize-h2000-p1-w2000%5Ecompr-r85/1737/17379084/Alba+Floral+Pinch+6+Piece+Comforter+Set.jpg'
    },{
      id: 3,
      box_id: 3,
      box_identifier: 'box3',
      name: 'monitor',
      quantity: 1,
      value: 2010,
      description: 'Dell curved monitor 34in',
      image_url: 'https://images10.newegg.com/ProductImageCompressAll300/24-014-487-07.jpg'
    },
  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items))"
    )
  })
}
