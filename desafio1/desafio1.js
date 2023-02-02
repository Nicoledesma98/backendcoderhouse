
class ProductManager {


    constructor() {
        this.products = [];
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: idUnico(20000)
        }
        if (this.#hasValuesUndefined(product)) {
            console.log("hay un campo indefinido")
            return
        }
        if (this.#hasCodeRepit(code)) {
            console.log("se repite el code")
            return
        }
        this.products.push({
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: idUnico(20000)
        })
    }
    getProducts() {
        return this.products
    }
    getProductById(id) {
        // logica para obtener un producto por id
        const product = this.products.find(producto => producto.id === id)
        if (product) {
            return product
        }
        else console.log("not found,producto no encontrado")
    }
    #hasValuesUndefined(product) {
        return Object.values(product).some((element) => element == undefined);
    }
    #hasCodeRepit(code) {
        return this.products.some(producto => producto.code === code)
    }

}
function idUnico(max) {
    return Math.floor(Math.random() * max);
}
const products = new ProductManager()
products.addProduct("Cama Gato", "Cama para gato con corderito", "$2000", "cama-gato.jpg", "A123FDE", "210")
console.log(products.getProducts())
products.getProductById()
