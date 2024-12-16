import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpload, updateImage } from "../redux/features/imgSlice";
import { updateUser } from "../redux/features/userSlice";

import { AppDispatch, RootState } from "../store";

const UploadImage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  //img url
  const { imageUrl, error } = useSelector((state: RootState) => state.image);
  //take the user object from local stroage
  const user = JSON.parse(localStorage.getItem('user'));
  //take the user object from store
  let userState = useSelector((state: RootState) => state.user.user);

  const [selectedImage, setSelectedImage] = useState(null);
  const [photo, setPhoto] = useState("");

  //take photo from input
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("first");
    if (event.target.files) {
      setSelectedImage(event.target.files[0]);
      console.log("event.target.files[0]", event.target.files[0]);
    }
  };




// const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (!file) return;
  
//     const formData = new FormData();
//     formData.append('image', file);
//     formData.append("user", JSON.stringify(user));
//     // Send raw file
  
//     try {
//       await axios.post('http://localhost:8080/api/users/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//     } catch (error) {
//       console.error('Upload failed:', error);
//     }
//   };




  //update
  const handleUpload = async () => {
    // if null -return
    if (!selectedImage || !user) {
      console.log("!img||!user", selectedImage, user);
      return;
    }

    //בעיה:
    //הפונקציה הרגילה של עדכון מן/וומן בJAVA
    //לא יכולה לקבל כזה גודל של מחרוזת אז צריך לבדוק מה בדיוק לעשות ואיך לסדר את זה אולי עם  דיטיאו
    
    //create file of FormData
    const formData = new FormData();

    formData.append("image", selectedImage);
    formData.append("user", JSON.stringify(user));

    console.log("form data before sending", formData);

    try {
      //data about uploaded img
      const response = await dispatch(fetchUpload(formData));
      console.log("response after send", response);



      if (response.meta.requestStatus === "fulfilled") {
        //save only path
        const jsonResponse = response.payload;
        //לא יודעת איפה זה מעדכן לבדוק!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        setPhoto(jsonResponse.photo);

        console.log("jsonResponse", jsonResponse.photo);

        console.log("userState?.imagePath", userState?.imagePath);
        console.log(12345567);
        

        //עדכון בסטור   טוב כי שורה אחרי ז התשובה היא טרו
        const updated = { ...userState, imagePath: jsonResponse.photo };
        // const updated2 = { ...userState, imagePath: selectedImage };

        console.log(345);
        // dispatch(updateUser(updated2));

        // dispatch(updateImage(updated));
   
        // if(userState?.imagePath==null){
        console.log(updated.imagePath);
        

        if (updated.imagePath == null) {
          console.log(345);
          
          console.log("i want update user state", jsonResponse);
          //עדכון טוב במשתנה
         // userState = { ...user,...user.imagePath=jsonResponse.photo};

          console.log("userState", userState);
          //עדכון בסטור
          dispatch(updateUser(userState));
        // }
        //   if(user?.gender==="MAN"){
        //   dispatch(updateExistingMan(updated));
        // }else{
        //   dispatch(updateExistingWoman(updated));
        }
      } else {
        console.log("faild to upload img :(");
      }
    } catch (error) {
      console.log("error in handle", error.message);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" 
      onChange={handleImageChange}
       />
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

      {error && <p style={{ color: "red" }}>שגיאה: {error}</p>}
    </div>
  );
};

export default UploadImage;
