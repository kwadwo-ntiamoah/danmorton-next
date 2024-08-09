'use server'

import axios from "axios"
import { FormState, Price } from "."
import { ApiResponse } from "../api"
import { redirect, useRouter } from "next/navigation"

export const getItemsCatalogAsync = async (): Promise<Item[]> => {
    var url = process.env.BASE_URL! + "/api/catalogs/items"

    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var tempData: Item[] = JSON.parse(JSON.stringify(resObj.data))
        return tempData
    }

    return []
}

export const getProductsCatalogAsync = async (): Promise<Product[]> => {
    var url = process.env.BASE_URL! + "/api/catalogs/products"

    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var tempData: Product[] = JSON.parse(JSON.stringify(resObj.data))
        return tempData
    }

    return []
}

export const addItemCatalogAsync = async(services: ItemService[], _: FormState, formData: FormData) => {
    const name = formData.get("name") as string
    const image = formData.get("image") as string
    
    var payload = {
        name, image,
        services
    }

    var url = process.env.BASE_URL + "/api/catalogs/items"

    var res = await axios.post(url, payload)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        redirect("/dashboard/catalog")
    }

    return { error: resObj.message }
}

export const deleteItemCatalogAsync = async(id: string) => {
    var url = process.env.BASE_URL + "/api/catalogs/items/delete/" + id
    var res = await axios.post(url, {})
    var resObj: ApiResponse = res.data
    
    if (resObj.status) {
        redirect("/dashboard/catalog")
    }
}

export interface Item {
    id: string
    name: string
    image: string
    dateCreated: string
    services: ItemService[]
}

export interface ItemService {
    id?: string
    name: string
    price: Price
}

export interface Product {
    name: string
}