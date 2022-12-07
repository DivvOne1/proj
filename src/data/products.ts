import { IProduct } from "../models";

export const products: IProduct[]=[
    {"id":1,
    "title":"Кот ",
    "price":109.95,
    "description":"Описание кота ",
    "category":"Коты",
    "image":"/1111.png",
    "rating":{
        "rate":3.9,
        "count":120
    }},
    {"id":2,
    "title":"Кот",
    "price":111.95,
    "description":"Второе описание кота",
    "category":"коты",
    "image":"/1111.png",
    "rating":{
        "rate":3.9,
        "count":120
    }
}
]