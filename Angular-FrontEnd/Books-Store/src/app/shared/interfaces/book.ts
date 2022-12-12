import { IUser } from "./user";

export interface IBook {
    _id: string,
    title: string,
    author: string,
    description: string,
    imageUrl: string,
    genre: string,
    price: number,
    _ownerId: IUser,
}