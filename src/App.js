import './index.css';
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
  const getCategoryProducts = (e) => {
    const id = e.target.value
    console.log(id)
    axios.get(`https://beyound.herokuapp.com/api/categories/${id}?populate=products`)
    .then(res => {
      const sentProds = res.data.data.attributes.products.data;
      console.log(sentProds)
      setProds(sentProds)
      for (let i = 0; i < categories.length; i++) {
        const e = categories[i];
        if (e.id == id) {
          setCat(e.attributes.name)
        }
      }
      setProd(``)
    })
  };
  
  // Set Product Name
  const setProductName = (e) => {
    const name = e.target.value
    console.log(name)
    setProd(`${name}`)
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

      <div className="container">
        <form>
          <div class="form-group mx-5 my-5">
            <label for="exampleFormControlSelect1">Categories</label>
            <select onChange={(e) => getCategoryProducts(e)} class="form-control" id="exampleFormControlSelect1">
              <option value={""} disabled selected >Select category</option>
            {categories.map((cat)=>(
                <option key={cat.id} value={cat.id}>{cat.attributes.name}</option>
              ))}
            </select>
          </div>
          
          <div class="form-group mx-5 my-5">
            <label for="exampleFormControlSelect1">Products</label>
            <select onChange={(e) => setProductName(e)} class="form-control" id="exampleFormControlSelect1">
              <option value={""} >Select product</option>
            {products.map((prod)=>(
                <option key={prod.id}>{prod.attributes.name}</option>
              ))}
            </select>
          </div>

        </form>
          <button onClick={save} class="btn btn-primary">Save</button>
      </div>
    </div>
  );
}

export default App;
