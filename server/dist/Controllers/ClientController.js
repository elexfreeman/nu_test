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

var express = require('express');

var router = express.Router();
exports.router = router;

var ClientControler =
/*#__PURE__*/
function () {
  function ClientControler(req) {
    (0, _classCallCheck2["default"])(this, ClientControler);
    this.req = req;
    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
  }

  (0, _createClass2["default"])(ClientControler, [{
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
                return _context.abrupt("return", res);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", null);

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
  }], [{
    key: "init",

    /**
     * async constructor
     * @param {*} req  - express reques fnc
     */
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req) {
        var self;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = new ClientControler(req);
                /* important place */

                /* here we can insert some async code */

                return _context3.abrupt("return", self);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);
  return ClientControler;
}();
/**
 * list clients
 */


router.get('/client/list',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context4.sent;
            _context4.t0 = res;
            _context4.next = 6;
            return self.list();

          case 6:
            _context4.t1 = _context4.sent;

            _context4.t0.json.call(_context4.t0, _context4.t1);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
/**
 * get client by id
 */

router.get('/client/:id',
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context5.sent;
            _context5.t0 = res;
            _context5.next = 6;
            return self.get();

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

  return function (_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}());