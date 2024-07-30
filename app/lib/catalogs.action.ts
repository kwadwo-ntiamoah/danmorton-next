'use server'

import axios from "axios"
import { Price } from "."
import { ApiResponse } from "../api"

export const getItemsCatalogAsync = async (): Promise<CatalogItem[]> => {
    var url = process.env.BASE_URL! + "/api/catalogs"

    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var tempData: CatalogItem[] = JSON.parse(JSON.stringify(resObj.data))
        return tempData
    }

    return []
}

export interface CatalogItem {
    id: string
    name: string
    imagePath: string
    price: Price
}

