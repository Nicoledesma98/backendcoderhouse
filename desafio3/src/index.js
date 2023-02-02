

const express = require('express');
const ProductManager = require('../../desafio2/desafio2')

const app = express()


const PORT = 4000

app.use(express.urlencoded({extended: true}))

app.get('/products/:id',async (req,res) =>{
    const productManager = new ProductManager()
    const productos = await productManager.getProducts()
    console.log(await productManager.getProducts()) ///llegan todos los productos
    const prueba  = productos.find( prod => prod.id === parseInt(req.params.id))
    console.log("esto es prueba",prueba)
    console.log(req.params.id)
    return res.status(200).json(prueba)
})

app.get('/products', async (req, res) => {
    const productManager = new ProductManager();
    const products = await productManager.getProducts();
    const limit = req.query.limit ? parseInt(req.query.limit) : products.length;
    const limitedProducts = products.slice(0, limit);
    console.log("esto es limitedproducts",limitedProducts)
    return res.status(200).json(limitedProducts);
  });



app.listen(PORT,() => {
    console.log(`servidor disponible puerto ${PORT}`)
} ) 
