import axios from "axios"
import { ApiResponse } from "../api"

export const getAllCustomersAsync = async () => {
    var url = process.env.BASE_URL + "/api/customers"
    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var data: Customer[] = JSON.parse(JSON.stringify(resObj.data))
        return data
    }

    return []
}

export interface Customer {
    id?: string
    name: string
    email: string
    phone: string
}