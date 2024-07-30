'use server'

import { getIronSession } from "iron-session"
import { sessionOptions, SessionData, defaultSession, FormState } from "."
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import axios from "axios"
import { ApiResponse } from "../api"
import { error } from "console"

let defaultUsername = "admin@admin.com"
let defaultRole = "Administrator"

export const getSessionAsync = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn
    }
    
    return session
}

export const getUsersAsync = async (): Promise<User[]> => {
    var url = process.env.BASE_URL! + "/api/auth"

    var res = await axios.get(url)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var data: User[] = JSON.parse(JSON.stringify(resObj.data))
        return data
    }

    return []
}

export const loginAsync = async (prevState: FormState, formData: FormData) => {
    
    const session = await getSessionAsync()

    const username = formData.get("email") as string
    const password = formData.get("password") as string

    // call api/auth
    var payload = { username, password }
    var url = process.env.BASE_URL! + "/api/auth"

    var res = await axios.post(url, payload)
    var resObj: ApiResponse = res.data

    if (resObj.status) {
        var tempData: TokenResponse = JSON.parse(JSON.stringify(resObj.data))
        
        session.token = tempData.token
        session.lastName = tempData.user.lastName
        session.otherNames = tempData.user.otherNames
        session.isLoggedIn = true
        session.role = tempData.user.role

        await session.save()
        redirect("/dashboard")
    }

    return { error: resObj.message }
}

export const logoutAsync = async () => {
    const session = await getSessionAsync();

    session.destroy()
    redirect("/")
}

export interface TokenResponse {
    token: string
    user: User
    shouldChangePassword: boolean
}

export interface User {
    otherNames: string
    lastName: string
    role: string
}