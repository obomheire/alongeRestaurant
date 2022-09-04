export const drawerItems = [
  {
    id: 1,
    label: 'Payment',
    name: 'credit-card-outline',
  },
  {
    id: 2,
    label: 'Promotions',
    name: 'tag-heart',
  },
  {
    id: 3,
    label: 'Settings',
    name: 'cog-outline',
  },
  {
    id: 4,
    label: 'Help',
    name: 'lifebuoy',
  },
];

export const filterData = [
  {name: 'Fast food', image: require('../assets/fastfood.png'), id: '0'},
  {name: 'Burgers', image: require('../assets/burger.png'), id: '1'},
  {name: 'Salads', image: require('../assets/salads.png'), id: '2'},
  {name: 'Hotdog', image: require('../assets/hotdog.png'), id: '3'},
  {name: 'Chinese', image: require('../assets/chinese.png'), id: '4'},
  {name: 'Mexican', image: require('../assets/mexican.png'), id: '5'},
  {name: 'Sea food', image: require('../assets/seafood.png'), id: '6'},
];

export const filterData2 = [
  {
    name: 'Fast food',
    image:
      'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1200/wp-content/uploads/national-fast-food-day.jpg',
    id: '0',
  },
  {
    name: 'Burgers',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBt3XGS18l3r-x-Tw-6xGFe4OfHVYt0gbdsQ&usqp=CAU',
    id: '1',
  },
  {
    name: 'Salads',
    image:
      'https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2014/04/healthySalads-184087214-770x533-1-650x428.jpg',
    id: '2',
  },
  {
    name: 'Hotdog',
    image:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/09/11/FNK_Chicago-Dogs_H1.jpg.rend.hgtvcom.441.294.suffix/1600093267898.jpeg',
    id: '3',
  },
  {
    name: 'Chinese',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/07/15/chinese.jpg?width=1200',
    id: '4',
  },
  {
    name: 'Mexican',
    image:
      'https://cdn.vox-cdn.com/thumbor/c1tnGRKL2aQDZ7aihpp9jCJJKzg=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16182432/mannys_016.jpg',
    id: '5',
  },
  {
    name: 'Sea food',
    image:
      'https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg',
    id: '6',
  },
  {
    name: 'Chinese Food',
    image:
      'https://flavorverse.com/wp-content/uploads/2022/04/Chinese-Foods.jpg',
    id: '7',
  },
  {
    name: 'Mexican pie',
    image:
      'https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2014/07/Mexican-Tortilla-Pie-by-Anita-at-Hungry-Couple-on-July-12-2014-410x273.jpg',
    id: '8',
  },
  {
    name: 'Ocean dish',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8F5DFl6ArP1NQxXv_slNXdyVRWrGh1VOrg&usqp=CAU',
    id: '9',
  },
];

export const restaurantsData = [
  {
    restaurantName: 'Mc Donalds',
    farAway: '21.2',
    businessAddress: '22 Bessie street, Cape Town',
    images: 'https://guardian.ng/wp-content/uploads/2022/05/McDonald.jpg',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325},
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps,Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2020-Terence-Carter-Grantourismo-f.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://cdn.cnn.com/cnnnext/dam/assets/200310103455-mcdonalds-little-mac-and-double-big-mac-full-169.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9U6zs4x7h4mAAAJjWgJ-3efMkdDa8djFCA&usqp=CAU',
      },
    ],
    id: 0,
  },

  {
    restaurantName: 'KFC',
    farAway: '12.7',
    businessAddress: '22 Bessie street, Cape Town',
    images:
      'https://www.wattagnet.com/ext/resources/2021/09/08/KFC-restaurant-drive-thru.jpg?height=418&t=1631123914&width=800',
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: -26.1891648, lng: 28.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: 'Chicken,Chicken wings... ',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2020-Terence-Carter-Grantourismo-f.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://cdn.cnn.com/cnnnext/dam/assets/200310103455-mcdonalds-little-mac-and-double-big-mac-full-169.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9U6zs4x7h4mAAAJjWgJ-3efMkdDa8djFCA&usqp=CAU',
      },
    ],
    id: 1,
  },

  {
    restaurantName: 'Steers',
    farAway: '5',
    businessAddress: ' 17 Olivia Rd, Johannesburg',
    images:
      'https://whichfranchise.co.za/wp-content/uploads/2013/07/Steers-UK-1-900x500.jpg',
    coordinates: {lat: -26.1886781, lng: 28.244879},
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2020-Terence-Carter-Grantourismo-f.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://cdn.cnn.com/cnnnext/dam/assets/200310103455-mcdonalds-little-mac-and-double-big-mac-full-169.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9U6zs4x7h4mAAAJjWgJ-3efMkdDa8djFCA&usqp=CAU',
      },
    ],
    id: 2,
  },

  {
    restaurantName: 'Roman Pizza',
    farAway: '7',
    businessAddress: ' 15 Atlas Rd, Kempton Park',
    images:
      'https://www.avenuecalgary.com/wp-content/uploads/2019/05/POTF_Anna-poses.jpg',
    averageReview: 4.3,
    numberOfReview: 700,
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2020-Terence-Carter-Grantourismo-f.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://cdn.cnn.com/cnnnext/dam/assets/200310103455-mcdonalds-little-mac-and-double-big-mac-full-169.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9U6zs4x7h4mAAAJjWgJ-3efMkdDa8djFCA&usqp=CAU',
      },
    ],
    id: 3,
  },
];

