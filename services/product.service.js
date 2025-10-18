const ProductRepository = require("../services/products.service");

class ProductService{
    listAll() {
        return ProductRepository.findAll();
    }

    create(newProduct){

        const existingProduct = ProductRepository.findByName(newProduct.name);

        if(existingProduct){
            throw new Error("Produto já cadastrado")
        }

        return ProductRepository.create(newProduct);
    }
}

module.exports = new ProductService();