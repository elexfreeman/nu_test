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
    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
    this.add = this.add.bind(this);
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
     * get route
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var res;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", res);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
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
                return _context3.abrupt("return", res);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function add() {
        return _add.apply(this, arguments);
      }

      return add;
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
      _regenerator["default"].mark(function _callee4(req) {
        var self;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = new ProviderControler(req);
                /* important place */

                /* here we can insert some async code */

                return _context4.abrupt("return", self);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
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
  _regenerator["default"].mark(function _callee5(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return ProviderControler.init(req);

          case 2:
            self = _context5.sent;
            _context5.t0 = res;
            _context5.next = 6;
            return self.list();

          case 6:
            _context5.t1 = _context5.sent;

            _context5.t0.json.call(_context5.t0, _context5.t1);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
/**
 * get client by id
 */

router.get('/provider/:id',
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(req, res, next) {
    var self, data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return ProviderControler.init(req);

          case 2:
            self = _context6.sent;
            _context6.next = 5;
            return self.get();

          case 5:
            data = _context6.sent;

            if (!data) {
              res.status(404).json({
                "errors": [{
                  "userNotFound": true
                }]
              });
            } else {
              res.json(data);
            }

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}());
/**
 * add new client
 */

router.post('/provider',
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
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
                  "some wrong": true
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

  return function (_x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}());