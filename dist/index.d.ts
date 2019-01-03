declare const _default: {
    cache: {
        localStorage: typeof import("./cache/localStorage");
    };
    check: {
        common: typeof import("./check/common");
        url: typeof import("./check/url");
    };
    date: {
        format: typeof import("./date/format");
    };
    validation: {
        fieldMessage: typeof import("./validation/fieldMessage");
    };
    declaration: {
        common: typeof import("./declaration/common");
    };
    constant: {
        regexConst: typeof import("./constant/regex");
    };
    pattern: {
        strategy: typeof import("./pattern/strategy");
        singleton: typeof import("./pattern/singleton");
    };
    timer: {
        StopWatch: typeof import("./timer/stopWatch").default;
    };
    common: {
        string: typeof import("./common/string");
        array: typeof import("./common/array");
        json: typeof import("./common/json");
        data: typeof import("./common/data");
        lib: typeof import("./common/lib");
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map