const express = require('express')
const router = express.Router()
const JWT = require('jsonwebtoken')
const {Bearer} = require('permit')

const permit = new Bearer()
const JWT_SECRET = process.env.JWT_SECRET

router.get('/', (req, res) => {

    // TODO:  (replace) pull cars from car Model
    const cars = [
        {id: 1, model: 'Toyota'},
        {id: 2, model: 'Mercedes'},
        {id: 3, model: 'Fiat'},
        {id: 4, model: 'BMW'}
    ]

    
    const token = permit.check(req)
    const decoded = JWT.verify(token, JWT_SECRET)

    res.status(200).json(cars)
})

module.exports = router

