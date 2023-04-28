import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import React from "react";
import { connect } from "react-redux"

function Card(props) {
   const {id,name,status,species,gender,origin,image, onClose, addFav, removeFav, myFavorites} = props;

   const [isFav, setIsFav] = React.useState(false);

   React.useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite =()=>{
      // if(isFav === true){ //ASI LO HABIA HECHO CON IF
      //    setIsFav(false)
      //    removeFav(id)
      // }else{
      //    setIsFav(true)
      //    addFav(props)
      // }
      isFav ? removeFav(id)  : addFav(props);   
      setIsFav(!isFav)
   }


   return (
      <div className={style.divContainer}>
         <button className= {style.closeButton} onClick={()=>onClose(id)}>X</button>

         <div className={style.info}>
         {
            isFav ? (
               <button className={style.favorite} onClick={handleFavorite}>❤️</button>
               ) : (
               <button className={style.favorite} onClick={handleFavorite}>🤍</button>
               )
         }
            <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>            
            <img src={image} alt='Character'/>   
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin.name}</h2>
         </div>   

      </div>
   );
}
   const mapStateToProps=(state) => {
      return{
         myFavorites: state.myFavorites
      }
   }

   const mapDispatchToProps =(dispatch)=>{
      return{
         addFav: (character)=>{dispatch(addFav(character))},
   
         removeFav: (id)=>{dispatch(removeFav(id))}
      }
   
   }
   
export default connect(mapStateToProps, mapDispatchToProps)(Card);
