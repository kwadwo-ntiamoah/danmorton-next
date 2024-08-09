import axios, { AxiosError } from "axios";
import { NextRequest } from "next/server";
import { invokePostAsync, invokeGetAsync } from "../..";

export async function POST(request: NextRequest) {
    return await invokePostAsync(request, "auth/users")
  }
  
  export async function GET(request: NextRequest) {
    return await invokeGetAsync(request, "auth/users")
  }