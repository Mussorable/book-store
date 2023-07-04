const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

userSchema.methods.addToCart = function (product) {
  const cartProductIndex = this.cart.items.findIndex(
    (cp) => cp.productId.toString() === product._id.toString()
  );
  const cartItems = [...this.cart.items];

  if (cartProductIndex >= 0) {
    const newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    cartItems[cartProductIndex].quantity = newQuantity;
  } else {
    cartItems.push({
      productId: product._id,
      quantity: 1,
    });
  }

  const updatedCart = {
    items: cartItems,
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.deleteItemFromCart = function (productId) {
  const updatedCart = this.cart.items.filter(
    (item) => item.productId.toString() !== productId.toString()
  );

  this.cart.items = updatedCart;
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
