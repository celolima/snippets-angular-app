export interface Endereco {
    cep: string;
    numero: number;
    complemento: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
}

export interface Hero {
    
    id?: number;
    name?: string;
    power?: string;
    alterEgo?: string;
    endereco?: Endereco;
}