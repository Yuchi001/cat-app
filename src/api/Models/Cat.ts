import {Breed} from "./Breed";

export type Cat = {
    "breeds": Breed[],
    "id": string,
    "url": string,
    "width": number,
    "height": number
}