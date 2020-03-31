export default (data: any, status: number = 20000, message: string = "获取成功") => {
	return {
		data,
		status,
		message,
		timestamp: new Date().getTime()
	}
}
