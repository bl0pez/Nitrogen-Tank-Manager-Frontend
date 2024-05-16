export interface NitrogenTankHistory {
    id:             string;
    tank:           string;
    location:       string;
    status:         NitrogenTankStatus;
    eventTimestamp: Date;
}


export interface NitrogenTank {
    id: string;
    currentStatus: NitrogenTankStatus;
    code: string;
    location: string;
}


export enum NitrogenTankStatus {
    IN_SERVICE = "En servicio",
    EMPTY_AT_OXYGEN_CENTER = "Vacío en central de oxígeno",
    DELIVERED_AT_OXYGEN_CENTER = "Disponible en central de oxígeno",
}