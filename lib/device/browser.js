"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size = size;
exports.getWidthType = getWidthType;
exports.BrowserWidthTypeEnum = void 0;

var _lib = require("../common/lib");

/**
 * 浏览器宽度类别枚举
 */
var BrowserWidthTypeEnum;
/**
 * 获取当前浏览器窗口的大小，如：{"width": 1024,"height": 768}
 */

exports.BrowserWidthTypeEnum = BrowserWidthTypeEnum;

(function (BrowserWidthTypeEnum) {
  BrowserWidthTypeEnum["ExtraSmall"] = "ExtraSmall";
  BrowserWidthTypeEnum["Small"] = "Small";
  BrowserWidthTypeEnum["Medium"] = "Medium";
  BrowserWidthTypeEnum["Large"] = "Large";
  BrowserWidthTypeEnum["ExtraLarge"] = "ExtraLarge";
})(BrowserWidthTypeEnum || (exports.BrowserWidthTypeEnum = BrowserWidthTypeEnum = {}));

function size() {
  return {
    width: _lib.globalObject.innerWidth || _lib.document.documentElement.clientWidth || _lib.document.body.clientWidth,
    height: _lib.globalObject.innerHeight || _lib.document.documentElement.clientHeight || _lib.document.body.clientHeight
  };
}
/**
 * 返回当前浏览器窗口的宽度类型
 */


