function createCart() {
    const cart = [];

    return {
        addItem(item, price) {
            cart.push({ item, price });
        },

        removeItem(item) {
            const index = cart.findIndex(product => product.item === item);

            if (index !== -1) {
                cart.splice(index, 1);
            }
        },

        getCart() {
            return cart;
        },

        getCartTotal() {
            return cart.reduce((total, product) => total + product.price, 0);
        }
    };
}