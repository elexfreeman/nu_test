"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _BaseDB2 = _interopRequireDefault(require("./BaseDB"));

var ClientDB =
/*#__PURE__*/
function (_BaseDB) {
  (0, _inherits2["default"])(ClientDB, _BaseDB);

  function ClientDB() {
    (0, _classCallCheck2["default"])(this, ClientDB);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClientDB).apply(this, arguments));
  }

  return ClientDB;
}(_BaseDB2["default"]);

exports["default"] = ClientDB;