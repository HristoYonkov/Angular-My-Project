const bookController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
/// todo HAS_USER - guards
const { getAll, create, getById, update, deleteById, getByUserId, buyBook, getBySearch } = require('../service/bookService');
// const { parseError } = require('../util/parser');
//todo parseError
//todo - populate bike with _ownerId

bookController.get('/', async (req, res) => {
    const books = await getAll();
    res.status(200).json(books)
});

bookController.get('/buyedBooks', async (req, res) => {
    const books = await getAll();
    const filtered = []
    books.forEach((book)=>{
        if (book.buyers.includes(req.user._id)) {
            filtered.push(book)
        }
    })
    
    res.status(200).json(filtered)
});

bookController.post('/', async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        // console.log(req.user._id);
        // console.log(req.body);
        // const body = req.body
        // body['_ownerId'] = req.user._id
        const book = await create(data);
        res.json(book)
    } catch (err) {
        // const message = parseError(err)
        console.log(err + 'errr');
        res.status(400).json({ error: err.message })
    }
    res.end()
});

bookController.get('/my-books', async (req, res) => {
    const books = await getByUserId(req.user._id)
    return res.status(200).json(books)
});

bookController.get('/search', async (req, res) => {
    console.log(req.body.title);
    const books = await getBySearch(req.body.title)
    return res.status(200).json(books)
});

bookController.put('/buy', async (req, res) => {

    const book = await getById(req.body.bookId);
    
    if (req.user._id == book._ownerId._id || book.buyers.includes(req.user._id)) {
        return res.status(403).json({ message: 'You cannot modify this record' })
    }
    try {
        const result = await buyBook(req.body.bookId, req.user._id,);
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        // const message = parseError(err)
        res.status(400).json({ error: err.message })
    }

})

bookController.get('/:id', async (req, res) => {
    const book = await getById(req.params.id)
    return res.status(200).json(book)
});

bookController.put('/:id', async (req, res) => {
    const book = await getById(req.params.id);

    if (req.user._id != book._ownerId._id) {
        return res.status(403).json({ message: 'You cannot modify this record' })
    }
    try {
        const result = await update(req.params.id, req.body);
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        // const message = parseError(err)
        res.status(400).json({ error: err.message })
    }
});


bookController.delete('/delete/:id', async (req, res) => {

    const item = await getById(req.params.id);
    console.log(item._ownerId._id);
    if (req.user._id != item._ownerId._id) {
        return res.status(403).json({ message: 'You cannot modify this record' })
    }
    try {
        await deleteById(req.params.id);
        res.status(204).end()
    } catch (err) {
        // const message = parseError(err)
        res.status(400).json({ err: err.message })
    }
});


module.exports = {
    bookController
};