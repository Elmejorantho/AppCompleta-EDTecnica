const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true
    },
    passwordHash: String,
    todos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Todo'
        }
    ]
});

userSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.passwordHash
        delete returnedObject.__v
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;