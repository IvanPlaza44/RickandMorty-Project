import axios from "axios";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import style from "./Detail.module.css"

const Detail = () => {
   const [character, setCharacter] = useState({})
   // console.log('soy el character detail', character);
   const { id } = useParams()

   useEffect(() => {
       axios(`http://localhost:3001/rickandmorty/character/${id}`)
       .then(({ data }) => {
          if (data.name) {
             setCharacter(data);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
       return setCharacter({});
    }, [id]);

   return(
       < div className={style.container}>
       <h1 className={style.title}>CHARACTER DETAILS.. 🗒️</h1>
       {
           character ? (
               <div >
                  <div className={style.description}>
                  <h1>Nombre: {character.name}</h1>
                  <h1>Status: {character.status === "Alive" ?` ❤️ ${character.status} ❤️` : `☠️ ${character.status} ☠️`}</h1>
                  <h1>Specie: {character.species}</h1>
                  <h1>Gender: {character.gender}</h1>
                  <h1>Origin: {character.origin?.name}</h1>
                  </div>
                  <img className={style.imageDetail} src={character.image} alt={character.name}/>
               </div>
           )
            :  (
               ""
            )
       }
       </div>
   )
}

export default Detail;