import axios from "axios";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import style from "./Detail.module.css"

const Detail =()=>{
    const {id} = useParams()
    
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.container}>
            <h1 className={style.title}>CHARACTER DETAILS 🗒️</h1>
         <div className={style.description}>
            <h1>{character.name}</h1>
            <h1>{character.status === "Alive" ?` ❤️ ${character.status} ❤️` : `☠️ ${character.status} ☠️`}</h1>
            <h1>{character.species}</h1>
            <h1>{character.gender}</h1>
            <h1>{character?.origin?.name}</h1>
         </div>
        <img className={style.imageDetail} src={character.image} alt={character.name}/>
        </div>
    )
}
export default Detail;