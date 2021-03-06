/**
 * 中国大陆身份证号码实体
 */
export class CNIDCardEntity {
    /**
     * 出生年月日
     */
    birthday: string = ""
    /**
     * 身份证长度
     */
    len: (15 | 18) = 18
}