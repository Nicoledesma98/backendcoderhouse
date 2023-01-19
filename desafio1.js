
class ProductManager {

    constructor() {
        this.products = [];
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        this.products.push({
            title: "producto",
            description: "description",
            price: "$200",
            thumbnail: "./cama-gato.jpg",
            code: idUnico(20000),
            stock: 20
        })
        console.log(this.products)
        console.log(this.products.some(producto => producto.code === idUnico))
    }
    getProducts() {
        this.products.forEach(element => console.log(element))
    }
    getProductById(id) {
        // logica para obtener un producto por id
        if (condition) {

        }
    }
}
function idUnico(max) {
    return Math.floor(Math.random() * max);
}
const product = new ProductManager()
product.addProduct()
product.getProducts()