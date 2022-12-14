const Book = require('../models/Book')


async function getAll() {
    return Book.find({})

};
async function getByUserId(userId) {
    return Book.find({ _ownerId: userId })

};
async function getById(id) {
    return Book.findById(id).populate('_ownerId')
};

async function create(data) {
    return Book.create(data)
};

async function update(id, book) {
    const existing = await Book.findById(id);

    existing.title = book.title;
    existing.author = book.author;
    existing.description = book.description;
    existing.imageUrl = book.imageUrl;
    existing.genre = book.genre;
    existing.price = book.price;
    return existing.save()
}

async function deleteById(id) {
    console.log(id);
    return Book.findByIdAndDelete(id)
};

// async function getMyBooks(id) {
//     return await Book.find({ _ownerId: id })
// }


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    getByUserId,
    // getMyBooks
}