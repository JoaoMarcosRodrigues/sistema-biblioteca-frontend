import axios, { type AxiosPromise } from "axios"
import type { AutorData } from "../inteface/AutorData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: AutorData):AxiosPromise<any> => {
    const response = axios.post(API_URL+"/autores",data);

    return response;
}

export function useAutorDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['autor-data']})
        }
    });

    return mutate;
}