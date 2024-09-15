const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : [true, "This Product is already in our Server"]
    },
    price: {
        type: String,
        required: true
    },
    href: {
        type: String,
        default: '#'
    },
    breadcrumbs: [
        {
            id: Number,
            name: String,
            href: String
        }
    ],
    images: [
        {
            src: {
                type: String,
                required: true
            },
            alt: String
        }
    ],
    colors: [
        {
            name: String,
            class: String,
            selectedClass: String
        }
    ],
    sizes: [
        {
            name: String,
            inStock: {
                type: Boolean,
                default: true
            }
        }
    ],
    description: {
        type: String,
        required: true
    },
    highlights: [
        {
            type: String
        }
    ],
    details: {
        type: String
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
