const { Schema, model, Types: { ObjectId } } = require('mongoose')

const URL_PATTERN = /https?:\/\/./i

const bookSchema = new Schema({
    title: {
        type: String, required: true,
        minlength: [4, 'Title must be minimum 4 characters!']
    },
    author: {
        type: String, required: true,
        minlength: [2, 'Author must be minimum 2 characters!']
    },
    description: {
        type: String, required: true,
        minlength: [10, 'Description must be at least 10 characters long!'],
        maxlength: [100, 'Description cannot be more than 100 characters long!']
    },
    img: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL, must start with HTTP/HTTPS'
        }
    },
    genre: { type: String, required: true, enum: {
        values: ['fantasy', 'romance', 'mistery', 'criminal', 'other'],
        message: 'Genre is not supported!'}
    },
    price: {
        type: Number, required: true, min: [0.01, 'Price must be positive number!']
    },
    _ownerId: { type: ObjectId, ref: 'User', required: true }
});


const Book = model('Book', bookSchema)

module.exports = Book