import { ResponseDto, APIRequestDto } from "./declaration";
const BASE_API = "https://httpbin.org";
export const handlerCallApi = async ({ url, body, method }: APIRequestDto) => {
  const headers = new Headers({});

  if (!headers.get("Content-Type")) {
    headers.append("Content-Type", "application/json");
  }

  let dataResponse: ResponseDto = { success: false };
  try {
    const res = await fetch(`${BASE_API}/${url}`, {
      method: method,
      headers: headers,
      body: body,
    });
    const { data } = await res.json();
    dataResponse = {
      success: true,
      data: data,
    };
    return dataResponse;
  } catch (error) {
    return dataResponse;
  }
};
