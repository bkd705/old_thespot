export const places = [
  {
    id: "abc123",
    name: "Casa Cappuccino",
    location: "91 Dunlop Street E",
    amenities: {
      wifi: true,
    }
  },
  {
    id: "123abc",
    name: "Flying Monkeys",
    location: "107 Dunlop Street E",
    amenities: {
      wifi: true
    }
  }
]

export const hours = [
  {business_id: "abc123", hours: {mon: "7-10", tues: "7-10", wed: "7-10", thur: "7-10", fri: "7-10", sat: "7-10", sun: "7-10"}},
  {business_id: "123abc", hours: {mon: "11-7", tues: "11-7", wed: "11-7", thur: "11-7", fri: "11-9", sat: "11-9", sun: "11-6"}}
]

export const events = [
  {business_id: "abc123", date: "November 29th", time: "20:00", type: "Comedy", description: "A local comedian named Brian will be making your day better with hilarious comedy about todays common issues."},
  {business_id: "123abc", date: "November 18th", time: "22:00", type: "Band", description: "Local band 'Trendsetter' will be performing their new album, entry is $5 with drinks on sale all night."}
]

export const reviews = [
  {business_id: "abc123", author: "Sandy", description: "Casa Cappuccino is a wonderful place with a very nice vibe. You can work quietly while enjoying a wonderfully made pumpkin spice late! Would definitely recommend to my friends and to you!"},
  {business_id: "abc123", author: "Carry", description: "Casa Cappuccino is my go to place to get work done. I get to enjoy a perfect latte while having a nice quiet environment to complete my work in!"},
  {business_id: "123abc", author: "Larry", description: "Flying monkeys in downtown Barrie really is a decent place to go and get a quick bite to eat, and maybe sit down for some of their top notch wifi!"}
]
