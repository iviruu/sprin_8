export interface Puntos {
    id:                   string;
    category?:            string;
    text:                 string;
    place_name:           string;
    geometry:             Geometry;
}
export interface Geometry {
    type:        string;
    coordinates: number[];
}