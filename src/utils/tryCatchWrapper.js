// D:\binmile-assignmant\URL_SHORTNER-master\URL_SHORTNER-master\BACKEND\src\utils\tryCatchWrapper.js
export default function wrapAsync(fn) {
    return function (req, res, next) {
      fn(req, res, next).catch(next);
    };
  };