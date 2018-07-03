const mongoose = require('../db/connectdb')
const {Schema} = mongoose

const bookingSchema = new Schema({
       booking: {
           type: String,
           required: true,
           index: true
       },
       fromto: String,
       price: {
           type: Number,
           required: true
       },
       user: {
           type: Schema.Types.ObjectId,
           ref: 'User'
       }
})

const Booking = mongoose.model('Bookings', bookingSchema)

module.exports = Booking