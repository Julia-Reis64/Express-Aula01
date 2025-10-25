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

        const productEntity = new Product(newProduct);

        return ProductRepository.create(productEntity);
    }

    delete(id){
       this.findById(id);

        ProductRepository.delete(id);

        return;
    }

    findById(id){
        const existingProduct = ProductRepository.findById(id);

        if(!existingProduct){
            throw new Error("Produto não existe");
        }

        return existingProduct;
    }

    update(id,values){
        const existingProduct = this.findById(id);
}



module.exports = new ProductService();