export const productData = [
  {
    name: 'Hand cut chips',
    price: 29.3,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    id: 0,
  },
  {
    name: 'Big Mac',
    price: 50.8,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 1,
  },
  {
    name: 'Chicken Burger',
    price: 70,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
    details: '',
    id: 2,
  },

  {
    name: 'Hand cut chips',
    price: 29.3,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    id: 3,
  },
  {
    name: 'Big Mac',
    price: 70.2,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 4,
  },
  {
    name: 'Chicken Burger',
    price: 70,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png',
    details: '',
    id: 5,
  },
];

export const menuData = [
  {title: 'BEEF', special: false, key: 0},
  {title: 'CHICKEN', special: false, key: 1},
  {title: 'VEGGIE BURGER', special: false, key: 2},
  {title: 'FRIES& CORN', special: false, key: 3},
  {title: 'SALADS', special: false, key: 4},
  {title: 'HAPPY MEALS', special: false, key: 5},
  {title: 'SAHRE BOX', special: false, key: 6},
  {title: 'MILKSHAKES', special: false, key: 7},
  {title: 'COLD DRINKS', special: false, key: 8},
  {title: 'DESSERTS', special: false, key: 9},
  {title: 'HOT DRINKS', special: false, key: 10},
];

export const specialData = [
  {title: 'LIMITED OFFER', key: 0},
  {title: 'GO CHILLI', key: 1},
  {title: 'GO CHEESE', key: 2},
  {title: 'MCCHICKEN DELUXE PROMO', key: 3},
];

export const menu = [
  {key: 1, title: 'BEEF'},
  {key: 2, title: 'CHICKEN'},
  {key: 3, title: 'VEGGIE BURGER'},
  {key: 4, title: 'SHARE BOX'},
  {key: 5, title: 'Happy Meals'},
  {key: 6, title: 'Fries'},
  {key: 7, title: 'Sides'},
  {key: 8, title: 'Milkshakes'},
];

export const menuDetailedData = [
  {
    meal: 'Big Mac',
    price: 70.2,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 12},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 13},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 15},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 16},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 18},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 21},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 23},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 24},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 26},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 30},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 31},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 32},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 33},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 35},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 36},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 38},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41},
      ],
    ],
    minimum_quantity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0,
  },

  {
    meal: 'Hand cut chips',
    price: 29.3,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],
    minimum_quantity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1,
  },

  {
    meal: 'Chicken Burger',
    price: 45.7,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
    details: '',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quantity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },

  {
    meal: 'Big Mac',
    price: 50.8,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quantity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3,
  },

  {
    meal: 'Hand cut chips',
    price: 29.3,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quantity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },

  {
    meal: 'Big Mac',
    price: 70.2,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 12},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 13},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 15},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 16},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 18},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 21},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 23},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 24},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 26},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 30},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 31},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 32},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 33},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 35},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 36},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 38},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41},
      ],
    ],
    minimum_quantity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5,
  },
];
