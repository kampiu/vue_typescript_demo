export default (data, status = 20000, message = '获取成功') => {
	return {
		data,
		status,
		message
	}
}
