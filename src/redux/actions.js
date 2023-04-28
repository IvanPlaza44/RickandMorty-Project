import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "./type"

export const addFav = (character)=>{
    return {type: ADD_FAV, payload: character}}

export const removeFav = (id)=>{
    return {type: REMOVE_FAV, payload: id}}

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