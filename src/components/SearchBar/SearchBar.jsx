import React from "react";
import style from "./SearchBar.module.css"



function SearchBar({onSearch}) {   
   const [id, setId] = React.useState("");


   const handleChange = (event) =>{
      setId(event.target.value)

   }

   return (
      <div className={style.searchBar}>

         <input className={style.input} value={id} onChange={handleChange} type='search' placeholder="Search Character..."/>

         <button className={style.add} onClick={() => onSearch(id)} >Agregar🔍</button>
      </div>
   );
}
export default SearchBar;
