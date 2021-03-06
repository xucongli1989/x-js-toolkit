"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toEntity = toEntity;
exports.parse = parse;

var _data = require("../common/data");

/**
 * 返回时间实体对象
 */
function toEntity(dt) {
  var model = {};
  model.year = dt.getFullYear();
  model.month = dt.getMonth() + 1;
  model.day = dt.getDate();
  model.hour = dt.getHours();
  model.min = dt.getMinutes();
  model.second = dt.getSeconds();
  model.millisecond = dt.getMilliseconds();
  model.week = dt.getDay();
  return model;
}
/**
* 将字符串"/Date(...)/"的日期转为js Date对象
* @param dateStr date字符串，如"/Date(1441036800000)/"
* @returns 如果转换成功，则返回Date对象，否则返回null
*/


function parse(dateStr) {
  if (!dateStr || !(0, _data.isString)(dateStr)) {
    return null;
  }

  var date = null;
  var mts = dateStr.match(/(\/Date\((\d+)\)\/)/);

  if (mts && mts.length >= 3) {
    date = new Date(parseInt(mts[2]));
  }

  if (!(0, _data.isDate)(date)) {
    return null;
  }

  return date;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlL2NvbnZlcnQudHMiXSwibmFtZXMiOlsidG9FbnRpdHkiLCJkdCIsIm1vZGVsIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW4iLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxpc2Vjb25kIiwiZ2V0TWlsbGlzZWNvbmRzIiwid2VlayIsImdldERheSIsInBhcnNlIiwiZGF0ZVN0ciIsImRhdGUiLCJtdHMiLCJtYXRjaCIsImxlbmd0aCIsIkRhdGUiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxRQUFULENBQWtCQyxFQUFsQixFQUFnRDtBQUNuRCxNQUFNQyxLQUFLLEdBQUcsRUFBZDtBQUNBQSxFQUFBQSxLQUFLLENBQUNDLElBQU4sR0FBYUYsRUFBRSxDQUFDRyxXQUFILEVBQWI7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRyxLQUFOLEdBQWNKLEVBQUUsQ0FBQ0ssUUFBSCxLQUFnQixDQUE5QjtBQUNBSixFQUFBQSxLQUFLLENBQUNLLEdBQU4sR0FBWU4sRUFBRSxDQUFDTyxPQUFILEVBQVo7QUFDQU4sRUFBQUEsS0FBSyxDQUFDTyxJQUFOLEdBQWFSLEVBQUUsQ0FBQ1MsUUFBSCxFQUFiO0FBQ0FSLEVBQUFBLEtBQUssQ0FBQ1MsR0FBTixHQUFZVixFQUFFLENBQUNXLFVBQUgsRUFBWjtBQUNBVixFQUFBQSxLQUFLLENBQUNXLE1BQU4sR0FBZVosRUFBRSxDQUFDYSxVQUFILEVBQWY7QUFDQVosRUFBQUEsS0FBSyxDQUFDYSxXQUFOLEdBQW9CZCxFQUFFLENBQUNlLGVBQUgsRUFBcEI7QUFDQWQsRUFBQUEsS0FBSyxDQUFDZSxJQUFOLEdBQWFoQixFQUFFLENBQUNpQixNQUFILEVBQWI7QUFDQSxTQUFPaEIsS0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU2lCLEtBQVQsQ0FBZUMsT0FBZixFQUE2QztBQUNoRCxNQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDLG9CQUFTQSxPQUFULENBQWpCLEVBQW9DO0FBQ2hDLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixPQUFPLENBQUNHLEtBQVIsQ0FBYyxxQkFBZCxDQUFaOztBQUNBLE1BQUlELEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxNQUFKLElBQWMsQ0FBekIsRUFBNEI7QUFDeEJILElBQUFBLElBQUksR0FBRyxJQUFJSSxJQUFKLENBQVNDLFFBQVEsQ0FBQ0osR0FBRyxDQUFDLENBQUQsQ0FBSixDQUFqQixDQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDLGtCQUFPRCxJQUFQLENBQUwsRUFBbUI7QUFDZixXQUFPLElBQVA7QUFDSDs7QUFDRCxTQUFPQSxJQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlVGltZUVudGl0eVR5cGUsIE1vbnRoVmFsdWVUeXBlLCBXZWVrVmFsdWVUeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2RhdGVcIlxyXG5pbXBvcnQgeyBpc0RhdGUsIGlzU3RyaW5nIH0gZnJvbSBcIi4uL2NvbW1vbi9kYXRhXCJcclxuXHJcbi8qKlxyXG4gKiDov5Tlm57ml7bpl7Tlrp7kvZPlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0VudGl0eShkdDogRGF0ZSk6IERhdGVUaW1lRW50aXR5VHlwZSB7XHJcbiAgICBjb25zdCBtb2RlbCA9IHt9IGFzIERhdGVUaW1lRW50aXR5VHlwZVxyXG4gICAgbW9kZWwueWVhciA9IGR0LmdldEZ1bGxZZWFyKClcclxuICAgIG1vZGVsLm1vbnRoID0gZHQuZ2V0TW9udGgoKSArIDEgYXMgTW9udGhWYWx1ZVR5cGVcclxuICAgIG1vZGVsLmRheSA9IGR0LmdldERhdGUoKVxyXG4gICAgbW9kZWwuaG91ciA9IGR0LmdldEhvdXJzKClcclxuICAgIG1vZGVsLm1pbiA9IGR0LmdldE1pbnV0ZXMoKVxyXG4gICAgbW9kZWwuc2Vjb25kID0gZHQuZ2V0U2Vjb25kcygpXHJcbiAgICBtb2RlbC5taWxsaXNlY29uZCA9IGR0LmdldE1pbGxpc2Vjb25kcygpXHJcbiAgICBtb2RlbC53ZWVrID0gZHQuZ2V0RGF5KCkgYXMgV2Vla1ZhbHVlVHlwZVxyXG4gICAgcmV0dXJuIG1vZGVsXHJcbn1cclxuXHJcbi8qKlxyXG4qIOWwhuWtl+espuS4slwiL0RhdGUoLi4uKS9cIueahOaXpeacn+i9rOS4umpzIERhdGXlr7nosaFcclxuKiBAcGFyYW0gZGF0ZVN0ciBkYXRl5a2X56ym5Liy77yM5aaCXCIvRGF0ZSgxNDQxMDM2ODAwMDAwKS9cIlxyXG4qIEByZXR1cm5zIOWmguaenOi9rOaNouaIkOWKn++8jOWImei/lOWbnkRhdGXlr7nosaHvvIzlkKbliJnov5Tlm55udWxsXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShkYXRlU3RyOiBzdHJpbmcpOiBEYXRlIHwgbnVsbCB7XHJcbiAgICBpZiAoIWRhdGVTdHIgfHwgIWlzU3RyaW5nKGRhdGVTdHIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCBkYXRlID0gbnVsbFxyXG4gICAgY29uc3QgbXRzID0gZGF0ZVN0ci5tYXRjaCgvKFxcL0RhdGVcXCgoXFxkKylcXClcXC8pLylcclxuICAgIGlmIChtdHMgJiYgbXRzLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KG10c1syXSkpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzRGF0ZShkYXRlKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZVxyXG59Il19