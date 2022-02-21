import logo from './logo.svg';
import './App.css';
import axios from "axios"; //es6 syntax
import { useEffect, useState } from 'react';
import RenderProductData from './renderProductData';
import "./styles.css";

//parent component
function App() {

  const[productData, setProductData] = useState(null);

  useEffect( () =>{
    axios
      .get("https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0")
     
      .then((data) =>{
        //console.log(data.data)
        setProductData(data.data);
      });
      
    //   fetch("https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0")
    //    .then((data) => {
    //      return data.json()
    //    })
    //    .then((data) => {
    //     console.log(data.data)
    //   })
    }, []);
  return (
    <div className="App">
     <h1>Ecommerse Application</h1>
    {productData && <RenderProductData data = {productData.store_items}/>}
    {/* child component will be rendered once we have some data inside product data */}
    </div>
  );
}

export default App;
