export interface AutorData{
    id: number,
    nome: string,
    nacionalidade: string,
    dataNascimento: string,
    biografia: string
}

export interface Page<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    first: boolean;
    last: boolean;
}