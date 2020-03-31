// export default (fn: Function, wait: number = 40): Function => {
// 	let _fn = fn,       // 保存需要被延迟的函数引用
// 	  timer: any,
// 	  flags = true   // 是否首次调用
// 	return function(this: any) {
// 		let args: IArguments, self: any
// 		args = arguments
// 		self = this
// 		if (flags) {    // 如果是第一次调用不用延迟，直接执行即可
// 			_fn.apply(self, args)
// 			flags = false
// 			return flags
// 		}
// 		// 如果定时器还在，说明上一次还没执行完，不往下执行
// 		if (timer) {
// 			return false
// 		}
//
// 		timer = setTimeout(function() { // 延迟执行
// 			clearTimeout(timer)    // 清空上次的定时器
// 			timer = null           // 销毁变量
// 			_fn.apply(self, args)
// 		}, wait)
// 	}
// }


const throttle = function (func: Function, wait: number = 40, mustRun: number = 300): Function {
	let timeout: any,
	  startTime: number = new Date().getTime()
	
	return function(this: any) {
		let context = this,
		  args: IArguments = arguments,
		  curTime: number = new Date().getTime()
		
		clearTimeout(timeout)
		if (curTime - startTime >= mustRun) {
			func.apply(context, args)
			startTime = curTime
		} else {
			timeout = setTimeout(func, wait)
		}
	}
}

export default throttle

