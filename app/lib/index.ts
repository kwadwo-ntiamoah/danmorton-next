import { SessionOptions } from "iron-session"

export interface SessionData {
    token?: string
    fullName?: string
    role?: string
    isLoggedIn: boolean
}

export const defaultSession: SessionData = {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    // password: process.env.AUTH_SECRET!,
    password: "YrshV8bUfYhb5PUhRyNap634Dyn3msiA3DygwaOkkms=",
    cookieName: "jemma-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}

export interface FormState {
    error: undefined | string
}

export interface Price {
    currency: string
    amount: number
}

export enum InvoiceStatus {
    PENDING, APPROVED, REJECTED
}

export enum BasketWashStatus {
    PENDING, IN_PROGRESS, COMPLETED
}

export enum PaymentType {
    CASH, MOBILE_MONEY, BANK_TRANSFER
}

export enum PaymentStatus {
    NOT_PAID, PAID_PARTIALLY, FULLY_PAID, CANCELLED
}
