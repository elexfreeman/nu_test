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

var ClientDB =
/*#__PURE__*/
function (_BaseDB) {
  (0, _inherits2["default"])(ClientDB, _BaseDB);

  function ClientDB() {
    (0, _classCallCheck2["default"])(this, ClientDB);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClientDB).call(this));
  }

  (0, _createClass2["default"])(ClientDB, [{
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(offset, limit, search) {
        var res, sql;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sql = 'SELECT * FROM clients c WHERE c.`name` LIKE :search order by c.`name` LIMIT :offset , :limit ;';
                _context.prev = 1;
                _context.next = 4;
                return this.db.raw(sql, {
                  offset: offset,
                  limit: limit,
                  search: '%' + search + '%'
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

      function list(_x, _x2, _x3) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(clientId) {
        var res, sql;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sql = 'SELECT * FROM clients c WHERE c.`id`= :clientId LIMIT 1;';
                _context2.prev = 1;
                _context2.next = 4;
                return this.db.raw(sql, {
                  clientId: clientId
                });

              case 4:
                res = _context2.sent[0][0];
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 10:
                return _context2.abrupt("return", res);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7]]);
      }));

      function get(_x4) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "getProviders",
    value: function () {
      var _getProviders = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(clientId) {
        var res, sql;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sql = 'SELECT * FROM client_providers c WHERE c.`client_id`= :clientId;';
                _context3.prev = 1;
                _context3.next = 4;
                return this.db.raw(sql, {
                  clientId: clientId
                });

              case 4:
                res = _context3.sent[0];
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);

              case 10:
                return _context3.abrupt("return", res);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 7]]);
      }));

      function getProviders(_x5) {
        return _getProviders.apply(this, arguments);
      }

      return getProviders;
    }()
    /**
     * add client to db
     * @param {*} client 
     */

  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(client) {
        var res, insertData;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                res = 0;
                insertData = {};
                _context4.prev = 2;

                if (client) {
                  _context4.next = 5;
                  break;
                }

                throw 'empty client';

              case 5:
                if (client.name) {
                  insertData['name'] = client.name;
                }

                if (client.email) {
                  insertData['email'] = client.email;
                }

                if (client.phone) {
                  insertData['phone'] = client.phone;
                }

                _context4.next = 10;
                return this.db('clients').insert(insertData);

              case 10:
                res = _context4.sent[0];
                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](2);
                console.log(_context4.t0);

              case 16:
                return _context4.abrupt("return", res);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 13]]);
      }));

      function add(_x6) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
    /**
     * update client data
     * requre client.id
     * @param {*} client 
     */

  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(client) {
        var res, updateData;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                res = true;
                updateData = {};
                _context5.prev = 2;

                if (client) {
                  _context5.next = 5;
                  break;
                }

                throw 'empty client';

              case 5:
                if (client.id) {
                  _context5.next = 7;
                  break;
                }

                throw 'empty id';

              case 7:
                if (client.name) {
                  updateData['name'] = client.name;
                }

                if (client.email) {
                  updateData['email'] = client.email;
                }

                if (client.phone) {
                  updateData['phone'] = client.phone;
                }

                _context5.next = 12;
                return this.db('clients').where({
                  id: client.id
                }).update(updateData);

              case 12:
                res = _context5.sent;
                _context5.next = 19;
                break;

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](2);
                console.log(_context5.t0);
                res = false;

              case 19:
                return _context5.abrupt("return", res);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 15]]);
      }));

      function update(_x7) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
    /**
     * Delete client from DB
     * @param {number} clientId 
     */

  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(clientId) {
        var res, deleteData;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                res = true;
                deleteData = {};
                _context6.prev = 2;
                deleteData = {
                  id: clientId
                };
                _context6.next = 6;
                return this.db('clients').where(deleteData).del();

              case 6:
                _context6.next = 12;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](2);
                console.log(_context6.t0);
                res = false;

              case 12:
                return _context6.abrupt("return", res);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 8]]);
      }));

      function remove(_x8) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }]);
  return ClientDB;
}(_BaseDB2["default"]);

exports["default"] = ClientDB;