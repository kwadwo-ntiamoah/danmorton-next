'use server'

import axios from "axios"
import { FormState, Price } from "."
import { ApiResponse } from "../api"
import { redirect } from "next/navigation"

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

export const addItemCatalogAsync = async(_: FormState, formData: FormData) => {
    const name = formData.get("name") as string
    const amount = formData.get("amount") as string
    const imagePath = formData.get("imagePath") as string
    const currency = formData.get("currency") as string

    var items = { name, amount, imagePath, currency }
    var payload = {
        items: [
            items
        ]
    }

    var url = process.env.BASE_URL + "/api/catalogs"

    var res = await axios.post(url, payload)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        redirect("/dashboard/catalog")
    }

    return { error: resObj.message }
}

export interface CatalogItem {
    id: string
    name: string
    imagePath: string
    price: Price
}

