const ProductController = require('../controllers/product.controller')
console.log('THIS IS THE CONTROLLER IMPORTED ====>',ProductController)

module.exports = (app) => {
    app.post("/api/products", ProductController.createOneProduct)
    app.get("/api/products", ProductController.showAllProducts)
    app.get("/api/products/:id", ProductController.showOneProduct)
    app.put("/api/products/:id", ProductController.updateOneProduct)
    app.delete("/api/products/:id", ProductController.deleteOneProduct)
}
