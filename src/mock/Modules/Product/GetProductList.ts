import response from "@/mock/utils/response"
import { IProduct, IResponse } from "@/types/api"
// @ts-ignore
import Mock from "mockjs"
import { GetMockData } from "@/utils/Mock"

const Random = Mock.Random

interface IGetProductList extends IResponse {
	data: IProduct[]
}

const API_URL = "/api/v1/product/list"

const API = GetMockData(API_URL, "get", (options: any): IGetProductList => {
	let _limit: number = options.body.limit || 50
	let _Product: IProduct[] = []
	for (let i = 0; i < _limit; i++) {
		const Product: IProduct = {
			id: parseInt(Random.id()),
			thumb: Random.dataImage("150x150", "商品图片"),      // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
			name: Random.csentence(5, 20),                    //  Random.csentence( min, max )
			money: Random.float(12, 3000, 3, 3),
			sale: Random.integer(10, 2000),
			address: Random.city(),
			is_hot: Random.boolean(),
			is_new: Random.boolean(),
			created_at: Random.date(),
		}
		_Product.push(Product)
	}
	return response(_Product)
})

export default API
