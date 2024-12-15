import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8080/api';

//maybe to return Users
export const upload=async(formData:FormData):Promise<string>=>{
// export const upload=async(user:string, imgFile:File):Promise<any>=>{



    console.log(formData);
const response=await axios.post('/users/upload',formData
    , {  
headers: {
    'Content-Type': 'multipart/form-data',
  },
}
);
return response.data;
}

  



  
