const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()

const bookingsRouter = require('./bookings/bookingsRouter')
const authRouter = require('./auth/authRouter')

const PORT = 3000
app.use(bodyParser.json())

app.use(cors({
   origin: 'http://localhost:3001',
   credentials: true 
}))
app.use(cookieParser())
app.use('/bookings', bookingsRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.info(`server listening on port ${PORT}`)
})