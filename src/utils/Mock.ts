// @ts-ignore
import Mock from "mockjs"
import { IMethod } from "@/types/api"

interface IArgument {
	type: string,
	url: string,
	body?: any
}

const TransformQuery = (param: string): number | string => /^[0-9]*$/.test(param) ? parseFloat(param) : param

const GetParams = (url: string, name?: string) => {
	let _search = url.slice(url.indexOf("?"), url.length).substring(1)
	if (_search === "") {
		return {}
	}
	let _query = _search.split("&")
	let _params: { [key: string]: string | number } = {}
	for (let i = 0; i < _query.length; i++) {
		let param = _query[i].split("=")
		if (param[0] === name) {
			return param[1]
		}
		_params[param[0]] = TransformQuery(param[1])
	}
	return _params
}

export const GetMockData = (url: string, type: IMethod, callback: Function): Function => {
	// 判断是否路由存在参数,过滤路由参数
	let str = new RegExp(url, "g")
	return Mock.mock(str,
	  type,
	  (options: any) => {
		  let params: IArgument = {
			  type: options.type,
			  url: options.url
		  }
		  if ([ "HEAD", "GET" ].includes(options.type.toUpperCase())) {
			  params.body = GetParams(options.url)
		  } else {
			  params.body = options
		  }
		  return callback(params)
	  }
	)
}
