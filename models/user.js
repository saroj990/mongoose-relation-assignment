var mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require("uuid/v1");
const Schema = mongoose.Schema

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true
    },

    lastname: {
        type: String,
        maxlength: 30,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true
    },
    encry_password: {
        type: String,
        require: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    todos: [{
        type: Schema.Types.ObjectId,
        ref:"Todo"
    }]
}, { timestamps: true }
);

userSchema.virtual("password")
    .set(function (password) {
        this._password = password
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password);
    })
    .get(function () {
        return this._password;
    })

userSchema.methods = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) === this.encry_password
    },

    securePassword: function (plainpassword) {
        if (!plainpassword) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
                .update(plainpassword)
                .digest('hex');
        } catch (err) {
            return ""
        }
    }
}



module.exports = mongoose.model("User", userSchema)