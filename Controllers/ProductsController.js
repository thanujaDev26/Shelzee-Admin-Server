let Product = require('../Models/ProductModel');

exports.createProduct = async (req, res) => {
    try {
        let product = await Product.create(req.body);
        if(product){
           return res.status(200).json({
               status: 'New Product Updated',
               data : {
                   product
               }
           });
        }
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const product = await Product.findOne({name: req.params.name});
        if(product){
            return res.status(200).json({
                status: 'successfully getted Product',
                data : {
                    product
                }
            })
        }
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if(products){
            return res.status(200).json({
                status: 'success',
                data: {
                    products
                }
            })
        }
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            {name: req.params.name}, req.body, {new: true, runValidators: true}
        )
        if(product){
            return res.status(200).json({
                status: 'successfully updated Product',
                data : {
                    product
                }
            })
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({name: req.params.name});
        if(product){
            return res.status(200).json({
                status: 'successfully deleted Product',
                data : null
            })
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}