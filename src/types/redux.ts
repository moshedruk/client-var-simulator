import { Iorganizition } from "./organizition";

export enum DataStatus {
    PENDING,
    LOADING,
    SUCCESS,
    FAILED,
    ERROR,
    IDLE
}

export interface orgState {
    error:string | null;
    status :DataStatus
    org :null | Iorganizition
}