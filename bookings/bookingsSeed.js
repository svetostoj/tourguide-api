const Booking = require('./Booking')

const bookings = [
    {
        booking: 'Melbourne CBD',
        fromto: 'Mon-Tue', 
        price: 2000000,
        user: '5b3ac93345a84504bb464ffa'
    },
    {
        booking: 'East Gippsland',
        fromto: 'Wed-Thu', 
        price: 400000,
        user: '5b3ac93345a84504bb464ffa'
    },
    {
        booking: 'French Island ',
        fromto: 'Fri-Sat', 
        price: 120000,
        user: '5b3ac93345a84504bb464ffa'
    }
]

Booking.create(bookings)
.then(() => {
    console.info(`seeded bookings`)
    
})