export const places = [
  {
    id: "abc123",
    name: 'Casa Cappuccino',
    phoneNumber: '1(705)555-5555',
    address: '90 Dunlop Street E',
    city: 'Barrie',
    province: 'Ontario',
    postalCode: 'L6L-6L6',
    features: ['Hot Drinks', 'Large Tables', 'Wifi', 'Open Concept'],
    featured: false,
    imgSrc: "img/casa.jpg"
  },
  {
    id: "123abc",
    name: 'Kings Arms',
    phoneNumber: '1(905)905-9055',
    address: '1 Lakeshre Rd East',
    city: 'Oakville',
    province: 'Ontario',
    postalCode: 'L6L-6L6',
    features: ['Bar', 'Occassional Band', 'Pool Table', 'Patio', 'Alcohol'],
    featured: false,
    imgSrc: "img/kingsarms.jpg"
  },
  {
    id: "abbc12",
    name: 'Flying Monkeys',
    phoneNumber: '1(905)905-9055',
    address: '79 Dunlop Street E',
    city: 'Barrie',
    province: 'Ontario',
    postalCode: 'L6L-6L6',
    features: ['Bar', 'Alcohol', 'Pool Table', 'Patio', 'Craft Beer'],
    featured: false,
    imgSrc: "img/flyingmonkeys.jpg"
  },
  {
    id: "abcc11",
    name: 'Boon Burger',
    phoneNumber: '1(905)905-9055',
    address: '102 Dunlop Street E',
    city: 'Barrie',
    province: 'Ontario',
    postalCode: 'L6L-6L6',
    features: ['Vegetarian', 'Burgers', 'Wifi'],
    featured: false,
    imgSrc: "img/boonburger.jpg"
  }
]

export const tags = ['Wifi', 'Patio', 'Alcohol']

export const hours = [
  {business_id: "abc123", hours: ['Mon: 7-10', 'Tues: 7-10', 'Wed: 7-10', 'Thurs: 7-10', 'Fri: 7-10', 'Sat: 7-10', 'Sun: 7-10']},
  {business_id: "123abc", hours: ['Mon: 12-9', 'Tues: 12-9', 'Wed: 12-9', 'Thurs: 12-9', 'Fri: 12-12', 'Sat: 12-12', 'Sun: CLOSED']},
  {business_id: "abbc12", hours: ['Mon: 11-7', 'Tues: 11-7', 'Wed: 11-7', 'Thurs: 11-7', 'Fri: 11-9', 'Sat: 11-9', 'Sun: 11-6']},
  {business_id: "abcc11", hours: ['Mon: 7-10', 'Tues: 7-10', 'Wed: 7-10', 'Thurs: 7-10', 'Fri: 7-10', 'Sat: 7-10', 'Sun: 7-10']}
 ]
//
// export const hours = [
//   {business_id: "abc123", hours: [
//     {day: "Mon", hours: "7-10"},
//     {day: "Tues", hours: "7-10"},
//     {day: "Wed", hours: "7-10"},
//     {day: "Thurs", hours: "7-10"},
//     {day: "Fri", hours: "7-10"},
//     {day: "Sat", hours: "7-10"},
//     {day: "Sun", hours: "7-10"}
//   ]},
//   {business_id: "123abc", hours: [
//     {day: "Mon", hours: "11-7"},
//     {day: "Tues", hours: "11-7"},
//     {day: "Wed", hours: "11-7"},
//     {day: "Thurs", hours: "11-7"},
//     {day: "Fri", hours: "11-9"},
//     {day: "Sat", hours: "11-9"},
//     {day: "Sun", hours: "11-6"}
//   ]}
// ]

export const events = [
  {business_id: "abc123", month: "Nov.", day: "06", time: "20:00", type: "Comedy", title: "Brian Smith - Laugh Away", description: "A local comedian named Brian will be making your day better with hilarious comedy about todays common issues."},
  {business_id: "abc123", month: "Nov.", day: "13", time: "22:00", type: "Band", title: "Trendsetters Unite", description: "Local band 'Trendsetter' will be performing their new album, entry is $5 with drinks on sale all night."}
]
