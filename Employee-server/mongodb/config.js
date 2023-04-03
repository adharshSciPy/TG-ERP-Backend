const mongoose = require('mongoose')

async function connect() {
    // mongodb connection
    mongoose.set('strictQuery', false)
    await mongoose.connect('')
        .then(() => {
            console.log('Mongodb Connected')
        })
        .catch((err) => {
            console.log(err)
        })
}


module.exports = connect