function getWidthType() {
  var _size = size(),
      width = _size.width;

  if (width < 576) {
    return BrowserWidthTypeEnum.ExtraSmall;
  }

  if (width >= 576 && width < 768) {
    return BrowserWidthTypeEnum.Small;
  }

  if (width >= 768 && width < 992) {
    return BrowserWidthTypeEnum.Medium;
  }

  if (width >= 992 && width < 1200) {
    return BrowserWidthTypeEnum.Large;
  }

  return BrowserWidthTypeEnum.ExtraLarge;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXZpY2UvYnJvd3Nlci50cyJdLCJuYW1lcyI6WyJCcm93c2VyV2lkdGhUeXBlRW51bSIsInNpemUiLCJ3aWR0aCIsImdsb2JhbE9iamVjdCIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm9keSIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZ2V0V2lkdGhUeXBlIiwiRXh0cmFTbWFsbCIsIlNtYWxsIiwiTWVkaXVtIiwiTGFyZ2UiLCJFeHRyYUxhcmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7SUFDWUEsb0I7QUF1Qlo7QUFDQTtBQUNBOzs7O1dBekJZQSxvQjtBQUFBQSxFQUFBQSxvQjtBQUFBQSxFQUFBQSxvQjtBQUFBQSxFQUFBQSxvQjtBQUFBQSxFQUFBQSxvQjtBQUFBQSxFQUFBQSxvQjtHQUFBQSxvQixvQ0FBQUEsb0I7O0FBMEJMLFNBQVNDLElBQVQsR0FBbUQ7QUFDdEQsU0FBTztBQUNIQyxJQUFBQSxLQUFLLEVBQVdDLGlCQUFULENBQXVCQyxVQUF2QixJQUFxQ0MsY0FBU0MsZUFBVCxDQUF5QkMsV0FBOUQsSUFBNkVGLGNBQVNHLElBQVQsQ0FBY0QsV0FEL0Y7QUFFSEUsSUFBQUEsTUFBTSxFQUFXTixpQkFBVCxDQUF1Qk8sV0FBdkIsSUFBc0NMLGNBQVNDLGVBQVQsQ0FBeUJLLFlBQS9ELElBQStFTixjQUFTRyxJQUFULENBQWNHO0FBRmxHLEdBQVA7QUFJSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsWUFBVCxHQUE4QztBQUFBLGNBQy9CWCxJQUFJLEVBRDJCO0FBQUEsTUFDekNDLEtBRHlDLFNBQ3pDQSxLQUR5Qzs7QUFFakQsTUFBSUEsS0FBSyxHQUFHLEdBQVosRUFBaUI7QUFDYixXQUFPRixvQkFBb0IsQ0FBQ2EsVUFBNUI7QUFDSDs7QUFDRCxNQUFJWCxLQUFLLElBQUksR0FBVCxJQUFnQkEsS0FBSyxHQUFHLEdBQTVCLEVBQWlDO0FBQzdCLFdBQU9GLG9CQUFvQixDQUFDYyxLQUE1QjtBQUNIOztBQUNELE1BQUlaLEtBQUssSUFBSSxHQUFULElBQWdCQSxLQUFLLEdBQUcsR0FBNUIsRUFBaUM7QUFDN0IsV0FBT0Ysb0JBQW9CLENBQUNlLE1BQTVCO0FBQ0g7O0FBQ0QsTUFBSWIsS0FBSyxJQUFJLEdBQVQsSUFBZ0JBLEtBQUssR0FBRyxJQUE1QixFQUFrQztBQUM5QixXQUFPRixvQkFBb0IsQ0FBQ2dCLEtBQTVCO0FBQ0g7O0FBQ0QsU0FBT2hCLG9CQUFvQixDQUFDaUIsVUFBNUI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdsb2JhbE9iamVjdCwgZG9jdW1lbnQgfSBmcm9tIFwiLi4vY29tbW9uL2xpYlwiXHJcblxyXG4vKipcclxuICog5rWP6KeI5Zmo5a695bqm57G75Yir5p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBCcm93c2VyV2lkdGhUeXBlRW51bSB7XHJcbiAgICAvKipcclxuICAgICAqIOmdnuW4uOWwj++8iDw1NzZweO+8iVxyXG4gICAgICovXHJcbiAgICBcIkV4dHJhU21hbGxcIiA9IFwiRXh0cmFTbWFsbFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlsI/vvIjiiaU1NzZweCDkuJQgPDc2OHB477yJXHJcbiAgICAgKi9cclxuICAgIFwiU21hbGxcIiA9IFwiU21hbGxcIixcclxuICAgIC8qKlxyXG4gICAgICog5Lit77yI4omlNzY4cHgg5LiUIDw5OTJweO+8iVxyXG4gICAgICovXHJcbiAgICBcIk1lZGl1bVwiID0gXCJNZWRpdW1cIixcclxuICAgIC8qKlxyXG4gICAgICog5aSn77yI4omlOTkycHgg5LiUIDwxMjAwcHjvvIlcclxuICAgICAqL1xyXG4gICAgXCJMYXJnZVwiID0gXCJMYXJnZVwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDpnZ7luLjlpKfvvIjiiaUxMjAwcHjvvIlcclxuICAgICAqL1xyXG4gICAgXCJFeHRyYUxhcmdlXCIgPSBcIkV4dHJhTGFyZ2VcIlxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5b2T5YmN5rWP6KeI5Zmo56qX5Y+j55qE5aSn5bCP77yM5aaC77yae1wid2lkdGhcIjogMTAyNCxcImhlaWdodFwiOiA3Njh9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2l6ZSgpOiB7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogKDxXaW5kb3c+Z2xvYmFsT2JqZWN0KS5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogKDxXaW5kb3c+Z2xvYmFsT2JqZWN0KS5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDov5Tlm57lvZPliY3mtY/op4jlmajnqpflj6PnmoTlrr3luqbnsbvlnotcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXaWR0aFR5cGUoKTogQnJvd3NlcldpZHRoVHlwZUVudW0ge1xyXG4gICAgY29uc3QgeyB3aWR0aCB9ID0gc2l6ZSgpXHJcbiAgICBpZiAod2lkdGggPCA1NzYpIHtcclxuICAgICAgICByZXR1cm4gQnJvd3NlcldpZHRoVHlwZUVudW0uRXh0cmFTbWFsbFxyXG4gICAgfVxyXG4gICAgaWYgKHdpZHRoID49IDU3NiAmJiB3aWR0aCA8IDc2OCkge1xyXG4gICAgICAgIHJldHVybiBCcm93c2VyV2lkdGhUeXBlRW51bS5TbWFsbFxyXG4gICAgfVxyXG4gICAgaWYgKHdpZHRoID49IDc2OCAmJiB3aWR0aCA8IDk5Mikge1xyXG4gICAgICAgIHJldHVybiBCcm93c2VyV2lkdGhUeXBlRW51bS5NZWRpdW1cclxuICAgIH1cclxuICAgIGlmICh3aWR0aCA+PSA5OTIgJiYgd2lkdGggPCAxMjAwKSB7XHJcbiAgICAgICAgcmV0dXJuIEJyb3dzZXJXaWR0aFR5cGVFbnVtLkxhcmdlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gQnJvd3NlcldpZHRoVHlwZUVudW0uRXh0cmFMYXJnZVxyXG59Il19