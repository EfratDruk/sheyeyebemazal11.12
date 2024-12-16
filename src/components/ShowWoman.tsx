// import { useDispatch, useSelector } from "react-redux"
// import { RootState } from "../store";
// import { useEffect } from "react";
// import { deleteExistingWoman, fetchWoman, fetchWomanById } from "../redux/features/womanSlice";
// import { Woman } from "../models/woman";
// import { useLocation } from "react-router-dom";
// import { WomanSharp } from "@mui/icons-material";



// const ShowWoman: React.FC = () => {
//     const dispatch = useDispatch();
//     const error = useSelector((state: RootState) => state.woman.error);
//     const selectedWoman= useSelector((state:RootState)=>state.woman.selectedWoman) 
//     const location = useLocation();
//     const id = location.state.womanId;
//     var woman: Woman;


//     useEffect(() => {
//         console.log("selectedWoman", selectedWoman);
//         console.log("id", id);
//         woman = dispatch(fetchWomanById(id))
//         console.log("woman in show", woman);
//     }, [dispatch])



//     const handleDelete = (id: number) => {
//         dispatch(deleteExistingWoman(id));
//     }



//     return (
//         <>
//             <h2> woman</h2>
//             {error && <p>{error}</p>}
//                 {selectedWoman && (
//                     <li key={selectedWoman.id}>
//                         {selectedWoman.name}
//                         <br />
//                         {selectedWoman.name}                
//                         {/* <button onClick={() => handleDelete(woman.id)}>עוד פרטים</button> */}
//                         <br />
//                         {/* <button onClick={() => handleUpdate(woman.id)}>Update</button> */}
//                     </li>
//                 )}

//         </>
//     );

// }
// export default ShowWoman

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Man } from "../models/man";
import { createNewAdjustment } from "../redux/features/AdjustmentSlice";
import { fetchManById } from "../redux/features/manSlice";
import { deleteExistingWoman, fetchWomanById, getDTO } from "../redux/features/womanSlice";
import { AppDispatch, RootState } from "../store";
import { logout } from "../redux/features/userSlice";


// Component Styles
const styles = {
  container: {
    width: '80%',
    maxWidth: '1200px',
    margin: '40px auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#8a2be2',
    marginBottom: '30px',
  },
  dataRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#5f4b8b',
  },
  value: {
    fontSize: '1.1rem',
    color: '#666',
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#8a2be2',
    borderBottom: '2px solid #8a2be2',
    paddingBottom: '8px',
    marginBottom: '15px',
  },
  herInfo: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#f3e5f5',
    borderRadius: '8px',
  },
  herInfoTitle: {
    fontSize: '1.6rem',
    color: '#5f4b8b',
    marginBottom: '15px',
  },
  herInfoText: {
    fontSize: '1.1rem',
    color: '#444',
    margin: '5px 0',
  },
  button: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#8a2be2',
    color: 'white',
    textAlign: 'center',
    fontSize: '1rem',
    borderRadius: '5px',
    marginTop: '20px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#6a1d9d',
  },
};

const ShowWoman: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const id = location.state?.womanId; // אם womanId מגיע מ-state ב-location
  // במקרה שאתה רוצה לוודא שה-id קיים לפני השימוש
  if (!id) {
    console.error("Id לא נמצא.");
    return <div>לא נמצא id</div>;
  }
  const selectedWoman = useSelector((state: RootState) => state.woman.selectedWoman);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate=useNavigate();
  const { imageUrl,error } = useSelector((state: RootState) => state.image);
  const user=JSON.parse(localStorage.getItem("user"));
  // var user:Man;


  useEffect(() => {
    console.log("maybe");
    console.log("id",id);
    if (id) {
      // dispatch(fetchWomanById(id));  
      dispatch(getDTO(id));
    }
    console.log("selected woman",selectedWoman);
    console.log("selected woman",selectedWoman.photo);

    
  }, [dispatch, id]);

   const handleDelete = () => {
     const confirmLogout = window.confirm("Are you sure you want to delete?");
     if (confirmLogout) {
       dispatch(logout());
       navigate("/"); // Navigate to the homepage
     }
   };

  // const handleCreateAdjustment=(id:number)=>{
  //      dispatch(createNewAdjustment(selectedWoman, user));
  // }

  // תיקון הפונקציה שמפנה את הנתונים לפונקציה של יצירת adjustment
