import axios from "axios";
import { Woman } from "../../models/woman";

axios.defaults.baseURL = 'http://localhost:8080/api';

export const getWoman = async (): Promise<Woman[]> => {
    console.log("get woman");
    
    const response = await axios.get('/woman/woman');
    return response.data;
};

export const getWomanById = async (id: number): Promise<Woman> => {
    const response = await axios.get(`/woman/womanById/${id}`);
    return response.data;
};

export const createWoman = async (woman: Woman): Promise<Woman> => {
    const response = await axios.post('/woman/addWoman', woman);
    return response.data;
};

export const updateWoman= async(id:number, woman:Woman):Promise<Woman>=>{
    console.log("id",id);
    console.log("woman.id",woman.id);
    const response= await axios.put(`/woman/updateWoman/${id}`, woman);
    return response.data;
};


export const deleteWoman = async (id: number): Promise<void> => {
    await axios.delete(`/woman/deleteWoman/${id}`);
};