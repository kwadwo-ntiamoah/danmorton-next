import { SessionOptions } from "iron-session"

export interface SessionData {
    token?: string
    otherNames?: string
    lastName?: string
    role?: string
    isLoggedIn: boolean
}

export const defaultSession: SessionData = {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    password: process.env.AUTH_SECRET!,
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