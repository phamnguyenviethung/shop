const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://pnviethung:0922981365@cluster0.pzkpb.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Database connected successfully!!!');
    } catch (error) {
        console.log('Database connected failure!!!');
    }
}

module.exports = { connect };