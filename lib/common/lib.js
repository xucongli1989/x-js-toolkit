import { getTryRunErrorHandler } from "../config/common";
/**
 * 是否为服务器环境
 */
export const isServer = () => {
    return typeof (window) === 'undefined';
};
/**
 * 是否为浏览器环境
 */
export const isBowser = () => {
    return !isServer();
};
/**
 * 获取全局对象
 */
export const getGlobalObject = () => {
    if (isBowser()) {
        return window;
    }
    return global;
};
/**
 * 获取localStorage对象
 */
export const getLocalStorage = () => {
    const g = getGlobalObject();
    return (g.localStorage || null);
};
/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */
export const createNamespace = (name) => {
    if (!name) {
        return null;
    }
    let obj = getGlobalObject(), tokens = name.split("."), token = "";
    while (tokens.length > 0) {
        token = tokens.shift();
        if (typeof obj[token] === "undefined") {
            obj[token] = {};
        }
        obj = obj[token];
    }
    return obj;
};
/**
 * 获取指定对象的指定属性
 * @param obj 对象
 * @param path 属性路径，如：a.b.c
 * @returns 返回obj.a.b.c，如果获取失败，则返回null
 */
export const getValue = (obj, path) => {
    if (!obj || !path) {
        return null;
    }
    let temp = obj;
    try {
        path.split(".").forEach(keyName => {
            temp = temp[keyName];
        });
        if (typeof (temp) == 'undefined') {
            return null;
        }
        return temp;
    }
    catch (e) {
        return null;
    }
};
/**
 * 深度clone
 */
export const deepClone = (obj) => {
    try {
        return JSON.parse(JSON.stringify(obj));
    }
    catch (e) {
        return null;
    }
};
/**
 * 尝试运行指定function；若异常，则执行全局配置的异常处理函数tryRunErrorHandler，并返回null
 * @param fn  函数名
 * @param args 参数
 */
export const tryRun = (fn, ...args) => {
    if (!fn) {
        return null;
    }
    try {
        return fn(...args);
    }
    catch (e) {
        const errFn = getTryRunErrorHandler();
        errFn && errFn(e);
        return null;
    }
};