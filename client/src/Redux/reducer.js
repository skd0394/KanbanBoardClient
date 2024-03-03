import {LOGOUT,LOGIN} from "./actionTypes"

let initialState={
    isAuthenticated:false,
    user:null
}

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGOUT:
            console.log('logouttttttttt')
            return{
                ...state,
                isAuthenticated: false,
                user: []
            }
        case LOGIN: 
        console.log('helooooooooo',action.payload)
            return{
                ...state,
                isAuthenticated : true,
                user : action.payload
            };
        
        default:return state;
    }
}