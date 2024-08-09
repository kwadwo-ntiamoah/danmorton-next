import { NextRequest } from "next/server";
import { invokeGetAsync, invokePostAsync } from "..";

export async function POST(request: NextRequest) {
  return await invokePostAsync(request, "payment");
}

export async function GET(request: NextRequest) {
  var { search } = request.nextUrl;
  var url = "payment" + search;

  return await invokeGetAsync(request, url)
}