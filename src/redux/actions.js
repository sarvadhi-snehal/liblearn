import { LOG_OUT,LOG_IN, DARK_MODE} from './actionTypes';

export const logIn = () =>{
    return{
        type: LOG_IN,
        info: 'User Login',
  
    }
}

export const logOut = () =>{
    return{
        type: LOG_OUT,
        info: 'User Log Out',
        
    }
}
export const darkMode = () =>{
    return{
        type : DARK_MODE,
        info : 'convert to dark mode',
    }
}