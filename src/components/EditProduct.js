import { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router";

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async() => {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();
    setTitle(data.title);
    setPrice(data.price);
  }

  const updateProduct = async(e) => {
    e.preventDefault();
    const product = { title, price };
    await fetch(`http://localhost:8080/products/${id}`,{
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        'Content-type': 'application/json'
      }
    });
    history.push("/");
  }

  return (
    <div>
      <form onSubmit={updateProduct}>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title" />

        <label>Price</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" />

        <button>Update</button>
      </form>
    </div>
  );
}

export default EditProduct;