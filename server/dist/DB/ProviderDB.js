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
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var res, sql;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sql = 'SELECT * FROM provider p order by p.`name`;';
                _context.prev = 1;
                _context.next = 4;
                return this.db.raw(sql, {});

              case 4:
                res = _context.sent[0];
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 10:
                return _context.abrupt("return", res);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function list() {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(provider) {
        var res, insertData;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res = 0;
                insertData = {};
                _context2.prev = 2;

                if (provider) {
                  _context2.next = 5;
                  break;
                }

                throw 'empty provider';

              case 5:
                if (provider.name) {
                  insertData['name'] = provider.name;
                }

                _context2.next = 8;
                return this.db('provider').insert(insertData);

              case 8:
                res = _context2.sent[0];
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](2);
                console.log(_context2.t0);

              case 14:
                return _context2.abrupt("return", res);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 11]]);
      }));

      function add(_x) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(provider) {
        var res, updateData;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                res = true;
                updateData = {};
                _context3.prev = 2;

                if (provider) {
                  _context3.next = 5;
                  break;
                }

                throw 'empty provider';

              case 5:
                if (provider.id) {
                  _context3.next = 7;
                  break;
                }

                throw 'empty id';

              case 7:
                if (provider.name) {
                  updateData['name'] = provider.name;
                }

                _context3.next = 10;
                return this.db('provider').where({
                  id: provider.id
                }).update(updateData);

              case 10:
                res = _context3.sent;
                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](2);
                console.log(_context3.t0);
                res = false;

              case 17:
                return _context3.abrupt("return", res);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 13]]);
      }));

      function update(_x2) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);
  return ProviderDB;
}(_BaseDB2["default"]);

exports["default"] = ProviderDB;