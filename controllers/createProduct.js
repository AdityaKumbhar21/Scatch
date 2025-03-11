const productModel = require("../models/product-model");

module.exports.createProduct =  async(req, res)=>{
    try {
      const{ name, price, discount, bgcolor, panelColor, textColor} = req.body;

        if(Number(discount) >= Number(price)){
            req.flash("success", "Discount cannot be more than price");
            return res.redirect('/products/create'); 
        }
        if(Number(discount) === 0){
            const product = await productModel.create({
                image: req.file.buffer,
                name, 
                price, 
                discount:0, 
                bgcolor, 
                panelColor, 
                textColor
            });
        }
        else{
            const product = await productModel.create({
                image: req.file.buffer,
                name, 
                price: price-discount, 
                discount, 
                bgcolor, 
                panelColor, 
                textColor
            });
        }
  
      req.flash("success", "Product created successfully!");
      res.redirect('create'); 
    } catch (error) {
         req.flash("success", "Something went wrong!");
         res.redirect('/products/create');
    }
 }