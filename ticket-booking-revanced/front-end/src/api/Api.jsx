import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000"
});


export const fetchMovieInfo = async ()=>{
    const res = await api.get("/events");
    return res.status===200?res.data:[];
}

export const createTicketInfo = async (newTicket)=>{
    const res = await api.post("/ticket",newTicket );
    return res.status===200?res.data:[];
}

export const createMovieInfo = async(newEvent)=>{
    const res = await api.post("/events",newEvent);
    return res.status === 200 ? res.data:[];
}