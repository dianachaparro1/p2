export interface Practica {
    posts: Array <Datos>;
}

export interface Datos {
    id?: number;
    nombre?: string;
    usuario?: string;
    telefono?: string;
    direccion?: string;
}
