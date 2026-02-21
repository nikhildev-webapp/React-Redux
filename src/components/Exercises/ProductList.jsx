import React from 'react'

const ProductList = () => {
   const products = [
  { id: 1, name: 'Lenovo Laptops', price: 50000, inStock: true },
  { id: 2, name: 'ASUS Vivobook Go 15', price: 41990, inStock: true },
  { id: 3, name: 'HP Laptop 15s', price: 44990, inStock: false },
  { id: 4, name: 'Acer Aspire 5', price: 38500, inStock: true },
  { id: 5, name: 'Dell Vostro 3510', price: 48990, inStock: true },
  { id: 6, name: 'Samsung Galaxy Book2', price: 52000, inStock: false },
  { id: 7, name: 'Apple MacBook Air M1', price: 69900, inStock: true },
  { id: 8, name: 'Microsoft Surface Laptop Go', price: 55000, inStock: true },
  { id: 9, name: 'Lenovo IdeaPad Slim 3', price: 38490, inStock: true },
  { id: 10, name: 'HONOR MagicBook X16', price: 46490, inStock: true }
];

  return (
      <>
          <div className="container m-2 text-white p-2">
              <h3>Products</h3>
              <div className="flex flex-col">
              {products.map((i) => (
                  <div className="border rounded-xl p-2 m-1  w-sm" key={i.id}>
                    <h3 className='font-bold'>Product Card</h3>  
                    <h3>ProductName:{i.name}</h3>
                    <h3>Price:{i.price}</h3>
                    <h3>Available:{i.inStock?'Instock':'Out of stock'}</h3>
                </div>
           ) )}    
            </div>
          </div>
      </>
  )
}

export default ProductList