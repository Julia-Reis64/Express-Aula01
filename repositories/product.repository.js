let productlist = [
    {
        id:1,
        nome:"Morango",
        price: 10.0,
        quantity: 4,
    },];
        class ProductRepository{

            findByName(name){
                const product = productlist.find(
                    product => product.name.toLowerCase() === name.toLowerCase()
                );

                return product;
            }
        }

          /** 
             * Cadastra um produto no banco de dados, criando um novo ID unico
             * 
             *@param newProduct Os dados do novo produto, incluindo Nome, Preço e Quantidade em Estoque
             @returns O novo produto cadastrado, incluindo seu ID único
            */

modele.exposrts = new ProductRepository(); 

