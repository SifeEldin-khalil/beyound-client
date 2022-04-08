import './index.css';
import Button from './components/Button';
import Header from './components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => { 
  // setVariables 
  const [categories, setCats] = useState([])
  const [products, setProds] = useState([])
  const [category, setCat] = useState("")
  const [product, setProd] = useState("")
  
  // Get All Categories
  useEffect( () => {
    axios.get(`https://beyound.herokuapp.com/api/categories`)
    .then(res => {
      const sentCats = res.data.data;
      setCats(sentCats);
    })
  }, []); 

  // Get Products On Select Category
  const getCategoryProducts = (id, nameToSet) => {
    axios.get(`https://beyound.herokuapp.com/api/categories/${id}?populate=products`)
    .then(res => {
      const sentProds = res.data.data.attributes.products.data;
      console.log(sentProds)
      setProds(sentProds)
      setCat(nameToSet)
      setProd(``)
    })
  };
  
  const save = () => {
    console.log("Saved")
    console.log(product, category)
  }
  
  
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Beyound</a>
        </div>
      </nav>

      <header className="App-header">
      
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle mx-5 my-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        
          {categories.map((cat)=>(
            <li key={cat.id} onClick={() => getCategoryProducts(cat.id, cat.attributes.name)} >
              <a class="dropdown-item" href="#">{cat.attributes.name}</a>
            </li>
          ))}
        </ul>
        <Header
          title = {category}
        />
      </div>
      
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle mx-5 my-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Products
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        
          {products.map((prod)=>(
            <li key={prod.id} onClick={() => setProd(`${prod.attributes.name}`)}>
              <a class="dropdown-item" href="#">{prod.attributes.name}</a>
              </li>
          ))}
        </ul>
        <Header
          title = {product}
        />
      </div>

        <Button
        text = 'Save'
        color = 'green'
        textColor = 'white'
        onClick ={save}
        />
      </header>
    </div>
  );
}

export default App;
