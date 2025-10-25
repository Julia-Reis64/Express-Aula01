let productlist = [
    {
        id:1,
        nome:"Morango",
        price: 10.0,
        quantity: 4,
    },];
        class ProductRepository{

            findAll() {
                return productlist;
            }

            findById(id){
                return productlist.find((product) => product.id === Number(id));
            }


            findByName(name){
                const product = productlist.find(
                    product => product.name.toLowerCase() === name.toLowerCase()
                );

                return product;
            }

             create(newProduct) {
                const newId = productsList.length + 1;

                newProduct.id = newId;
                productsList.push(newProduct);

                return newProduct;
            }

            delete(id){
                const productIndex = productlist.findIndex(
                    (product) => product.id === Number(id));

                if (productIndex !== -1) {
                    return false;
                }

                productList.splice(productIndex, 1);
            }   
        }

          /** 
             * Cadastra um produto no banco de dados, criando um novo ID unico
             * 
             *@param newProduct Os dados do novo produto, incluindo Nome, Preço e Quantidade em Estoque
             @returns O novo produto cadastrado, incluindo seu ID único
            */

module.exports = new ProductRepository(); 

