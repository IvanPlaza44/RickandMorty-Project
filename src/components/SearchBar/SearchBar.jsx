import React from "react";
import style from "./SearchBar.module.css"



function SearchBar({onSearch}) {   
   const [id, setId] = React.useState("");


   const handleChange = (event) =>{
      setId(event.target.value)

   }

   return (
      <div className={style.container}>

         <input className={style.input} value={id} onChange={handleChange} type='Search' placeholder="Search Character..."/>

         <button className={style.btn} onClick={() => onSearch(id)} >🔍</button>
      </div>
   );
}
export default SearchBar;
