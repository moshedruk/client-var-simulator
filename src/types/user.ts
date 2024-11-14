import { Iorganizition } from "./organizition";

export interface Iuser{
    _id: string;
    username: string;
    password: string;
    organization:Iorganizition
    location?: string;
}