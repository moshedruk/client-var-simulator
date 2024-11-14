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
    org : Iorganizition[]
    myOrg:Iorganizition | null
}

export interface playerState {
    position:string | null    
}

export enum playerStatus {
    attack = "attack",
    protection ='IDF'
    
    
    
    
    
}