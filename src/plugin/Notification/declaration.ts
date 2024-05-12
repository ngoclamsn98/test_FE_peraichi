export enum TypeNotify {
  success = "success",
  error = "error",
}

export interface NotificationType {
  message: string;
  type: TypeNotify;
}
