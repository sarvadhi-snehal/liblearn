import { LOG_OUT,LOG_IN , DARK_MODE} from './actionTypes';

const intialState = {
    isLogin : false,
    isDark: false
}

const reducer = ( state =intialState, action)=>{
    switch(action.type) {
        case LOG_IN: 
        return{
            ...state,
            isLogin : !state.isLogin
        }
        case LOG_OUT: 
        return{
            ...state,
            isLogin : !state.isLogin
        }

        case DARK_MODE:
            return{
                ...state,
                isDark : !state.isDark
            }
        default:
            return state
    }
}

export default reducer;