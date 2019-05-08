import log from "./logger/index";
declare const _default: {
    cache: {
        localStorage: typeof import("./cache/localStorage");
    };
    check: {
        common: typeof import("./check/common");
        url: typeof import("./check/url");
        browser: typeof import("./check/browser");
    };
    common: {
        string: typeof import("./common/string");
        array: typeof import("./common/array");
        convert: typeof import("./common/convert");
        cookie: typeof import("./common/cookie");
        json: typeof import("./common/json");
        data: typeof import("./common/data");
        idCard: typeof import("./common/idCard");
        lib: typeof import("./common/lib");
        random: typeof import("./common/random");
        url: typeof import("./common/url");
    };
    config: {
        common: typeof import("./config/common");
        logger: typeof import("./config/logger");
    };
    constant: {
        regexConst: typeof import("./constant/regex");
        map: typeof import("./constant/map");
    };
    date: {
        format: typeof import("./date/format");
        convert: typeof import("./date/convert");
    };
    declaration: {
        common: typeof import("./declaration/common");
        date: typeof import("./declaration/date");
    };
    device: {
        browser: typeof import("./device/browser");
    };
    entity: {
        idCard: typeof import("./entity/idCard");
        keyValue: typeof import("./entity/keyValue");
        select: typeof import("./entity/select");
    };
    log: typeof log;
    pattern: {
        strategy: typeof import("./pattern/strategy");
        singleton: typeof import("./pattern/singleton");
    };
    timer: {
        stopWatch: typeof import("./timer/stopWatch").default;
    };
    validation: {
        fieldMessage: typeof import("./validation/fieldMessage");
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map