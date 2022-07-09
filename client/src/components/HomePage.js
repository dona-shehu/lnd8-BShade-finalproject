import React,{useState} from "react";
import ProductPage from "./ProductPage";

function HomePage() {
  const [searchInput,setSearchInput]= useState("");
  function handelSearch(event){
   const typedValue = event.target.value;
   setSearchInput(typedValue)
   console.log(typedValue)
  }

  return (
    <div>
      <h1>Hujreh</h1>
      <input type="text" onChange={handelSearch}></input>
      <ProductPage searchInput={searchInput}        
      />
    </div>
  );
}

export default HomePage;
