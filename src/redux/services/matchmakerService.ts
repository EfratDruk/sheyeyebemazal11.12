import axios from "axios";
import { Matchmaker } from "../../models/matchmaker";


axios.defaults.baseURL = 'http://localhost:8080/api';

export const getMatchmakers = async (): Promise<Matchmaker[]> => { 
    const response = await axios.get('/matchmaker/matchmaker');
    console.log("servcie", response);
    return response.data;
};

export const getMatchmakerById = async (id: number): Promise<Matchmaker> => {
    const response = await axios.get(`/matchmaker/matchmakerById/${id}`);
    return response.data;
};

export const createMatchmaker = async (matchmaker: Matchmaker): Promise<Matchmaker> => {
    const response = await axios.post('/matchmaker/addMatchmaker', matchmaker);
    return response.data;
};

export const updateMatchmaker= async(id:number, matchmaker:Matchmaker):Promise<Matchmaker>=>{
    const response= await axios.put(`/matchmaker/updateMatchmaker/${id}`, matchmaker);
    return response.data;
};


export const deleteMatchmaker = async (id: number): Promise<void> => {
    await axios.delete(`/matchmaker/deleteMatchmaker/${id}`);
};