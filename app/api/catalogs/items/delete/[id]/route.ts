import { NextRequest } from "next/server";
import { invokeGetAsync, invokePostAsync } from "../../../..";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  return await invokePostAsync(request, "catalog/items/" + params.id + "/delete");
}

