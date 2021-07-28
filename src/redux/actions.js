import { LOG_OUT,LOG_IN} from './actionTypes';

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