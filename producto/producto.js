class ProductManager {

    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }

    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        throw new Error('Todos los campos son obligatorios');
      }

      if (this.products.some((existingProduct) => existingProduct.code === product.code)) {
        throw new Error('El código del producto ya existe');
      }

      product.id = this.productIdCounter;
      this.productIdCounter++;
      this.products.push(product);
    }

    getProducts() {
      return this.products;
    }

    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        throw new Error('Not found');
      }
      return product;
    }
  }

  // Prueba
  const productManager = new ProductManager();

  console.log('Agregando manzana');
  productManager.addProduct({
    title: 'manzana',
    description: 'Manzana roja',
    price: 100,
    thumbnail: 'manzanaroja.jpg',
    code: 'P1',
    stock: 10,
  });
  

  console.log('Agregando naranja');
  productManager.addProduct({
    title: 'naranja',
    description: 'Naranja jugosa',
    price: 120,
    thumbnail: 'naranja.jpg',
    code: 'P2',
    stock: 5,
  });

  console.log('Obteniendo lista de productos');
  console.log(productManager.getProducts());

  console.log('Obteniendo producto por ID');
  console.log(productManager.getProductById(2));

  try {
    console.log('Obteniendo producto por ID inexistente');
    console.log(productManager.getProductById(3));
  } catch (error) {
    console.error(error.message);
  }
