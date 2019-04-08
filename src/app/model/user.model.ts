import { Address } from './address.model';

export class User {
    id: string;
    name: string;
    email: string;
    // address: {
    //     street: string;
    //     city: string;
    //     geo: {
    //         lat: string;
    //         lng: string;
    //     }
    // }
    address: Address;
}