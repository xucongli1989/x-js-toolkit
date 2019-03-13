import { AnyFunctionType } from "../declaration/common"

/**
 * common.lib.tryRun在调用异常时执行的函数
 */
let tryRunErrorHandler: AnyFunctionType = () => { }

/**
 * 读取全局异常处理函数tryRunErrorHandler
 */
export function getTryRunErrorHandler() {
    return tryRunErrorHandler
}

/**
 * 重新设置全局异常处理函数tryRunErrorHandler
 */
export function setTryRunErrorHandler(fn: AnyFunctionType) {
    tryRunErrorHandler = fn
}