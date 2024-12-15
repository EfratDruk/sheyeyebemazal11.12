import React, { useEffect, useState } from "react";
// import { fetchMen } from "../redux/features/manSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchWoman } from "../redux/features/womanSlice";
import { Man } from "../models/man";
import { Woman } from "../models/woman";
import { AppDispatch, RootState } from "../store";
import { Adjustment } from "../models/adjustment";
import {
  descriptionUpdate,
  fetchAdjustmentById,
  fetchAdjustments,
  updateExistingAdjustment,
} from "../redux/features/AdjustmentSlice";
import { FormLabel, OutlinedInput } from "@mui/material";
import { Matchmaker } from "../models/matchmaker";

export default function AdjustmentList() {
  const dispatch = useDispatch<AppDispatch>();
  const men = useSelector((state: RootState) => state.man.men);
  const women = useSelector((state: RootState) => state.woman.woman);
  const adjustments = useSelector(
    (state: RootState) => state.adjustment.adjustments
  );
  const selectedAdjustment = useSelector(
    (state: RootState) => state.adjustment.selectedAdjustment
  );
  const user = JSON.parse(localStorage.getItem("user"));
  const [description, setDescription] = useState("");
  const [isDisable, setIsDisable]=useState(false);

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
          const matches =
            man.beard === element.her.beard &&
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
    dispatch(fetchAdjustments());
  }, []);

  const handleDescriptionChange = async (event, id) => {
    console.log("just desccc", description);

    // setIsDisable(false)
    // if(adjustment.matchmakerId.id!==user.id){
    //     setIsDisable(true);
    //     alert(`רק ${adjustment.matchmakerId.name} יכול לעדכן`)
    // }
    // else{
    const updatedDescription = event.target.value; // מקבלים את הערך החדש מהקלט
    const adjustment: Adjustment = (await dispatch(fetchAdjustmentById(id))).payload;
    if(adjustment.matchmakerId.id!==user.id){
        setIsDisable(true)
        alert(`רק ${adjustment.matchmakerId.name} יכול לעדכן`)
    }
    else{
    setDescription(updatedDescription); // מעדכנים את ה-state של התיאור
    console.log("desc", description);

    const updatedAdjustment = {
      ...selectedAdjustment,
      description: updatedDescription,
    }; // מעדכנים את האובייקט
    console.log("kkk", updatedAdjustment);

    const updated = {
      ...adjustment,
      ...(adjustment.description = updatedDescription),
    };
    console.log("update adjustmebt", adjustment);

    dispatch(descriptionUpdate(adjustment));

    // שליחה ל- Redux לעדכון ה- Adjustment
    const res = await dispatch(updateExistingAdjustment({ id, adjustment }));
    console.log("Update response:", res); // תוכל לראות את התגובה
    }
     setIsDisable(false)
  };

  // const handleInputChange = (id: number) => {
  //     // update the descadtoup
  //     console.log("desc", description);

  //     // setDescription(event?.target)
  //     console.log("desc after", description);

  //     dispatch(descriptionUpdate(description));
  // }

  const handleChose = async (id: number) => {
    const adjustment: Adjustment = (await dispatch(fetchAdjustmentById(id)))
      .payload;
    console.log("to update", adjustment);
    const mm = JSON.parse(localStorage.getItem("user"));
    console.log("mm", mm);

    const updated = { ...adjustment, ...(adjustment.matchmakerId = mm) };
    console.log("update with mm", updated);

    const res = dispatch(updateExistingAdjustment({ id, adjustment }));
    console.log("res", res);
  };

  const handleAdd = () => {};

  // const handleInput = async (id:number) => {
  //     // עדכון התיאור מהמילת הקלט
  //     setDescription(event?.target.value);
  //     console.log("desc",description);

  //     // קבלת הנתונים של ההתאמה על פי ה-ID
  //     console.log("id", id);

  //     if(id){
  //     const adjustment = (await dispatch(fetchAdjustmentById(id))).payload;
  // console.log("addd",adjustment);

  //     // עדכון הערכים של האובייקט adjustment
  //     if(adjustment){
  //     const updated = { ...adjustment, description: description };

  //     // שליחת העדכון ל- Redux
  //     const res = await dispatch(updateExistingAdjustment({ id, adjustment: updated }));

  //     console.log("Update with:", updated);
  //     console.log("Response:", res);
  //     console.log("Blur event triggered");
  //     }
  // }
  // }

  // const handleInput=()=> {
  // setDescription(event?.target.value)
  // const id:number=selectedAdjustment?.id;
  // const adjustment:Adjustment = (await dispatch(fetchAdjustmentById(id))).payload;
  // const updated={...adjustment, ...adjustment.description=description}
  // console.log("update with mm", updated);

  // const res=dispatch(updateExistingAdjustment({id, adjustment}))
  // console.log("res", res);
  // console.log("blur");

  // }

  return (
    <>
      <h1>hello to adjustment</h1>
      <button onClick={handleAdd}>הוסף הצעה</button>
      <ul>
        {adjustments &&
          adjustments.map((adjustment: Adjustment) => (
            <li key={adjustment.id}>
              {adjustment.manId.name}
              <br />
              {adjustment.womanId.name}
              <br />
              {adjustment.statusAdjustment}
              <br />

              {adjustment.matchmakerId ? (
                <>
                  {adjustment.matchmakerId.name}
                  <br />
                  {/* {adjustment.matchmakerId.id===user.id?} */}
                  <FormLabel htmlFor="description">תיאור</FormLabel>
                  <OutlinedInput
                    id="description"
                    name="description"
                    type="description"
                    placeholder=""
                    autoComplete=""
                    value={adjustment.description} // השתמש בתיאור הקיים של ההתאמה
                    onChange={(event) =>
                      handleDescriptionChange(event, adjustment.id)
                    } // קריאה לפונקציה עדכון
                    required
                    disabled={isDisable}

                    // onClick={handleInput(adjustment.id)}
                    // onChange={handleInputChange(adjustment.id)}

                    size="small"
                  />
                </>
              ) : (
                <button onClick={() => handleChose(adjustment.id)}>
                  Chose
                </button>
              )}
              <br />
              {/* <button onClick={() => handleUpdate(matchmaker.id)}>Update</button> */}
            </li>
          ))}
      </ul>
    </>
  );
}
