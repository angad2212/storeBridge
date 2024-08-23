const Product = require('../model/Product'); // Change to this

const createProduct = async(req,res)=>{
    // this product we have to get from API body
    const product = new Product(req.body);
    product.discountPrice = Math.round(product.price*(1-product.discountPercentage/100))
    try {
        const doc = await product.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = createProduct;