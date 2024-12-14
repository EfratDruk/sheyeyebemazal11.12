import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { useEffect } from "react";
import { deleteExistingSiblings, fetchSiblings } from "../redux/features/siblingsSlice";


const SiblingsList: React.FC = () => {
    const dispatch = useDispatch();
    const { siblings, error } = useSelector((state: RootState) => state.siblings);


    useEffect(()=>{
        dispatch(fetchSiblings())
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
        dispatch(deleteExistingSiblings(id));
    }



    return (
        <>
            <h2>list</h2>
            {error && <p>{error}</p>}
            <ul>
                {siblings && siblings.map((siblings: { id: number; name: string}) => (
                    <li key={siblings.id}>
                        {siblings.name}
                        <br />
                        <button onClick={() => handleDelete(siblings.id)}>Delete</button>
                        <br />
                        {/* <button onClick={() => handleUpdate(matchmaker.id)}>Update</button> */}
                    </li>
                ))}
            </ul>
        </>
    );

}
export default SiblingsList
