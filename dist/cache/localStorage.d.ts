export interface ItemContentType {
    /**
     * 具体的缓存值
     */
    value: any;
    /**
     * 过期时间，若不指定，则无过期时间
     */
    expire?: number;
}
export interface GlobalCacheType {
    /**
     * 时间
     */
    time: number;
    /**
     * 所有缓存项
     */
    items: {
        [key: string]: ItemContentType;
    };
}
/**
 * 返回全局缓存对象
 */
export declare const getGlobalCache: () => GlobalCacheType | null;
/**
 * 修改localStorage缓存的默认名称
 */
export declare const setGlobalCacheName: (name: string) => void;
/**
 * 添加数据至缓存
 */
export declare const add: (key: string, value: ItemContentType) => void;
/**
 * 读取指定缓存
 */
export declare const get: (key: string) => ItemContentType | null;
/**
 * 删除指定缓存
 */
export declare const remove: (key: string) => null | undefined;
