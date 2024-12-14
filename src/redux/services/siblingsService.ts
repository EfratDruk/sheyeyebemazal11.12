import axios from "axios";
import { Siblings } from "../../models/siblings";

axios.defaults.baseURL = 'http://localhost:8080/api';

export const getSiblings = async (): Promise<Siblings[]> => {
    const response = await axios.get('/siblings/siblings');
    return response.data;
};

export const getSiblingsById = async (id: number): Promise<Siblings> => {
    const response = await axios.get(`/siblings/siblingsById/${id}`);
    return response.data;
};

export const createSiblings = async (siblings: Siblings): Promise<Siblings> => {
    const response = await axios.post('/siblings/addsiblings', siblings);
    return response.data;
};

export const updateSiblings= async(id:number, siblings:Siblings):Promise<Siblings>=>{
    const response= await axios.put(`/siblings/updateSiblings/${id}`, siblings);
    return response.data;
};


export const deleteSiblings = async (id: number): Promise<void> => {
    await axios.delete(`/siblings/deleteSiblings/${id}`);
};