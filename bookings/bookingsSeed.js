const Booking = require('./Booking')

const bookings = [
    {
        booking: 'Melbourne CBD',
        fromto: 'Mon-Tue',
        price: 2000000,
        user: '5b3c1fd5c4834f02bcc4e104'
    },
    {
        booking: 'East Gippsland',
        fromto: 'Wed-Thu',
        price: 400000,
        user: '5b3c1fd5c4834f02bcc4e104'
    },
    {
        booking: 'French Island ',
        fromto: 'Fri-Sat',
        price: 120000,
        user: '5b3c1fd5c4834f02bcc4e104'
    }
]

Booking.create(bookings)
    .then(() => {
        console.info(`seeded bookings`)

    })