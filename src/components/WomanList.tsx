import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Woman } from "../models/woman";
import { deleteExistingWoman, fetchWoman } from "../redux/features/womanSlice";
import { AppDispatch, RootState } from "../store";


// interface WomanListProps {
//     filterId?: number|undefined;  // ה-ID שנרצה לסנן לפי
// }
const WomanList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    // const { women, error } = useSelector((state: RootState) => state.women);
    const women = useSelector((state: RootState) => state.woman.woman);
    const error = useSelector((state: RootState) => state.woman.error);
    const navigate = useNavigate();


    useEffect(() => {
        console.log("woman list");
        
        dispatch(fetchWoman())
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(updateExistingMatchmaker({
    //         id:1,
    //         matchmaker:{
    //         "id": 1,
    //         "name": "noach",
    //         "password": "1234",
    //         "email": "updated@gmail.com",
    //         "phone": "0507150002"
    //     }}))
    // }, [dispatch])


    const handleDelete = (id: number) => {
        dispatch(deleteExistingWoman(id));
    }
    
    const handleDetails = (id: number) => {
        navigate('/ShowWoman', {
            state: {
                womanId: id,
            }
        });
    };




return (
    <>
        <h2>list of women</h2>
        {error && <p>{error}</p>}
        <ul>
            {women && women.map((woman: Woman) => (
                <li key={woman.id}>
                    {woman.name}
                    <br />
                    <button onClick={() => handleDetails(woman.id)}>עוד פרטים</button>
                    <br />
                    {/* <button onClick={() => handleUpdate(matchmaker.id)}>Update</button> */}
                </li>
            ))}
        </ul>
    </>
);

}
export default WomanList