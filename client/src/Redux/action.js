import axios from "axios";
import { LOGIN,LOGOUT } from "./actionTypes";
import { useNavigate } from "react-router-dom";


export const logIn=(data)=>({
    type:LOGIN,
    payload:data
})

export const logOut=()=>({
    type:LOGOUT,
})


export const GoogleLogin=()=>async(dispatch)=>{
    try {
     let res = await axios.get("http://localhost:6005/login/success", {
          withCredentials: true,
        })
        // console.log(res.data)
        if(res.data.user){
            dispatch(logIn(res.data.user));
        }else{
            return
        }
    } catch (error) {
        console.log('error',error)
    }
}
    


