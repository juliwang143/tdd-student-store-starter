const {storage} = require('../data/storage');
const {BadRequestError} = require('../utils/errors')

class Store {

    constructor() {
        this.super();
    }

    static hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }

    static products() {
        return storage.get('products').value();
    }

    static product(productId) {
        return storage.get('products').value()[productId - 1];
    }

    static purchaseOrder(purchaseOrder) {
        const { user, shoppingCart } = purchaseOrder;

        // if either shopping cart or user field is missing
        if (!shoppingCart || !user) {
            throw new BadRequestError('Shopping cart or user field is missing')
        }

        // TODO if shoppingCart contains duplicates
        // error
        if (this.hasDuplicates(shoppingCart)) {
            throw new BadRequestError('Duplicate items in shopping cart')
        }

        const {name, email} = user;
        let total = 0;
        for (let i = 0; i < shoppingCart.length; i++) {
            let currItem = shoppingCart[i];
            if (!currItem.quantity || !currItem.itemId) {
                // if quantity or item id is missing
                throw new BadRequestError('Shopping cart item quantity or id is missing')
            } else {
                let productObj = this.product(currItem.itemId);
                total += currItem.quantity * productObj.price;
            }
        }

        let id = storage.get('purchases').value().length + 1;
        total += 0.0875 * total;
        let createdAt = new Date().toLocaleString();
        const purchaseObject = {id: id, name: name, email: email, order: shoppingCart, total: total?.toFixed(2), createdAt: createdAt};
        storage.get('purchases').push({purchase: purchaseObject}).write();
        return purchaseObject;
    }

    static orders() {
        return storage.get('purchases').value();
    }

    static order(orderId) {
        return storage.get('purchases').value()[orderId - 1];
    }
}

module.exports = Store;