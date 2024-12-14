import axios from "axios";
import { Adjustment } from "../../models/adjustment";
import { Login, Man, Woman } from "@mui/icons-material";
import { Man } from "../../models/man";
import { Woman } from "../../models/woman";
import { StatusAdjustment } from "../../models/enums";


axios.defaults.baseURL = 'http://localhost:8080/api';

export const getAdjustments = async (): Promise<Adjustment[]> => { 
    const response = await axios.get('/adjustment/adjustments');
    console.log("servcie", response);
    return response.data;
};

export const getAdjustmentById = async (id: number): Promise<Adjustment> => {
    const response = await axios.get(`/adjustment/adjustmentById/${id}`);
    return response.data;
};

// export const createAdjustment = async (adjustment: Adjustment): Promise<Adjustment> => {
// export const createAdjustment= async(adjustment={man:Man,woman:Woman}):Promise<Adjustment>=>{
// const response = await axios.post('/adjustment/addAdjustment', adjustment);
//     return response.data;
// };

// תיקון הפונקציה שמקבלת אובייקט עם שני המידע של man ו-woman
export const createAdjustment = async (manId:Man, womanId:Woman): Promise<Adjustment> => {
  try {
    // console.log("adjustment",adjustment);
    console.log("man in service",manId);
    console.log("woman in dervice",womanId);
    
    // שליחה לשרת עם axios
    const response = await axios.post('/adjustment/addAdjustment', {manId,womanId,statusAdjustment:StatusAdjustment.new, matchmakerId:null});
    console.log("coming...");
    
    return response.data;  // מחזיר את התוצאה
  } catch (error) {
    console.error("Error creating adjustment:", error);
    throw error;  // אם יש שגיאה, היא תושלך כך שהפונקציה השולחת תוכל לטפל בה
  }
};


export const updateAdjustment= async(id:number, adjustment:Adjustment|undefined):Promise<Adjustment>=>{
    const response= await axios.put(`/adjustment/updateAdjustment/${id}`, adjustment);
    return response.data;
};


export const deleteAdjustment = async (id: number): Promise<void> => {
   await axios.delete(`/adjustment/deleteAdjustment/${id}`);
};