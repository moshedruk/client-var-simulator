export interface Iorganizition{
    name: string;
    resources: {
        name: string;
        amount: number;
    }[];
    budget: number;
}