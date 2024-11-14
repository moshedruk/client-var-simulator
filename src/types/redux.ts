import { Iorganizition } from "./organizition";
import { Iuser } from "./user";

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

export interface userState {
    error:string | null;
    status :DataStatus    
    user:Iuser | null
}

export interface playerState {
    position:string | null    
}
export interface eventState {
    _id :string | null,
    time:number | null
    nameattack:string | null,
    location:string | null,
    namerocket:string | null,
    status:string | null 
}

export enum playerStatus {
    attack = "attack",
    protection ='IDF'
    
    
    
    
    
}