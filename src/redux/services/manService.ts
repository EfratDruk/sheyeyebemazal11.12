import axios from "axios";
import { Man } from "../../models/man";

axios.defaults.baseURL = 'http://localhost:8080/api';

export const getMan = async (): Promise<Man[]> => {
    const response = await axios.get('/man/man');
    return response.data;
};

export const getManById = async (id: number): Promise<Man> => {
    const response = await axios.get(`/man/manById/${id}`);
    return response.data;
};

export const createMan = async (man: Man): Promise<Man> => {
    const response = await axios.post('/man/addMan', man);
    return response.data;
};

export const updateMan= async(id:number, man:Man):Promise<Man>=>{
    const response= await axios.put(`/man/updateMan/${id}`, man);
    console.log("response of update",response);
    return response.data;
};


export const deleteMan = async (id: number): Promise<void> => {
    await axios.delete(`/man/deleteMan/${id}`);
};