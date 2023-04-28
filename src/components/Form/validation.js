const validation = (userData)=>{
    let errors = {};
    if(!/^\S+@\S+\.\S{2,}$/i.test(userData.email)){
        errors.email = "El email es inválido";
    }
    if(userData.email.length > 35){
        errors.email = "El email o puede superar los 35 caracteres"
    }

    if(!/^(?=.*\d).{6,10}$/.test(userData.password)){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    } 

    return errors;

}

export default validation;