const handleCreateAdjustment = async (id: number) => {
  const man:Man= (await dispatch(fetchManById(user.id))).payload;
  console.log("new man in show man",man);
  
  // נוודא שאתה שולח את selectedWoman ו-user בצורה נכונה
  const res=dispatch(createNewAdjustment({man, woman:selectedWoman}));
  console.log("man & woman in show woman", man,selectedWoman);
  console.log("res in show woman", res);
  if(res!=null){
    alert("Added successfully")
  }
};

if (!selectedWoman) {
  return <div className="error-message"> hereeeeeee No selected woman available.</div>;
}

  return (<>
    <div style={styles.container}>
      <h1 style={styles.header}>פרטי אישה</h1>
      {error && <p>{error}</p>}

      {selectedWoman ? (
        <>
          <div style={styles.dataRow}>
            <div style={styles.label}>שם:</div>
            <div style={styles.value}>{selectedWoman.name}</div>
          </div>
          <img
                  style={{ width: "50%", height: "50%", borderRadius: "8px" }}
                  src={`data:image/jpeg;base64,${selectedWoman.photo}`}
                  alt={"pic"} 
              />
          <div style={styles.dataRow}>
            <div style={styles.label}>אימייל:</div>
            <div style={styles.value}>{selectedWoman.email}</div>
          </div>
          <div style={styles.dataRow}>
            <div style={styles.label}>מין:</div>
            <div style={styles.value}>{selectedWoman.gender}</div>
          </div>
          <div style={styles.dataRow}>
            <div style={styles.label}>תאריך לידה:</div>
            <div style={styles.value}>{selectedWoman.dateOfBirth||null}</div>
          </div>
          <div style={styles.dataRow}>
            <div style={styles.label}>גובה:</div>
            <div style={styles.value}>{selectedWoman.hight} ס"מ</div>
          </div>

          <div style={styles.sectionTitle}>פרטי המשפחה</div>
          <div style={styles.dataRow}>
            <div style={styles.label}>שם האב:</div>
            <div style={styles.value}>{selectedWoman.father_name || 'לא צוין'}</div>
          </div>
          <div style={styles.dataRow}>
            <div style={styles.label}>שם האם:</div>
            <div style={styles.value}>{selectedWoman.mother_name || 'לא צוין'}</div>
          </div>

          <div style={styles.sectionTitle}>פרטי מידע נוספים</div>
          <div style={styles.dataRow}>
            <div style={styles.label}>סטטוס:</div>
            <div style={styles.value}>{selectedWoman.status || 'לא צוין'}</div>
          </div>

          <div style={styles.herInfo}>
            <h3 style={styles.herInfoTitle}>פרטי המידע שלה</h3>
            {/* height, minage, maxage */}
            {/* <p style={styles.herInfoText}><strong>גיל:</strong> {selectedWoman.her?.bea || 'לא צוין'}</p> */}
            <p style={styles.herInfoText}><strong>סקטור:</strong> {selectedWoman.her?.sector || 'לא צוין'}</p>
            <p style={styles.herInfoText}><strong>עישון:</strong> {selectedWoman.her?.smoking || 'לא צוין'}</p>
            <p style={styles.herInfoText}><strong>זקן:</strong> {selectedWoman.her?.beard || 'לא צוין'}</p>
          </div>

      

{user.gender!=='WOMAN' ? (
       <button
       style={styles.button}
       onClick={() => handleCreateAdjustment(selectedWoman.id)}
     >
         צור הצעה 
     </button>
      ) : (
          <button
            style={styles.button}
            onClick={() => handleDelete(selectedWoman.id)}
          >
              מחק 
          </button>
      )}


        </>
      ) : (
        <p>לא נמצאה אישה עם מזהה זה.</p>
      )}
    </div>
    </>
  );
};

export default ShowWoman;
