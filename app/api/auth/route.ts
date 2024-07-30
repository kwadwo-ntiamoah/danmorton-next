import axios, { Axios, AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { invokeGetAsync, invokePostAsync } from "..";

export async function POST(request: NextRequest) {
  return await invokePostAsync(request, "auth/login")
}

export async function GET(request: NextRequest) {
  return await invokeGetAsync(request, "auth/users")
}