import { NextRequest } from "next/server";
import { invokeGetAsync } from "..";

export async function GET(request: NextRequest) {
  var url = "customer" + request.nextUrl.search
  return await invokeGetAsync(request, url);
}
