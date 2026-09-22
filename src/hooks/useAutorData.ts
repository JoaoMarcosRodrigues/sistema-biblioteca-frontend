import axios, { type AxiosPromise } from "axios"
import type { AutorData, Page } from "../inteface/AutorData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (page: number, size: number):AxiosPromise<Page<AutorData>> => {
    const response = axios.get(API_URL+"/autores",
        {
            params: {
                page,
                size
            }
        });

    return response;
}

export function useAutorData(page: number, size: number,){
    const query = useQuery({
        queryFn: () => fetchData(page, size),
        queryKey: ['autor-data', page, size],
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data
    };
}