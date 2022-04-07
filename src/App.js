import './index.css';
import Header from './components/Header';
import Button from './components/Button';
import axios from 'axios';
import { useState } from 'react';

function App() { 
  const [categories, setCats] = useState([])
  const [products, setProds] = useState([])

  const getCategories = () => {
    axios.get(`https://beyound.herokuapp.com/api/categories`)
      .then(res => {
        const sentCats = res.data.data;
        setCats(sentCats)
      })
  }
  
  const getProducts = () => {
    axios.get(`https://beyound.herokuapp.com/api/products`)
      .then(res => {
        const sentProds = res.data.data;
        console.log(sentProds)
        setProds(sentProds)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header 
        title = {categories.map((cat)=>(
          <h5 key={cat.id}>{cat.attributes.name}</h5>
        ))}
        />
        <Header 
        title = {products.map((prod)=>(
          <h5 key={prod.id}>{prod.attributes.name}</h5>
        ))}
        />
        <Button
        text = 'Get Catagories'
        color = 'green'
        textColor = 'white'
        onClick ={getCategories}
        />
        <Button
        text = 'Get Products'
        color = 'yellow'
        textColor = 'black'
        onClick ={getProducts}
        />
      </header>
    </div>
  );
}

export default App;
