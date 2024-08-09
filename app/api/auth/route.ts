import { NextRequest } from "next/server";
import { invokeGetAsync, invokePostAsync } from "..";

export async function POST(request: NextRequest) {
  return await invokePostAsync(request, "auth/token")
}