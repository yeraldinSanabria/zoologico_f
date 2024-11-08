export interface Column {
    label: string;
    value: string
}

export interface Diet {
    description: String;
    id: number;
    state: number;
    type: String
}

export interface Habitat {
    name: String;
    id: number;
    state: number;
    description: String;
}

export interface Type {
    name: String;
    id: number;
    state: number;
}

export interface Animals {
    name: String;
    id: number;
    state: number;
}

export interface Species {
    name: String;
    id: number;
    state: number;
    extinct: boolean;
}