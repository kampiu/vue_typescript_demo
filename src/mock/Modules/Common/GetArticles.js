import response from '@/mock/utils/response'
import Mock from 'mockjs'

const Random = Mock.Random

const data = () => {
	let articles = []
	for (let i = 0; i < 20; i++) {
		articles.push({
			id: Random.id(),
			title: Random.csentence(5, 20), //  Random.csentence( min, max )
			poster: Random.dataImage('120x80', '我是图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
			describe: Random.csentence(20, 50), // Random.cname() 随机生成一个常见的中文姓名
			browse_times: Random.integer(10, 1000),
			author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
			created_at: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
		})
	}
	
	return response(articles)
}

export default Mock.mock('/api/blog/v1/articles',
  'get',
  data
)

