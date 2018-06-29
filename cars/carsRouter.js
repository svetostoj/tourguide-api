const express = require('express')
const router = express.Router()
const JWT = require('jsonwebtoken')
const {Bearer} = require('permit')
const Car = require('./Car')
const permit = new Bearer()
const JWT_SECRET = process.env.JWT_SECRET

router.get('/', (req, res) => {

    const token = req.cookies.access_token
    console.log(token)
    // TODO:  (replace) pull cars from car Model
    

    const decoded = JWT.verify(token, JWT_SECRET)
    Car.find()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        throw new Error(err.message)
    })

})

module.exports = router

