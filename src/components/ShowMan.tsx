// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store";
// import { useEffect } from "react";
// import { deleteExistingWoman, fetchWomanById } from "../redux/features/womanSlice";
// import { Woman } from "../models/woman";
// import { useLocation } from "react-router-dom";
// import { WomanSharp } from "@mui/icons-material";
// import UploadImage from "./UploadImage";

// // Component Styles
// const styles = {
//   container: {
//     width: '80%',
//     maxWidth: '1200px',
//     margin: '40px auto',
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//   },
//   header: {
//     textAlign: 'center',
//     fontSize: '2.5rem',
//     color: '#8a2be2',
//     marginBottom: '30px',
//   },
//   dataRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '10px 0',
//     borderBottom: '1px solid #ddd',
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: '1.1rem',
//     color: '#5f4b8b',
//   },
//   value: {
//     fontSize: '1.1rem',
//     color: '#666',
//     textAlign: 'left',
//   },
//   sectionTitle: {
//     fontSize: '1.3rem',
//     fontWeight: 600,
//     color: '#8a2be2',
//     borderBottom: '2px solid #8a2be2',
//     paddingBottom: '8px',
//     marginBottom: '15px',
//   },
//   herInfo: {
//     marginTop: '30px',
//     padding: '20px',
//     backgroundColor: '#f3e5f5',
//     borderRadius: '8px',
//   },
//   herInfoTitle: {
//     fontSize: '1.6rem',
//     color: '#5f4b8b',
//     marginBottom: '15px',
//   },
//   herInfoText: {
//     fontSize: '1.1rem',
//     color: '#444',
//     margin: '5px 0',
//   },
//   button: {
//     display: 'inline-block',
//     padding: '12px 24px',
//     backgroundColor: '#8a2be2',
//     color: 'white',
//     textAlign: 'center',
//     fontSize: '1rem',
//     borderRadius: '5px',
//     marginTop: '20px',
//     textDecoration: 'none',
//     transition: 'background-color 0.3s',
//   },
//   buttonHover: {
//     backgroundColor: '#6a1d9d',
//   },
// };

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteExistingMan, fetchDto, fetchManById } from "../redux/features/manSlice";
import "../showDetails.css";
import { AppDispatch, RootState } from "../store";
import { fetchWomanById } from "../redux/features/womanSlice";
import { createNewAdjustment } from "../redux/features/AdjustmentSlice";
import { logout } from "../redux/features/userSlice";


// const ShowMan: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const error = useSelector((state: RootState) => state.woman.error);
//   const selectedMan = useSelector((state: RootState) => state.man.selectedMan);
//   const location = useLocation();
// //   const id = location.state?; 
//   let man: Man;

//   useEffect(() => {
//     if (id) {
//       dispatch(fetchWomanById(id));  // כאן שולחים את הפעולה שמביאה את המידע
//     }
//   }, [dispatch, id]);

//   const handleDelete = (id: number) => {
//     dispatch(deleteExistingWoman(id));
//   };
  // const handleUpdate=(id:number)=>{
    //show popup of details to change and then send the id and the changed to update()
  // }

//   return (<>
//     <div style={styles.container}>
//       <h1 style={styles.header}>פרטי אישה</h1>
//       {error && <p>{error}</p>}

//       {selectedWoman ? (
//         <>
//           <div style={styles.dataRow}>
//             <div style={styles.label}>שם:</div>
//             <div style={styles.value}>{selectedWoman.name}</div>
//           </div>
//           <div style={styles.dataRow}>
//             <div style={styles.label}>אימייל:</div>
//             <div style={styles.value}>{selectedWoman.email}</div>
//           </div>
//           <div style={styles.dataRow}>
//             <div style={styles.label}>מין:</div>
//             <div style={styles.value}>{selectedWoman.gender}</div>
//           </div>
//           <div style={styles.dataRow}>
//             <div style={styles.label}>תאריך לידה:</div>
//             <div style={styles.value}>{selectedWoman.dateOfBirth || 'לא צוין'}</div>
//           </div>
//           <div style={styles.dataRow}>
//             <div style={styles.label}>גובה:</div>
//             <div style={styles.value}>{selectedWoman.hight} ס"מ</div>
//           </div>

//           <div style={styles.sectionTitle}>פרטי המשפחה</div>
//           <div style={styles.dataRow}>
//             <div style={styles.label}>שם האב:</div>
//             <div style={styles.value}>{selectedWoman.father_name || 'לא צוין'}</div>
//           </div>
//           <div style={styles.dataRow}>
//             <div style={styles.label}>שם האם:</div>
//             <div style={styles.value}>{selectedWoman.mother_name || 'לא צוין'}</div>
//           </div>

//           <div style={styles.sectionTitle}>פרטי מידע נוספים</div>
//           <div style={styles.dataRow}>
//             <div style={styles.label}>סטטוס:</div>
//             <div style={styles.value}>{selectedWoman.status || 'לא צוין'}</div>
//           </div>

