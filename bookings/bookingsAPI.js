import axios from './init'

export default {
    fetchBookings
}

async function fetchBookings() {
    const response = await axios.get('/bookings')
    const bookings = response.data
    return bookings
}