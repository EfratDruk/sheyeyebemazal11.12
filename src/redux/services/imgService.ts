import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8080/api';

//maybe to return Users
export const upload=async(formData:FormData):Promise<any>=>{
// export const upload=async(user:string, imgFile:File):Promise<any>=>{
    // const formData = new FormData();
    // formData.append("user",user||'');
    // formData.append("image",imgFile);
    // console.log(user);

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

  



  
