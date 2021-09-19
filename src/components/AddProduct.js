import { useState } from 'react';
import { useHistory } from "react-router";

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();

  const saveProduct = async(e) => {
    e.preventDefault();
    const product = { title, price };
    await fetch('http://localhost:8080/products',{
        method: "POST",
        body: JSON.stringify(product),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    history.push("/");
}

  return (
    <div>
      <form onSubmit={saveProduct}>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title" />

        <label>Price</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />

        <button>Save</button>
      </form>
    </div>
  );
}

export default AddProduct;