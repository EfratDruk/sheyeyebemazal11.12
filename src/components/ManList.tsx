import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Man } from "../models/man";
import { deleteExistingMan, fetchMen } from "../redux/features/manSlice";
import { AppDispatch, RootState } from "../store";


// interface ManListProps {
//     filterId?: number;  // ה-ID שנרצה לסנן לפי
// }
const ManList: React.FC = () => {
    const location = useLocation();
    const { filterId } = location.state || {};
    const dispatch = useDispatch<AppDispatch>();
    const { men, error } = useSelector((state: RootState) => state.man);
    // const filteredMen = filterId ? men.filter(man => man.id === filterId) : men;
    const navigate=useNavigate();

    //  const matchmakers=useSelector((state:RootState)=>state.matchmakers.matchmakers);


    useEffect(()=>{
        dispatch(fetchMen())
    },[dispatch])


    const handleDetails = (id: number) => {
        navigate('/ShowMan', {
            state: {
                manId: id,
            }
        });
    };

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
        dispatch(deleteExistingMan(id));
    }



    return (
        <>
            <h2>list of men</h2>
            {error && <p>{error}</p>}
            <ul>
                {men && men.map((man: Man) => (
                    <li key={man.id}>
                        {man.name}
                        <br />
                        {/* <button onClick={() => handleDelete(man.id)}>Delete</button> */}
                        <br />
                        <button onClick={() => handleDetails(man.id)}>ראה עוד</button>
                    </li>
                ))}
            </ul>
        </>
    );

}
export default ManList