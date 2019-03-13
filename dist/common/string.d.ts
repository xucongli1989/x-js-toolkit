/**
 * 将字符串按一定字符数拆分成字符串数组
 */
export declare function splitString(str: string, stepCharCount: number): string[];
/**
 * 截取字符串并以省略符号显示字符串
 * @param str 原字符串
 * @param len 要保留的字符长度
 * @param ellipsisChars 被截断的字符显示的符号
 */
export declare function ellipsis(str: string, len: number, ellipsisChars?: string): string;
/**
 * 从字符串中提取数字（可带小数点）。如："abc123.01cde"->123.01
 */
export declare function getNumber(str: string): number | null;
/**
 * 去左右空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */
export declare function trim(str: string): string;
/**
 * 去左空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */
export declare function lTrim(str: string): string;
/**
 * 去右空格
 * @param  str 待处理字符串
 * @returns  处理后的值
 */
export declare function rTrim(str: string): string;
/**
 * 去掉左边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */
export declare function lTrimString(str: string, strToRemove: string, isIgnoreCase?: boolean): string;
/**
 * 去掉右边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */
export declare function rTrimString(str: string, strToRemove: string, isIgnoreCase?: boolean): string;
/**
 * 去左右指定的字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */
export declare function trimString(str: string, strToRemove: string, isIgnoreCase?: boolean): string;
/**
 * 从html字符串中移除左右空白占位符
 * @param str 待处理的字符串
 * @returns 处理结果
 */
export declare function trimHTML(str: string): string;
/**
 * 指定源字符串sourceStr中是否包含str字符串
 * @param  sourceStr 源字符串
 * @param  str 要查找的字符串
 * @param  isIgnoreCase 是否忽略大小写(默认为false)
 * @returns  结果
 */
export declare function contains(sourceStr: string, str: string, isIgnoreCase?: boolean): boolean;
/**
* 将html标签转换为实体形式
* @param  html 需要被替换的html
* @returns  转换后的值
*/
export declare function escapeHtml(html: string): string;
/**
 * @param   str 要重复的字符串
 * @param   count 重复次数
 * @returns  新的字符串
 */
export declare function repeat(str: string, count: number): string;
//# sourceMappingURL=string.d.ts.map