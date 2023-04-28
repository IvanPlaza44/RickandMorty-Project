import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./type"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:  [...state.allCharacters, action.payload],
                allCharacters:  [...state.allCharacters, action.payload]
            }
        case FILTER:
            
            const filterCharacter = state.allCharacters.filter((char)=>{
                return char.gender === action.payload
            })
            return{
                ...state,
                myFavorites: filterCharacter
            }
        case ORDER:
            
            return{
                ...state,
                myFavorites: 
                    action.payload === "A" 
                    ? state.allCharacters.sort((a, b)=> a.id - b.id)
                    : state.allCharacters.sort((a, b) => b.id - a.id )

            }





        case REMOVE_FAV:
            const filtrado = state.myFavorites.filter((character) =>{
                return character.id !== Number(action.payload)
            })
            return{
                myFavorites: filtrado
            }
            
        default:{
            return{...state}
        }
    }

}
export default reducer;