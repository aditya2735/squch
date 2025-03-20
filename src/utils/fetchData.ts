import { apiConnector } from "@/services/connector";
import axios from "axios";

export const fetchData = async <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: any
): Promise<T | null> => {
  try {
    const response: any = await apiConnector(method, url, data);

    if (!response?.data) {
      return null;
    }

    return response.data;
  } catch (error: any) {
    // if (axios.isCancel(error)) {
    //   console.log("FetchData request was canceled:", error.message);
    //   return null;
    // }
    throw new Error(error?.response?.data?.message || "Failed to fetch data");
  }
};
