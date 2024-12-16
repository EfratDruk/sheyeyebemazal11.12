import axios from "axios";
import { His } from "../../models/his";
import { Requirements } from "../../models/requirements";


axios.defaults.baseURL = 'http://localhost:8080/api';

export const getHis = async (): Promise<His[]> => { 
    const response = await axios.get('/his/his');
    console.log("service", response);
    return response.data;
};

export const getHisById = async (id: number): Promise<His> => {
    const response = await axios.get(`/his/hisById/${id}`);
    return response.data;
};

export const createHis = async (his: His): Promise<His> => {
   const response = await axios.post('/his/addHis', his);
    return response.data;
};

export const updateHis= async(id:number, his:His):Promise<His>=>{
    const response= await axios.put(`/his/updateHis/${id}`, his);
    return response.data;
};


export const deleteHis = async (id: number): Promise<void> => {
   await axios.delete(`/his/deleteHis/${id}`);
};