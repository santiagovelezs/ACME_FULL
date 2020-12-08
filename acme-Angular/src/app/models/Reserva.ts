export interface Reserva {
    _id?: string;
    room: string;   
    arrival: Date;
    departure: Date;
    adults: number;
    children: number; 
}