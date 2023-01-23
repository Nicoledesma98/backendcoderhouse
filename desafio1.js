
class ProductManager {

    constructor() {
        this.products = [];
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        this.products.push({
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
             id: idUnico(20000)
           
        })
        console.log("si es TRUE es porque ya existe ese code del producto, si es FALSE es porque no.",
                    this.products.some(producto => producto.code === code))
    }
    getProducts() {
        return this.products
    }
    getProductById(id) {
        // logica para obtener un producto por id
        if (this.products.find(producto=>producto.id === idUnico)) {
            return console.log ("id encontrado",this.products) 
        }
        else console.log("not found,producto no encontrado")

        
    }
}
function idUnico(max) {
    return Math.floor(Math.random() * max);
}
const products = new ProductManager()
products.addProduct("Cama Gato", "Cama para gato con corderito", "$2000", "cama-gato.jpg", "A123FDE", "210")
console.log(products.getProducts())
products.getProductById()
