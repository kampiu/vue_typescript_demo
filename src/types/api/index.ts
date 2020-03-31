export * from "./Common"
export * from "./Product"

export type IMethod =
  | "get" | "GET"
  | "delete" | "DELETE"
  | "head" | "HEAD"
  | "options" | "OPTIONS"
  | "post" | "POST"
  | "put" | "PUT"
  | "patch" | "PATCH"

export interface IResponse {
	data: any,
	message: string,
	status: number,
	timestamp: number
}

