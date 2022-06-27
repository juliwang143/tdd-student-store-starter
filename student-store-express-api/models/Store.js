// const {BadRequestError} = require('../utils/errors');
const allProducts = require('../data/db.json');

class Store {
    constructor() {
        this.super();
    }

    static products() {
        return allProducts;
    }

    static product(productId) {
        let product;
        for (let i = 0; i < allProducts.products.length; i++) {
            if (allProducts.products[i].id == productId) {
                product = allProducts.products[i];
            }
        }

        // TODO throw error if product is undefined
        return product;
    }
}

module.exports = Store;