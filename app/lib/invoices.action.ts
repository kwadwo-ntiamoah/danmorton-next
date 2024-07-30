'use server'

import axios from "axios"
import { ApiResponse } from "../api"
import { GenerateInvoiceProps } from "../dashboard/components/generateInvoice/_drawer"
import { InvoiceStatus, Price } from "."
import { Customer } from "./customer.action"

export const generateInvoiceAsync = async (props: GenerateInvoiceProps) => {
    var payload = { 
        discount: 0,
        serviceId: "a9ef39ff-2a3e-4edb-a745-0dc9e1adddcd",
        name: props.customer?.name,
        phone: props.customer?.phone,
        email: props.customer?.email,
        dueDate: "2024-12-12",
        invoiceItems: props.items.map(item => {
            return {
                itemId: item.itemId,
                quantity: item.quantity
            }
        })

    }
    var url = process.env.BASE_URL! + "/api/invoices"

    var res = await axios.post(url, payload)
    var resObj: ApiResponse = res.data

    return resObj;
}

export const getInvoiceAsync = async (invoiceId: string) => {
    var url = process.env.BASE_URL + "/api/invoices?invoiceId=" + invoiceId
    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var data: Invoice[] = JSON.parse(JSON.stringify(resObj.data))
        return data[0]
    }
}

export const getAllInvoicesAsync = async () => {
    var url = process.env.BASE_URL + "/api/invoices"
    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var data: Invoice[] = JSON.parse(JSON.stringify(resObj.data))
        return data
    }

    return []
}

export interface InvoiceItem {
    itemId: string
    quantity: number
    price: number
}


export interface Invoice {
    id: string
    discount: number
    totalPrice: Price
    service: Service
    dueDate: string
    invoiceNumber: string
    status: InvoiceStatus
    billRecipient: Customer,
    invoiceItems: GeneratedInvoiceItem[]
}

export interface GeneratedInvoiceItem {
    quantity: number
    price: Price
    name: string
}

export interface Service {
    type: string
    price: Price
}

