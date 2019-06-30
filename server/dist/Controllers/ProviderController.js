"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ProviderDB = _interopRequireDefault(require("../DB/ProviderDB"));

var express = require('express');

var router = express.Router();
exports.router = router;

var ProviderControler =
/*#__PURE__*/
function () {
  function ProviderControler(req) {
    (0, _classCallCheck2["default"])(this, ProviderControler);
    this.req = req;
    this.providerDB = new _ProviderDB["default"]();
  }

  (0, _createClass2["default"])(ProviderControler, [{
    key: "list",

    /**
     * list route
     */
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = [];
                _context.prev = 1;
                _context.next = 4;
                return this.providerDB.list();

              case 4:
                res = _context.sent;
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
    /**
     * delete route
     */

  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var res;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.providerDB.remove(parseInt(this.req.params.id));

              case 3:
                res = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 9:
                return _context2.abrupt("return", res);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function remove() {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
    /**
     * add new POST-route
     */

  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var res;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.providerDB.add(this.req.body);

              case 3:
                res = _context3.sent;
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 9:
                return _context3.abrupt("return", res);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function add() {
        return _add.apply(this, arguments);
      }

      return add;
    }()
    /**
     * add new POST-route
     */

  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var res, providerId, data;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                providerId = parseInt(this.req.params.id);
                _context4.prev = 1;
                data = this.req.body;
                data['id'] = providerId;
                _context4.next = 6;
                return this.providerDB.update(data);

              case 6:
                res = _context4.sent;
                console.log('res', res);
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](1);
                console.log(_context4.t0);

              case 13:
                return _context4.abrupt("return", res);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 10]]);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }], [{
    key: "init",

    /**
     * async constructor
     * @param {*} req  - express reques fnc
     */
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req) {
        var self;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                self = new ProviderControler(req);
                /* important place */

                /* here we can insert some async code */

                return _context5.abrupt("return", self);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);
  return ProviderControler;
}();
/**
 * list providers
 */


router.get('/provider/list',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return ProviderControler.init(req);

          case 2:
            self = _context6.sent;
            _context6.t0 = res;
            _context6.next = 6;
            return self.list();

          case 6:
            _context6.t1 = _context6.sent;

            _context6.t0.json.call(_context6.t0, _context6.t1);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
/**
 * add new provider
 */

router.post('/provider',
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(req, res, next) {
    var self, data;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return ProviderControler.init(req);

          case 2:
            self = _context7.sent;
            _context7.next = 5;
            return self.add();

          case 5:
            data = _context7.sent;

            if (!data) {
              res.status(404).json({
                "errors": [{
                  "emptyName": true
                }]
              });
            } else {
              res.json({
                id: data
              });
            }

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}());
/**
 * update provider
 */

router.put('/provider/:id',
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(req, res, next) {
    var self, data;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return ProviderControler.init(req);

          case 2:
            self = _context8.sent;
            _context8.next = 5;
            return self.update();

          case 5:
            data = _context8.sent;

            if (!data) {
              res.status(404).json({
                done: false,
                "errors": [{
                  "some wrong": true
                }]
              });
            } else {
              res.json({
                done: true
              });
            }

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}());
router["delete"]('/provider/:id',
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return ProviderControler.init(req);

          case 2:
            self = _context9.sent;
            _context9.next = 5;
            return self.remove();

          case 5:
            res.json({
              done: true
            });

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x11, _x12, _x13) {
    return _ref4.apply(this, arguments);
  };
}());