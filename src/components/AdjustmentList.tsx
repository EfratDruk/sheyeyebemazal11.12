import React, { useEffect, useState } from "react";
import { fetchMen } from "../redux/features/manSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchWoman } from "../redux/features/womanSlice";
import { Man } from "../models/man";
import { Woman } from "../models/woman";
import { AppDispatch, RootState } from "../store";
import { Adjustment } from "../models/adjustment";
import { fetchAdjustmentById, fetchAdjustments, updateExistingAdjustment } from "../redux/features/AdjustmentSlice";
import { FormLabel, OutlinedInput } from "@mui/material";
import { Matchmaker } from "../models/matchmaker";


export default function AdjustmentList() {
    const dispatch = useDispatch<AppDispatch>();
    const men = useSelector((state: RootState) => state.man.men);
    const women = useSelector((state: RootState) => state.woman.woman);
    const adjustments = useSelector((state: RootState) => state.adjustment.adjustments);
    const selectedAdjustment = useSelector((state: RootState) => state.adjustment.selectedAdjustment)
    const user = JSON.parse(localStorage.getItem('user'));


    // switch (user?.gender) {
    //     case "MAN":
    //         const man:Man=user;
    //         break;
    //     case "WOMAN":
    //         const woman:Woman=user;
    //     break;    

    //     default:
    //         const matchmaker:Matchmaker=user;
    //         break;
    // }
    console.log("men", men);
    console.log("women", women);
    console.log("adjustments", adjustments);



    // useEffect(() => {
    //     dispatch(fetchMen()); // טוען את הנתונים עבור men
    //     dispatch(fetchWoman()); // טוען את הנתונים עבור women
    // }, [dispatch]);


    const displayAdjustment = async () => {
        for (const element of women) {
            console.log("------------", element.her);

            // כאן אתה יכול להוסיף קריאה אסינכרונית אם יש
            const filteredMen = await Promise.all(
                men.map(async (man) => {
                    // אתה יכול להכניס כאן לוגיקה אסינכרונית, למשל קריאה ל-API
                    const matches = man.beard === element.her.beard &&
                        man.future === element.her.future &&
                        man.smoking === element.her.smoking &&
                        man.studies === element.her.studies &&
                        man.his.cover === element.cover;

                    // מחזירים את האזיש אם הוא תואם את הקריטריונים
                    return matches ? man : null;
                })
            );

            // מסננים nullים מהממפה ומדפיסים את התוצאות
            console.log(filteredMen);

            const validMen = filteredMen.filter((man) => man !== null);
            console.log(validMen);
        }
    };

    useEffect(() => {
        dispatch(fetchAdjustments())
    }, [])


    const handleInputChange = (id: number) => {
        //update the descadtoup
    }
    // const handleChose = async (id: number) => {
    //     const adjustment = (await dispatch(fetchAdjustmentById(id))).payload;
    //     console.log("to update", adjustment);
        
    //     dispatch(updateExistingAdjustment({id, adjustment}))
    // }

    const handleAdd = () => {

    }

    return (<>
        <h1>hello to adjustment</h1>
        <button onClick={handleAdd}>הוסף הצעה</button>
        <ul>
            {adjustments && adjustments.map((adjustment: Adjustment) => (
                <li key={adjustment.id}>
                    {adjustment.manId.name}
                    <br />
                    {adjustment.womanId.name}
                    <br />
                    {adjustment.statusAdjustment}
                    {adjustment.matchmakerId && (
                        <>
                            {adjustment.matchmakerId.name}
                            <FormLabel htmlFor="description" required>
                                Minimum Age
                            </FormLabel>
                            <OutlinedInput
                                id="description"
                                name="description"
                                type="description"
                                placeholder=""
                                autoComplete=""
                                value={adjustment.description}
                                onChange={handleInputChange(adjustment.id)}
                                required
                                size="small"
                            />
                        </>
                    )}
                    {/* <button onClick={() => handleChose(adjustment.id)}>Chose</button> */}
                    <br />
                    {/* <button onClick={() => handleUpdate(matchmaker.id)}>Update</button> */}
                </li>
            ))}
        </ul>

    </>
    )
}