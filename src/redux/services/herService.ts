import axios from "axios";
import { Her } from "../../models/her";


axios.defaults.baseURL = 'http://localhost:8080/api';

export const getHer = async (): Promise<Her[]> => { 
    const response = await axios.get('/her/her');
    console.log("servcie", response);
    return response.data;
};

export const getHerById = async (id: number): Promise<Her> => {
    const response = await axios.get(`/her/herById/${id}`);
    return response.data;
};

export const createHer = async (her: Her): Promise<Her> => {
   const response = await axios.post('/her/addHer', her);
    return response.data;
};

export const updateHer= async(id:number, her:Her):Promise<Her>=>{
    const response= await axios.put(`/her/updateHer/${id}`, her);
    return response.data;
};


export const deleteHer = async (id: number): Promise<void> => {
   await axios.delete(`/her/deleteHer/${id}`);
};