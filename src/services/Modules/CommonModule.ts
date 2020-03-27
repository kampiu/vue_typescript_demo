/*
 * @Author: KAM
 * @Date: 2019-11-14 18:15:02
 * @LastEditTime: 2019-11-25 18:10:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_typescript_demo\src\service\Modules\CommonModule.ts
 */
import { IService } from '@/types/service';

const CommonModule: IService = {
	namespaced: 'Common',
	api: {
		// 笔记列表
		GetArticles: {
			url: '/api/blog/v1/articles',
			method: 'GET'
		},
		
		
	}
};

export default CommonModule;
