'use server'

import axios from "axios"
import { ApiResponse } from "../api"
import { GenerateInvoiceProps } from "../dashboard/components/generateInvoice/_drawer"
import { InvoiceStatus, PaymentStatus, Price } from "."
import { Customer } from "./customer.action"

export const generateInvoiceAsync = async (payload: Cart) => {
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

export const getAllInvoicesAsync = async (params?: any ) => {
    var url = process.env.BASE_URL + "/api/invoices?customerName=" + params
    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var data: Invoice[] = JSON.parse(JSON.stringify(resObj.data))
        return data
    }

    return []
}

export interface Invoice {
    id: string
    totalAmount: Price
    discount: number
    invoiceNumber: string
    amountPaid: Price
    paymentStatus: PaymentStatus
    billTo: BillRecipient
    dueDate: Date
    invoiceItems: InvoiceItem[]
}

export interface InvoiceItem {
    id: string
    invoiceId: string
    serviceType: string
    serviceAmount: Price
    quantity: number
    name: string
    description: string
    color: string
    print: string
}

export interface BillRecipient {
    name: string
    contact: string
    address: string
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

export interface Cart {
    discount: number
    recipientName: string
    recipientContact: string
    recipientAddress: string
    invoiceItems: CartItem[]
}

export interface CartItem {
    name: string
    description: string
    serviceType: string
    serviceAmount: number
    quantity: number
}