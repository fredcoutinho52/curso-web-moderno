const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {}

module.exports = {
    saveProducts(product) {
        if(!product.id) product.id = sequence.id
        products[product.id] = product
        return product
    },

    getProduct(id) {
        return products[id] || {}
    },

    getProducts() {
        return Object.values(products)
    },

    deleteProduct(id) {
        delete products[id]
    }
}