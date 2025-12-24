const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    balance: {
        type: Number,
        default: 100000
    }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const UserModel = mongoose.model("users", UserSchema);

module.exports = { UserModel };
