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
    features: ['Bar', 'Occassional Band', 'Pool Table', 'Patio'],
    featured: false,
    imgSrc: "img/casa.jpg"
  }
]

export const hours = [
  {business_id: "abc123", hours: ['Mon: 7-10', 'Tues: 7-10', 'Wed: 7-10', 'Thurs: 7-10', 'Fri: 7-10', 'Sat: 7-10', 'Sun: 7-10']},
  {business_id: "123abc", hours: ['Mon: 11-7', 'Tues: 11-7', 'Wed: 11-7', 'Thurs: 11-7', 'Fri: 11-9', 'Sat: 11-9', 'Sun: 11-6']}
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
  {business_id: "abc123", date: "November 29th", time: "20:00", type: "Comedy", description: "A local comedian named Brian will be making your day better with hilarious comedy about todays common issues."},
  {business_id: "123abc", date: "November 18th", time: "22:00", type: "Band", description: "Local band 'Trendsetter' will be performing their new album, entry is $5 with drinks on sale all night."}
]

export const reviews = [
  {business_id: "abc123", author: "Sandy", description: "Casa Cappuccino is a wonderful place with a very nice vibe. You can work quietly while enjoying a wonderfully made pumpkin spice late! Would definitely recommend to my friends and to you!"},
  {business_id: "abc123", author: "Carry", description: "Casa Cappuccino is my go to place to get work done. I get to enjoy a perfect latte while having a nice quiet environment to complete my work in!"},
  {business_id: "123abc", author: "Larry", description: "Flying monkeys in downtown Barrie really is a decent place to go and get a quick bite to eat, and maybe sit down for some of their top notch wifi!"}
]
