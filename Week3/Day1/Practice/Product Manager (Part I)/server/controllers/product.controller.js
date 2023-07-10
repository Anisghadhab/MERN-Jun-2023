const Product = require('../models/product.model');
console.log('THIS IS THE MODEL IMPORTED ====>', Product)


// CREATE ONE
module.exports.createOneProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            console.log(newProduct)
            res.json(newProduct)
        })
        .catch((err) => {
            res.json({ message: 'Error: ', err })
        })
};

// SHOW ALL PRODUCTS
module.exports.showAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Error: ', err })
        });
};

// SHOW ONE PRODUCT
module.exports.showOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((oneProduct) => {
            console.log({ product: oneProduct })
            res.json({ product: oneProduct })
        })
        .catch((err) => {
            res.json({ message: 'Error: ', err })
        });
};

//DELETE ONE PRODUCT
module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

// UPDATE ONE PRODUCT
module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((updatedProduct) => {
            res.json({ product: updatedProduct })
            console.log({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Error: ', err })
        })
}
