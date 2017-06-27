
exports.seed = function(knex) {
  return knex('facilities').del()
  .then(() => {
    return knex('facilities').insert([{
      id: 1,
      name: 'Public Storage',
      description: 'Public storage in West Seattle with 100 units and car storage.  Provides onsite management, and 24 hour gate access. Climate controlled units available',
      address_line_1: '2964 SW Avalon Way',
      address_line_2: '',
      city: 'Seattle',
      state: 'WA',
      zip: '98126',
      phone_number: '12063952993',
      logo_img: 'https://logo.clearbit.com/publicstorage.com',
      url: 'https://www.publicstorage.com/washington/self-storage-seattle-wa/98126-self-storage/',
    },
    {
      id: 2,
      name: 'UHAUL Storage',
      description: 'Easy store while you are moving.  UHAUL storage provides climate controlled units, with easy drive up access.  On-site easy pick up of trucks and moving supplies  Onsite Management and 24 hour security patrol.',
      address_line_1: '6343 35th Ave SW',
      address_line_2: '',
      city: 'Seattle',
      state: 'WA',
      zip: '98126',
      phone_number: '12069379320',
      logo_img: './images/UHAUL.jpg',
      url: 'https://www.uhaul.com/Locations/Truck-Rentals-near-Seattle-WA-98126/701065/',
    },{
      id: 3,
      name: 'Stor-More Self Storage',
      description: 'Stor-More Self Storage is conveniently located in beautiful West Seattle, just minutes from downtown. Our three large, heated buildings sit on the hill above All-Star Fitness.Each building has indoor as well as drive-up storage units, ranging from our smallest lockers at 5x5x4 to our largest outdoor units at 10x28x10. For your convenience, we provide elevators, rolling carts and hand-trucks to make moving in and out as easy as possible.',
      address_line_1: '2850 SW Yancy St',
      address_line_2: '',
      city: 'Seattle',
      state: 'WA',
      zip: '980126',
      phone_number: '12064517751',
      logo_img: './images/StorMore.png',
      url: 'https://www.stormore.net/',
    },
  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('facilities_id_seq', (SELECT MAX(id) FROM facilities))"
    )
  })
}
