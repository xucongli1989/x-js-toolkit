import { getLocalStorage } from "../common/lib"

let globalCacheName = "x-js-kit-localcache"
/**
 * 自动清理过期缓存的间隔时间（毫秒），默认为30分钟
 */
let autoClearExpiredTimeSpan = 30 * 60 * 1000
let clearExpiredIntervalId: number
let isInited = false

export interface ItemContentType<ValueType = any> {
    /**
     * 具体的缓存值
     */
    value: ValueType
    /**
     * 过期时间，若不指定，则无过期时间（此时间为：从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期的毫秒数。如：new Date().valueOf()）
     */
    expire?: number
}
export interface GlobalCacheType<ValueType = any> {
    /**
     * 时间
     */
    time: number
    /**
     * 所有缓存项
     */
    items: { [key: string]: ItemContentType<ValueType> }
}

/**
 * 获取localStorage对象
 */
function getStore<ValueType>(): Storage {
    const store = getLocalStorage()
    if (!store || isInited) {
        return store
    }
    //初始化
    isInited = true
    //设置默认缓存值
    if (!store.getItem(globalCacheName)) {
        const defaultGlobalLocalStorage: GlobalCacheType<ValueType> = {
            time: new Date().valueOf(),
            items: {}
        }
        store.setItem(globalCacheName, JSON.stringify(defaultGlobalLocalStorage))
    }
    //立即清理过期缓存
    clearExpired()
    //执行定时清理过期缓存
    runClearExpiredInterval()
    return store
}
//立即初始化
getStore()

/**
 * 返回全局缓存对象
 */
export function getGlobalCache<ValueType>(): GlobalCacheType<ValueType> | null {
    const cacheValue = getStore().getItem(globalCacheName) as string
    if (!cacheValue) {
        return null
    }
    return JSON.parse(cacheValue) as GlobalCacheType<ValueType>
}
/**
 * 修改localStorage缓存的默认名称
 */
export function setGlobalCacheName(name: string) {
    const oldValue = getStore().getItem(globalCacheName) as string
    getStore().removeItem(globalCacheName)
    globalCacheName = name
    getStore().setItem(globalCacheName, oldValue)
}

/**
 * 添加数据至缓存（默认每30分钟自动清理所有过期的缓存）
 */
export function add<ValueType>(key: string, value: ItemContentType<ValueType>) {
    const cache = getGlobalCache()
    if (!cache) {
        return
    }
    cache.items[key] = value
    getStore().setItem(globalCacheName, JSON.stringify(cache))
}

/**
 * 删除指定缓存
 */
export function remove(key: string) {
    const cache = getGlobalCache()
    if (!cache) {
        return
    }
    delete cache.items[key]
    getStore().setItem(globalCacheName, JSON.stringify(cache))
}

/**
 * 读取指定缓存
 * @param key 缓存key
 * @param ignoreExpireCheck 是否忽略过期检测，默认为false.（true:即使过期，只要还没被清理，则依然返回。false:如果已过期，则删除此缓存并返回null）
 */
export function get<ValueType>(key: string, ignoreExpireCheck: boolean = false): ItemContentType<ValueType> | null {
    const cache = getGlobalCache()
    if (!cache) {
        return null
    }
    const item = cache.items[key] as ItemContentType<ValueType>
    if (!item) {
        return null
    }
    if (!ignoreExpireCheck && item.expire && item.expire < new Date().valueOf()) {
        remove(key)
        return null
    }
    return item
}

/**
 * 清理过期缓存
 */
export function clearExpired() {
    const ch = getGlobalCache()
    if (!ch) return
    Object.keys(ch.items).forEach((key) => {
        const item = ch.items[key]
        if (!item || !item.expire) {
            return
        }
        if (item.expire < new Date().valueOf()) {
            remove(key)
        }
    })
}

/**
 * 执行自动定期清理
 */
function runClearExpiredInterval() {
    if (clearExpiredIntervalId) {
        clearInterval(clearExpiredIntervalId)
    }
    clearExpiredIntervalId = setInterval(clearExpired, autoClearExpiredTimeSpan) as any
}

/**
 * 获取自动清理过期缓存的间隔（毫秒）
 */
export function getAutoClearExpiredTimeSpan() {
    return autoClearExpiredTimeSpan
}

/**
 * 设置自动清理过期缓存的间隔（毫秒），并按计划执行清理
 */
export function setAutoClearExpiredTimeSpan(timeSpan: number) {
    if (timeSpan <= 0) {
        throw new Error("timeSpan must > 0.")
    }
    autoClearExpiredTimeSpan = timeSpan
    runClearExpiredInterval()
}
