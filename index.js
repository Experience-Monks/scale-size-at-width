module.exports = function (valueAtBaseWidth, baseWidth, limits) {

  var windowWidth = window.innerWidth;
  var limitWidth;

  if (limits.minScaleWidth && windowWidth < limits.minScaleWidth) {
    limitWidth = limits.minScaleWidth;
  } else if (limits.maxScaleWidth && windowWidth > limits.maxScaleWidth) {
    limitWidth = limits.maxScaleWidth;
  }

  return valueAtBaseWidth / baseWidth * (limitWidth || windowWidth);
};