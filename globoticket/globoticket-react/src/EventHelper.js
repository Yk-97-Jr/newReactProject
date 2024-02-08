import axios from "axios";

export function getEvents(page) {
    const response = axios.get(
        `http://localhost:3333/events?page=${page}`);
    return response;
}