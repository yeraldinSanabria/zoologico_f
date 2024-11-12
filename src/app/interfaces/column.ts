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
    species_id: number;
    specie:string;
}

export interface Species {
    name: String;
    id: number;
    state: number;
    type_id: number,
    habitats_id: number,
    diet_id: number,
    extinct: boolean;
}

export interface Action {
    action: number;
    row: any;
}