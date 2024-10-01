export interface User {
    id: number;
    name: string;
    gender: string;
    balance: number;
    birthdate: string;
    email: string;
    status: string;
    score: number;
    profileImage: string;
    joiningDate: number;
    isActive?: boolean;
}