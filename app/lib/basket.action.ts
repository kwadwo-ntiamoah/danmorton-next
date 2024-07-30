import axios from "axios"
import { BasketWashStatus } from "."
import { ApiResponse } from "../api"

export const getBasketAsync = async (basketId: string) => {
    var url = process.env.BASE_URL + "/api/baskets?basketId=" + basketId
    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var data: Basket[] = JSON.parse(JSON.stringify(resObj.data))
        return data[0]
    }
}

export const getAllBasketsAsync = async () => {
    var url = process.env.BASE_URL + "/api/baskets"
    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var data: Basket[] = JSON.parse(JSON.stringify(resObj.data))
        return data
    }

    return []
}

export interface Basket {
    id: string
    status: BasketWashStatus
    basketNumber: string
    basketItems: BasketItem[]
}

export interface BasketItem {
    id: string
    name: string
    itemType: string
    materialType: string
    color: string
    description: string
}