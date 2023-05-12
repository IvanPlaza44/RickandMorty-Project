import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "./type"
import axios from "axios";

export const addFav =  (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
         const { data } = await axios.post(endpoint, character)
            if(!data.length) throw new Error("No hay personajes Favoritos")
            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
      }
   } catch (error) {
      console.log(error.message)
   }
    
 };

 export const removeFav = (id) => {
   try {
      const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
      return async (dispatch) => {
         const { data } = await axios.delete(endpoint)
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
           });
      };
   } catch (error) {
      console.log(error.message)
   }
 };

export const filterCards = (gender)=>{
    return{
        type: FILTER, 
        payload: gender
    }

}

export const orderCards = (order) =>{ // Puede ser A: Ascendente o D: Descendente
    return{
        type: ORDER,
        payload: order
    }
    
}
