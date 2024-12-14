import { useDispatch, useSelector } from "react-redux"
import { Matchmaker } from "../models/matchmaker"
import { AppDispatch, RootState } from "../store";
import { deleteExistingMatchmaker, fetchMatchmakers, updateExistingMatchmaker } from "../redux/features/matchmakerSlice";
import { useEffect } from "react";
import { createMatchmaker } from "../redux/services/matchmakerService";


const MatchmakerList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    // const { matchmakers, error } = useSelector((state: RootState) => state.matchmakers);
     const matchmakers=useSelector((state:RootState)=>state.matchmaker.matchmakers);
     const error=useSelector((state:RootState)=>state.matchmaker.error);


    useEffect(()=>{
        dispatch(fetchMatchmakers())
        console.log("list");
        
    },[dispatch])

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
        dispatch(deleteExistingMatchmaker(id));
    }



    return (
        <>
            <h2>list</h2>
            {error && <p>{error}</p>}
            <ul>
                {matchmakers && matchmakers.map((matchmaker:Matchmaker) => (
                    <li key={matchmaker.id}>
                        {matchmaker.name}
                        <br />
                        {matchmaker.email}
                        <br />
                        <button onClick={() => handleDelete(matchmaker.id)}>Delete</button>
                        <br />
                        {/* <button onClick={() => handleUpdate(matchmaker.id)}>Update</button> */}
                    </li>
                ))}
            </ul>
        </>
    );

}
export default MatchmakerList