const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Smartphones', 'Laptops', 'Wearables', 'Accessories', 'Tablets'],
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    addedBy: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
