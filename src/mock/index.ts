import * as Common from "./Modules/Common"
import * as Product from "./Modules/Product"
// @ts-ignore
import Mock from "mockjs"

Mock.setup({
	timeout: 40
})

export default {
	Common,
	Product
}

