export type IMethod =
  | "get" | "GET"
  | "delete" | "DELETE"
  | "head" | "HEAD"
  | "options" | "OPTIONS"
  | "post" | "POST"
  | "put" | "PUT"
  | "patch" | "PATCH"

export interface IApi {
	url: string,
	method: IMethod
}

export interface IService {
	namespaced: string,
	api: { [key: string]: IApi }
}

export interface IServices {
	[index: string]: Function
}
