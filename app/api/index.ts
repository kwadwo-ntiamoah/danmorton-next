import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export const invokePostAsync = async (request: NextRequest, path: string) => {
  try {
    var payload = await request.json();

    var url = process.env.API_URL;
    var response = await axios.post(`${url}/${path}`, payload);

    if (response.status === 200 || response.status === 201) {
      var resObj: ApiResponse = {
        status: true,
        message: "Success",
        data: response.data,
      };

      return NextResponse.json(resObj);
    }

    throw Error;
  } catch (error) {
    var err = error as AxiosError;
    var obj = err.response?.data as any;

    console.error(obj);

    var errObj: ApiResponse = {
      status: false,
      message: obj["title"],
    };

    return NextResponse.json(errObj);
  }
};

export const invokeGetAsync = async (request: NextRequest, path: string) => {
  try {
    var url = process.env.API_URL;
    var response = await axios.get(url + "/" + path);

    if (response.status === 200 || response.status === 201) {
      var resObj: ApiResponse = {
        status: true,
        message: "Success",
        data: response.data,
      };
      
      return NextResponse.json(resObj);
    }

    throw Error;
  } catch (error) {
    var err = error as AxiosError;
    var obj = err.response?.data as any;

    console.error(obj);

    var errObj: ApiResponse = {
      status: false,
      message: obj["title"],
    };

    return NextResponse.json(errObj);
  }
};

export interface ApiResponse {
  status: boolean;
  message: string;
  data?: string | undefined;
}
