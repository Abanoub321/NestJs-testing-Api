import { Exclude } from "class-transformer";

export default class SerializedUser {
    name: string;
    phone: string;
    role: string;
    @Exclude()
    password: string;
    constructor(partial: SerializedUser) {
        Object.assign(this, partial);
    }
}