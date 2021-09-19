import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [title, setTitle] = useState("Hello World");

  const changeTitle = () => {
    setTitle("Title Changed");
  }

  const[products, setProducts] = useState ([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  };

  useEffect(() => {
    console.log('Use Effect Running');
  });

  return (
    <div>
      <h2>{ title }</h2>
      <button onClick={ changeTitle }>Change Title</button>
      <ProductList products={ products }  deleteProduct={ deleteProduct } />
    </div>
  );
}

export default App;
