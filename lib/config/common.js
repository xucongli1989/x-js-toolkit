/**
 * common.lib.tryRun在调用异常时执行的函数
 */
let tryRunErrorHandler = () => { };
/**
 * 读取全局异常处理函数tryRunErrorHandler
 */
export const getTryRunErrorHandler = () => {
    return tryRunErrorHandler;
};
/**
 * 重新设置全局异常处理函数tryRunErrorHandler
 */
export const setTryRunErrorHandler = (fn) => {
    tryRunErrorHandler = fn;
};