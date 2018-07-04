const express = require('express')
const router = express.Router()
const JWT = require('jsonwebtoken')
const {Bearer} = require('permit')
const Booking = require('./Booking')
const permit = new Bearer()
const JWT_SECRET = process.env.JWT_SECRET

router.get('/', (req, res) => {

    const token = req.cookies.access_token
    console.log(req.cookies)
  
    console.log('token',token)
    // TODO:  (replace) pull bookings from bookings Model
    

    const decoded = JWT.verify(token, JWT_SECRET)
    
    Booking.find()
    .then(bookings => {
        res.status(200).json(bookings)
    })
    .catch(err => {
        throw new Error(err.message)
    })

})

module.exports = router

