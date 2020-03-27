/*
 * @Author: KAM
 * @Date: 2019-11-09 11:55:19
 * @LastEditTime: 2019-12-04 15:04:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bkqw_crm\src\service\index.ts
 */
import request from "@/plugins/axios"
import { IService, IServices } from "@/types/service"
import API from "./Modules"

let service: IServices = {}

API.forEach((_item: IService) => {
	Object.entries(_item.api).forEach((_api) => {
		service[`${ _item.namespaced }/${ _api[0] }`] = (params: any) => request[(_api[1].method).toLowerCase()](`${ _api[1].url }`, { params })
	})
})

export default service
