"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _BaseDB2 = _interopRequireDefault(require("./BaseDB"));

/**
 * work with providers table
 */
var ProviderDB =
/*#__PURE__*/
function (_BaseDB) {
  (0, _inherits2["default"])(ProviderDB, _BaseDB);

  function ProviderDB() {
    (0, _classCallCheck2["default"])(this, ProviderDB);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ProviderDB).call(this));
  }

  (0, _createClass2["default"])(ProviderDB, [{
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(data) {
        var res, insertData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = true;
                insertData = {};
                _context.prev = 2;

                if (data.client_id) {
                  _context.next = 5;
                  break;
                }

                throw 'empty client_id';

              case 5:
                if (data.provider_id) {
                  _context.next = 7;
                  break;
                }

                throw 'empty provider_id';

              case 7:
                insertData = {
                  client_id: data.client_id,
                  provider_id: data.provider_id
                };
                _context.next = 10;
                return this.db('client_providers').insert(insertData);

              case 10:
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);
                res = false;

              case 16:
                return _context.abrupt("return", res);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12]]);
      }));

      function add(_x) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(data) {
        var res, deleteData;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res = true;
                deleteData = {};
                _context2.prev = 2;

                if (data.client_id) {
                  _context2.next = 5;
                  break;
                }

                throw 'empty client_id';

              case 5:
                if (data.provider_id) {
                  _context2.next = 7;
                  break;
                }

                throw 'empty provider_id';

              case 7:
                deleteData = {
                  client_id: data.client_id,
                  provider_id: data.provider_id
                };
                _context2.next = 10;
                return this.db('client_providers').where(deleteData).del();

              case 10:
                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](2);
                console.log(_context2.t0);
                res = false;

              case 16:
                return _context2.abrupt("return", res);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 12]]);
      }));

      function _delete(_x2) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return ProviderDB;
}(_BaseDB2["default"]);

exports["default"] = ProviderDB;