import axios from "axios";
import { UserData } from "../../models/UserData";
import { Users } from "../../models/users";


axios.defaults.baseURL='http://localhost:8080/api'


export const signIn= async(user:UserData): Promise<any>=>{
    console.log("service---------",user);
    try {
        const response= await axios.post('/users/findByEmail',user);
        console.log("response post==========",response.data);
        console.log("respone status", response.status);    
        return response.data;

    } catch (error) {
        console.log(error.status);
        switch (error.status) {
            case 404:
            //    return navigate("/SignUp");
            console.log(404);
            return null;
        
            case 409:
                console.log("alart");
                
                alert("wrong password")
                break;    
            default:
                break;
        }
        
    }
    
    
}

export const signUp=async(user:Users):Promise<any>=>{
    // console.log("sign up-service");
    console.log("user in service ",user);
    try{
        const response=await axios.post('/users/createNewUser',user);
        console.log(response.data, "signup response");
        return response.data;
    }
    catch(error){
        console.log("error in signup",error);
        if(error.status===409){
         alert("הסיסמה תפוסה נסה אחרת")
        }
        
    }
    
   
}