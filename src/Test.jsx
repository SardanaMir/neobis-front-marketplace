import React, { useState } from 'react';

function ProductForm() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 150 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState({ id: null, name: '', price: 0 });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setEditingProduct({ id: product.id, name: product.name, price: product.price });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const handleSaveChanges = () => {
    setProducts(products.map(product => (product.id === editingProduct.id ? editingProduct : product)));
    setSelectedProduct(null);
  };

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id} onClick={() => handleProductClick(product)}>
            {product.name}
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div>
          <h2>{selectedProduct.name}</h2>
          <form>
            <div>
              <label>Название: </label>
              <input type="text" name="name" value={editingProduct.name} onChange={handleInputChange} />
            </div>
            <div>
              <label>Цена: </label>
              <input type="number" name="price" value={editingProduct.price} onChange={handleInputChange} />
            </div>
            <button type="button" onClick={handleSaveChanges}>Сохранить изменения</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductForm;