//           <div style={styles.herInfo}>
//             <h3 style={styles.herInfoTitle}>פרטי המידע שלה</h3>
//             <p style={styles.herInfoText}><strong>גיל:</strong> {selectedWoman.her?.age || 'לא צוין'}</p>
//             <p style={styles.herInfoText}><strong>סקטור:</strong> {selectedWoman.her?.sector || 'לא צוין'}</p>
//             <p style={styles.herInfoText}><strong>עישון:</strong> {selectedWoman.her?.smoking || 'לא צוין'}</p>
//             <p style={styles.herInfoText}><strong>זקן:</strong> {selectedWoman.her?.beard || 'לא צוין'}</p>
//           </div>

//           <button
//             style={styles.button}
//             onClick={() => handleDelete(selectedWoman.id)}
//           >
//               מחק 
//           </button>
//         </>
//       ) : (
//         <p>לא נמצאה אישה עם מזהה זה.</p>
//       )}
//     </div>
//     </>
//   );
// };

// export default ShowMan;


const ShowMan: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const id = location.state?.manId; // אם womanId מגיע מ-state ב-location
  // במקרה שאתה רוצה לוודא שה-id קיים לפני השימוש
  if (!id) {
    console.error("Id לא נמצא.");
    return <div>לא נמצא id</div>;
  }

  // const error = useSelector((state: RootState) => state.woman.error);
  const navigate=useNavigate();
  const selectedMan = useSelector((state: RootState) => state.man.selectedMan);
  const { imageUrl,error } = useSelector((state: RootState) => state.image);
  // const id=selectedMan?.id;
  const user=JSON.parse(localStorage.getItem('user'))
  // const { imageUrl,error } = useSelector((state: RootState) => state.image);


  useEffect(() => {
    console.log("maybe");
    console.log("id",id);
    
    if (id) {
      // dispatch(fetchManById(id)); 
      dispatch(fetchDto(id));
    }
    console.log("selected woman",selectedMan);
    console.log("selected woman",selectedMan);

  }, [dispatch, id]);

  const handleDelete = () => {
     const confirmLogout = window.confirm("Are you sure you want to delete?");
     if (confirmLogout) {
       dispatch(logout());
       navigate("/"); // Navigate to the homepage
     }
   };

  const handleCreateAdjustment = async (id: number) => {
    const woman:Woman= (await dispatch(fetchWomanById(user.id))).payload;
    console.log("new woman in show woman",woman);
    
    // נוודא שאתה שולח את selectedWoman ו-user בצורה נכונה
    const res=dispatch(createNewAdjustment({man:selectedMan, woman}));
    console.log("man & woman in show woman", selectedMan,woman);
    console.log("res in show woman", res);
    if(res!=null){
      alert("Added successfully")
    }
  };

  if (!selectedMan) {
    return <div className="error-message"> hgfc  No selected man available.</div>;
  }

  return (
    <div className="woman-details-container">
      <div className="woman-details-header">
        <h1 className="woman-name">{selectedMan.name}</h1>
        {/* <img
          className="woman-image"
          src={selectedMan.imagePath}
          alt={selectedMan.name}
        /> */}
              <img
                        className="woman-image"
                  style={{ width: "50%", height: "50%", borderRadius: "8px" }}
                  src={`data:image/jpeg;base64,${selectedMan.photo}`}
                  // src={selectedMan.imagePath}
                  alt={"pic"} 
              />
      </div>
      <div className="woman-details-info">
        <div className="info-item">
          <strong>Email:</strong> {selectedMan.email}
        </div>
        <div className="info-item">
          <strong>Phone:</strong> {selectedMan.phone}
        </div>
        <div className="info-item">
          <strong>Date of Birth:</strong> {new Date(selectedMan.dateOfBirth).toLocaleDateString()}
        </div>
        <div className="info-item">
          <strong>Gender:</strong> {selectedMan.gender}
        </div>
        <div className="info-item">
          <strong>Languages:</strong> {selectedMan.languages.join(", ")}
        </div>
        <div className="info-item">
          <strong>License:</strong> {selectedMan.license}
        </div>
        <div className="info-item">
          <strong>Status:</strong> {selectedMan.status}
        </div>
        <div className="info-item">
          <strong>Height:</strong> {selectedMan.height} cm
        </div>
        <div className="info-item">
          <strong>Budget:</strong> ${selectedMan.budget}
        </div>
        <div className="info-item">
          <strong>Father's Name:</strong> {selectedMan.father_name}
        </div>
        <div className="info-item">
          <strong>Mother's Name:</strong> {selectedMan.mother_name}
        </div>
      </div>
      {user.gender!=='MAN' ? (
       <button
       onClick={() => handleCreateAdjustment(selectedMan.id)}
     >
         צור הצעה 
     </button>
      ) : (
          <button
            onClick={() => handleDelete(selectedMan.id)}
          >
              מחק 
          </button>
      )}
    </div>
  );
};

export default ShowMan;
