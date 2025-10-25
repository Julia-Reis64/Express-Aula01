const ProductService = require("../services/products.service");

class ProductController {
    list(request, response) {
        const products = ProductsService.listAll();
        response.json(products);
    }
    create(request, response) {
        try{
            const newProduct = ProductService.create(request.body);
            response.status(201).json(newProduct);
        }
        catch (error){
            const errorMessage = {
                error: error.message,
            }
            response.status(400).json(errorMessage);
        }
    }

    delete(request, response) {
        try{
            const productId = request.params.id;
            ProductService.delete(productId);

            response.status(200).json("message: Produto deletado com sucesso");
        }
        catch (error){
            const errorMessage = {
                error: error.message,
            }
            response.status(400).json(errorMessage);
        }

    }
}
module.exports = new ProductController();