export interface Iorganizition{
    _id: string;
    name: string;
    resources: {
        name: string;
        amount: number;
    }[];
    budget: number;
}