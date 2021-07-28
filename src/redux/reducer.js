import { LOG_OUT,LOG_IN} from './actionTypes';

const intialState = {
    isLogin : false
}

const reducer = ( state =intialState, action)=>{
    switch(action.type) {
        case LOG_IN: 
        return{
            isLogin : !state.isLogin
        }
        case LOG_OUT: 
        return{
            isLogin : !state.isLogin
        }
        default:
            return state
    }
}

export default reducer;