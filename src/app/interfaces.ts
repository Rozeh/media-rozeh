export interface IPatient {
    id: number;
    name: string;
    email: string;
}

export interface IPatientData {
    patient: IPatient;
}

export interface IPatientVars {
    id: number;
}

export interface IPatientsData {
    patients: IPatient[];
}

