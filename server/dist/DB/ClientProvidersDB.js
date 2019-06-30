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
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(clientId) {
        var res, sql;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sql = 'SELECT cp.provider_id id FROM client_providers cp WHERE cp.client_id = :clientId ;';
                _context.prev = 1;
                _context.next = 4;
                return this.db.raw(sql, {
                  clientId: clientId
                });

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

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(data) {
        var res, insertData;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res = true;
                insertData = {};
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
                insertData = {
                  client_id: data.client_id,
                  provider_id: data.provider_id
                };
                _context2.next = 10;
                return this.db('client_providers').insert(insertData);

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

      function add(_x2) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "deleteByClientId",
    value: function () {
      var _deleteByClientId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(clientId) {
        var res, deleteData;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                res = true;
                deleteData = {};
                _context3.prev = 2;
                deleteData = {
                  client_id: clientId
                };
                _context3.next = 6;
                return this.db('client_providers').where(deleteData).del();

              case 6:
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](2);
                console.log(_context3.t0);
                res = false;

              case 12:
                return _context3.abrupt("return", res);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 8]]);
      }));

      function deleteByClientId(_x3) {
        return _deleteByClientId.apply(this, arguments);
      }

      return deleteByClientId;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(data) {
        var res, deleteData;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                res = true;
                deleteData = {};
                _context4.prev = 2;

                if (data.client_id) {
                  _context4.next = 5;
                  break;
                }

                throw 'empty client_id';

              case 5:
                if (data.provider_id) {
                  _context4.next = 7;
                  break;
                }

                throw 'empty provider_id';

              case 7:
                deleteData = {
                  client_id: data.client_id,
                  provider_id: data.provider_id
                };
                _context4.next = 10;
                return this.db('client_providers').where(deleteData).del();

              case 10:
                _context4.next = 16;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](2);
                console.log(_context4.t0);
                res = false;

              case 16:
                return _context4.abrupt("return", res);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 12]]);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return ProviderDB;
}(_BaseDB2["default"]);

exports["default"] = ProviderDB;