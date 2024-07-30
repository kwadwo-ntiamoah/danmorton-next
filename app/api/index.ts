import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export const invokePostAsync = async (request: NextRequest, path: string) => {
  try {
    var payload = await request.json();

    // var url = process.env.API_URL;
    var url = process.env.NODE_ENV == "production" ? "https://long-tree.shipeazi.com/api" : process.env.API_URL;
    console.log("#######################")
    console.log(url)

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
      message: obj["title"] ?? "An error occurred performing this action",
    };

    return NextResponse.json(errObj);
  }
};

export const invokeGetAsync = async (request: NextRequest, path: string) => {
  try {
    // var url = 
    var url = "https://long-tree.shipeazi.com/api"
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

    if (obj == null) {
      var temp = {
        status: false,
        message: "An error occurred performing this action"
      }

      return NextResponse.json(temp)
    }

    var errObj: ApiResponse = {
      status: false,
      message: obj["title"] ?? "A general error occurred",
    };

    return NextResponse.json(errObj);
  }
};

export interface ApiResponse {
  status: boolean;
  message: string;
  data?: string | undefined;
}
