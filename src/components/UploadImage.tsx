import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchUpload } from '../redux/features/imgSlice';
import { fetchManById, updateExistingMan } from '../redux/features/manSlice';
import { updateExistingWoman } from '../redux/features/womanSlice';
import { updateUser } from '../redux/features/userSlice';


const UploadImage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  //img url 
  const { imageUrl,error } = useSelector((state: RootState) => state.image);
  //take the user object from local stroage
  const user=JSON.parse(localStorage.getItem("user"));
  //take the user object from store
  var userState=useSelector((state:RootState)=>state.user.user)

  const [selectedImage, setSelectedImage] = useState(null);
  const [photo, setPhoto]=useState('');



//take photo from input
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   console.log("first");
    if (event.target.files) {
      setSelectedImage(event.target.files[0]);
      console.log("event.target.files[0]",event.target.files[0]);
      
    }
  };


  //update
const handleUpload=async()=>{
  // if null -return
  if(!selectedImage||!user){
    console.log("!img||!user",selectedImage, user); 
  return;
}



//בעיה:
//הפונקציה הרגילה של עדכון מן/וומן בJAVA
//לא יכולה לקבל כזה גודל של מחרוזת אז צריך לבדוק מה בדיוק לעשות ואיך לסדר את זה אולי עם  דיטיאו


//create file of FormData
  const formData=new FormData();

   formData.append("image",selectedImage);
   formData.append("user",JSON.stringify(user));

   console.log("form data before sending",formData);
   
try {
  //data about uploaded img
  const response= await dispatch(fetchUpload(formData));
  console.log("response after send",response);
  


  if(response.meta.requestStatus==="fulfilled"){

    //save only path
    const jsonResponse=response.payload;
    //לא יודעת איפה זה מעדכן לבדוק!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    setPhoto(jsonResponse.photo);


    console.log("jsonResponse",jsonResponse.photo);
    console.log("userState?.imagePath",userState?.imagePath);

    //עדכון בסטור כנראה לא טוב כי שורה אחרי ז התשובה היא טרו
    const updated = { ...userState, imagePath: jsonResponse.photo };

    if(userState?.imagePath==null){
      console.log("i want update user state", jsonResponse);
      //עדכון טוב במשתנה
      userState = { ...user, imagePath: jsonResponse.photo };

        console.log("userState",userState);
        //עדכון בסטור
        dispatch(updateUser(userState));   
    }
  //   if(user?.gender==="MAN"){
  //   dispatch(updateExistingMan(updated));
  // }else{
  //   dispatch(updateExistingWoman(updated));
  // }

 
  }else{
    console.log("faild to upload img :("); 
  }
  
} catch (error) {
  console.log("error in handle",error.message);
  
}
};


  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <p>בחרת תמונה: {selectedImage.name}</p>}
      
      <button onClick={handleUpload}>
        {/* {loading ? 'מעלה תמונה...' : 'העלה תמונה'} */}
        good night
      </button>

      {imageUrl && (
        <div>
          <h3>תמונה שהועלתה:</h3>
          {/* <img src={imageUrl} alt="Uploaded" style={{ width: '200px' }} /> */}
          <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src={`data:image/jpeg;base64,${imageUrl}`}
                  alt={"pic"} 
              />
        </div>
      )}

      {error && <p style={{ color: 'red' }}>שגיאה: {error}</p>}
    </div>
  );
};

export default UploadImage;
