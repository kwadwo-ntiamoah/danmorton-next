import { NextRequest } from "next/server";
import { invokeGetAsync, invokePostAsync } from "..";

export async function POST(request: NextRequest) {
  return await invokePostAsync(request, "payment");
}

export async function GET(request: NextRequest) {
  return await invokeGetAsync(request, "payment")
}