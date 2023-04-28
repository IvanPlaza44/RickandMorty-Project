import {connect} from "react-redux"
import Card from "../Card/Card"
import React from "react"
import { filterCards,orderCards } from "../../redux/actions"
import { useDispatch } from "react-redux"
import style from "./Favorites.module.css"

const Favorites =({myFavorites})=>{

    const [aux, setAux] = React.useState(false)


    const dispatch = useDispatch()

    const handleOrder =(e)=>{
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }
    const handleFilter = (e)=>{
        dispatch(filterCards(e.target.value))
    }


    return(
        <div >
        <h1>---MY FAVORITES---</h1>
        <select onChange={handleOrder} name="" id="">
            <option value="order" disabled="disabled">Order By</option>
            <option value="A">Ascendente</option>
            <option value="B">Descendente</option>
        </select>
        <select onChange={handleFilter} name="" id="">
            <option value="filter" disabled="disabled">Filter By</option> 
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        <div className={style.divContainerFavorites}>

        {
            myFavorites?.map(character =>{
                return(
                    <Card
                        key = {character.id}
                        id = {character.id}
                        name = {character.name}
                        status = {character.status === "Alive" ?` ❤️ ${character.status} ❤️` : `☠️ ${character.status} ☠️`}
                        species = {character.species}
                        gender = {character.gender}
                        origin = {character.origin}
                        image = {character.image}
                        
                    />
                )
            })
        }
        </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)