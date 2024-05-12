export interface ResponseDto {
  success: boolean;
  data: any;
}

export interface APIRequestDto {
  url: string;
  body: any;
  params: any;
  method: string;
}
