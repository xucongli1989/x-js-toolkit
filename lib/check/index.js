"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var common = _interopRequireWildcard(require("./common"));

var url = _interopRequireWildcard(require("./url"));

var browser = _interopRequireWildcard(require("./browser"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable import/no-default-export */
var _default = {
  /**
   * 公共的数据校验
   */
  common: common,

  /**
   * url相关的校验
   */
  url: url,

  /**
   * 浏览器相关校验
   */
  browser: browser
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay9pbmRleC50cyJdLCJuYW1lcyI6WyJjb21tb24iLCJ1cmwiLCJicm93c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBSEE7ZUFLZTtBQUNYO0FBQ0o7QUFDQTtBQUNJQSxFQUFBQSxNQUFNLEVBQU5BLE1BSlc7O0FBS1g7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLEdBQUcsRUFBSEEsR0FSVzs7QUFTWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsT0FBTyxFQUFQQTtBQVpXLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gXCIuL2NvbW1vblwiXHJcbmltcG9ydCAqIGFzIHVybCBmcm9tIFwiLi91cmxcIlxyXG5pbXBvcnQgKiBhcyBicm93c2VyIGZyb20gXCIuL2Jyb3dzZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhazlhbHnmoTmlbDmja7moKHpqoxcclxuICAgICAqL1xyXG4gICAgY29tbW9uLFxyXG4gICAgLyoqXHJcbiAgICAgKiB1cmznm7jlhbPnmoTmoKHpqoxcclxuICAgICAqL1xyXG4gICAgdXJsLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmtY/op4jlmajnm7jlhbPmoKHpqoxcclxuICAgICAqL1xyXG4gICAgYnJvd3NlclxyXG59XHJcbiJdfQ==