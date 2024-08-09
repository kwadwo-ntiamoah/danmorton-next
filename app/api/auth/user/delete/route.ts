import { NextRequest } from "next/server";
import { invokeGetAsync, invokePostAsync } from "../../../";

export async function POST(request: NextRequest) {
  var { search } = request.nextUrl;
  return await invokePostAsync(request, "auth/users/delete" + search);
}
