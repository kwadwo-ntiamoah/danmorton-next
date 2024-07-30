import axios, { Axios, AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { invokePostAsync } from "../..";

export async function POST(request: NextRequest) {
  return await invokePostAsync(request, "auth/password/change")
}

