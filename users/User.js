const mongoose = require('../db/connectdb')
const bcrypt = require('bcrypt')
const {Schema} = mongoose


const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: {
        type: String,
        select: false 
    },
    roles: [String]
})

userSchema.statics.isAuthenticUser = async function(email, password) {
    
        const user = await this.findOne({email}).select('password')

        // no user in database
        if(!user) {
            return false
        }

        const hash = user.password
        // user password either correct or incorrect
        return await bcrypt.compare(password, hash)

}

userSchema.statics.register = async function(email, password) {
    
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    try {
        const user = await this.create({email, password: hash})
        const userObj = user.toObject()
        delete userObj.password
        return userObj
    } catch(err) {
        return new Error('Already registered')
    }
}

const User = mongoose.model('Users', userSchema)

module.exports = User