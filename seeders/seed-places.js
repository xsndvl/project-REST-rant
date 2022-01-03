const db = require("../models")

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: "https://www.tastecooking.com/wp-content/uploads/2019/01/DSC3416.jpg",
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://images.squarespace-cdn.com/content/v1/59014ed8db29d637250fa476/1568595756117-1KH6VGFC1GBVLW1C88CJ/MewsicKitty-21.jpg',
    founded: 2020
}])
.then(() => {
    console.log("Success!")
    process.exit()
})
.catch(err => {
    console.log("Failure", err)
    process.exit()
})