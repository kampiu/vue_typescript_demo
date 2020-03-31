/*
 * @Author: KAM
 * @Date: 2019-11-14 18:15:02
 * @LastEditTime: 2019-11-25 18:10:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_typescript_demo\src\service\Modules\CommonModule.ts
 */
import { IService } from '@/types/service';

const ProductModule: IService = {
	namespaced: 'Product',
	api: {
		// 商品列表
		GetProductList: {
			url: '/api/v1/product/list',
			method: 'GET'
		},
		
		
	}
};

export default ProductModule;
