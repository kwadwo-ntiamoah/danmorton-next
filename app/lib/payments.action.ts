'use server'

import axios from "axios"
import { ApiResponse } from "../api"
import { FormState, PaymentType, Price } from "."
import { redirect } from "next/navigation"

export const getPaymentsAsync = async () => {
    var url = process.env.BASE_URL + "/api/payments"
    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var data: Payment[] = JSON.parse(JSON.stringify(resObj.data))
        return data
    }

    return []
}

export const makePaymentAsync = async (prevState: FormState, formData: FormData) => {

    const invoiceId = formData.get("invoiceId") as string
    const paymentType = formData.get("paymentMethod") as string

    var payload = { 
        invoiceId, 
        paymentType: parseInt(paymentType)
    }
    var url = process.env.BASE_URL! + "/api/payments"

    var res = await axios.post(url, payload)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var tempData: Payment = JSON.parse(JSON.stringify(resObj.data))
        redirect("/dashboard/invoices")
    }

    return { error: resObj.message }
}

export interface Payment {
    id: string
    amountPaid: Price
    paymentType: PaymentType
    invoiceId: string
    paidInByName: string
    paidInByEmail: string
}