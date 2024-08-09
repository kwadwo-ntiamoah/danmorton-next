import { NextRequest } from "next/server";
import { invokeGetAsync, invokePostAsync } from "../../../";

export async function POST(request: NextRequest) {
  var { searchParams } = request.nextUrl;
  return await invokePostAsync(request, "catalog/items/" + searchParams);
}
