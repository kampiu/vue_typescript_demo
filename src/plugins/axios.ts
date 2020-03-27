/*
 * @Author: KAM
 * @Date: 2019-12-04 15:56:28
 * @LastEditTime : 2019-12-23 17:14:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bkqw_crm\src\plugins\axios.ts
 */
import axios, { AxiosRequestConfig, AxiosInstance } from "axios"
// @ts-ignore
import qs from "qs"

const request: AxiosInstance | any = axios.create({
	timeout: 10000,
	// retry: 4,
	headers: {
		post: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	},
	withCredentials: true
})

const filterRequestData = (config: AxiosRequestConfig): AxiosRequestConfig => {
	let _config = Object.assign({}, config)
	try {
		// @ts-ignore
		switch (_config.method.toLowerCase()) {
			case "get":
				break
			case "post":
				if (_config.data.params && _config.data.params.file) {
					let _formData = new FormData()
					_config.data.params.file.forEach((item: any) => _formData.append("file", item))
					_config.data = _formData
				} else {
					_config.data = qs.stringify(_config.data.params)
				}
				break
			case "put":
				_config.data = qs.stringify(_config.data.params)
				break
			case "delete":
				break
			default:
		}
	} catch (e) {
		console.error(`请求数据处理异常`, e)
	}
	return _config
}

request.interceptors.request.use((config: AxiosRequestConfig) => {
	return filterRequestData(config)
}, function(error: any) {
	return Promise.reject(error)
})

request.interceptors.response.use((res: any) => {
	// if (res.data.status === 20000) {
	//   console.log(`%c ${res.data.status} `, 'background-color:green;color: #FFF;border-radius: 4px;', res.data.data)
	// } else if (res.data.status >= 40000) {
	//   console.log(`%c ${res.data.status} `, 'background-color:red;color: #FFF;border-radius: 4px;', res.data.data)
	// } else {
	//   console.log(`%c ${res.data.status} `, 'background-color:orange;color: #FFF;border-radius: 4px;', res.data.data)
	// }
	return res.data
}, (error: any) => {
	console.log(`%c 接口异常 `, "background-color:orange;color: #FFF;border-radius: 4px;", error)
	return Promise.reject(error)
})

export default request

