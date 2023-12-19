const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type:String,
        require: true,
    },
    ticket: {
        destination: {
            type: String,
            require: true
        },
        startroute: {
            type:String,
            require: true
        },
        numberOfTickets: {
            type: Number,
            require: true
        },
        fare: {
            type: Number,
            require: true
        }
    }
},
{ timestamps: true }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;


