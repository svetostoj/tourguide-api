const Car = require('./Car')

const cars = [
    {
        make: 'Toyota',
        model: 'Land Cruiser', 
        floorPrice: 2000000
    },
    {
        make: 'Jeep',
        model: 'Wrangler', 
        floorPrice: 1800000
    },
    {
        make: 'Nissan',
        model: 'Patrol', 
        floorPrice: 1900000
    }
]

Car.create(cars)
.then(() => {
    console.info(`seeded cars`)
    
})