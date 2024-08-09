import { NextRequest } from "next/server";
import { invokePostAsync } from "../..";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  var url = "basket" + params.id
  return await invokePostAsync(request, url);
}